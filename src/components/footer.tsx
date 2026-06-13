import { GitHubIcon, InstagramIcon, LinkedInIcon, XIcon } from "@/components/icons";

const SOCIAL_LINKS = [
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

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
        <p className="font-mono">
          &copy; {new Date().getFullYear()} Tyler Chambers
        </p>
        <ul className="flex items-center gap-5">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-muted transition-colors duration-150 hover:text-accent motion-reduce:transition-none"
              >
                <Icon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
