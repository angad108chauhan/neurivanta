import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with NEURIVANTA.",
};

export default function ContactPage() {
  return (
    <main id="top" className="contact-page section-shell">
      <div className="contact-content">
        <p className="eyebrow"><span className="eyebrow-dot" /> CONTACT</p>
        <h1>Good things<br />start with a <em>hello.</em></h1>
        <p className="contact-intro">Have an idea, a question, or a future you want to explore? We’d like to hear about it.</p>
        <a className="contact-email" href={`mailto:${site.contactEmail}`}>
          {site.contactEmail}<span aria-hidden="true">↗</span>
        </a>
        <p className="contact-note">A clear idea is welcome. A rough one is, too.</p>
      </div>
      <div className="contact-art" aria-hidden="true">
        <div className="contact-art-grid" />
        <div className="contact-orbit orbit-a" /><div className="contact-orbit orbit-b" />
        <div className="contact-star">✳</div>
        <span className="contact-art-caption">OPEN CHANNEL<br />/ 001</span>
      </div>
      <div className="contact-footline"><span>NEURIVANTA</span><span>TECHNOLOGY FOR A WORLD IN MOTION</span></div>
    </main>
  );
}
