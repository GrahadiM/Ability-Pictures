"use client";

import { Collapse, Typography } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";

export function ProductCard({ title, img }: any) {
  const [hover, setHover] = useState(false);

  const onHoverHandler = (val: boolean) => setHover(val);

  return (
    <div
      onMouseEnter={() => onHoverHandler(true)}
      onMouseLeave={() => onHoverHandler(false)}
      className="relative h-[300px] lg:h-[600px] xl:h-[900px] w-full text-white flex flex-col items-left justify-end cursor-pointer hover:opacity-90"
    >
      <Image
        width={768}
        height={768}
        src={img}
        alt="bg"
        className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-300 overflow-hidden"
        // loading="lazy"
        priority
      />

      <div
        className={`absolute inset-0 bg-black/80 transition-opacity ease-in duration-300 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="relative">
        <Collapse
          open={hover}
          animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
        >
          <Typography
            placeholder={title}
            className="text-xl text-start p-6 font-bold"
          >
            {title}
          </Typography>
        </Collapse>
      </div>
    </div>
  );
}

export default ProductCard;
