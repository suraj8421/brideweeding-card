// src/App.jsx
import React, { useState, useEffect } from "react";
import { TopScrollProgress } from "./components/TopScrollProgress";
import { AudioPlayer } from "./components/AudioPlayer";
import { GaneshaLoading } from "./components/GaneshaLoading";
import { OpeningEnvelope } from "./components/OpeningEnvelope";
import { Hero } from "./components/Hero";
import { CoupleSection } from "./components/CoupleSection";
import { Countdown } from "./components/Countdown";
import { InvitationLetter } from "./components/InvitationLetter";
import { Events } from "./components/Events";
import { Venue } from "./components/Venue";
import { MemoryLane } from "./components/MemoryLane";
import { Blessings } from "./components/Blessings";
import { PreWeddingVideo } from "./components/PreWeddingVideo";
import { ThankYou } from "./components/ThankYou";
import { FloatingActions } from "./components/FloatingActions";
import { PetalRain } from "./animations/PetalRain";
import { Fireflies } from "./animations/Fireflies";

function App() {
  const [phase, setPhase] = useState("loading"); // "loading" | "envelope" | "main"

  // Coordinate body overflow scroll locks during introductory sequences
  useEffect(() => {
    if (phase === "main") {
      document.body.style.overflow = "unset";
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [phase]);

  return (
    <div className="relative min-h-screen bg-primary-darkmaroon text-gold-light selection:bg-gold-med selection:text-primary-darkmaroon overflow-x-hidden">
      
      {/* 1. Loading Phase (Lord Ganesha full intro screen) */}
      {phase === "loading" && (
        <GaneshaLoading onEnter={() => setPhase("envelope")} />
      )}

      {/* 2. Envelope Phase (Gold sealed envelope click interaction) */}
      {phase === "envelope" && (
        <OpeningEnvelope onComplete={() => setPhase("main")} />
      )}

      {/* 3. Main cinematic scroll invitation website */}
      {phase === "main" && (
        <>
          {/* Scroll progress indicator at top */}
          <TopScrollProgress />

          {/* Luxury background textures and global floating animations */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {/* Seamless gold-tinted paper background texture */}
            <div className="absolute inset-0 bg-paper-texture opacity-[0.06] mix-blend-overlay" />
            {/* Radial crimson vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#1B0003_100%)] opacity-80" />
          </div>
          
          {/* Falling rose petals */}
          <PetalRain />

          {/* Floating gold sparks */}
          <Fireflies />

          {/* Single-scroll content sections */}
          <div className="relative z-20 max-w-6xl mx-auto">
            {/* Hero / Header */}
            <Hero />

            {/* Bride & Groom side-by-side (with interlocking rings) */}
            <CoupleSection />

            {/* Date & Countdown */}
            <Countdown />

            {/* Marathi Traditional Invitation letter */}
            <InvitationLetter />

            {/* Ceremonies (Haldi & Wedding cards) */}
            <Events />

            {/* Venue Address & Directions */}
            <Venue />

            {/* Memory Lane vertical scroll gallery */}
            <MemoryLane />

            {/* Pre-wedding Video Teaser */}
            <PreWeddingVideo />

            {/* Traditional Mantras & Diyas */}
            <Blessings />

            {/* Thank you closer */}
            <ThankYou />
          </div>

          {/* Sticky music controls */}
          <AudioPlayer />

          {/* Floating shortcuts (WhatsApp RSVP, Dialer, Maps location) */}
          <FloatingActions />
        </>
      )}
    </div>
  );
}

export default App;
