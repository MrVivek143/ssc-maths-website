import Link from "next/link";
import { PlayCircle, Clock, Eye } from "lucide-react";

const videos = [
  {
    title: "Percentage Complete Concept",
    teacher: "SSC Maths by Vivek",
    duration: "18 min",
    views: "52K",
    image: "https://placehold.co/600x350/2563eb/ffffff?text=Percentage",
    href: "/videos/percentage",
  },
  {
    title: "Ratio & Proportion Tricks",
    teacher: "SSC Maths by Vivek",
    duration: "24 min",
    views: "39K",
    image: "https://placehold.co/600x350/0f172a/ffffff?text=Ratio",
    href: "/videos/ratio",
  },
  {
    title: "Profit & Loss PYQs",
    teacher: "SSC Maths by Vivek",
    duration: "21 min",
    views: "41K",
    image: "https://placehold.co/600x350/1d4ed8/ffffff?text=Profit+Loss",
    href: "/videos/profit-loss",
  },
  {
    title: "Average Questions",
    teacher: "SSC Maths by Vivek",
    duration: "17 min",
    views: "27K",
    image: "https://placehold.co/600x350/1e293b/ffffff?text=Average",
    href: "/videos/average",
  },
];

export default function LatestVideos() {
  return (
    <section className="mt-14">

      <div className="flex items-center justify-between">

        <h2 className="text-3xl font-bold text-white">
          🎥 Latest Videos
        </h2>

        <Link
          href="/videos"
          className="text-blue-400 hover:text-blue-300"
        >
          View All
        </Link>

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {videos.map((video) => (

          <Link
            key={video.title}
            href={video.href}
          >

            <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">

              <img
                src={video.image}
                alt={video.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="font-bold text-white">
                  {video.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {video.teacher}
                </p>

                <div className="mt-5 flex justify-between text-sm text-slate-400">

                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {video.duration}
                  </span>

                  <span className="flex items-center gap-1">
                    <Eye size={16} />
                    {video.views}
                  </span>

                </div>

                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700">

                  <PlayCircle size={20} />

                  Watch Now

                </button>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}