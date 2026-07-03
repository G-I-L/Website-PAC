"use client";

import { motion } from "framer-motion";
import { BellRing, Mail } from "lucide-react";

export default function EmailAlertPreview() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <p className="mb-3 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-gold-dark">
            Step 6 of the pipeline
          </p>
          <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)]">
            We email you. You don&rsquo;t go looking.
          </h2>
          <p className="mt-5 max-w-[46ch] text-[1rem] leading-relaxed text-muted">
            The moment a client&rsquo;s hiring requirement matches your
            stored profile, our system emails you the opening automatically
            — this is what triggers you to apply.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-[0.85rem] font-semibold text-slate">
            <BellRing size={15} className="text-gold-dark" />
            Your profile is matched against every new client mandate
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="order-1 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_18px_40px_rgba(19,32,58,0.08)] md:order-2"
        >
          <div className="flex items-center gap-3 border-b border-border bg-navy px-6 py-4">
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gold text-navy">
              <Mail size={16} />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[0.92rem] font-bold text-white">
                People Axis Job Alerts
              </p>
              <p className="text-[0.78rem] text-white/60">
                3 new roles match your profile
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-6">
            {[
              ["Frontend Engineer", "Google · Bengaluru"],
              ["React Developer", "Microsoft · Remote"],
              ["UI Engineer", "Infosys · Pune"],
            ].map(([role, meta]) => (
              <div
                key={role}
                className="flex items-center justify-between rounded-xl bg-surface px-4 py-3"
              >
                <div>
                  <p className="text-[0.9rem] font-bold text-navy">{role}</p>
                  <p className="text-[0.78rem] text-faint">{meta}</p>
                </div>
                <span className="text-[0.78rem] font-bold text-gold-dark">
                  New
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
