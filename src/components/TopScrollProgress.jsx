// src/components/TopScrollProgress.jsx
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const TopScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  // Create a spring-damped progress bar width modifier for premium smooth feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark z-50 origin-left shadow-[0_2px_10px_rgba(212,175,55,0.5)]"
      style={{ scaleX }}
    />
  );
};
export default TopScrollProgress;
