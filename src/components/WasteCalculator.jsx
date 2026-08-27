import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Sparkles, TrendingUp, Leaf, Euro, ArrowRight, RotateCcw } from "lucide-react";
import { slideUp } from "@/animations/animations";

export const WasteCalculator = () => {
  const [tab, setTab] = useState("cost"); // "cost" | "tonnage"
  const [costValue, setCostValue] = useState(50000);
  const [tonnageValue, setTonnageValue] = useState(2050);
  const [showResults, setShowResults] = useState(false);

  // Derived Calculations
  const calculatedSavings = tab === "cost" 
    ? Math.round(costValue * 0.35) 
    : Math.round(tonnageValue * 160 * 0.35);

  const calculatedRevenue = tab === "cost"
    ? Math.round(costValue * 0.22)
    : Math.round(tonnageValue * 160 * 0.22);

  const calculatedCO2 = tab === "cost"
    ? Math.round((costValue / 160) * 0.85)
    : Math.round(tonnageValue * 0.85);

  const getCostContext = (val) => {
    if (val < 25000) return "Typical for a Boutique venue or mid-size business";
    if (val <= 120000) return "Typical for a Large venue with 40–80K capacity";
    return "Typical for a Major multi-venue operator or stadium";
  };

  const getTonnageContext = (val) => {
    if (val < 500) return "Typical for a Boutique facility or event center";
    if (val <= 2500) return "Typical for a Major venue or multi-acre complex";
    return "Typical for a High-capacity stadium or industrial operator";
  };

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 text-[#E1E0CC] overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-[#E1E0CC]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Narrative Content */}
          <motion.div
            variants={slideUp(0.1, 0.7, 25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#E1E0CC]/90 mb-6 w-fit backdrop-blur-md">
              <Calculator className="w-3.5 h-3.5 text-[#E1E0CC]" />
              <span className="tracking-widest uppercase text-[11px]">try the waste to value calculator ™</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight text-[#E1E0CC] leading-[1.15] mb-6 lowercase">
              what if every ton of your waste could generate profit?
            </h2>

            {/* Narrative Paragraphs */}
            <p className="text-base sm:text-lg text-[#E1E0CC]/80 font-light leading-relaxed mb-4">
              Across Europe, businesses spend an average of <strong className="font-semibold text-white">€160 per ton</strong> just to dispose of their waste.
            </p>

            <p className="text-sm sm:text-base text-[#E1E0CC]/70 font-light leading-relaxed mb-8">
              That means thousands of euros are lost every year — often without realizing that waste, when managed properly, can become a <em className="italic text-[#E1E0CC]">profitable resource</em>. The <strong className="font-semibold text-white">Waste to Value Calculator</strong> helps you uncover how much money your organization could save and earn by turning waste into value.
            </p>

            {/* Sub-heading */}
            <h3 className="text-xl sm:text-2xl font-serif text-[#E1E0CC] lowercase mb-4">
              calculate your profit from waste
            </h3>

            <p className="text-sm sm:text-base text-[#E1E0CC]/70 font-light leading-relaxed mb-5">
              The <strong className="font-medium text-white">Waste to Value Calculator</strong> gives an instant overview of your venue's or company's potential profit from waste. You can calculate it in two ways:
            </p>

            {/* Ways List */}
            <div className="flex flex-col gap-2.5 mb-6 pl-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E1E0CC]/85 font-light">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono font-semibold text-white shrink-0">1</span>
                <span><strong className="font-semibold text-white">By waste cost</strong> – Enter your annual waste management cost.</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E1E0CC]/85 font-light">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono font-semibold text-white shrink-0">2</span>
                <span><strong className="font-semibold text-white">By waste volume</strong> – Enter your annual waste in tons.</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E1E0CC]/60 font-light leading-relaxed">
              In seconds, you'll see your <strong className="text-[#E1E0CC] font-medium">potential savings</strong>, <strong className="text-[#E1E0CC] font-medium">CO₂ reduction</strong>, and <strong className="text-[#E1E0CC] font-medium">revenue from recyclables</strong>.
            </p>
          </motion.div>

          {/* Right Column: Interactive Calculator Widget */}
          <motion.div
            variants={slideUp(0.2, 0.7, 30)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col items-center"
          >
            <div className="w-full max-w-lg rounded-3xl bg-neutral-900/80 border border-white/15 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 flex flex-col">
              
              {/* Header Icon & Title */}
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-3">
                  <Sparkles className="w-6 h-6 text-[#E1E0CC]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Turn your venue's waste into value
                </h3>
                <p className="text-xs sm:text-sm text-[#E1E0CC]/70 mt-1 font-light">
                  Instantly calculate your venue's annual profit opportunity from waste.
                </p>
              </div>

              {/* Step & Toggle Switch */}
              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-950/80 border border-white/10 mb-6">
                
                <div className="flex items-center justify-between text-xs text-[#E1E0CC]/60 mb-3 font-medium">
                  <span>Step 1 of 1</span>
                  <Calculator className="w-4 h-4 text-[#E1E0CC]/70" />
                </div>

                {/* Mode Tabs */}
                <div className="grid grid-cols-2 p-1 rounded-xl bg-white/5 border border-white/10 mb-6">
                  <button
                    type="button"
                    onClick={() => {
                      setTab("cost");
                      setShowResults(false);
                    }}
                    className={`py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
                      tab === "cost"
                        ? "bg-[#E1E0CC] text-neutral-950 shadow-md"
                        : "text-[#E1E0CC]/70 hover:text-white"
                    }`}
                  >
                    Disposal Cost
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTab("tonnage");
                      setShowResults(false);
                    }}
                    className={`py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
                      tab === "tonnage"
                        ? "bg-[#E1E0CC] text-neutral-950 shadow-md"
                        : "text-[#E1E0CC]/70 hover:text-white"
                    }`}
                  >
                    Waste Tonnage
                  </button>
                </div>

                {/* Question & Interactive Slider */}
                {tab === "cost" ? (
                  <div>
                    <label className="block text-sm sm:text-base font-semibold text-white mb-1">
                      What's your current annual waste disposal cost?
                    </label>
                    <span className="block text-xs text-[#E1E0CC]/60 font-light mb-4">
                      Enter the total amount you pay for waste management each year
                    </span>

                    {/* Prominent Number */}
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#E1E0CC] tracking-tight mb-2 font-mono">
                      €{costValue.toLocaleString()}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium mb-4">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{getCostContext(costValue)}</span>
                    </div>

                    {/* Range Slider */}
                    <input
                      type="range"
                      min="5000"
                      max="500000"
                      step="5000"
                      value={costValue}
                      onChange={(e) => {
                        setCostValue(Number(e.target.value));
                        setShowResults(false);
                      }}
                      className="w-full h-2 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#E1E0CC]"
                    />

                    <div className="flex items-center justify-between text-[11px] text-[#E1E0CC]/50 mt-2 font-mono">
                      <span>€5.000</span>
                      <span>€500.000+</span>
                    </div>
                  </div>
                ) : (
                  <div>
                    <label className="block text-sm sm:text-base font-semibold text-white mb-1">
                      What's your estimated annual waste tonnage?
                    </label>
                    <span className="block text-xs text-[#E1E0CC]/60 font-light mb-4">
                      Enter the total tonnes of waste your venue produces each year
                    </span>

                    {/* Prominent Number */}
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#E1E0CC] tracking-tight mb-2 font-mono">
                      {tonnageValue.toLocaleString()} tonnes
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium mb-4">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{getTonnageContext(tonnageValue)}</span>
                    </div>

                    {/* Range Slider */}
                    <input
                      type="range"
                      min="50"
                      max="5000"
                      step="50"
                      value={tonnageValue}
                      onChange={(e) => {
                        setTonnageValue(Number(e.target.value));
                        setShowResults(false);
                      }}
                      className="w-full h-2 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#E1E0CC]"
                    />

                    <div className="flex items-center justify-between text-[11px] text-[#E1E0CC]/50 mt-2 font-mono">
                      <span>50 t</span>
                      <span>5.000+ t</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Calculated Results Area */}
              <AnimatePresence>
                {showResults && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mb-6"
                  >
                    <div className="p-4 rounded-2xl bg-white/10 border border-white/15 grid grid-cols-3 gap-2 text-center">
                      <div className="flex flex-col">
                        <span className="text-xs text-[#E1E0CC]/60">Est. Savings</span>
                        <span className="text-sm sm:text-base font-bold text-emerald-400 font-mono">
                          €{calculatedSavings.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex flex-col border-x border-white/10">
                        <span className="text-xs text-[#E1E0CC]/60">Recycled Rev.</span>
                        <span className="text-sm sm:text-base font-bold text-[#E1E0CC] font-mono">
                          €{calculatedRevenue.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-[#E1E0CC]/60">CO₂e Avoided</span>
                        <span className="text-sm sm:text-base font-bold text-emerald-300 font-mono">
                          {calculatedCO2.toLocaleString()} t
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => setShowResults(!showResults)}
                className="group inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#E1E0CC] py-3.5 px-6 text-sm font-semibold text-black hover:bg-white transition-all duration-300 shadow-xl shadow-black/40"
              >
                <span>{showResults ? "Recalculate Savings" : "Calculate My Savings"}</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
                  <ArrowRight className="h-3.5 w-3.5" style={{ color: "#E1E0CC" }} />
                </span>
              </button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WasteCalculator;
