"use client";

import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import Modal from "../Modal";
import { updateCategory } from "@/lib/category";

interface EditCategoryModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  category: {
    id: string;
    name: string;
    slug: string;
    description: string;
  } | null;
}

export default function EditCategoryModal({
  open,
  onClose,
  onSuccess,
  category,
}: EditCategoryModalProps) {

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    if (category) {
      setName(category.name);
      setSlug(category.slug);
      setDescription(category.description);
    }

  }, [category]);

  async function handleUpdate(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    if (!category) return;

    try {

      setLoading(true);

      await updateCategory(category.id, {
        name,
        slug,
        description,
      });

      toast.success("Category Updated Successfully");

      onSuccess();

      onClose();

    } catch (error: any) {

      toast.error(error.message);

    } finally {

      setLoading(false);

    }

  }

  return (

    <Modal
      open={open}
      onClose={onClose}
      title="Edit Category"
    >

      <form
        onSubmit={handleUpdate}
        className="space-y-6"
      >

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Category Name"
          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="Slug"
          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full rounded-xl border border-slate-700 bg-slate-800 p-3 text-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Category"}
        </button>

      </form>

    </Modal>

  );

}