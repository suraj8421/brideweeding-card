// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-16">
      
      {/* Decorative Traditional Toran / Hanging marigold garlands at top */}
      <div className="absolute top-0 inset-x-0 h-10 flex justify-between px-2 md:px-12 pointer-events-none opacity-40">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Orange/gold hanging marigold dots */}
            <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-amber-600 shadow-sm mt-0.5" />
            <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm mt-0.5" />
            <div className="w-1.5 h-6 bg-green-800 rounded-sm mt-0.5" /> {/* Mango Leaf */}
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto space-y-8 z-20 relative">
        {/* Animated Sacred OM Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border border-gold-med/30 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.25)] bg-primary-maroon/20">
            <span className="font-yatra text-gold-gradient text-5xl md:text-6xl animate-pulse">ॐ</span>
            {/* Spinning decorative border */}
            <div className="absolute inset-2 border border-dashed border-gold-med/40 rounded-full animate-spin-slow" />
          </div>
        </motion.div>

        {/* Lord Ganesha Small Icon & Traditional Divider */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.3 }}
            className="flex justify-center"
          >
            <span className="text-gold-med text-3xl">🪔</span>
          </motion.div>
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-gold-med" />
            <span className="font-yatra text-gold-gradient text-lg tracking-widest uppercase">शुभविवाह</span>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-gold-med" />
          </div>
        </div>


        {/* Beautiful Elegant Divider */}
        <div className="flex justify-center py-2">
          <svg className="w-48 h-6 text-gold-med opacity-60" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 10C90 10 90 2 80 2C70 2 70 10 60 10C50 10 50 2 40 2C30 2 30 10 20 10H0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M100 10C110 10 110 2 120 2C130 2 130 10 140 10C150 10 150 2 160 2C170 2 170 10 180 10H200" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="100" cy="10" r="4" fill="currentColor"/>
          </svg>
        </div>

        {/* Traditional Sanskrit Mantra / Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.7 }}
          className="space-y-4 px-4"
        >
          <p className="font-tiro text-lg md:text-xl text-gold-light/95 leading-relaxed italic">
            "{weddingData.quote.marathi}"
          </p>

        </motion.div>
      </div>

      {/* Floating Animated Diyas on bottom left and right of Hero */}
      <div className="absolute bottom-10 left-8 md:left-24 animate-float opacity-30 z-10 pointer-events-none hidden md:block">
        <span className="text-4xl text-amber-500 animate-flicker">🪔</span>
      </div>
      <div className="absolute bottom-10 right-8 md:right-24 animate-float [animation-delay:3s] opacity-30 z-10 pointer-events-none hidden md:block">
        <span className="text-4xl text-amber-500 animate-flicker">🪔</span>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 flex flex-col items-center gap-1 z-20 pointer-events-none"
      >

        <svg className="w-4 h-4 text-gold-med/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
