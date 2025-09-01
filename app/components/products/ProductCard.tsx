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
    <div className="bg-gray-100 flex flex-col items-center justify-between p-5 aspect-7/9 h-[500px]">
      <div className="w-full">
        <p className="text-xs text-gray-500">{category.name}</p>
        <Link to={`/products/${product.id}`}>
          <p className="text-base h-[48px]  hover:text-gray-400 transition">
            {title}
          </p>
        </Link>
      </div>

      <div className="w-full h-[250px] overflow-hidden">
        <img
          src={images[0].slice(-3) !== 'any' ? images[0] : '/images/noProduct.png' }
          alt={images[0].slice(-3) !== 'any' ? title : 'Товар закончился'}
          className="object-cover w-full h-full"
        />
      </div>

      <div className=" flex flex-col gap-3 justify-between items-start w-full">
        <p className="line-clamp-3 text-sm my-5 h-[60px] overflow-hidden">
          {description}
        </p>

        <div className="flex items-center justify-between w-full">
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
            <ButtonsIcon theme="dark" link="Добавить в корзину" icon="heart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
