import React from "react";

interface OrderCart {
  num: string;
  title: string;
  description: string;
}

const EasyOrderCart = ({num, title, description}: OrderCart) => {
  return (
    <div className="bg-gray-100 flex flex-col items-start p-5 min-h-[180px]  gap-5">
      <div className="flex gap-2 ">
        <span className="text-5xl font-bold text-gray-800">{num}</span>
        <span className="text-lg">{title}</span>
      </div>
      <p className="text-xs">{description}</p>
    </div>
  );
};

export default EasyOrderCart;
