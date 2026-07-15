"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error" | "unconfigured";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          rugType: formData.get("rugType"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.code === "UNCONFIGURED") {
          setStatus("unconfigured");
          return;
        }
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message."
      );
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-xl">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            Ready for a custom rug? Tell us about your idea and we&apos;ll get
            back to you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-8"
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--accent-blue)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--accent-blue)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="rugType" className="mb-2 block text-sm font-medium text-white">
              What kind of rug?
            </label>
            <input
              id="rugType"
              name="rugType"
              type="text"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--accent-blue)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)]"
              placeholder="e.g. Saints logo, car mat, custom shape"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/30 focus:border-[var(--accent-blue)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-blue)]"
              placeholder="Describe your design, size, colors, or any questions..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-full bg-[var(--accent-blue)] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[var(--accent-blue-light)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-center text-sm text-green-400">
              Message sent! We&apos;ll be in touch soon.
            </p>
          )}

          {status === "unconfigured" && (
            <p className="text-center text-sm text-amber-400">
              Contact form is not configured yet. Please reach out via social
              media in the meantime.
            </p>
          )}

          {status === "error" && (
            <p className="text-center text-sm text-red-400">{errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
}
