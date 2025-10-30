"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroImage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      // how far down the page you are (clamped so it doesn't go crazy)
      const y = window.scrollY;
      setScrollY(y);
    }

    handleScroll(); // run once on mount so it’s not "dead" at first render
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- animation math ---
  // feel free to tweak these numbers
  // progress will go from 0 to 1 over the first ~400px of scroll
  const progress = Math.min(scrollY / 400, 1);

  // scale: start at 1, grow to 1.08
  const scale = 1 + progress * 0.08;

  // rotateX / rotateY: tiny 3D "float"
  const rotateX = progress * 4; // degrees
  const rotateY = progress * -4; // degrees

  // translateZ to fake depth (only visible because we'll add perspective on wrapper)
  const translateZ = progress * 20; // px

  const imgStyle: React.CSSProperties = {
    transform: `
      scale(${scale})
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(${translateZ}px)
    `,
    transformOrigin: "center center",
    transition: "transform 0.08s linear",
    willChange: "transform",
    objectPosition: "50% 40%", // Shift image upward
  };

  return (
    <div
      className="rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm"
      style={{
        // perspective lets rotateX / rotateY feel 3D instead of just skew
        perspective: "800px",
      }}
    >
      <div
        className="relative w-full h-64 sm:h-72 md:h-80"
        style={{
          // make sure child transforms are affected by the perspective
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src="/oldwell.png" // Old Well photo in /public/oldwell.png
          alt="The Old Well at UNC-Chapel Hill"
          fill
          priority
          style={imgStyle}
          className="object-cover"
        />
      </div>
    </div>
  );
}
