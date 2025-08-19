import React from "react";
import { useDispatch } from "react-redux";
import { addItem, decrementItem, removeItem } from "~/features/cart/cartSliсe";
import { useAppSelector } from "~/features/hooks";
import type { AppDispatch } from "~/features/store";
import type { CartType } from "~/types/product.types";
import { sumBy } from "~/utils/common";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useDispatch<AppDispatch>();

  const clearCart = (id: string) => {
    dispatch(removeItem(id.toString()));
  };

  const minusQuantity = (id: string) => {
    dispatch(decrementItem(id));
  };

  const plusQuantity = (product: CartType) => {
    dispatch(
      addItem({
        id: product.id.toString(),
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image[0],
      })
    );
  };

  return (
    <section className="pt-[60px]">
      <h2>Cart</h2>
      {!cart.items.length ? (
        <p>Корзина пуста</p>
      ) : (
        <div className="flex flex-col gap-5">
          {cart.items.map((item, i) => (
            <div
              key={i}
              className="w-full grid items-center justify-between gap-3
              md:grid-cols-[1fr_5fr_1fr] md:grid-rows-1
              grid-cols-1 grid-rows-[6fr_1fr_1fr] h-[430px] md:h-[160px]
              "
            >
              <div>
                <img src={item.image} alt={item.title} className="w-5/6" />
              </div>
              <div className="h-full flex flex-col justify-between">
                <span className="text-base font-bold">{item.title}</span>
                <p className="text-sm line-clamp-2 ">{item.description}</p>
                <span className="text-base font-medium">
                  {item.price * 100 * item.quantity} ₽
                </span>
              </div>
              <div className="flex gap-3 border border-solid border-gray-200 hover:bg-gray-50 items-center w-max self-end">
                <button
                  className="size-8 text-lg hover:cursor-pointer"
                  onClick={() => minusQuantity(item.id)}
                >
                  -
                </button>
                <span className="text-lg w-[30px] text-center">
                  {item.quantity}
                </span>
                <button
                  className="size-8 text-lg hover:cursor-pointer"
                  onClick={() => plusQuantity(item)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <hr />
          <span className="text-xl font-medium" suppressHydrationWarning>
            TOTAL PRICE:{" "}
            {cart.items.length !== 0
              ? sumBy(
                  cart.items.map((item) => item.quantity * item.price * 100)
                )
              : "0"}{" "}
            ₽
          </span>
        </div>
      )}
    </section>
  );
};

export default Cart;
