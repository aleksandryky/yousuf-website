"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav, profile } from "@/data/profile";

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

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const sectionIds = nav.map((item) => item.href.slice(1));

    const updateActive = () => {
      const y = window.scrollY;
      setScrolled(y > 12);

      const offset = 120;
      let current = "";

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
              setActiveHref("");
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

          <nav className="site-nav" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeHref === item.href ? "is-active" : undefined}
                aria-current={activeHref === item.href ? "true" : undefined}
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
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
                {item.label}
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
