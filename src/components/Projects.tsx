"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/profile";

const filters = [
  "All projects",
  "Platforms",
  "Fintech",
  "AI",
  "Blockchain",
  "Automation",
  "SaaS",
] as const;

type Filter = (typeof filters)[number];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All projects");

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All projects"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <section className="section section--work" id="work">
      <div className="container work">
        <Reveal className="work-head">
          <div>
            <p className="work-kicker">Selected work</p>
            <h2 className="work-title">Projects that shaped the craft</h2>
          </div>
          <p className="work-intro">
            Eleven products architected and shipped end to end across
            automotive IoT, fintech, AI, blockchain, automation, platforms,
            and SaaS.
          </p>
        </Reveal>

        <Reveal className="work-filter-wrap">
          <div className="work-filters" aria-label="Filter selected work">
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
            const projectNumber = projects.findIndex(
              (item) => item.name === project.name,
            );

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
                </div>

                <div className="project-details">
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
                    <span className="project-link project-link--muted">
                      Internal system
                    </span>
                  )}
                  <p className="project-desc">{project.description}</p>
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
          <p className="work-empty">No projects in this category yet.</p>
        ) : null}
      </div>
    </section>
  );
}
