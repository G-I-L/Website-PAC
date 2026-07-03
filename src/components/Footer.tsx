import Link from "next/link";
import Image from "next/image";

const INDUSTRIES = [
  { href: "/industries#manufacturing", label: "Manufacturing" },
  { href: "/industries#electronics", label: "Electronics" },
  { href: "/industries#it-engineering", label: "IT & Engineering" },
  { href: "/industries#bpo-bpm", label: "BPO & BPM" },
  { href: "/industries#bfsi", label: "Banking & Financial Services" },
];

const COMPANY = [
  { href: "/how-we-work", label: "How we work" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-footer-muted">
      <div className="mx-auto max-w-6xl px-6 pb-[34px] pt-14 md:px-8 md:pt-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-b border-white/[0.09] pb-11 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="mb-5 inline-block rounded-xl bg-white p-3 shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
            >
              <Image
                src="/logo-transparent.png"
                alt="People Axis Consultants"
                width={923}
                height={346}
                className="h-11 w-auto"
              />
            </Link>
            <p className="max-w-[38ch] text-[0.92rem] leading-relaxed text-[#8593ac]">
              Specialist recruitment across Manufacturing, Electronics, IT &amp; Engineering,
              BPO &amp; BPM and BFSI. Pan-India &amp; international, headquartered in
              Bengaluru.
            </p>
          </div>

          <div>
            <p className="mb-4 text-[0.74rem] font-bold tracking-[0.1em] text-footer-heading uppercase">
              Industries
            </p>
            <ul className="flex flex-col gap-[11px]">
              {INDUSTRIES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.92rem] transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[0.74rem] font-bold tracking-[0.1em] text-footer-heading uppercase">
              Company
            </p>
            <ul className="flex flex-col gap-[11px]">
              {COMPANY.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.92rem] transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[0.74rem] font-bold tracking-[0.1em] text-footer-heading uppercase">
              Office
            </p>
            <p className="text-[0.92rem] leading-relaxed">
              IndiQube Aura, Bommanahalli
              <br />
              Bengaluru, Karnataka
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 pt-6">
          <p className="text-[0.82rem] text-footer-heading">
            &copy; 2026 People Axis Consultants
          </p>
          <p className="text-[0.82rem] text-footer-heading">
            Our group: People Axis Consultants ·{" "}
            <a
              href="https://pac.international"
              className="text-footer-muted transition-colors hover:text-gold"
            >
              GIL — Governance Intelligence &rarr;
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
