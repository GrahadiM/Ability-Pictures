"use client";
import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AboutComponent({ withButton: withButton = true }) {
  return (
    <section className="bg-gray-900">
      <div className="max-w-7xl w-full mx-auto pt-16 px-6 py-16">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
          <div className="col-span-1">
            <div className="flex flex-col md:text-left text-center gap-8">
              <Typography
                placeholder="title-about"
                variant="h1"
                className="text-white"
              >
                Tentang Kami
              </Typography>
              <Typography
                placeholder="title-about"
                variant="lead"
                className="text-white font-semibold"
              >
                Perkembangan teknologi yang pesat telah mengubah cara dunia bekerja. Perilaku pengguna dan konsumsi media telah mengubah arah yang berbeda karena berkembangnya dunia internet yang begitu cepat.
                <br />
                <br />
                Ability Pictures hadir untuk membantu Korporasi dan UMKM dalam kebutuhan produksi visual seperti
                <a href="" className="text-white hover:text-[#E36255] hover:opacity-80">
                  {" "}
                  Photo Produk
                </a>
                ,{" "}
                <a href="" className="text-white hover:text-[#E36255] hover:opacity-80">
                  {" "}
                  Video Produk
                </a>
                , dan {" "}
                <a href="" className="text-white hover:text-[#E36255] hover:opacity-80">
                  {" "}
                  Company Profile
                  {" "}
                </a>
                yang berkualitas.
                <br />
                <br />
                Ability Pictures merupakan Production House yang bergerak dibidang Visual Kreatif. Digital Commercial menjadi fokus utama kami dengan didukung equipment dan tim yang professional.
              </Typography>
              {withButton && (
                <div className="flex mt-2">
                  <Button
                    variant="outlined"
                    placeholder="more-button"
                    className="uppercase rounded-full px-8 py-2 text-lg hover:bg-white hover:shadow-xl text-white border-white hover:text-black transition-colors duration-300"
                  >
                    <Link href="/about">
                      selengkapnya
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <Image
              src={"/images/icons/icon.png"}
              width={175}
              height={175}
              alt="Ability Pictures"
              className="h-full w-full object-scale-down"
              // loading="lazy"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutComponent;
