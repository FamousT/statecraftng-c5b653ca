import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <div className="eyebrow text-gold">A Cerebral Hub Platform</div>
            <h2 className="display text-[clamp(2.5rem,6vw,5rem)] mt-4 text-bone">
              Your political message
              <br />
              deserves <em className="text-gold">direction.</em>
            </h2>
          </div>
          <div className="lg:col-span-3">
            <div className="eyebrow text-bone/50 mb-4">Navigate</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              <li><Link to="/services" className="hover:text-gold">Services</Link></li>
              <li><Link to="/approach" className="hover:text-gold">Approach</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <div className="eyebrow text-bone/50 mb-4">Reach Us</div>
            <a href="mailto:info@cerebralhub.com" className="block text-sm hover:text-gold">
              info@cerebralhub.com
            </a>
            <p className="text-sm text-bone/60 mt-3 leading-relaxed">
              Political strategy for the people, powered by intelligence.
            </p>
          </div>
        </div>
        <div className="mt-20 pt-6 border-t border-bone/15 flex flex-col md:flex-row justify-between gap-4 text-[11px] tracking-[0.18em] uppercase text-bone/50">
          <span>© {new Date().getFullYear()} Statecraft · Cerebral Hub</span>
          <span>Built for the 2027 cycle</span>
        </div>
      </div>
    </footer>
  );
}
