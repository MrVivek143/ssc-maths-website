import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="mx-auto flex max-w-7xl gap-6 px-6 py-8">

        <Sidebar />

        <div className="flex-1">

          {children}

        </div>

      </div>

    </main>
  );
}