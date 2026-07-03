"use client";

import { motion } from "framer-motion";
import { Calendar, Handshake, Clock, CircleCheck } from "lucide-react";

const ITEMS = [
  {
    icon: Calendar,
    title: "Interview coordination",
    desc: "We schedule interviews, brief candidates before each round, and carry feedback in both directions — so momentum is never lost.",
  },
  {
    icon: Handshake,
    title: "Offer & negotiation support",
    desc: "Market-informed guidance on the offer, and a candidate whose expectations were aligned before the first interview — so offers convert.",
  },
  {
    icon: Clock,
    title: "Notice-period follow-through",
    desc: "We stay engaged with the candidate through their notice period — the stage where most agency placements quietly fall apart.",
  },
  {
    icon: CircleCheck,
    title: "Post-joining check-ins",
    desc: "Structured check-ins with both you and the candidate after joining — a placement is complete when it holds, not when the invoice is raised.",
  },
];

export default function AfterShortlist() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mb-10 max-w-[60ch]"
        >
          <p className="mb-3 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-gold-dark">
            After the shortlist
          </p>
          <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)]">
            We stay in the process until the position is filled — and
            beyond.
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut" as const,
                  delay: i * 0.06,
                }}
                className="rounded-2xl border border-border bg-surface p-7"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-gold-dark">
                  <Icon size={20} />
                </span>
                <h3 className="mb-2 text-[1.02rem]">{item.title}</h3>
                <p className="text-[0.9rem] leading-relaxed text-muted">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
