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

export const profile = {
  name: "Tyler Chambers",
  tagline: "Where industrial expertise meets modern technology",
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
        "15+ years in NDT quality assurance and quality control across pulp & paper and heavy industry — reading systems, data, and risk the way the floor actually runs.",
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
      period: "2013 – Present",
      highlights: [
        {
          title: "DATO",
          description:
            "Manages NDT data quality and analysis, oversees NDT contractors for scope completion and scheduling, and ensures all inspection items are captured.",
        },
        {
          title: "TRACE Platform",
          description:
            "Designed the full architecture of an enterprise NDT data analysis and reporting platform, oversaw its complete development and production deployment — now in active use across the pulp and paper industry.",
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
      period: "2008 – 2012",
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
      period: "2006 – 2008",
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
      period: "2004 – 2006",
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
};
