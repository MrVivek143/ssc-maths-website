import { Sparkles, PlayCircle } from "lucide-react";

export default function FeaturedBanner() {
  return (
    <section className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-10 shadow-2xl">

      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

        <div>
          <div className="mb-4 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
            <Sparkles className="mr-2 h-4 w-4" />
            Featured Course
          </div>

          <h2 className="max-w-2xl text-4xl font-extrabold text-white">
            Complete SSC Maths Batch 2027
          </h2>

          <p className="mt-4 max-w-xl text-lg text-blue-100">
            Complete Theory, PYQs, Practice Sets, Short Tricks and Mock Tests —
            everything in one place.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105">
              Enroll Now
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 text-white transition hover:bg-white/10">
              <PlayCircle size={20} />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-md">
            <div className="text-6xl">📚</div>

            <p className="mt-4 text-center text-white">
              SSC Maths Premium
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}