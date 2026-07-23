import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.5 7.5 12 13l7.5-5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.4 9.2H9v9.1H6.4V9.2Zm1.3-4.2a1.55 1.55 0 1 1 0 3.1 1.55 1.55 0 0 1 0-3.1ZM11 9.2h2.45v1.25h.04c.34-.64 1.18-1.32 2.43-1.32 2.6 0 3.08 1.71 3.08 3.93v5.24h-2.6v-4.65c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.73H11V9.2Z"
      />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.5 3.75h6.2L18.5 8.7v11.55a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1V4.75a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M13.6 3.9V8.6h4.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.25h6M9 15.25h6M9 18.25h3.75"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3.5"
        y="5"
        width="17"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 3.5v3M16 3.5v3M3.5 9.5h17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <MailIcon />,
  },
  {
    label: "Book",
    value: profile.bookingLabel,
    href: profile.bookingUrl,
    external: true,
    icon: <CalendarIcon />,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    external: true,
    icon: <LinkedInIcon />,
  },
  {
    label: "Resume",
    value: "Download CV (PDF)",
    href: profile.cvPath,
    download: true,
    icon: <DocIcon />,
  },
] as const;

export function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <div className="container contact">
        <Reveal>
          <div className="contact-head">
            <p className="contact-kicker">Contact</p>
            <h2 className="contact-title">Let&apos;s build the next system together.</h2>
            <p className="contact-lede">
              Architecture reviews, platform engagements, or technical leadership conversations —
              reach out or book a consultation directly.
            </p>
          </div>
        </Reveal>

        <Reveal className="contact-rows">
          {contactItems.map((item) => (
            <a
              key={item.label}
              className="contact-row"
              href={item.href}
              {...("external" in item && item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              {...("download" in item && item.download ? { download: true } : {})}
            >
              <span className="contact-row__left">
                <span className="contact-row__icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="contact-row__label">{item.label}</span>
              </span>
              <span className="contact-row__divider" aria-hidden="true" />
              <strong className="contact-row__value">{item.value}</strong>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
