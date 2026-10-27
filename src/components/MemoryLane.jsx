// src/components/MemoryLane.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { weddingData } from "../data/weddingData";

export const MemoryLane = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const totalPhotos = weddingData.assets.gallery.length;

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % totalPhotos);
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  const handleImageError = (index) => {
    setImageErrors((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  // Slide transition animations
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-10 px-4 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background radial soft light glow overlay */}
      <div className="absolute w-[45vw] h-[45vw] bg-gold-med/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-10 bottom-10 text-[15vw] opacity-[0.02] select-none pointer-events-none">✨</div>
      <div className="absolute right-10 top-10 text-[15vw] opacity-[0.02] select-none pointer-events-none">✨</div>

      <div className="max-w-4xl w-full text-center space-y-6 z-20">
        
        {/* Title */}
        <div className="space-y-2">

          <h2 className="font-yatra text-3xl md:text-4xl text-gold-gradient">
            स्मरणिका
          </h2>

        </div>

        {/* Single Premium Interactive Frame */}
        <div className="relative w-full max-w-md sm:max-w-lg mx-auto flex items-center justify-center">
          
          {/* Quick-tap next slide click zone */}
          <div 
            onClick={handleNext}
            className="w-full aspect-[3/4] rounded-3xl border-gold-shimmer-maroon bg-gradient-to-b from-primary-maroon to-primary-darkmaroon/95 shadow-2xl p-2.5 sm:p-3 relative flex items-center justify-center overflow-hidden cursor-pointer select-none group"
          >
            {/* Inner gold frame borders */}
            <div className="absolute inset-2 rounded-[20px] border border-gold-med/20 pointer-events-none z-20 group-hover:border-gold-med/40 transition-colors" />

            {/* Tap helper notification overlay */}
            <div className="absolute top-4 inset-x-0 z-20 pointer-events-none flex justify-center">
              <span className="bg-primary-darkmaroon/85 border border-gold-med/30 text-[10px] sm:text-xs font-cinzel text-gold-light tracking-widest uppercase py-1 px-3 rounded-full backdrop-blur shadow-md">
                ({activeIndex + 1}/{totalPhotos})
              </span>
            </div>

            {/* Slider view port */}
            <div className="w-full h-full rounded-[18px] overflow-hidden bg-primary-darkmaroon flex items-center justify-center relative">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden"
                >
                  {!imageErrors[activeIndex] ? (
                    <>
                      {/* Ambient soft glow backdrop */}
                      <img
                        src={weddingData.assets.gallery[activeIndex]}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-35 pointer-events-none"
                      />
                      {/* Main photo perfectly fitted without cropping or distortion */}
                      <img
                        src={weddingData.assets.gallery[activeIndex]}
                        alt={`Jeevan and Poonam prewedding memory ${activeIndex + 1}`}
                        onError={() => handleImageError(activeIndex)}
                        className="relative z-10 w-full h-full object-contain p-1 rounded-xl drop-shadow-xl"
                      />
                    </>
                  ) : (
                    // Premium coming soon slide layout
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-primary-darkmaroon to-primary-maroon select-none">
                      <div className="text-gold-dark/15 text-9xl absolute pointer-events-none">🪶</div>
                      <span className="font-yatra text-xs tracking-wider text-gold-gradient font-semibold uppercase z-10">
                        लग्न स्मरणिका {activeIndex + 1}
                      </span>
                      <span className="font-tiro text-gold-light text-2xl z-10 mt-2">
                        लवकरच येत आहे
                      </span>
                      <div className="w-12 h-[1px] bg-gold-med/40 mt-4 z-10" />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Left navigation arrow overlay */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold-med/30 bg-primary-darkmaroon/80 text-gold-med hover:text-gold-light hover:scale-105 flex items-center justify-center z-30 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 shadow-md cursor-pointer"
            >
              <FaChevronLeft size={14} />
            </button>

            {/* Right navigation arrow overlay */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold-med/30 bg-primary-darkmaroon/80 text-gold-med hover:text-gold-light hover:scale-105 flex items-center justify-center z-30 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 shadow-md cursor-pointer"
            >
              <FaChevronRight size={14} />
            </button>

            {/* Glowing gold dot indicators overlay at bottom */}
            <div className="absolute bottom-4 inset-x-0 z-30 flex justify-center items-center gap-2 pointer-events-none">
              <div className="flex items-center gap-2 bg-primary-darkmaroon/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gold-med/20">
                {weddingData.assets.gallery.map((_, dotIdx) => (
                  <div
                    key={dotIdx}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      dotIdx === activeIndex
                        ? "bg-gold-med w-5 shadow-[0_0_8px_rgba(212,175,55,0.9)]"
                        : "bg-white/40 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MemoryLane;
