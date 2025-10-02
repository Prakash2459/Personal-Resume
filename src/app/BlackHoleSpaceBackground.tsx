"use client";
import React, { useRef, useEffect, useState } from "react";

const WHITE = "#fff";
const STAR_COUNT = 120;
const GALAXY_COUNT = 3;
const BH_STAR_COUNT = 1200;
const MAX_ORBIT = 255;

interface Star {
  x: number;
  y: number;
  r: number;
  speed: number;
  twinkle: number;
}
interface Galaxy {
  x: number;
  y: number;
  r: number;
  alpha: number;
  speed: number;
  angle: number;
}
interface BHStar {
  id: number;
  orbital: number;
  x: number;
  y: number;
  yOrigin: number;
  speed: number;
  rotation: number;
  startRotation: number;
  color: string;
  hoverPos: number;
  expansePos: number;
  prevR: number;
  prevX: number;
  prevY: number;
}

const BlackHoleSpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [collapse, setCollapse] = useState(false);
  const [expanse, setExpanse] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Black hole orbiting stars
  const bhStars = useRef<BHStar[]>([]);
  const bhStartTime = useRef<number>(Date.now());
  const bhCurrentTime = useRef<number>(0);

  // Twinkling stars
  const stars = useRef<Star[]>([]);
  // Galaxies
  const galaxies = useRef<Galaxy[]>([]);

  // Responsive canvas
  useEffect(() => {
    function handleResize() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate stars and galaxies
  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;
    // Twinkling stars
    stars.current = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      r: Math.random() * 1.5 + 0.4,
      speed: Math.random() * 0.07 + 0.01,
      twinkle: Math.random() * Math.PI * 2,
    }));
    // Galaxies (as blurred white clouds)
    galaxies.current = Array.from({ length: GALAXY_COUNT }, (_, i) => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      r: Math.random() * 120 + 80,
      alpha: 0.13 + 0.07 * i,
      speed: (Math.random() - 0.5) * 0.04,
      angle: Math.random() * Math.PI * 2,
    }));
    // Black hole orbiting stars
    const centerx = dimensions.width / 2;
    const centery = dimensions.height / 2;
    bhStars.current = Array.from({ length: BH_STAR_COUNT }, (_, id) => {
      const rands = [
        Math.random() * (MAX_ORBIT / 2) + 1,
        Math.random() * (MAX_ORBIT / 2) + MAX_ORBIT,
      ];
      const orbital = (rands[0] + rands[1]) / 2;
      const yOrigin = centery + orbital;
      const speed = (Math.floor(Math.random() * 2.5) + 1.5) * Math.PI / 180;
      const startRotation = (Math.floor(Math.random() * 360) + 1) * Math.PI / 180;
      const collapseBonus = Math.max(0, orbital - (MAX_ORBIT * 0.7));
      return {
        id,
        orbital,
        x: centerx,
        y: yOrigin,
        yOrigin,
        speed,
        rotation: 0,
        startRotation,
        color: `rgba(255,255,255,${1 - (orbital / MAX_ORBIT)})`,
        hoverPos: centery + (MAX_ORBIT / 2) + collapseBonus,
        expansePos: centery + (id % 100) * -10 + (Math.floor(Math.random() * 20) + 1),
        prevR: startRotation,
        prevX: centerx,
        prevY: yOrigin,
      };
    });
  }, [dimensions]);

  // Animation
  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Set up device pixel ratio
    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    canvas.style.width = dimensions.width + "px";
    canvas.style.height = dimensions.height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const centerx = dimensions.width / 2;
    const centery = dimensions.height / 2;

    function rotate(cx: number, cy: number, x: number, y: number, angle: number) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
      const ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
      return [nx, ny];
    }
    function draw() {
      if (!ctx) return;
      // Radial gradient background
      const grad = ctx.createRadialGradient(centerx, centery, 0, centerx, centery, Math.max(dimensions.width, dimensions.height) * 0.7);
      grad.addColorStop(0, "#222");
      grad.addColorStop(0.5, "#191919");
      grad.addColorStop(1, "#000");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Galaxies (blurred white clouds)
      galaxies.current.forEach((g) => {
        ctx.save();
        ctx.globalAlpha = g.alpha;
        ctx.translate(g.x, g.y);
        ctx.rotate(g.angle);
        const grad = ctx.createRadialGradient(0, 0, g.r * 0.2, 0, 0, g.r);
        grad.addColorStop(0, WHITE);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.beginPath();
        ctx.arc(0, 0, g.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.filter = "blur(8px)";
        ctx.fill();
        ctx.filter = "none";
        ctx.restore();
      });

      // Twinkling stars
      stars.current.forEach((s) => {
        const twinkle = 0.7 + 0.3 * Math.sin(performance.now() * s.speed * 0.8 + s.twinkle);
        ctx.save();
        ctx.globalAlpha = twinkle;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = WHITE;
        ctx.shadowColor = WHITE;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });

      // Black hole (centered, with dark core and faint ring)
      ctx.save();
      ctx.translate(centerx, centery);
      // Accretion disk (faint white ring)
      ctx.beginPath();
      ctx.arc(0, 0, 80, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255,255,255,0.08)";
      ctx.lineWidth = 32;
      ctx.shadowColor = WHITE;
      ctx.shadowBlur = 32;
      ctx.stroke();
      // Black hole core
      ctx.beginPath();
      ctx.arc(0, 0, 60, 0, Math.PI * 2);
      ctx.fillStyle = "#111";
      ctx.shadowColor = "#000";
      ctx.shadowBlur = 32;
      ctx.fill();
      ctx.restore();

      // Black hole orbiting stars
      bhStars.current.forEach((star) => {
        if (!expanse) {
          star.rotation = star.startRotation + (bhCurrentTime.current * star.speed);
          if (!collapse) {
            if (star.y > star.yOrigin) star.y -= 2.5;
            if (star.y < star.yOrigin - 4) star.y += (star.yOrigin - star.y) / 10;
          } else {
            if (star.y > star.hoverPos) star.y -= (star.hoverPos - star.y) / -5;
            if (star.y < star.hoverPos - 4) star.y += 2.5;
          }
        } else {
          star.rotation = star.startRotation + (bhCurrentTime.current * (star.speed / 2));
          if (star.y > star.expansePos) star.y -= Math.floor(star.expansePos - star.y) / -140;
        }
        ctx.save();
        ctx.strokeStyle = star.color;
        ctx.beginPath();
        const oldPos = rotate(centerx, centery, star.prevX, star.prevY, -star.prevR);
        ctx.moveTo(oldPos[0], oldPos[1]);
        ctx.translate(centerx, centery);
        ctx.rotate(star.rotation);
        ctx.translate(-centerx, -centery);
        ctx.lineTo(star.x, star.y);
        ctx.stroke();
        ctx.restore();
        star.prevR = star.rotation;
        star.prevX = star.x;
        star.prevY = star.y;
      });
    }
    let animId: number;
    function animate() {
      const now = Date.now();
      bhCurrentTime.current = (now - bhStartTime.current) / 50;
      // Animate galaxies
      galaxies.current.forEach((g) => {
        g.angle += g.speed;
        g.x += Math.cos(g.angle) * 0.1;
        g.y += Math.sin(g.angle) * 0.1;
        // Wrap around
        if (g.x < 0) g.x = dimensions.width;
        if (g.x > dimensions.width) g.x = 0;
        if (g.y < 0) g.y = dimensions.height;
        if (g.y > dimensions.height) g.y = 0;
      });
      draw();
      animId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animId);
  }, [dimensions, collapse, expanse]);

  // CSS for the black hole and button
  return (
    <div id="blackhole" style={{height: '100%', width: '100%', position: 'fixed', inset: 0, zIndex: 0, display: 'flex'}}>
      <canvas ref={canvasRef} style={{position: 'relative', zIndex: 1, width: '100%', height: '100%', margin: 'auto'}} aria-hidden="true" />
      <div
        className={`centerHover${expanse ? ' open' : ''}`}
        style={{
          width: 255,
          height: 255,
          backgroundColor: 'transparent',
          borderRadius: '50%',
          position: 'absolute',
          left: '50%',
          top: '50%',
          marginTop: -128,
          marginLeft: -128,
          zIndex: 2,
          cursor: 'pointer',
          lineHeight: '255px',
          textAlign: 'center',
          transition: 'all 500ms',
          opacity: expanse ? 0 : 1,
          pointerEvents: expanse ? 'none' : 'auto',
        }}
        onMouseOver={() => { if (!expanse) setCollapse(true); }}
        onMouseOut={() => { if (!expanse) setCollapse(false); }}
        onClick={() => { setCollapse(false); setExpanse(true); }}
      >
        <span style={{
          color: collapse ? '#DDD' : '#666',
          fontFamily: 'serif',
          fontSize: 18,
          position: 'relative',
          transition: 'all 500ms',
        }}>
          <span style={{
            display: 'inline-block',
            height: 1,
            width: 16,
            marginRight: 12,
            marginBottom: 4,
            backgroundColor: collapse ? '#DDD' : '#666',
            transition: 'all 500ms',
          }} />
          ENTER
          <span style={{
            display: 'inline-block',
            height: 1,
            width: 16,
            marginLeft: 12,
            marginBottom: 4,
            backgroundColor: collapse ? '#DDD' : '#666',
            transition: 'all 500ms',
          }} />
        </span>
      </div>
    </div>
  );
};

export default BlackHoleSpaceBackground;
