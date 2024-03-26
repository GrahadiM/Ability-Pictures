"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function AboutHero() {
  return (
    <header className="">
      <div className="relative h-60 md:h-80 lg:h-96 ">
        <Image
          width={1200}
          height={600}
          src="/images/howto-black.png"
          alt="mangements"
          className="h-60 md:h-80 lg:h-96 w-full object-cover absolute"
          // loading="lazy"
          priority
        />
        <div className="absolute inset-0 bg-gray-900/60" />
        <div className="max-w-6xl mx-auto flex relative flex-col justify-end w-full h-full pb-8 lg:pb-24 ">
          <Typography
            placeholder=""
            className="capitalize font-bold text-3xl md:text-5xl lg:text-7xl text-center leading-[100px] md:leading-[175px] lg:leading-[80px] text-white"
          >
            Tentang Kami
          </Typography>
        </div>
      </div>
    </header>
  );
}

export default AboutHero;
