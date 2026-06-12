import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { WhatIDo } from "@/components/what-i-do";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Tyler Chambers bridges 15+ years of industrial operations expertise with modern software, data analysis, and AI. DATO Manager at Boiler Services and Inspection. Founder of Neural Code Labs.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
    </>
  );
}
