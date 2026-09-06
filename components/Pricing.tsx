import { pricing } from "@/data/site";

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-tide-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-tide-500" />
          <span className="text-sm text-ink-faint">Pricing</span>
        </div>
        <h2 className="mt-4 font-display text-3xl md:text-4xl tracking-tight text-ink max-w-md">
          Simple prices, no surprises.
        </h2>
        <p className="mt-4 text-ink-soft max-w-xl">
          Pay for what you use. Every plan includes friendly service and clean
          results — no hidden fees, no contracts.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pricing.map((tier) => {
            const recommended = tier.name === "Household";
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  recommended
                    ? "border-tide-500 bg-tide-50"
                    : "border-ink/10 bg-mist-50"
                }`}
              >
                {recommended && (
                  <span className="absolute -top-3 left-8 rounded-full bg-tide-100 px-3 py-0.5 text-xs font-medium text-tide-600">
                    Most popular
                  </span>
                )}

                <h3 className="font-display text-lg text-ink">{tier.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{tier.description}</p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-display text-4xl tracking-tight text-ink">
                    {tier.price}
                  </span>
                  <span className="text-sm text-ink-faint">{tier.unit}</span>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-ink-soft"
                    >
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
