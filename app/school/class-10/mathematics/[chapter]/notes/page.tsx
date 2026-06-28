import { class10Math } from "@/data/class10Math";

import ChapterHeader from "@/components/ChapterHeader";

import BackButton from "@/components/BackButton";

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

    const currentChapter = class10Math.find(
  (item) => item.slug === chapter
);

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      
      <BackButton />

    <ChapterHeader
  title={currentChapter?.titleEn ?? ""}
  subtitle="Complete Chapter Notes"/>

      <div className="mt-10 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">
          Introduction
        </h2>

        <p>
          {currentChapter?.notes?.introduction}
        </p>
      </div>

        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
  <h2 className="text-2xl font-bold mb-4">
    Important Formulas
  </h2>

  <ul className="list-disc pl-6">
    {currentChapter?.notes?.formulas?.map((formula) => (
      <li key={formula}>{formula}</li>
    ))}
  </ul>
</div>

    <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
  <h2 className="text-2xl font-bold mb-4">
    Important Concepts
  </h2>

  <ul className="list-disc pl-6">
    {currentChapter?.notes?.concepts?.map((concept) => (
      <li key={concept}>{concept}</li>
    ))}
  </ul>
</div>

    </main>
  );
}