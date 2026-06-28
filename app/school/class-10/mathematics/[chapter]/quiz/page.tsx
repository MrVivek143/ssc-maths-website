import BackButton from "@/components/BackButton";

export default function QuizPage() {
  return (
    <main className="min-h-screen p-10">
        <BackButton />

      <h1 className="text-4xl font-bold text-blue-700">
        🧠 Quiz
      </h1>

      <p className="mt-4">
        Quiz will be available here.
      </p>
    </main>
  );
}