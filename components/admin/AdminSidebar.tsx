"use client";

import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 min-h-screen p-6">

      <h1 className="text-3xl font-bold text-white mb-8">
        LearnHub India
      </h1>

      <nav className="space-y-3">

        <Link href="/admin" className="block text-slate-300 hover:text-white">
          Dashboard
        </Link>

        <Link href="/admin/categories" className="block text-slate-300 hover:text-white">
          Categories
        </Link>

        <Link href="/admin/courses" className="block text-slate-300 hover:text-white">
          Courses
        </Link>

        <Link href="/admin/subjects" className="block text-slate-300 hover:text-white">
          Subjects
        </Link>

        <Link href="/admin/chapters" className="block text-slate-300 hover:text-white">
          Chapters
        </Link>

        <Link href="/admin/topics" className="block text-slate-300 hover:text-white">
          Topics
        </Link>

        <Link href="/admin/videos" className="block text-slate-300 hover:text-white">
          Videos
        </Link>

        <Link href="/admin/notes" className="block text-slate-300 hover:text-white">
          Notes
        </Link>

        <Link href="/admin/pdfs" className="block text-slate-300 hover:text-white">
          PDFs
        </Link>

        <Link href="/admin/tests" className="block text-slate-300 hover:text-white">
          Tests
        </Link>

        <Link href="/admin/users" className="block text-slate-300 hover:text-white">
          Users
        </Link>

        <Link href="/admin/settings" className="block text-slate-300 hover:text-white">
          Settings
        </Link>

      </nav>

    </aside>
  );
}