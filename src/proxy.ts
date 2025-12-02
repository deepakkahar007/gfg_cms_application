import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export default auth((req) => {
  const { nextUrl, auth } = req;

  if (nextUrl.pathname.startsWith("/admin")) {
    if (!req.url) {
      return NextResponse.redirect(new URL("/login", nextUrl.origin));
    }

    const adminEmail = process.env.ADMIN_EMAIL as string;
    if (auth?.user?.email !== adminEmail) {
      return NextResponse.redirect(new URL("/login", nextUrl.origin));
    }
  }
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
