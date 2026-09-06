"use client";

import { type FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-tide-50 p-8 text-center">
        <p className="font-display text-xl text-ink">
          Thanks — we&apos;ll reach out within one business day.
        </p>
        <p className="mt-2 text-sm text-ink-soft">
          In the meantime, feel free to call us at{" "}
          <a href="tel:+15550123456" className="text-tide-600 hover:text-tide-500">
            (555) 012-3456
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm text-ink-soft mb-1 block">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-ink/10 bg-white px-4 py-3 text-ink placeholder:text-ink-faint focus:border-tide-500 focus:outline-none focus:ring-2 focus:ring-tide-200"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm text-ink-soft mb-1 block">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-ink/10 bg-white px-4 py-3 text-ink placeholder:text-ink-faint focus:border-tide-500 focus:outline-none focus:ring-2 focus:ring-tide-200"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="service" className="text-sm text-ink-soft mb-1 block">
          What do you need?
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-lg border border-ink/10 bg-white px-4 py-3 text-ink focus:border-tide-500 focus:outline-none focus:ring-2 focus:ring-tide-200"
        >
          <option>Wash &amp; Fold</option>
          <option>Dry Cleaning</option>
          <option>Pickup &amp; Delivery</option>
          <option>Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-ink-soft mb-1 block">
          Message <span className="text-ink-faint">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-ink/10 bg-white px-4 py-3 text-ink placeholder:text-ink-faint focus:border-tide-500 focus:outline-none focus:ring-2 focus:ring-tide-200"
          placeholder="Tell us a little more…"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-mist-50 transition hover:bg-tide-600"
      >
        Send message
      </button>
    </form>
  );
}
