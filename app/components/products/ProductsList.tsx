import React from "react";
import type { Product } from "~/types/product.types";
import ProductCard from "./ProductCard";

interface ProductsSectionProps {
  title: string;
  products: Product[];
  amount?: number;
  categoriesSelected?: string[];
}

const ProductsList = ({
  title,
  products,
  amount = 3,
  categoriesSelected,
}: ProductsSectionProps) => {
  let filteredProducts = products;

  if (categoriesSelected && categoriesSelected.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      categoriesSelected.includes(product.category.name)
    );
  }

  const listProducts = filteredProducts.slice(0, amount);

  return (
    <div className="w-full flex flex-col justify-start max-w-[1600px]  m-auto">
      <h2>{title}</h2>
      <div
        className="grid gap-3 md:grid-rows-1 justify-items-stretch"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {listProducts.length > 0 ? (
          listProducts.map((product: Product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <p>Produts not found</p>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
