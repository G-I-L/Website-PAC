"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

type Part = { text: string; accent?: boolean };

export default function AnimatedHeading({
  parts,
  as: Tag = "h1",
  className = "",
  delay = 0,
}: {
  parts: Part[];
  as?: "h1" | "h2";
  className?: string;
  delay?: number;
}) {
  let wordIndex = 0;

  return (
    <Tag className={className} style={{ perspective: 900 }}>
      {parts.map((part, pi) => {
        const words = part.text.split(" ");
        return (
          <span key={pi} className={part.accent ? "text-gold" : undefined}>
            {words.map((word, wi) => {
              const idx = wordIndex++;
              return (
                <motion.span
                  key={wi}
                  initial={{ opacity: 0, rotateX: -75, y: 22 }}
                  whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    ease: EASE,
                    delay: delay + idx * 0.055,
                  }}
                  className="inline-block [transform-style:preserve-3d]"
                >
                  {word}
                  {wi < words.length - 1 ? " " : ""}
                </motion.span>
              );
            })}
            {pi < parts.length - 1 ? " " : ""}
          </span>
        );
      })}
    </Tag>
  );
}
