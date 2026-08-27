import React from "react";
import { motion } from "framer-motion";

// Import all partner/client logos from assets
import cbreLogo from "@/assets/images/CBRE_logo_white_BG.png";
import chefsLogo from "@/assets/images/Chefs-Culinar-300x49.png";
import netherlandsLogo from "@/assets/images/Embassy-of-the-kingdom-of-the-Netherlands-300x182.webp";
import flexiparksLogo from "@/assets/images/Flexiparks_Logo_schwarz_1-300x54.png";
import lovestruckLogo from "@/assets/images/Lovestruck-300x193.png";
import maerskLogo from "@/assets/images/Maersk-300x157.png";
import microsoftLogo from "@/assets/images/Microsoft-300x124.png";
import sdgLogo from "@/assets/images/SDG-house-Greece-Logo_Logo-copy.png";
import vistaLogo from "@/assets/images/Vista-300x78.png";
import githubLogo from "@/assets/images/github-300x167.png";
import goldbeckLogo from "@/assets/images/goldbeck-Rhomberg-zero-waste-300x95.jpg";
import tpBennettLogo from "@/assets/images/logo-tp-benett.svg";
import bnpParibasLogo from "@/assets/images/png-transparent-bnp-paribas-hd-logo-1-300x78.png";

export const logos = [
  { name: "Microsoft", src: microsoftLogo },
  { name: "Maersk", src: maerskLogo },
  { name: "BNP Paribas", src: bnpParibasLogo },
  { name: "GitHub", src: githubLogo },
  { name: "CBRE", src: cbreLogo },
  { name: "Chefs Culinar", src: chefsLogo },
  { name: "Embassy of the Netherlands", src: netherlandsLogo },
  { name: "Flexiparks", src: flexiparksLogo },
  { name: "Goldbeck Rhomberg", src: goldbeckLogo },
  { name: "TP Bennett", src: tpBennettLogo },
  { name: "Vista", src: vistaLogo },
  { name: "SDG House", src: sdgLogo },
  { name: "Lovestruck", src: lovestruckLogo },
];

export const LogoCloud = ({
  items = logos,
  className = "",
}) => {
  return (
    <div className={`relative w-full overflow-hidden py-2 sm:py-4 ${className}`}>
      {/* Left and Right Fade Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-neutral-950 via-neutral-950/80 to-transparent z-10" />

      {/* Infinite Marquee Row 1 */}
      <div className="flex w-full overflow-hidden py-3">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="flex flex-nowrap items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8"
        >
          {[...items, ...items].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-14 sm:h-18 lg:h-20 w-32 sm:w-40 lg:w-48 px-3.5 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-white/[0.95] hover:bg-white border border-white shadow-md hover:shadow-xl hover:shadow-[#E1E0CC]/25 transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-1 shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-7 sm:max-h-9 lg:max-h-10 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Infinite Marquee Row 2 (Reverse direction) */}
      <div className="flex w-full overflow-hidden mt-2 py-3">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 28,
            repeat: Infinity,
          }}
          className="flex flex-nowrap items-center gap-6 sm:gap-8 shrink-0 pr-6 sm:pr-8"
        >
          {[...items.slice().reverse(), ...items.slice().reverse()].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-14 sm:h-18 lg:h-20 w-32 sm:w-40 lg:w-48 px-3.5 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-white/[0.95] hover:bg-white border border-white shadow-md hover:shadow-xl hover:shadow-[#E1E0CC]/25 transition-all duration-300 group cursor-pointer hover:scale-105 hover:-translate-y-1 shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-7 sm:max-h-9 lg:max-h-10 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoCloud;
