"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  FolderTree,
  BookOpen,
  Library,
  BookCopy,
  ListTree,
  Video,
  FileText,
  File,
  ClipboardCheck,
  Users,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Categories",
    href: "/admin/categories",
    icon: FolderTree,
  },
  {
    title: "Courses",
    href: "/admin/courses",
    icon: BookOpen,
  },
  {
    title: "Subjects",
    href: "/admin/subjects",
    icon: Library,
  },
  {
    title: "Chapters",
    href: "/admin/chapters",
    icon: BookCopy,
  },
  {
    title: "Topics",
    href: "/admin/topics",
    icon: ListTree,
  },
  {
    title: "Videos",
    href: "/admin/videos",
    icon: Video,
  },
  {
    title: "Notes",
    href: "/admin/notes",
    icon: FileText,
  },
  {
    title: "PDFs",
    href: "/admin/pdfs",
    icon: File,
  },
  {
    title: "Tests",
    href: "/admin/tests",
    icon: ClipboardCheck,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col">

      <div className="p-6 border-b border-slate-800">

        <h1 className="text-3xl font-bold text-white">
          LearnHub
        </h1>

        <p className="text-slate-400 text-sm">
          India Admin
        </p>

      </div>

      <nav className="flex-1 p-4 space-y-2">

        {menu.map((item) => {

          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition
              ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={20} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}