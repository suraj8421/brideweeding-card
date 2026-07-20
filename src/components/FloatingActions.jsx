// src/components/FloatingActions.jsx
import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { weddingData } from "../data/weddingData";

export const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenMaps = () => {
    window.open(weddingData.venue.googleMapsLink, "_blank", "noopener,noreferrer");
  };

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Scroll to Top button (only visible when scrolled down) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gold-med/30 bg-primary-darkmaroon/95 text-gold-med hover:text-gold-light hover:scale-105 active:scale-95 transition-all shadow-[0_4px_15px_rgba(0,0,0,0.3)] cursor-pointer"
          title="वर जा"
        >
          <FaArrowUp size={14} />
        </button>
      )}

      {/* Floating Action Button - Maps Location */}
      <button
        onClick={handleOpenMaps}
        className="w-12 h-12 flex items-center justify-center rounded-full border border-gold-med/40 bg-gradient-to-br from-gold-dark to-gold-med text-primary-darkmaroon hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        title="लग्न स्थळ"
      >
        <FaMapMarkerAlt size={20} />
      </button>
    </div>
  );
};

export default FloatingActions;
