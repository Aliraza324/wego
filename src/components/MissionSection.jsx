import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2, Globe, Building2 } from "lucide-react";
import { slideUp } from "@/animations/animations";

export const MissionSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-[#E1E0CC] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#E1E0CC]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Content */}
          <motion.div
            variants={slideUp(0.1, 0.7, 25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#E1E0CC]/90 mb-6 w-fit backdrop-blur-md">
              <Building2 className="w-3.5 h-3.5 text-[#E1E0CC]" />
              <span className="tracking-wider uppercase text-[11px]">Our Philosophy</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-[#E1E0CC] leading-[1.15] mb-6 lowercase">
              wegozero: pioneering a zero waste future from amsterdam
            </h2>

            {/* Detailed Description */}
            <p className="text-base sm:text-lg text-[#E1E0CC]/80 font-light leading-relaxed mb-6">
              Founded with a <strong className="font-semibold text-[#E1E0CC]">bold vision for systemic change</strong>, WeGoZero was established in Amsterdam to help shape a future where <strong className="font-semibold text-[#E1E0CC]">circularity is not an aspiration, but the standard</strong>.
            </p>

            <p className="text-sm sm:text-base text-[#E1E0CC]/70 font-light leading-relaxed mb-8">
              As a leading zero-waste consultancy, we partner with organisations ready to <strong className="font-medium text-[#E1E0CC]">move beyond compliance</strong> and unlock the <strong className="font-medium text-[#E1E0CC]">strategic value hidden in waste</strong>. Through expert guidance, proven frameworks, and practical implementation, we turn sustainability ambitions into <strong className="font-medium text-[#E1E0CC]">measurable impact, operational efficiency, and lasting profitability</strong>.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E1E0CC]" />
                </div>
                <span className="text-xs sm:text-sm text-[#E1E0CC]/80 font-light">
                  CSRD-Compliant & Verified Frameworks
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E1E0CC]" />
                </div>
                <span className="text-xs sm:text-sm text-[#E1E0CC]/80 font-light">
                  End-to-End Circular Value Engineering
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 self-start rounded-full bg-[#E1E0CC] py-1.5 pl-6 pr-1.5 text-sm font-semibold text-black transition-all hover:gap-3 sm:text-base hover:bg-white shadow-xl shadow-black/40"
              >
                <span>Learn More About WeGoZero</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Imagery with Floating Badges */}
          <motion.div
            variants={slideUp(0.2, 0.7, 30)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group bg-neutral-900">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
                alt="WeGoZero Amsterdam Sustainable Circular Architecture Studio"
                className="w-full h-[420px] sm:h-[480px] object-cover filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-neutral-950/80 backdrop-blur-xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-[#E1E0CC]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#E1E0CC]">Amsterdam HQ</div>
                    <div className="text-[11px] text-[#E1E0CC]/60 font-light">Global Circular Consultancy</div>
                  </div>
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/10 text-[#E1E0CC] font-mono">
                  EST. 2024
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;
