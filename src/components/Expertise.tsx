"use client";

import { useId, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { expertise } from "@/data/profile";

export function Expertise() {
  const [activeId, setActiveId] = useState<(typeof expertise)[number]["id"]>(expertise[0].id);
  const baseId = useId();
  const active = expertise.find((group) => group.id === activeId) ?? expertise[0];
  const activeIndex = expertise.findIndex((group) => group.id === active.id);

  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-label">Skills</p>
            <h2 className="section-title">Core technical range</h2>
          </div>
        </Reveal>

        <Reveal className="skills-shell">
          <div className="skills-nav" role="tablist" aria-label="Skill categories">
            {expertise.map((group, index) => {
              const selected = group.id === active.id;
              return (
                <button
                  key={group.id}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${group.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${group.id}`}
                  tabIndex={selected ? 0 : -1}
                  className={`skills-nav__btn${selected ? " is-active" : ""}`}
                  onClick={() => setActiveId(group.id)}
                >
                  <span className="skills-nav__index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="skills-nav__label">{group.title}</span>
                </button>
              );
            })}
          </div>

          <div
            className="skills-panel"
            role="tabpanel"
            id={`${baseId}-panel-${active.id}`}
            aria-labelledby={`${baseId}-tab-${active.id}`}
            key={active.id}
          >
            <p className="skills-panel__kicker">
              {String(activeIndex + 1).padStart(2, "0")} / {String(expertise.length).padStart(2, "0")}
            </p>
            <h3 className="skills-panel__title">{active.title}</h3>
            <p className="skills-panel__summary">{active.summary}</p>
            <ul className="skills-detail-list">
              {active.items.map((item) => (
                <li key={item.name} className="skills-detail">
                  <h4 className="skills-detail__name">{item.name}</h4>
                  <p className="skills-detail__text">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
