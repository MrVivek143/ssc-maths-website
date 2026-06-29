import Link from "next/link";
import { GraduationCap, Trophy, Train, Landmark } from "lucide-react";

const categories = [
  {
    title: "School",
    description: "Class 6 to Class 12",
    href: "/school",
    icon: GraduationCap,
  },
  {
    title: "SSC",
    description: "CGL • CHSL • MTS • GD",
    href: "/ssc",
    icon: Trophy,
  },
  {
    title: "Railway",
    description: "RRB NTPC • Group D",
    href: "/railway",
    icon: Train,
  },
  {
    title: "Banking",
    description: "IBPS • SBI • RBI",
    href: "/banking",
    icon: Landmark,
  },
];

export default function Categories() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-white mb-8">
        Choose Your Learning Path
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <Link key={item.title} href={item.href}>
              <div className="flex h-44 flex-col justify-between rounded-3xl border border-slate-700 bg-slate-900 p-8 transition hover:border-blue-500 transition-all hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl cursor-pointer">
                <Icon className="h-10 w-10 text-blue-400" />

                <h3 className="mt-4 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-400">
                  {item.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}