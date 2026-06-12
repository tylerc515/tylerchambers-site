const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/thetylerchambers/", label: "LinkedIn" },
  { href: "https://github.com/tylerc515", label: "GitHub" },
  { href: "https://x.com/thetylerc", label: "X" },
  { href: "https://www.instagram.com/rarestmicrobe", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
        <p className="font-mono">
          &copy; {new Date().getFullYear()} Tyler Chambers
        </p>
        <ul className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
