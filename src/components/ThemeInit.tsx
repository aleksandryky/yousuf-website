"use client";

import { useEffect } from "react";

const STORAGE_KEY = "yousuf-theme";

function resolveTheme(): "light" | "dark" {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeInit() {
  useEffect(() => {
    const apply = () => {
      document.documentElement.setAttribute("data-theme", resolveTheme());
    };

    apply();

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!window.localStorage.getItem(STORAGE_KEY)) apply();
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return null;
}

export function ThemeToggle() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolveTheme());
  }, []);

  const toggle = () => {
    const next = resolveTheme() === "dark" ? "light" : "dark";
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle color theme"
    >
      <span className="theme-toggle__sun" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 4.2a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.2a1 1 0 0 1 1-1Zm0 11.3a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7.8-4.5a1 1 0 0 1-1 1H17a1 1 0 1 1 0-2h1.8a1 1 0 0 1 1 1ZM7 12a1 1 0 0 1-1 1H4.2a1 1 0 1 1 0-2H6a1 1 0 0 1 1 1Zm10.4 5.4a1 1 0 0 1-1.4 0l-1.3-1.3a1 1 0 1 1 1.4-1.4l1.3 1.3a1 1 0 0 1 0 1.4ZM8.3 9.7a1 1 0 0 1-1.4 0L5.6 8.4A1 1 0 0 1 7 7l1.3 1.3a1 1 0 0 1 0 1.4Zm0 7.1a1 1 0 0 1 0-1.4L9.6 14a1 1 0 1 1 1.4 1.4l-1.3 1.3a1 1 0 0 1-1.4 0Zm7.1-7.1a1 1 0 0 1 0-1.4L16.7 7A1 1 0 1 1 18.1 8.4L16.8 9.7a1 1 0 0 1-1.4 0ZM12 17a1 1 0 0 1 1 1v1.8a1 1 0 1 1-2 0V18a1 1 0 0 1 1-1Z"
          />
        </svg>
      </span>
      <span className="theme-toggle__moon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M14.6 3.2a8.8 8.8 0 1 0 6.2 14.4A8.9 8.9 0 0 1 14.6 3.2Z"
          />
        </svg>
      </span>
    </button>
  );
}
