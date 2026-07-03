"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import Link from "next/link";
import {
  Factory,
  Cpu,
  CodeXml,
  Headset,
  Landmark,
  type LucideIcon,
} from "lucide-react";

const INDUSTRIES: { icon: LucideIcon; label: string; href: string }[] = [
  { icon: Factory, label: "Manufacturing", href: "/industries#manufacturing" },
  { icon: Cpu, label: "Electronics", href: "/industries#electronics" },
  { icon: CodeXml, label: "IT & Engineering", href: "/industries#it-engineering" },
  { icon: Headset, label: "BPO & BPM", href: "/industries#bpo-bpm" },
  { icon: Landmark, label: "Banking & Financial Services", href: "/industries#bfsi" },
];

export default function IndustriesGrid() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10 max-w-[60ch]"
        >
          <p className="mb-3 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-gold-dark">
            Industries
          </p>
          <h2 className="text-[clamp(2rem,3.6vw,3rem)]">
            Industry-specialised recruitment, from entry level to leadership.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: EASE,
                  delay: i * 0.05,
                }}
              >
                <Link
                  href={industry.href}
                  className="flex h-full flex-col gap-5 rounded-2xl border border-border bg-white p-6 no-underline shadow-[0_4px_16px_rgba(19,32,58,0.01)] transition-all hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_16px_36px_rgba(19,32,58,0.08)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/[0.08] text-gold-dark">
                    <Icon size={22} />
                  </span>
                  <span className="text-[1rem] font-bold text-navy">
                    {industry.label}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-7 max-w-[70ch] text-[1.02rem] text-muted"
        >
          Our recruitment consultants bring domain understanding to each
          industry we serve, covering the complete spectrum of technical and
          non-technical roles.{" "}
          <Link
            href="/industries"
            className="border-b-[1.5px] border-gold-light font-bold text-gold-dark no-underline"
          >
            Explore our industries →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
