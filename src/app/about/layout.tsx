import Hero from "@/components/about/hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tentang Kami",
};

function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Hero />
      {children}
    </section>
  );
}

export default AboutLayout;
