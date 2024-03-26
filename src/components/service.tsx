"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const services = [
  // {
  //   title: "Logo Design",
  //   desc: "Jika perusahaan atau ukm Anda memiliki produk baru maka desain logo adalah langkah yang bagus untuk rebranding produk Anda agar terlihat lebih profesional dibandingkan dengan produk dari perusahaan lain.",
  //   icon: "/images/icons/edit-icon.png",
  // },
  // {
  //   title: "Brand Strategy",
  //   desc: "Kenali kebutuhan brand Anda, diperlukan strategi yang tepat untuk membuat produk ukm Anda diterima oleh target market  di Indonesia dari produk perusahaan Anda .",
  //   icon: "/images/icons/strategy-icon.png",
  // },
  // {
  //   title: "Visual Identity",
  //   desc: "Tim creative kami akan membuat desain grafis yang inovatif karena identitas yang baik membuat konsumen dapat mengenali produk perusahaan Anda tanpa perlu membaca nama produk Anda.",
  //   icon: "/images/icons/identity-icon.png",
  // },
  // {
  //   title: "Social Management",
  //   desc: "Mengelola dan memaksimalkan kehadiran dan interaksi sosial bisnis Anda dengan strategi yang tepat dan konten berkualitas, meningkatkan kesadaran merek dan keterlibatan pelanggan.",
  //   icon: "/images/icons/sosmed-icon.png",
  // },
  {
    title: "Photo & Video Produk",
    desc: "Merupakan salah satu layanan yang kami sediakan. Photo & Produk ini dapat dimanfaatkan sebagai media promosi di Sosial Media, Website hingga Katalog.",
    icon: "/images/icons/strategy-icon.png",
  },
  {
    title: "Company Profiles",
    desc: "Salah satu hal penting yang harus dimiliki oleh sebuah perusahaan. Tanpa Company Profile, mungkin pengguna tidak dapat mengetahui secara detail informasi perusahaan yang dibangun, apa produk yang ditawarkan dan sebagainya.",
    icon: "/images/icons/identity-icon.png",
  },
];

function Services() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="w-full py-16 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center md:items-start gap-16">
          <Typography
            placeholder="title services"
            className="text-lg md:text-2xl lg:text-5xl capitalize font-bold"
          >
            Layanan Ability Pictures
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {services.map((val, index) => (
              <div
                key={index}
                className="col-span-1 flex flex-col gap-4 items-center lg:items-start text-center lg:text-justify"
              >
                <Image
                  src={val.icon}
                  width={120}
                  height={120}
                  alt="icon services"
                  className="w-16 h-auto"
                  // loading="lazy"
                  priority
                />
                <Typography
                  placeholder="title services"
                  className=" text-lg md:text-xl lg:text-2xl capitalize font-bold text-white"
                >
                  {val.title}
                </Typography>
                <Typography
                  placeholder="desc services"
                  className=" text-md md:text-lg lg:text-xl capitalize font-semibold text-white"
                >
                  {val.desc}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
