import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="text-2xl font-bold tracking-tight">
          LearnHub India
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/">Home</Link>
          <Link href="/school">School</Link>
          <Link href="/ssc">SSC</Link>
          <Link href="/railway">Railway</Link>
          <Link href="/banking">Banking</Link>
        </nav>

       <Link href="/login">
  <Button>Login</Button>
</Link>

      </div>
    </header>
  );
}