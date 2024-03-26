"use client";
import GalleryHero from "@/components/gallery/hero";
import GalleryComponent from "@/components/gallery";
import LogoMarquee from "@/components/logo-marquee";
import { Button } from "@material-tailwind/react";
import React from "react";

function GalleryPage() {
  return (
    <section className="flex flex-col min-h-screen ">
      <GalleryHero />
      <GalleryComponent />
      {/* <div className="py-12 max-w-7xl px-6 mx-auto w-full flex flex-col gap-12 items-center justify-center">
        <Button
          placeholder="contact-us"
          className="uppercase rounded-full bg-[#FFD700]"
        >
          lihat selengkapnya
        </Button>
      </div> */}
      <LogoMarquee />
    </section>
  );
}

export default GalleryPage;