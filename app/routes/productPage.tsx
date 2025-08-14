import React from "react";
// import type { Route } from "./+types/home";
import { useParams } from "react-router";

const productPage = () => {
  const { name } = useParams<{ name: string }>();

  return <div className="relative pt-[60px]">{name}</div>;
};

export default productPage;
