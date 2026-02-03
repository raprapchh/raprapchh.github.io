"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypewriterText } from "@/components/ui/typewriter-text";

const AboutSection = () => {
  return (
    <section className="w-full bg-background text-foreground py-24 md:py-40 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text */}
        <div className="flex flex-col space-y-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // Replay animation every time, trigger when 30% visible
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.span
              className="block text-sm text-foreground/50 font-space font-medium tracking-wider uppercase mb-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              I'M RAPHAËL —
            </motion.span>

            <div className="text-3xl md:text-5xl font-syne font-bold leading-tight mb-4 text-foreground min-h-[3em]">
              <TypewriterText
                text="Full Stack Developer merging creative frontend with robust software engineering."
                className="inline"
                cursorClassName="bg-amber-6"
                replay={true}
              />
            </div>

            <motion.div
              className="flex items-center gap-2 text-sm md:text-base text-foreground/70 font-space"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Currently building at Epitech Paris.
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Image with Reveal Animation */}
        <div className="relative w-full h-full flex justify-center md:justify-end items-center">
          <motion.div
            className="relative overflow-hidden w-full md:w-[90%] aspect-[3/4] md:aspect-[16/10]" // Much larger, cinematic aspect ratio
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* The Image */}
            <motion.div
              className="relative w-full h-full"
              variants={{
                hidden: { scale: 1.2 },
                visible: {
                  scale: 1,
                  transition: {
                    duration: 1.0, // Faster scale
                    ease: "easeOut",
                    delay: 0.1, // Reduced delay
                  },
                },
              }}
            >
              <Image
                src="/assets/Photo.png"
                alt="Raphaël - Full Stack Developer"
                fill
                className="object-cover object-top" // Ensure face is visible
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>

            {/* The Reveal Mask (Overlay) */}
            <motion.div
              className="absolute inset-0 bg-background z-10"
              variants={{
                hidden: { x: "0%" },
                visible: {
                  x: "100%",
                  transition: {
                    duration: 0.8, // Faster reveal
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0, // Immediate start
                  },
                },
              }}
              style={{ originX: 0 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
