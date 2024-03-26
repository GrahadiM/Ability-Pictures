"use client";
import LogoMarquee from "@/components/logo-marquee";
import ServiceHero from "@/components/service/hero";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

const services = [
  {
    title: "logo design",
    url: "/services/logo-design",
    style: "bg-gradient-to-br from-[#50e9be] to-[#FFD700] text-gray-900",
  },
  {
    title: "visual brand identity",
    url: "/services/visual-brand-identity",
    style: "bg-gradient-to-br from-[#4963ba] to-[#50e9be] text-gray-900",
  },
  {
    title: "coorporate",
    url: "/services/coorporate",
    style: "bg-white text-gray-900",
  },
  {
    title: "packaging design",
    url: "/services/packaging-design",
    style: "bg-gradient-to-br from-[#03992b] to-[#f7e200] text-gray-900",
  },
  {
    title: "social media management",
    url: "/services/logo-design",
    style: "bg-gradient-to-br from-[#ebc738] to-[#f020f7] text-gray-900",
  },
  {
    title: "special offer",
    url: "/services/logo-design",
    style: "bg-white text-gray-900",
  },
  {
    title: "web design",
    url: "/service/logo-design",
    style: "bg-gradient-to-br from-[#05759e] to-[#3cf235] text-gray-900",
  },
  {
    title: "other service",
    url: "/services/logo-design",
    style: "bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900",
  },
];

function ServicePage() {
  return (
    <>
      <ServiceHero />

      <section className="bg-[#9698a3] w-full py-16">
        <div className="max-w-6xl px-8 mx-auto w-full flex flex-col gap-16">
          {services.map((val, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row justify-between items-center bg-white rounded-r-3xl gap-8 px-8 py-12`}
            >
              <div className="flex flex-col">
                <Typography placeholder="title" className="text-3xl font-bold capitalize">
                  {val.title}
                </Typography>
                <Typography placeholder="harga" className="text-lg text-gray-700 mt-2">
                  Mulai dari $XX.XX
                </Typography>
                <Typography placeholder="deskripsi" className="text-lg text-gray-700 mt-2">
                  Deskripsi singkat tentang layanan ini.
                </Typography>
              </div>
              <Link href={val.url} className={`hover:bg-gray-800 text-gray-800 border-gray-800 hover:text-white border font-semibold hover:shadow-xl uppercase rounded-full px-8 py-2 text-lg mx-4 transition-colors duration-300`}>
                selengkapnya
              </Link>
            </div>
          ))}
        </div>
      </section>

      <LogoMarquee />
    </>
  );
}

export default ServicePage;
