import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import ProductsList from "~/components/products/ProductsList";
import { useAppSelector } from "~/features/hooks";

const catalog = () => {
  const products = useAppSelector((state) => state.products);
  const navigate = useNavigate();

  return (
    <section className="w-full pt-[60px]">
      {products.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ProductsList title="Каталог" amount={20} products={products.list} />
      )}
    </section>
  );
};

export default catalog;
