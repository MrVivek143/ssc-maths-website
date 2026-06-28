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

export default function Mathematics() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-blue-700 text-center">
        Class 10 Mathematics
      </h1>

      <p className="text-center mt-4 text-gray-600">
        Choose a Chapter
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
  {chapters.map((chapter) => (
    <Link
      key={chapter}
      href={`/school/class-10/mathematics/${chapter
        .toLowerCase()
        .replace(/ /g, "-")}`}
    >
      <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer text-center">
        📘 {chapter}
      </div>
    </Link>
  ))}
</div>  

    </main>
  );
}