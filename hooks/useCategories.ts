"use client";
import { Category } from "@/types/category";
import { useEffect, useState } from "react";
import { getCategories } from "@/services/categories";

export function useCategories() {

 const [categories, setCategories] = useState<Category[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function load() {

      const { data } = await getCategories();

      setCategories(data || []);

      setLoading(false);

    }

    load();

  }, []);

  return {

    categories,

    loading,

  };

}