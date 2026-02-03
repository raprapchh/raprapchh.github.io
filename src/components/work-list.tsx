"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypewriterText } from "@/components/ui/typewriter-text";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  role: string;
  date: string;
  description: string;
  stack: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "EOR Consultants",
    role: "Frontend Developer",
    date: "Oct 2025 - Present",
    description:
      "UI/UX Optimization and ergonomic redesign. Enhanced user interface performance and accessibility.",
    stack: "React, Front-end optimization",
    color: "#F3D673",
  },
  {
    id: 2,
    title: "Hackathon Vueling",
    role: "Finalist - 'We speak your language'",
    date: "Mar 2025",
    description:
      "Local embedded AI, Real-time translation. Facilitating passenger/crew communication on board.",
    stack: "AI, Real-time Translation",
    color: "#F3D673",
  },
  {
    id: 3,
    title: "Hackathon Epitech x Onepoint",
    role: "Eco-tech Challenge",
    date: "Feb 2025",
    description:
      "Development of an awareness chatbot focusing on the environmental impact of LLMs.",
    stack: "LLM, Eco-tech",
    color: "#F3D673",
  },
  {
    id: 4,
    title: "EOR Consultants",
    role: "Fullstack Developer",
    date: "Sep 2024 - Dec 2024",
    description:
      "Design and development of 'private.phocus' and 'option.retraite' platforms. End-to-end feature implementation.",
    stack: "React, Fullstack Architecture",
    color: "#F3D673",
  },
];

export function WorkList() {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <section className="min-h-screen w-full py-24 px-4 bg-background relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <TypewriterText
          text="Selected Works"
          className="text-4xl md:text-6xl font-syne font-bold mb-16 uppercase text-[#E7E7E7]"
          replay={true}
        />

        <div className="flex flex-col">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative border-t border-foreground/10 py-12 cursor-pointer transition-colors hover:bg-foreground/5 px-4"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() =>
                setHoveredProject(
                  hoveredProject?.id === project.id ? null : project,
                )
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, x: 20 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: false }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 z-10 relative">
                <h3 className="text-3xl md:text-5xl font-unbounded font-bold text-foreground group-hover:text-amber-6 transition-colors">
                  {project.title}
                </h3>
                <span className="font-space font-light text-sm md:text-base opacity-60 group-hover:opacity-100 transition-opacity">
                  {project.role}
                </span>
              </div>

              <div className="flex flex-col md:flex-row justify-between mt-4 opacity-40 group-hover:opacity-80 transition-opacity">
                <p className="font-space text-sm max-w-md">
                  {project.description}
                </p>
                <span className="font-space text-xs mt-2 md:mt-0">
                  {project.date}
                </span>
              </div>

              <ArrowUpRight className="absolute top-8 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-2 group-hover:-translate-y-2 text-amber-6" />
            </motion.div>
          ))}
          <div className="border-t border-foreground/10"></div>
        </div>
      </div>

      {/* Hover Reveal Image/Shape */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-gradient-to-br from-transparent to-black/80 flex items-center justify-center opacity-40 mix-blend-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Abstract large floaty shape */}
            <motion.div
              layoutId="reveal-shape"
              className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full blur-[80px] md:blur-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                backgroundColor: hoveredProject.color,
                opacity: 0.2,
                willChange: "transform",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
