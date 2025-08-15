import React from "react";
import ButtonsIcon from "../Buttons/ButtonsIcon";
import productImage from "../../assets/productImages/product1.jpg";
import type { Product } from "~/types/product.types";
import { NavLink } from "react-router";

interface ProductCartProps {
  product: Product;
}

const ProductCart = ({ product }: ProductCartProps) => {

  
  return (
    <div className="bg-gray-100 flex flex-col justify-between items-end p-5 aspect-7/9">
      <div className="w-full">
        <p className="text-xs text-gray-500">{product.category.name}</p>
        <p className="text-base h-[48px]">{product.title}</p>
      </div>
      <div
        className="my-2 overflow-hidden h-5/6 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${product.images[0]}')` }}
      ></div>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <p className="line-clamp-3 text-sm my-5"> {product.description} </p>

          <div className="flex items-center justify-between">
            <span className="text-base uppercase">{product.price * 100} руб.</span>
            <div className="flex gap-2 items-center justify-end">
              <img
                src="/images/cart.png"
                alt="корзина пользователя"
                className="h-7"
              />
              <img
                src="/images/heart.png"
                alt="понравившиеся товары"
                className="h-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
