export default function PracticePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-blue-700">
        Practice Questions
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Solve SSC Maths Questions Daily.
      </p>

      <div className="mt-10 space-y-5">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-xl">Question 1</h2>
          <p className="mt-2">
            40% of 250 = ?
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-xl">Question 2</h2>
          <p className="mt-2">
            Increase 500 by 20%.
          </p>
        </div>

      </div>

    </main>
  );
}