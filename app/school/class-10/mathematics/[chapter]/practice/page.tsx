import BackButton from "@/components/BackButton";

export default function PracticePage() {
  return (
    <main className="min-h-screen p-10">
        <BackButton />
      <h1 className="text-4xl font-bold text-blue-700">
        📝 Practice Questions
      </h1>

      <p className="mt-4">
        Practice questions will be added here.
      </p>
    </main>
  );
}