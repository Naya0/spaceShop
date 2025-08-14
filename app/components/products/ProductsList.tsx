import React from "react";
import type { Product } from "~/types/product.types";
import ProductCart from "./ProductCart";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../features/hooks";

interface ProductsListProps {
  listProduct: Product[];
}

const ProductsList = ({ listProduct }: ProductsListProps) => {

  const { list } = useAppSelector((products) => products.products);
  return (
    <div
      className="grid gap-3"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
    >
      {list.slice(0, 3).map((item, index) => (
        <ProductCart key={index} product={item} />
      ))}
    </div>
  );
};

export default ProductsList;
