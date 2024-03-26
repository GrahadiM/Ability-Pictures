import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sub brand",
};

function SubBranLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

export default SubBranLayout;
