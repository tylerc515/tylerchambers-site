"use client";

import { motion } from "framer-motion";
import type { ProjectBadgeVariant, ProjectEntry } from "@/content/profile";

const BADGE_STYLES: Record<ProjectBadgeVariant, string> = {
  enterprise: "border-border bg-surface text-muted",
  active: "border-accent/40 bg-accent/10 text-accent",
  client: "border-accent/20 bg-transparent text-accent/70",
};

export function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6"
    >
      <span
        className={`inline-flex w-fit rounded-full border px-2.5 py-1 text-xs font-medium ${BADGE_STYLES[project.badgeVariant]}`}
      >
        {project.badge}
      </span>
      <h3 className="font-display text-xl font-semibold tracking-tight">
        {project.name}
      </h3>
      <p className="text-sm text-muted">{project.description}</p>
      <p className="text-sm text-text">
        <span className="font-medium">Role: </span>
        {project.role}
      </p>
      <div className="mt-auto pt-2">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            Visit Project &rarr;
          </a>
        ) : (
          <p className="text-sm text-muted">Proprietary — no public link</p>
        )}
      </div>
    </motion.div>
  );
}
