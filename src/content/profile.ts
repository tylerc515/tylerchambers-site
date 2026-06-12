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
};
