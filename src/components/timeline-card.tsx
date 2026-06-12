"use client";

import { motion } from "framer-motion";
import type { ExperienceEntry } from "@/content/profile";

export function TimelineCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative"
    >
      <span className="absolute -left-[2.6rem] top-2 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-display text-xl font-semibold tracking-tight">
          {entry.company}
        </h3>
        <p className="font-mono text-sm text-muted">{entry.period}</p>
      </div>
      <p className="text-sm text-muted">{entry.role}</p>
      <ul className="mt-3 flex flex-col gap-2 text-sm">
        {entry.highlights.map((highlight) => (
          <li key={highlight.description} className="flex gap-2">
            <span className="text-accent">—</span>
            <span>
              {highlight.title && (
                <strong className="text-text">{highlight.title}: </strong>
              )}
              {highlight.description}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
