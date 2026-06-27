import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 bg-blue-700 text-white shadow-md">
        <h1 className="text-2xl font-bold">SSC Maths by Vivek</h1>

        <div className="space-x-6 text-sm md:text-base">
          <a href="#">Home</a>
          <a href="#">Notes</a>
          <a href="#">PYQ</a>
          <a href="#">Mock Test</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="text-center py-20 px-5 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-4xl md:text-6xl font-bold text-blue-700">
          Crack SSC Maths with Ease 🚀
        </h2>

        <p className="mt-5 text-gray-600 text-lg md:text-xl">
          Best Notes • Practice Sets • Mock Tests • PYQs
        </p>

        <button className="mt-8 bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-900 transition">
          Start Learning
        </button>
      </section>

      {/* STATS SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-3 text-center gap-6 px-10 py-10">

        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <h3 className="text-3xl font-bold text-blue-700">50,000+</h3>
          <p>Active Students</p>
        </div>

        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <h3 className="text-3xl font-bold text-blue-700">500+</h3>
          <p>Video Lessons</p>
        </div>

        <div className="bg-blue-100 p-6 rounded-xl shadow">
          <h3 className="text-3xl font-bold text-blue-700">1000+</h3>
          <p>Practice Questions</p>
        </div>

      </section>

      {/* Chapters */}

<section className="py-16 bg-gray-100">

<h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
SSC Maths Chapters
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">

<div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition">
<h3 className="text-2xl font-bold text-blue-700">Percentage</h3>
<p className="mt-3 text-gray-600">
Learn Percentage from Basic to Advanced.
</p>

 <Link href="/percentage">
  <button className="mt-5 bg-blue-700 text-white px-5 py-2 rounded-lg">
    Start
  </button>
</Link>

</div>

<div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition">
<h3 className="text-2xl font-bold text-blue-700">Ratio & Proportion</h3>
<p className="mt-3 text-gray-600">
Complete Ratio Questions with Tricks.
</p>
<button className="mt-5 bg-blue-700 text-white px-5 py-2 rounded-lg">
Start
</button>
</div>

<div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition">
<h3 className="text-2xl font-bold text-blue-700">Profit & Loss</h3>
<p className="mt-3 text-gray-600">
Master Profit & Loss for SSC Exams.
</p>
<button className="mt-5 bg-blue-700 text-white px-5 py-2 rounded-lg">
Start
</button>
</div>

</div>

</section>

{/* Footer */}
<footer className="bg-blue-700 text-white mt-20 py-8 text-center">

  <h2 className="text-2xl font-bold">
    SSC Maths by Vivek
  </h2>

  <p className="mt-3">
    Learn SSC Maths with Free Notes, Practice Questions & Mock Tests.
  </p>

  <p className="mt-5 text-sm">
    © 2026 SSC Maths by Vivek. All Rights Reserved.
  </p>

</footer>

    </main>
  );
}