"use client";
import React from 'react';
import { Button } from "@material-tailwind/react";

const WhatsAppButton = () => {
  const handleMessageButtonClick = () => {
    const message = encodeURIComponent("Hallo Admin, saya ingin bertanya tentang Ability Pictures");
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6281297040923&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
        placeholder="contact-us"
        className="uppercase rounded-full border bg-gray-900 text-white hover:bg-white hover:text-black hover:shadow-lg transition-all duration-300"
        onClick={handleMessageButtonClick}
    >
      whatsapp Kami
    </Button>
  );
};

export default WhatsAppButton;
