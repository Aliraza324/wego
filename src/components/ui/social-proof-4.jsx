import React from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle2, Quote, Sparkles } from "lucide-react";

export const defaultTestimonials = [
  {
    name: "Elena Rostova",
    role: "Head of Sustainability",
    company: "Nordic Venue Group",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "WeGoZero turned our venue's waste management from a massive cost center into a certified circular revenue stream. Our diversion rate hit 92% in just 6 months.",
    highlight: "€48,000 saved in year one",
  },
  {
    name: "Marcus Vance",
    role: "Director of Operations",
    company: "Apex Arena & Stadiums",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "The Waste to Value Calculator was spot on. The CSRD reporting framework alone saved our compliance team hundreds of billable consultant hours.",
    highlight: "100% CSRD compliant",
  },
  {
    name: "Sophie van den Berg",
    role: "ESG Portfolio Lead",
    company: "Amsterdam Urban Logistics",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Systemic circularity made simple. The team brought practical engineering and commercial clarity to what had previously been vague climate goals.",
    highlight: "1,400 tonnes CO₂e prevented",
  },
  {
    name: "David Chen",
    role: "Chief Facilities Officer",
    company: "Global Tech Campus EU",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Employee engagement surged when our staff saw real-time waste metrics. WeGoZero gave us actionable data that leadership actually acts on.",
    highlight: "34% operational ROI",
  },
  {
    name: "Camille Dupont",
    role: "Hospitality General Manager",
    company: "Grand Canal Hotel & Resorts",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Zero-waste hospitality is no longer a marketing slogan for us—it is an operational standard. Our guests notice and praise the commitment daily.",
    highlight: "Zero single-use plastics",
  },
  {
    name: "Liam O'Connor",
    role: "Events & Festival Producer",
    company: "Solstice Live Experiences",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Managing waste for 60,000 festival attendees seemed impossible until WeGoZero deployed their circular recovery system. Flawless execution.",
    highlight: "89% event waste diversion",
  },
  {
    name: "Ananya Sharma",
    role: "Circular Economy Strategist",
    company: "Green Horizon Capital",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Their audit frameworks are the gold standard for circular infrastructure investment due diligence. Rigorous, transparent, and profitable.",
    highlight: "Verified Impact Metrics",
  },
  {
    name: "Jan de Vries",
    role: "Supply Chain Director",
    company: "Benelux Food Distribution",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "We avoided €120,000 in upcoming EU packaging taxes by following WeGoZero’s zero-waste transition roadmap.",
    highlight: "€120K tax avoidance",
  },
  {
    name: "Hannah Lindqvist",
    role: "VP Sustainability",
    company: "Scandi Retail Holdings",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "WeGoZero is that rare consultancy that delivers measurable bottom-line profitability alongside radical environmental impact.",
    highlight: "95% client satisfaction",
  },
];

export const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="group relative p-6 rounded-3xl bg-neutral-900/70 backdrop-blur-2xl border border-white/10 hover:border-[#E1E0CC]/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-black/70 hover:-translate-y-1 select-none">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-11 h-11 rounded-full object-cover border border-white/20 group-hover:border-[#E1E0CC]/50 transition-colors"
          />
          <div>
            <h4 className="text-sm font-semibold text-white group-hover:text-[#E1E0CC] transition-colors leading-tight">
              {testimonial.name}
            </h4>
            <span className="text-[11px] text-[#E1E0CC]/60 font-light block leading-tight mt-0.5">
              {testimonial.role} • <strong className="font-normal text-[#E1E0CC]/80">{testimonial.company}</strong>
            </span>
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 text-[#E1E0CC] fill-[#E1E0CC]" />
          ))}
        </div>
      </div>

      {/* Testimonial Quote */}
      <p className="text-xs sm:text-sm text-[#E1E0CC]/80 font-light leading-relaxed mb-4">
        "{testimonial.text}"
      </p>

      {/* Bottom Highlight Tag */}
      {testimonial.highlight && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-[#E1E0CC] group-hover:bg-[#E1E0CC]/15 transition-colors">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span>{testimonial.highlight}</span>
        </div>
      )}
    </div>
  );
};

export const SocialProof4 = ({
  testimonials = defaultTestimonials,
  className = "",
}) => {
  // Split into 3 columns
  const col1 = [testimonials[0], testimonials[3], testimonials[6]];
  const col2 = [testimonials[1], testimonials[4], testimonials[7]];
  const col3 = [testimonials[2], testimonials[5], testimonials[8]];

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Top and Bottom Fade Gradients */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-transparent z-20" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent z-20" />

      {/* 3-Column Drifting Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[640px] sm:h-[700px] overflow-hidden">
        
        {/* Column 1 (Scrolls Upwards) */}
        <div className="flex flex-col overflow-hidden">
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 32,
              repeat: Infinity,
            }}
            className="flex flex-col gap-6"
          >
            {[...col1, ...col1].map((item, index) => (
              <TestimonialCard key={`c1-${index}`} testimonial={item} />
            ))}
          </motion.div>
        </div>

        {/* Column 2 (Scrolls Downwards / Alternate) */}
        <div className="flex flex-col overflow-hidden hidden md:flex">
          <motion.div
            animate={{ y: ["-50%", "0%"] }}
            transition={{
              ease: "linear",
              duration: 36,
              repeat: Infinity,
            }}
            className="flex flex-col gap-6"
          >
            {[...col2, ...col2].map((item, index) => (
              <TestimonialCard key={`c2-${index}`} testimonial={item} />
            ))}
          </motion.div>
        </div>

        {/* Column 3 (Scrolls Upwards) */}
        <div className="flex flex-col overflow-hidden hidden lg:flex">
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
            className="flex flex-col gap-6"
          >
            {[...col3, ...col3].map((item, index) => (
              <TestimonialCard key={`c3-${index}`} testimonial={item} />
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default SocialProof4;
