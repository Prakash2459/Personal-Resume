"use client";

import React, { useRef, useEffect } from "react";

// Space color palette
const COLORS = {
  backgroundGradient: [
    { color: "#282828", pos: 0.03 },
    { color: "#848484", pos: 0.5 },
    { color: "#000000", pos: 0.7 },
  ],
  star: "#fffbe7",
  galaxy: ["#a18fff", "#ffb3ec", "#6ec6ff", "#e0c3fc"],
};

const STAR_COUNT = 120;
const GALAXY_COUNT = 3;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Generate stars
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: randomBetween(0.4, 1.5),
      speed: randomBetween(0.01, 0.08),
      twinkle: Math.random() * Math.PI * 2,
    }));

    // Generate galaxies
    const galaxies = Array.from({ length: GALAXY_COUNT }, (_, i) => ({
      x: randomBetween(width * 0.2, width * 0.8),
      y: randomBetween(height * 0.2, height * 0.8),
      r: randomBetween(80, 160),
      color: COLORS.galaxy[i % COLORS.galaxy.length],
      angle: Math.random() * Math.PI * 2,
      speed: randomBetween(0.0005, 0.0015),
    }));

    let animationId: number;
    let lastTime = performance.now();

    function draw() {
      // Draw radial-gradient background
      const grad = ctx.createRadialGradient(
        width / 2,
        0,
        width * 0.1,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.7
      );
      COLORS.backgroundGradient.forEach(stop => {
        grad.addColorStop(stop.pos, stop.color);
      });
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Parallax offset
      const parallaxX = lerp(0, (mouse.current.x - 0.5) * 60, 0.5);
      const parallaxY = lerp(0, (mouse.current.y - 0.5) * 60, 0.5);

      // Draw galaxies
      galaxies.forEach((g, i) => {
        ctx.save();
        ctx.globalAlpha = 0.22 + 0.08 * i;
        ctx.translate(g.x + parallaxX * (0.2 + 0.2 * i), g.y + parallaxY * (0.2 + 0.2 * i));
        ctx.rotate(g.angle);
        const grad = ctx.createRadialGradient(0, 0, g.r * 0.2, 0, 0, g.r);
        grad.addColorStop(0, g.color);
        grad.addColorStop(1, "rgba(10,12,27,0)");
        ctx.beginPath();
        ctx.arc(0, 0, g.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      });

      // Draw stars
      stars.forEach((s, i) => {
        const twinkle = 0.7 + 0.3 * Math.sin(performance.now() * s.speed * 0.8 + s.twinkle);
        ctx.save();
        ctx.globalAlpha = twinkle;
        ctx.beginPath();
        ctx.arc(
          s.x + parallaxX * (0.1 + 0.2 * (i % 3)),
          s.y + parallaxY * (0.1 + 0.2 * (i % 3)),
          s.r,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = COLORS.star;
        ctx.shadowColor = COLORS.star;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });
    }

    function animate(now: number) {
      const dt = now - lastTime;
      lastTime = now;
      // Animate galaxies
      galaxies.forEach((g, i) => {
        g.angle += g.speed * dt;
      });
      draw();
      animationId = requestAnimationFrame(animate);
    }

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function handleMouse(e: MouseEvent) {
      mouse.current.x = e.clientX / width;
      mouse.current.y = e.clientY / height;
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouse);
    animate(performance.now());

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
};

export default SpaceBackground;
