"use client";

import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NumthaiPage() {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-r from-[#f55074] to-[#ff8400] w-full py-8">
        <div className="max-w-5xl w-full mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full flex flex-col gap-8 md:items-start items-center">
            <Typography
              placeholder="title"
              className="text-xl md:text-2xl lg:text-4xl font-bold text-white"
            >
              Perkenalkan dengan projek Numthai
            </Typography>
            <div className="flex">
              <Link
                href=""
                className=" hover:bg-white text-white border-white hover:text-black border font-semibold hover:shadow-xl uppercase rounded-full px-8 py-2  transition-colors duration-300"
              >
                instagram
              </Link>
            </div>
          </div>
          <Image
            src="/images/numthai/1.png"
            alt="header"
            width={340}
            height={180}
            className="w-[340px] h-full object-cover"
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 items-center justify-center py-16">
        <div className="col-span-1 justify-center flex">
          <Image
            src="/images/numthai/2.png"
            alt="header"
            width={140}
            height={60}
            className="w-[140px] object-cover"
          />
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
          <Typography
            placeholder="title"
            className="text-lg md:text-2xl font-bold text-[#FFD700] text-center md:text-right"
          >
            Numthai adalah sebuah project minuman kekinian yang dibuat,
            dikelola, dan dikembangkan secara berkonsep dan inovatif oleh
            Ability Pictures.
          </Typography>
          <Typography
            placeholder="title"
            className="text-md md:text-xl text-[#FFD700] text-center md:text-right"
          >
            Larisnya bisnis franchise minuman Thailand di Indonesia khususnya di
            kota besar seperti Jakarta, Bandung, Jogja, Solo dan Semarang
            menjadikan peluang usaha yang menguntungkan untuk Anda yang ingin
            mencoba berbisnis dengan modal yang kecil.
          </Typography>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 items-center justify-center py-16">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
          <Typography
            placeholder="title"
            className="text-lg md:text-2xl font-bold text-[#FFD700] text-center md:text-start"
          >
            Objektif
          </Typography>
          <ul className="list-disc pl-8 text-[#FFD700] font-bold">
            <li>
              Menjadi market leader waralaba minuman Low Cost khususnya di
              Semarang dan kota besar di Indonesia
            </li>
            <li>
              Memberikan peluang usaha yang menguntungkan bagi pengusaha baru.{" "}
            </li>
            <li>
              Memiliki merek yang menjadikannya kebanggaan dalam setiap gelas
              minumannya.{" "}
            </li>
            <li>
              Memberikan harga produk yang murah dan terjangkau dengan kualitas
              yang elegan, agar customer seakan mendapatkan 2 keuntungan
              sekaligus.{" "}
            </li>
          </ul>
        </div>
        <div className="col-span-1 justify-center flex">
          <Image
            src="/images/icons/numthai-product.png"
            alt="header"
            width={240}
            height={60}
            className="w-[240px] object-cover"
          />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#f55074] to-[#ff8400] w-full py-8">
        <div className="max-w-5xl w-full mx-auto px-6 flex space-y-8 md:space-y-0 gap-8 md:gap-12 flex-col md:flex-row items-center justify-center">
          <div className="w-full flex md:mr-auto flex-col  md:items-start items-center">
            <Typography
              placeholder="title"
              className="text-xl md:text-2xl lg:text-4xl font-bold text-white"
            >
              Target Market
            </Typography>
          </div>
          <ul className=" md:pl-12 text-white font-bold">
            <li>Low Cost</li>
          </ul>
          <ul className=" md:pl-12 text-white font-bold">
            <li>13 - 30 Years Old</li>
          </ul>
          <ul className="list-disc md:pl-12 text-white font-bold">
            <li>Student college</li>
            <li>Student</li>
            <li>Mature</li>
          </ul>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#f55074] to-[#ff8400] w-full py-8">
        <div className="max-w-5xl w-full mx-auto px-6 flex space-y-8 md:space-y-0 gap-8 md:gap-12 flex-col items-center justify-center">
          <div className="w-full flex md:mr-auto flex-col  md:items-start items-center">
            <Typography
              placeholder="title"
              className="text-xl md:text-2xl lg:text-4xl font-bold text-white"
            >
              Booth
            </Typography>
          </div>
          <Image
            src="/images/numthai/4.png"
            alt="header"
            width={1920}
            height={1080}
            className=" object-cover px-32"
          />
        </div>
      </div>
      <div className="bg-black w-full py-8">
        <div className="max-w-5xl w-full mx-auto px-6 flex space-y-8 md:space-y-0 gap-8 md:gap-12 flex-col items-center justify-center">
          <div className="w-full flex md:mr-auto flex-col  md:items-start items-center">
            <Typography
              placeholder="title"
              className="text-xl md:text-2xl lg:text-4xl font-bold text-[#FFD700]"
            >
              Selling Price
            </Typography>
          </div>
          <Image
            src="/images/numthai/menu.png"
            alt="header"
            width={1920}
            height={1080}
            className=" object-cover px-32"
          />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#f55074] to-[#ff8400] w-full py-8">
        <div className="max-w-5xl w-full mx-auto px-6 flex space-y-8 md:space-y-0 gap-8 md:gap-12 flex-col items-center justify-center">
          <div className="w-full flex md:mr-auto flex-col  md:items-start items-center">
            <Typography
              placeholder="title"
              className="text-xl md:text-2xl lg:text-4xl font-bold text-white"
            >
              Return Of Investment
            </Typography>
          </div>
          <Image
            src="/images/numthai/roi.png"
            alt="header"
            width={1920}
            height={1080}
            className=" object-cover px-32"
          />
          <Image
            src="/images/numthai/roi-2.png"
            alt="header"
            width={1920}
            height={1080}
            className=" object-cover px-32"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 items-center md:items-start justify-center py-16">
        <div className="col-span-1">
          <Typography
            placeholder="title"
            className="text-xl md:text-4xl font-bold text-[#FFD700] text-center md:text-start"
          >
            Alasan Memilih Numthai
          </Typography>
        </div>
        <div className="col-span-1">
          <ul className="list-disc pl-8 text-[#FFD700] font-bold">
            <li>
              Harga paket franchise yang paling terjangkau dari para pesaing
            </li>
            <li>Modal yang dikeluarkan kecil</li>
            <li>Bebas biaya royalti bulanan</li>
            <li>Kemudahan Management</li>
            <li>Balik modal dalam 2-3 bulan saja</li>
          </ul>
        </div>
        <div className="col-span-1">
          <ul className="list-disc pl-8 text-[#FFD700] font-bold">
            <li>
              Menjadi market leader waralaba minuman Low Cost khususnya di
              Semarang dan kota besar di Indonesia
            </li>
            <li>
              Memberikan peluang usaha yang menguntungkan bagi pengusaha baru.{" "}
            </li>
            <li>
              Memiliki merek yang menjadikannya kebanggaan dalam setiap gelas
              minumannya.{" "}
            </li>
            <li>
              Memberikan harga produk yang murah dan terjangkau dengan kualitas
              yang elegan, agar customer seakan mendapatkan 2 keuntungan
              sekaligus.{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#2b2c36] w-full py-8 ">
        <div className="max-w-5xl px-8 flex flex-col gap-8 text-gray-600 mx-auto justify-center items-center">
          <Typography
            placeholder="title"
            className="  text-xl md:text-2xl font-bold capitalize"
          >
            kerjasama dengan brand terkemuka
          </Typography>
          <Image
            src="/images/numthai/support-by.png"
            alt="header"
            width={360}
            height={60}
            className="w-[360px] object-cover"
          />
        </div>
      </div>
      <div className="w-full  bg-[#FFD700] text-center py-16">
        <div className="py-12 max-w-5xl px-6 mx-auto w-full flex flex-col gap-12 items-center justify-center">
          <Typography
            placeholder="title"
            className="  text-xl md:text-2xl lg:text-4xl font-bold text-white"
          >
            Tertarik memulai bisnis bersama Numthai?
          </Typography>
          <Button
            placeholder="contact-us"
            className="uppercase rounded-full bg-[#FFD700] border border-white text-white hover:bg-white hover:text-black hover:shadow-lg transition-all duration-300"
          >
            Download penawaran maralaba
          </Button>
        </div>
      </div>
    </section>
  );
}

export default NumthaiPage;
