"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";

const MagneticButton = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative flex items-center justify-center w-20 h-20 md:w-32 md:h-32 rounded-full border border-foreground/20 hover:bg-foreground hover:text-background transition-colors duration-300"
    >
      {children}
    </motion.a>
  );
};

export function Footer() {
  return (
    <footer
      id="contact"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-background px-4 py-24 relative z-10 border-t border-accent"
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="text-[10.8vw] font-syne font-bold leading-[0.8] tracking-tighter uppercase mb-16">
          Let's Work <br /> Together
        </h2>

        <Link
          href="/assets/CV_Raphael_Chanliongco_Fulltime.pdf"
          target="_blank"
          className="group flex items-center gap-2 px-8 py-3 mb-16 border border-[#E7E7E7] hover:bg-[#E7E7E7] hover:text-[#151410] transition-all duration-300 rounded-sm"
        >
          <span className="text-base font-space uppercase tracking-widest">
            Resume
          </span>
          <Download className="w-5 h-5" />
        </Link>

        <div className="flex gap-8">
          <MagneticButton href="mailto:raphael.chanliongco@epitech.eu">
            <Mail size={32} />
          </MagneticButton>
          <MagneticButton href="https://github.com/raprapchh">
            <Github size={32} />
          </MagneticButton>
          <MagneticButton href="https://www.linkedin.com/in/raphael-chanliongco">
            <Linkedin size={32} />
          </MagneticButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 w-full text-center opacity-30 font-space text-xs">
        © 2026 Raphaël Chanliongco.
      </div>
    </footer>
  );
}
