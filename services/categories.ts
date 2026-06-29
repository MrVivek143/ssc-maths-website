import { supabase } from "@/lib/supabase";

export async function getCategories() {
  return await supabase
    .from("categories")
    .select("*")
    .order("sort_order");
}

export async function createCategory(data: {
  name: string;
  slug: string;
  description?: string;
}) {
  return await supabase
    .from("categories")
    .insert(data);
}