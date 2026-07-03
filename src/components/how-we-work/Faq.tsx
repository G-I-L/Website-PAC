"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "How are your fees structured?",
    a: "Fees are charged as a percentage of the placed candidate's annual CTC, payable only on joining. The exact percentage depends on the level and nature of the role, and is stated in writing — along with all terms — before any search begins. There are no retainers, registration charges or advance payments.",
  },
  {
    q: "Do you offer a replacement guarantee?",
    a: "Yes. Every mandate includes a replacement period, stated in the written terms. If a placed candidate leaves within that period, we run a replacement search at no additional fee.",
  },
  {
    q: "Can you handle urgent positions?",
    a: "Yes. Because we source through direct outreach rather than waiting for portal applications, we are not dependent on who happens to be applying this week. Timelines are discussed honestly at the briefing stage, based on the role and the market.",
  },
  {
    q: "Which roles and industries do you cover?",
    a: "Five industries: Manufacturing, Electronics, IT & Engineering, BPO & BPM, and Banking & Financial Services — covering technical and non-technical requirements across levels. See the Industries page for role coverage in each.",
  },
  {
    q: "Do you provide salary and market guidance?",
    a: "Yes. As part of any mandate, our consultants advise on compensation benchmarks for the role and location, based on what the market is actually paying — so your offer is competitive before it goes out.",
  },
  {
    q: "Do you charge candidates?",
    a: "Never, at any stage. Our fees are paid entirely by client organisations. Any request for payment from a candidate in our name is fraudulent.",
  },
  {
    q: "How do we begin?",
    a: "Register a vacancy or request a call back through the contact page. A consultant will contact you to understand the requirement in detail before anything else happens.",
  },
];

export default function Faq() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-9"
        >
          <p className="mb-3 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-gold-dark">
            Frequently asked questions
          </p>
          <h2 className="text-[clamp(2rem,3.6vw,3rem)]">For employers.</h2>
        </motion.div>

        <div className="flex flex-col gap-3.5">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-border bg-white px-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[1.02rem] font-bold text-navy marker:content-none">
                {faq.q}
                <ChevronDown
                  size={20}
                  className="flex-none text-gold-dark transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="pb-5 text-[0.95rem] leading-relaxed text-muted">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
