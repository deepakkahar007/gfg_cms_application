import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { type ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
