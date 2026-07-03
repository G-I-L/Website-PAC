"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function PageCta({
  title = "Partner with us on your next requirement.",
  description = "Speak to our consultants about a current or upcoming position — a confidential discussion, with engagement terms stated in writing before any search begins.",
  ctaLabel = "Request a Call Back",
  ctaHref = "/contact",
}: {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="pointer-events-none absolute -top-20 -right-16 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-wrap items-center justify-between gap-10"
        >
          <div className="min-w-[280px] flex-1">
            <p className="mb-3 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-gold">
              Work with us
            </p>
            <h2 className="max-w-[20ch] !text-white text-[clamp(1.8rem,3.2vw,2.5rem)]">
              {title}
            </h2>
            <p className="mt-4 max-w-[54ch] text-[1.05rem] leading-relaxed text-white/70">
              {description}
            </p>
          </div>
          <Link
            href={ctaHref}
            className="inline-flex flex-none items-center gap-2.5 rounded-xl bg-gold px-7 py-[15px] text-[1rem] font-bold text-navy shadow-[0_10px_26px_rgba(198,162,78,0.3)] transition-all hover:-translate-y-0.5 hover:bg-gold-dark"
          >
            {ctaLabel} <PhoneCall size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
