"use client";

import { MoonIcon, SunIcon } from "@/components/icons";
import { THEME_COOKIE_NAME, type Theme } from "@/lib/theme";

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const current: Theme =
      (root.getAttribute("data-theme") as Theme | null) ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    const next: Theme = current === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", next);
    document.cookie = `${THEME_COOKIE_NAME}=${next}; path=/; max-age=31536000; SameSite=Lax`;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="theme-toggle"
    >
      <SunIcon className="theme-toggle-icon theme-toggle-sun" />
      <MoonIcon className="theme-toggle-icon theme-toggle-moon" />
    </button>
  );
}
