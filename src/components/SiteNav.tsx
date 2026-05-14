import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/approach", label: "Approach" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="h-2 w-2 rotate-45 bg-gold" />
          <span className="font-sans text-xs font-semibold tracking-[0.32em] text-foreground">
            STATECRAFT
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[12px] tracking-[0.18em] uppercase text-foreground/70 hover:text-foreground transition-colors"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground border-b border-gold pb-0.5" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase border border-foreground px-4 py-2 hover:bg-foreground hover:text-background transition-colors"
        >
          Engage Us <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
