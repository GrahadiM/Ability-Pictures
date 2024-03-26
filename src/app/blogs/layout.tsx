import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog",
};

function BlogLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

export default BlogLayout;
