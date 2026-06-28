import Link from "next/link";
import { class10Math } from "@/data/class10Math";
import BackButton from "@/components/BackButton";
import ChapterHeader from "@/components/ChapterHeader";

export default async function PdfPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter } = await params;

  const currentChapter = class10Math.find(
    (item) => item.slug === chapter
  );

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <BackButton />

      <ChapterHeader
        title={currentChapter?.titleEn ?? ""}
        subtitle="PDF Download"
      />

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">
          📥 PDF Download
        </h2>

        <Link
          href={currentChapter?.pdf?.url ?? "#"}
          target="_blank"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg inline-block hover:bg-blue-700"
        >
          Download PDF
        </Link>
      </div>
    </main>
  );
}