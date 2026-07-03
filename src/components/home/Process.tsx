"use client";

import { motion } from "framer-motion";
import { FileText, Target, Send, Users } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: FileText,
    title: "Specification",
    desc: "We take the role brief the way an engineer takes a drawing — experience band, processes, systems, reporting line — before any search begins.",
    dark: false,
  },
  {
    n: "02",
    icon: Target,
    title: "Search plan",
    desc: "We identify and name the organisations where that exact experience exists today — in writing, so you see where your shortlist will come from.",
    dark: false,
  },
  {
    n: "03",
    icon: Send,
    title: "Direct outreach",
    desc: "Your role is taken directly to people doing similar work today, presented honestly — the work, the environment, the terms. Most never see a posting.",
    dark: false,
  },
  {
    n: "04",
    icon: Users,
    title: "Screened shortlist",
    desc: "Every profile is interviewed against the specification before it reaches you. You interview candidates, not applications.",
    dark: true,
  },
];

export default function Process() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mb-12 max-w-[60ch]"
        >
          <p className="mb-3 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-gold-dark">
            How we work
          </p>
          <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)]">
            A defined process, run the way a plant runs — to specification,
            in sequence.
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut" as const,
                  delay: i * 0.08,
                }}
                className="rounded-2xl border border-border bg-white p-7 shadow-[0_4px_20px_rgba(19,32,58,0.01)]"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      step.dark ? "bg-navy text-gold" : "bg-cream text-gold-dark"
                    }`}
                  >
                    <Icon size={22} />
                  </span>
                  <span className="text-[1.1rem] font-extrabold text-gold-dark">
                    {step.n}
                  </span>
                </div>
                <h3 className="mb-2.5 text-[1.15rem]">{step.title}</h3>
                <p className="text-[0.92rem] leading-relaxed text-muted">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
