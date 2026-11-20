import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="brand footer-brand" href="/" aria-label={`${site.name} home`}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="13.25" stroke="currentColor" strokeWidth="1.5" />
              <path d="M7 22.5 14.3 14l4.2 5 3.4-4 7.1 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="24.5" cy="10.5" r="2.5" fill="var(--accent)" />
            </svg>
          </span>
          <span className="brand-wordmark">{site.name}</span>
        </Link>
        <p>Technology for a world in motion.</p>
      </div>
      <div className="footer-bottom">
        <span>© {site.name}</span>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <a href="#top" className="back-to-top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}
