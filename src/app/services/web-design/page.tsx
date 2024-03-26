"use client";
import HowTo from "@/components/how-to";
import PortofolioComponent from "@/components/portofolio";
import { Button, Typography } from "@material-tailwind/react";
import {
  MessageCircleMore,
  PackageOpen,
  Scale,
  SmileIcon,
  Waypoints,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import WhatsAppButton from "@/components/contact/button";

const benefits = [
  {
    title: "kesan pertama perusahaan",
    desc: "Jika logo design produk Anda memberikan kesan yang baik di awal pertemuan, tentu konsumen akan mencari tahu lebih jauh tentang brand Anda.",
    icon: <SmileIcon className="w-16 h-16 text-[#FFD700]" />,
  },
  {
    title: "membedakan dari kompetitor",
    desc: "Desain logo unik & inovatif dapat digunakan untuk membuat brand produk Anda tampil stand-out sehingga bikin menarik perhatian konsumen.",
    icon: <PackageOpen className="w-16 h-16 text-[#FFD700]" />,
  },
  {
    title: "representasi perusahaan",
    desc: "Desain logo adalah wajah perusahaan, apabila pembuatan logo dibuat dengan asal-asalan maka membuat konsumen melihat produk brand Anda dengan remeh, begitupun sebaliknya.",
    icon: <Scale className="w-16 h-16 text-[#FFD700]" />,
  },
  {
    title: "membangun loyalitas",
    desc: "Untuk membuat produk Anda terlihat berkualitas, tentu semua diawali dengan mempunyai logo design yang kuat, memorable, dan konsisten diterapkan dimanapun baik offline maupun online.",
    icon: <Waypoints className="w-16 h-16 text-[#FFD700]" />,
  },
  {
    title: "memuat nilai perusahaan",
    desc: "Dengan memiliki visi&misi yang tersampaikan pada desain logo perusahaan, tentu memberikan kesan brand Anda sangat serius dalam berbisnis.",
    icon: <MessageCircleMore className="w-16 h-16 text-[#FFD700]" />,
  },
];

function LogoDesignPage() {
  return (
    <ParallaxProvider scrollAxis="vertical">
      <section className="min-h-screen flex flex-col py-16 mt-16">
        <div className="max-w-6xl px-8 lg:px-12 mx-auto w-full flex flex-col gap-8 items-center text-center">
          <Typography
            placeholder="title"
            className="text-xl lg:text-4xl font-bold capitalize"
          >
            creative logo design agency
          </Typography>
          <Typography
            placeholder="desc"
            className="text-sm lg:text-lg text-gray-700"
          >
            Jasa desain logo kreatif dan konseptual untuk brand identity
            perusahaan Anda. Pembuatan logo bisa melalui online, dengan
            paket-paket logo design yang fleksibel dan lebih murah.
            Konsultasikan kebutuhan desain logo perusahaan Anda untuk{" "}
            <span className="font-bold">
              {" "}
              membuat produk Anda 1 langkah lebih bernilai daripada puluhan
              bahkan ratusan calon produk kompetitor!
            </span>
          </Typography>
          <Image
            src="/images/services/design-logo/head1.png"
            width={540}
            height={320}
            alt="image"
          />
          <Typography
            placeholder="title"
            className="text-xl lg:text-4xl font-bold capitalize"
          >
            Mengapa Logo Penting Untuk Brand Anda?
          </Typography>
          <Typography
            placeholder="desc"
            className="text-sm lg:text-lg text-gray-700"
          >
            <span className="font-bold">
              Karena desain logo merupakan penjiwaan dari brand Anda.
            </span>{" "}
            Dengan ribuan jenis produk yang sama antara brand, customer tentu
            akan lebih memilih produk yang memiliki logo design yang menarik
            ketika pertama kali dilihatnya, jasa pembuatan desain logo kami akan
            sesuai dengan visi dan misi brand atau perusahaan Anda sehingga
            customer Anda tidak akan lupa dengan ciri khas dari brand perusahaan
            Anda.
          </Typography>
        </div>
        <div className="w-full bg-[#2b2c36] mt-16">
          <div className="max-w-6xl mx-auto px-8 flex flex-col gap-16 items-center text-center py-16">
            <Typography
              placeholder="title"
              className="text-xl lg:text-4xl font-bold capitalize max-w-6xl px-8 lg:px-12 text-white"
            >
              Manfaat memiliki desain logo
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {benefits.map((val, index) => (
                <div
                  key={index}
                  className="col-span-1 flex flex-col gap-4 items-center text-center"
                >
                  {val.icon}
                  <Typography
                    placeholder="title"
                    className="text-lg lg:text-xl font-bold capitalize  text-white"
                  >
                    {val.title}
                  </Typography>
                  <Typography
                    placeholder="title"
                    className="text-md lg:text-lg capitalize font-semibold text-gray-500"
                  >
                    {val.desc}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" mx-auto w-full flex flex-col items-center text-center">
          <div className="flex flex-col gap-8 py-16 items-center text-center w-full max-w-6xl mx-auto ">
            <Typography
              placeholder="title"
              className="text-xl lg:text-4xl font-bold capitalize max-w-6xl px-8 lg:px-12"
            >
              Portfolio Ability Pictures
            </Typography>
            <Typography
              placeholder="desc"
              className="text-sm lg:text-lg text-gray-700"
            >
              Sebagai salah satu logo design agency, selama bertahun-tahun kami
              telah melayani jasa bikin logo untuk berbagai brand produk dan
              perusahaan. Di setiap proses pembuatan logo, kami mengedepankan
              desain logo yang kreatif, unik, dan profesional.
            </Typography>
          </div>
          <PortofolioComponent />

          <HowTo />

          <div className="py-12 max-w-7xl px-6 mx-auto w-full flex flex-col gap-12 items-center justify-center">
            <Typography
              placeholder="title"
              className="  text-xl md:text-4xl lg:text-6xl font-bold"
            >
              Paket Logo Design (RateBook 2020), Harga Murah Desain Bagus
            </Typography>
            <Button
              placeholder="contact-us"
              className="uppercase rounded-full border bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-lg transition-all duration-300"
            >
              download ratebook 2020 logo design
            </Button>
            <WhatsAppButton />
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
}

export default LogoDesignPage;
