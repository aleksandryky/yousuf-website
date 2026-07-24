import { Reveal } from "@/components/Reveal";
import { experience } from "@/data/profile";

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="timeline-badge__icon">
      <path
        fill="currentColor"
        d="M9 3h6a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3V5a2 2 0 0 1 2-2Zm6 3V5H9v1h6ZM4 10v8h16v-8H4Z"
      />
    </svg>
  );
}

export function Experience() {
  return (
    <section className="section section--experience" id="experience">
      <div className="container">
        <Reveal>
          <div className="experience-head">
            <p className="experience-kicker">Experience</p>
            <h2 className="experience-title">Professional Path</h2>
          </div>
        </Reveal>

        <ol className="timeline">
          {experience.map((job) => (
            <Reveal as="li" key={job.company + job.period} className="timeline-item">
              <div className="timeline-meta">
                <span className="timeline-marker" aria-hidden="true" />
                <p className="timeline-period">{job.period}</p>
                <p className="timeline-place">{job.location}</p>
              </div>

              <article className="timeline-card">
                <header className="timeline-card__head">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <span className="timeline-badge">
                    <BriefcaseIcon />
                    {job.type}
                  </span>
                </header>

                <ul className="timeline-highlights">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
