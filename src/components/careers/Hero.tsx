"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { Sparkles, UploadCloud, Search } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: EASE, delay },
});

export default function Hero() {
  return (
    <header className="border-b border-border bg-gradient-to-b from-white to-surface">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-8 md:py-20">
        <motion.p
          {...fadeUp(0)}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-cream px-3.5 py-2 text-[0.74rem] font-bold uppercase tracking-[0.13em] text-gold-dark"
        >
          <Sparkles size={15} />
          Careers at People Axis
        </motion.p>

        <motion.h1
          {...fadeUp(0.08)}
          className="max-w-[18ch] text-[clamp(2.5rem,5vw,4.2rem)]"
        >
          One Resume. <span className="text-gold">Every Company We Hire For.</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.14)}
          className="mt-5 max-w-[58ch] text-[1.1rem] leading-relaxed text-muted"
        >
          People Axis isn&rsquo;t a public job board — we&rsquo;re a B2B
          recruitment partner. Upload your resume once and it joins our
          talent database; when a client company brings us a hiring
          requirement, our matching engine finds you and emails you
          directly. No browsing, no spam applications.
        </motion.p>

        <motion.div
          {...fadeUp(0.2)}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#upload-resume"
            className="inline-flex items-center gap-2 rounded-[10px] bg-gold px-6 py-[13px] text-[0.95rem] font-bold text-navy transition-all hover:-translate-y-0.5 hover:bg-gold-dark"
          >
            <UploadCloud size={18} />
            Upload Resume
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-navy/20 px-6 py-[13px] text-[0.95rem] font-bold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
          >
            <Search size={18} />
            Register a Vacancy
          </a>
        </motion.div>
      </div>
    </header>
  );
}
