"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden px-4"
    >
      <div className="z-10 flex flex-col items-center">
        <motion.h1
          style={{ y: y1 }}
          className="text-[9vw] md:text-[7.2vw] font-syne font-bold leading-[0.8] tracking-tighter uppercase text-center mix-blend-difference"
        >
          <span>Raphaël</span> <br />
          <span
            className="block"
            style={{
              WebkitTextStroke: "1px var(--foreground)",
              color: "transparent",
            }}
          >
            Chanliongco
          </span>
        </motion.h1>

        <motion.p
          style={{ y: y2, opacity }}
          className="mt-8 md:mt-12 font-space text-sm md:text-base uppercase tracking-widest opacity-60 text-center"
        >
          Fullstack Developer & Epitech Student
        </motion.p>

        <motion.div
          style={{ y: y2, opacity }}
          className="flex gap-6 mt-8 z-20 mix-blend-difference"
        >
          <motion.a
            href="https://github.com/raprapchh"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.5 }}
            className="text-foreground hover:text-foreground/70 transition-colors"
          >
            <Github size={24} strokeWidth={1.5} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/raphael-chanliongco"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.9, duration: 0.5 }}
            className="text-foreground hover:text-foreground/70 transition-colors"
          >
            <Linkedin size={24} strokeWidth={1.5} />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 mix-blend-difference"
      >
        <span className="text-xs font-space uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-foreground/50 animate-pulse"></div>
      </motion.div>
    </section>
  );
}
