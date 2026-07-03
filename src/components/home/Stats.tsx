"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "05", label: "Industries served" },
  { value: "20+", label: "Years in HR & operations" },
  { value: "100%", label: "Success-fee based" },
  { value: "₹0", label: "Upfront & retainer fees" },
];

export default function Stats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="grid grid-cols-2 gap-8 border-b border-border py-12 md:grid-cols-4 md:py-16"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={i < STATS.length - 1 ? "md:border-r md:border-border md:pr-4" : ""}
            >
              <div className="text-[clamp(2rem,3.6vw,2.8rem)] font-extrabold leading-none text-navy">
                {stat.value}
              </div>
              <div className="mt-2 text-[0.82rem] font-bold uppercase tracking-wide text-faint">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
