// src/components/Venue.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaLocationArrow } from "react-icons/fa";
import { weddingData } from "../data/weddingData";

export const Venue = () => {
  const handleOpenMaps = () => {
    if (weddingData.venue.googleMapsLink) {
      window.open(weddingData.venue.googleMapsLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="relative py-10 px-4 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Decorative banana leaves watermark */}
      <div className="absolute right-0 top-1/4 text-[20vw] opacity-[0.03] select-none pointer-events-none font-bold">🍃</div>

      <div className="max-w-3xl w-full text-center space-y-6 z-20">
        
        {/* Title */}
        <div className="space-y-2">

          <h2 className="font-yatra text-3xl md:text-4xl text-gold-gradient">
            लग्न स्थळ
          </h2>

        </div>

        {/* Venue Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="relative rounded-3xl p-8 md:p-12 border-gold-shimmer-maroon bg-gradient-to-b from-primary-maroon to-primary-darkmaroon/90 shadow-2xl flex flex-col items-center gap-6"
        >
          {/* Inner royal frame */}
          <div className="absolute inset-2 rounded-[22px] border border-gold-med/15 pointer-events-none" />

          {/* Map pin glow circle */}
          <div className="w-16 h-16 rounded-full border border-gold-med/30 bg-primary-darkmaroon/60 flex items-center justify-center text-gold-med text-2xl shadow-lg animate-pulse">
            <FaMapMarkerAlt />
          </div>

          {/* Venue details */}
          <div className="space-y-4 max-w-xl mx-auto">
            <h3 className="font-yatra text-2xl md:text-3xl text-gold-gradient leading-tight">
              {weddingData.venue.name}
            </h3>

            
            <div className="h-[1px] w-24 bg-gold-med/20 mx-auto my-4" />

            <p className="font-tiro text-base md:text-lg text-gold-light/90 leading-relaxed font-medium">
              {weddingData.venue.address}
            </p>

          </div>

          {/* Large Navigation Button */}
          <a
            href={weddingData.venue.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 py-3 px-8 rounded-full bg-gradient-to-r from-gold-dark via-gold-med to-gold-dark text-primary-darkmaroon font-cinzel text-xs font-bold tracking-widest uppercase hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer text-center"
          >
            <FaLocationArrow className="text-xs" />
            गुगल मॅपवर लग्न स्थळ पहा
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Venue;
