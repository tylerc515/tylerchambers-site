export interface Stat {
  value: number | string;
  suffix?: string;
  label: string;
}

export interface FocusArea {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}

export interface ExperienceHighlight {
  title?: string;
  description: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  highlights: ExperienceHighlight[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  year: string;
  note?: string;
}

export const skillCategories = [
  "Industrial & Operations",
  "Data & Productivity Tools",
  "Software & Development",
  "AI, Marketing & Business",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export type ProficiencyTier = "Expert" | "Proficient" | "Familiar";

export interface SkillEntry {
  name: string;
  category: SkillCategory;
  proficiency: ProficiencyTier;
  href?: string;
}

export type ProjectBadgeVariant = "enterprise" | "active" | "client";

export interface ProjectEntry {
  name: string;
  description: string;
  role: string;
  href?: string;
  badge: string;
  badgeVariant: ProjectBadgeVariant;
}

export const profile = {
  name: "Tyler Chambers",
  tagline: "Where industrial expertise meets modern technology",
  contactEmail: "tylerc515@gmail.com",
  stats: [
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 10, suffix: "+", label: "Years in Data & Software" },
    { value: 1, label: "Enterprise Platform Built" },
    { value: "Multiple", label: "Businesses Founded" },
  ] satisfies Stat[],
  focusAreas: [
    {
      title: "Industrial Operations",
      description:
        "15+ years in NDT quality assurance and quality control across pulp & paper and heavy industry, reading systems, data, and risk the way the floor actually runs.",
    },
    {
      title: "Data & Software",
      description:
        "Designed and oversaw development of TRACE, an enterprise NDT analysis platform, alongside modern AI-driven tooling for data-heavy operations.",
      href: "https://www.bsitrace.com",
      linkLabel: "View TRACE",
    },
    {
      title: "Business & Marketing",
      description:
        "Runs Neural Code Labs, providing marketing, consulting, and software for businesses that need both technical depth and commercial clarity.",
    },
  ] satisfies FocusArea[],
  resumeUrl: "/resume.pdf",
  workExperience: [
    {
      company: "Boiler Services and Inspection LLC",
      role: "DATO Manager / IT Manager / TRACE Architect",
      period: "2013-Present",
      highlights: [
        {
          title: "DATO",
          description:
            "Manages NDT data quality and analysis, oversees NDT contractors for scope completion and scheduling, and ensures all inspection items are captured.",
        },
        {
          title: "TRACE Platform",
          description:
            "Designed the full architecture of an enterprise NDT data analysis and reporting platform and oversaw its complete development and production deployment. It's now in active use across the pulp and paper industry.",
        },
        {
          title: "IT Operations",
          description: "Handles all internal IT operations for BSI.",
        },
      ],
    },
    {
      company: "Monticello Aluminum Company",
      role: "Installation Technician",
      period: "2008-2012",
      highlights: [
        {
          description:
            "Installed siding, windows, metal roofs, and walkway covers.",
        },
      ],
    },
    {
      company: "Hood Packaging",
      role: "Shafter/Tuber Operator",
      period: "2006-2008",
      highlights: [
        {
          description:
            "Started as a stacker and was promoted into a machine operator role.",
        },
      ],
    },
    {
      company: "Monticello Exxon",
      role: "Light Mechanic",
      period: "2004-2006",
      highlights: [
        {
          description: "Oil changes, tire rotation, and general mechanical work.",
        },
      ],
    },
  ] satisfies ExperienceEntry[],
  education: [
    {
      institution: "University of Arkansas at Monticello",
      degree: "Bachelor of Science, Computer Information Systems",
      year: "2014",
      note: "Started on a nursing track before making a deliberate pivot to Computer Information Systems.",
    },
  ] satisfies EducationEntry[],
  skills: [
    {
      name: "NDT Data Quality & Analysis",
      category: "Industrial & Operations",
      proficiency: "Expert",
    },
    {
      name: "TRACE Platform",
      category: "Industrial & Operations",
      proficiency: "Expert",
      href: "https://bsitrace.com",
    },
    {
      name: "Contractor Management & Scheduling",
      category: "Industrial & Operations",
      proficiency: "Expert",
    },
    {
      name: "Inspection Scope Management",
      category: "Industrial & Operations",
      proficiency: "Expert",
    },
    {
      name: "Pulp & Paper Industry Operations",
      category: "Industrial & Operations",
      proficiency: "Expert",
    },
    {
      name: "Microsoft Excel",
      category: "Data & Productivity Tools",
      proficiency: "Expert",
    },
    {
      name: "Microsoft Word",
      category: "Data & Productivity Tools",
      proficiency: "Expert",
    },
    {
      name: "Microsoft Project",
      category: "Data & Productivity Tools",
      proficiency: "Expert",
    },
    {
      name: "VBA & Excel Automation",
      category: "Data & Productivity Tools",
      proficiency: "Proficient",
    },
    {
      name: "Python Scripting & Workflow Automation",
      category: "Data & Productivity Tools",
      proficiency: "Proficient",
    },
    {
      name: "Web Development & Design",
      category: "Software & Development",
      proficiency: "Proficient",
    },
    {
      name: "SQL",
      category: "Software & Development",
      proficiency: "Familiar",
    },
    {
      name: "HTML & CSS",
      category: "Software & Development",
      proficiency: "Familiar",
    },
    {
      name: "JavaScript / TypeScript",
      category: "Software & Development",
      proficiency: "Familiar",
    },
    {
      name: "C#",
      category: "Software & Development",
      proficiency: "Familiar",
    },
    {
      name: "AI Tooling & Workflow Automation",
      category: "AI, Marketing & Business",
      proficiency: "Expert",
    },
    {
      name: "Prompt Engineering",
      category: "AI, Marketing & Business",
      proficiency: "Expert",
    },
    {
      name: "Digital Marketing",
      category: "AI, Marketing & Business",
      proficiency: "Proficient",
    },
    {
      name: "Google Ads / Meta Ads",
      category: "AI, Marketing & Business",
      proficiency: "Proficient",
    },
    {
      name: "E-commerce & Dropshipping",
      category: "AI, Marketing & Business",
      proficiency: "Proficient",
    },
    {
      name: "Business Operations & Consulting",
      category: "AI, Marketing & Business",
      proficiency: "Proficient",
    },
  ] satisfies SkillEntry[],
  projects: [
    {
      name: "TRACE Platform",
      description:
        "Trending, Reporting, Analysis & Condition Evaluation. Enterprise NDT data analysis platform built for the pulp and paper industry, currently in active use.",
      role: "Designed the full system architecture, oversaw complete development and production deployment.",
      href: "https://bsitrace.com",
      badge: "Enterprise Software",
      badgeVariant: "enterprise",
    },
    {
      name: "Neural Code Labs",
      description:
        "AI automation, digital marketing, and consulting firm. Helps businesses cut out repetitive work and grow using tailored AI solutions.",
      role: "Founder",
      href: "https://www.neuralcodelabs.com",
      badge: "Active Venture",
      badgeVariant: "active",
    },
    {
      name: "Trophy Big Buck Classic",
      description:
        "Digital marketing and ads management for KMK Productions' hunting board game.",
      role: "Marketing Director and Web Developer. Manages Google and Meta ad campaigns and leads marketing strategy. Also led a full website rebuild.",
      href: "https://www.huntingboardgames.net",
      badge: "Active Client",
      badgeVariant: "client",
    },
  ] satisfies ProjectEntry[],
};
