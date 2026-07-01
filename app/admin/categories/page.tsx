"use client";

import { useState } from "react";

import PageHeader from "@/components/admin/PageHeader";
import AddCategoryModal from "@/components/admin/categories/AddCategoryModal";
import CategoryTable from "@/components/admin/categories/CategoryTable";

export default function CategoriesPage() {

  const [openModal, setOpenModal] = useState(false);

  const [refreshKey, setRefreshKey] = useState(0);

  function refreshTable() {

    setRefreshKey((prev) => prev + 1);

  }

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
        onSuccess={refreshTable}
      />

      <CategoryTable
        key={refreshKey}
      />

    </>

  );

}