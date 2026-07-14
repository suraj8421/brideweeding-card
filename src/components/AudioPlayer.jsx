// src/components/AudioPlayer.jsx
import React, { useState } from "react";
import { FaMusic, FaVolumeMute, FaVolumeUp, FaPlay, FaPause } from "react-icons/fa";
import { useAudio } from "../hooks/useAudio";

export const AudioPlayer = () => {
  const { isPlaying, isMuted, volume, togglePlay, toggleMute, handleVolumeChange } = useAudio();
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  return (
    <div 
      className="fixed bottom-6 left-6 z-40 flex items-center gap-3"
      onMouseEnter={() => setShowVolumeSlider(true)}
      onMouseLeave={() => setShowVolumeSlider(false)}
    >
      {/* Volume slider container */}
      <div 
        className={`flex items-center bg-primary-darkmaroon/95 border border-gold-med/40 py-2 px-3 rounded-full shadow-lg transition-all duration-300 ${
          showVolumeSlider ? "opacity-100 translate-x-0 w-32" : "opacity-0 -translate-x-4 w-0 pointer-events-none overflow-hidden"
        }`}
      >
        <button 
          onClick={toggleMute}
          className="text-gold-med hover:text-gold-light mr-2 transition-colors cursor-pointer"
        >
          {isMuted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
        </button>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.05" 
          value={isMuted ? 0 : volume} 
          onChange={(e) => handleVolumeChange(e.target.value)}
          className="w-full h-1 bg-gold-dark/30 rounded-lg appearance-none cursor-pointer accent-gold-med"
        />
      </div>

      {/* Floating spinning music button */}
      <button
        onClick={togglePlay}
        className={`relative w-12 h-12 flex items-center justify-center rounded-full border border-gold-med/60 bg-gradient-to-br from-primary-darkmaroon to-primary-maroon shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300 group cursor-pointer`}
      >
        {/* Animated outer gold aura ring */}
        <div className="absolute inset-0 rounded-full border border-gold-light/20 scale-100 group-hover:scale-110 transition-transform duration-500" />
        
        {/* Spinning musical disk */}
        <div className={`text-gold-med group-hover:text-gold-light transition-colors ${isPlaying ? "animate-spin-slow" : ""}`}>
          <FaMusic size={18} />
        </div>

        {/* Small badge for play/pause indicators */}
        <span className="absolute -top-1 -right-1 bg-gold-med text-primary-darkmaroon w-4.5 h-4.5 rounded-full flex items-center justify-center text-[9px] font-bold border border-primary-darkmaroon">
          {isPlaying ? <FaPause size={6} /> : <FaPlay size={6} />}
        </span>
      </button>
    </div>
  );
};

export default AudioPlayer;
