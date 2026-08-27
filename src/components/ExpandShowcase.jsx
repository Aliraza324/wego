import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import ScrollExpand from "./ui/ScrollExpand";
import expandHeroImg from "@/assets/images/noah-buscher-x8ZStukS2PM-unsplash.jpg";

export const ExpandShowcase = () => {
  const steps = [
    { num: "1", title: "Audit", desc: "Make it measurable" },
    { num: "2", title: "Enable", desc: "Legal compliance" },
    { num: "3", title: "Engage", desc: "Involve everyone" },
    { num: "4", title: "Earn", desc: "Turn waste into profit" },
  ];

  return (
    <section className="relative w-full bg-neutral-950 text-[#E1E0CC]">
      <ScrollExpand
        src={expandHeroImg}
        alt="Zero Waste 360 For Business"
        title="Zero Waste 360°"
        scrollHint="Scroll to expand"
        useWindowScroll={true}
        startWidth={48}
        startHeight={62}
        startRadius={28}
        endRadius={0}
        mediaZoom={1.25}
        overlayScrim={0.82}
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center px-3 py-2 sm:px-4 sm:py-6 w-full">
          
          {/* Top Tag (Hidden on very small mobile to save vertical space) */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-[#E1E0CC] mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E1E0CC]" />
            <span className="tracking-widest uppercase text-[10px]">Corporate Solutions</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#E1E0CC] tracking-tight leading-[1.08] mb-1.5 sm:mb-3">
            Zero Waste 360° <br />
            <span className="italic font-normal text-white">For Business ™</span>
          </h2>

          {/* Subtitle / Value Proposition */}
          <p className="text-xs sm:text-lg md:text-xl font-medium text-[#E1E0CC]/90 tracking-wide mb-3 sm:mb-5 font-sans">
            Turn every ton of waste into measurable value.
          </p>

          {/* 4 Pillars List / Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3 w-full max-w-xl mb-3 sm:mb-6 text-left">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-neutral-950/80 border border-white/15 backdrop-blur-xl hover:border-[#E1E0CC]/40 transition-all duration-300 group"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-semibold text-[11px] sm:text-xs text-[#E1E0CC] group-hover:bg-[#E1E0CC] group-hover:text-black transition-all duration-300 shrink-0">
                  {step.num}
                </div>
                <div className="text-[11px] sm:text-xs md:text-sm leading-tight">
                  <span className="font-semibold text-white">{step.title}: </span>
                  <span className="text-[#E1E0CC]/80 font-light hidden xs:inline">{step.desc}</span>
                  <span className="text-[#E1E0CC]/80 font-light inline xs:hidden">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Description Paragraph */}
          <p className="text-[11px] sm:text-sm md:text-base text-[#E1E0CC]/80 font-light max-w-2xl mb-4 sm:mb-7 leading-snug sm:leading-relaxed">
            Businesses pay on average <strong className="text-[#E1E0CC] font-semibold">€160 per ton for disposal</strong> — our 360° Zero Waste Program helps you reduce costs, generate revenue from unused materials, and achieve up to <strong className="text-[#E1E0CC] font-semibold">30% ROI</strong>.
          </p>

          {/* Learn More Button (Always visible) */}
          <div className="pt-1">
            <Link
              to="/offer/business-360"
              className="group inline-flex items-center gap-2 self-center rounded-full bg-[#E1E0CC] py-1 pl-4 pr-1 text-xs sm:py-1.5 sm:pl-6 sm:pr-1.5 sm:text-base font-semibold text-black transition-all hover:gap-3 hover:bg-white shadow-xl shadow-black/40"
            >
              <span>Learn More</span>
              <span className="flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" style={{ color: "#E1E0CC" }} />
              </span>
            </Link>
          </div>

        </div>
      </ScrollExpand>
    </section>
  );
};

export default ExpandShowcase;
