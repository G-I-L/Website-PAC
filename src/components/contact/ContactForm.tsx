"use client";

import { useState, type FormEvent } from "react";
import { ClipboardList, ArrowRight, CircleCheck } from "lucide-react";

const TOPICS = [
  "Manufacturing hiring",
  "Electronics hiring",
  "IT & Engineering hiring",
  "BPO & BPM hiring",
  "Banking & Financial Services hiring",
  "I'm a candidate",
  "Other",
];

const inputClass =
  "w-full rounded-[11px] border-[1.5px] border-[#E1E6EE] bg-white px-4 py-3 text-[0.98rem] text-navy outline-none transition-colors placeholder:text-[#9AA3B4] focus:border-gold";

export default function ContactForm() {
  const [summary, setSummary] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => (data.get(key) || "").toString().trim();
    const lines = [
      "PEOPLE AXIS — ENQUIRY",
      "---------------------",
      `Name     : ${get("name") || "—"}`,
      `Company  : ${get("company") || "—"}`,
      `Phone    : ${get("phone") || "—"}`,
      `Enquiry  : ${get("topic") || "—"}`,
      "",
      get("message") || "",
    ];
    setSummary(lines.join("\n"));
  }

  async function handleCopy() {
    if (!summary) return;
    try {
      await navigator.clipboard.writeText(summary);
    } catch {
      // clipboard unavailable — user can still select the text manually
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="overflow-hidden rounded-[20px] border border-border bg-white shadow-[0_24px_60px_rgba(19,32,58,0.1)]">
      <div className="flex items-center justify-between border-b border-border px-6 py-5">
        <span className="inline-flex items-center gap-2.5 text-[1rem] font-bold text-navy">
          <ClipboardList size={18} className="text-gold-dark" />
          Register a vacancy / enquiry
        </span>
      </div>

      {summary ? (
        <div className="p-6">
          <p className="mb-4 inline-flex items-center gap-2 text-[0.86rem] font-bold text-emerald-600">
            <CircleCheck size={20} />
            Enquiry ready
          </p>
          <pre className="mb-4 whitespace-pre-wrap rounded-xl border border-border bg-surface p-4 font-mono text-[0.82rem] leading-relaxed text-navy">
            {summary}
          </pre>
          <p className="mb-4 text-[0.85rem] leading-relaxed text-faint">
            We&rsquo;re not accepting enquiries through the site automatically
            just yet — copy your details and send them to us directly and a
            consultant will follow up.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="flex-1 min-w-[130px] rounded-[11px] bg-gold px-4 py-3 text-[0.92rem] font-bold text-navy transition-colors hover:bg-gold-dark"
            >
              {copied ? "Copied ✓" : "Copy details"}
            </button>
            <button
              type="button"
              onClick={() => setSummary(null)}
              className="flex-1 min-w-[130px] rounded-[11px] border-[1.5px] border-[#E1E6EE] px-4 py-3 text-[0.92rem] font-bold text-navy transition-colors hover:border-navy"
            >
              New enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-[18px] p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-[0.78rem] font-bold text-slate">
                Name *
              </span>
              <input required name="name" placeholder="Your name" className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-2 block text-[0.78rem] font-bold text-slate">
                Company
              </span>
              <input name="company" placeholder="Organisation" className={inputClass} />
            </label>
          </div>
          <label className="block">
            <span className="mb-2 block text-[0.78rem] font-bold text-slate">
              Phone
            </span>
            <input name="phone" placeholder="Contact number" className={inputClass} />
          </label>
          <label className="block">
            <span className="mb-2 block text-[0.78rem] font-bold text-slate">
              I&rsquo;m enquiring about
            </span>
            <select name="topic" defaultValue={TOPICS[0]} className={`${inputClass} cursor-pointer`}>
              {TOPICS.map((topic) => (
                <option key={topic}>{topic}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-[0.78rem] font-bold text-slate">
              Message / role details
            </span>
            <textarea
              name="message"
              rows={4}
              placeholder="Role title · Experience band · Location · Budget (optional)"
              className={`${inputClass} resize-y`}
            />
          </label>
          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center gap-2.5 rounded-[11px] bg-gold px-6 py-4 text-[1rem] font-bold text-navy shadow-[0_8px_20px_rgba(198,162,78,0.28)] transition-all hover:-translate-y-0.5 hover:bg-gold-dark"
          >
            Send Enquiry <ArrowRight size={18} />
          </button>
        </form>
      )}
    </div>
  );
}
