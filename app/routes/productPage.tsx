import React, { useEffect } from "react";
// import type { Route } from "./+types/home";
import { useNavigate, useParams } from "react-router";
import ProductPageContent from "~/components/products/ProductPageContent";
import { useGetProductsQuery } from "~/features/products/productSlice";

const productPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetProductsQuery({
    id,
  });


  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate("/");
    }
  }, [isLoading, isFetching, isSuccess, navigate]);

  return (
    <div className="relative pt-[60px]">
      {isLoading ? (
        <p>Loading...</p>
      ) : isSuccess && !isFetching ? (
        <ProductPageContent product={product} />
      ) : (
        <p>Error</p>
      )}
    </div>
  );
};

export default productPage;
