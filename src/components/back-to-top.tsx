"use client";

import { useLenis } from "@studio-freight/react-lenis";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, MouseEvent, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const lenis = useLenis();
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const relativeX = clientX - (left + width / 2);
    const relativeY = clientY - (top + height / 2);
    x.set(relativeX * 0.35);
    y.set(relativeY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleScrollTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col items-center justify-center w-14 h-14 md:w-28 md:h-28"
    >
      <motion.button
        onClick={handleScrollTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ x: springX, y: springY }}
        className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#E7E7E7]/30 overflow-hidden bg-transparent group"
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
            strokeWidth="3"
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
            delay: isHovered ? 0.3 : 0,
          }}
        />

        <div
          className={`relative z-10 transition-colors duration-300 ${
            isHovered ? "text-[#151410]" : "text-[#E7E7E7]"
          }`}
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </motion.button>

      {/* Text Label */}
      <motion.span
        style={{ x: springX, y: springY }}
        className="absolute -bottom-4 md:bottom-1 whitespace-nowrap text-[8px] md:text-[10px] font-space uppercase tracking-[0.2em] opacity-40 font-medium"
      >
        Back to top
      </motion.span>
    </div>
  );
}
