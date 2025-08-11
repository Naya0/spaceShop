import React from "react";
import ButtonsIcon from "../Buttons/ButtonsIcon";
import productImage from "../../assets/productImages/product1.jpg";
import type { Product } from "~/types/product.types";

interface ProductCartProps {
  product: Product;
}

const ProductCart = ({product}: ProductCartProps) => {
  return (
    <div className="bg-gray-100 flex flex-col justify-between items-end p-5 min-h-[300px]">
      <div className="w-full">
        <p className="text-xs text-gray-500">{product.category}</p>
        <p className="text-base">{product.title}</p>
      </div>
      <div
        className="my-2 overflow-hidden h-[200px] w-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('${productImage}')` }}
      ></div>
      <div className="w-full flex justify-between items-center">
        <span className="text-base uppercase">{product.price} руб.</span>
        <ButtonsIcon icon="arrow.png" link="/" theme="light" />
      </div>
    </div>
  );
};

export default ProductCart;
