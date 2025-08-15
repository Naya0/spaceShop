import React from "react";
import { Link } from "react-router";

interface Button {
  height?: number;
  width?: number;
  theme: "dark" | "light";
  link: string;
  title: string;
}

const Button = ({ height = 50, width = 250, theme, link, title }: Button) => {
  return (
    <Link to={'/catalog'}>
    <div
      className={`
    bg-white 
      relative flex justify-center items-center
      hover:cursor-pointer  hover:text-white
      ${theme == "light" ? "hover:bg-[#9b9b9b42] " : "hover:bg-gray-700 hover:border-gray-700"}
      border-solid border
      ${theme == "light" ? "border-white" : "border-gray-600"}
      transition delay-150 duration-300
      `}
      style={{ width: width + "px", height: height + "px" }}
    >
      {title}
    </div>
    </Link>
  );
};

export default Button;
