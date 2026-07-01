"use client";

import toast from "react-hot-toast";

import { useEffect, useState } from "react";

import { getCategories, deleteCategory } from "@/lib/category";

import EditCategoryModal from "./EditCategoryModal";
import DeleteCategoryDialog from "./DeleteCategoryDialog";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  created_at: string;
}

export default function CategoryTable() {

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState<Category | null>(null);

  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {

    try {

      const data = await getCategories();

      setCategories(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  function handleEdit(category: Category) {

    setSelectedCategory(category);

    setOpenEditModal(true);

  }

  function handleDelete(category: Category) {

    setSelectedCategory(category);

    setOpenDeleteDialog(true);

  }

  async function confirmDelete() {

    if (!selectedCategory) return;

    try {

      setDeleteLoading(true);

      await deleteCategory(selectedCategory.id);

      setCategories((prev) =>
        prev.filter(
          (item) => item.id !== selectedCategory.id
        )
      );

      setOpenDeleteDialog(false);

      setSelectedCategory(null);

      toast.success("Category Deleted Successfully");

    } catch (error) {

      console.error(error);

      toast.error("Failed to delete category.");

    } finally {

      setDeleteLoading(false);

    }

  }

  if (loading) {

    return (

      <div className="mt-8 text-slate-400">

        Loading...

      </div>

    );

  }

  return (

    <>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-700">

        <table className="w-full">

          <thead className="bg-slate-800">

            <tr>

              <th className="p-4 text-left text-white">
                Name
              </th>

              <th className="p-4 text-left text-white">
                Slug
              </th>

              <th className="p-4 text-left text-white">
                Description
              </th>

              <th className="p-4 text-left text-white">
                Created
              </th>

              <th className="p-4 text-center text-white">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {categories.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="p-8 text-center text-slate-400"
                >

                  No Categories Found.

                </td>

              </tr>

            ) : (

              categories.map((category) => (

                <tr
                  key={category.id}
                  className="border-t border-slate-700 hover:bg-slate-800/40 transition"
                >

                  <td className="p-4 text-white">

                    {category.name}

                  </td>

                  <td className="p-4 text-slate-300">

                    {category.slug}

                  </td>

                  <td className="p-4 text-slate-300">

                    {category.description}

                  </td>

                  <td className="p-4 text-slate-400">

                    {new Date(
                      category.created_at
                    ).toLocaleDateString()}

                  </td>

                  <td className="p-4">

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() => handleEdit(category)}
                        className="rounded-lg bg-yellow-500 px-3 py-2 text-sm font-semibold text-white hover:bg-yellow-600 transition"
                      >

                        Edit

                      </button>

                      <button
                        onClick={() => handleDelete(category)}
                        className="rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700 transition"
                      >

                        Delete

                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

            <EditCategoryModal
  open={openEditModal}
  onClose={() => setOpenEditModal(false)}
  onSuccess={loadCategories}
  category={selectedCategory}
/>

      <DeleteCategoryDialog
        open={openDeleteDialog}
        categoryName={selectedCategory?.name ?? ""}
        loading={deleteLoading}
        onClose={() => setOpenDeleteDialog(false)}
        onDelete={confirmDelete}
      />

    </>

  );

}