import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import WhyPeopleAxis from "@/components/WhyPeopleAxis";
import PageCta from "@/components/PageCta";
import { Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Specialist Recruitment Consultants | People Axis Consultants",
  description:
    "People Axis Consultants is a founder-led Bengaluru recruitment firm built on two decades in HR advisory, talent management and operations. Serving clients pan-India and internationally.",
};

const INFO = [
  { label: "Based", value: "IndiQube Aura, Bommanahalli, Bengaluru" },
  {
    label: "Industries",
    value: "Manufacturing · Electronics · IT & Engineering · BPO & BPM · BFSI",
  },
  { label: "Reach", value: "Pan-India · International hiring support" },
  { label: "Requirements", value: "Technical & non-technical, across levels" },
  { label: "Engagement", value: "Per-role mandates · Success-fee only" },
  { label: "Leadership", value: "Founder-led · 20+ yrs in HR & ops" },
];

export default function AboutPage() {
  return (
    <>
      <header className="border-b border-border bg-gradient-to-b from-white to-surface">
        <div className="mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-16">
          <Breadcrumb current="About" />
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-cream px-3.5 py-2 text-[0.74rem] font-bold uppercase tracking-[0.13em] text-gold-dark">
            <Compass size={15} />
            About the firm
          </p>
          <h1 className="max-w-[20ch] text-[clamp(1.9rem,3.7vw,3rem)]">
            A Recruitment Firm Built on Two Decades of{" "}
            <span className="text-gold">Talent and Operations Leadership</span>
          </h1>
        </div>
      </header>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1.15fr_0.85fr] md:px-8">
          <div className="flex flex-col gap-5 text-[1.05rem] leading-relaxed text-slate">
            <p>
              People Axis Consultants is a Bengaluru firm built on two
              decades in HR advisory, talent management and operations —
              including years spent building and managing large teams across
              multiple branches, and hiring for them — with additional depth
              in finance and governance. We have sat on your side of the
              table: writing the specification, sitting through interviews
              that shouldn&rsquo;t have happened, and paying for shortlists
              that were really just search results.
            </p>
            <p>
              So we run recruitment the way a well-managed plant runs
              production: a written specification before work begins, a
              named plan for where candidates will come from, and a review
              of every profile before it ships. We present roles to
              candidates honestly and completely — the work, the
              environment, the terms — because a placement that surprises
              either side is a failure, whatever the invoice says.
            </p>
            <p>
              We are headquartered in Bengaluru and serve clients across
              India, with support for international hiring. Five
              industries, technical and non-technical requirements — done
              properly, wherever the requirement is.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface px-6 py-2">
            <ul className="list-none">
              {INFO.map((item, i) => (
                <li
                  key={item.label}
                  className={`flex flex-col justify-between gap-1.5 py-4 sm:flex-row sm:items-baseline sm:gap-5 ${
                    i < INFO.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="flex-shrink-0 text-[0.7rem] font-bold uppercase tracking-wider text-faint">
                    {item.label}
                  </span>
                  <span className="text-[0.92rem] font-semibold text-navy sm:text-right">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <WhyPeopleAxis />
      <PageCta />
    </>
  );
}
