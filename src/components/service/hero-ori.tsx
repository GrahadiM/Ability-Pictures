"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function ServiceHero() {
  return (
    <header className="">
      <div className="relative h-40 md:h-80 lg:h-96 ">
        <Image
          width={1200}
          height={600}
          src="/images/services/hero.jpg"
          alt="mangements"
          className="h-40 md:h-80 lg:h-96 w-full object-cover absolute"
          priority
        />
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="max-w-6xl mx-auto flex relative flex-col justify-end w-full h-full pb-16 lg:pb-24 gap-8 ">
          <Typography
            placeholder=""
            className="text-xl sm:text-3xl font-semibold md:text-5xl lg:text-7xl text-start leading-[45px] lg:leading-[50px] text-white"
          >
            Layanan
          </Typography>
          <Typography
            placeholder=""
            className="text-lg sm:text-xl font-semibold md:text-2xl lg:text-3xl text-start leading-[45px] lg:leading-[50px] text-gray-500 uppercase"
          >
            Kenali kami lebih dalam di ratebook 2020
          </Typography>
        </div>
      </div>
    </header>
  );
}

export default ServiceHero;
