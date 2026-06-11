"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  cursorColor?: string;
  cursorClassName?: string;
  replay?: boolean;
}

export const TypewriterText = ({
  text,
  className = "",
  cursorColor = "#E7E7E7",
  cursorClassName = "",
  replay = false,
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: !replay, amount: 0.5 });

  // Reset while leaving the viewport, via the "adjust state during render"
  // pattern (https://react.dev/learn/you-might-not-need-an-effect)
  const [wasInView, setWasInView] = useState(isInView);
  if (wasInView !== isInView) {
    setWasInView(isInView);
    if (!isInView && replay) setDisplayedText("");
  }

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(intervalId);
    }, 20);

    return () => clearInterval(intervalId);
  }, [isInView, text]);

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      <span>{displayedText}</span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className={`ml-1 inline-block ${cursorClassName}`}
        style={{ color: cursorColor }}
      >
        |
      </motion.span>
    </div>
  );
};
