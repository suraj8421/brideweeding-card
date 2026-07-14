// src/components/Blessings.jsx
import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export const Blessings = () => {
  return (
    <section className="relative py-24 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Background soft glowing circle */}
      <div className="absolute w-[40vw] h-[40vw] bg-gold-med/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl w-full text-center space-y-12 z-20">
        
        {/* Title */}
        <div className="space-y-2">
          <p className="font-cinzel text-xs tracking-widest text-gold-med/80 uppercase">
            Auspicious Blessings
          </p>
          <h2 className="font-yatra text-3xl md:text-4xl text-gold-gradient">
            मंगलाष्टक व मंत्र
          </h2>
          <p className="font-cinzel text-xs tracking-widest text-gold-light/60 uppercase">
            Sacred Mantras
          </p>
        </div>

        {/* Marriage Mantra Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative rounded-3xl p-8 md:p-12 border-gold-shimmer-maroon bg-gradient-to-b from-primary-maroon to-primary-darkmaroon/90 shadow-2xl flex flex-col items-center gap-8"
        >
          {/* Inner royal border */}
          <div className="absolute inset-2 rounded-[22px] border border-gold-med/15 pointer-events-none" />

          {/* Glowing Animated Diya (oil lamp) SVG */}
          <div className="w-24 h-24 flex items-center justify-center relative">
            {/* Ambient flame glow */}
            <div className="absolute top-1 w-8 h-8 rounded-full bg-amber-500/30 blur-md animate-flicker" />

            <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">
              {/* Diya Base */}
              <path
                d="M10 60 C10 80, 90 80, 90 60 C90 60, 80 50, 50 50 C20 50, 10 60, 10 60 Z"
                fill="url(#diya-gold)"
                stroke="#D4AF37"
                strokeWidth="1.5"
              />
              <path
                d="M20 60 C20 72, 80 72, 80 60 C80 60, 70 55, 50 55 C30 55, 20 60, 20 60 Z"
                fill="#3B0007"
                opacity="0.6"
              />

              {/* Flame wick */}
              <line x1="50" y1="52" x2="50" y2="42" stroke="#FAF7EE" strokeWidth="2.5" strokeLinecap="round" />

              {/* Flicker animate Flame path */}
              <g className="animate-flicker">
                <path
                  d="M50 15 C45 30, 42 42, 50 42 C58 42, 55 30, 50 15 Z"
                  fill="url(#flame-grad)"
                />
              </g>

              {/* Definitions */}
              <defs>
                <linearGradient id="diya-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#AA771C" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#AA771C" />
                </linearGradient>
                <linearGradient id="flame-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="25%" stopColor="#FCE6A4" />
                  <stop offset="60%" stopColor="#EA580C" />
                  <stop offset="100%" stopColor="#991B1B" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Mantra Text */}
          <div className="space-y-6 max-w-xl text-center relative z-10">
            <p className="font-tiro text-lg md:text-xl text-gold-gradient leading-relaxed whitespace-pre-line tracking-wide font-semibold">
              {weddingData.mantras[1].sanskrit}
            </p>
            
            <div className="w-16 h-[1px] bg-gold-med/30 mx-auto" />
            
            <p className="font-cinzel text-[10px] md:text-xs text-gold-light/60 uppercase tracking-widest leading-relaxed">
              {weddingData.mantras[1].translation}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Blessings;
