import React from "react";
import CategoryCart from "./CategoryCard";
import type { Category } from "~/types/product.types";
import { Link } from "react-router";

interface CategoriesSectionProps {
  title: string;
  categories: Category[];
  amount?: number;
  allCategories?: boolean;
}

const CategoriesList = ({
  title,
  categories,
  amount = 2,
  allCategories = false,
}: CategoriesSectionProps) => {
  const categoriesList = !allCategories ? categories.filter((_, i) => i < amount) : categories;

  return (
    <section>
      <div className="flex justify-between items-baseline">
        <h2>{title}</h2>
        <Link
          to="categories"
          className="text-gray-800 hover:text-gray-500 transition duration-300">
          All categories
        </Link>
      </div>
      <div
        className="grid gap-5"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {categoriesList.map((category) => (
          <Link to={`/catalog/${category.name}`} key={category.id}>
            <CategoryCart category={category} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesList;
