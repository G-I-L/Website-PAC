"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import Link from "next/link";
import { Globe, ArrowRight, BadgeCheck, CircleCheck } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: EASE, delay },
});

const SHORTLIST = [
  { code: "PE", role: "Process Engineer", meta: "8 yrs · verified" },
  { code: "QE", role: "Quality Engineer", meta: "6 yrs · verified" },
  { code: "SD", role: "Software Developer", meta: "5 yrs · verified" },
];

export default function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-border bg-gradient-to-b from-white to-surface">
      <div className="pointer-events-none absolute -top-24 left-1/3 h-[420px] w-[420px] rounded-full bg-gold/[0.10] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-[380px] w-[380px] rounded-full bg-navy/[0.06] blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-28">
        <div>
          <motion.p
            {...fadeUp(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/[0.08] px-3.5 py-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-gold-dark"
          >
            <Globe size={15} />
            Specialist recruitment · Pan-India &amp; International
          </motion.p>

          <motion.h1
            {...fadeUp(0.06)}
            className="max-w-[16ch] text-[clamp(2.6rem,5.4vw,4.6rem)]"
          >
            Specialist Recruitment Solutions for{" "}
            <span className="text-gold">India&rsquo;s Leading Industries</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.12)}
            className="mt-6 max-w-[56ch] text-[1.05rem] leading-relaxed text-muted"
          >
            A specialist recruitment firm delivering permanent hiring across
            five industries — Manufacturing, Electronics, IT &amp;
            Engineering, BPO &amp; BPM, and Banking &amp; Financial Services —
            through a structured, specification-driven methodology. Every
            role is worked by direct, targeted sourcing, not portal
            applications.
          </motion.p>

          <motion.div
            {...fadeUp(0.18)}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-gold px-6 py-[14px] text-[0.95rem] font-bold text-navy shadow-[0_6px_18px_rgba(198,162,78,0.25)] transition-all hover:-translate-y-0.5 hover:bg-gold-dark"
            >
              Register a Vacancy <ArrowRight size={17} />
            </Link>
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-navy/15 px-6 py-[13px] text-[0.95rem] font-bold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
            >
              How we work
            </Link>
          </motion.div>

          <motion.div
            {...fadeUp(0.24)}
            className="mt-9 flex flex-wrap gap-x-7 gap-y-3"
          >
            {["Success-fee only", "Per-role mandates", "Replacement assurance"].map(
              (item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-[0.92rem] font-semibold text-slate"
                >
                  <BadgeCheck size={17} className="text-gold-dark" />
                  {item}
                </span>
              )
            )}
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.2)}
          className="rounded-[20px] border border-navy/[0.06] bg-white/85 p-7 shadow-[0_24px_60px_rgba(19,32,58,0.06)] backdrop-blur"
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="text-[0.92rem] font-bold text-navy">
              Search plan
            </span>
            <span className="rounded-full border border-gold/15 bg-gold/[0.08] px-2.5 py-1 text-[0.7rem] font-bold tracking-wide text-gold-dark">
              Active Mandate
            </span>
          </div>

          <p className="mb-3 text-[0.7rem] font-bold uppercase tracking-wider text-faint">
            Companies mapped · 12
          </p>
          <div className="mb-5 flex flex-wrap gap-2">
            {["Component mfrs", "EMS · box-build", "Captive centres", "+9 more"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-navy/[0.04] bg-navy/[0.03] px-3 py-1.5 text-[0.78rem] font-semibold text-slate"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <div className="mb-2 flex items-center justify-between">
            <span className="text-[0.7rem] font-bold uppercase tracking-wider text-faint">
              Shortlist · 3 profiles
            </span>
            <span className="text-[0.78rem] font-bold text-gold-dark">
              Pipeline match: 92%
            </span>
          </div>
          <div className="mb-5 h-[5px] w-full overflow-hidden rounded-full bg-surface">
            <div
              className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
              style={{ width: "92%" }}
            />
          </div>

          <div className="flex flex-col gap-3">
            {SHORTLIST.map((c) => (
              <div
                key={c.code}
                className="flex items-center gap-3 rounded-xl border border-navy/[0.03] bg-white px-3.5 py-2.5"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-navy text-[0.8rem] font-bold text-gold">
                  {c.code}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[0.88rem] font-bold text-navy">
                    {c.role}
                  </div>
                  <div className="text-[0.76rem] text-faint">{c.meta}</div>
                </div>
                <CircleCheck size={18} className="text-emerald-500" />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between rounded-xl border border-gold/15 bg-gold/[0.06] px-4 py-3">
            <span className="text-[0.84rem] font-bold text-gold-dark">
              3 of 3 · interview-ready
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.76rem] font-bold text-gold-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-dark" />
              Delivered
            </span>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
