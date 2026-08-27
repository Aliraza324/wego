import React from "react";
import { PrismaHero } from "./ui/prisma-hero";

const HeroSection = (props) => {
  return (
    <PrismaHero
      title="For Zero Waste Pioneers"
      description="Join a growing group of leading organisations turning waste into profit. From compliance to circular impact — we help transform waste into an asset."
      buttonText="Go Zero Waste"
      buttonHref="/zero-waste"
      {...props}
    />
  );
};

export default HeroSection;