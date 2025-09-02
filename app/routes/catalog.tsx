import React, { useEffect, useState } from "react";
import ProductFilter from "~/components/products/ProductFilter";
import ProductsList from "~/components/products/ProductsList";
import { useAppSelector } from "~/features/hooks";

const catalog = () => {
  const products = useAppSelector((state) => state.products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const chacngeCategory = (selected: string[]) => {
    setSelectedCategories(selected);
  };

  return (
    <section className="w-full pt-[60px]">
      {products.isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex w-5/6 justify-between max-w-[1600px] m-auto items-start gap-5">
          <ProductFilter getFilterList={chacngeCategory} />
          <div className="w-6/7 flex items-start">
            <ProductsList
              title="Каталог"
              amount={20}
              products={products.list}
              categoriesSelected={selectedCategories}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default catalog;
