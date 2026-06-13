"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { profile } from "@/content/profile";
import { StatCounter } from "@/components/stat-counter";
import { HeroBackground } from "@/components/hero-background";

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
    <section className="relative overflow-hidden">
      <HeroBackground />
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="container relative flex flex-col gap-16 py-section"
      >
        <div className="flex flex-col gap-6">
          <motion.h1
            variants={item}
            className="font-display text-7xl font-semibold leading-[0.9] tracking-tighter sm:text-8xl md:text-9xl lg:text-[9rem] xl:text-[10rem]"
          >
            {profile.name}
          </motion.h1>
          <motion.div variants={item} aria-hidden className="h-px w-16 bg-accent" />
          <motion.p variants={item} className="max-w-xl text-lg text-muted sm:text-xl">
            {profile.tagline}
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/experience"
              className="btn-interactive rounded-md bg-text px-6 py-3 text-sm font-medium text-bg hover:opacity-90"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="btn-interactive rounded-md border border-border px-6 py-3 text-sm font-medium text-text hover:border-accent hover:text-accent"
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
      </motion.div>
    </section>
  );
}
