// export interface Product {
//   id?: number;
//   name: string;
//   mass: number;
//   radius: number | null;
//   period: number;
//   semi_major_axis: number;
//   temperature: number | null;
//   distance_light_year: number;
//   host_star_mass: number;
//   host_star_temperature: number;
// }

export interface Category {
  id: number;
  name: string;
  image: string;
  slug: number;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Cart {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}
