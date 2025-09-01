import React from "react";
import { Link, useParams } from "react-router";
import Icon from "~/components/Icon/Icon";
import ProductsList from "~/components/products/ProductsList";
import { useAppSelector } from "~/features/hooks";

const catalogOnCategory = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const products = useAppSelector((state) => state.products);

  const poductList = products.list.filter(
    (item) => item.category.name == categoryName
  );

  return (
    <section className="w-full pt-[60px]">
      {products.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="w-5/6 m-auto flex gap-3 ">
            <span className="text-gray-600 hover:text-gray-900  text-sm">
              <Link to="/">Назад</Link>
            </span>
            <Icon name="arrow" />
            <span className="text-gray-600 text-sm">
              Категория: {categoryName}
            </span>
          </div>
          <ProductsList title="Каталог" amount={20} products={poductList} />
        </>
      )}
    </section>
  );
};

export default catalogOnCategory;
