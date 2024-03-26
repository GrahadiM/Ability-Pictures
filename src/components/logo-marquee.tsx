import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const principles = [
  "/images/client-logo/ajeep.png",
  "/images/client-logo/benareh.png",
  "/images/client-logo/kupie_lon.png",
  "/images/client-logo/mattea_ss.png",
  "/images/client-logo/jhc.png",
  "/images/client-logo/icdx_group.png",
  "/images/client-logo/pjb.png",
  "/images/client-logo/kak.png",
  "/images/client-logo/HIPMI.png",
];

function LogoMarquee() {
  return (
    <section className="bg-[#FFD700] py-8">
      <div className="">
        <Marquee>
          {principles.map((val) => {
            return (
              <Image
                key={val}
                src={val}
                alt="principle"
                className="px-14 w-full h-full"
                width={120}
                height={25}
                // loading="lazy"
                priority
              />
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}

export default LogoMarquee;
