"use client";

import { motion } from "framer-motion";
import { ClipboardList, Percent, Flag, ShieldCheck } from "lucide-react";

const ITEMS = [
  {
    icon: ClipboardList,
    title: "Per-role mandates",
    desc: "Each role is a separate mandate with its own specification and search plan. No retainers, no annual contracts, no volume commitments.",
  },
  {
    icon: Percent,
    title: "Success fee only",
    desc: "Fees are charged as a percentage of annual CTC, payable only on a candidate joining. If no one joins, nothing is owed.",
  },
  {
    icon: Flag,
    title: "Begin with a single mandate",
    desc: "Many clients begin with one position before considering a broader engagement — evaluate our work on a delivered shortlist.",
  },
  {
    icon: ShieldCheck,
    title: "Replacement assurance",
    desc: "Fee terms, replacement period and guarantees are stated in writing in the mandate before sourcing begins — no surprises at invoice.",
  },
];

export default function Commercials() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mb-10"
        >
          <p className="mb-3 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-gold-dark">
            Commercials
          </p>
          <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)]">
            How the engagement works.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
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
                className="flex gap-4 rounded-2xl border border-border bg-white p-7 shadow-[0_10px_30px_rgba(19,32,58,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(19,32,58,0.09)]"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-cream text-gold-dark">
                  <Icon size={21} />
                </span>
                <div>
                  <h3 className="mb-2 text-[1.08rem]">{item.title}</h3>
                  <p className="text-[0.94rem] leading-relaxed text-muted">
                    {item.desc}
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
