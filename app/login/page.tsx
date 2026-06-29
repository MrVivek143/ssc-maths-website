"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
const router = useRouter();

const [email, setEmail] = useState("");

const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);

const [error, setError] = useState("");

const handleLogin = async (
  e: React.FormEvent<HTMLFormElement>
) => {

  e.preventDefault();

  setLoading(true);

  setError("");

  const { error } = await supabase.auth.signInWithPassword({

    email,

    password,

  });

  setLoading(false);

  if (error) {

    setError(error.message);

    return;

  }

  router.push("/dashboard");

};

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="mt-3 text-slate-400">
            Sign in to continue your learning journey.
          </p>
        </div>

        <form
  onSubmit={handleLogin}
  className="space-y-5"
>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Email
            </label>

            <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
/>
            
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Password
            </label>

<input
  type="password"
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
/>

          </div>

          <button
  type="submit"
  disabled={loading}
  className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
>
  {loading ? "Logging in..." : "Login"}
</button>

        </form>

        {error && (
  <p className="mt-4 text-center text-red-400">
    {error}
  </p>
)}

        <p className="mt-6 text-center text-slate-400">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </p>

      </div>

    </main>
  );
}