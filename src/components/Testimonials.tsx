import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/data/profile";

export function Testimonials() {
  return (
    <section className="section section--proof" id="proof">
      <div className="container proof">
        <Reveal>
          <div className="section-head">
            <p className="section-label">Social proof</p>
            <h2 className="section-title">Leadership signals from the room</h2>
            <p className="proof-lede">
              Mentorship, architecture reviews, and delivery leadership — how collaborators describe
              working at principal altitude.
            </p>
          </div>
        </Reveal>

        <div className="proof-grid">
          {testimonials.map((item) => (
            <Reveal key={item.quote} className="proof-card">
              <blockquote>
                <p className="proof-card__quote">&ldquo;{item.quote}&rdquo;</p>
                <footer className="proof-card__meta">
                  <cite className="proof-card__name">{item.name}</cite>
                  <span className="proof-card__context">{item.context}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
