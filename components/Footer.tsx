import Link from "next/link";
import { site } from "@/data/site";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-mist-100">
      <div className="mx-auto max-w-5xl px-6 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <span className="font-display text-xl text-ink">{site.name}</span>
            <p className="mt-2 text-sm text-ink-soft">Fresh, folded, on time.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <nav>
              <h3 className="text-sm font-medium text-ink-faint">Navigate</h3>
              <ul className="mt-3 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-soft hover:text-tide-600 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="text-sm font-medium text-ink-faint">Contact</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                <li>
                  <a
                    href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                    className="hover:text-tide-600 transition"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-tide-600 transition"
                  >
                    {site.email}
                  </a>
                </li>
                <li>{site.address}</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 text-xs text-ink-faint">
          Made in Portland, Oregon.
        </p>

        <div className="mt-6 border-t border-ink/10 pt-6">
          <p className="text-xs text-ink-faint">
            &copy; {new Date().getFullYear()} {site.name} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
