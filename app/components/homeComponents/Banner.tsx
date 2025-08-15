import React from "react";
import Button from "../Buttons/Button";

const Banner = () => {
  return (
    <section
      style={{
        backgroundImage: `url("/images/banner-home.jpg")`,
      }}
      className="h-[800px] w-full max-w-[100%] bg-cover bg-no-repeat"
    >
      <div className="w-full h-full bg-[#08080875] p-8 ">
        <div className="w-5/6 mx-auto h-full flex flex-col justify-end gap-[16px] max-w-[1600px] m-auto">
          <h1 className="text-4xl w-2/3 font-light text-amber-50">
            Ручная космическая графика – каждая открытка и плакат созданы с
            любовью к звёздам
          </h1>
          <p className="text-[#ffffff99] text-base">
            Научная точность и космическая поэзия – украшения и декор для тех,
            кто верит в магию Вселенной
          </p>
          <Button title="Перейти в каталог" link="catalog" theme="light" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
