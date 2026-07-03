import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import PageCta from "@/components/PageCta";
import Timeline from "@/components/how-we-work/Timeline";
import Commercials from "@/components/how-we-work/Commercials";
import AfterShortlist from "@/components/how-we-work/AfterShortlist";
import Faq from "@/components/how-we-work/Faq";
import AnimatedHeading from "@/components/AnimatedHeading";
import { Route } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Recruitment Process | Permanent Staffing Methodology | People Axis Consultants",
  description:
    "A four-step recruitment process: written specification, named search plan, direct outreach, screened shortlist. Success-fee only, replacement assurance in writing.",
};

export default function HowWeWorkPage() {
  return (
    <>
      <header className="border-b border-border bg-gradient-to-b from-white to-surface">
        <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
          <Breadcrumb current="How we work" />
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-cream px-3.5 py-2 text-[0.74rem] font-bold uppercase tracking-[0.13em] text-gold-dark">
            <Route size={15} />
            How we work
          </p>
          <AnimatedHeading
            as="h1"
            className="max-w-[16ch] text-[clamp(2.3rem,4.3vw,3.7rem)]"
            parts={[
              { text: "A Structured" },
              { text: "Recruitment Methodology", accent: true },
            ]}
          />
          <p className="mt-6 max-w-[56ch] text-[1.05rem] leading-relaxed text-muted">
            Our four-stage process ensures every mandate is executed with
            consistency — from role specification through search planning,
            direct sourcing and pre-assessed shortlist delivery, supported
            through interview coordination, offer management and
            post-placement follow-through.
          </p>
        </div>
      </header>

      <Timeline />
      <Commercials />
      <AfterShortlist />
      <Faq />
      <PageCta />
    </>
  );
}
