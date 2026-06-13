"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = href === "/blog" ? pathname.startsWith("/blog") : pathname === href;

  return (
    <Link
      href={href}
      className={`group relative inline-block py-1 transition-colors duration-150 ${
        isActive ? "text-text" : "text-muted hover:text-text"
      }`}
    >
      {label}
      <span
        className={`absolute inset-x-0 -bottom-1 h-px origin-left bg-accent transition-transform duration-200 motion-reduce:transition-none ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
        aria-hidden
      />
    </Link>
  );
}
