"use client";
import React, { useEffect, useRef } from "react";
import styles from "./GalaxyCard.module.css";

type GalaxyCardProps = {
  children: React.ReactNode;
  className?: string;
};

const STAR_COUNT = 20;

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const GalaxyCard: React.FC<GalaxyCardProps> = ({ children, className = "" }) => {
  const ringRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ringRef.current) return;
    const stars = ringRef.current.querySelectorAll<HTMLElement>(".star");
    stars.forEach((star) => {
      star.style.setProperty("--angle", `${random(0, 360)}`);
      star.style.setProperty("--duration", `${random(6, 20)}`);
      star.style.setProperty("--delay", `${random(1, 10)}`);
      star.style.setProperty("--alpha", `${random(40, 90) / 100}`);
      star.style.setProperty("--size", `${random(2, 6)}`);
      star.style.setProperty("--distance", `${random(40, 200)}`);
    });
  }, []);

  return (
    <div className={`${styles["galaxy-card"]} ${className}`}>
      <div className={styles["galaxy-button"]}>
        <span className="spark" />
        <span className="backdrop" />
        <span className="galaxy__container">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="star star--static" />
          ))}
        </span>
        <span className="galaxy">
          <span className="galaxy__ring" ref={ringRef}>
            {[...Array(STAR_COUNT)].map((_, i) => (
              <span key={i} className="star" />
            ))}
          </span>
        </span>
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default GalaxyCard;
