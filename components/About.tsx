import Image from "next/image";

export default function About() {
  const values = [
    "Every load is sorted by hand before it touches the machine.",
    "Deliveries run on schedule, or your next load is free.",
    "Our scent-free line uses the same towels and hangers as our regular wash.",
  ];

  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-tide-500" />
              <span className="text-sm text-ink-faint">Our story</span>
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl tracking-tight text-ink max-w-md">
              Five years of clean, folded, on-time laundry.
            </h2>
            <p className="mt-5 text-ink-soft max-w-xl">
              SparkleClean began in 2019 with one machine and a corner of a
              garage on Birch Lane. We set one rule for ourselves: return every
              bag cleaner than we found it, and back on time.
            </p>
            <p className="mt-4 text-ink-soft max-w-xl">
              Five years later the shop is still on that same corner, run by
              the same family. The only things that changed are the machines
              and the number of regulars who wave through the window.
            </p>

            <ul className="mt-8 space-y-3">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3 text-ink-soft">
                  <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-tide-500 shrink-0" />
                  <span className="max-w-lg">{value}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 font-display italic text-xl text-ink">
              — Ana Ferreira, owner
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-tide-100" />
            <figure className="relative">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=80"
                  alt="Neatly folded towels and laundry stacked on a wooden table"
                  width={1200}
                  height={1200}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <figcaption className="relative mt-3 text-sm text-ink-faint">
                Folded hot out of the dryer—the way every bag goes home.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
