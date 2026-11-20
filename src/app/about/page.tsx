import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "The ideas and principles behind NEURIVANTA.",
};

const pillars = [
  { number: "01", title: "A wider lens", text: "We look at the whole system: the people, the possibilities, and the details that connect them." },
  { number: "02", title: "Useful by design", text: "The point of progress is progress. We value technology for what it helps people do." },
  { number: "03", title: "Always becoming", text: "The future is not a finished destination. It is something we shape through every thoughtful next step." },
];

export default function AboutPage() {
  return (
    <main id="top" className="inner-page">
      <section className="page-hero section-shell">
        <p className="eyebrow"><span className="eyebrow-dot" /> ABOUT NEURIVANTA</p>
        <h1>Built on curiosity.<br /><em>Oriented forward.</em></h1>
        <p className="page-intro">NEURIVANTA is a technology brand grounded in a simple belief: thoughtful ideas can open up entirely new possibilities.</p>
        <div className="page-hero-art" aria-hidden="true">
          <div className="page-art-ring ring-a" /><div className="page-art-ring ring-b" /><div className="page-art-ring ring-c" />
          <span className="page-art-star">✳</span><span className="page-art-label">POSSIBILITY<br />IS A PRACTICE</span>
        </div>
      </section>

      <section className="manifesto-section">
        <div className="section-shell manifesto-grid">
          <p className="section-label">A point of view<br /><span>01 / THE WHY</span></p>
          <div>
            <h2>Technology is a tool.<br /><em>Human possibility is the point.</em></h2>
            <p className="manifesto-copy">We’re here for the moment when a complex challenge becomes clear, when a bold idea becomes something real, when a new tool helps someone go further. That’s the kind of progress worth building toward.</p>
          </div>
        </div>
      </section>

      <section className="about-pillars section-shell">
        <div className="section-kicker"><span>02 / OUR PRINCIPLES</span><span>A WAY OF WORKING</span></div>
        <div className="pillar-list">
          {pillars.map((pillar) => (
            <article className="pillar-row" key={pillar.number}>
              <span className="pillar-number">{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
              <span className="pillar-symbol" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta section-shell">
        <div><p className="eyebrow"><span className="eyebrow-dot" /> KEEP THE CONVERSATION GOING</p><h2>What could we<br /><em>make possible?</em></h2></div>
        <Link className="button button-dark" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
