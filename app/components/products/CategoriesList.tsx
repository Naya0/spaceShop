import React from "react";
import CategoryCart from "./CategoryCard";
import type { Category } from "~/types/product.types";
import { Link } from "react-router";

interface CategoriesSectionProps {
  title: string;
  categories: Category[];
  amount?: number;
}

const CategoriesList = ({
  title,
  categories,
  amount = 2,
}: CategoriesSectionProps) => {
  const categoriesList = categories.filter((_, i) => i < amount);

  return (
    <section>
      <h2>{title}</h2>
      <div
        className="grid gap-5"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {categoriesList.map((category) => (
          <Link to={`/catalog/${category.name}`}  key={category.id} >
            <CategoryCart category={category} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesList;
