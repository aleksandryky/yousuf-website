import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section className="section section--tight" id="about">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-label">About</p>
            <h2 className="section-title">Fifteen years building systems that last.</h2>
          </div>
        </Reveal>
        <Reveal className="about-grid">
          <p className="about-lead">{profile.summary}</p>
          <p className="about-side">{profile.focus}</p>
        </Reveal>
      </div>
    </section>
  );
}
