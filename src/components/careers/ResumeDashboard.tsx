"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock3 } from "lucide-react";

const SKILLS = ["React", "Node", "SQL"];

export default function ResumeDashboard() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-3 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-gold-dark">
            Your dashboard
          </p>
          <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)]">
            Track every application, end to end.
          </h2>
          <p className="mt-5 max-w-[46ch] text-[1rem] leading-relaxed text-muted">
            Once your resume is in, you can see exactly where you stand —
            skills we&rsquo;ve tagged from your profile, how complete it is,
            and whether a recruiter has picked it up yet.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="rounded-2xl border border-border bg-white p-7 shadow-[0_18px_40px_rgba(19,32,58,0.08)]"
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="font-extrabold text-navy">Resume Dashboard</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1.5 text-[0.78rem] font-bold text-gold-dark">
              <CheckCircle2 size={14} />
              Resume Uploaded
            </span>
          </div>

          <div className="mb-6">
            <p className="mb-2.5 text-[0.78rem] font-bold uppercase tracking-wider text-faint">
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-[0.85rem] font-semibold text-slate"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[0.78rem] font-bold uppercase tracking-wider text-faint">
                Profile completeness
              </p>
              <span className="text-[0.85rem] font-bold text-navy">90%</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "90%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                className="h-full rounded-full bg-gold"
              />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-surface px-4 py-3.5">
            <span className="text-[0.9rem] font-semibold text-slate">
              Recruiter Review
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.85rem] font-bold text-gold-dark">
              <Clock3 size={14} />
              Pending
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
