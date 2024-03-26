import ServiceHero from "@/components/service/hero";
import React from "react";

function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <ServiceHero title="Web Design" />
      {children}
    </section>
  );
}

export default ServiceLayout;
