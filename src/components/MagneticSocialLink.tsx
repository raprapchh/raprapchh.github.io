"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, MouseEvent, useState } from "react";
import React from "react";

interface MagneticSocialLinkProps {
  href: string;
  children: React.ReactNode;
}

const MagneticSocialLink = ({ href, children }: MagneticSocialLinkProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Track if we are hovering the *actual* button for the fill effect
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for magnetic effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();

    const relativeX = clientX - (left + width / 2);
    const relativeY = clientY - (top + height / 2);

    // Move the button towards the mouse
    // We use a factor (e.g. 0.35) to determine how much it moves
    x.set(relativeX * 0.35);
    y.set(relativeY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    // Trigger Area - larger than the button to catch mouse earlier
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center w-20 h-20 md:w-60 md:h-60" // Larger trigger zone
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ x: springX, y: springY }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 md:w-36 md:h-36 rounded-full border border-[#E7E7E7]/30 overflow-hidden bg-transparent"
      >
        {/* Loading Circle Overlay */}
        <svg
          className="absolute w-full h-full rotate-[-90deg] z-20 pointer-events-none p-[1px]"
          viewBox="0 0 100 100"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="49"
            stroke="#E7E7E7"
            strokeWidth="2"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </svg>

        {/* Background Filler */}
        <motion.div
          className="absolute w-full h-full bg-[#E7E7E7] rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: isHovered ? 1 : 0 }}
          transition={{
            duration: 0.3,
            ease: [0.33, 1, 0.68, 1],
            delay: isHovered ? 0.3 : 0, // Wait for stroke (0.3s) before filling
          }}
        />

        {/* Icon */}
        <div
          className={`relative z-10 transition-colors duration-300 ${
            isHovered ? "text-[#151410]" : "text-[#E7E7E7]"
          }`}
        >
          {children}
        </div>
      </motion.a>
    </div>
  );
};

export default MagneticSocialLink;
