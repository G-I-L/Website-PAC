"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/industries", label: "Industries" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-navy/[0.06] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-[84px] max-w-6xl items-center justify-between px-6 sm:h-[96px] md:h-[108px] md:px-8">
        <Link href="/" className="inline-flex flex-none items-center">
          <Image
            src="/logo-transparent.png"
            alt="People Axis Consultants"
            width={923}
            height={346}
            priority
            className="h-14 w-auto sm:h-16 md:h-20"
          />
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-1 rounded-lg border-[1.5px] border-navy/20 px-3.5 py-2 text-sm font-bold text-navy md:hidden"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
          Menu
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[0.95rem] transition-colors hover:text-gold ${
                  link.href === "/careers"
                    ? "font-bold text-gold"
                    : "font-medium text-slate"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="inline-block rounded-[9px] bg-gold px-5 py-[11px] text-[0.92rem] font-bold text-navy transition-all hover:-translate-y-px hover:bg-gold-dark"
            >
              Register a Vacancy
            </Link>
          </li>
        </ul>
      </div>

      {open && (
        <ul className="flex flex-col gap-0 border-t border-border bg-white py-2 shadow-lg md:hidden">
          {LINKS.map((link) => (
            <li key={link.href} className="border-t border-[#f0f2f6] first:border-none">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-7 py-[15px] ${
                  link.href === "/careers" ? "font-bold text-gold" : "font-medium text-slate"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="px-6 pb-4 pt-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-block rounded-[9px] bg-gold px-5 py-[11px] text-[0.92rem] font-bold text-navy"
            >
              Register a Vacancy
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
