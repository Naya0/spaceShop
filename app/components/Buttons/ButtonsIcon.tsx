import React from "react";
import Icon from "../Icon/Icon";

interface Button {
  height?: number;
  width?: number;
  theme: string;
  link: string;
  icon: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonsIcon = ({
  height = 35,
  width = 35,
  theme,
  link,
  icon,
  onClick,
}: Button) => {
  return (
    <button
      className={`
      bg-transparent
      relative flex justify-center items-center
      hover:cursor-pointer  hover:text-white
      ${theme == "light" ? "hover:bg-[#9b9b9b42] " : "hover:bg-gray-300 hover:border-gray-300"}
      transition delay-150 duration-300      
      `}
      style={{ width: width + "px", height: height + "px" }}
      onClick={onClick}
    >
      <Icon name={icon} width={20} height={20} />
    </button>
  );
};

export default ButtonsIcon;
