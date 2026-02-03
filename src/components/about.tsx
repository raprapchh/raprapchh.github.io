"use client";

import { TypewriterText } from "@/components/ui/typewriter-text";

export function About() {
  return (
    <section
      id="about"
      className="min-h-[60vh] flex flex-col justify-center px-6 md:px-24 bg-background text-foreground z-20 relative py-24"
    >
      {/* 1. L'INTRO DISCRÈTE (Label) */}
      <span className="font-space text-sm md:text-base opacity-60 mb-6 tracking-widest uppercase">
        I'm Raphaël —
      </span>

      {/* 2. LE MESSAGE IMPACTANT (Headline) */}
      <div className="max-w-5xl">
        <TypewriterText
          text="Full Stack Developer merging creative frontend with robust software engineering."
          className="font-syne text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1]"
        />
      </div>

      {/* 3. LE STATUS (Tagline) */}
      <div className="mt-12 flex items-center gap-4">
        {/* Petit point vert qui pulse pour dire "Actif" */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>

        <p className="font-space text-lg md:text-xl opacity-80">
          Currently building at{" "}
          <span className="underline decoration-1 underline-offset-4">
            Epitech Paris
          </span>
          .
        </p>
      </div>
    </section>
  );
}
