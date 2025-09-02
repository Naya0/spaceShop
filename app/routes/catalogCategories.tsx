import React from "react";
import CategoriesList from "~/components/products/CategoriesList";
import { useAppSelector } from "~/features/hooks";

const catalogCategories = () => {
  const categoriesList = useAppSelector(state => state.categories);

  return (
    <section className="w-full pt-[60px]">
      {categoriesList.isLoading ? <p>Loading...</p> : <CategoriesList title="Categories" categories={categoriesList.list} allCategories={true}/>}
    
    </section>
  );
};

export default catalogCategories;
