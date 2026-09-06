import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -right-24 top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-tide-100/50" />

      <div className="hero-reveal mx-auto max-w-6xl px-6">
        <div className="hero-reveal-d1 mb-8 flex items-center gap-3 text-sm text-ink-faint">
          <span className="inline-block h-2 w-2 rounded-full bg-tide-500" />
          Pickup & delivery across the metro area
        </div>

        <h1 className="hero-reveal-d2 font-display text-5xl font-medium tracking-tight text-ink md:text-6xl lg:text-7xl">
          Laundry that comes back{" "}
          <span className="italic text-tide-600">fresh</span>.
        </h1>

        <p className="hero-reveal-d3 mt-6 max-w-prose text-lg text-ink-soft">
          Same-day service when you need it, careful handling always. We treat
          your clothes the way we treat our own.
        </p>

        <div className="hero-reveal-d4 mt-10 flex items-center gap-6">
          <Link
            href="#contact"
            className="rounded-full bg-ink px-6 py-3 text-sm text-mist-50 transition-colors hover:bg-tide-600"
          >
            Book a pickup
          </Link>
          <Link
            href="#services"
            className="text-sm text-ink-soft underline decoration-ink/20 underline-offset-4 transition-colors hover:text-tide-600"
          >
            See how it works
          </Link>
        </div>

        <div className="hero-reveal-d4 mt-16 flex items-center divide-x divide-ink/10 text-sm text-ink-faint">
          <span className="pr-6">7-day pickup guarantee</span>
          <span className="px-6">Free detergent</span>
          <span className="pl-6">Satisfaction guaranteed</span>
        </div>
      </div>

      <style>{`
        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-reveal     { animation: heroReveal 0.7s ease-out both; }
        .hero-reveal-d1  { animation: heroReveal 0.7s ease-out 0.1s both; }
        .hero-reveal-d2  { animation: heroReveal 0.7s ease-out 0.2s both; }
        .hero-reveal-d3  { animation: heroReveal 0.7s ease-out 0.35s both; }
        .hero-reveal-d4  { animation: heroReveal 0.7s ease-out 0.5s both; }
      `}</style>
    </section>
  );
}
