import { NextTheme } from "@/components/NextTheme";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const monteserrat = Montserrat({
  variable: "--font-monteserrat-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CMS Application",
  description: "A demo CMS application top learn and build",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${monteserrat.variable} antialiased`}>
        <NextTheme
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>{children}</SessionProvider>
          <Toaster />
        </NextTheme>
      </body>
    </html>
  );
}
