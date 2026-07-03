import type { Metadata } from "next";
import { PhoneCall, Mail, Phone, MapPin, UserRound, ShieldAlert } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Register a Vacancy | People Axis Consultants, Bangalore",
  description:
    "Register a vacancy or request a call back. Headquartered at IndiQube Aura, Bommanahalli, Bengaluru; serving clients pan-India and internationally.",
};

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: "hello@peopleaxisconsultants.com" },
  { icon: Phone, label: "Phone", value: "+91 (details to be confirmed)" },
  {
    icon: MapPin,
    label: "Office",
    value: "IndiQube Aura, Bommanahalli, Bengaluru, Karnataka",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-surface">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-14 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-cream px-3.5 py-2 text-[0.74rem] font-bold uppercase tracking-[0.14em] text-gold-dark">
              <PhoneCall size={15} />
              Contact
            </p>
            <h1 className="max-w-[15ch] text-[clamp(1.9rem,3.8vw,3rem)]">
              Get in Touch With <span className="text-gold">Our Team</span>
            </h1>
            <p className="mt-5 max-w-[48ch] text-[1.05rem] leading-relaxed text-muted">
              Register a vacancy or request a call back for a confidential
              discussion about your hiring needs. One of our consultants
              will contact you to understand the requirement in detail.
            </p>

            <div className="mt-8 flex flex-col gap-3.5">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-white px-5 py-4"
                  >
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-cream text-gold-dark">
                      <Icon size={21} />
                    </span>
                    <div>
                      <div className="mb-0.5 text-[0.72rem] font-bold uppercase tracking-wider text-faint">
                        {item.label}
                      </div>
                      <div className="text-[0.96rem] font-semibold leading-snug text-navy">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section id="candidates" className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div className="flex h-full min-h-[220px] flex-col items-center justify-center rounded-2xl border border-border bg-surface p-10 text-center">
            <UserRound size={40} className="mb-3 text-gold-dark" />
            <p className="text-[0.95rem] font-semibold text-slate">
              We&rsquo;d love to hear from you
            </p>
          </div>
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-gold-dark">
              <UserRound size={15} />
              For candidates
            </p>
            <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)]">
              Looking for your next role?
            </h2>
            <p className="mt-4 max-w-[52ch] text-[1.02rem] leading-relaxed text-muted">
              Send us your profile with your preferred role type and
              location. Our consultants will contact you when a matching
              position opens — and present it to you honestly and
              completely: the work, the environment, the terms.
            </p>
            <div className="mt-5 flex max-w-[52ch] items-start gap-3 rounded-xl border border-[#F0E4C8] bg-[#FBF6EA] px-[18px] py-4">
              <ShieldAlert size={20} className="mt-0.5 flex-none text-gold-dark" />
              <p className="text-[0.9rem] leading-relaxed text-[#7A6320]">
                We never charge candidates at any stage of the process. Our
                fees are paid entirely by client organisations. Any request
                for payment made in our name is fraudulent and should be
                reported to us directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
