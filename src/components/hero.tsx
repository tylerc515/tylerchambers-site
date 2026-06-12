"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { profile } from "@/content/profile";
import { StatCounter } from "@/components/stat-counter";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="container flex flex-col gap-16 py-section"
    >
      <div className="flex flex-col gap-6">
        <motion.h1
          variants={item}
          className="font-display text-5xl font-semibold tracking-tight sm:text-7xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p variants={item} className="max-w-xl text-lg text-muted sm:text-xl">
          {profile.tagline}
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/experience"
            className="rounded-md bg-text px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
      <motion.div variants={item} className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        {profile.stats.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </motion.div>
    </motion.section>
  );
}
