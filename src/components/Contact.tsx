import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section className="section section--contact" id="contact">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <p className="section-label">Contact</p>
            <h2 className="section-title contact-title">Let&apos;s build the next system together.</h2>
          </div>
        </Reveal>
        <Reveal className="contact-rows">
          <a className="contact-row" href={`mailto:${profile.email}`}>
            <span>Email</span>
            <strong>{profile.email}</strong>
          </a>
          <a
            className="contact-row"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LinkedIn</span>
            <strong>{profile.linkedinLabel}</strong>
          </a>
          <a className="contact-row" href={profile.cvPath} download>
            <span>Resume</span>
            <strong>Download CV (PDF)</strong>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
