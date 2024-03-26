import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Galeri",
};

function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

export default GalleryLayout;