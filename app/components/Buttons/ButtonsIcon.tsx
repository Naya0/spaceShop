import React from "react";

interface Button {
  height?: number;
  width?: number;
  theme: string;
  link: string;
  icon: string;
}

const ButtonsIcon = ({
  height = 50,
  width = 50,
  theme,
  link,
  icon,
}: Button) => {
  return (
    <div
      className="bg-transparent relative flex justify-center items-center
      hover:bg-[#c4c4c442] hover:cursor-pointer hover:text-white
      border-solid border border-gray-300
      transition delay-150 duration-300"
      style={{ width: width + "px", height: height + "px" }}
    >
     <img src={`/images/` + icon } alt="изображение нопки" className="w-1/2 h-1/2 brightness-70" aria-hidden='true'/>
    </div>
  );
};

export default ButtonsIcon;
