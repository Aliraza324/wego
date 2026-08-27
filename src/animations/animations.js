/**
 * Centralized Framer Motion animations
 */

export const fadeIn = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

export const slideUp = (delay = 0, duration = 0.6, yOffset = 20) => ({
  hidden: { y: yOffset, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

export const wordPullUp = {
  hidden: { y: 20, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const dropdownMenu = {
  hidden: {
    opacity: 0,
    y: -8,
    scale: 0.96,
    transition: { duration: 0.15, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.96,
    transition: { duration: 0.15, ease: "easeInOut" },
  },
};

export const mobileMenu = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
