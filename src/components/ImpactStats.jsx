import React from "react";
import { motion } from "framer-motion";
import { Recycle, Leaf, Euro, TrendingUp, Sparkles } from "lucide-react";
import Counter from "./ui/counter";
import { slideUp, staggerContainer } from "@/animations/animations";

const statsData = [
  {
    icon: Recycle,
    value: 443,
    prefix: "",
    suffix: "",
    title: "Tonnes of waste reduced",
    description: "Waste diverted from landfill across our venues",
  },
  {
    icon: Leaf,
    value: 1276,
    prefix: "",
    suffix: "",
    title: "Metric tonnes of CO₂e prevented",
    description: "Carbon emissions avoided through waste reduction",
  },
  {
    icon: Euro,
    value: 130000,
    prefix: "€",
    suffix: "+",
    title: "Circular economy revenue generated",
    description: "Income generated from recycling and recovery",
  },
  {
    icon: TrendingUp,
    value: 90,
    prefix: "",
    suffix: "%+",
    title: "Average waste diversion achieved",
    description: "Industry-leading diversion rates for our partners",
  },
];

const ImpactStats = () => {
  return (
    <section className="relative pt-16 pb-10 sm:pt-20 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-[#E1E0CC] overflow-hidden">
      {/* Background Ambient Glow matching Prisma theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E1E0CC]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            variants={slideUp(0.1, 0.6, 15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#E1E0CC] text-xs uppercase tracking-widest font-medium mb-4 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E1E0CC]" />
            <span>Proven Impact</span>
          </motion.div>

          <motion.h2
            variants={slideUp(0.2, 0.6, 20)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif tracking-tight text-[#E1E0CC]"
          >
          Proven Results Across Europe
          </motion.h2>

          <motion.p
            variants={slideUp(0.3, 0.6, 20)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-sm sm:text-base text-[#E1E0CC]/70 mt-4 font-light leading-relaxed max-w-xl mx-auto"
          >
            Transforming corporate resource streams into scalable economic and ecological milestones.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {statsData.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                variants={slideUp(index * 0.08, 0.6, 20)}
                className="group relative flex flex-col items-center text-center p-8 rounded-2xl md:rounded-[1.75rem] bg-neutral-900/60 backdrop-blur-xl border border-white/10 hover:border-[#E1E0CC]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1.5"
              >
                {/* Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E1E0CC] mb-6 group-hover:scale-110 group-hover:bg-[#E1E0CC] group-hover:text-black group-hover:border-[#E1E0CC] transition-all duration-300 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Animated Functional Counter */}
                <div
                  className="text-4xl sm:text-5xl font-medium tracking-[-0.04em] font-sans mb-3 select-none"
                  style={{ color: "#E1E0CC" }}
                >
                  <Counter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2.2}
                  />
                </div>

                {/* Stat Title */}
                <h3 className="text-base sm:text-lg font-semibold text-[#E1E0CC] mb-2 leading-snug">
                  {stat.title}
                </h3>

                {/* Stat Description */}
                <p className="text-xs sm:text-sm text-[#E1E0CC]/70 font-light leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStats;
