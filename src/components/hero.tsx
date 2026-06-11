"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin } from "lucide-react";

const NOISE_TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

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
      className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden px-4 bg-[#151410]"
    >
      {/* Self-contained generative background: orbs, grid, grain, vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <motion.div
          animate={{ x: ["-6%", "8%", "-6%"], y: ["-4%", "10%", "-4%"] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[6%] left-[10%] w-[48vw] h-[48vw] rounded-full bg-[#F3D673]/[0.05] blur-[120px]"
        />
        <motion.div
          animate={{ x: ["6%", "-8%", "6%"], y: ["8%", "-6%", "8%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[2%] right-[6%] w-[42vw] h-[42vw] rounded-full bg-[#6C9CFC]/[0.05] blur-[120px]"
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 45%, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 45%, black 30%, transparent 75%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{ backgroundImage: NOISE_TEXTURE }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#151410]/40 to-[#151410]" />
      </div>

      <div className="z-10 flex flex-col items-center">
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          style={{ y: y2 }}
          className="mb-8 flex items-center gap-2.5 rounded-full border border-[#E7E7E7]/15 bg-[#E7E7E7]/[0.04] px-4 py-2 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-6 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-6" />
          </span>
          <span className="font-space text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#E7E7E7]/70">
            Fullstack Intern @ Phocus1
          </span>
        </motion.div>

        <motion.h1
          suppressHydrationWarning
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
          suppressHydrationWarning
          style={{ y: y2, opacity }}
          className="mt-8 md:mt-12 font-space text-sm md:text-base uppercase tracking-widest opacity-60 text-center"
        >
          Fullstack Developer & Epitech Student
        </motion.p>

        <motion.div
          suppressHydrationWarning
          style={{ y: y2, opacity }}
          className="flex gap-6 mt-8 z-20 mix-blend-difference"
        >
          <motion.a
            href="https://github.com/raprapchh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="text-foreground hover:text-foreground/70 transition-colors"
          >
            <Github size={24} strokeWidth={1.5} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/raphael-chanliongco"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.5 }}
            className="text-foreground hover:text-foreground/70 transition-colors"
          >
            <Linkedin size={24} strokeWidth={1.5} />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        suppressHydrationWarning
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
