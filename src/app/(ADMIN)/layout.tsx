import { AdminSidebar } from "@/components/AdminSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { type ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <div className="container mx-auto px-6 pt-4">
        <SidebarTrigger />
        {children}
      </div>
    </SidebarProvider>
  );
}
