"use client";

import { useMemo, useState } from "react";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/profile";

const filters = [
  "All case studies",
  "Cloud & Systems",
  "AI Integration",
  "Fintech & IoT",
] as const;

type Filter = (typeof filters)[number];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All case studies");

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All case studies"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <section className="section section--work" id="work">
      <div className="container work">
        <Reveal className="work-head">
          <div>
            <p className="work-kicker">Architectural case studies</p>
            <h2 className="work-title">Problems, decisions, and measurable impact</h2>
          </div>
          <p className="work-intro">
            Selected systems framed the way principal architects brief stakeholders — challenge,
            architectural decision, and outcome — across cloud platforms, AI integration, and
            fintech / IoT products.
          </p>
        </Reveal>

        <Reveal className="work-filter-wrap">
          <div className="work-filters" aria-label="Filter case studies">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`work-filter${activeFilter === filter ? " is-active" : ""}`}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <ol className="project-list" aria-live="polite">
          {visibleProjects.map((project) => {
            const projectNumber = projects.findIndex((item) => item.name === project.name);

            return (
              <Reveal as="li" key={project.name} className="project-item">
                <div className="project-heading">
                  <p className="project-meta">
                    <span>{String(projectNumber + 1).padStart(2, "0")}</span>
                    <span>{project.category}</span>
                    {project.featured ? (
                      <span className="project-featured">Featured</span>
                    ) : null}
                  </p>
                  <h3 className="project-name">{project.name}</h3>
                  {"url" in project && project.url ? (
                    <a
                      className="project-link"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} project`}
                    >
                      View project
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="project-link project-link--muted">Internal system</span>
                  )}
                </div>

                <div className="project-details">
                  <dl className="case-framework">
                    <div>
                      <dt>Challenge / Scale</dt>
                      <dd>{project.challenge}</dd>
                    </div>
                    <div>
                      <dt>Architectural decision</dt>
                      <dd>{project.decision}</dd>
                    </div>
                    <div>
                      <dt>Measurable impact</dt>
                      <dd>{project.impact}</dd>
                    </div>
                  </dl>

                  {"diagram" in project && project.diagram ? (
                    <ArchitectureDiagram id={project.diagram} />
                  ) : null}

                  <ul className="project-tags" aria-label={`${project.name} technologies`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ol>

        {visibleProjects.length === 0 ? (
          <p className="work-empty">No case studies in this category yet.</p>
        ) : null}
      </div>
    </section>
  );
}
