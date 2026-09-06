import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-tide-500" />
          <span className="text-sm text-ink-faint">What we do</span>
        </div>
        <h2 className="mt-4 font-display text-3xl md:text-4xl tracking-tight text-ink max-w-2xl">
          Everyday care for everything you wear.
        </h2>
        <p className="mt-4 text-ink-soft max-w-xl">
          No fuss, no lost socks. Drop off what you need and we handle the rest—
          sorted, washed, folded, and ready when you are.
        </p>

        <ul className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.name}
              className="border-t border-ink/10 pt-6"
            >
              <h3 className="font-display text-xl text-ink">
                {service.name}
              </h3>
              <p className="mt-2 max-w-sm text-ink-soft">
                {service.description}
              </p>
              <p className="mt-3 text-sm text-tide-600">{service.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
