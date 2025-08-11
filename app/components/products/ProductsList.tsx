import React from "react";
import type { Product } from "~/types/product.types";
import ProductCart from "./ProductCart";

interface ProductsListProps {
  listProduct: Product[];
}

const ProductsList = ({ listProduct }: ProductsListProps) => {
  console.log(listProduct[0]);
  return (
    <div
      className="grid gap-3"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
    >
      {listProduct.map((item) => (
        <ProductCart key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductsList;
