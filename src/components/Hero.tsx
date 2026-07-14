import Image from "next/image";
import { heroHighlights, profile, trustedTech } from "@/data/profile";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="hero__pin">
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="btn__icon">
      <path
        fill="currentColor"
        d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l8 5.2 8-5.2V7H4Zm16 10V9.5l-7.4 4.8a1 1 0 0 1-1.2 0L4 9.5V17h16Z"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="btn__icon">
      <path
        fill="currentColor"
        d="M9 3h6a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3V5a2 2 0 0 1 2-2Zm6 3V5H9v1h6ZM4 10v8h16v-8H4Z"
      />
    </svg>
  );
}

function HighlightIcon({ type }: { type: (typeof heroHighlights)[number]["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
    className: "hero-card__icon",
  };

  if (type === "ai") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M9 3h6v2h2a2 2 0 0 1 2 2v2h-2V7H7v10h4v2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V3Zm7.5 11h1v2h2v1h-2v2h-1v-2h-2v-1h2v-2Z"
        />
      </svg>
    );
  }

  if (type === "cloud") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M7.5 18A4.5 4.5 0 0 1 6.1 9.3 5.5 5.5 0 0 1 17 8.5a4 4 0 0 1 .5 8H7.5Z"
        />
      </svg>
    );
  }

  if (type === "code") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="m8.2 8.2 1.4 1.2L6.8 12l2.8 2.6-1.4 1.2L4.2 12l4-3.8Zm7.6 0 4 3.8-4 3.8-1.4-1.2 2.8-2.6-2.8-2.6 1.4-1.2Z"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        fill="currentColor"
        d="M9 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM9 12c-2.7 0-5 1.6-5 3.5V18h10v-2.5C14 13.6 11.7 12 9 12Zm6 0c-.4 0-.8 0-1.2.1 1.3.8 2.2 2 2.2 3.4V18h4v-2.5c0-1.9-2.3-3.5-5-3.5Z"
      />
    </svg>
  );
}

