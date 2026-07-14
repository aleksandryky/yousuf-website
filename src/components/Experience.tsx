import { Reveal } from "@/components/Reveal";
import { experience } from "@/data/profile";

export function Experience() {
  return (
    <section className="section section--ink" id="experience">
      <div className="container">
        <Reveal>
          <div className="section-head section-head--light">
            <p className="section-label">Experience</p>
            <h2 className="section-title">Professional path</h2>
          </div>
        </Reveal>
        <ol className="timeline">
          {experience.map((job) => (
            <Reveal as="li" key={job.company + job.period} className="timeline-item">
              <div className="timeline-meta">
                <p className="timeline-period">{job.period}</p>
                <p className="timeline-place">{job.location}</p>
              </div>
              <div className="timeline-body">
                <h3 className="timeline-role">{job.role}</h3>
                <p className="timeline-company">{job.company}</p>
                <ul className="timeline-highlights">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
