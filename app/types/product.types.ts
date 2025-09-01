export interface Category {
  id: number;
  name: string;
  image: string;
  slug: number;
}

export interface Product {
  id: number;
  title: string;
  slug?: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export interface CartType {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}
