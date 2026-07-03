"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

export type RoleColumn = {
  heading: string;
  rows: { label: string; roles: string }[];
};

export type Industry = {
  id: string;
  n: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  approach: string;
  columns: [RoleColumn, RoleColumn];
  tint: boolean;
};

export default function IndustryBlock({ industry }: { industry: Industry }) {
  const Icon = industry.icon;
  return (
    <section
      id={industry.id}
      className={`scroll-mt-[140px] ${industry.tint ? "bg-surface" : "bg-white"}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mb-10 max-w-[70ch]"
        >
          <div className="mb-4 flex items-center gap-3.5">
            <span className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-cream text-gold-dark">
              <Icon size={26} />
            </span>
            <span className="text-[0.76rem] font-bold uppercase tracking-[0.15em] text-gold-dark">
              {industry.n} · {industry.eyebrow}
            </span>
          </div>
          <h2 className="text-[clamp(1.6rem,3vw,2.3rem)]">{industry.title}</h2>
          <p className="mt-3.5 text-[1.04rem] leading-relaxed text-muted">
            <strong className="text-navy">Our approach: </strong>
            {industry.approach}
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {industry.columns.map((col, i) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut" as const,
                delay: i * 0.08,
              }}
              className={`rounded-2xl border border-border p-7 ${
                industry.tint ? "bg-white" : "bg-surface"
              }`}
            >
              <p className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-gold-dark">
                {col.heading}
              </p>
              <div className="flex flex-col">
                {col.rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 gap-1.5 border-t border-border py-3.5 first:border-t-0 sm:grid-cols-[140px_1fr] sm:gap-4"
                  >
                    <span className="text-[0.9rem] font-bold text-navy">
                      {row.label}
                    </span>
                    <span className="text-[0.92rem] text-muted">
                      {row.roles}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
