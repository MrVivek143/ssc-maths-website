import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}

<nav className="bg-blue-700 text-white shadow-lg">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

    <h1 className="text-2xl font-bold">
      LearnHub India
    </h1>

    <div className="flex gap-6 font-semibold">

      <a href="/ " className="hover:text-yellow-300">
        Home
      </a>

      <a href="/school" className="hover:text-yellow-300">
        School
      </a>

      <a href="/competitive" className="hover:text-yellow-300">
        Competitive
      </a>

      <a href="/practice" className="hover:text-yellow-300">
        Practice
      </a>

      <a href="/notes" className="hover:text-yellow-300">
        Notes
      </a>

      <a href="/contact" className="hover:text-yellow-300">
        Contact
      </a>

    </div>

  </div>
</nav>

      {/* HERO SECTION */}
      <section className="text-center py-20 px-5 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-4xl md:text-6xl font-bold text-blue-700">
          LEARN SMARTER, ACHIEVE FASTER 🚀
        </h2>

        <p className="mt-5 text-gray-600 text-lg md:text-xl">
          School • Competitive Exams • Notes • Mock Tests • PYQs
        </p>

        <div className="mt-8 flex justify-center">
  <input
    type="text"
    placeholder="🔍 Search Chapter..."
    className="w-full max-w-md border-2 border-blue-500 rounded-full px-5 py-3 outline-none focus:ring-4 focus:ring-blue-300"
  />
</div>

        <button className="mt-8 bg-blue-700 text-white px-8 py-3 rounded-full hover:bg-blue-900 transition">
          Start Learning
        </button>
      </section>

      <section className="py-16 bg-white">

<h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
Choose Your Learning Path
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10">

<Link href="/school">
  <div className="bg-blue-100 rounded-xl p-10 shadow-lg hover:scale-105 transition cursor-pointer">
    <h3 className="text-3xl font-bold text-blue-700">
      📚 School
    </h3>

    <p className="mt-4">
      Class 6 • 7 • 8 • 9 • 10 • 11 • 12
    </p>
  </div>
</Link>

<Link href="/competitive">
  <div className="bg-green-100 rounded-xl p-10 shadow-lg hover:scale-105 transition cursor-pointer">
    <h3 className="text-3xl font-bold text-green-700">
      🎯 Competitive Exams
    </h3>

    <p className="mt-4">
      SSC • Railway • Banking • Police • CUET • CTET
    </p>
  </div>
</Link>

</div>

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

<h2 className="text-4xl font-bold text-center text-blue-700 mb-4">
  Explore Popular Courses
</h2>

<p className="text-center text-gray-600 mb-10">
  Choose your subject and start learning today.
</p>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">

<Link href="/percentage">
  <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition cursor-pointer">
    <h3 className="text-2xl font-bold text-blue-700">
      Percentage
    </h3>

    <p className="mt-3 text-gray-600">
      Learn Percentage from Basic to Advanced.
    </p>

    <button className="mt-5 bg-blue-700 text-white px-5 py-2 rounded-lg">
      Start Learning →
    </button>
  </div>
</Link>

<Link href="/ratio">
  <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition cursor-pointer">
    <h3 className="text-2xl font-bold text-blue-700">
      Ratio & Proportion
    </h3>

    <p className="mt-3 text-gray-600">
      Complete Ratio Questions with Tricks.
    </p>

    <button className="mt-5 bg-blue-700 text-white px-5 py-2 rounded-lg">
      Start Learning →
    </button>
  </div>
</Link>

<Link href="/profit-loss">
  <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition cursor-pointer">
    <h3 className="text-2xl font-bold text-blue-700">
      Profit & Loss
    </h3>

    <p className="mt-3 text-gray-600">
      Master Profit & Loss for SSC Exams.
    </p>

    <button className="mt-5 bg-blue-700 text-white px-5 py-2 rounded-lg">
      Start Learning →
    </button>
  </div>
</Link>

    <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition">
  <h3 className="text-2xl font-bold text-blue-700">Average</h3>
  <p className="mt-3 text-gray-600">Master Average Questions.</p>
</div>

<div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition">
  <h3 className="text-2xl font-bold text-blue-700">Simple Interest</h3>
  <p className="mt-3 text-gray-600">Simple Interest Complete Course.</p>
</div>

<div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition">
  <h3 className="text-2xl font-bold text-blue-700">Compound Interest</h3>
  <p className="mt-3 text-gray-600">Learn Compound Interest Easily.</p>
</div>

<div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition">
  <h3 className="text-2xl font-bold text-blue-700">Time & Work</h3>
  <p className="mt-3 text-gray-600">Practice Time & Work Questions.</p>
</div>

<div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition">
  <h3 className="text-2xl font-bold text-blue-700">Time, Speed & Distance</h3>
  <p className="mt-3 text-gray-600">Shortcut Tricks for TSD.</p>
</div>

<div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition">
  <h3 className="text-2xl font-bold text-blue-700">Algebra</h3>
  <p className="mt-3 text-gray-600">SSC Algebra from Basic to Advanced.</p>
</div>

</div>

</section>

{/* Footer */}

<footer className="bg-blue-700 text-white py-10 mt-16">
  <div className="text-center">
    <h2 className="text-2xl font-bold">SSC Maths by Vivek</h2>

    <p className="mt-3">
      Learn SSC Maths with Free Notes, PYQs and Mock Tests.
    </p>

    <div className="mt-5 flex justify-center gap-6">
      <a href="#" className="hover:underline">YouTube</a>
      <a href="#" className="hover:underline">Telegram</a>
      <a href="#" className="hover:underline">Contact</a>
    </div>

    <p className="mt-8 text-sm">
      © 2026 SSC Maths by Vivek. All Rights Reserved.
    </p>
  </div>
</footer>

    </main>
  );
}