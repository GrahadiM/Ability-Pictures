"use client";

import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <Carousel
      placeholder="header"
      transition={{ duration: 0.5 }}
      className="h-screen"
      navigation={({ setActiveIndex, activeIndex, length }) => <></>}
      loop
      autoplay
    >
      <Image
        src="/images/banner/1.png"
        alt="image 1"
        width={1920}
        height={1080}
        className="h-full w-full object-cover"
        // loading="lazy"
        priority
      />
      <Image
        src="/images/banner/2.png"
        alt="image 2"
        width={1920}
        height={1080}
        className="h-full w-full object-cover"
        // loading="lazy"
        priority
      />
      <Image
        src="/images/banner/3.png"
        alt="image 3"
        width={1920}
        height={1080}
        className="h-full w-full object-cover"
        // loading="lazy"
        priority
      />
    </Carousel>
  );
}

export default Hero;
