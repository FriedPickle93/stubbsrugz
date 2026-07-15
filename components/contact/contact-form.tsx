"use client";

import { FormEvent, useState } from "react";
import { BUDGET_RANGES } from "@/lib/constants";

type FormStatus = "idle" | "loading" | "success" | "error" | "unconfigured";

export function ContactForm() {
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
          budget: formData.get("budget"),
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
    <form
      onSubmit={handleSubmit}
      className="space-y-5 border border-border bg-surface p-8"
    >
      <div>
        <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-cream">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border border-border bg-background px-4 py-3 text-cream placeholder:text-muted-foreground focus:border-blue focus:outline-none"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-cream">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-border bg-background px-4 py-3 text-cream placeholder:text-muted-foreground focus:border-blue focus:outline-none"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="rugType" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-cream">
          What kind of rug?
        </label>
        <input
          id="rugType"
          name="rugType"
          type="text"
          className="w-full border border-border bg-background px-4 py-3 text-cream placeholder:text-muted-foreground focus:border-blue focus:outline-none"
          placeholder="e.g. Saints logo, car mat, custom shape"
        />
      </div>

      <div>
        <label htmlFor="budget" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-cream">
          Budget range
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full border border-border bg-background px-4 py-3 text-cream focus:border-blue focus:outline-none"
        >
          <option value="">Select a range</option>
          {BUDGET_RANGES.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-cream">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none border border-border bg-background px-4 py-3 text-cream placeholder:text-muted-foreground focus:border-blue focus:outline-none"
          placeholder="Describe your design, size, colors, or any questions..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full border border-blue bg-blue px-8 py-4 text-sm font-semibold uppercase tracking-widest text-background transition-all hover:bg-blue/90 disabled:cursor-not-allowed disabled:opacity-60"
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
          Contact form is not configured yet. Please reach out via social media
          in the meantime.
        </p>
      )}

      {status === "error" && (
        <p className="text-center text-sm text-red-400">{errorMessage}</p>
      )}
    </form>
  );
}
