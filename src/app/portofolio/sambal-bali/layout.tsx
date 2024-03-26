import Hero from "@/components/contact/hero";
import PortofolioHero from "@/components/portofolio/hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portofolio",
};

function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

export default ContactUsLayout;
