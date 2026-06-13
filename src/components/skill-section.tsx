"use client";

import { motion } from "framer-motion";
import type { ProficiencyTier, SkillEntry } from "@/content/profile";

const PROFICIENCY_STYLES: Record<ProficiencyTier, string> = {
  Expert: "border-accent/40 bg-accent/10 text-accent",
  Proficient: "border-accent/20 bg-transparent text-accent/70",
  Familiar: "border-border bg-surface text-muted",
};

const CARD_STYLES: Record<ProficiencyTier, string> = {
  Expert:
    "border-border bg-surface p-5 transition-all duration-300 hover:border-accent/50 hover:ring-4 hover:ring-accent/10",
  Proficient: "border-border bg-surface p-4",
  Familiar: "border-border bg-surface p-4",
};

const NAME_STYLES: Record<ProficiencyTier, string> = {
  Expert: "text-base font-semibold text-text",
  Proficient: "text-sm font-medium text-text",
  Familiar: "text-sm font-medium text-text",
};

export function SkillSection({
  title,
  skills,
}: {
  title: string;
  skills: SkillEntry[];
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`flex items-center justify-between gap-3 rounded-lg border ${CARD_STYLES[skill.proficiency]}`}
          >
            <span className={NAME_STYLES[skill.proficiency]}>
              {skill.href ? (
                <a
                  href={skill.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {skill.name}
                </a>
              ) : (
                skill.name
              )}
            </span>
            <span
              className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium ${PROFICIENCY_STYLES[skill.proficiency]}`}
            >
              {skill.proficiency}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
