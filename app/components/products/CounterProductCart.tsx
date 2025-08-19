import React from "react";
import { useDispatch } from "react-redux";
import { addItem, decrementItem } from "~/features/cart/cartSliсe";
import { useAppSelector } from "~/features/hooks";
import type { AppDispatch } from "~/features/store";
import type { Product } from "~/types/product.types";

interface ProductProps {
  id: string;
}

const CounterProductCart = ({ id }: ProductProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const cart = useAppSelector((state) => state.cart);

  let currentProduct = cart.items.filter(
    (i) => i.id.toString() === id.toString()
  );

  let { title, price, description, image } = currentProduct[0];

  const addToCart = () => {
    dispatch(
      addItem({
        id: id.toString(),
        title,
        price,
        description,
        image: image,
      })
    );
  };

  const minusQuantity = (id: string) => {
    dispatch(decrementItem(id));
  };

  return (
    <div className="flex gap-3 border border-solid border-gray-200 hover:bg-gray-50 items-center w-max self-end">
      <button
        className="size-8 text-lg hover:cursor-pointer hover:bg-gray-300"
        onClick={() => minusQuantity(id.toString())}
      >
        -
      </button>
      <span className="text-lg w-[30px] text-center">
        {currentProduct[0].quantity}
      </span>
      <button
        className="size-8 text-lg hover:cursor-pointer hover:bg-gray-300"
        onClick={() => addToCart()}
      >
        +
      </button>
    </div>
  );
};

export default CounterProductCart;
