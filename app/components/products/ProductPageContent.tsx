import React, { useEffect, useState } from "react";
import type { Product } from "~/types/product.types";
import ButtonsIcon from "../Buttons/ButtonsIcon";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "~/features/store";
import { addItem, decrementItem } from "~/features/cart/cartSliсe";
import ProducPagetImagesBlock from "./ProducPagetImagesBlock";
import { useAppSelector } from "~/features/hooks";
import CounterProductCart from "./CounterProductCart";

interface ProductProps {
  product: Product;
}

const ProductPageContent = ({ product }: ProductProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useAppSelector((state) => state.cart);

  const { id, title, price, category, description, images } = product;
  if (!product) return <div>Product not found</div>;

  const addToCart = () => {
    dispatch(
      addItem({
        id: id.toString(),
        title,
        price,
        description,
        image: images[0],
      })
    );
  };


  let currentProduct = cart.items.filter(
    (i) => i.id.toString() === id.toString()
  );

  return (
    <section
      className="w-5/6 m-auto my-8 grid  gap-10
    md:grid-cols-2 lg:grid-rows-1  sm:grid-cols-1 sm:grid-rows-2 "
    >
      <ProducPagetImagesBlock images={images} />
      <div>
        <h1>{title}</h1>
        <p className="text-base font-medium text-gray-800">
          {price * 100} руб.
        </p>
        <p className="my-3">Категория: {category.name}</p>
        <p className="my-5">{description}</p>
        <div className="flex gap-3 my-5 flex-row items-center">
          {currentProduct.length !== 0 ? (
            <CounterProductCart id={id.toString()} />
          ) : (
            <ButtonsIcon
              theme="dark"
              link="Добавить в корзину"
              icon="cart"
              onClick={addToCart}
            />
          )}

          <ButtonsIcon theme="dark" link="Добавить в избранное" icon="heart" />
        </div>
      </div>
    </section>
  );
};

export default ProductPageContent;
