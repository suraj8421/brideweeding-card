// src/components/ThankYou.jsx
import React from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export const ThankYou = () => {
  return (
    <section className="relative py-10 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* Decorative floral watermark backdrop */}
      <div className="absolute w-[50vw] h-[50vw] bg-gold-med/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-2xl mx-auto space-y-6 z-20">
        
        {/* Praying hands emoji & traditional invocation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="space-y-4"
        >
          <span className="text-5xl md:text-6xl block filter drop-shadow animate-bounce">🙏</span>
          <h2 className="font-yatra text-2xl md:text-3xl text-gold-gradient tracking-wide">
            {weddingData.finalBlessing.marathi}
          </h2>
        </motion.div>

        {/* Traditional Divider */}
        <div className="flex justify-center">
          <svg className="w-36 h-4 text-gold-med opacity-50" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="5" x2="40" y2="5" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="5" r="3" fill="currentColor" />
            <line x1="60" y1="5" x2="100" y2="5" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Senders signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="space-y-2 pt-6"
        >
          <p className="font-tiro text-xs tracking-wider text-gold-med/85">
            आपले नम्र,
          </p>
          <p className="font-yatra text-2xl text-gold-gradient">
            निकम-पाटील व पवार परिवार
          </p>
        </motion.div>

      </div>

      {/* Decorative Bottom Marigold Garlands to close the invitation page */}
      <div className="absolute bottom-0 inset-x-0 h-6 flex justify-between px-2 pointer-events-none opacity-40">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-4 h-4 rounded-full bg-amber-500 shadow-sm" />
        ))}
      </div>
    </section>
  );
};

export default ThankYou;
