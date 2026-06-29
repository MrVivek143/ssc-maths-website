"use client";

import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-8">

      {/* Search */}

      <div className="relative w-full max-w-md">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search courses, notes, videos..."
          className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 text-white outline-none focus:border-blue-500"
        />

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-6">

        <button className="relative">

          <Bell
            size={24}
            className="text-slate-300 hover:text-white transition"
          />

          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
            V
          </div>

          <div>

            <p className="font-semibold text-white">
              Vivek
            </p>

            <p className="text-sm text-slate-400">
              Student
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}