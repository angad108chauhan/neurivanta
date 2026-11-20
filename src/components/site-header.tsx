import Link from "next/link";
import { navigation, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label={`${site.name} home`}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="13.25" stroke="currentColor" strokeWidth="1.5" />
              <path d="M7 22.5 14.3 14l4.2 5 3.4-4 7.1 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="24.5" cy="10.5" r="2.5" fill="var(--accent)" />
            </svg>
          </span>
          <span className="brand-wordmark">{site.name}</span>
        </Link>

        <nav aria-label="Main navigation" className="main-nav">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
