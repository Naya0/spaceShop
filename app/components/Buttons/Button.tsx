import React from "react";

interface Button {
  height?: number;
  width?: number;
  theme: string;
  link: string;
  title: string;
}

const Button = ({ height = 50, width = 250, theme, link, title }: Button) => {
  return (
    <div
      className="bg-white relative flex justify-center items-center
      hover:bg-[#9b9b9b42] hover:cursor-pointer hover:text-white
      border-solid border border-white
      transition delay-150 duration-300"
      style={{ width: width + "px", height: height + "px" }}
    >
      {title}
    </div>
  );
};

export default Button;
