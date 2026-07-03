"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  GoogleMark,
  MicrosoftMark,
  AmazonMark,
  IbmMark,
  InfosysMark,
  AccentureMark,
} from "@/components/LogoMarks";

const LOGOS = [
  { name: "Google", Mark: GoogleMark },
  { name: "Microsoft", Mark: MicrosoftMark },
  { name: "IBM", Mark: IbmMark },
  { name: "Amazon", Mark: AmazonMark },
  { name: "Infosys", Mark: InfosysMark },
  { name: "Accenture", Mark: AccentureMark },
];

export default function TrustedCompanies() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 26,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const loop = [...LOGOS, ...LOGOS];

  return (
    <section className="border-b border-border bg-surface py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="mb-9 text-center text-[0.76rem] font-bold uppercase tracking-[0.15em] text-faint">
          Client companies hiring through People Axis
        </p>
      </div>
      <div
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div ref={trackRef} className="flex w-max items-stretch gap-5">
          {loop.map(({ name, Mark }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-[76px] w-[176px] flex-none items-center justify-center rounded-2xl border border-border bg-white grayscale opacity-70 shadow-[0_4px_14px_rgba(19,32,58,0.03)] transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:shadow-[0_10px_26px_rgba(19,32,58,0.08)]"
            >
              <Mark />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
