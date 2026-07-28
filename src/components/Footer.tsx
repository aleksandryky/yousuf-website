import { VisitorCount } from "@/components/VisitorCount";
import { profile } from "@/data/profile";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="site-footer__icon">
      <path
        fill="currentColor"
        d="M12 2.8a6.2 6.2 0 0 0-6.2 6.2c0 4.55 5.3 10.9 5.55 11.2a.9.9 0 0 0 1.3 0c.25-.3 5.55-6.65 5.55-11.2A6.2 6.2 0 0 0 12 2.8Zm0 8.7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="site-footer__social-icon">
      <path
        fill="currentColor"
        d="M6.4 9.2H9v9.1H6.4V9.2Zm1.3-4.2a1.55 1.55 0 1 1 0 3.1 1.55 1.55 0 0 1 0-3.1ZM11 9.2h2.45v1.25h.04c.34-.64 1.18-1.32 2.43-1.32 2.6 0 3.08 1.71 3.08 3.93v5.24h-2.6v-4.65c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45v4.73H11V9.2Z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="site-footer__social-icon">
      <path
        fill="currentColor"
        d="M12 2.2A9.8 9.8 0 0 0 2.2 12.1c0 4.36 2.83 8.06 6.76 9.36.5.1.68-.22.68-.48v-1.7c-2.75.6-3.33-1.18-3.33-1.18-.45-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.9.83.1-.65.35-1.09.63-1.34-2.2-.25-4.51-1.1-4.51-4.9 0-1.08.39-1.97 1.03-2.66-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.8c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.69 1.03 1.58 1.03 2.66 0 3.81-2.32 4.65-4.53 4.9.36.31.67.92.67 1.86v2.76c0 .26.18.58.69.48A9.82 9.82 0 0 0 21.8 12.1 9.8 9.8 0 0 0 12 2.2Z"
      />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <VisitorCount />

        <span className="site-footer__rule" aria-hidden="true" />

        <div className="site-footer__right">
          <p className="site-footer__place">
            <PinIcon />
            <span>{profile.location}</span>
          </p>
          <p className="site-footer__copy">© {year}</p>
          <div className="site-footer__socials">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="site-footer__social"
            >
              <LinkedInIcon />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="site-footer__social"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
