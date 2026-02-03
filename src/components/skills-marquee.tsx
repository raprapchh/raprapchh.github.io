"use client";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "C",
  "C++",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "React Native",
  "Next.js",
  "Docker",
  "Gitlab",
  "Github Actions",
  "Jira",
  "n8n",
];

const MarqueeRow = ({
  items,
  direction = "left",
  speed = 20,
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap mask-gradient relative">
      <motion.div
        className="flex gap-8 py-4"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((skill, index) => (
          <span
            key={index}
            className="text-4xl md:text-6xl font-syne font-bold uppercase text-transparent stroke-text opacity-50 hover:opacity-100 transition-opacity cursor-default"
            style={{ WebkitTextStroke: "1px var(--foreground)" }}
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export function SkillsMarquee() {
  const row1 = skills.slice(0, Math.ceil(skills.length / 2));
  const row2 = skills.slice(Math.ceil(skills.length / 2));

  return (
    <section className="py-24 bg-background overflow-hidden relative z-10">
      <div className="mb-12 text-center">
        <h3 className="font-space uppercase tracking-widest text-sm opacity-40">
          Tech Stack
        </h3>
      </div>

      <div className="flex flex-col gap-8">
        <MarqueeRow items={row1} direction="left" speed={30} />
        <MarqueeRow items={row2} direction="right" speed={35} />
      </div>
    </section>
  );
}
