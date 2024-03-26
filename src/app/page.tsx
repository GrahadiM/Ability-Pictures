"use client";
import Image from "next/image";
import Hero from "../components/home/hero";
import { Button, Collapse, Typography } from "@material-tailwind/react";
import { ParallaxProvider } from "react-scroll-parallax";
import Achievement from "@/components/achievement";
import Services from "@/components/service";
import HowTo from "@/components/how-to";
import AboutComponent from "@/components/about";
import Percentage from "@/components/percentage";
import { useState } from "react";

import PortofolioComponent from "@/components/portofolio";
import BlogCard from "@/components/blog_card";
import { blogs } from "@/data/blog_props";
import ProductCard from "@/components/product_card";
import WhatsAppButton from "@/components/contact/button";
import LogoMarquee from "@/components/logo-marquee";

interface ProductProps {
  title: string;
  img: string;
}

const products: ProductProps[] = [
  {
    title: "the soap story",
    img: "/images/products/product1.jpg",
  },
  {
    title: "milov by omah akung",
    img: "/images/products/product2.jpg",
  },
  {
    title: "the soap story",
    img: "/images/products/product3.jpg",
  },
];

export default function Home() {
  const handlePortofolioButtonClick = () => {
    window.location.href = "/portofolio";
  };

  return (
    <main className=" items-center justify-between">
      <ParallaxProvider scrollAxis="vertical">
        <Hero />
        <AboutComponent />
        <Achievement />
        <LogoMarquee />
        <Services />
        <HowTo />
        {/* <Percentage /> */}
        <PortofolioComponent />

        {/* <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 w-full">
          {products.map((val, index) => (
            <div key={index} className="col-span-1">
              <ProductCard {...val} />
            </div>
          ))}
        </div> */}

        <div className="w-full relative h-[12rem] bg-[url('/images/achievement-black.png')] bg-fixed bg-center">
          <div className="absolute inset-0 bg-gray-900 opacity-60 transition-opacity ease-in duration-300" />
          <div className="absolute inset-0 w-full flex items-center justify-center max-w-6xl mx-auto px-8">
            <Button
              variant="outlined"
              placeholder="more-button"
              className="uppercase rounded-full px-8 py-2 text-lg mx-4 hover:bg-white hover:shadow-xl text-white border-white hover:text-black transition-colors duration-300"
              onClick={handlePortofolioButtonClick}
            >
              lihat portfolio lengkap
            </Button>
          </div>
        </div>

        {/* <div className="max-w-6xl w-full mx-auto py-16">
          <div className="flex flex-col gap-16">
            <Typography
              placeholder="title"
              className="text-xl md:text-2xl lg:text-4xl font-bold"
            >
              Blog
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((val, index) => (
                <BlogCard key={index} {...val} />
              ))}
            </div>
            <div className="flex justify-center">
              <Button
                variant="outlined"
                placeholder="more-button"
                className="uppercase rounded-full px-8 py-2 text-lg mx-4 hover:bg-gray-800 hover:shadow-xl text-gray-800 border-gray-800 hover:text-white transition-colors duration-300"
              >
                lihat post lengkap
              </Button>
            </div>
          </div>
        </div> */}

        <div className="w-full bg-[#FFD700] text-center py-16">
          <div className="py-12 max-w-5xl px-6 mx-auto w-full flex flex-col gap-12 items-center justify-center">
            <Typography
              placeholder="title"
              className="  text-xl md:text-2xl lg:text-4xl font-bold text-gray-900"
            >
              Konsultasikan ide anda bersama tim branding kami yang hebat!
            </Typography>
            <WhatsAppButton />
          </div>
        </div>
      </ParallaxProvider>
    </main>
  );
}
