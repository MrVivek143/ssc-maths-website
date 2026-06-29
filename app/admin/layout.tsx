import type { ReactNode } from "react";

import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-slate-950 flex">

      <AdminSidebar />

      <div className="flex-1 flex flex-col">

        <AdminNavbar />

        <div className="flex-1 p-8 overflow-y-auto">

          {children}

        </div>

      </div>

    </main>
  );
}