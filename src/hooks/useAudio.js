// src/hooks/useAudio.js
import { useState, useEffect } from "react";
import { weddingData } from "../data/weddingData";

// Static reference to share single audio instance globally
let bgAudio = null;

export const useAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!bgAudio) {
        bgAudio = new Audio(weddingData.assets.backgroundMusic);
        bgAudio.loop = true;
        bgAudio.volume = volume;
      }
      
      // Update local states from static instance
      setIsPlaying(!bgAudio.paused);
      setIsMuted(bgAudio.muted);
    }
  }, []);

  const playMusic = () => {
    if (bgAudio) {
      bgAudio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.warn("Autoplay blocked by browser. Awaiting user interaction.", error);
        });
    }
  };

  const pauseMusic = () => {
    if (bgAudio) {
      bgAudio.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  const toggleMute = () => {
    if (bgAudio) {
      bgAudio.muted = !bgAudio.muted;
      setIsMuted(bgAudio.muted);
    }
  };

  const handleVolumeChange = (newVolume) => {
    const vol = parseFloat(newVolume);
    if (bgAudio && !isNaN(vol)) {
      bgAudio.volume = vol;
      setVolume(vol);
    }
  };

  const playSoundEffect = (type) => {
    let sfxPath = "";
    if (type === "bell") {
      sfxPath = "/music/bell.mp3";
    } else if (type === "conch") {
      sfxPath = "/music/conch.mp3";
    }

    if (sfxPath) {
      const audioFx = new Audio(sfxPath);
      audioFx.volume = 0.8;
      audioFx.play().catch((e) => {
        console.warn(`SFX file '${sfxPath}' could not be played. It may be missing or blocked.`, e);
      });
    }
  };

  return {
    isPlaying,
    isMuted,
    volume,
    playMusic,
    pauseMusic,
    togglePlay,
    toggleMute,
    handleVolumeChange,
    playSoundEffect,
  };
};
