// src/components/CoupleSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export const CoupleSection = () => {
  const [brideImgError, setBrideImgError] = useState(false);
  const [groomImgError, setGroomImgError] = useState(false);

  // Decorative Golden Frame component for "Photo Coming Soon" or actual photo
  const ProfileFrame = ({ isBride, imageSrc, name, education, profession, hasError, setError }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.0 }}
        className="flex flex-col items-center max-w-[280px] md:max-w-[320px] w-full"
      >
        {/* Circular glowing gold frame */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-gold-med p-2 bg-gradient-to-b from-gold-dark via-gold-light to-gold-dark shadow-[0_0_25px_rgba(212,175,55,0.4)] animate-float-slow [animation-delay:1s] flex items-center justify-center overflow-visible">
          {/* Inner ring */}
          <div className="absolute inset-1 rounded-full border border-primary-maroon/20" />
          
          <div className="w-full h-full rounded-full overflow-hidden bg-primary-darkmaroon flex items-center justify-center relative">
            {!hasError ? (
              <img
                src={imageSrc}
                alt={name}
                onError={() => setError(true)}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              // Premium Coming Soon Placeholder
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-gradient-to-br from-primary-darkmaroon to-primary-maroon">
                {/* Traditional lotus or ring sketch backdrop */}
                <div className="text-gold-dark/20 text-7xl absolute pointer-events-none">🏵️</div>
                <span className="font-cinzel text-xs md:text-sm tracking-widest text-gold-gradient font-bold uppercase z-10">
                  {isBride ? "Bride Photo" : "Groom Photo"}
                </span>
                <span className="font-vibes text-gold-light text-2xl z-10 mt-1">
                  Coming Soon
                </span>
                <div className="w-8 h-[1px] bg-gold-med/40 mt-3 z-10" />
              </div>
            )}
          </div>

          {/* Floating flower petal decoration on frame corner */}
          <div className="absolute -bottom-2 -right-2 text-2xl filter drop-shadow">🌸</div>
        </div>

        {/* Details card with glassmorphism */}
        <div className="mt-8 text-center glass-card-light w-full py-4 px-6 rounded-2xl border-gold-shimmer text-primary-darkmaroon">
          <p className="font-tiro text-sm tracking-wider text-gold-dark font-semibold">
            {isBride ? "वधू" : "वर"}
          </p>
          <h2 className="font-yatra text-2xl text-primary-maroon mt-1">
            {name}
          </h2>
          <p className="font-montserrat text-xs font-semibold text-primary-darkmaroon/80 mt-1">
            {education}
          </p>
          <div className="w-12 h-[1px] bg-gold-med/50 mx-auto my-2" />
          <p className="font-tiro text-xs text-primary-maroon/90 font-medium leading-relaxed">
            {profession}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative py-10 flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background mandala watermark */}
      <div className="absolute w-[600px] h-[600px] border border-gold-med/5 rounded-full pointer-events-none -left-48 top-12 animate-spin-slow opacity-30" />
      <div className="absolute w-[600px] h-[600px] border border-gold-med/5 rounded-full pointer-events-none -right-48 bottom-12 animate-spin-slow [animation-direction:reverse] opacity-30" />

      {/* Traditional banana leaves backdrop elements */}
      <div className="absolute left-0 bottom-0 text-7xl opacity-5 select-none pointer-events-none font-bold">🍃</div>
      <div className="absolute right-0 top-0 text-7xl opacity-5 select-none pointer-events-none font-bold">🍃</div>

      {/* Main Container */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 z-20">
        
        {/* Groom Card */}
        <ProfileFrame
          isBride={false}
          imageSrc={weddingData.groom.photo}
          name={weddingData.groom.name}
          education={weddingData.groom.education}
          profession={weddingData.groom.profession}
          hasError={groomImgError}
          setError={setGroomImgError}
        />

        {/* Animated Joining Rings Component */}
        <div className="flex flex-col items-center justify-center relative py-6">
          {/* Glowing animated heart */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: [0.9, 1.1, 0.9], opacity: 1 }}
            viewport={{ once: true }}
            transition={{ scale: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }, opacity: { duration: 0.8 } }}
            className="text-red-600 text-3xl mb-4 filter drop-shadow-[0_0_8px_rgba(220,38,38,0.5)] z-20"
          >
            ❤️
          </motion.div>

          {/* Interlocking Rings SVG */}
          <div className="relative w-32 h-20 flex items-center justify-center">
            {/* Left Ring (Groom) */}
            <motion.svg
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: -12, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute w-14 h-14"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Simple elegant ring circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#ring-gold)"
                strokeWidth="10"
                fill="none"
                className="filter drop-shadow-[0_0_4px_rgba(212,175,55,0.6)]"
              />
            </motion.svg>

            {/* Right Ring (Bride) */}
            <motion.svg
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 12, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute w-14 h-14"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ring circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#ring-gold)"
                strokeWidth="10"
                fill="none"
                className="filter drop-shadow-[0_0_4px_rgba(212,175,55,0.6)]"
              />
              {/* Diamond/Lotus motif top */}
              <polygon points="50,2 62,18 50,30 38,18" fill="#FAF7EE" stroke="#D4AF37" strokeWidth="2" />
            </motion.svg>

            {/* SVGs linear gradient definitions */}
            <svg className="absolute w-0 h-0">
              <defs>
                <linearGradient id="ring-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#AA771C" />
                  <stop offset="35%" stopColor="#D4AF37" />
                  <stop offset="50%" stopColor="#FCE6A4" />
                  <stop offset="65%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#AA771C" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <p className="font-cinzel text-[10px] tracking-widest text-gold-med/60 uppercase mt-4">
            Forever Bound
          </p>
        </div>

        {/* Bride Card */}
        <ProfileFrame
          isBride={true}
          imageSrc={weddingData.bride.photo}
          name={weddingData.bride.name}
          education={weddingData.bride.education}
          profession={weddingData.bride.profession}
          hasError={brideImgError}
          setError={setBrideImgError}
        />

      </div>
    </section>
  );
};

export default CoupleSection;
