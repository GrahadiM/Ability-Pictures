"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import { ParallaxBanner, useParallax } from "react-scroll-parallax";

const howto = [
  {
    title: "Initiation",
    desc: "Calon client menghubungi contact person Ability Pictures yang sudah tertera.",
  },
  {
    title: "Analysis",
    desc: "Tim kreatif Ability Pictures akan mempelajari konsep seperti apa yang diinginkan client.",
  },
  {
    title: "Design Production",
    desc: "Setelah konsep sudah disetujui client, selanjutnya kami akan membuat struktur kerja. Mulai dari Pra-Produksi, Produksi sampai Post-Produksi.",
  },
  {
    title: "Execution",
    desc: "Inilah proses yang krusial, yang mana semua kerangka dikemas sedemikian rupa agar sesuai dengan konsep yang sudah dibuat.",
  },
  {
    title: "Finish",
    desc: "Setelah semua selesai, akan dilakukan penyerah file kepada client.",
  },
];

export function HowToBanner() {
  const parallax = useParallax<HTMLDivElement>({
    easing: [1, 0, 0.5, 0.1],
  });
  return (
    <section ref={parallax.ref}>
      <ParallaxBanner
        layers={[{ image: "/images/achievement-black.png", speed: -20 }]}
        className="h-[20rem] md:h-[36rem] lg:h-[42rem] w-full object-cover block z-20 absolute md:inset-0"
      />
    </section>
  );
}

function HowTo() {
  return (
    // <section className="min-h-screen w-full relative">
    <section className="w-full relative">
      <HowToBanner />

      {/* <Image
        src="/images/how-to.jpg"
        width={1200}
        height={600}
        alt="how-to"
        className="h-[20rem] md:h-[36rem] lg:h-[42rem] w-full object-cover bg-fixed inset-0 absolute"
        // loading="lazy"
        priority
      /> */}

      <div className="block absolute md:inset-0 bg-[#FFD700]/80" />
      <div className="absolute inset-0 max-w-7xl mx-auto w-full px-6 py-12">
        <div className="flex flex-col gap-12 justify-center">
          <Typography
            placeholder="title"
            className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Our Simple Procces
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howto.map((val, index) => (
              <div key={index} className="col-span-1 flex flex-col">
                <Typography
                  className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-extrabold"
                  placeholder="title"
                >
                  {`0${index + 1}`}
                </Typography>
                <Typography
                  className="text-gray-900 text-xl md:text-2xl lg:text-3xl font-extrabold capitalize"
                  placeholder="title"
                >
                  {val.title}
                </Typography>
                <Typography
                  className="text-gray-900 text-md md:text-xl font-semibold mt-2"
                  placeholder="title"
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

export default HowTo;
