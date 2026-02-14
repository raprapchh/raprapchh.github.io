"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { TypewriterText } from "@/components/ui/typewriter-text";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 2.5 }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/5"
          : "py-8 bg-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-12 flex justify-between items-center relative z-[100]">
        <Link href="/" className="group flex flex-col">
          <span className="text-2xl font-syne font-bold tracking-tighter uppercase leading-none">
            Raphaël Chanliongco
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 w-screen h-screen bg-[#151410] z-[90] flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {["About", "Works", "Skills", "Contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-5xl font-syne font-black uppercase text-foreground/90 hover:text-amber-6 transition-colors tracking-tight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
