// src/components/Countdown.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export const Countdown = () => {
  const targetDate = new Date(weddingData.weddingDate.countdownDate).getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isCelebration, setIsCelebration] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsCelebration(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    calculateTimeLeft(); // run immediately
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Premium card layout for individual countdown numbers
  const CountdownCard = ({ value, label }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl glass-card border-gold-shimmer font-cinzel text-2xl sm:text-3xl font-bold shadow-lg">
          {/* Subtle inner grid/divider */}
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-gold-med/25" />
          
          <span className="z-10 text-gold-gradient inline-block">{String(value).padStart(2, "0")}</span>
        </div>
        <span className="font-cinzel text-[10px] sm:text-[11px] tracking-widest text-gold-light/70 uppercase mt-2">
          {label}
        </span>
      </div>
    );
  };

  return (
    <section className="relative py-20 flex flex-col items-center justify-center px-4 overflow-hidden">
      
      {/* Golden peacock feathers or flower watermark background */}
      <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
        <span className="text-[25vw]">🪶</span>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-10 z-20">
        
        {/* Header Invocation */}
        <div className="space-y-2">
          <p className="font-cinzel text-xs tracking-widest text-gold-med/80 uppercase">
            Auspicious Date
          </p>
          <h2 className="font-yatra text-3xl md:text-4xl text-gold-gradient">
            {weddingData.weddingDate.date}
          </h2>
          <p className="font-cinzel text-xs tracking-widest text-gold-light/60 uppercase">
            {weddingData.weddingDate.dateEng}
          </p>
        </div>

        {/* Tithi Detail */}
        <div className="inline-block py-2 px-6 rounded-full border border-gold-med/25 bg-primary-maroon/20 backdrop-blur-md">
          <p className="font-tiro text-sm text-gold-light tracking-wide">
            {weddingData.weddingDate.tithi}
          </p>
        </div>

        {/* Countdown Cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="flex justify-center gap-3 sm:gap-6 py-4"
        >
          {isCelebration ? (
            <div className="glass-card border-gold-shimmer py-4 px-10 rounded-2xl text-center">
              <span className="font-vibes text-gold-gradient text-3xl md:text-4xl block">
                The Wedding Day is Here!
              </span>
              <span className="font-cinzel text-xs text-gold-light tracking-widest uppercase mt-1 block">
                Auspicious celebrations have begun
              </span>
            </div>
          ) : (
            <>
              <CountdownCard value={timeLeft.days} label="Days" />
              <CountdownCard value={timeLeft.hours} label="Hours" />
              <CountdownCard value={timeLeft.minutes} label="Mins" />
              <CountdownCard value={timeLeft.seconds} label="Secs" />
            </>
          )}
        </motion.div>

        {/* Traditional mantra invocation divider */}
        <div className="flex items-center justify-center gap-3 opacity-60">
          <span className="text-gold-med text-lg">🪔</span>
          <div className="w-16 h-[1px] bg-gradient-to-r from-gold-med to-transparent" />
          <span className="text-gold-med text-lg">🪔</span>
          <div className="w-16 h-[1px] bg-gradient-to-l from-gold-med to-transparent" />
          <span className="text-gold-med text-lg">🪔</span>
        </div>

      </div>
    </section>
  );
};

export default Countdown;
