import React, { useEffect, useState } from "react";

interface ImagesPros {
  images: string[];
}

const ProducPagetImagesBlock = ({ images }: ImagesPros) => {
  const [currentImage, setCurrentImage] = useState<string>();

  useEffect(() => {
    if (!images.length) return;

    setCurrentImage(images[0]);
  }, [images]);

  return (
    <div
      className="
        w-full grid gap-3 grid-cols-1 grid-rows-[1fr_2fr] 
      lg:grid-cols-[1fr_3fr] lg:grid-rows-1    sm:grid-cols-1 sm:grid-rows-[1fr_3fr]  "
    >
      <div
        className="
           w-full flex justify-start gap-2 overflow-x-auto sm:overflow-x-visible lg:overflow-hidden pb-2
          lg:flex-col sm:flex-row "
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`min-w-[80px]  aspect-square bg-cover bg-center relative flex-shrink-0  hover:cursor-pointer hover:opacity-100
                          ${image !== currentImage && "opacity-60"}
                          `}
            style={{ backgroundImage: `url('${image}')` }}
            onClick={() => setCurrentImage(image)}
          ></div>
        ))}
      </div>
      <div
        className='w-full  content-[""] aspect-square bg-cover'
        style={{ backgroundImage: `url('${currentImage}')` }}
      ></div>
    </div>
  );
};

export default ProducPagetImagesBlock;
