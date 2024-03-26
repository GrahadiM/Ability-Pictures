import Hero from "@/components/portofolio/hero";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Portofolio",
};

function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

export default PortfolioLayout;
