"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  BookOpen,
  Video,
  FileText,
  ClipboardCheck,
  Download,
  User,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Courses",
    href: "/dashboard/courses",
    icon: BookOpen,
  },
  {
    title: "Videos",
    href: "/dashboard/videos",
    icon: Video,
  },
  {
    title: "Notes",
    href: "/dashboard/notes",
    icon: FileText,
  },
  {
    title: "Tests",
    href: "/dashboard/tests",
    icon: ClipboardCheck,
  },
  {
    title: "Downloads",
    href: "/dashboard/downloads",
    icon: Download,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
];

export default function Sidebar() {

  const pathname = usePathname();

  return (

    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col">

      <div className="p-8 border-b border-slate-800">

        <h1 className="text-3xl font-bold text-white">
          LearnHub
        </h1>

        <p className="text-slate-400 mt-1">
          India
        </p>

      </div>

      <nav className="flex-1 px-4 py-6">

        <ul className="space-y-2">

          {menuItems.map((item) => {

            const Icon = item.icon;

            const active = pathname === item.href;

            return (

              <li key={item.href}>

                <Link
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 transition

                  ${
                    active
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`}
                >

                  <Icon size={20} />

                  {item.title}

                </Link>

              </li>

            );

          })}

        </ul>

      </nav>

      <div className="border-t border-slate-800 p-4">

        <button
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-red-600 hover:text-white"
        >

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>

  );

}