import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-mist-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-ink"
        >
          SparkleClean Co
          <span className="ml-px inline-block h-[6px] w-[6px] translate-y-[-2px] rounded-full bg-tide-500" />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-tide-600"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm text-mist-50 transition-colors hover:bg-tide-600"
          >
            Book a pickup
          </Link>
        </nav>

        <Link
          href="#contact"
          className="rounded-full bg-ink px-5 py-2.5 text-sm text-mist-50 transition-colors hover:bg-tide-600 md:hidden"
        >
          Book a pickup
        </Link>
      </div>
    </header>
  );
}
