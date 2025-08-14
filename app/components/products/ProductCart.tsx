import React from "react";
import ButtonsIcon from "../Buttons/ButtonsIcon";
import productImage from "../../assets/productImages/product1.jpg";
import type { Product } from "~/types/product.types";
import { NavLink } from "react-router";

interface ProductCartProps {
  product: Product;
}

const ProductCart = ({ product }: ProductCartProps) => { // write isLoading
  return (
    <div className="bg-gray-100 flex flex-col justify-between items-end p-5 min-h-[300px]">
      <div className="w-full">
        <p className="text-xs text-gray-500">открытка</p>
        <p className="text-base">{product.name}</p>
      </div>
      <div
        className="my-2 overflow-hidden h-[200px] w-full bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('${productImage}')` }}
      ></div>
      <div className="w-full flex justify-between items-center">
        <div>
          <p>Масса: {product.mass} </p>
          <p>Радиус: {product.radius} </p>
          <p>Дистанция в стевых годах: {product.distance_light_year} </p>
          <p>
            <span className="text-base uppercase">
              {product.host_star_temperature} руб.
            </span>
          </p>
        </div>
      <NavLink to={`/products/${product.name}`}>ddd</NavLink>
        {/* <ButtonsIcon icon="arrow.png" link="/" theme="light" /> */}
      </div>
    </div>
  );
};

export default ProductCart;
