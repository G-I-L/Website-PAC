"use client";

import { motion } from "framer-motion";
import {
  UploadCloud,
  Database,
  GitMerge,
  Briefcase,
  Users,
  Sparkles,
  UserCheck,
  Mail,
  MousePointerClick,
  ClipboardCheck,
  Handshake,
  type LucideIcon,
} from "lucide-react";

type Step = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const BEFORE_MERGE: Step[] = [
  {
    icon: UploadCloud,
    title: "Job seeker uploads resume",
    desc: "A candidate creates a profile and submits their resume on the Careers page.",
  },
  {
    icon: Database,
    title: "Stored in the People Axis database",
    desc: "The resume is parsed, tagged by skill, and added to our searchable talent pool.",
  },
];

const MERGE_INPUTS: Step[] = [
  {
    icon: Briefcase,
    title: "Client posts a hiring requirement",
    desc: "e.g. “We need 50 AI Engineers.”",
  },
  {
    icon: Users,
    title: "Candidate pool is ready",
    desc: "Every stored profile becomes searchable against this mandate.",
  },
];

const AFTER_MERGE: Step[] = [
  {
    icon: Sparkles,
    title: "AI / skill matching",
    desc: "We run the requirement against the database to shortlist the closest-fit candidates.",
  },
  {
    icon: UserCheck,
    title: "Matching candidates found",
    desc: "The system flags every profile that meets the client’s criteria.",
  },
  {
    icon: Mail,
    title: "Automatic email sent",
    desc: "Matched candidates get an email the moment the opening is identified — no searching required.",
  },
  {
    icon: MousePointerClick,
    title: "Candidate applies",
    desc: "Interested candidates confirm directly from the email.",
  },
  {
    icon: ClipboardCheck,
    title: "Recruiter reviews resume",
    desc: "Our team screens and validates before anything reaches the client.",
  },
  {
    icon: Handshake,
    title: "Interview → Offer → Joining",
    desc: "Shortlisted candidates go through the client’s process to offer and onboarding.",
  },
];

function StepRow({
  step,
  index,
  last = false,
}: {
  step: Step;
  index: number;
  last?: boolean;
}) {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 6) * 0.05 }}
      className="relative flex gap-5 pb-10 last:pb-0"
    >
      <div className="flex flex-none flex-col items-center">
        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border-2 border-gold bg-white text-gold-dark">
          <Icon size={19} />
        </span>
        {!last && (
          <span className="mt-2 w-px flex-1 bg-gradient-to-b from-gold/50 to-border" />
        )}
      </div>
      <div className="pt-1.5">
        <h3 className="text-[1.05rem]">{step.title}</h3>
        <p className="mt-1.5 max-w-[46ch] text-[0.92rem] leading-relaxed text-muted">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-gold-dark">
            How it works
          </p>
          <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)]">
            A B2B matching pipeline, not a job board.
          </h2>
          <p className="mx-auto mt-4 max-w-[54ch] text-[1rem] leading-relaxed text-muted">
            You don&rsquo;t apply into the dark. Your resume sits in our
            database until a client&rsquo;s hiring requirement matches it —
            then we come to you.
          </p>
        </motion.div>

        <div>
          {BEFORE_MERGE.map((step, i) => (
            <StepRow key={step.title} step={step} index={i} />
          ))}

          {/* Merge point: client requirement + candidate database feed the same matching step */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex gap-5 pb-10"
          >
            <div className="flex flex-none flex-col items-center">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border-2 border-gold bg-white text-gold-dark">
                <GitMerge size={19} />
              </span>
              <span className="mt-2 w-px flex-1 bg-gradient-to-b from-gold/50 to-border" />
            </div>
            <div className="flex-1 pt-1.5">
              <p className="mb-3 text-[0.78rem] font-bold uppercase tracking-wider text-faint">
                Two inputs meet here
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {MERGE_INPUTS.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="rounded-xl border border-border bg-white p-4"
                    >
                      <Icon size={17} className="mb-2 text-gold-dark" />
                      <p className="text-[0.92rem] font-bold text-navy">
                        {step.title}
                      </p>
                      <p className="mt-1 text-[0.85rem] leading-snug text-muted">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {AFTER_MERGE.map((step, i) => (
            <StepRow
              key={step.title}
              step={step}
              index={i}
              last={i === AFTER_MERGE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
