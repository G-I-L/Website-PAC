"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { UploadCloud, ArrowRight } from "lucide-react";

export default function AudienceSplit() {
  return (
    <section className="border-b border-border bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-xl rounded-2xl border border-border bg-surface p-8 text-center"
        >
          <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cream text-gold-dark">
            <UploadCloud size={24} />
          </span>
          <p className="mb-2 text-[0.76rem] font-bold uppercase tracking-[0.14em] text-gold-dark">
            I&rsquo;m a job seeker
          </p>
          <h3 className="mb-3 text-[1.4rem]">Get into our talent database.</h3>
          <p className="mb-6 text-[0.96rem] leading-relaxed text-muted">
            Upload your resume once. It stays on file with us — when a
            client company asks for someone with your skills, we match you
            and email you the opening directly.
          </p>
          <a
            href="#upload-resume"
            className="inline-flex items-center gap-2 text-[0.95rem] font-bold text-navy"
          >
            Upload your resume <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
