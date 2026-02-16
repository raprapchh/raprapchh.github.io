"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { TypewriterText } from "@/components/ui/typewriter-text";

/* ─── Animation Variants ─── */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

/* Animated border that draws itself (horizontal) */
const borderHVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

/* Animated border that draws itself (vertical) */
const borderVVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.0,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

/* ─── Spec Item Component ─── */
const SpecItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-baseline py-4 border-b border-white/5 last:border-b-0">
    <span className="text-[11px] sm:text-sm font-space uppercase tracking-[0.2em] text-[#E7E7E7]/40">
      {label}
    </span>
    <span className="text-sm sm:text-lg font-space text-[#E7E7E7]/80 text-right">
      {value}
    </span>
  </div>
);

/* ─── Main Component ─── */
const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#151410", color: "#E7E7E7" }}
    >
      <div className="w-full">
        {/* Section Label */}
        <div className="container mx-auto px-6 md:px-12 mb-12">
          <TypewriterText
            text="About me"
            className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase text-[#E7E7E7]"
            replay={true}
          />
        </div>

        {/* ─── The Bento Grid ─── */}
        <motion.div
          className="container mx-auto px-6 md:px-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-12 gap-[1px] bg-white/10 border border-white/10 relative">
            {/* ═══════════════════════════════════════════════════════
              BLOCK 1 — THE PORTRAIT
              ═══════════════════════════════════════════════════════ */}
            <motion.div
              className="col-span-12 xl:col-span-4 xl:row-span-2 relative group overflow-hidden bg-[#151410]"
              style={{ minHeight: "450px" }}
              variants={blockVariants}
            >
              <div className="relative w-full h-full min-h-[450px] xl:min-h-full">
                <Image
                  src="/assets/Photo.png"
                  alt="Raphaël — Portrait"
                  fill
                  className="object-cover object-top transition-all duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 33vw"
                  priority
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151410]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* ═══════════════════════════════════════════════════════
              BLOCK 2 — THE MANIFESTO
              ═══════════════════════════════════════════════════════ */}
            <motion.div
              className="col-span-12 xl:col-span-8 p-8 md:p-12 xl:p-16 flex flex-col justify-center bg-[#151410]"
              variants={blockVariants}
            >
              {/* Tiny label */}
              <span className="text-[10px] sm:text-xs font-space uppercase tracking-[0.3em] text-[#E7E7E7]/30 mb-6">
                The Manifesto
              </span>

              {/* Massive Display Title */}
              <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
                PRECISION
                <br />
                <span className="text-[#E7E7E7]/20">FOCUSED.</span>
              </h2>

              {/* Refined Paragraph */}
              <p className="text-sm sm:text-base md:text-lg font-space text-[#E7E7E7]/60 leading-relaxed max-w-2xl">
                I find satisfaction in a job well done. Whether it&apos;s
                backend logic or frontend details, I am committed to delivering
                clean, reliable, and high-quality code every single time.
              </p>
            </motion.div>

            {/* ═══════════════════════════════════════════════════════
              BLOCK 3 — THE SPECS DATA
              ═══════════════════════════════════════════════════════ */}
            <motion.div
              className="col-span-12 md:col-span-6 xl:col-span-4 p-8 md:p-10 flex flex-col justify-center bg-[#151410]"
              variants={blockVariants}
            >
              {/* Tiny label */}
              <span className="text-[10px] sm:text-xs font-space uppercase tracking-[0.3em] text-[#E7E7E7]/30 mb-6">
                Specifications
              </span>

              {/* Data Sheet Items */}
              <div className="space-y-0 w-full">
                <SpecItem label="Location" value="Paris, France" />
                <SpecItem
                  label="Education"
                  value="Epitech — Master's (Year 3/5)"
                />
                <SpecItem label="Age" value="21 y/o" />
                <SpecItem label="Stack" value="Full-Stack / Creative Dev" />
              </div>
            </motion.div>

            {/* ═══════════════════════════════════════════════════════
              BLOCK 4 — THE SIGNATURE
              ═══════════════════════════════════════════════════════ */}
            <motion.div
              className="col-span-12 md:col-span-6 xl:col-span-4 p-6 md:p-10 flex flex-col justify-between bg-[#151410]"
              variants={blockVariants}
            >
              {/* Tiny label */}
              <span className="text-[10px] sm:text-xs font-space uppercase tracking-[0.3em] text-[#E7E7E7]/30 mb-6">
                Signature
              </span>

              {/* Quote */}
              <div className="flex-1 flex flex-col justify-center">
                <blockquote className="font-syne text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold leading-tight text-[#E7E7E7]/70 italic xl:whitespace-nowrap">
                  &ldquo;Quality in{" "}
                  <span style={{ color: "#6C9CFC" }}>every line</span>.&rdquo;
                </blockquote>
              </div>

              {/* Decorative Signature / Symbol */}
              <div className="mt-8 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#E7E7E7]/20" />
                <span className="text-[10px] font-space uppercase tracking-[0.3em] text-[#E7E7E7]/20">
                  R.C. / 2026
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
