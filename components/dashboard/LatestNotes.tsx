import Link from "next/link";
import { FileText } from "lucide-react";

const notes = [
  {
    title: "Class 10 Maths Notes",
    subject: "CBSE",
    href: "/notes/class-10-maths",
  },
  {
    title: "SSC Percentage Notes",
    subject: "SSC",
    href: "/notes/ssc-percentage",
  },
  {
    title: "Railway Maths Notes",
    subject: "RRB",
    href: "/notes/railway-maths",
  },
  {
    title: "Banking Quant Notes",
    subject: "IBPS",
    href: "/notes/banking-quant",
  },
];

export default function LatestNotes() {
  return (
    <section className="mt-12">

      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">
          📄 Latest Notes
        </h2>

        <Link
          href="/notes"
          className="text-blue-400 hover:text-blue-300"
        >
          View All
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {notes.map((note) => (
          <Link key={note.title} href={note.href}>

            <div className="group flex h-60 flex-col justify-between rounded-3xl border border-slate-700 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">

              <div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600">
                  <FileText className="text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {note.title}
                </h3>

                <p className="mt-2 text-slate-400">
                  {note.subject}
                </p>

              </div>

              <button className="rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700">
                Read Notes
              </button>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}