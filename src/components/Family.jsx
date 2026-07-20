// src/components/Family.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { weddingData } from "../data/weddingData";

export const Family = () => {
  return (
    <section className="relative py-10 px-4 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Decorative Swastik patterns */}
      <div className="absolute left-6 top-1/4 text-gold-med/10 text-4xl pointer-events-none select-none">卐</div>
      <div className="absolute right-6 bottom-1/4 text-gold-med/10 text-4xl pointer-events-none select-none">卐</div>

      <div className="max-w-4xl w-full text-center space-y-8 z-20">
        
        {/* Title */}
        <div className="space-y-2">

          <h2 className="font-yatra text-3xl md:text-4xl text-gold-gradient">
            स्नेही जन
          </h2>

        </div>

        {/* Family Cards Layout */}
        <div className="space-y-12">
          
          {/* Senders (प्रेषक) Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="rounded-3xl p-8 border-gold-shimmer-maroon bg-gradient-to-b from-primary-maroon to-primary-darkmaroon/90 shadow-xl max-w-xl mx-auto"
          >
            <h3 className="font-yatra text-xl text-gold-gradient mb-4">
              {weddingData.family.sendersTitle}
            </h3>
            <div className="w-12 h-[1px] bg-gold-med/30 mx-auto mb-4" />
            
            {weddingData.family.senders.map((sender, idx) => (
              <div key={idx} className="space-y-3 text-gold-light/90">
                <p className="font-tiro text-lg font-bold">{sender.name}</p>
                <p className="font-cinzel text-[10px] tracking-wider text-gold-med uppercase">{sender.relation}</p>
                <p className="font-tiro text-xs opacity-75">{sender.address}</p>
                
                {/* Interactive Phone Calls */}
                <div className="flex justify-center gap-4 pt-2">
                  {sender.phones.map((phone, pIdx) => (
                    <a
                      key={pIdx}
                      href={`tel:${phone}`}
                      className="flex items-center gap-1.5 py-1.5 px-3 rounded-full border border-gold-med/35 bg-primary-darkmaroon text-gold-med text-xs font-semibold hover:bg-gold-med hover:text-primary-darkmaroon transition-colors"
                    >
                      <FaPhoneAlt size={10} />
                      <span>{phone}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Welcomers & Cousins (आपले स्नेहांकित व बंधुराज) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Snehankit List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
              className="rounded-3xl p-8 border-gold-shimmer bg-cream-card/95 text-primary-darkmaroon shadow-lg flex flex-col items-center"
            >
              {/* Paper texture overlay */}
              <div className="absolute inset-0 rounded-3xl bg-paper-texture opacity-20 pointer-events-none" />

              <h3 className="font-yatra text-xl text-primary-maroon mb-4 relative z-10">
                {weddingData.family.welcomersTitle}
              </h3>
              <div className="w-12 h-[1px] bg-gold-med/50 mb-6 relative z-10" />

              <ul className="space-y-2.5 text-center relative z-10 w-full">
                {weddingData.family.welcomers.map((member, idx) => (
                  <li key={idx} className="font-tiro text-sm">
                    <span className="font-bold text-primary-maroon">{member.name}</span>
                    <span className="text-[11px] font-tiro text-gold-dark block mt-0.5">
                      {member.relation}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Cousins List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0 }}
              className="rounded-3xl p-8 border-gold-shimmer bg-cream-card/95 text-primary-darkmaroon shadow-lg flex flex-col items-center justify-between"
            >
              {/* Paper texture overlay */}
              <div className="absolute inset-0 rounded-3xl bg-paper-texture opacity-20 pointer-events-none" />

              <div className="w-full flex flex-col items-center">
                <h3 className="font-yatra text-xl text-primary-maroon mb-4 relative z-10">
                  बंधुराज
                </h3>
                <div className="w-12 h-[1px] bg-gold-med/50 mb-6 relative z-10" />

                <ul className="space-y-4 text-center relative z-10 w-full">
                  {weddingData.family.cousins.map((cousin, idx) => (
                    <li key={idx} className="font-tiro text-sm">
                      <span className="font-bold text-primary-maroon">{cousin.name}</span>
                      {cousin.education && (
                        <span className="text-[10px] font-montserrat text-gold-dark block mt-0.5">
                          {cousin.education}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Diya at bottom */}
              <div className="mt-8 text-gold-dark text-xl relative z-10">
                🪔
              </div>
            </motion.div>
          </div>

          {/* Little Inviters (छोटे निमंत्रक) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="rounded-3xl p-8 border-gold-shimmer bg-cream-card/95 text-primary-darkmaroon shadow-lg"
          >
            {/* Paper texture overlay */}
            <div className="absolute inset-0 rounded-3xl bg-paper-texture opacity-20 pointer-events-none" />

            <h3 className="font-yatra text-xl text-primary-maroon mb-4 relative z-10">
              {weddingData.family.littleInvitersTitle}
            </h3>
            <div className="w-12 h-[1px] bg-gold-med/50 mb-6 relative z-10" />

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 max-w-2xl mx-auto relative z-10">
              {weddingData.family.littleInviters.map((name, idx) => (
                <span 
                  key={idx} 
                  className="font-tiro text-sm font-semibold text-primary-darkmaroon/90 px-3 py-1 rounded-full border border-gold-med/20 bg-primary-maroon/5 hover:bg-gold-med/10 transition-colors"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Family;
