import React, { useEffect, useState } from "react";
import { useAppSelector } from "~/features/hooks";

const Cart = () => {
  const [isClient, setIsClient] = useState(false);
  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="pt-[60px]"></div>;
  }
  return (
    <section className="pt-[60px]">
      <h2>Корзина</h2>
      <div className="flex flex-col gap-5">
        {!cart.items.length ? (
          <p>Корзина пуста</p>
        ) : (
          cart.items.map((item, i) => (
            <div
              key={i}
              className="w-full grid items-center justify-between gap-3
              md:grid-cols-[1fr_5fr_1fr] md:grid-rows-1
              grid-cols-1 grid-rows-[1fr_1fr_1fr] h-[300px] md:h-[160px]
              "
            >
              <div>
                <img src={item.image} alt={item.title} className="w-5/6 " />
              </div>
              <div className="h-full flex flex-col justify-between">
                <span className="text-base font-bold">{item.title}</span>
                <p className="text-sm line-clamp-2 ">{item.description}</p>
                <span className="text-base font-medium">
                  {item.price * 100} руб.
                </span>
              </div>
              <div className="flex gap-3 border border-solid border-gray-200 hover:bg-gray-50 items-center w-max self-end">
                <button className="size-8 text-lg  hover:cursor-pointer">
                  -
                </button>
                <span className="text-lg w-[30px] text-center">
                  {item.quantity}
                </span>
                <button className="size-8 text-lg  hover:cursor-pointer">
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Cart;
