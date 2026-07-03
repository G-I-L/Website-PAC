import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-surface px-6 py-24 text-center">
      <p className="mb-3 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-gold-dark">
        Work in progress
      </p>
      <h1 className="max-w-[18ch] text-[clamp(2rem,4.5vw,3rem)]">
        People Axis Consultants — new site, in build.
      </h1>
      <p className="mt-5 max-w-[52ch] text-[1rem] leading-relaxed text-muted">
        We&rsquo;re rebuilding the site page by page. The Careers experience
        is live first — the rest of the site follows next.
      </p>
      <Link
        href="/careers"
        className="mt-8 inline-flex items-center gap-2 rounded-[10px] bg-gold px-6 py-[13px] text-[0.95rem] font-bold text-navy transition-all hover:-translate-y-0.5 hover:bg-gold-dark"
      >
        View Careers page <ArrowRight size={16} />
      </Link>
    </section>
  );
}
