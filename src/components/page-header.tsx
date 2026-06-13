"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-4 pt-6 sm:pt-12"
    >
      <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
        {title}
      </h1>
      <div className="h-px w-16 bg-accent" aria-hidden="true" />
      <p className="max-w-xl text-lg text-muted">{subtitle}</p>
    </motion.div>
  );
}
