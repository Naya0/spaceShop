import React from "react";

interface Button {
  height?: number;
  width?: number;
  theme: string;
  link: string;
  icon: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonsIcon = ({
  height = 50,
  width = 50,
  theme,
  link,
  icon,
  onClick,
}: Button) => {
  return (
    <button
      className={`
      bg-white 
      relative flex justify-center items-center
      hover:cursor-pointer  hover:text-white
      ${theme == "light" ? "hover:bg-[#9b9b9b42] " : "hover:bg-gray-300 hover:border-gray-300"}
      border-solid border
      ${theme == "light" ? "border-white" : "border-gray-600"}
      transition delay-150 duration-300      
      `}
      style={{ width: width + "px", height: height + "px" }}
      onClick={onClick}
    >
      <img
        src={`/images/` + icon}
        alt="изображение нопки"
        className="h-1/2 brightness-70 aspect-square "
        aria-hidden="true"
      />
    </button>
  );
};

export default ButtonsIcon;
