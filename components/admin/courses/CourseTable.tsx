"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, Pencil, Trash2 } from "lucide-react";

import { getCourses } from "@/lib/course";

interface Course {
  id: string;
  name: string;
  slug: string;
  description: string;
  thumbnail: string;
  is_published: boolean;
  created_at: string;
  categories: {
    name: string;
  };
}

export default function CourseTable() {

  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {

    loadCourses();

  }, []);

  async function loadCourses() {

    try {

      const data = await getCourses();

      setCourses(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  const filteredCourses = useMemo(() => {

    return courses.filter((course) => {

      const keyword = search.toLowerCase();

      return (

        course.name.toLowerCase().includes(keyword) ||

        course.slug.toLowerCase().includes(keyword) ||

        course.categories?.name.toLowerCase().includes(keyword)

      );

    });

  }, [courses, search]);

  if (loading) {

    return (

      <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-10 text-center text-slate-400">

        Loading Courses...

      </div>

    );

  }

  return (

    <div className="mt-8 space-y-6">

      <div className="relative w-full max-w-md">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input

          value={search}

          onChange={(e) => setSearch(e.target.value)}

          placeholder="Search Courses..."

          className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-white outline-none focus:border-blue-500"

        />

      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-xl">

        <table className="w-full">

          <thead className="bg-slate-800">

            <tr>

              <th className="p-4 text-left text-white">

                Thumbnail

              </th>

              <th className="p-4 text-left text-white">

                Course

              </th>

              <th className="p-4 text-left text-white">

                Category

              </th>

              <th className="p-4 text-left text-white">

                Status

              </th>

              <th className="p-4 text-left text-white">

                Created

              </th>

              <th className="p-4 text-center text-white">

                Action

              </th>

            </tr>

          </thead>

          <tbody>

            {filteredCourses.length === 0 && (

              <tr>

                <td
                  colSpan={6}
                  className="p-10 text-center text-slate-400"
                >

                  No Courses Found

                </td>

              </tr>

            )}

            {filteredCourses.map((course) => (

              <tr
                key={course.id}
                className="border-t border-slate-700 hover:bg-slate-800/40 transition"
              >

                <td className="p-4">

                  <img

                    src={
                      course.thumbnail ||
                      "https://placehold.co/80x50?text=No+Image"
                    }

                    alt={course.name}

                    className="h-14 w-24 rounded-lg object-cover"

                  />

                </td>

                <td className="p-4">

                  <div>

                    <p className="font-semibold text-white">

                      {course.name}

                    </p>

                    <p className="text-sm text-slate-400">

                      {course.slug}

                    </p>

                  </div>

                </td>

                <td className="p-4 text-slate-300">

                  {course.categories?.name}

                </td>

                <td className="p-4">

                  {course.is_published ? (

                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">

                      Published

                    </span>

                  ) : (

                    <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-400">

                      Draft

                    </span>

                  )}

                </td>

                <td className="p-4 text-slate-400">

                  {new Date(course.created_at).toLocaleDateString()}

                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <button
                      className="rounded-lg bg-yellow-500 p-2 hover:bg-yellow-600 transition"
                    >

                      <Pencil
                        size={18}
                        className="text-white"
                      />

                    </button>

                    <button
                      className="rounded-lg bg-red-600 p-2 hover:bg-red-700 transition"
                    >

                      <Trash2
                        size={18}
                        className="text-white"
                      />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );

}