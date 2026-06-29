export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="px-8 pt-10">

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-10 shadow-2xl">

          <h1 className="text-5xl font-bold">
            Welcome to LearnHub India 🚀
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-100">
            Learn everything in one place.
            School • SSC • Railway • Banking • UPSC • State PCS • Police • Defence • Skills
          </p>

          <div className="mt-8">

            <input
              type="text"
              placeholder="Search Courses, Videos, Notes, Tests..."
              className="w-full max-w-2xl rounded-2xl bg-white px-6 py-4 text-lg text-black outline-none"
            />

          </div>

        </div>

      </section>

      {/* Quick Stats */}

      <section className="mt-10 grid gap-6 px-8 md:grid-cols-4">

        <div className="rounded-3xl bg-slate-900 p-6 border border-slate-800">
          <h2 className="text-4xl font-bold text-blue-400">1200+</h2>
          <p className="mt-2 text-slate-400">
            Video Lectures
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900 p-6 border border-slate-800">
          <h2 className="text-4xl font-bold text-green-400">5000+</h2>
          <p className="mt-2 text-slate-400">
            PDF Notes
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900 p-6 border border-slate-800">
          <h2 className="text-4xl font-bold text-yellow-400">1000+</h2>
          <p className="mt-2 text-slate-400">
            Mock Tests
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900 p-6 border border-slate-800">
          <h2 className="text-4xl font-bold text-pink-400">24x7</h2>
          <p className="mt-2 text-slate-400">
            Learning Support
          </p>
        </div>

      </section>

    </main>
  );
}