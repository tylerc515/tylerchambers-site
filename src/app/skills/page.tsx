import type { Metadata } from "next";
import { profile, skillCategories } from "@/content/profile";
import { SkillSection } from "@/components/skill-section";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical and operational skills spanning NDT quality assurance, data analysis, Python, JavaScript, AI tooling, digital marketing, and more.",
};

export default function Skills() {
  return (
    <div className="container flex flex-col gap-section py-section">
      <PageHeader title="Skills" subtitle="What I bring to the table" />

      {skillCategories.map((category) => (
        <SkillSection
          key={category}
          title={category}
          skills={profile.skills.filter((skill) => skill.category === category)}
        />
      ))}
    </div>
  );
}
