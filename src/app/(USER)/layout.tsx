import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { UserSidebar } from "@/components/UserSidebar";
import { type ReactNode } from "react";

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <UserSidebar />
      <div className="container mx-auto px-6 pt-4">
        <SidebarTrigger />
        {children}
      </div>
    </SidebarProvider>
  );
}
