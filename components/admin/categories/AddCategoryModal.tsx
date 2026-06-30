"use client";

import Modal from "../Modal";
import CategoryForm from "./CategoryForm";

interface AddCategoryModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AddCategoryModal({
  open,
  onClose,
}: AddCategoryModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Add Category"
    >
      <CategoryForm />
    </Modal>
  );
}