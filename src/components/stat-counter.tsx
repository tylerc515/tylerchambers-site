"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useMotionValue } from "framer-motion";
import type { Stat } from "@/content/profile";

export function StatCounter({ value, suffix = "", label }: Stat) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView || typeof value !== "number") return;

    const controls = animate(motionValue, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [isInView, value, motionValue]);

  return (
    <div className="flex flex-col gap-1">
      <p ref={ref} className="font-mono text-4xl font-semibold text-accent sm:text-5xl">
        {typeof value === "number" ? `${displayValue}${suffix}` : value}
      </p>
      <p className="text-sm text-muted">{label}</p>
    </div>
  );
}
