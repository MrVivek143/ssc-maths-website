export interface Category {

  id: string;

  created_at: string;

  name: string;

  slug: string;

  description: string | null;

  icon: string | null;

  image_url: string | null;

  parent_id: string | null;

  is_active: boolean;

  sort_order: number;

}