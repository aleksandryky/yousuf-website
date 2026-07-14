import { Reveal } from "@/components/Reveal";
import { certifications, education, strengths } from "@/data/profile";

function GradCapIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3 1.5 8.2 12 13.5 20 9.4V16h2V8.2L12 3Zm0 12.2L5 11.4v3.3L12 19l7-4.3v-3.3l-7 3.8Z"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2 4 5v6.2c0 5 3.4 9.5 8 10.8 4.6-1.3 8-5.8 8-10.8V5l-8-3Zm-1.1 13.1-3.2-3.2 1.4-1.4 1.8 1.8 4-4 1.4 1.4-5.4 5.4Z"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="m12 3.2 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.5 7.2 18l.9-5.4L4.2 8.9l5.4-.8L12 3.2Z"
      />
    </svg>
  );
}

function StrengthIcon({ icon }: { icon: (typeof strengths)[number]["icon"] }) {
  const common = { viewBox: "0 0 24 24", "aria-hidden": true as const };

  if (icon === "briefcase") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M9 3h6a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3V5a2 2 0 0 1 2-2Zm6 3V5H9v1h6ZM4 10v8h16v-8H4Z"
        />
      </svg>
    );
  }

  if (icon === "users") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M9 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM9 12c-2.7 0-5 1.6-5 3.5V18h10v-2.5C14 13.6 11.7 12 9 12Zm6 0c-.4 0-.8 0-1.2.1 1.3.8 2.2 2 2.2 3.4V18h4v-2.5c0-1.9-2.3-3.5-5-3.5Z"
        />
      </svg>
    );
  }

  if (icon === "layers") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="m12 3.2 8.5 4.4L12 12 3.5 7.6 12 3.2Zm0 10.2 8.5-4.4v2.5L12 16.1 3.5 11.5V9l8.5 4.4Zm0 3.7 8.5-4.4v2.5L12 19.8 3.5 15.2v-2.5L12 17.1Z"
        />
      </svg>
    );
  }

  if (icon === "cloud") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M7.5 18A4.5 4.5 0 0 1 6.1 9.3 5.5 5.5 0 0 1 17 8.5a4 4 0 0 1 .5 8H7.5Z"
        />
      </svg>
    );
  }

  if (icon === "cycle") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M17.7 7.7A7 7 0 0 0 6.3 6.9L5 5.6V10h4.4L7.8 8.4a5 5 0 0 1 8.1.7l1.8-1.4ZM6.3 16.3A7 7 0 0 0 17.7 17L19 18.4V14h-4.4l1.6 1.6a5 5 0 0 1-8.1-.7l-1.8 1.4Z"
        />
      </svg>
    );
  }

  if (icon === "mentor") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M12 12a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm-6.5 7v-1.2C5.5 15.4 8.2 14 12 14s6.5 1.4 6.5 3.8V19h-13Zm14-8h-2V9h2V7h2v2h2v2h-2v2h-2v-2Z"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        fill="currentColor"
        d="M7 10.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm10 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM12 19a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm-3.8-7.1 2.2 3.5 1.3-.8-2.2-3.5-1.3.8Zm7.6 0-1.3-.8-2.2 3.5 1.3.8 2.2-3.5ZM9.3 9.2l1.3.8 3.1-2.1-1.3-.8-3.1 2.1Z"
      />
    </svg>
  );
}

export function Credentials() {
  return (
    <section className="section section--edu" id="credentials">
      <div className="container edu">
        <Reveal className="edu-degree">
          <div className="edu-badge" aria-hidden="true">
            <GradCapIcon />
          </div>
          <div>
            <p className="edu-label">Education</p>
            <h2 className="edu-degree__title">{education.degree}</h2>
            <p className="edu-degree__meta">
              {education.school}
              <span aria-hidden="true"> | </span>
              Graduated {education.year}
            </p>
          </div>
        </Reveal>

        <div className="edu-divider" aria-hidden="true" />

        <div className="edu-columns">
          <Reveal className="edu-panel">
            <div className="edu-panel__head">
              <div className="edu-badge edu-badge--sm" aria-hidden="true">
                <ShieldIcon />
              </div>
              <p className="edu-label">Certifications</p>
            </div>
            <ol className="edu-certs">
              {certifications.map((item) => (
                <li key={item.title}>
                  <span className="edu-certs__dot" aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal className="edu-panel">
            <div className="edu-panel__head">
              <div className="edu-badge edu-badge--sm" aria-hidden="true">
                <StarIcon />
              </div>
              <p className="edu-label">Strengths</p>
            </div>
            <ul className="edu-strengths">
              {strengths.map((item) => (
                <li key={item.text}>
                  <span className="edu-strengths__icon" aria-hidden="true">
                    <StrengthIcon icon={item.icon} />
                  </span>
                  <span className="edu-strengths__rule" aria-hidden="true" />
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
