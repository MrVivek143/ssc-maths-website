"use client";

import Modal from "../Modal";

interface DeleteCategoryDialogProps {
  open: boolean;
  categoryName: string;
  onClose: () => void;
  onDelete: () => void;
  loading: boolean;
}

export default function DeleteCategoryDialog({
  open,
  categoryName,
  onClose,
  onDelete,
  loading,
}: DeleteCategoryDialogProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Delete Category"
    >
      <div className="space-y-6">

        <p className="text-slate-300">
          Are you sure you want to delete{" "}
          <span className="font-bold text-white">
            "{categoryName}"
          </span>
          ?
        </p>

        <div className="flex justify-end gap-3">

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-600 px-5 py-2 text-white hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onDelete}
            disabled={loading}
            className="rounded-xl bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700 disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>

        </div>

      </div>
    </Modal>
  );
}