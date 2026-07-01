"use client";

import { useState } from "react";

import PageHeader from "@/components/admin/PageHeader";

import AddCourseModal from "@/components/admin/courses/AddCourseModal";

import CourseTable from "@/components/admin/courses/CourseTable";

export default function CoursesPage() {

  const [openModal, setOpenModal] = useState(false);

  const [refreshKey, setRefreshKey] = useState(0);

  return (

    <>

      <PageHeader
        title="Courses"
        description="Manage all courses"
        buttonText="+ Add Course"
        onClick={() => setOpenModal(true)}
      />

      <AddCourseModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSuccess={() => setRefreshKey(prev => prev + 1)}
      />

      <CourseTable key={refreshKey} />

    </>

  );

}