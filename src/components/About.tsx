import { Reveal } from "@/components/Reveal";
import { aboutPillars, aboutStats, profile } from "@/data/profile";

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.9 2.4c2.8 1.1 5.1 3.4 6.2 6.2.4 1.1.1 3.1-1.6 5.7l-.4.5-2.3-2.3.5-1.3c.3-.8.1-1.4-.2-1.7-.3-.3-.9-.5-1.7-.2l-1.3.5-2.3-2.3.5-.4c2.6-1.7 4.6-2 5.7-1.6ZM9.4 8.8l2.2 2.2-5.3 2.7c-.8-1.5-1.3-2.8-1.3-3.7 0-.8.6-1.2 1.5-.8l2.9-.4Zm1.6 3.8 2.2 2.2-.4 2.9c-.4.9-.8 1.5-1.6 1.5-.9 0-2.2-.5-3.7-1.3l2.7-5.3Zm-5.6 4.7 1.7 1.7-2.6.9-.9-2.6 1.8 0Z"
      />
    </svg>
  );
}

function PillarIcon({ icon }: { icon: (typeof aboutPillars)[number]["icon"] }) {
  const common = { viewBox: "0 0 24 24", "aria-hidden": true as const };

  if (icon === "code") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="m8.2 8.2 1.4 1.2L6.8 12l2.8 2.6-1.4 1.2L4.2 12l4-3.8Zm7.6 0 4 3.8-4 3.8-1.4-1.2 2.8-2.6-2.8-2.6 1.4-1.2Z"
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

  if (icon === "ai") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M12 3a4 4 0 0 1 4 4v1.1A4.5 4.5 0 0 1 18.5 12v1a3.5 3.5 0 0 1-3 3.45V18a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-1.55A3.5 3.5 0 0 1 5.5 13v-1A4.5 4.5 0 0 1 8 8.1V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v1.2c.65-.13 1.32-.2 2-.2s1.35.07 2 .2V7a2 2 0 0 0-2-2Z"
        />
      </svg>
    );
  }

  if (icon === "team") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M8.5 11a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5Zm7 0a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5ZM12 12.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM8.5 12.5c-2.3 0-4.25 1.3-4.25 3V18h8.5v-2.5c0-1.7-1.95-3-4.25-3Zm7 0c-.4 0-.79.05-1.16.12 1.2.85 2 2.05 2 3.38V18H20.5v-2.5c0-1.7-1.95-3-4-3ZM12 13.5c-1.8 0-3.25.9-3.25 2V18h6.5v-2.5c0-1.1-1.45-2-3.25-2Z"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        fill="currentColor"
        d="M12 2 4 5v6.2c0 5 3.4 9.5 8 10.8 4.6-1.3 8-5.8 8-10.8V5l-8-3Zm0 2.1 6 2.25V11.2c0 3.9-2.5 7.4-6 8.6-3.5-1.2-6-4.7-6-8.6V6.35L12 4.1Z"
      />
    </svg>
  );
}

function StatIcon({ icon }: { icon: (typeof aboutStats)[number]["icon"] }) {
  const common = { viewBox: "0 0 24 24", "aria-hidden": true as const };

  if (icon === "calendar") {
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M8 3h2v2h4V3h2v2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3V3Zm11 8H5v8h14v-8Zm-8.2 1.8 1.4 1.4 3.5-3.5 1.4 1.4-4.9 4.9-2.8-2.8 1.4-1.4Z"
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

  return (
    <svg {...common}>
      <path
        fill="currentColor"
        d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 2a7 7 0 0 0-6.7 5h2.1c.3-1.4.9-2.6 1.8-3.6L12 5Zm0 0 2.8 1.4c.9 1 1.5 2.2 1.8 3.6h2.1A7 7 0 0 0 12 5Zm-6.9 7a7 7 0 0 0 3.9 5.5c-.7-1.2-1.1-2.7-1.3-4.5H5.1Zm4.3 0c.2 1.9.7 3.6 1.7 4.9.3.1.6.1.9.1s.6 0 .9-.1c1-1.3 1.5-3 1.7-4.9H9.4Zm5.5 0c-.2 1.8-.6 3.3-1.3 4.5A7 7 0 0 0 18.9 12h-4Zm-9.8-2h2.2c.3-1.7.8-3.1 1.5-4.2A7 7 0 0 0 5.1 10Zm12 0a7 7 0 0 0-3.7-4.2c.7 1.1 1.2 2.5 1.5 4.2h2.2Z"
      />
    </svg>
  );
}

export function About() {
  return (
    <section className="section section--about" id="about">
      <div className="container about">
        <Reveal>
          <div className="about-head">
            <p className="about-kicker">About Me</p>
            <h2 className="about-title">
              Fifteen years building systems that last
              <span className="about-title__dot">.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal className="about-bio">
          <p className="about-bio__lead">{profile.aboutLead}</p>
          <div className="about-bio__side">
            <span className="about-bio__icon" aria-hidden="true">
              <RocketIcon />
            </span>
            <p>{profile.aboutFocus}</p>
          </div>
        </Reveal>

        <Reveal>
          <ul className="about-pillars">
            {aboutPillars.map((item) => (
              <li key={item.title}>
                <span className="about-pillars__icon" aria-hidden="true">
                  <PillarIcon icon={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <ul className="about-stats">
            {aboutStats.map((item) => (
              <li key={item.value}>
                <span className="about-stats__icon" aria-hidden="true">
                  <StatIcon icon={item.icon} />
                </span>
                <div>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
