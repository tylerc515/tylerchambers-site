import type { ComponentType, SVGProps } from "react";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/icons";

export interface SocialLink {
  href: string;
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/thetylerchambers/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  { href: "https://github.com/tylerc515", label: "GitHub", Icon: GitHubIcon },
  { href: "https://x.com/thetylerc", label: "X", Icon: XIcon },
  {
    href: "https://www.instagram.com/rarestmicrobe",
    label: "Instagram",
    Icon: InstagramIcon,
  },
];
