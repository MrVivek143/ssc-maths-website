import Link from "next/link";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter } = await params;

  const title = chapter
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-blue-700 text-center">
        📘 {title}
      </h1>

      <p className="text-center text-gray-600 mt-3">
        Complete Study Material
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">

        <Link href={`/school/class-10/mathematics/${chapter}/notes`}>
  <div className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer hover:scale-105 transition">
    📖
    <h2 className="font-bold mt-3">Notes</h2>
  </div>
</Link>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer hover:scale-105 transition">
          🎥
          <h2 className="font-bold mt-3">Video Lectures</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer hover:scale-105 transition">
          📝
          <h2 className="font-bold mt-3">Practice Questions</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer hover:scale-105 transition">
          📄
          <h2 className="font-bold mt-3">PYQs</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer hover:scale-105 transition">
          📥
          <h2 className="font-bold mt-3">PDF Download</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center cursor-pointer hover:scale-105 transition">
          🧠
          <h2 className="font-bold mt-3">Quiz</h2>
        </div>

      </div>

    </main>
  );
}