"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const COMPANIES = ["Google", "IBM", "Microsoft", "Infosys", "Amazon", "Accenture"];

export default function TrustedCompanies() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 22,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const loop = [...COMPANIES, ...COMPANIES];

  return (
    <section className="border-b border-border bg-white py-12">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="mb-8 text-center text-[0.76rem] font-bold uppercase tracking-[0.15em] text-faint">
          Client companies hiring through People Axis
        </p>
      </div>
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex w-max gap-16">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-[1.5rem] font-extrabold tracking-tight text-navy/25"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
