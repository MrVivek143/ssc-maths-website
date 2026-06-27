import Link from "next/link";

export default function PercentagePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-blue-700">
        Percentage
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Learn Percentage from Basic to Advanced for SSC CGL, CHSL, CPO, MTS and Railway Exams.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">

        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-900">
          📄 Download PDF
        </button>

        <a
  href="https://www.youtube.com/@VivekSirExamBooster"
  target="_blank"
  className="bg-red-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-red-700"
>
  ▶️ Watch Video
</a>

        
        <Link
  href="/practice"
  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 inline-block"
>
  📝 Practice Questions
</Link>
        

      </div>

      <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">

        <h2 className="text-3xl font-bold text-blue-700">
          Chapter Introduction
        </h2>

        {/* Topics */}
<section className="mt-10">
  <h2 className="text-3xl font-bold text-blue-700 mb-6">
    📚 Topics Covered
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="font-bold text-xl">1. Percentage Basics</h3>
      <p className="text-gray-600">Basic concepts and formulas.</p>
    </div>

    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="font-bold text-xl">2. Percentage Increase & Decrease</h3>
      <p className="text-gray-600">Shortcut tricks with examples.</p>
    </div>

    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="font-bold text-xl">3. Successive Percentage</h3>
      <p className="text-gray-600">Most important SSC questions.</p>
    </div>

    <div className="bg-white p-5 rounded-xl shadow">
      <h3 className="font-bold text-xl">4. Previous Year Questions</h3>
      <p className="text-gray-600">Practice PYQs with solutions.</p>
    </div>

  </div>
</section>

        <p className="mt-5 text-gray-700 leading-8">
          Percentage is one of the most important chapters for SSC Exams.
          In this chapter you will learn concepts, tricks, previous year
          questions, short methods and practice sets.
        </p>

      </div>

    </main>
  );
}