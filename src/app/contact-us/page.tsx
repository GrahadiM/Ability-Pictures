"use client";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/16/solid";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import WhatsAppButton from "@/components/contact/button";
import React from "react";

function ContactUs() {
  const handleMessageContactButton = () => {
    const message = encodeURIComponent("Hallo Admin, saya ingin bertanya tentang Ability Pictures");
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6281297040923&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <section className="flex flex-col ">
      <div className="max-w-6xl px-6 mx-auto w-full py-32">
        <div className="flex flex-col gap-12">
          <Typography
            placeholder="title"
            className="capitalize text-xl md:text-2xl lg:text-4xl font-bold text-black"
          >
            whatsapp kami
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-1 flex flex-col gap-4">
              <div className="flex flex-row gap-2 items-center">
                <MapPinIcon className="w-12 h-12 text-[#FFD700]" />
                <div className="w-full">
                  <Typography
                    placeholder="title"
                    className="capitalize text-lg md:text-xl font-bold text-black"
                  >
                    Ruko Cemara – Grand Boulevard Harapan Indah Blok U6 No. 17, Kabupaten Bekasi, Jawa Barat 17214
                  </Typography>
                </div>
              </div>
              
              <div className="flex flex-row gap-2 items-center">
                <EnvelopeIcon className="w-12 h-12 text-[#FFD700]" />
                <div className="w-full">
                  <Typography
                    placeholder="title"
                    className="lowercase text-lg md:text-xl font-bold text-black"
                  >
                    abilitypictures22@gmail.com
                  </Typography>
                </div>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <ChatBubbleOvalLeftEllipsisIcon className="w-12 h-12 text-[#FFD700]" />
                <div className="w-full">
                  <Typography
                    placeholder="title"
                    className="capitalize text-lg md:text-xl font-bold text-black"
                  >
                    +62 812 9704 0923  WA ( AMRI )
                  </Typography>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-8">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="col-span-1">
                  <Input
                    crossOrigin={"anonymous"}
                    placeholder="Name"
                    name="name"
                    label="Name"
                  />
                </div>

                <div className="col-span-1">
                  <Input
                    crossOrigin={"anonymous"}
                    placeholder="Email"
                    name="email"
                    label="Email"
                  />
                </div>
              </div>
              <Textarea label="Message" />
              <div className="flex">
                <Button
                  placeholder="send"
                  className="uppercase rounded-full bg-[#FFD700] text-gray-900 hover:bg-gray-800 hover:text-white hover:shadow-lg transition-all duration-300"
                  onClick={handleMessageContactButton}
                >
                  kirim pesan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FFD700] text-center py-16">
        <div className="py-12 max-w-5xl px-6 mx-auto w-full flex flex-col gap-12 items-center justify-center">
          <Typography
            placeholder="title"
            className="  text-xl md:text-2xl lg:text-4xl font-bold text-gray-900"
          >
            Hubungan yang baik menciptakan sebuah kolaborasi yang hebat!
          </Typography>

          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
