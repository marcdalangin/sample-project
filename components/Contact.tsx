import { site } from "@/data/site";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-tide-500" />
          <span className="text-sm text-ink-faint">Get in touch</span>
        </div>
        <h2 className="mt-4 font-display text-3xl md:text-4xl tracking-tight text-ink max-w-md">
          We&apos;d love to hear from you.
        </h2>
        <p className="mt-4 text-ink-soft max-w-xl">
          Questions about a service, want to set up a regular pickup, or
          just have something to say? Drop us a line.
        </p>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium text-ink-faint">Address</h3>
              <p className="mt-1 text-ink">{site.address}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-ink-faint">Phone</h3>
              <a
                href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                className="mt-1 block text-tide-600 hover:text-tide-500 transition"
              >
                {site.phone}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-medium text-ink-faint">Email</h3>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 block text-tide-600 hover:text-tide-500 transition"
              >
                {site.email}
              </a>
            </div>

            <div>
              <h3 className="text-sm font-medium text-ink-faint">Hours</h3>
              <div className="mt-2 divide-y divide-ink/10 border-t border-ink/10">
                {site.hours.map((row) => (
                  <div key={row.days} className="flex justify-between py-2 text-sm">
                    <span className="text-ink-soft">{row.days}</span>
                    <span className="text-ink">{row.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
