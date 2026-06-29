import { PlayCircle, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContinueLearning() {
  return (
    <section className="rounded-3xl border border-slate-700 bg-slate-900/70 p-8 backdrop-blur-xl">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-3xl font-bold text-white">
            Continue Learning
          </h2>

          <p className="mt-2 text-slate-400">
            Resume your last watched course.
          </p>
        </div>

        <Button className="rounded-xl">
          View All
        </Button>

      </div>

      <div className="mt-8 rounded-2xl bg-slate-800 p-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-blue-400">
              SSC Mathematics
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              Percentage Complete Course
            </h3>

            <div className="mt-4 flex items-center gap-5 text-slate-400">

              <div className="flex items-center gap-2">
                <Clock3 size={18} />
                45 min left
              </div>

              <div className="flex items-center gap-2">
                <PlayCircle size={18} />
                Lesson 8 / 25
              </div>

            </div>

          </div>

          <Button className="rounded-xl px-8">
            Continue
          </Button>

        </div>

        <div className="mt-6 h-3 rounded-full bg-slate-700">

          <div className="h-3 w-[38%] rounded-full bg-blue-500"></div>

        </div>

      </div>

    </section>
  );
}