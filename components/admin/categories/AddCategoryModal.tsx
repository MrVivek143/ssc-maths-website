"use client";

import Modal from "../Modal";
import CategoryForm from "./CategoryForm";

interface AddCategoryModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddCategoryModal({
  open,
  onClose,
  onSuccess,
}: AddCategoryModalProps) {

  return (

    <Modal
      open={open}
      onClose={onClose}
      title="Add Category"
    >

      <CategoryForm
        onSuccess={() => {

          onSuccess();

          onClose();

        }}
      />

    </Modal>

  );

}