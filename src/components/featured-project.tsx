"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TypewriterText } from "@/components/ui/typewriter-text";

/* ─────────────────────────── animation variants ─────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

/* ═══════════════════════════════ COMPONENT ═══════════════════════════════ */

export function FeaturedProject() {
  return (
    <section className="relative w-full py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* ── Section Title ── */}
        <TypewriterText
          text="Selected Work"
          className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold mb-16 uppercase text-[#E7E7E7]"
          replay={true}
        />

        {/* ── Visual Card ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          <Link href="/project/area" className="group block">
            <motion.div
              variants={scaleIn}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[2.2/1] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Ambient glow behind the card */}
              <div className="absolute -inset-8 -z-10 blur-[100px] bg-[#3b82f6]/[0.06] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Background gradient base */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1915] via-[#151410] to-[#0f0e0b]" />

              {/* Decorative grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />

              {/* ── Project Info (Left) ── */}
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12 lg:p-16">
                <div>
                  <motion.span
                    variants={fadeUp}
                    className="inline-block text-[10px] md:text-xs font-space tracking-[0.3em] uppercase opacity-40 mb-3"
                  >
                    Featured Case Study
                  </motion.span>

                  <motion.h3
                    variants={fadeUp}
                    className="font-syne text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-[#E7E7E7] leading-[0.9]"
                  >
                    AREA
                  </motion.h3>

                  <motion.p
                    variants={fadeUp}
                    className="mt-3 md:mt-4 text-sm md:text-base font-space opacity-50 max-w-sm leading-relaxed"
                  >
                    Action-Reaction Automation Platform — React Native, Go,
                    Docker, PostgreSQL
                  </motion.p>
                </div>

                {/* View Project CTA */}
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-2 text-sm font-space opacity-40 group-hover:opacity-100 transition-all duration-500"
                >
                  <span className="tracking-wide">View Project</span>
                  <ArrowUpRight
                    size={16}
                    className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  />
                  {/* Animated underline */}
                  <span className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-8 md:left-12 lg:left-16 w-20 h-px bg-[#E7E7E7] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </motion.div>
              </div>

              {/* ── Mobile Mockup (Right) ── */}
              <motion.div
                variants={fadeUp}
                className="absolute right-4 md:right-8 lg:right-20 bottom-0 w-[40%] md:w-[32%] lg:w-[22%] z-10"
              >
                <motion.div
                  whileHover={{ y: -12, rotate: -1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative"
                >
                  {/* Phone glow */}
                  <div className="absolute inset-0 -z-10 blur-[60px] bg-[#F3D673]/[0.08] rounded-full scale-125" />
                  <Image
                    src="/assets/mockup_area_mobile.png"
                    alt="AREA Mobile Interface"
                    width={860}
                    height={1720}
                    className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] rounded-2xl"
                  />
                </motion.div>
              </motion.div>

              {/* ── Web Mockup (Background, centered right) ── */}
              <motion.div
                variants={scaleIn}
                className="absolute right-[10%] md:right-[15%] top-1/2 -translate-y-1/2 w-[60%] md:w-[50%] lg:w-[40%] opacity-20 md:opacity-30 group-hover:opacity-40 transition-opacity duration-700 z-0"
              >
                <Image
                  src="/assets/mockup_area_web.png"
                  alt="AREA Web Dashboard"
                  width={1920}
                  height={1200}
                  className="w-full h-auto object-contain rounded-lg drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                />
              </motion.div>

              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#151410]/90 via-[#151410]/40 to-transparent z-[5] pointer-events-none" />

              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#151410] to-transparent z-[5] pointer-events-none" />

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-[#E7E7E7]/[0.04] group-hover:border-[#F3D673]/[0.15] transition-colors duration-500 z-20 pointer-events-none" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
