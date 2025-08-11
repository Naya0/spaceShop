import React from "react";
import type { Product } from "~/types/product.types";
import ProductsList from "../products/ProductsList";

const POPULAT_PRODUCTS: Product[] = [
  {
    id: 123,
    category: "открытка",
    title: "Млечный Путь в твоих руках",
    description: "Млечный Путь в твоих руках",
    price: 123,
  },
  {
    id: 124,
    category: "открытка",
    title: "Привет с Марса",
    description: "Привет с Марса",
    price: 124,
  },
  {
    id: 125,
    category: "открытка",
    title: "Свет далёких планет",
    description: "Свет далёких планет",
    price: 125,
  },
];

const PopularProducts = () => {
  return (
    <div className="w-5/6 m-auto">
      <h2>Популярные товары</h2>
      <ProductsList listProduct={POPULAT_PRODUCTS} />
    </div>
  );
};

export default PopularProducts;
