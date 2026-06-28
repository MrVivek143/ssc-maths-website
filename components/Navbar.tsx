import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link href="/" className="text-2xl font-bold">
          LearnHub India
        </Link>

        <div className="flex gap-6 font-medium">
          <Link href="/">Home</Link>
          <Link href="/school">School</Link>
          <Link href="/competitive">Competitive</Link>
        </div>

      </div>
    </nav>
  );
}