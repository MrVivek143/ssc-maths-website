import Link from "next/link";

const chapters = [
  "Real Numbers",
  "Polynomials",
  "Pair of Linear Equations",
  "Quadratic Equations",
  "Arithmetic Progressions",
  "Triangles",
  "Coordinate Geometry",
  "Introduction to Trigonometry",
  "Applications of Trigonometry",
  "Circles",
  "Areas Related to Circles",
  "Surface Areas and Volumes",
  "Statistics",
  "Probability",
];

export default function Class10() {
  return (
    <main className="min-h-screen bg-gray-100">

      <div className="bg-blue-700 text-white py-10 text-center">
        <h1 className="text-5xl font-bold">
          Class 10
        </h1>

        <p className="mt-3">
          Choose Your Subject
        </p>
      </div>

      <section className="grid grid-cols-2 md:grid-cols-3 gap-8 p-10">

        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <Link href="/school/class-10/mathematics">
  <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transition cursor-pointer">
    📘 Mathematics
  </div>
</Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          🔬 Science
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          🇬🇧 English
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          📖 Hindi
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          🌍 Social Science
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          💻 Computer
        </div>

      </section>

    </main>
  );
}