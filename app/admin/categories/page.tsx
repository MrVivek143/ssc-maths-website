"use client";

import { useState } from "react";
import PageHeader from "@/components/admin/PageHeader";
import AddCategoryModal from "@/components/admin/categories/AddCategoryModal";

export default function CategoriesPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <PageHeader
        title="Categories"
        description="Manage all learning categories"
        buttonText="+ Add Category"
        onClick={() => setOpenModal(true)}
      />

      <AddCategoryModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}