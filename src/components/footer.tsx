"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import Link from "next/link";
import MagneticSocialLink from "@/components/MagneticSocialLink";
import { BackToTop } from "@/components/back-to-top";

export function Footer() {
  return (
    <footer
      id="contact"
      className="min-h-[80vh] w-full flex flex-col justify-center items-center bg-background px-4 py-20 relative z-10 border-t border-accent"
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10.8vw] font-syne font-bold leading-[0.8] tracking-tighter uppercase mb-16">
          Let's Work <br /> Together
        </h2>

        <Link
          href="/assets/CV_Raphael_Chanliongco_Fulltime.pdf"
          target="_blank"
          className="group flex items-center gap-2 px-6 py-2 md:px-8 md:py-3 mb-12 md:mb-16 border border-[#E7E7E7] hover:bg-[#E7E7E7] hover:text-[#151410] transition-all duration-300 rounded-sm"
        >
          <span className="text-sm md:text-base font-space uppercase tracking-widest">
            Resume
          </span>
          <Download className="w-4 h-4 md:w-5 md:h-5" />
        </Link>

        <div className="flex gap-4 md:gap-8">
          <MagneticSocialLink href="mailto:raphael.chanliongco@epitech.eu">
            <Mail className="w-5 h-5 md:w-8 md:h-8" />
          </MagneticSocialLink>
          <MagneticSocialLink href="https://github.com/raprapchh">
            <Github className="w-5 h-5 md:w-8 md:h-8" />
          </MagneticSocialLink>
          <MagneticSocialLink href="https://www.linkedin.com/in/raphael-chanliongco">
            <Linkedin className="w-5 h-5 md:w-8 md:h-8" />
          </MagneticSocialLink>
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-8 left-0 w-full flex justify-center items-center pointer-events-none">
        <div className="opacity-30 font-space text-[10px] md:text-xs">
          © 2026 Raphaël Chanliongco.
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-20">
        <BackToTop />
      </div>
    </footer>
  );
}