function TechMark({ mark }: { mark: (typeof trustedTech)[number]["mark"] }) {
  if (mark === "aws") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-tech__mark hero-tech__mark--aws">
        <path
          fill="currentColor"
          d="M6.8 14.3c.3.2.7.1.9-.1.1-.1 1.4-1.8 4.2-1.8 2.2 0 3.7 1.1 4 1.3.3.2.7.2.9-.1.2-.3.1-.7-.2-.9-1.1-.7-2.7-1.5-4.7-1.5-3 0-4.8 1.9-5.2 2.4-.2.3-.1.7.1.7Zm12.3-.4c-.2-.1-.5 0-.7.2l-.6.8c-.6.7-1.3 1.4-2.6 1.4-.9 0-1.5-.4-1.5-.9 0-1.1 1.8-1.4 3.4-1.8 1.7-.4 3.7-.9 3.7-3.1 0-1.8-1.7-3-4.3-3-2.1 0-3.7.7-4.9 1.4-.3.2-.4.5-.2.8.2.3.5.4.8.2 1-.6 2.3-1.1 4.1-1.1 1.6 0 2.5.7 2.5 1.5 0 1.1-1.7 1.4-3.3 1.8-1.8.4-3.9 1-3.9 3.2 0 1.9 1.8 3 4.4 3 2.3 0 3.6-1 4.5-1.9l.4-.5c.2-.3.1-.6-.1-.8Z"
        />
      </svg>
    );
  }

  if (mark === "react") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-tech__mark hero-tech__mark--react">
        <circle cx="12" cy="12" r="2.1" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9"
          ry="3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          transform="rotate(120 12 12)"
        />
      </svg>
    );
  }

  if (mark === "node") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-tech__mark hero-tech__mark--node">
        <path
          fill="currentColor"
          d="M12 2.2 3.8 6.9v9.4L12 21l8.2-4.7V6.9L12 2.2Zm0 1.8 6.2 3.6v7.2L12 18.4 5.8 14.8V7.6L12 4Z"
        />
      </svg>
    );
  }

  if (mark === "laravel") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-tech__mark hero-tech__mark--laravel">
        <path
          fill="currentColor"
          d="m4.2 8.1 4.4-2.5 4.3 2.5v5l-4.3 2.5-4.4-2.5V8.1Zm6.3-.8 4.4-2.5L19.2 7l-4.3 2.5-4.4-2.2Zm5.1 3.1 4.2-2.4v5.1l-4.2 2.4V10.4Z"
        />
      </svg>
    );
  }

  if (mark === "ts") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-tech__mark hero-tech__mark--ts">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" />
        <path fill="#fff" d="M7.2 9.2h9.6v1.7h-3.7V19H11V10.9H7.2V9.2Zm8.1 4.2h1.7c.1.6.4 1 .9 1.3.4.2.9.4 1.4.4.6 0 1-.1 1.3-.4.3-.2.4-.5.4-.9 0-.3-.1-.6-.4-.8-.2-.2-.8-.5-1.7-.8-1.3-.4-2.2-1-2.6-1.6-.5-.7-.5-1.5 0-2.2.4-.7 1.2-1.1 2.3-1.1 1.1 0 1.9.3 2.4 1 .5.6.7 1.3.7 2.1h-1.8c0-.5-.2-.9-.5-1.1-.3-.3-.7-.4-1.2-.4-.5 0-.8.1-1.1.3-.2.2-.4.5-.4.8 0 .3.1.6.5.8.2.2.8.5 1.8.8 1.2.4 2 .9 2.5 1.5.5.6.7 1.4.7 2.2 0 .9-.3 1.7-.9 2.3-.6.6-1.5.9-2.7.9-1.2 0-2.2-.3-2.8-1-.7-.7-1-1.5-1-2.5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="hero-tech__mark hero-tech__mark--docker">
      <path
        fill="currentColor"
        d="M4.4 11.2h2.1v2.1H4.4v-2.1Zm2.6 0h2.1v2.1H7v-2.1Zm2.6 0h2.1v2.1H9.6v-2.1Zm2.6 0h2.1v2.1h-2.1v-2.1ZM7 8.6h2.1v2.1H7V8.6Zm2.6 0h2.1v2.1H9.6V8.6Zm2.6 0h2.1v2.1h-2.1V8.6Zm0-2.6h2.1V8h-2.1V6ZM4.1 14.1c-.1 0 1.6 3.5 5.7 3.5 4.5 0 6.7-3.3 7-4.2H4.3c-.2 0-.2.4-.2.7Zm15.1-1.5c-.3-.2-1.8-.9-4.1-.5.4-1.5 1.2-2.7 1.2-2.7s-2.5 1.1-3.1 3.7c-.8.2-2.5.5-4.4-.4 0 0 .7 2.6 4.9 2.6 4.2.1 6.1-2.3 5.5-2.7Z"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero__layout">
        <div className="hero__content">
          <p className="hero__eyebrow animate-in" style={{ animationDelay: "0.05s" }}>
            <PinIcon />
            <br/>
            Dhaka, Bangladesh
          </p>

          <h1 className="hero__brand animate-in" style={{ animationDelay: "0.12s" }}>
            {profile.name}
          </h1>

          <p className="hero__title animate-in" style={{ animationDelay: "0.2s" }}>
            {profile.title}
            <span aria-hidden="true"> · </span>
            {profile.roles[0]}
            <br />
            {profile.roles[1]}
          </p>

          <p className="hero__lede animate-in" style={{ animationDelay: "0.28s" }}>
            {profile.headline}
          </p>

          <ul className="hero-cards animate-in" style={{ animationDelay: "0.36s" }}>
            {heroHighlights.map((item) => (
              <li key={item.title} className="hero-card">
                <HighlightIcon type={item.icon} />
                <h2 className="hero-card__title">{item.title}</h2>
                <p className="hero-card__detail">{item.detail}</p>
              </li>
            ))}
          </ul>

          <div className="hero__actions animate-in" style={{ animationDelay: "0.44s" }}>
            <a className="btn btn--primary" href="#contact">
              <MailIcon />
              Get in touch
            </a>
            <a className="btn btn--ghost" href="#work">
              <BriefcaseIcon />
              View selected work
            </a>
          </div>

          <div className="hero-tech animate-in" style={{ animationDelay: "0.52s" }}>
            <p className="hero-tech__label">Trusted technologies</p>
            <ul className="hero-tech__list">
              {trustedTech.map((tech) => (
                <li key={tech.name}>
                  <TechMark mark={tech.mark} />
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero__visual animate-in" style={{ animationDelay: "0.2s" }}>
          <div className="hero__glow" aria-hidden="true" />
          <div className="hero__dots" aria-hidden="true" />
          <div className="hero__portrait">
            <Image
              src={profile.photo}
              alt={`${profile.name}, ${profile.title}`}
              fill
              priority
              sizes="(max-width: 979px) 80vw, 460px"
              className="hero__photo"
            />
          </div>
          <blockquote className="hero-quote">
            <span className="hero-quote__mark" aria-hidden="true">
              “
            </span>
            <p>{profile.quote}</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
