"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";
import { TypewriterText } from "@/components/ui/typewriter-text";

interface Experience {
  company: string;
  role: string;
  type: string;
  date: string;
  description: string;
  tags: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    company: "Phocus1",
    role: "Fullstack Developer",
    type: "Full-time Internship",
    date: "Mar — Jul 2026",
    description:
      "Designing and developing two internal web platforms end-to-end, and building AI-driven automation workflows with n8n to streamline business operations.",
    tags: ["Full-Stack", "React", "n8n", "AI Workflows", "Automation"],
    current: true,
  },
  {
    company: "EOR Consultants",
    role: "Frontend Developer",
    type: "Internship",
    date: "Oct 2025 — Feb 2026",
    description:
      "UI/UX optimization and ergonomic redesign. Enhanced user interface performance and accessibility.",
    tags: ["React", "UI/UX", "Accessibility", "Performance"],
  },
  {
    company: "Epitech × Onepoint",
    role: "Eco-tech Challenge",
    type: "Hackathon",
    date: "Apr 2025",
    description:
      "Development of an awareness chatbot focusing on the environmental impact of LLMs.",
    tags: ["LLM", "Chatbot", "Eco-tech"],
  },
  {
    company: "Vueling",
    role: "Finalist — “We speak your language”",
    type: "Hackathon",
    date: "Mar 2025",
    description:
      "Local embedded AI for real-time translation, facilitating passenger and crew communication on board.",
    tags: ["Embedded AI", "Real-time Translation"],
  },
  {
    company: "EOR Consultants",
    role: "Fullstack Developer",
    type: "Internship",
    date: "Sep — Dec 2024",
    description:
      "Design and development of the “private.phocus” and “option.retraite” platforms. End-to-end feature implementation.",
    tags: ["React", "Fullstack", "Architecture"],
  },
];

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");

  // Cursor-tracking spotlight: feeds CSS vars consumed by the radial overlay
  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    },
    []
  );

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: (index % 2) * 0.08,
      }}
      className={`group relative overflow-hidden rounded-3xl border p-6 sm:p-8 md:p-10 transition-colors duration-500 ${
        experience.current
          ? "md:col-span-2 border-amber-6/25 bg-gradient-to-br from-[#1d1b13] via-[#171510] to-[#151410] hover:border-amber-6/40"
          : "border-white/10 bg-gradient-to-br from-[#1a1915] to-[#151410] hover:border-white/25"
      }`}
    >
      {/* Cursor spotlight */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(540px circle at var(--mx, 75%) var(--my, 20%), rgba(243,214,115,0.07), transparent 65%)",
        }}
      />

      {/* Ghost numeral */}
      <span
        aria-hidden
        className="absolute -right-3 -top-9 font-syne font-bold text-[7rem] sm:text-[9rem] leading-none text-white/[0.04] group-hover:text-amber-6/[0.09] transition-colors duration-500 select-none pointer-events-none"
      >
        {number}
      </span>

      {/* Top row: index, type badge, dates */}
      <div className="relative z-10 flex flex-wrap items-center gap-3 mb-8 md:mb-10">
        <span className="font-space text-xs tracking-[0.25em] text-[#E7E7E7]/30">
          {number}
        </span>
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-space text-[10px] sm:text-[11px] uppercase tracking-[0.2em] ${
            experience.current
              ? "border-amber-6/40 text-amber-6"
              : "border-white/15 text-[#E7E7E7]/50"
          }`}
        >
          {experience.current && (
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-6 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-6" />
            </span>
          )}
          {experience.current ? `Current — ${experience.type}` : experience.type}
        </span>
        <span className="ml-auto font-space text-xs sm:text-sm text-[#E7E7E7]/40 tabular-nums">
          {experience.date}
        </span>
      </div>

      {/* Two-tone title */}
      <h3 className="relative z-10 font-syne font-bold tracking-tight leading-[1.05]">
        <span
          className={`block text-3xl sm:text-4xl md:text-5xl transition-colors duration-500 ${
            experience.current
              ? "text-amber-6"
              : "text-[#E7E7E7] group-hover:text-amber-6"
          }`}
        >
          {experience.company}
        </span>
        <span className="block mt-1 text-xl sm:text-2xl md:text-3xl text-[#E7E7E7]/30">
          {experience.role}
        </span>
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-6 flex gap-3 max-w-2xl font-space text-sm md:text-base leading-relaxed text-[#E7E7E7]/55">
        <Asterisk
          size={18}
          aria-hidden
          className={`shrink-0 mt-0.5 ${
            experience.current ? "text-amber-6" : "text-[#E7E7E7]/30"
          }`}
        />
        {experience.description}
      </p>

      {/* Tag chips */}
      <div className="relative z-10 mt-8 flex flex-wrap gap-2">
        {experience.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-space text-[11px] sm:text-xs uppercase tracking-wider text-[#E7E7E7]/60 transition-colors duration-300 group-hover:border-white/20 group-hover:text-[#E7E7E7]/80"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function WorkList() {
  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-background relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <TypewriterText
          text="Experience"
          className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase text-[#E7E7E7]"
          replay={true}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false }}
          className="mt-4 font-space text-[#E7E7E7]/60 text-sm md:text-base tracking-widest uppercase"
        >
          Internships & hackathons.
        </motion.p>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.company}-${experience.date}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
