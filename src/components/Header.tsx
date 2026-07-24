"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, profile } from "@/data/profile";

type NavIcon = (typeof nav)[number]["label"];

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="btn__icon">
      <path
        fill="currentColor"
        d="M12 3a1 1 0 0 1 1 1v9.17l2.59-2.58a1 1 0 1 1 1.41 1.42l-4.3 4.29a1 1 0 0 1-1.4 0l-4.3-4.29a1 1 0 1 1 1.41-1.42L11 13.17V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1 1v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
}

function NavItemIcon({ label }: { label: NavIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
    className: "site-nav__icon",
  };

  if (label === "About") {
    return (
      <svg {...common}>
        <path
          d="M4.5 10.5 12 4l7.5 6.5V19a1.5 1.5 0 0 1-1.5 1.5h-4.2v-5.2h-3.6V20.5H6A1.5 1.5 0 0 1 4.5 19v-8.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (label === "Skills") {
    return (
      <svg {...common}>
        <path
          d="m8 8-4 4 4 4M16 8l4 4-4 4M13.2 6.5 10.8 17.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (label === "Tools") {
    return (
      <svg {...common}>
        <path
          d="M14.7 6.3a3.6 3.6 0 0 0 2.9 2.9l1.9-1.9a4.8 4.8 0 0 1-6.7 6.7L7.5 19.3a2.1 2.1 0 0 1-3-3l5.3-5.3a4.8 4.8 0 0 1 6.7-6.7l-1.8 2Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (label === "Experience") {
    return (
      <svg {...common}>
        <path
          d="M8.5 7V5.8A1.8 1.8 0 0 1 10.3 4h3.4A1.8 1.8 0 0 1 15.5 5.8V7M4.5 9.5h15v8.2A1.8 1.8 0 0 1 17.7 19.5H6.3A1.8 1.8 0 0 1 4.5 17.7V9.5ZM4.5 9.5 6 7h12l1.5 2.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (label === "Work") {
    return (
      <svg {...common}>
        <path
          d="M4.5 8.2h6.2l1.6 1.8H19.5v7.5A1.5 1.5 0 0 1 18 19H6a1.5 1.5 0 0 1-1.5-1.5V8.2Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 8.2V6.8A1.3 1.3 0 0 1 5.8 5.5h3.2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (label === "Proof") {
    return (
      <svg {...common}>
        <path
          d="M8 5.5h8v2.2c0 2.2-1.8 4-4 4s-4-1.8-4-4V5.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M8 7H5.8A1.8 1.8 0 0 1 4 5.2V5h4M16 7h2.2A1.8 1.8 0 0 0 20 5.2V5h-4M12 11.7V14M9.5 18.5h5M10.5 14h3l.8 4.5h-4.6L10.5 14Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m4.8 7.2 7.2 5.2 7.2-5.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#about");

  useEffect(() => {
    const sectionIds = nav.map((item) => item.href.slice(1));

    const updateActive = () => {
      const y = window.scrollY;
      setScrolled(y > 12);

      const offset = 120;
      let current = "#about";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) {
          current = `#${id}`;
        }
      }

      setActiveHref(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    closeMenu();
  };

  return (
    <header className={`site-header ${scrolled || open ? "is-scrolled" : ""}`}>
      <div className="site-header__shell">
        <div className="site-header__inner">
          <a
            href="#top"
            className="site-logo"
            onClick={() => {
              setActiveHref("#about");
              closeMenu();
            }}
          >
            <span className="site-logo__photo">
              <Image
                src={profile.photo}
                alt=""
                width={44}
                height={44}
                priority
                className="site-logo__img"
              />
            </span>
            <span className="site-logo__text">
              <span className="site-logo__name">{profile.name}</span>
              <span className="site-logo__role">{profile.title}</span>
            </span>
          </a>

          <span className="site-header__divider" aria-hidden="true" />

          <nav className="site-nav" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeHref === item.href ? "is-active" : undefined}
                aria-current={activeHref === item.href ? "true" : undefined}
                onClick={() => handleNavClick(item.href)}
              >
                <NavItemIcon label={item.label} />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <a className="btn btn--primary btn--sm site-header__cv" href={profile.cvPath} download>
              <DownloadIcon />
              Download CV
            </a>
            <button
              type="button"
              className={`nav-toggle${open ? " is-open" : ""}`}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`mobile-nav${open ? " is-open" : ""}`}
          hidden={!open}
        >
          <nav aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeHref === item.href ? "is-active" : undefined}
                aria-current={activeHref === item.href ? "true" : undefined}
                onClick={() => handleNavClick(item.href)}
              >
                <NavItemIcon label={item.label} />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
          <a className="btn btn--primary" href={profile.cvPath} download onClick={closeMenu}>
            <DownloadIcon />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
