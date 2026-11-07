// src/components/OpeningEnvelope.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export const OpeningEnvelope = ({ onComplete, onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isOpen) return;

    // Automatically open the envelope after 1.8 seconds (so they can see it)
    const autoOpenTimer = setTimeout(() => {
      handleOpen();
    }, 1800);

    // Also trigger opening if the user attempts to scroll or swipe
    const handleGesture = () => {
      handleOpen();
    };

    window.addEventListener("wheel", handleGesture, { passive: true });
    window.addEventListener("touchmove", handleGesture, { passive: true });
    window.addEventListener("scroll", handleGesture, { passive: true });

    return () => {
      clearTimeout(autoOpenTimer);
      window.removeEventListener("wheel", handleGesture);
      window.removeEventListener("touchmove", handleGesture);
      window.removeEventListener("scroll", handleGesture);
    };
  }, [isOpen]);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    if (onOpen) onOpen();

    // Launch golden sparkles / confetti
    setTimeout(() => {
      triggerGoldConfetti();
    }, 800); // Trigger right as card slides up

    // Complete the envelope phase after animations finish
    setTimeout(() => {
      setIsDone(true);
      setTimeout(() => {
        onComplete();
      }, 500); // Smooth transition fade
    }, 3200);
  };

  const triggerGoldConfetti = () => {
    const end = Date.now() + 1000;
    const colors = ["#AA771C", "#D4AF37", "#FCE6A4"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0.1, y: 0.8 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 0.9, y: 0.8 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 w-full h-full bg-primary-darkmaroon/95 flex items-center justify-center z-40 px-4 overflow-hidden"
        >
          {/* Subtle floral pattern overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#AA771C_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="text-center z-10 w-full max-w-[480px]">
            {/* Guide Text */}
          

            {/* 3D Envelope Wrapper */}
            <div
              onClick={handleOpen}
              className="relative w-full aspect-[4/3] bg-cream-card/95 rounded-lg border border-gold-med/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer select-none overflow-visible group"
              style={{ perspective: "1000px" }}
            >
              {/* Envelope Paper Texture */}
              <div className="absolute inset-0 rounded-lg bg-paper-texture opacity-30 pointer-events-none" />

              {/* Envelope Body Folds */}
              {/* Bottom flap shape */}
              <div
                className="absolute inset-0 rounded-lg pointer-events-none border-b-4 border-gold-med/40 shadow-inner z-10"
                style={{
                  clipPath: "polygon(0% 100%, 50% 60%, 100% 100%)",
                  background: "linear-gradient(to top, #F5EFEB, #EADED7)",
                }}
              />

              {/* Side flaps shapes */}
              <div
                className="absolute inset-0 rounded-lg pointer-events-none border-l-2 border-r-2 border-gold-med/20 z-10"
                style={{
                  clipPath: "polygon(0% 0%, 40% 50%, 0% 100%)",
                  background: "linear-gradient(to right, #F5EFEB, #E5D5CB)",
                }}
              />
              <div
                className="absolute inset-0 rounded-lg pointer-events-none border-l-2 border-r-2 border-gold-med/20 z-10"
                style={{
                  clipPath: "polygon(100% 0%, 60% 50%, 100% 100%)",
                  background: "linear-gradient(to left, #F5EFEB, #E5D5CB)",
                }}
              />

              {/* Main Invitation Card inside (slides up) */}
              <motion.div
                initial={{ y: 0, scale: 0.95 }}
                animate={isOpen ? { y: "-55%", scale: 1.0, zIndex: 12 } : { y: 0, scale: 0.95, zIndex: 5 }}
                transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                className="absolute w-[90%] h-[90%] bg-primary-maroon rounded border-2 border-gold-med shadow-[0_4px_25px_rgba(0,0,0,0.3)] p-4 flex flex-col items-center justify-between text-center overflow-hidden z-5"
              >
                {/* Gold Card border inside */}
                <div className="absolute inset-1 border border-gold-light/30 rounded" />
                <div className="absolute inset-2 bg-paper-texture opacity-5" />

                {/* Mandap/Kalash vectors placeholder */}
                <div className="mt-2 text-gold-med text-2xl">🔱</div>

                <div className="space-y-2 my-auto">
                  <span className="font-yatra text-gold-gradient text-3xl block">पूनम</span>
                  <span className="text-gold-light text-xs tracking-widest block uppercase font-yatra">आणि</span>
                  <span className="font-yatra text-gold-gradient text-3xl block">जीवन</span>
                </div>

                <div className="space-y-1 mb-2">
                  <p className="font-yatra text-[10px] tracking-widest text-gold-light/60 uppercase">शुभविवाह</p>
                  <p className="font-tiro text-xs text-gold-med tracking-wider font-bold">१५ नोव्हेंबर २०२६</p>
                </div>
              </motion.div>

              {/* Envelope Top Flap (folds back using rotateX) */}
              <motion.div
                initial={{ rotateX: 0 }}
                animate={isOpen ? { rotateX: -180, zIndex: 2 } : { rotateX: 0, zIndex: 15 }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
                className="absolute inset-x-0 top-0 h-1/2 origin-top border-t border-gold-med/30"
                style={{
                  clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)",
                  background: "linear-gradient(to bottom, #FAF7EE, #EADED7)",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              />

              {/* Glowing Golden Wax Seal (breaks and splits) */}
              <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex pointer-events-none">
                {/* Left Wax Half */}
                <motion.div
                  initial={{ x: 0, opacity: 1, rotate: 0 }}
                  animate={isOpen ? { x: -40, opacity: 0, rotate: -25 } : { x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-10 h-20 bg-gradient-to-l from-luxury-red to-primary-darkmaroon border-r border-gold-med rounded-l-full flex items-center justify-end shadow-[-5px_0_15px_rgba(0,0,0,0.3)]"
                >
                  <span className="font-yatra text-gold-gradient text-3xl mr-[-4px] select-none">ॐ</span>
                </motion.div>

                {/* Right Wax Half */}
                <motion.div
                  initial={{ x: 0, opacity: 1, rotate: 0 }}
                  animate={isOpen ? { x: 40, opacity: 0, rotate: 25 } : { x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-10 h-20 bg-gradient-to-r from-luxury-red to-primary-darkmaroon border-l border-gold-med rounded-r-full flex items-center justify-start shadow-[5px_0_15px_rgba(0,0,0,0.3)]"
                >
                  {/* Empty or mirrored swirl */}
                </motion.div>

                {/* Outer Ring Glow on hover */}
                {!isOpen && (
                  <div className="absolute -inset-4 rounded-full border border-gold-med/30 animate-pulse pointer-events-none shadow-[0_0_20px_rgba(212,175,55,0.3)]" />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningEnvelope;
