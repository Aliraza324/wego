import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { wordPullUp, slideUp } from "@/animations/animations";

/* ---------------- WordsPullUp ---------------- */
export const WordsPullUp = ({
  text = "",
  className = "",
  showAsterisk = false,
  style = {},
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            custom={i}
            variants={wordPullUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- WordsPullUpMultiStyle ---------------- */
export const WordsPullUpMultiStyle = ({
  segments = [],
  className = "",
  style = {},
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={wordPullUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

/* ---------------- Hero ---------------- */
export const PrismaHero = ({
  videoSrc = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4",
  title = "For Zero Waste Pioneers",
  description = "Join a growing group of leading organisations turning waste into profit. From compliance to circular impact — we help transform waste into an asset.",
  buttonText = "Go Zero Waste",
  buttonHref = "/zero-waste",
  showAsterisk = false,
}) => {
  const isMultiWord = title.trim().includes(" ");

  return (
    <section className="h-screen w-full p-2 sm:p-4 md:p-6 bg-neutral-950 flex flex-col">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem] border border-white/10 shadow-2xl">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
        />

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 sm:px-6 md:px-10 md:pb-8">
          <div className="grid grid-cols-12 items-end gap-4">
            {/* Heading */}
            <div className="col-span-12 lg:col-span-8">
              <h1
                className={`font-medium tracking-[-0.05em] select-none ${
                  isMultiWord
                    ? "text-4xl sm:text-6xl md:text-7xl lg:text-[6.2vw] leading-[0.95]"
                    : "text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] leading-[0.85] tracking-[-0.07em]"
                }`}
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text={title} showAsterisk={showAsterisk} />
              </h1>
            </div>

            {/* Description and CTA Button */}
            <div className="col-span-12 flex flex-col gap-5 pb-4 lg:col-span-4 lg:pb-8">
              <motion.p
                variants={slideUp(0.5, 0.8, 20)}
                initial="hidden"
                animate="visible"
                className="text-xs sm:text-sm md:text-base text-[#E1E0CC]/80"
                style={{ lineHeight: 1.35 }}
              >
                {description}
              </motion.p>

              <motion.div
                variants={slideUp(0.7, 0.8, 20)}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={buttonHref}
                  className="group inline-flex items-center gap-2 self-start rounded-full bg-[#E1E0CC] py-1.5 pl-6 pr-1.5 text-sm font-semibold text-black transition-all hover:gap-3 sm:text-base hover:bg-white shadow-xl shadow-black/40"
                >
                  <span>{buttonText}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrismaHero;
