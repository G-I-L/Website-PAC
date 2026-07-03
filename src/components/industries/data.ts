import { Factory, Cpu, CodeXml, Headset, Landmark } from "lucide-react";
import type { Industry } from "./IndustryBlock";

export const INDUSTRIES: Industry[] = [
  {
    id: "manufacturing",
    n: "01",
    icon: Factory,
    eyebrow: "Manufacturing",
    title: "Manufacturing Recruitment Services",
    approach:
      "our recruitment process begins with a detailed role specification covering processes, equipment, quality systems and experience requirements. Sourcing is conducted directly within organisations possessing transferable manufacturing processes, and every profile is assessed against the specification prior to shortlist submission.",
    tint: false,
    columns: [
      {
        heading: "Technical roles",
        rows: [
          { label: "Production", roles: "Production Engineer · Shift In-charge · Production Manager" },
          { label: "Process", roles: "Process Engineer · NPI Engineer · Industrial Engineer" },
          { label: "Quality", roles: "Quality Engineer · Supplier Quality · QA/QC Manager" },
          { label: "Engineering", roles: "Mechanical / Electrical Design · Tooling · Maintenance" },
          { label: "Shop floor", roles: "Diploma / ITI Technicians · Machine Operators" },
        ],
      },
      {
        heading: "Non-technical roles",
        rows: [
          { label: "Supply chain", roles: "Procurement · Planning · Stores & Warehouse · Logistics" },
          { label: "Plant support", roles: "Plant HR · Accounts · Administration · EHS" },
        ],
      },
    ],
  },
  {
    id: "electronics",
    n: "02",
    icon: Cpu,
    eyebrow: "Electronics",
    title: "Electronics Industry Recruitment",
    approach:
      "we source across the electronics manufacturing ecosystem — component manufacturers, EMS and box-build operations, and connector and cable assembly units — where skills transfer effectively between organisations. Candidates are evaluated on the processes and standards they have demonstrably handled.",
    tint: true,
    columns: [
      {
        heading: "Technical roles",
        rows: [
          { label: "Production", roles: "SMT / PCB Assembly Engineer · Test Engineer · NPI" },
          { label: "Design", roles: "Electronics Design · Wire Harness · Embedded Hardware" },
          { label: "Quality", roles: "Quality Engineer · Supplier Quality · MIL-spec / QPL exposure where required" },
        ],
      },
      {
        heading: "Non-technical roles",
        rows: [
          { label: "Supply chain", roles: "Supply Chain · Vendor Development · Sourcing" },
          { label: "Support", roles: "Documentation & Compliance · Sales & Application Support" },
        ],
      },
    ],
  },
  {
    id: "it-engineering",
    n: "03",
    icon: CodeXml,
    eyebrow: "IT & Engineering",
    title: "IT & Engineering Recruitment Services",
    approach:
      "technology hiring generates high application volumes with limited relevance. Our consultants screen candidates against the specific technology stack, project environment and team context of each role, ensuring clients evaluate qualified candidates rather than keyword matches.",
    tint: false,
    columns: [
      {
        heading: "Technical roles",
        rows: [
          { label: "Development", roles: "Backend · Frontend · Full Stack · Mobile" },
          { label: "Quality", roles: "QA · Automation · SDET" },
          { label: "Data & infra", roles: "Data Engineering · Analytics · IT Infrastructure & Support" },
          { label: "Engineering svcs", roles: "Embedded · Mechanical / Electrical CAD · Design Services" },
          { label: "Leadership", roles: "Tech Leads · Project / Delivery Managers" },
        ],
      },
      {
        heading: "Non-technical roles",
        rows: [
          { label: "Functional", roles: "Business Analysts · Project Coordinators" },
          { label: "Growth", roles: "Pre-sales · IT Recruiters · Account Management" },
        ],
      },
    ],
  },
  {
    id: "bpo-bpm",
    n: "04",
    icon: Headset,
    eyebrow: "BPO & BPM",
    title: "BPO & BPM Recruitment Services",
    approach:
      "high-volume operations require disciplined talent pipelines. We assess candidates on communication capability, process aptitude and employment stability, and evaluate leadership candidates on demonstrated people management rather than tenure alone.",
    tint: true,
    columns: [
      {
        heading: "Process roles",
        rows: [
          { label: "Operations", roles: "Voice & Non-voice Executives · Chat & Email Support" },
          { label: "F&A", roles: "F&A Operations · Payroll · MIS" },
          { label: "Quality", roles: "Quality Analysts · Process Trainers" },
        ],
      },
      {
        heading: "Leadership & support roles",
        rows: [
          { label: "Leadership", roles: "Team Leaders · Operations Managers" },
          { label: "Enablement", roles: "Workforce Management · Training · HR" },
        ],
      },
    ],
  },
  {
    id: "bfsi",
    n: "05",
    icon: Landmark,
    eyebrow: "Banking & Financial Services",
    title: "Banking & Financial Services Recruitment",
    approach:
      "BFSI recruitment is governed by verified credentials and regulatory compliance. Our screening covers applicable licensing and certifications, product knowledge and background verification before any profile is submitted.",
    tint: false,
    columns: [
      {
        heading: "Functional roles",
        rows: [
          { label: "Core functions", roles: "Credit · Risk · Operations · Compliance" },
          { label: "Specialist", roles: "Treasury Support · Fintech & Digital Banking roles" },
        ],
      },
      {
        heading: "Front-line & support roles",
        rows: [
          { label: "Front-line", roles: "Relationship Managers · Sales Officers · Branch Operations" },
          { label: "Support", roles: "Customer Service · Collections · Back Office" },
        ],
      },
    ],
  },
];
