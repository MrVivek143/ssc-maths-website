"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { createCategory } from "@/lib/category";

interface CategoryFormProps {
  onSuccess: () => void;
}

export default function CategoryForm({
  onSuccess,
}: CategoryFormProps) {

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    if (!name || !slug) {

      toast.error("Category Name and Slug are required.");

      return;

    }

    try {

      setLoading(true);

      await createCategory({

        name,

        slug,

        description,

      });

      toast.success("Category Created Successfully");

      setName("");
      setSlug("");
      setDescription("");

      onSuccess();

    } catch (error: any) {

      toast.error(error.message);

    } finally {

      setLoading(false);

    }

  }

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >

      <div>

        <label className="block mb-2 text-white font-medium">
          Category Name
        </label>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
          placeholder="SSC"
        />

      </div>

      <div>

        <label className="block mb-2 text-white font-medium">
          Slug
        </label>

        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
          placeholder="ssc"
        />

      </div>

      <div>

        <label className="block mb-2 text-white font-medium">
          Description
        </label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
          rows={4}
        />

      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 disabled:opacity-50"
      >

        {loading ? "Saving..." : "Save Category"}

      </button>

    </form>

  );

}