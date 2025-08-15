import React from "react";
import ProductsList from "~/components/products/ProductsList";
import { useAppSelector } from "~/features/hooks";

const catalog = () => {
  const products = useAppSelector((state) => state.products);

  return (
    <section className="w-full pt-[60px]">
        <ProductsList
          title="Каталог"
          amount={20}
          products={products.list}
        />
    </section>
  );
};

export default catalog;
