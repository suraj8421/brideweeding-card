// src/animations/Fireflies.jsx
import React, { useEffect, useRef } from "react";

export const Fireflies = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const fireflies = [];
    const maxFireflies = 35;

    // Create firefly constructor
    class Firefly {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 50;
        this.radius = 1 + Math.random() * 2.5;
        this.speedX = -0.4 + Math.random() * 0.8;
        this.speedY = -0.5 - Math.random() * 1.0;
        this.opacity = Math.random();
        this.flickerSpeed = 0.01 + Math.random() * 0.02;
        this.flickerDirection = Math.random() > 0.5 ? 1 : -1;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // Flicker opacity
        this.opacity += this.flickerSpeed * this.flickerDirection;
        if (this.opacity >= 1) {
          this.opacity = 1;
          this.flickerDirection = -1;
        } else if (this.opacity <= 0.1) {
          this.opacity = 0.1;
          this.flickerDirection = 1;
        }

        // Reset if offscreen
        if (this.y < -10 || this.x < -10 || this.x > width + 10) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        // Golden glow gradient for each particle
        const grad = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 3
        );
        grad.addColorStop(0, `rgba(252, 230, 164, ${this.opacity})`);
        grad.addColorStop(0.3, `rgba(212, 175, 55, ${this.opacity * 0.6})`);
        grad.addColorStop(1, "rgba(212, 175, 55, 0)");

        ctx.fillStyle = grad;
        ctx.shadowColor = "#D4AF37";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }
    }

    // Populate
    for (let i = 0; i < maxFireflies; i++) {
      fireflies.push(new Firefly());
    }

    // Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      fireflies.forEach((firefly) => {
        firefly.update();
        firefly.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: "screen" }}
    />
  );
};
