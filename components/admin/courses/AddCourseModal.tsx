"use client";

import Modal from "../Modal";
import CourseForm from "./CourseForm";

interface AddCourseModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddCourseModal({
  open,
  onClose,
  onSuccess,
}: AddCourseModalProps) {

  return (

    <Modal
      open={open}
      onClose={onClose}
      title="Add Course"
    >

      <CourseForm
        onSuccess={() => {

          onSuccess();

          onClose();

        }}
      />

    </Modal>

  );

}