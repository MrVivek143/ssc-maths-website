export default function Hero() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-10 border border-slate-700 shadow-2xl">

      <h1 className="text-5xl font-extrabold text-white">
        LearnHub India
      </h1>

      <p className="mt-5 text-xl text-gray-300 max-w-2xl">
        India's Most Powerful Learning Platform for
        School, SSC, Railway, Banking and Competitive Exams.
      </p>

      <div className="mt-8 flex gap-4">

        <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
          Start Learning
        </button>

        <button className="px-6 py-3 rounded-xl border border-slate-600 hover:border-blue-500 text-white transition">
          Explore Courses
        </button>

      </div>

    </section>
  );
}