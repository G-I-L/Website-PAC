import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import Process from "@/components/home/Process";
import WhyPeopleAxis from "@/components/WhyPeopleAxis";
import ForCandidates from "@/components/home/ForCandidates";
import PageCta from "@/components/PageCta";

export const metadata: Metadata = {
  title:
    "Recruitment Agency in Bangalore | Manufacturing, IT, BFSI, BPO Hiring | People Axis Consultants",
  description:
    "People Axis Consultants is a specialist recruitment agency in Bangalore delivering permanent hiring across Manufacturing, Electronics, IT & Engineering, BPO & BPM and BFSI, pan-India. Register a vacancy today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <IndustriesGrid />
      <Process />
      <WhyPeopleAxis />
      <ForCandidates />
      <PageCta />
    </>
  );
}
