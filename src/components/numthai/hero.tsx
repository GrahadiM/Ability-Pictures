"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function NumthaiHero() {
  return (
    <header className="">
      <div className="relative h-40 md:h-80 lg:h-96 ">
        <Image
          width={1200}
          height={600}
          src="/images/howto-black.png"
          alt="mangements"
          className="h-40 md:h-80 lg:h-96 w-full object-cover absolute"
          priority
        />
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="max-w-6xl mx-auto flex relative flex-col justify-end w-full h-full pb-16 lg:pb-24 ">
          <Typography
            placeholder=""
            className="text-xl sm:text-3xl font-semibold md:text-5xl lg:text-7xl text-center  leading-[45px] lg:leading-[50px] text-white"
          >
            Numthai
          </Typography>
        </div>
      </div>
    </header>
  );
}

export default NumthaiHero;
