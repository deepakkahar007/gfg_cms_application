import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
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
