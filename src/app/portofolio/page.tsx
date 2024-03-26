"use client";
import PortofolioComponent from "@/components/portofolio";
import LogoMarquee from "@/components/logo-marquee";
import PortofolioHero from "@/components/portofolio/hero";
import { Button } from "@material-tailwind/react";
import React from "react";

function PortfolioPage() {
  return (
    <section className="flex flex-col min-h-screen ">
      <PortofolioHero />
      <PortofolioComponent />
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

export default PortfolioPage;