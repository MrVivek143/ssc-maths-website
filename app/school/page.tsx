import Link from "next/link";

export default function School() {
  return (
    <main className="min-h-screen bg-gray-100">

      <div className="bg-blue-700 text-white py-10 text-center">
        <h1 className="text-5xl font-bold">
          📚 School Education
        </h1>

        <p className="mt-3">
          Choose Your Class
        </p>
      </div>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 p-10">

        <Link href="#">
          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:scale-105 transition cursor-pointer">
            Class 6
          </div>
        </Link>

        <Link href="#">
          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:scale-105 transition cursor-pointer">
            Class 7
          </div>
        </Link>

        <Link href="#">
          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:scale-105 transition cursor-pointer">
            Class 8
          </div>
        </Link>

        <Link href="#">
          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:scale-105 transition cursor-pointer">
            Class 9
          </div>
        </Link>

        <Link href="#">
          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:scale-105 transition cursor-pointer">
            Class 10
          </div>
        </Link>

        <Link href="#">
          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:scale-105 transition cursor-pointer">
            Class 11
          </div>
        </Link>

        <Link href="#">
          <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:scale-105 transition cursor-pointer">
            Class 12
          </div>
        </Link>

      </section>

    </main>
  );
}