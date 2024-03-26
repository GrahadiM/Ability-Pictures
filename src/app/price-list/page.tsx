"use client";
import PriceListImage from "@/components/pricelist";
import PriceListHero from "@/components/price-list/hero";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import LogoMarquee from "@/components/logo-marquee";

const services = [
  {
    title: "Grade A UMKM",
    price_start : "Rp.3.000.000",
    style: "bg-white text-gray-900",
    desc: (
      <span>
        <br />
        ◉ Unlimited Product<br/>
        ◉ Unlimited Photo<br/>
        ◉ 1-2 Menit Video Product/product<br/>
        ◉ Full Retouch<br/>
        ◉ Story Line<br/>
        ◉ Free Company Profile<br/>
        ◉ Pengerjaan 3 – 5 hari<br/>
      </span>
    ),
  },
  {
    title: "Grade B UMKM",
    price_start : "Rp.1.500.000",
    style: "bg-white text-gray-900",
    desc: (
      <span>
        <br />
        ◉ Max. 20 Product untuk Photoshoot<br/>
        ◉ Unlimited Photo<br/>
        ◉ Full Retouch<br/>
        ◉ Story Line<br/>
        ◉ Pengerjaan 3 – 5 hari<br/>
      </span>
    ),
  },
  {
    title: "Grade C UMKM",
    price_start : "Rp.1.000.000",
    style: "bg-white text-gray-900",
    desc: (
      <span>
        <br />
        ◉ Max. 10 Product untuk Photoshoot<br/>
        ◉ Unlimited Photo<br/>
        ◉ Full Retouch<br/>
        ◉ Story Line<br/>
        ◉ Pengerjaan 3 – 5 hari<br/>
      </span>
    ),
  },
  {
    title: "Grade D UMKM",
    price_start : "Rp.500.000",
    style: "bg-white text-gray-900",
    desc: (
      <span>
        <br />
        ◉ Max. 5 Product untuk Photoshoot<br/>
        ◉ Unlimited Photo<br/>
        ◉ Full Retouch<br/>
        ◉ Story Line<br/>
        ◉ Pengerjaan 3 – 5 hari<br/>
      </span>
    ),
  },
  {
    title: "Company Profile",
    price_start : "Rp.10.000.000",
    price_end : "Rp.15.000.000",
    style: "bg-white text-gray-900",
    desc: (
      <span>
        <br />
        ◉ 3 – 10 Menit Output<br />
        ◉ 4k Video Resolution<br />
        ◉ Story Line<br />
        ◉ Full Equipment<br />
        ◉ Dokumentasi Behind The Scene<br />
        ◉ Free Drone Footage<br />
        ◉ Free RAW File<br />
        ◉ Free 1 Menit Teaser<br />
      </span>
    ),
  },
];

function PriceListHeroPage() {
  const handleMessageButtonClick = (title : string, price : string) => {
    const message = encodeURIComponent(`Hallo Admin Ability Pictures, Saya ingin bertanya tentang detail dari paket ${title} dengan harga mulai dari ${price}`);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6281297040923&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <>
      <PriceListHero />
      <PriceListImage />

      {/* <section className="bg-[#000] w-full py-16">
        <div className="max-w-6xl px-8 mx-auto w-full flex flex-col gap-16">
          {services.map((val, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row justify-between items-center bg-white rounded-r-3xl rounded-t-3xl gap-8 px-8 py-12`}
            >
              <div className="flex flex-col">
                <Typography placeholder="title" className="text-3xl font-bold capitalize">
                  {val.title}
                </Typography>
                <Typography placeholder="harga" className="text-lg text-gray-700 mt-2">
                  Mulai dari {val.price_start ?? '0'}{val.price_end ? ' - '+val.price_end : ''}
                </Typography>
                <Typography placeholder="deskripsi" className="text-lg text-gray-700 mt-2">
                  Detail Layanan : {val.desc ?? 'Silahkan hubungi WhatsApp kami.'}
                </Typography>
              </div>
              <Button
                placeholder="Pesan Sekarang"
                className={`uppercase bg-white hover:bg-gray-900 text-gray-900 hover:text-white border-gray-900 border font-semibold hover:shadow-xl rounded-full px-8 py-2 text-lg mx-4 transition-colors duration-300`}
                onClick={() => handleMessageButtonClick(val.title, val.price_start)}
              >
                Pesan Sekarang
              </Button>
            </div>
          ))}
        </div>
      </section> */}

      <LogoMarquee />
    </>
  );
}

export default PriceListHeroPage;
