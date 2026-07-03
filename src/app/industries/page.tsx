import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PageCta from "@/components/PageCta";
import IndustriesList from "@/components/industries/IndustriesList";
import { INDUSTRIES } from "@/components/industries/data";
import AnimatedHeading from "@/components/AnimatedHeading";
import { Layers } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Industries We Serve | Manufacturing, IT, BFSI & BPO Recruitment | People Axis Consultants",
  description:
    "Industry-specialised recruitment across Manufacturing, Electronics, IT & Engineering, BPO & BPM and Banking & Financial Services — technical and non-technical roles, pan-India.",
};

export default function IndustriesPage() {
  return (
    <>
      <header className="border-b border-border bg-gradient-to-b from-white to-surface">
        <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
          <Breadcrumb current="Industries" />
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-cream px-3.5 py-2 text-[0.74rem] font-bold uppercase tracking-[0.13em] text-gold-dark">
            <Layers size={15} />
            Industries we serve
          </p>
          <AnimatedHeading
            as="h1"
            className="max-w-[16ch] text-[clamp(2.3rem,4.3vw,3.7rem)]"
            parts={[
              { text: "Industry-Specialised" },
              { text: "Recruitment Services", accent: true },
            ]}
          />
          <p className="mt-6 max-w-[56ch] text-[1.05rem] leading-relaxed text-muted">
            Every industry demands a distinct recruitment approach — in how
            candidates are sourced, what credentials are verified, and what
            determines a successful placement. Our methodology is tailored
            accordingly for each industry we serve, across technical and
            non-technical requirements.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {INDUSTRIES.map((industry) => (
              <a
                key={industry.id}
                href={`#${industry.id}`}
                className="rounded-full bg-navy/[0.05] px-4 py-2 text-[0.86rem] font-semibold text-slate no-underline transition-colors hover:bg-navy hover:text-white"
              >
                {industry.eyebrow}
              </a>
            ))}
          </div>
        </div>
      </header>

      <IndustriesList />

      <PageCta />
    </>
  );
}
