"use client";

import { motion } from "framer-motion";
import { FileText, Target, Send, Users, CircleCheck } from "lucide-react";

const STEPS = [
  {
    icon: FileText,
    label: "Step 01 · Deliverable: written spec",
    title: "Specification",
    desc: "We take the role brief the way an engineer takes a drawing: experience band, processes and systems handled, quality standards or tech stack, team size, reporting line, budget. If the specification is loose, we tighten it with you before searching.",
    dark: false,
  },
  {
    icon: Target,
    label: "Step 02 · Deliverable: named search plan",
    title: "Search plan",
    desc: "We identify the organisations where that experience exists today — competitors, adjacent companies, suppliers — and name them in a written search plan, so you can see exactly where your shortlist will come from.",
    dark: false,
  },
  {
    icon: Send,
    label: "Step 03 · Deliverable: qualified interest",
    title: "Direct outreach",
    desc: "The strongest candidates rarely browse portals. Each role is taken to them directly and through referrals, presented honestly — the work, the environment, the terms — and interest is qualified before any CV moves.",
    dark: false,
  },
  {
    icon: Users,
    label: "Step 04 · Deliverable: screened shortlist",
    title: "Screening & shortlist",
    desc: "Every profile is interviewed against the specification before it reaches you: experience verified, expectations aligned, notice period and compensation discussed. You interview candidates, not applications.",
    dark: true,
  },
];

const CHECK_ITEMS = [
  "Experience verified against the written specification",
  "Processes, systems and tools handled — confirmed, not assumed",
  "Reason for change discussed and recorded",
  "Compensation expectations aligned before the CV moves",
  "Notice period and joining timeline confirmed",
  "References available on request",
];

export default function Timeline() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div>
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === STEPS.length - 1;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut" as const,
                  delay: i * 0.06,
                }}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                <div className="flex flex-none flex-col items-center">
                  <span
                    className={`flex h-14 w-14 flex-none items-center justify-center rounded-2xl ${
                      step.dark ? "bg-navy text-gold" : "bg-cream text-gold-dark"
                    }`}
                  >
                    <Icon size={24} />
                  </span>
                  {!isLast && (
                    <span className="mt-2 w-px flex-1 bg-gradient-to-b from-gold-light to-border" />
                  )}
                </div>
                <div className="pt-1">
                  <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-wider text-faint">
                    {step.label}
                  </p>
                  <h3 className="mb-2.5 text-[clamp(1.25rem,2.2vw,1.5rem)]">
                    {step.title}
                  </h3>
                  <p className="max-w-[62ch] text-[1rem] leading-relaxed text-muted">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mt-10 rounded-[18px] border border-border bg-surface p-8"
        >
          <p className="mb-5 text-[0.74rem] font-bold uppercase tracking-[0.12em] text-gold-dark">
            Every shortlisted profile is checked against
          </p>
          <ul className="grid list-none gap-4 sm:grid-cols-2">
            {CHECK_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CircleCheck
                  size={19}
                  className="mt-0.5 flex-none text-emerald-600"
                />
                <span className="text-[0.96rem] leading-snug text-slate">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
