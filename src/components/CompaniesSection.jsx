import React from "react";
import { LogoCloud } from "@/components/ui/logo-cloud-2";

export const CompaniesSection = () => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-10 sm:pb-20 px-4 bg-neutral-950 text-[#E1E0CC] overflow-hidden">
      <div className="relative mx-auto max-w-6xl">
        <h2 className="mb-6 sm:mb-8 text-center font-medium text-lg text-[#E1E0CC]/70 tracking-tight md:text-2xl font-sans">
          Companies we{" "}
          <span className="font-semibold text-[#E1E0CC] underline decoration-[#E1E0CC]/30 underline-offset-8">
            collaborate
          </span>{" "}
          with.
        </h2>

        <LogoCloud />
      </div>
    </section>
  );
};

export default CompaniesSection;
