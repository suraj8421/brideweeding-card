// src/components/GaneshaLoading.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingData } from "../data/weddingData";
import { useAudio } from "../hooks/useAudio";

export const GaneshaLoading = ({ onEnter }) => {
  const { playMusic, playSoundEffect } = useAudio();
  const [showPrompt, setShowPrompt] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    // Show prompt to touch seal after 1.0 seconds
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 1000);

    // Automatically transition to envelope after 3.0 seconds
    const autoEnterTimer = setTimeout(() => {
      handleSealClick();
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoEnterTimer);
    };
  }, []);

  const handleSealClick = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (hasEntered) return;
    setHasEntered(true);

    // Play bell and conch sound effects
    playSoundEffect("bell");
    setTimeout(() => {
      playSoundEffect("conch");
    }, 500);

    // Start background shehnai music
    playMusic();

    // Proceed to next phase (Envelope Opening)
    onEnter();
  };

  return (
    <div 
      onClick={(e) => handleSealClick(e)}
      className="fixed inset-0 w-full h-full bg-primary-darkmaroon bg-maroon-gradient flex flex-col items-center justify-center z-50 px-4 overflow-hidden cursor-pointer"
    >
      {/* Background glowing mandala ring */}
      <div className="absolute w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] border border-gold-med/15 rounded-full animate-spin-slow pointer-events-none opacity-40" />
      <div className="absolute w-[60vw] h-[60vw] max-w-[450px] max-h-[450px] border border-dashed border-gold-med/10 rounded-full animate-spin-slow [animation-direction:reverse] pointer-events-none opacity-30" />

      {/* Ganesha Media Container */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center z-20 mb-8 pointer-events-none">
        {!videoError ? (
          <video
            src={weddingData.assets.ganeshVideo}
            autoPlay
            loop
            muted
            playsInline
            onError={() => setVideoError(true)}
            className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          />
        ) : (
          <motion.img
            src={weddingData.assets.ganeshPhoto}
            alt="Lord Ganesha"
            className="w-64 h-64 md:w-80 md:h-80 object-contain filter drop-shadow-[0_0_25px_rgba(212,175,55,0.5)]"
            animate={{
              y: [-10, 10, -10],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </div>

      {/* Invocations */}
      <div className="text-center z-20 space-y-3 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="font-yatra text-4xl md:text-5xl text-gold-gradient tracking-wide"
        >
          {weddingData.invocation.marathi}
        </motion.h1>
      </div>

      {/* Touch Seal Interactive Prompt */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="mt-12 z-30 flex flex-col items-center gap-3"
          >
            {/* Interactive Wax Seal Button */}
            <button
              onClick={handleSealClick}
              className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-luxury-red to-primary-darkmaroon border-2 border-gold-med flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-transform duration-300 group cursor-pointer"
            >
              {/* Gold swirl or OM in wax seal center */}
              <div className="absolute inset-1 rounded-full border border-gold-light/20 flex items-center justify-center bg-primary-darkmaroon/20">
                <span className="font-yatra text-gold-gradient text-3xl md:text-4xl group-hover:scale-110 transition-transform">
                  ॐ
                </span>
              </div>

              {/* Inner glowing pulse */}
              <span className="absolute inset-0 rounded-full animate-ping bg-gold-med/20 pointer-events-none" />
            </button>

            {/* Guide text under the button */}
            <p className="font-yatra text-gold-light/90 text-sm md:text-base tracking-wide mt-2 animate-pulse select-none">
              पत्रिका पाहण्यासाठी Touch करा
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GaneshaLoading;
