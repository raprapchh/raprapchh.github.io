"use client";

import { motion } from "framer-motion";
import { TypewriterText } from "@/components/ui/typewriter-text"; // Import shared component

// ----------------------------------------------------------------------
// DATA
// ----------------------------------------------------------------------

const CATEGORIES = [
  {
    label: "Frontend",
    items: ["REACT", "NEXT.JS", "VUE", "REACT NATIVE", "VITE"],
    direction: "left",
    transparent: false,
  },
  {
    label: "Backend & Database",
    items: ["GO", "PYTHON", "SQL", "MARIADB"],
    direction: "right",
    transparent: true,
  },
  {
    label: "Tools & DevOps",
    items: ["C", "C++", "DOCKER", "GITHUB", "LINUX", "N8N"],
    direction: "left",
    transparent: false,
  },
] as const;

// ----------------------------------------------------------------------
// SUB-COMPONENTS
// ----------------------------------------------------------------------

const TechItem = ({
  text,
  transparent,
}: {
  text: string;
  transparent: boolean;
}) => {
  if (!transparent) {
    // Solid items just stay solid, no fancy interactions needed unless requested
    // Current design: just solid white
    return (
      <span className="text-6xl md:text-8xl font-syne font-bold uppercase cursor-default text-[#E7E7E7]">
        {text}
      </span>
    );
  }

  // Transparent items (Outline -> Solid)
  return (
    <motion.span
      className="text-6xl md:text-8xl font-syne font-bold uppercase cursor-default text-transparent"
      style={{
        WebkitTextStroke: "1px #E7E7E7",
      }}
      initial="outline"
      // whileHover="solid" removed to keep it always transparent
      variants={{
        outline: {
          color: "transparent",
          WebkitTextStroke: "1px #E7E7E7",
        } as any,
        solid: {
          color: "#E7E7E7",
          WebkitTextStroke: "0px transparent", // Optional: remove stroke or keep it
        } as any,
      }}
      transition={{ duration: 0.3 }}
    >
      {text}
    </motion.span>
  );
};

const MarqueeRow = ({
  items,
  direction = "left",
  speed = 20,
  transparent = false,
}: {
  items: readonly string[];
  direction?: "left" | "right";
  speed?: number;
  transparent?: boolean;
}) => {
  // Duplicate items enough times to ensure smooth looping without gaps
  // 10x duplication to be safe for smaller lists on large screens
  const duplicatedItems = Array(10).fill(items).flat();

  return (
    <div className="flex overflow-hidden whitespace-nowrap select-none w-full relative">
      <motion.div
        className="flex gap-16 md:gap-24 items-center py-4"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {duplicatedItems.map((item, index) => (
          <TechItem key={index} text={item} transparent={transparent} />
        ))}
      </motion.div>
    </div>
  );
};

// ----------------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------------

export function TechStack() {
  return (
    <section
      id="skills"
      className="py-24 w-full overflow-hidden bg-[#151410] relative z-10 flex flex-col gap-16"
    >
      <div className="container mx-auto px-4 text-center">
        <TypewriterText
          text="SKILLS"
          className="text-4xl md:text-6xl font-syne font-bold text-[#E7E7E7] flex justify-center items-center"
          replay={true}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: false }}
          className="mt-4 font-space text-[#E7E7E7]/60 text-sm md:text-base tracking-widest uppercase"
        >
          Technologies I work with.
        </motion.p>
      </div>

      <div className="flex flex-col gap-12 w-full">
        {CATEGORIES.map((cat, index) => (
          <div key={index} className="flex flex-col gap-4">
            {/* Small Label above the marquee */}
            <div className="container mx-auto px-6 md:px-24">
              <span className="text-[#E7E7E7] font-space text-sm tracking-widest opacity-60 uppercase border-b border-[#E7E7E7]/20 pb-1">
                {cat.label}
              </span>
            </div>

            <MarqueeRow
              items={cat.items}
              direction={cat.direction as "left" | "right"}
              speed={80}
              transparent={cat.transparent}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
