import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * WEGO Theme Preloader - Full Screen Cinematic Initial Loader
 * @param {Object} props
 * @param {boolean} props.isLoading - Control loader visibility manually (optional)
 * @param {Function} props.onLoadingComplete - Callback when loading finishes
 * @param {number} props.minDuration - Minimum duration in milliseconds (default 2000ms)
 */
export const ThemePreloader = ({
  isLoading: externalIsLoading,
  onLoadingComplete,
  minDuration = 2200,
}) => {
  const [internalLoading, setInternalLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const isControlled = typeof externalIsLoading === "boolean";
  const active = isControlled ? externalIsLoading : internalLoading;

  const statusMessages = [
    "INITIALIZING CIRCULAR MATRIX",
    "CALCULATING WASTE TO VALUE INDEX",
    "ALIGNING ESG & CSRD STANDARDS",
    "FOR ZERO WASTE PIONEERS",
    "WEGOZERO SYSTEM READY",
  ];

  // Progress Counter Animation
  useEffect(() => {
    if (!active) return;

    // Lock body scroll while loader is active
    document.body.style.overflow = "hidden";

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.round((elapsed / minDuration) * 100), 100);

      setProgress(currentProgress);

      // Cycle status message smoothly based on progress brackets
      if (currentProgress < 25) setStatusIndex(0);
      else if (currentProgress < 50) setStatusIndex(1);
      else if (currentProgress < 75) setStatusIndex(2);
      else if (currentProgress < 95) setStatusIndex(3);
      else setStatusIndex(4);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          if (!isControlled) {
            setInternalLoading(false);
          }
          if (onLoadingComplete) {
            onLoadingComplete();
          }
          document.body.style.overflow = "";
        }, 350);
      }
    }, 25);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, [active, minDuration, isControlled, onLoadingComplete]);

  // Stroke Dash calculations for SVG circular ring (radius 48 -> circumference ≈ 301.59)
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="wego-theme-preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1], // Luxury cubic-bezier curtain reveal
            },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-neutral-950 text-[#E1E0CC] overflow-hidden select-none"
        >
          {/* Background Grain & Ambient Glows */}
          <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20" />

          {/* Radial Ambient Backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#E1E0CC]/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

          {/* Subtle Grid Lines for Architectural Depth */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Top Brand Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute top-8 left-8 sm:left-12 flex items-center gap-3"
          >
            <div className="flex items-center gap-1.5 font-bold tracking-widest text-sm text-white font-sans">
              <span>WEGO</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E1E0CC] shadow-[0_0_8px_#E1E0CC]" />
            </div>
            <span className="text-[10px] tracking-[0.25em] text-[#E1E0CC]/40 uppercase font-mono border-l border-white/10 pl-3">
              ZERO WASTE 360°
            </span>
          </motion.div>

          {/* Top Right Version Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute top-8 right-8 sm:right-12 hidden sm:flex items-center gap-2"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] tracking-widest text-[#E1E0CC]/60 font-mono">
              SUSTAINABILITY INDEX v2.4
            </span>
          </motion.div>

          {/* Centerpiece: The Circular Zero-Waste Ring & Monogram */}
          <div className="relative flex flex-col items-center justify-center">
            
            {/* SVG Glowing Orbital System */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
              
              {/* Outer Counter-rotating Dashed Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-[#E1E0CC]/15"
              />

              {/* Secondary Outer Reverse Pulse Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full border border-white/5"
              />

              {/* Main SVG Progress Ring */}
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 120 120">
                {/* Background Track */}
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  className="stroke-[#E1E0CC]/10"
                  strokeWidth="3"
                  fill="none"
                />

                {/* Animated Progress Stroke with Gradient */}
                <defs>
                  <linearGradient id="wegoLoaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E1E0CC" />
                    <stop offset="50%" stopColor="#d4d2b8" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  stroke="url(#wegoLoaderGradient)"
                  strokeWidth="3.5"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  fill="none"
                  filter="url(#glow)"
                  className="transition-all duration-75 ease-out"
                />
              </svg>

              {/* Central Glowing Monogram & Live Percentage */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center"
                >
                  {/* Brand Monogram Icon */}
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center mb-1 shadow-[0_0_20px_rgba(225,224,204,0.15)] backdrop-blur-md">
                    <span className="font-bold text-[#E1E0CC] text-sm tracking-tighter">W0</span>
                  </div>

                  {/* High Precision Progress Percentage */}
                  <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {progress < 10 ? `0${progress}` : progress}
                    <span className="text-xs text-[#E1E0CC]/70 font-light ml-0.5">%</span>
                  </span>
                </motion.div>
              </div>

              {/* Orbiting Satellite Particle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#E1E0CC] shadow-[0_0_12px_#E1E0CC] absolute top-1 left-1/2 -translate-x-1/2" />
              </motion.div>
            </div>

            {/* Typography Section below Ring */}
            <div className="mt-8 flex flex-col items-center text-center px-4">
              
              {/* Brand Tagline in Signature Serif Font */}
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-serif italic text-2xl sm:text-3xl text-[#E1E0CC] tracking-wide font-light"
              >
                Turn Waste Into Value
              </motion.h2>

              {/* Dynamic Status Badges */}
              <motion.div
                key={statusIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-[#E1E0CC]/80 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="tracking-widest uppercase">{statusMessages[statusIndex]}</span>
              </motion.div>
            </div>
          </div>

          {/* Bottom Metagrid & Loading Bar */}
          <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 max-w-md mx-auto px-6 flex flex-col items-center gap-3">
            {/* Linear Glow Track */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5">
              <motion.div
                className="h-full bg-gradient-to-r from-[#E1E0CC] via-white to-emerald-400 rounded-full shadow-[0_0_10px_#E1E0CC]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Bottom Meta Info */}
            <div className="w-full flex items-center justify-between text-[10px] font-mono text-[#E1E0CC]/50 tracking-wider">
              <span>AMSTERDAM • ESG CERTIFIED</span>
              <span>CIRCULAR ECONOMY</span>
            </div>
          </div>

          {/* Ambient Corner Decors */}
          <div className="absolute bottom-6 left-6 hidden lg:block text-[9px] font-mono text-white/20 uppercase tracking-widest">
            CO2 AVOIDANCE MATRIX // ACTIVE
          </div>
          <div className="absolute bottom-6 right-6 hidden lg:block text-[9px] font-mono text-white/20 uppercase tracking-widest">
            ZERO WASTE 360° // ESG COMPLIANT
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/**
 * Inline ZeroWaste Themed Spinner for buttons, cards, and async operations
 */
export const ZeroWasteSpinner = ({
  size = "md",
  className = "",
  showText = false,
  text = "Loading...",
}) => {
  const sizeMap = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-10 h-10 border-[2.5px]",
    xl: "w-14 h-14 border-3",
  };

  return (
    <div className={`inline-flex items-center gap-2.5 justify-center ${className}`}>
      <div className="relative flex items-center justify-center">
        {/* Outer Orbit */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className={`${sizeMap[size] || sizeMap.md} rounded-full border-[#E1E0CC]/20 border-t-[#E1E0CC] border-r-[#E1E0CC]/80`}
        />
        
        {/* Inner Node Accent */}
        <motion.div
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-1.5 h-1.5 rounded-full bg-[#E1E0CC] shadow-[0_0_6px_#E1E0CC]"
        />
      </div>

      {showText && (
        <span className="text-xs font-mono tracking-wider text-[#E1E0CC]/80 uppercase">
          {text}
        </span>
      )}
    </div>
  );
};

/**
 * Pulsing Brand Logo Loader
 */
export const PulseLogoLoader = ({ size = "md", className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer Pulse Rings */}
      <motion.div
        animate={{ scale: [1, 1.6, 2], opacity: [0.6, 0.2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        className="absolute w-12 h-12 rounded-full bg-[#E1E0CC]/20 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1.6], opacity: [0.8, 0.3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
        className="absolute w-12 h-12 rounded-full bg-emerald-500/20 pointer-events-none"
      />

      {/* Brand Icon Core */}
      <div className="relative z-10 w-10 h-10 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(225,224,204,0.2)]">
        <span className="font-bold text-[#E1E0CC] text-sm">W0</span>
      </div>
    </div>
  );
};

/**
 * Glassmorphic Skeleton Placeholder Loader matching theme colors
 */
export const SkeletonLoader = ({
  className = "w-full h-24",
  rounded = "rounded-2xl",
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-white/[0.03] border border-white/5 ${rounded} ${className}`}
    >
      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E1E0CC]/10 to-transparent w-1/2 -skew-x-12"
      />
    </div>
  );
};

/**
 * Top Page Linear Progress Bar (similar to NProgress for route shifts)
 */
export const TopProgressBar = ({ progress = 0, isVisible = true }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[2px] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-[#E1E0CC] via-white to-emerald-400 shadow-[0_0_8px_#E1E0CC]"
        style={{ width: `${progress}%` }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      />
    </div>
  );
};

export default ThemePreloader;
