"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
    const router = useRouter();

const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [success, setSuccess] = useState("");

const handleSignup = async (
  e: React.FormEvent<HTMLFormElement>
) => {

  e.preventDefault();

  setError("");
  setSuccess("");

  if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  setLoading(true);

  const { data, error } = await supabase.auth.signUp({

    email,

    password,

    options: {

      data: {

        full_name: fullName,

      },

    },

  });

  if (error) {

    setLoading(false);

    setError(error.message);

    return;

  }

  if (data.user) {

    const { error: profileError } = await supabase
  .from("profiles")
  .insert({
    id: data.user.id,
    full_name: fullName,
    email: email,
  });

if (profileError) {
  console.error(profileError);
}

  }

  setLoading(false);

setSuccess(
  "Account created successfully. Please verify your email."
);

setTimeout(() => {
  router.push("/login");
}, 2000);

};

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">

        <div className="mb-8 text-center">

          <h1 className="text-4xl font-bold text-white">
            Create Account 🚀
          </h1>

          <p className="mt-3 text-slate-400">
            Join LearnHub India and start learning today.
          </p>

        </div>

        <form
  onSubmit={handleSignup}
  className="space-y-5"
>

          <div>
            <input
  type="text"
  placeholder="Enter your full name"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
/>
          </div>

          <div>
            <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
/>
          </div>

          <div>
            <input
  type="password"
  placeholder="Create password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
/>
          </div>

          <div>
            <input
  type="password"
  placeholder="Confirm password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
/>
          </div>

            <button
  type="submit"
  disabled={loading}
  className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50 transition"
>
  {loading ? "Creating Account..." : "Create Account"}
</button>

        {error && (
  <p className="text-center text-red-400">
    {error}
  </p>
)}

{success && (
  <p className="text-center text-green-400">
    {success}
  </p>
)}

        </form>

        <p className="mt-6 text-center text-slate-400">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-400 hover:underline"
          >
            Login
          </a>
        </p>

      </div>

    </main>
  );
}