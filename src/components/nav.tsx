import Link from "next/link";
import { profile } from "@/content/profile";
import { NavLink } from "@/components/nav-link";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-text"
        >
          {profile.name}
        </Link>
        <div className="flex items-center gap-6">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-6 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
