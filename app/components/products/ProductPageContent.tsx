import React from "react";
import type { Product } from "~/types/product.types";
import ButtonsIcon from "../Buttons/ButtonsIcon";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "~/features/store";
import { addItem } from "~/features/cart/cartSlise";
import ProducPagetImagesBlock from "./ProducPagetImagesBlock";

interface ProductProps {
  product: Product;
}

const ProductPageContent = ({ product }: ProductProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { id, title, price, category, description, images } = product;
  if (!product) return <div>Product not found</div>;

  const addToCart = () => {
    dispatch(addItem({ id: id.toString(), title, price, description, image: images[0]}));
  };

  return (
    <section
      className="w-5/6 m-auto my-8 grid  gap-10
    md:grid-cols-2 lg:grid-rows-1  sm:grid-cols-1 sm:grid-rows-2 "
    >
      <ProducPagetImagesBlock images={images}/>
      <div>
        <h1>{title}</h1>
        <p className="text-base font-medium text-gray-800">
          {price * 100} руб.
        </p>
        <p className="my-3">Категория: {category.name}</p>
        <p className="my-5">{description}</p>
        <div className="flex gap-3 my-5 flex-row items-center">
          <ButtonsIcon
            theme="dark"
            link="Добавить в корзину"
            icon="cart.png"
            onClick={addToCart}
          />
          <ButtonsIcon
            theme="dark"
            link="Добавить в избранное"
            icon="heart.png"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductPageContent;
