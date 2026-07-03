import Link from "next/link";

export default function Breadcrumb({ current }: { current: string }) {
  return (
    <p className="mb-7 text-[0.86rem] text-faint">
      <Link href="/" className="text-faint no-underline hover:text-gold">
        Home
      </Link>
      &nbsp;/&nbsp;
      <span className="font-semibold text-slate">{current}</span>
    </p>
  );
}
