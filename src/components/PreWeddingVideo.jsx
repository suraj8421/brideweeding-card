// src/components/PreWeddingVideo.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaVideo } from "react-icons/fa";
import { weddingData } from "../data/weddingData";

export const PreWeddingVideo = () => {
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = (videoEl) => {
    if (!videoEl) return;
    if (videoEl.paused) {
      videoEl.play();
      setIsPlaying(true);
    } else {
      videoEl.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative py-24 px-4 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Decorative swastik patterns on corners */}
      <div className="absolute left-6 bottom-1/4 text-gold-med/5 text-4xl pointer-events-none select-none">卐</div>

      <div className="max-w-4xl w-full text-center space-y-12 z-20">
        
        {/* Title */}
        <div className="space-y-2">
          <p className="font-cinzel text-xs tracking-widest text-gold-med/80 uppercase">
            Pre-Wedding Teaser
          </p>
          <h2 className="font-yatra text-3xl md:text-4xl text-gold-gradient">
            पूर्व-चित्रण (Teaser)
          </h2>
          <p className="font-cinzel text-xs tracking-widest text-gold-light/60 uppercase">
            Pre-Wedding Video
          </p>
        </div>

        {/* Video Player Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="relative rounded-3xl p-3 md:p-4 border-gold-shimmer-maroon bg-gradient-to-b from-primary-maroon to-primary-darkmaroon/90 shadow-2xl aspect-[16/9] w-full max-w-3xl mx-auto flex items-center justify-center overflow-hidden"
        >
          {/* Inner frame borders */}
          <div className="absolute inset-1 rounded-[22px] border border-gold-med/20 pointer-events-none z-10" />

          {/* Main Display container */}
          <div className="w-full h-full rounded-[20px] overflow-hidden bg-primary-darkmaroon flex items-center justify-center relative">
            {!videoError ? (
              <>
                <video
                  src={weddingData.assets.preweddingVideo}
                  loop
                  playsInline
                  onClick={(e) => handlePlayToggle(e.target)}
                  onError={() => setVideoError(true)}
                  className="w-full h-full object-cover cursor-pointer z-5"
                />
                
                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div 
                    onClick={(e) => {
                      const videoEl = e.currentTarget.previousSibling;
                      handlePlayToggle(videoEl);
                    }}
                    className="absolute inset-0 bg-primary-darkmaroon/40 flex items-center justify-center z-10 cursor-pointer group"
                  >
                    <div className="w-16 h-16 rounded-full border border-gold-med/60 bg-primary-darkmaroon/90 flex items-center justify-center text-gold-med text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform">
                      <FaPlay className="ml-1" />
                    </div>
                  </div>
                )}
              </>
            ) : (
              // Premium placeholder design
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-primary-darkmaroon to-primary-maroon">
                {/* Video icon background */}
                <FaVideo className="text-gold-dark/10 text-8xl absolute pointer-events-none" />
                <span className="font-cinzel text-xs tracking-widest text-gold-gradient font-semibold uppercase z-10">
                  Pre-Wedding Video
                </span>
                <span className="font-vibes text-gold-light text-2xl z-10 mt-1">
                  Coming Soon
                </span>
                <div className="w-8 h-[1px] bg-gold-med/40 mt-3 z-10" />
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PreWeddingVideo;
