"use client";
import React, { useRef, useEffect, useState } from "react";

const STAR_COUNT = 2500;
const MAX_ORBIT = 255;
const STAR_COLOR = (alpha: number) => `rgba(255,255,255,${alpha})`;

interface BlackHoleStar {
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

const BlackHoleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [collapse, setCollapse] = useState(false);
  const [expanse, setExpanse] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Star data
  const stars = useRef<BlackHoleStar[]>([]);
  const startTime = useRef<number>(Date.now());
  const currentTime = useRef<number>(0);

  // Responsive canvas
  useEffect(() => {
    function handleResize() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Star and animation logic
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

    // Center
    const centerx = dimensions.width / 2;
    const centery = dimensions.height / 2;

    // Star class
    function makeStar(id: number) {
      // Weighted random for orbital radius
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
        color: STAR_COLOR(1 - (orbital / MAX_ORBIT)),
        hoverPos: centery + (MAX_ORBIT / 2) + collapseBonus,
        expansePos: centery + (id % 100) * -10 + (Math.floor(Math.random() * 20) + 1),
        prevR: startRotation,
        prevX: centerx,
        prevY: yOrigin,
      };
    }
    // Only regenerate stars if dimensions change
    stars.current = Array.from({ length: STAR_COUNT }, (_, i) => makeStar(i));

    let animId: number;
    function rotate(cx: number, cy: number, x: number, y: number, angle: number) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
      const ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
      return [nx, ny];
    }
    function drawStar(star: BlackHoleStar) {
      if (!ctx) return;
      if (!expanse) {
        star.rotation = star.startRotation + (currentTime.current * star.speed);
        if (!collapse) {
          if (star.y > star.yOrigin) star.y -= 2.5;
          if (star.y < star.yOrigin - 4) star.y += (star.yOrigin - star.y) / 10;
        } else {
          if (star.y > star.hoverPos) star.y -= (star.hoverPos - star.y) / -5;
          if (star.y < star.hoverPos - 4) star.y += 2.5;
        }
      } else {
        star.rotation = star.startRotation + (currentTime.current * (star.speed / 2));
        if (star.y > star.expansePos) star.y -= Math.floor(star.expansePos - star.y) / -140;
      }
      ctx.save();
      ctx.fillStyle = star.color;
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
    }
    function loop() {
      if (!ctx) return;
      const now = Date.now();
      currentTime.current = (now - startTime.current) / 50;
      ctx.fillStyle = expanse ? 'rgba(25,25,25,0.08)' : 'rgba(25,25,25,0.2)';
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);
      for (let i = 0; i < stars.current.length; i++) {
        drawStar(stars.current[i]);
      }
      animId = requestAnimationFrame(loop);
    }
    loop();
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
            content: '""',
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
            content: '""',
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

export default BlackHoleBackground;
