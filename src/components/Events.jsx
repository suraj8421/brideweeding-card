// src/components/Events.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { weddingData } from "../data/weddingData";

export const Events = () => {
  // If no events exist in the data model, do not render this section at all (per request)
  if (!weddingData.events || weddingData.events.length === 0) return null;

  // Map string to premium traditional emojis / symbols for events
  const getEventEmoji = (iconType) => {
    switch (iconType) {
      case "haldi":
        return "🌼"; // Marigold / turmeric color theme
      case "wedding":
        return "👑"; // Royal wedding knot
      default:
        return "✨";
    }
  };

  return (
    <section className="relative py-10 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute w-96 h-96 bg-gold-med/5 blur-[120px] rounded-full pointer-events-none top-1/4 left-1/4" />

      <div className="max-w-4xl w-full text-center space-y-6 z-20">
        
        {/* Section Title */}
        <div className="space-y-2">

          <h2 className="font-yatra text-3xl md:text-4xl text-gold-gradient">
            शुभ सोहळा
          </h2>

        </div>

        {/* Dynamic Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-center max-w-3xl mx-auto">
          {weddingData.events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: idx * 0.3 }}
              className="relative rounded-3xl p-8 border-gold-shimmer-maroon bg-gradient-to-b from-primary-maroon to-primary-darkmaroon/90 shadow-2xl flex flex-col items-center justify-between text-center overflow-hidden group"
            >
              {/* Inner glowing gold border outline */}
              <div className="absolute inset-1 rounded-[22px] border border-gold-med/15 pointer-events-none group-hover:border-gold-med/30 transition-colors" />

              <div className="space-y-6 w-full">
                {/* Custom Big Event Icon circle */}
                <div className="w-16 h-16 rounded-full border border-gold-med/35 bg-primary-darkmaroon flex items-center justify-center text-3xl mx-auto shadow-md group-hover:scale-110 transition-transform">
                  {getEventEmoji(event.icon)}
                </div>

                <div className="space-y-1">
                  <h3 className="font-yatra text-2xl text-gold-gradient">
                    {event.title}
                  </h3>

                </div>

                <div className="w-12 h-[1px] bg-gold-med/30 mx-auto" />

                {/* Details list */}
                <div className="space-y-4 text-sm font-medium text-gold-light/85">
                  <div className="flex items-center justify-center gap-2">
                    <FaCalendarAlt className="text-gold-med flex-shrink-0" />
                    <span className="font-tiro text-xs tracking-wide">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <FaClock className="text-gold-med flex-shrink-0" />
                    <span className="font-tiro text-xs tracking-wide">{event.time}</span>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <FaMapMarkerAlt className="text-gold-med flex-shrink-0" />
                    <span className="font-tiro text-xs tracking-wide">{event.venue}</span>
                  </div>
                </div>
              </div>

              {/* Decorative small diya element */}
              <div className="mt-8 text-gold-med text-lg opacity-40 group-hover:opacity-100 transition-opacity">
                🪔
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;
