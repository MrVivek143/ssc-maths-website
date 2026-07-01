import { supabase } from "@/lib/supabase";

export async function getCourses() {
  const { data, error } = await supabase
    .from("courses")
    .select(`
      *,
      categories(name)
    `)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function createCourse(course: {
  category_id: string;
  name: string;
  slug: string;
  description: string;
  thumbnail: string;
  is_published: boolean;
}) {
  const { data, error } = await supabase
    .from("courses")
    .insert(course)
    .select();

  if (error) throw error;

  return data;
}

export async function updateCourse(
  id: string,
  course: {
    category_id: string;
    name: string;
    slug: string;
    description: string;
    thumbnail: string;
    is_published: boolean;
  }
) {
  const { data, error } = await supabase
    .from("courses")
    .update(course)
    .eq("id", id)
    .select();

  if (error) throw error;

  return data;
}

export async function deleteCourse(id: string) {
  const { error } = await supabase
    .from("courses")
    .delete()
    .eq("id", id);

  if (error) throw error;
}