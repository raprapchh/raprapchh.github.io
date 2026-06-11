"use client";

import { useCallback, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
  type Variants,
} from "framer-motion";
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

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Subtle per-card surface shift so each cover moment reads as a new scene.
const CARD_SURFACES = [
  "from-[#191712] to-[#141310]",
  "from-[#161812] to-[#121410]",
  "from-[#1a1511] to-[#131110]",
  "from-[#16171a] to-[#111214]",
];

// Inner content cascade, fired once as each card rises into the deck.
const shellVariants: Variants = {
  hidden: { opacity: 0.4, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: EASE,
      delayChildren: 0.1,
      staggerChildren: 0.06,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// Masked line reveal for the two-tone title.
const lineVariants: Variants = {
  hidden: { y: "115%" },
  visible: { y: "0%", transition: { duration: 0.8, ease: EASE } },
};

const numeralVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

const hairlineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.2, ease: EASE } },
};

const tagListVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const tagVariants: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE },
  },
};

function DeckCard({
  experience,
  index,
  total,
  progress,
}: {
  experience: Experience;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const number = String(index + 1).padStart(2, "0");

  // Once covered, the card recedes: it shrinks slightly and dims under a
  // veil, deeper cards ending smaller and darker. The last card stays put.
  const depth = total - 1 - index;
  const scale = useTransform(progress, [index / total, 1], [1, 1 - depth * 0.035]);
  const veil = useTransform(
    progress,
    [index / total, 1],
    [0, Math.min(depth * 0.14, 0.45)]
  );

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
    <div
      className="sticky mb-[10vh] last:mb-0"
      style={{ top: `calc(84px + ${index * 12}px)`, zIndex: index + 1 }}
    >
      <motion.article
        onMouseMove={handleMouseMove}
        variants={shellVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -12% 0px" }}
        style={{ scale }}
        className={`group relative flex flex-col overflow-hidden rounded-3xl border origin-top p-6 sm:p-8 md:p-10 min-h-[440px] md:min-h-[500px] lg:min-h-[540px] transition-colors duration-500 ${
          experience.current
            ? "border-amber-6/25 bg-gradient-to-br from-[#1d1b13] via-[#171510] to-[#151410] hover:border-amber-6/40"
            : `border-white/10 bg-gradient-to-br ${
                CARD_SURFACES[index % CARD_SURFACES.length]
              } hover:border-white/25`
        }`}
      >
        {/* Hairline sweep along the top edge */}
        <motion.div
          aria-hidden
          variants={hairlineVariants}
          className={`absolute inset-x-0 top-0 h-px origin-left ${
            experience.current
              ? "bg-gradient-to-r from-amber-6/70 via-amber-6/20 to-transparent"
              : "bg-gradient-to-r from-white/30 via-white/10 to-transparent"
          }`}
        />

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
        <motion.span
          aria-hidden
          variants={numeralVariants}
          className="absolute -right-3 -top-9 font-syne font-bold text-[7rem] sm:text-[9rem] leading-none text-white/[0.04] group-hover:text-amber-6/[0.09] transition-colors duration-500 select-none pointer-events-none"
        >
          {number}
        </motion.span>

        {/* Top row: index, type badge, dates */}
        <motion.div
          variants={childVariants}
          className="relative z-10 flex flex-wrap items-center gap-3 mb-8 md:mb-10"
        >
          <span className="font-space text-xs tracking-[0.25em] text-[#E7E7E7]/30">
            {number} / {String(total).padStart(2, "0")}
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
            {experience.current
              ? `Current — ${experience.type}`
              : experience.type}
          </span>
          <span className="ml-auto font-space text-xs sm:text-sm text-[#E7E7E7]/40 tabular-nums">
            {experience.date}
          </span>
        </motion.div>

        {/* Two-tone title, each line unmasked bottom-up */}
        <h3 className="relative z-10 font-syne font-bold tracking-tight leading-[1.05]">
          <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
            <motion.span
              variants={lineVariants}
              className={`block text-3xl sm:text-4xl md:text-5xl transition-colors duration-500 ${
                experience.current
                  ? "text-amber-6"
                  : "text-[#E7E7E7] group-hover:text-amber-6"
              }`}
            >
              {experience.company}
            </motion.span>
          </span>
          <span className="mt-1 block overflow-hidden pb-[0.12em] -mb-[0.12em]">
            <motion.span
              variants={lineVariants}
              className="block text-xl sm:text-2xl md:text-3xl text-[#E7E7E7]/30"
            >
              {experience.role}
            </motion.span>
          </span>
        </h3>

        {/* Description */}
        <motion.p
          variants={childVariants}
          className="relative z-10 mt-6 flex gap-3 max-w-2xl font-space text-sm md:text-base leading-relaxed text-[#E7E7E7]/55"
        >
          <Asterisk
            size={18}
            aria-hidden
            className={`shrink-0 mt-0.5 ${
              experience.current ? "text-amber-6" : "text-[#E7E7E7]/30"
            }`}
          />
          {experience.description}
        </motion.p>

        {/* Tag chips, pinned to the bottom of the card */}
        <motion.div
          variants={tagListVariants}
          className="relative z-10 mt-auto pt-8 flex flex-wrap gap-2"
        >
          {experience.tags.map((tag) => (
            <motion.span
              key={tag}
              variants={tagVariants}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-space text-[11px] sm:text-xs uppercase tracking-wider text-[#E7E7E7]/60 transition-colors duration-300 group-hover:border-white/20 group-hover:text-[#E7E7E7]/80"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Depth veil — darkens as the next card covers this one */}
        <motion.div
          aria-hidden
          style={{ opacity: veil }}
          className="absolute inset-0 z-20 rounded-3xl bg-[#0c0b08] pointer-events-none"
        />
      </motion.article>
    </div>
  );
}

export function WorkList() {
  const deckRef = useRef<HTMLDivElement>(null);
  // Deck progress: 0 when the first card pins, 1 when the stack resolves.
  const { scrollYProgress } = useScroll({
    target: deckRef,
    offset: ["start 0.12", "end end"],
  });

  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <TypewriterText
          text="Experiences"
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
          Internships & hackathons — scroll the deck.
        </motion.p>

        {/* Sticky deck: each card pins below the header, the next one slides
            up and covers it. Only one experience holds the stage at a time. */}
        <div ref={deckRef} className="relative mt-14 md:mt-16 pb-[12vh]">
          {experiences.map((experience, index) => (
            <DeckCard
              key={`${experience.company}-${experience.date}`}
              experience={experience}
              index={index}
              total={experiences.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
