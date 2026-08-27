import React from "react";
import { Heart, Star, Sparkles, Award } from "lucide-react";
import SocialProof4 from "./ui/social-proof-4";

export const TestimonialsSection = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-[#E1E0CC] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E1E0CC]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#E1E0CC]/90 mb-4 backdrop-blur-md">
            <Heart className="w-3.5 h-3.5 text-[#E1E0CC]" />
            <span className="tracking-widest uppercase text-[11px]">Wall of Love</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#E1E0CC] tracking-tight lowercase mb-4">
            trusted by industry leaders across europe
          </h2>

          <p className="text-sm sm:text-base text-[#E1E0CC]/70 font-light leading-relaxed mb-6">
            Hear directly from sustainability executives, operations directors, and venue managers transforming their waste into profit.
          </p>

          {/* Social Proof Badges */}
          <div className="flex items-center justify-center gap-6 text-xs text-[#E1E0CC]/80 pt-2">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#E1E0CC] fill-[#E1E0CC]" />
                ))}
              </div>
              <span className="font-semibold text-white">4.95 / 5.0</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/30" />
            <span>Over <strong>120+</strong> certified venues</span>
          </div>
        </div>

        {/* 3-Column Wall of Love Scrolling Marquee */}
        <SocialProof4 />

      </div>
    </section>
  );
};

export default TestimonialsSection;
