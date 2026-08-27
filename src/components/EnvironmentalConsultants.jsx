import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, Video, Sparkles } from "lucide-react";
import { slideUp } from "@/animations/animations";

export const EnvironmentalConsultants = () => {
  const benefits = [
    {
      title: "Maximize Waste Diversion",
      description: "Turn waste into valuable resources",
    },
    {
      title: "Reduce Costs & Boost Revenue",
      description: "Unlock financial opportunities in your waste streams",
    },
    {
      title: "Ensure Regulatory Compliance",
      description: "Stay ahead of CSRD, CSDDD, and EU taxonomy requirements",
    },
    {
      title: "Cut Carbon Emissions",
      description: "Minimize landfill and incineration impact",
    },
  ];

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-[#E1E0CC] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[350px] bg-[#E1E0CC]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#E1E0CC]/90 mb-4 backdrop-blur-md">
            <Video className="w-3.5 h-3.5 text-[#E1E0CC]" />
            <span className="tracking-widest uppercase text-[11px]">Consultancy In Action</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#E1E0CC] tracking-tight lowercase">
            our work as environmental consultants
          </h2>
        </div>

        {/* Two-Column Grid: Video Player + Benefits Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Responsive Video Player Frame */}
          <motion.div
            variants={slideUp(0.1, 0.7, 25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 w-full"
          >
            <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl shadow-black/80 group">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/rTXQR-w4txM?si=0kwhOmeuUSIjcy2R"
                title="WeGoZero - Transforming Waste into Profit"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Right Column: Solution & Benefits Narrative */}
          <motion.div
            variants={slideUp(0.2, 0.7, 30)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col"
          >
            {/* Lead Narrative */}
            <p className="text-sm sm:text-base md:text-lg text-[#E1E0CC]/80 font-light leading-relaxed mb-8">
              We provide a comprehensive solution for seamlessly integrating zero waste into your strategy—from data collection and employee engagement to revenue generation.
            </p>

            {/* Subtitle */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#E1E0CC] lowercase mb-6">
              your benefits:
            </h3>

            {/* Benefits Checklist */}
            <div className="flex flex-col gap-4 mb-9">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#E1E0CC] group-hover:text-black transition-colors duration-300">
                    <Check className="w-3.5 h-3.5 text-[#E1E0CC] group-hover:text-black transition-colors" />
                  </div>
                  <div className="text-xs sm:text-sm md:text-base leading-relaxed">
                    <strong className="font-semibold text-white">{benefit.title}</strong>
                    <span className="text-[#E1E0CC]/70 font-light"> – {benefit.description}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature Pill Button */}
            <div>
              <Link
                to="/what-we-offer"
                className="group inline-flex items-center gap-2 self-start rounded-full bg-[#E1E0CC] py-1.5 pl-6 pr-1.5 text-sm font-semibold text-black transition-all hover:gap-3 sm:text-base hover:bg-white shadow-xl shadow-black/40"
              >
                <span>Explore Our Solutions</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
                </span>
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EnvironmentalConsultants;
