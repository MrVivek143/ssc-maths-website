import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

const courses = [
  {
    title: "Percentage",
    description: "Basic to Advanced",
    href: "/percentage",
  },
  {
    title: "Ratio & Proportion",
    description: "Complete Course",
    href: "/ratio",
  },
  {
    title: "Profit & Loss",
    description: "SSC Special",
    href: "/profit-loss",
  },
  {
    title: "Average",
    description: "Important Questions",
    href: "/average",
  },
  {
    title: "Simple Interest",
    description: "Concept + Practice",
    href: "/simple-interest",
  },
  {
    title: "Compound Interest",
    description: "Shortcut Tricks",
    href: "/compound-interest",
  },
];

export default function TrendingCourses() {
  return (
    <section className="mt-10">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold text-white">
          🔥 Trending Courses
        </h2>

        <Link
          href="/courses"
          className="text-blue-400 hover:text-blue-300 font-medium"
        >
          View All
        </Link>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {courses.map((course) => (
          <Link key={course.title} href={course.href}>

            <div className="group flex h-72 flex-col justify-between rounded-3xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl cursor-pointer">

              <div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                  <BookOpen className="text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {course.title}
                </h3>

                <p className="mt-2 text-slate-400">
                  {course.description}
                </p>

              </div>

              <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </div>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}