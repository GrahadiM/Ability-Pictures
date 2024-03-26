import Hero from "@/components/service/hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Layanan",
};

function ServiceLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

export default ServiceLayout;
