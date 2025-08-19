import React from "react";
import ButtonsIcon from "../Buttons/ButtonsIcon";
import productImage from "../../assets/productImages/product1.jpg";
import type { Product } from "~/types/product.types";
import { Link, NavLink } from "react-router";
import { useAppSelector } from "~/features/hooks";
import CounterProductCart from "./CounterProductCart";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "~/features/store";
import { addItem } from "~/features/cart/cartSliсe";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  const { id, title, slug, price, description, images, category } = product;

  let currentProduct = cart.items.filter(
    (i) => i.id.toString() === id.toString()
  );

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

  return (
    <div className="bg-gray-100 flex flex-col justify-between items-end p-5 aspect-7/9">
      <div className="w-full">
        <p className="text-xs text-gray-500">{category.name}</p>
        <Link to={`/products/${product.id}`}>
          <p className="text-base h-[48px]  hover:text-gray-400 transition">{title}</p>
        </Link>
      </div>
      <div
        className="my-2 overflow-hidden h-5/6 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${images[0]}')` }}
      ></div>
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <p className="line-clamp-3 text-sm my-5"> {description} </p>

          <div className="flex items-center justify-between">
            <span className="text-base uppercase">{price * 100} руб.</span>
            <div className="flex gap-2 items-center justify-end">
              {currentProduct.length !== 0 ? (
                <CounterProductCart id={product.id.toString()} />
              ) : (
                <ButtonsIcon
                  theme="dark"
                  link="Добавить в корзину"
                  icon="cart"
                  onClick={addToCart}
                />
              )}
              <ButtonsIcon
                theme="dark"
                link="Добавить в корзину"
                icon="heart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
