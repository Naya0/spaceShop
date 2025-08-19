import React from "react";
import type { Category } from "~/types/product.types";

interface categoryProp {
  category: Category
}

const CategoryCard = ({ category }: categoryProp) => {
  return (
    <div className="bg-gray-100 flex flex-col justify-between items-center p-5 min-h-[350px]">
      <p>{category.name}</p>
      <div
        className="bg-cover bg-center content-[''] w-5/6 h-[350px]"
        style={{backgroundImage: `url("${category.image}")`}}
      ></div>
    </div>
  );
};

export default CategoryCard;
