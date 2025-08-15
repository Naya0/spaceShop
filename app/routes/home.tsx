import Banner from "~/components/homeComponents/Banner";
import AnimationTextBlock from "~/components/homeComponents/AnimationTextBlock";
import { useScroll, animated } from "@react-spring/web";
import EasyOrder from "~/components/homeComponents/sectionEasyOrder/EasyOrder";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCategories } from "~/features/categories/categoriesSlice";
import { getProducts } from "~/features/products/productsSlice";
import type { AppDispatch } from "~/features/store";
import ProductsList from "~/components/products/ProductsList";
import { useAppSelector } from "~/features/hooks";
import CategoriesList from "~/components/products/CategoriesList";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  const products = useAppSelector((state) => state.products);
  const categories = useAppSelector((state) => state.categories);

  return (
    <>
      <Banner />
        {products.isLoading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            <ProductsList
              title="Популярные товары"
              amount={3}
              products={products.list}
            />

            <animated.div style={{ opacity: scrollYProgress }}>
              <AnimationTextBlock />
              <EasyOrder />
            </animated.div>
          </>
        )}

        {!products.isLoading && categories.isLoading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <CategoriesList
            title="Категории"
            amount={2}
            categories={categories.list}
          />
        )}
    </>
  );
}
