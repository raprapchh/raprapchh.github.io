"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { TypewriterText } from "@/components/ui/typewriter-text";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 2.5 }} // Delay to show after preloader
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/5"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="group flex flex-col">
          <span className="text-2xl font-syne font-bold tracking-tighter uppercase leading-none">
            RC.
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          {["About", "Works", "Skills", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 3 + index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="relative text-sm font-space uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-6 transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile menu could be added here, but keeping it super minimal for now */}
        <div className="flex items-center gap-6"></div>
      </div>
    </motion.header>
  );
}
