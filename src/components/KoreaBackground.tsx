"use client";

import { useState, useEffect, useCallback } from "react";

const SCENES = [
  {
    url: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1920&q=80",
    alt: "Seoul city skyline at night",
  },
  {
    url: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1920&q=80",
    alt: "Gyeongbokgung Palace in Seoul",
  },
  {
    url: "https://images.unsplash.com/photo-1546874177-9e664107314e?w=1920&q=80",
    alt: "Cherry blossoms in Korea",
  },
  {
    url: "https://images.unsplash.com/photo-1578037571214-25e07ed4a1d8?w=1920&q=80",
    alt: "Bukchon Hanok Village",
  },
  {
    url: "https://images.unsplash.com/photo-1583400225507-859fc2b745e7?w=1920&q=80",
    alt: "Busan coastal temple",
  },
  {
    url: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=1920&q=80",
    alt: "Namsan Tower at dusk",
  },
  {
    url: "https://images.unsplash.com/photo-1573832035811-1e82cde4af04?w=1920&q=80",
    alt: "Traditional Korean lanterns",
  },
  {
    url: "https://images.unsplash.com/photo-1506816561089-5cc37b3aa9b0?w=1920&q=80",
    alt: "Haeundae Beach Busan",
  },
];

const ANIMATIONS = [
  "kb-zoom-tl",
  "kb-zoom-tr",
  "kb-zoom-bl",
  "kb-zoom-br",
  "kb-pan-left",
  "kb-pan-right",
  "kb-zoom-center",
  "kb-zoom-out",
];

export default function KoreaBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  const advance = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % SCENES.length);
      setNextIndex((prev) => (prev + 1) % SCENES.length);
      setTransitioning(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const interval = setInterval(advance, 8000);
    return () => clearInterval(interval);
  }, [advance]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Current Scene */}
      <div
        key={`scene-${currentIndex}`}
        className={`absolute inset-0 transition-opacity duration-[2000ms] ${
          transitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={SCENES[currentIndex].url}
          alt={SCENES[currentIndex].alt}
          className={`absolute inset-0 w-full h-full object-cover ${ANIMATIONS[currentIndex % ANIMATIONS.length]}`}
        />
      </div>

      {/* Next Scene (fades in) */}
      <div
        key={`scene-next-${nextIndex}`}
        className={`absolute inset-0 transition-opacity duration-[2000ms] ${
          transitioning ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={SCENES[nextIndex].url}
          alt={SCENES[nextIndex].alt}
          className={`absolute inset-0 w-full h-full object-cover ${ANIMATIONS[nextIndex % ANIMATIONS.length]}`}
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Warm amber tint overlay */}
      <div className="absolute inset-0 bg-amber-900/15 mix-blend-overlay" />
    </div>
  );
}
