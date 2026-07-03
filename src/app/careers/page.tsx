import type { Metadata } from "next";
import Hero from "@/components/careers/Hero";
import AudienceSplit from "@/components/careers/AudienceSplit";
import TrustedCompanies from "@/components/careers/TrustedCompanies";
import EmailAlertPreview from "@/components/careers/EmailAlertPreview";
import UploadResumeCta from "@/components/careers/UploadResumeCta";

export const metadata: Metadata = {
  title: "Careers | People Axis Consultants — B2B Recruitment Matching",
  description:
    "Upload your resume into the People Axis talent database and get matched automatically when a client company's hiring requirement fits your profile.",
};

export default function CareersPage() {
  return (
    <>
      <Hero />
      <AudienceSplit />
      <TrustedCompanies />
      <EmailAlertPreview />
      <UploadResumeCta />
    </>
  );
}
