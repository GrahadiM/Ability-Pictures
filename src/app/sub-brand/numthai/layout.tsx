import NumthaiHero from "@/components/numthai/hero";
import React from "react";

function NumthaiLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <NumthaiHero />

      {children}
    </section>
  );
}

export default NumthaiLayout;
