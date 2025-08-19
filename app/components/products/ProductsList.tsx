import React from "react";
import type { Product } from "~/types/product.types";
import ProductCard from "./ProductCard";
import { Link } from "react-router";

interface ProductsSectionProps {
  title: string;
  products: Product[];
  amount?: number;
}

const ProductsList = ({
  title,
  products,
  amount = 3,
}: ProductsSectionProps) => {
  const listProducts = products.filter((_, i) => i < amount);

  return (
    <section>
      <h2>{title}</h2>
      <div
        className="grid gap-3 md:grid-rows-1"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        {listProducts.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
