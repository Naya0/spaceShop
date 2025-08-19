import React from "react";

interface IconProps {
  name: string;
  width?: number;
  height?: number;
  fill? : string;
}

const Icon = ({ name, width = 15, height = 15, fill = '#1d1d1d' }: IconProps) => {
  return (
    <svg className={`icon icon-${name}`} style={{ width, height, fill }} >
      <use
        xlinkHref={`/images/sprite.svg#${name}`}
      ></use>
    </svg>
  );
};

export default Icon;
