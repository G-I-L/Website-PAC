"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import Link from "next/link";
import { UserRound, ArrowRight, Sparkles } from "lucide-react";

export default function ForCandidates() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-start gap-8 rounded-3xl border border-border bg-surface p-8 md:flex-row md:items-center md:justify-between md:p-12"
        >
          <div className="flex items-start gap-5">
            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-cream text-gold-dark">
              <Sparkles size={26} />
            </span>
            <div>
              <p className="mb-2 inline-flex items-center gap-2 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-gold-dark">
                <UserRound size={15} />
                For candidates
              </p>
              <h2 className="text-[clamp(1.7rem,3vw,2.4rem)]">
                Looking for your next role?
              </h2>
              <p className="mt-3 max-w-[52ch] text-[1rem] leading-relaxed text-muted">
                Send us your profile with your preferred role type and
                location — our consultants will contact you when a matching
                position opens. We never charge candidates at any stage.
              </p>
            </div>
          </div>
          <Link
            href="/careers"
            className="inline-flex flex-none items-center gap-2 whitespace-nowrap rounded-[10px] border-[1.5px] border-navy/20 px-6 py-[13px] text-[0.95rem] font-bold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
          >
            Submit your profile <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
