"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { BackToTop } from "@/components/back-to-top";

/* ─────────────────────────── animation helpers ─────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      delay: i * 0.12,
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const charVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

/* ──────────────────── project metadata for sticky column ───────────────── */

const meta = [
  { label: "Role", value: "Fullstack & Mobile Lead" },
  { label: "Stack", value: "React, React Native, Go, Docker, PostgreSQL" },
  { label: "Year", value: "2025" },
  { label: "Context", value: "Epitech Year 3 Project" },
];

/* ═══════════════════════════════ PAGE ═══════════════════════════════════ */

export default function AreaProjectPage() {
  const title = "AREA";

  return (
    <main className="min-h-screen bg-[#151410] text-[#E7E7E7] overflow-x-hidden">
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-[#3b82f6]/[0.06] blur-[120px]" />
        </div>

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-8 left-8 z-20"
        >
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm font-space opacity-50 hover:opacity-100 transition-opacity"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back
          </Link>
        </motion.div>

        {/* Animated Title */}
        <motion.h1
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="font-syne text-7xl sm:text-8xl md:text-[14vw] font-black leading-[0.85] tracking-tighter z-10 text-center"
        >
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={charVariant}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-6 text-lg md:text-xl font-space opacity-60 tracking-wide text-center z-10"
        >
          Action-Reaction Automation Platform
        </motion.p>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative mt-16 w-full max-w-sm z-10"
        >
          <div className="relative mx-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
            <Image
              src="/assets/mockup_area_mobile.png"
              alt="AREA Mobile Interface"
              width={860}
              height={1720}
              className="w-full h-auto object-contain rounded-[2rem]"
              priority
            />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-xs font-space tracking-[0.3em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-[#E7E7E7]/40"
          />
        </motion.div>
      </section>

      {/* ────────────────── STICKY TWO-COLUMN LAYOUT ─────────────────── */}
      <section className="relative px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto_2fr] gap-12 md:gap-16 lg:gap-24 items-center">
          {/* ── Left Column: Sticky Info ── */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="lg:sticky lg:top-[100px] lg:self-start h-fit"
          >
            <div className="space-y-10">
              {meta.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={i}
                  viewport={{ once: false }}
                >
                  <span className="block text-xs font-space tracking-[0.25em] uppercase opacity-40 mb-2">
                    {item.label}
                  </span>
                  <span className="block text-lg font-syne font-semibold leading-snug">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.aside>

          {/* ── Vertical Separator ── */}
          <div className="hidden lg:block w-px h-32 bg-[#E7E7E7]/10" />

          {/* ── Right Column: Overview ── */}
          <div>
            {/* Block A — Overview */}
            <motion.article
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-80px" }}
            >
              <span className="block text-xs font-space tracking-[0.25em] uppercase opacity-40 mb-4">
                Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-syne font-bold mb-6">
                The Concept
              </h2>
              <p className="text-base md:text-lg font-space leading-relaxed opacity-70 max-w-2xl">
                AREA is a comprehensive automation suite inspired by IFTTT. It
                connects disparate services — Discord, Spotify, Gmail, and more
                — to trigger automated actions based on specific real-time
                events. The platform provides both mobile and web interfaces for
                creating, managing, and monitoring automation workflows.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ────────────────── WEB MOCKUP ─────────────── */}
      <section className="relative px-6 md:px-16 lg:px-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          }}
          viewport={{ once: false, margin: "-60px" }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative w-full rounded-2xl overflow-hidden">
            {/* Vignette overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl shadow-[inset_0_0_60px_30px_rgba(21,20,16,0.8)]" />
            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none bg-gradient-to-t from-[#151410]/80 to-transparent" />
            <Image
              src="/assets/mockup_area_web.png"
              alt="AREA Web Dashboard"
              width={1920}
              height={1200}
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </motion.div>
      </section>

      {/* ────────────────────── FOOTER NAVIGATION ──────────────────────── */}
      <footer className="relative py-12 md:py-20 px-6 flex flex-col items-center justify-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Link
            href="/"
            className="group relative inline-flex items-center gap-4"
          >
            <ArrowLeft
              size={28}
              className="opacity-40 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300"
            />
            <span className="text-4xl md:text-6xl font-syne font-black tracking-tight group-hover:tracking-wide transition-all duration-500">
              Back to Home
            </span>

            {/* Underline reveal */}
            <span className="absolute -bottom-2 left-0 w-full h-px bg-[#E7E7E7] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </Link>
        </motion.div>

        <div className="pt-12 md:pt-16 w-full relative flex flex-col items-center">
          <div className="opacity-30 font-space text-[10px] md:text-xs text-center">
            © 2026 Raphaël Chanliongco.
          </div>

          <div className="absolute bottom-0 right-0 md:right-8">
            <BackToTop />
          </div>
        </div>
      </footer>
    </main>
  );
}
