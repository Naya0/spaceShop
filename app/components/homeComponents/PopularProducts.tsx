import React from "react";
import Button from "../Button";
interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
}

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
      <div className="grid grid-cols-3 h-[300px] gap-3">
        {POPULAT_PRODUCTS.map((product, index) => (
          <div key={index} className="bg-red-100 flex flex-col justify-between items-end p-5">
            <div className="w-full">
              <p className="text-xs text-gray-500">{product.category}</p>
              <p className="text-base">{product.title}</p>
            </div>
            <Button
              title="next"
              link="/"
              height={50}
              width={50}
              theme="light"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
