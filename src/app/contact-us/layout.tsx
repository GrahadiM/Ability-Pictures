import Hero from "@/components/contact/hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Kontak",
};

function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Hero />
      {children}
    </section>
  );
}

export default ContactUsLayout;
