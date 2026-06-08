export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  brand: string;
  image: string;
  gallery?: string[];
  stock: number;
  featured?: boolean;
  rating?: number;
  reviewsCount?: number;
  tags?: string[];
}
