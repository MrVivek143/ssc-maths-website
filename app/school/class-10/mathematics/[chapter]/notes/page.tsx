export default async function NotesPage({
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

      <h1 className="text-4xl font-bold text-blue-700">
        📖 {title} Notes
      </h1>

      <p className="mt-4 text-gray-600">
        Welcome to the Notes section.
      </p>

      <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">
          Introduction
        </h2>

        <p>
          Notes will be added here chapter by chapter.
        </p>
      </div>

    </main>
  );
}