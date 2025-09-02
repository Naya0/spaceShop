import React from "react";
import type { Category } from "~/types/product.types";

interface categoryProp {
  category: Category;
}

const CategoryCard = ({ category }: categoryProp) => {
  return (
    <article className="bg-gray-100 flex flex-col justify-between items-center p-5 min-h-[350px]">
      <p>{category.name}</p>

      <div className="h-[350px] overflow-hidden w-5/6 ">
        <img
          src={
            category.image.slice(-3) !== "any"
              ? category.image
              : "/images/noProduct.png"
          }
          alt={
            category.image.slice(-3) !== "any"
              ? category.name
              : "Товар закончился"
          }
          className="object-cover w-full h-full"
        />
      </div>
    </article>
  );
};

export default CategoryCard;
