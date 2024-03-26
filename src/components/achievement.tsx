import { Typography } from "@material-tailwind/react";
import React from "react";
import { ParallaxBanner, useParallax } from "react-scroll-parallax";

const currentYear = new Date().getFullYear();
const years = currentYear-2020;

const achievement = [
  {
    title: `${years}`,
    desc: "tahun pengalaman",
  },
  {
    title: "20+",
    desc: "pelanggan",
  },
  {
    title: "50+",
    desc: "project selesai",
  },
  {
    title: "99%",
    desc: "pelanggan puas",
  },
];

export function AchievementBanner() {
  const parallax = useParallax<HTMLDivElement>({
    easing: [1, 0, 0.5, 0.1],
  });
  return (
    <section ref={parallax.ref}>
      <ParallaxBanner
        layers={[{ image: "/images/howto-black.png", speed: -15 }]}
        className="h-96 w-full object-cover lg:h-[28rem] z-20 absolute inset-0"
      />
    </section>
  );
}

function Achievement() {
  return (
    <section className="w-full relative">
      <AchievementBanner />
      <div className="absolute inset-0 bg-[#FFD700]/80" />
      <div className="absolute inset-0 flex flex-col items-center gap-12 justify-center px-4 text-center">
        <Typography
          placeholder="title achievement"
          className="text-gray-900 text-xl md:text-2xl lg:text-4xl font-bold"
        >
          Pencapaian Kerja Ability Pictures
        </Typography>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {achievement.map((val, index) => (
            <div key={index} className="col-span-1">
              <div className="flex flex-col gap-2 items-center text-center">
                <Typography
                  placeholder="title achievement"
                  className="text-3xl md:text-5xl lg:text-7xl text-gray-900 font-bold"
                >
                  {val.title}
                </Typography>
                <Typography
                  placeholder="title achievement"
                  className="uppercase text-md lg:text-xl text-gray-900 font-semibold"
                >
                  {val.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievement;
