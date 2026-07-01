"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { createCourse } from "@/lib/course";
import { getCategories } from "@/lib/category";

interface Category {
  id: string;
  name: string;
}

interface CourseFormProps {
  onSuccess: () => void;
}

export default function CourseForm({
  onSuccess,
}: CourseFormProps) {

  const [categories, setCategories] = useState<Category[]>([]);

  const [categoryId, setCategoryId] = useState("");

  const [name, setName] = useState("");

  const [slug, setSlug] = useState("");

  const [description, setDescription] = useState("");

  const [thumbnail, setThumbnail] = useState("");

  const [isPublished, setIsPublished] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    loadCategories();

  }, []);

  async function loadCategories() {

    try {

      const data = await getCategories();

      setCategories(data);

    } catch (error) {

      console.error(error);

      toast.error("Failed to load categories.");

    }

  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    if (!categoryId || !name || !slug) {

      toast.error("Category, Course Name and Slug are required.");

      return;

    }

    try {

      setLoading(true);

      await createCourse({

        category_id: categoryId,

        name,

        slug,

        description,

        thumbnail,

        is_published: isPublished,

      });

      toast.success("Course Created Successfully");

      setCategoryId("");

      setName("");

      setSlug("");

      setDescription("");

      setThumbnail("");

      setIsPublished(false);

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

        <label className="mb-2 block font-medium text-white">

          Category

        </label>

        <select

          value={categoryId}

          onChange={(e) => setCategoryId(e.target.value)}

          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"

        >

          <option value="">

            Select Category

          </option>

          {categories.map((category) => (

            <option
              key={category.id}
              value={category.id}
            >

              {category.name}

            </option>

          ))}

        </select>

      </div>

      <div>

        <label className="mb-2 block font-medium text-white">

          Course Name

        </label>

        <input

          value={name}

          onChange={(e) => setName(e.target.value)}

          placeholder="SSC CGL 2026"

          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"

        />

      </div>

      <div>

        <label className="mb-2 block font-medium text-white">

          Slug

        </label>

        <input

          value={slug}

          onChange={(e) => setSlug(e.target.value)}

          placeholder="ssc-cgl-2026"

          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"

        />

      </div>

      <div>

        <label className="mb-2 block font-medium text-white">

          Description

        </label>

        <textarea

          rows={4}

          value={description}

          onChange={(e) => setDescription(e.target.value)}

          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"

        />

      </div>

      <div>

        <label className="mb-2 block font-medium text-white">

          Thumbnail URL

        </label>

        <input

          value={thumbnail}

          onChange={(e) => setThumbnail(e.target.value)}

          placeholder="https://..."

          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"

        />

      </div>

      <div className="flex items-center gap-3">

        <input

          id="publish"

          type="checkbox"

          checked={isPublished}

          onChange={(e) => setIsPublished(e.target.checked)}

          className="h-5 w-5"

        />

        <label
          htmlFor="publish"
          className="text-white"
        >

          Publish Course

        </label>

      </div>

      <button

        type="submit"

        disabled={loading}

        className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"

      >

        {loading ? "Saving..." : "Save Course"}

      </button>

    </form>

  );

}