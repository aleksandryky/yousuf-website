import { Reveal } from "@/components/Reveal";
import { toolDomains } from "@/data/profile";

export function Tools() {
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
            <h2 className="section-title">Capability by domain</h2>
            <p className="tools-lede">
              Grouped by how I actually use them: daily architecture, data/integration systems, and
              specialized product ecosystems.
            </p>
          </div>
        </Reveal>

        <div className="tools-tiers">
          {toolDomains.map((domain, index) => (
            <Reveal key={domain.id} className="tools-tier">
              <p className="tools-tier__index">{String(index + 1).padStart(2, "0")}</p>
              <div className="tools-tier__body">
                <h3 className="tools-tier__title">{domain.title}</h3>
                <p className="tools-tier__summary">{domain.summary}</p>
                <ul className="tools-tier__items">
                  {domain.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
