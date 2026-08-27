import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Handshake } from "lucide-react";
import DriftWall from "./ui/DriftWall";

// Import all collaboration partner logos from assets
import orangeGrove from "@/assets/images/Orange-Grove-300x86.png";
import angelFunds from "@/assets/images/Ams-Angel-Funds-300x142.png";
import goZeroWaste from "@/assets/images/Go-Zero-Waste-300x237.png";
import greenly from "@/assets/images/greenly-300x77.png";
import eitClimate from "@/assets/images/EIT-Climate-Change-300x111.png";
import aceLogo from "@/assets/images/Ace-300x174.png";
import confettiLogo from "@/assets/images/Confetti-300x123.png";
import goodwingsLogo from "@/assets/images/Goodwings-300x105.png";
import mizaLogo from "@/assets/images/MiZA-CMYK-full-color-01-1-300x249.png";
import trinityLogo from "@/assets/images/Trinity-College-300x103.png";
import uvaLogo from "@/assets/images/University-of-Amsterdam-300x157.png";
import medinaLogo from "@/assets/images/medina-logo-zero-waste-300x212.jpg";
import netherlandsLogo from "@/assets/images/Embassy-of-the-kingdom-of-the-Netherlands-300x182.webp";
import sdgLogo from "@/assets/images/SDG-house-Greece-Logo_Logo-copy.png";

const partnerItems = [
  { image: orangeGrove, title: "Orange Grove", href: "/partners" },
  { image: angelFunds, title: "Amsterdam Academic Angel Fund", href: "/partners" },
  { image: goZeroWaste, title: "Go Zero Waste", href: "/partners" },
  { image: greenly, title: "Greenly", href: "/partners" },
  { image: eitClimate, title: "EIT Climate-KIC", href: "/partners" },
  { image: aceLogo, title: "ACE Incubator", href: "/partners" },
  { image: confettiLogo, title: "Confetti", href: "/partners" },
  { image: goodwingsLogo, title: "Goodwings", href: "/partners" },
  { image: mizaLogo, title: "MiZA Zero Waste", href: "/partners" },
  { image: trinityLogo, title: "Trinity College", href: "/partners" },
  { image: uvaLogo, title: "University of Amsterdam", href: "/partners" },
  { image: medinaLogo, title: "Medina Zero Waste", href: "/partners" },
  { image: netherlandsLogo, title: "Embassy of the Netherlands", href: "/partners" },
  { image: sdgLogo, title: "SDG House", href: "/partners" },
];

export const PartnersSection = () => {
  const [screen, setScreen] = useState({
    isMobile: typeof window !== "undefined" ? window.innerWidth < 640 : false,
    isTablet: typeof window !== "undefined" ? window.innerWidth >= 640 && window.innerWidth < 1024 : false,
  });

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      setScreen({
        isMobile: w < 640,
        isTablet: w >= 640 && w < 1024,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Compute responsive layout parameters for DriftWall
  const columns = screen.isMobile ? 3 : screen.isTablet ? 4 : 5;
  const tileWidth = screen.isMobile ? 120 : screen.isTablet ? 170 : 210;
  const tileHeight = screen.isMobile ? 74 : screen.isTablet ? 104 : 130;
  const gap = screen.isMobile ? 10 : screen.isTablet ? 14 : 18;
  const radius = screen.isMobile ? 12 : 16;
  const lift = screen.isMobile ? 32 : 54;

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-[#E1E0CC] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E1E0CC]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto text-center">
        
        {/* Tag Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#E1E0CC]/90 mb-4 backdrop-blur-md">
          <Handshake className="w-3.5 h-3.5 text-[#E1E0CC]" />
          <span className="tracking-widest uppercase text-[11px]">Global Ecosystem</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#E1E0CC] tracking-tight lowercase mb-5">
          our collaboration partners
        </h2>

        {/* Section Narrative */}
        <p className="text-xs sm:text-base md:text-lg text-[#E1E0CC]/80 font-light leading-relaxed max-w-4xl mx-auto mb-10 sm:mb-12">
          In our mission to forge a sustainable future both locally and globally, WeGoZero proudly collaborates with a <strong className="font-medium text-[#E1E0CC]">diverse network of organizations, communities, and key stakeholders</strong> who share our vision. Together, we are building a powerful collective dedicated to advancing the zero waste movement and <strong className="font-medium text-[#E1E0CC]">promoting circular economy principles across the globe:</strong>
        </p>

        {/* 3D Interactive DriftWall with Responsive Geometry */}
        <div className="relative h-[340px] sm:h-[440px] md:h-[520px] lg:h-[580px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-neutral-900/40 backdrop-blur-xl shadow-2xl mb-12 sm:mb-16">
          <DriftWall
            items={partnerItems}
            columns={columns}
            tileWidth={tileWidth}
            tileHeight={tileHeight}
            gap={gap}
            radius={radius}
            tilt={screen.isMobile ? 10 : 14}
            turn={screen.isMobile ? -8 : -12}
            perspective={screen.isMobile ? 900 : 1200}
            depth={screen.isMobile ? 60 : 100}
            speed={screen.isMobile ? 28 : 36}
            direction="up"
            variance={0.4}
            parallax={screen.isMobile ? 0.3 : 0.55}
            lift={lift}
            fade={0.65}
            dim={0.92}
            overlayColor="#050508"
          />
        </div>

        {/* Bottom Call To Action */}
        <div className="flex flex-col items-center gap-4 sm:gap-5">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-serif text-[#E1E0CC] lowercase">
            interested in joining forces?
          </h3>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 self-center rounded-full bg-[#E1E0CC] py-1.5 pl-6 pr-1.5 text-sm font-semibold text-black transition-all hover:gap-3 sm:text-base hover:bg-white shadow-xl shadow-black/40"
          >
            <span>CONTACT US</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
              <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
