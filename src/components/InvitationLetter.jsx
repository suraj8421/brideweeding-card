// src/components/InvitationLetter.jsx
import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export const InvitationLetter = () => {
  return (
    <section className="relative py-24 px-4 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Decorative Traditional Swastik/Lotus corner indicators */}
      <div className="absolute top-10 left-10 text-gold-med/15 text-5xl pointer-events-none hidden md:block select-none">卐</div>
      <div className="absolute top-10 right-10 text-gold-med/15 text-5xl pointer-events-none hidden md:block select-none">卐</div>
      <div className="absolute bottom-10 left-10 text-gold-med/15 text-5xl pointer-events-none hidden md:block select-none">卐</div>
      <div className="absolute bottom-10 right-10 text-gold-med/15 text-5xl pointer-events-none hidden md:block select-none">卐</div>

      {/* Ganesha Sanskrit Mantra backdrop */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
        className="max-w-3xl w-full text-center space-y-12 z-20"
      >
        {/* Sanskrit Prayer Header */}
        <div className="space-y-4">
          <p className="font-tiro text-base md:text-lg text-gold-med leading-relaxed whitespace-pre-line tracking-wide">
            {weddingData.mantras[0].sanskrit}
          </p>
          <div className="w-16 h-[1px] bg-gold-med/30 mx-auto" />
          <p className="font-cinzel text-[10px] md:text-xs text-gold-light/60 uppercase tracking-widest max-w-lg mx-auto">
            {weddingData.mantras[0].translation}
          </p>
        </div>

        {/* The Royal Scroll / Invitation Card (Paper texture with gold accents) */}
        <div className="relative bg-paper-texture rounded-3xl p-8 md:p-14 border-4 border-gold-med shadow-[0_15px_40px_rgba(0,0,0,0.4)] overflow-hidden">
          {/* Inner royal border */}
          <div className="absolute inset-2 border border-gold-dark/30 rounded-2xl pointer-events-none" />
          
          {/* Decorative Corner Borders */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold-dark pointer-events-none" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold-dark pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold-dark pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold-dark pointer-events-none" />

          {/* Invitation Content */}
          <div className="space-y-8 relative z-10 text-primary-darkmaroon">
            
            {/* Salutation */}
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-yatra text-2xl md:text-3xl text-primary-maroon"
            >
              {weddingData.invitationText.salutation}
            </motion.h3>

            {/* Traditional invitation text body */}
            <div className="space-y-6">
              {weddingData.invitationText.paragraphs.map((para, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, delay: 0.3 + index * 0.2 }}
                  className="font-tiro text-base md:text-lg leading-relaxed text-justify md:text-center text-primary-darkmaroon/95 font-medium"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Traditional closing marker */}
            <div className="flex justify-center items-center gap-2 pt-4">
              <span className="text-gold-dark text-xl">🙏</span>
              <div className="w-8 h-[1px] bg-gold-dark/40" />
              <span className="text-gold-dark text-xl">🙏</span>
            </div>
            
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default InvitationLetter;
