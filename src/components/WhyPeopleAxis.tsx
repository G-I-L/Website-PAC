"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { UserCheck, Eye, Scale, Handshake, type LucideIcon } from "lucide-react";

const REASONS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: UserCheck,
    title: "We've hired from your chair",
    desc: "Led by someone who spent two decades building teams — writing specifications, running interviews, paying agency invoices. We know what a bad shortlist costs.",
  },
  {
    icon: Eye,
    title: "A visible search plan",
    desc: "Before sourcing begins, you see where your candidates will come from — the companies and profiles mapped, in writing. Never guessing what your fee buys.",
  },
  {
    icon: Scale,
    title: "Aligned commercials",
    desc: "Engagements are structured per role on a success-fee basis — our fee is earned when your position is filled, with terms and replacement assurance stated in writing upfront.",
  },
  {
    icon: Handshake,
    title: "Honesty on both sides",
    desc: "Candidates hear the role as it is — the work, the environment, the terms. Placements that surprise either side don't last, and we don't make them.",
  },
];

export default function WhyPeopleAxis() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-11 max-w-[60ch]"
        >
          <p className="mb-3 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-gold-dark">
            Why People Axis
          </p>
          <h2 className="text-[clamp(2rem,3.6vw,3rem)]">
            Reasons clients start with us — none of which require taking our
            word for it.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: EASE,
                  delay: i * 0.06,
                }}
                className="flex gap-4 rounded-2xl border border-border bg-white p-7 shadow-[0_10px_30px_rgba(19,32,58,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(19,32,58,0.09)]"
              >
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-cream text-gold-dark">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="mb-2 text-[1.08rem]">{reason.title}</h3>
                  <p className="text-[0.94rem] leading-relaxed text-muted">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
