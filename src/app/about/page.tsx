"use client";

import AboutComponent from "@/components/about";
import Achievement from "@/components/achievement";
import HowTo from "@/components/how-to";
import LogoMarquee from "@/components/logo-marquee";
import Percentage from "@/components/percentage";
import ProgressBar from "@/components/progress-bar";
import Services from "@/components/service";
import { Button, Step, Stepper, Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const currentYear = new Date().getFullYear();
const years = currentYear - 2020;
const client = 50;
const histories = ["2020", "2021", "2022", "2023", "2024"];

const contentHistory = [
  {
    title: "Kelahiran Ability Pictures",
    date: "Januari 2020",
    desc: "Diawali dengan sebuah proyek iseng untuk membuatkan sebuah branding logo pada bisnis teman, Ability Pictures mendapatkan klien pertamanya dalam membuat sebuah Logo",
    image: "/images/logo-ability-white.png",
  },
  {
    title: "Satu tahun kemudian",
    desc: (
      <span>
        ◉ Podcast Production Ability Channel
        <br />
        ◉ HOS (History On Searching) Monolog
        <br />
        ◉ POS (Power of Silaturahim)
        <br />
      </span>
    ),
    image: "/images/logo-ability-white.png",
  },
  {
    title: "Dua tahun kemudian",
    desc: (
      <span>
        ◉ Company Profile Java Halu Coffee Farm
        <br />
        ◉ Digital Branding Ajeep Coffee
        <br />
        ◉ Official Music Video “Negeri Nirwana”
        <br />
        ◉ Photo Product Kupie LON
        <br />
      </span>
    ),
    image: "/images/logo-ability-white.png",
  },
  {
    title: "Tiga tahun kemudian",
    desc: (
      <span>
        ◉ Company Profile PT. Nusantara Power
        <br />
        ◉ Photo & Video Product PT. Kemenangan Andalan Kemasan
        <br />
        ◉ Personal Branding Marcos Nasution
        <br />
        ◉ Podcast ICDX Group
        <br />
        ◉ Video Product Ability Apparel
        <br />
        ◉ Photo Product Mattea Social Space
        <br />
        ◉ Photo Product Sambal Bali
        <br />
      </span>
    ),
    image: "/images/logo-ability-white.png",
  },
  {
    title: "Masa Kini dan Masa Depan",
    desc: "Kami berkomitmen untuk mendampingi UMKM dan Wirausahawan di Indonesia dengan layanan berkualitas tinggi, memastikan produk lokal memiliki standar yang setara dengan produk luar negeri.",
    image: "/images/logo-ability-white.png",
  },

];

function AboutPage() {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleMessageButtonClick = () => {
    const message = encodeURIComponent("Hallo Admin, saya ingin bertanya tentang Ability Pictures");
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6281297040923&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <ParallaxProvider scrollAxis="vertical">
      <section className="flex flex-col min-h-screen">
        <div className="w-full bg-gray-900">
          <AboutComponent withButton={false} />
        </div>

        <div className="w-full bg-gray-900">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col md:flex-row justify-center md:justify-between gap-8 py-12 px-8 items-center">
              <Image
                src="/images/logo-ability-white.png"
                alt="logo ability pictures"
                width={250}
                height={200}
                className=""
                // loading="lazy"
                priority
              />
              <div className="max-w-lg">
                <Typography
                  placeholder="desc"
                  className="uppercase font-bold text-xl text-white italic text-center md:text-end"
                >
                  “KAMI ADALAH SEBUAH AGENSI KREATIF YANG BERDEDIKASI UNTUK
                  MEMBUAT PROYEK YANG BERMAKNA”
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#FFD700]">
          <div className="max-w-4xl mx-auto px-6 py-28">
            <Typography
              placeholder="desc"
              className="text-gray-900 text-center text-lg md:text-xl lg:text-2xl font-semibold"
            >
              Berlokasi di Harapan Indah Kota Bekasi, Kami telah membangun keahlian selama lebih dari {years} tahun dan menyelesaikan proyek untuk lebih dari {client} klien dengan hasil kepuasan yang tinggi.
            </Typography>
          </div>
        </div>

        <section className="bg-gray-900">
          <div className="py-32 w-full max-w-6xl px-8 mx-auto flex flex-col gap-16">
            <Typography
              placeholder="title"
              className="text-white text-xl md:text-4xl lg:text-5xl font-bold"
            >
              Sejarah Ability Pictures
            </Typography>
            <Stepper
              placeholder="history step"
              activeStep={activeStep}
              aria-orientation="vertical"
              activeLineClassName="bg-[#FFD700] text-white"
            >
              {histories.map((val, index) => (
                <Step
                  key={index}
                  placeholder={index}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer w-24 h-24 ${activeStep >= index
                      ? "!bg-[#FFD700] text-white"
                      : "!bg-white !text-gray-800 border"
                    } hover:!bg-[#FFD700] hover:!text-white transition-colors duration-300 text-xl`}
                >
                  {val}
                </Step>
              ))}
            </Stepper>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full flex flex-col gap-8 mr-12">
                <Typography
                  placeholder="title"
                  variant="h2"
                  className="capitalize text-xl md:text-3xl lg:text-4xl text-white font-bold"
                >
                  {contentHistory[activeStep].title}
                </Typography>
                {contentHistory[activeStep].date && (
                  <Typography
                    placeholder="title"
                    variant="h3"
                    className="capitalize text-lg md:text-xl lg:text-3xl text-white font-medium"
                  >
                    {contentHistory[activeStep].date}
                  </Typography>
                )}
                <Typography
                  placeholder="title"
                  variant="lead"
                  className=" text-lg md:text-xl text-white font-medium"
                >
                  {contentHistory[activeStep].desc}
                </Typography>
              </div>
              {contentHistory[activeStep].image && (
                <div className="sm:flex sm:items-center sm:justify-center">
                  <Image
                    src={contentHistory[activeStep].image ?? ""}
                    alt="logo ability pictures"
                    width={250}
                    height={200}
                    className="mx-auto"
                    // loading="lazy"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        <Achievement />
        <LogoMarquee />
        <Services />
        <HowTo />

        <div className="max-w-7xl px-6 py-12 mx-auto w-full flex flex-col items-center justify-center gap-12">
          <Typography
            placeholder="title"
            className="text-xl md:text-4xl lg:text-6xl font-bold"
          >
            Punya pertanyaan lebih lanjut?
          </Typography>
          <Button
            placeholder="contact-us"
            className="uppercase rounded-full bg-[#FFD700] text-gray-900 hover:bg-gray-800 hover:text-white hover:shadow-lg transition-all duration-300"
            onClick={handleMessageButtonClick}
          >
            whatsapp kami
          </Button>
        </div>
      </section>
    </ParallaxProvider>
  );
}

export default AboutPage;
