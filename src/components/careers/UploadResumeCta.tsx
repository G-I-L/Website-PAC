"use client";

import { useRef, useState, type DragEvent } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { UploadCloud, FileCheck2 } from "lucide-react";

export default function UploadResumeCta() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFiles(files: FileList | null) {
    if (files && files[0]) setFileName(files[0].name);
  }

  function onDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  }

  return (
    <section id="upload-resume" className="bg-navy py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-3 text-[0.76rem] font-bold uppercase tracking-[0.15em] text-gold"
        >
          Get started
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
          className="text-[clamp(2.1rem,3.8vw,3rem)] !text-white"
        >
          Upload your resume, we&rsquo;ll take it from there.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
          className={`mx-auto mt-10 flex cursor-pointer flex-col items-center gap-4 rounded-2xl border-2 border-dashed px-8 py-14 transition-colors ${
            dragging
              ? "border-gold bg-white/10"
              : "border-white/20 bg-white/[0.04] hover:border-white/40"
          }`}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
          {fileName ? (
            <>
              <FileCheck2 size={34} className="text-gold" />
              <p className="font-semibold text-white">{fileName}</p>
              <p className="text-[0.85rem] text-white/50">
                Selected — click to choose a different file
              </p>
            </>
          ) : (
            <>
              <UploadCloud size={34} className="text-gold" />
              <p className="font-semibold text-white">
                Drag &amp; drop your resume, or click to browse
              </p>
              <p className="text-[0.85rem] text-white/50">
                PDF or Word, up to 5MB
              </p>
            </>
          )}
        </motion.div>

        <motion.button
          type="button"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          className="mt-8 inline-flex items-center gap-2 rounded-[10px] bg-gold px-7 py-[14px] text-[0.95rem] font-bold text-navy transition-all hover:-translate-y-0.5 hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!fileName}
        >
          <UploadCloud size={18} />
          {fileName ? "Submit Resume" : "Select a file first"}
        </motion.button>
      </div>
    </section>
  );
}
