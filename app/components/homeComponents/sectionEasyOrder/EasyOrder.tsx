import React from "react";
import EasyOrderCart from "./EasyOrderCart";

const EasyOrder = () => {
  return (
    <section>
      <h2>Заказать легко!</h2>
      <div
        className="grid gap-5 justify-between
        md:grid-cols-[6fr_1fr_6fr_1fr_6fr] md:grid-rows-1
        sm:grid-cols-1 sm:grid-rows-[180px_20px_180px_20px_180px]"
      >
        <EasyOrderCart
          num="01"
          title="Начните собирать"
          description="Добавляйте все необходимое в корзину"
        />

        <div className="place-self-center">
          <div className="content-[''] w-5 h-5 bg-gray-500 rounded-full"></div>
        </div>

        <EasyOrderCart
          num="02"
          title="Оформление заказа"
          description=" Перейдите в корзину, выберите адрес, время и дату доставки. Мы сразу
            свяжемся с вами, для подтверждения"
        />

        <div className="place-self-center">
          <div className="content-[''] w-5 h-5 bg-gray-500 rounded-full"></div>
        </div>
        
        <EasyOrderCart
          num="03"
          title="Встреча милого курьера"
          description=" Перейдите в корзину, выберите адрес, время и дату доставки. Мы сразу
            свяжемся с вами, для подтверждения.Оформление заказаКурьер приезжает
            к вам в согласованное время"
        />
      </div>
    </section>
  );
};

export default EasyOrder;
