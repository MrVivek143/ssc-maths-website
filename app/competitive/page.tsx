import Link from "next/link";

export default function Competitive() {
  return (
    <main className="min-h-screen bg-gray-100">

      <div className="bg-green-700 text-white py-10 text-center">
        <h1 className="text-5xl font-bold">
          🎯 Competitive Exams
        </h1>

        <p className="mt-3">
          Choose Your Exam
        </p>
      </div>

      <section className="grid grid-cols-2 md:grid-cols-3 gap-8 p-10">

        <div className="bg-white shadow-lg rounded-xl p-8 text-center">SSC</div>
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">Railway</div>
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">Banking</div>
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">UP Police</div>
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">CUET</div>
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">CTET</div>

      </section>

    </main>
  );
}