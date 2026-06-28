import { class10Math } from "@/data/class10Math";
import ChapterHeader from "@/components/ChapterHeader";
import BackButton from "@/components/BackButton";
import Link from "next/link";

export default async function VideosPage({
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
        subtitle="Video Lectures"
      />

      <div className="bg-white rounded-xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-4">
          🎥 Videos
        </h2>

        {currentChapter?.videos?.map((video) => (
          <div
            key={video.url}
            className="border rounded-lg p-4 mb-4"
          >
            <h3 className="font-bold">
              {video.title}
            </h3>

            <Link
              href={video.url}
              target="_blank"
              className="text-blue-600 underline"
            >
              Watch Video
            </Link>
          </div>
        ))}

      </div>

    </main>
  );
}