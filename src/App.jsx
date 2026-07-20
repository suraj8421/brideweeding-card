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
import { ThankYou } from "./components/ThankYou";
import { FloatingActions } from "./components/FloatingActions";
import { PetalRain } from "./animations/PetalRain";
import { Fireflies } from "./animations/Fireflies";
import Lenis from "lenis";

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

  // Initialize Lenis smooth scrolling when in main phase
  useEffect(() => {
    if (phase !== "main") return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: "vertical",
      normalizeWheel: true,
      smoothWheel: true,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Make lenis globally accessible for debugging or manual scroll integration
    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      delete window.lenis;
    };
  }, [phase]);

  // Cinematic automatic scrolling when entering the main phase
  useEffect(() => {
    if (phase !== "main") return;

    let animationFrameId;
    let lastTime = performance.now();
    const pixelsPerSecond = 75; // Gentle cinematic scrolling speed

    const scroll = (time) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      if (window.lenis) {
        window.lenis.scrollTo(window.lenis.scroll + pixelsPerSecond * delta, { immediate: true });
      } else {
        window.scrollBy(0, pixelsPerSecond * delta);
      }

      // Check if we reached the bottom of the page
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (window.scrollY >= maxScroll - 2) {
        cancelAnimationFrame(animationFrameId);
        return;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    // Delay auto-scrolling slightly so the user can enjoy the hero section first
    const startDelayTimer = setTimeout(() => {
      lastTime = performance.now();
      animationFrameId = requestAnimationFrame(scroll);
    }, 1500);

    // Stop auto-scrolling if the user interacts (scrolls, touches, clicks, presses keys)
    const stopAutoScroll = () => {
      clearTimeout(startDelayTimer);
      cancelAnimationFrame(animationFrameId);
    };

    window.addEventListener("wheel", stopAutoScroll, { once: true, passive: true });
    window.addEventListener("touchmove", stopAutoScroll, { once: true, passive: true });
    window.addEventListener("mousedown", stopAutoScroll, { once: true, passive: true });
    window.addEventListener("keydown", stopAutoScroll, { once: true, passive: true });

    return () => {
      clearTimeout(startDelayTimer);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("wheel", stopAutoScroll);
      window.removeEventListener("touchmove", stopAutoScroll);
      window.removeEventListener("mousedown", stopAutoScroll);
      window.removeEventListener("keydown", stopAutoScroll);
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
