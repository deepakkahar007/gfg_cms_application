import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub, Google],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
});

// client side
// "use client";

// import { signIn } from "next-auth/react";

// export default function SignIn() {
//   return <button onClick={() => signIn("github")}></button>;
// }

// server side
// import { signIn } from "@/auth";

// export default function SignIn() {
//   return (
//     <form
//       action={async () => {
//         "use server";
//         await signIn("github");
//       }}
//     >
//       <button type="submit">Signin with GitHub</button>
//     </form>
//   );
// }
