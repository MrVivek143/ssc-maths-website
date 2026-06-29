import Link from "next/link";
import {
  House,
  GraduationCap,
  Trophy,
  Train,
  Landmark,
  Bookmark,
  Settings,
} from "lucide-react";

const menu = [
  { title: "Home", href: "/", icon: House },
  { title: "School", href: "/school", icon: GraduationCap },
  { title: "SSC", href: "/ssc", icon: Trophy },
  { title: "Railway", href: "/railway", icon: Train },
  { title: "Banking", href: "/banking", icon: Landmark },
  { title: "Saved", href: "/saved", icon: Bookmark },
  { title: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 flex-col rounded-3xl border border-slate-700 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-bold text-white">
        Dashboard
      </h2>

      <nav className="space-y-3">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
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