"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent | TouchEvent) => {
      if ("touches" in e && e.touches.length > 0) {
        setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      } else if ("clientX" in e) {
        setMousePosition({ x: (e as MouseEvent).clientX, y: (e as MouseEvent).clientY });
      }
    };

    const handleInteract = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      // Check if hovering over links, buttons, or nav items
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("li") ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("touchmove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleInteract);
    window.addEventListener("touchstart", handleInteract, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("touchmove", updateMousePosition);
      window.removeEventListener("mouseover", handleInteract);
      window.removeEventListener("touchstart", handleInteract);
    };
  }, []);

  return (
    <>
      {/* Small dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-red-500 rounded-full pointer-events-none z-[100] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      {/* Large trailing ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-red-500/50 rounded-full pointer-events-none z-[99] mix-blend-difference flex items-center justify-center"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(239, 68, 68, 0.2)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}
