// src/animations/PetalRain.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Petal = ({ id }) => {
  const [randoms, setRandoms] = useState(null);

  useEffect(() => {
    setRandoms({
      left: Math.random() * 100, // percentage
      delay: Math.random() * 8, // seconds
      duration: 10 + Math.random() * 12, // seconds
      scale: 0.5 + Math.random() * 0.8,
      rotationStart: Math.random() * 360,
      rotationEnd: Math.random() * 360 + 720,
      wind: -50 + Math.random() * 100, // pixels shift horizontal
    });
  }, [id]);

  if (!randoms) return null;

  return (
    <motion.svg
      className="absolute pointer-events-none z-10 opacity-70"
      style={{
        left: `${randoms.left}%`,
        top: -40,
        width: 24,
        height: 24,
      }}
      initial={{ 
        y: -40, 
        x: 0, 
        rotate: randoms.rotationStart, 
        opacity: 0 
      }}
      animate={{
        y: "105vh",
        x: randoms.wind,
        rotate: randoms.rotationEnd,
        opacity: [0, 0.7, 0.7, 0]
      }}
      transition={{
        duration: randoms.duration,
        delay: randoms.delay,
        ease: "linear",
        repeat: Infinity,
      }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Royal rose petal shape */}
      <path
        d="M12 2C12 2 3 7 3 13C3 18.5228 7.47715 22 12 22C16.5228 22 21 18.5228 21 13C21 7 12 2 12 2Z"
        fill="url(#rose-petal-grad)"
      />
      <defs>
        <radialGradient id="rose-petal-grad" cx="0.5" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#d946ef" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#be123c" />
          <stop offset="100%" stopColor="#4c0519" />
        </radialGradient>
      </defs>
    </motion.svg>
  );
};

export const PetalRain = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    // Generate 25 petals with unique ids
    const initialPetals = Array.from({ length: 25 }, (_, i) => i);
    setPetals(initialPetals);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10 w-full h-full">
      {petals.map((id) => (
        <Petal key={id} id={id} />
      ))}
    </div>
  );
};
