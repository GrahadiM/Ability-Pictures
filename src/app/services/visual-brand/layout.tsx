import ServiceHero from "@/components/service/hero";
import React from "react";

function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <ServiceHero title="Visual Brand" />
      {children}
    </section>
  );
}

export default ServiceLayout;
