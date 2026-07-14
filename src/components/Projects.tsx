import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/profile";

export function Projects() {
  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-label">Selected work</p>
            <h2 className="section-title">Projects that shaped the craft</h2>
          </div>
        </Reveal>
        <ul className="project-list">
          {projects.map((project) => (
            <Reveal as="li" key={project.name} className="project-item">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
