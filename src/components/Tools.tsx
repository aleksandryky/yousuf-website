"use client";

import { useEffect, useId, useState, type CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
import { toolCategories, tools } from "@/data/profile";

const RADIUS = 42;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

type CategoryId = (typeof toolCategories)[number]["id"];

function ToolGauge({
  name,
  mark,
  level,
  animate,
}: {
  name: string;
  mark: string;
  level: number;
  animate: boolean;
}) {
  const offset = CIRCUMFERENCE * (1 - level / 100);

  return (
    <li className="tool-item">
      <div className="tool-gauge" aria-label={`${name} proficiency ${level} percent`}>
        <svg className="tool-gauge__svg" viewBox="0 0 100 100" aria-hidden="true">
          <circle className="tool-gauge__track" cx="50" cy="50" r={RADIUS} />
          <circle
            className={`tool-gauge__progress${animate ? " is-animated" : ""}`}
            cx="50"
            cy="50"
            r={RADIUS}
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={animate ? offset : CIRCUMFERENCE}
            style={
              animate ? ({ "--tool-offset": offset } as CSSProperties) : undefined
            }
          />
        </svg>
        <div className="tool-gauge__core">
          <span className="tool-gauge__mark">{mark}</span>
          <span className="tool-gauge__level">{level}%</span>
        </div>
      </div>
      <p className="tool-item__name">{name}</p>
    </li>
  );
}

export function Tools() {
  const [active, setActive] = useState<CategoryId>("all");
  const [animate, setAnimate] = useState(false);
  const baseId = useId();

  const filtered =
    active === "all" ? tools : tools.filter((tool) => tool.category === active);

  useEffect(() => {
    setAnimate(false);
    const frame = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(frame);
  }, [active]);

  return (
    <section className="section section--tools" id="tools">
      <div className="container">
        <Reveal>
          <div className="section-head section-head--light">
            <p className="tools-badge">
              <svg className="tools-badge__icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.2 7.2 0 0 0-1.63-.94l-.36-2.54A.48.48 0 0 0 14 2h-4a.48.48 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.55-1.63.94l-2.39-.96a.49.49 0 0 0-.59.22L2.63 8.87a.49.49 0 0 0 .12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94L2.75 14.5a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.3.59.22l2.39-.96c.5.39 1.04.7 1.63.94l.36 2.54c.05.23.25.41.48.41h4c.23 0 .43-.18.48-.41l.36-2.54c.59-.24 1.13-.55 1.63-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7Z"
                />
              </svg>
              Tools &amp; Platforms
            </p>
            <h2 className="section-title">Systems I build with every week</h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="tools-nav" role="tablist" aria-label="Tool categories">
            {toolCategories.map((category) => {
              const selected = category.id === active;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${category.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  className={`tools-nav__btn${selected ? " is-active" : ""}`}
                  onClick={() => setActive(category.id)}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal>
          <ul
            className="tools-grid"
            role="tabpanel"
            id={`${baseId}-panel`}
            aria-labelledby={`${baseId}-tab-${active}`}
            key={active}
          >
            {filtered.map((tool) => (
              <ToolGauge
                key={tool.id}
                name={tool.name}
                mark={tool.mark}
                level={tool.level}
                animate={animate}
              />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
