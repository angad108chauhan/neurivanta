import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Stay curious",
    text: "The most useful ideas start with a better question and the courage to look beyond the obvious.",
  },
  {
    number: "02",
    title: "Build with intent",
    text: "Technology matters most when it makes something clearer, more useful, or newly possible.",
  },
  {
    number: "03",
    title: "Keep moving",
    text: "Progress is a practice: learn, adapt, and make room for what comes next.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> A technology brand for what’s next</p>
          <h1>Make the next<br />possible.</h1>
          <p className="hero-description">
            NEURIVANTA brings ambitious thinking and emerging technology together to shape a more capable future.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/about">
              Discover our approach <span aria-hidden="true">↗</span>
            </Link>
            <a className="text-link" href="#perspective">
              See what we believe <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero-note">Curiosity, made tangible.</p>
        </div>

        <div className="hero-art" role="img" aria-label="Abstract illuminated network representing ideas connecting">
          <div className="art-topline"><span>NEURIVANTA / 01</span><span>IDEAS IN MOTION</span></div>
          <div className="art-grid" aria-hidden="true" />
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="orbit orbit-three" aria-hidden="true" />
          <div className="core-glow" aria-hidden="true"><span /></div>
          <div className="orbit-point point-one" aria-hidden="true" />
          <div className="orbit-point point-two" aria-hidden="true" />
          <div className="orbit-point point-three" aria-hidden="true" />
          <div className="art-caption"><span className="caption-line" /><span>FROM SIGNAL<br />TO POSSIBILITY</span></div>
          <div className="art-index" aria-hidden="true">N° 001</div>
        </div>
        <div className="hero-bottomline"><span>THINK CLEARLY</span><span>BUILD BOLDLY</span><span>MOVE FORWARD</span></div>
      </section>

      <section className="intro-section section-shell" id="perspective">
        <div className="section-kicker"><span>01 / OUR PERSPECTIVE</span><span>NEURIVANTA</span></div>
        <div className="intro-grid">
          <h2>Technology should<br /><em>expand possibility.</em></h2>
          <div className="intro-copy">
            <p className="intro-lead">The world doesn’t need more noise. It needs ideas that move things forward.</p>
            <p>We believe the best technology feels less like complexity and more like momentum: clear in its purpose, thoughtful in its design, and open to what could be.</p>
            <Link className="inline-link" href="/about">A little more about us <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="signal-strip" aria-hidden="true">
          <span>HUMAN POSSIBILITY</span><span className="signal-mark">✳</span><span>INTELLIGENT SYSTEMS</span><span className="signal-mark">✳</span><span>FORWARD THINKING</span>
        </div>
      </section>

      <section className="principles-section">
        <div className="section-shell principles-shell">
          <div className="section-kicker"><span>02 / HOW WE THINK</span><span>THREE GUIDING IDEAS</span></div>
          <div className="principles-heading">
            <h2>Progress begins<br />with <em>perspective.</em></h2>
            <p>Every meaningful step forward starts with a point of view. These are ours.</p>
          </div>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span className="principle-number">{principle.number}</span>
                <div className="principle-icon" aria-hidden="true"><span /><span /><span /></div>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section section-shell">
        <div className="closing-orbit" aria-hidden="true"><span /><span /><span /></div>
        <div className="closing-content">
          <p className="eyebrow"><span className="eyebrow-dot" /> THE NEXT STEP STARTS HERE</p>
          <h2>Let’s make room<br />for <em>what’s next.</em></h2>
          <Link className="button button-light" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
        </div>
        <span className="closing-index" aria-hidden="true">N / V</span>
      </section>
    </main>
  );
}
