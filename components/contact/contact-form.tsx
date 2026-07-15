"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Upload, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BUDGET_RANGES,
  RUG_SIZES,
  SITE_EMAIL,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone is required"),
  size: z.string().min(1, "Select a size"),
  description: z.string().min(10, "Tell us about your project"),
  budget: z.string().min(1, "Select a budget range"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const fieldClass =
  "w-full border border-border bg-background px-4 py-3 text-cream placeholder:text-muted-foreground focus:border-gold focus:outline-none";

const labelClass =
  "mb-2 block text-xs font-semibold uppercase tracking-widest text-cream";

const errorClass = "text-xs text-gold";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    setSubmitError(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        referenceFileName: fileName ?? undefined,
      }),
    });

    const result = (await response.json().catch(() => null)) as {
      error?: string;
      code?: string;
    } | null;

    if (!response.ok) {
      setSubmitError(
        result?.error ?? `Could not send your request. Email us at ${SITE_EMAIL}.`
      );
      return;
    }

    setSubmitted(true);
    reset();
    setFileName(null);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="border border-gold/30 bg-surface p-10 text-center"
      >
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-gold" />
        <h3 className="font-display text-3xl tracking-wide text-cream">
          REQUEST RECEIVED
        </h3>
        <p className="mt-3 text-muted-foreground">
          We&apos;ll review your project and respond within 24–48 hours.
        </p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => {
            setSubmitted(false);
            setSubmitError(null);
          }}
        >
          Submit Another
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-border bg-surface p-6 sm:p-10"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            className={fieldClass}
            placeholder="Your name"
            {...register("name")}
          />
          {errors.name && (
            <p className={errorClass}>{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            type="email"
            className={fieldClass}
            placeholder="you@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p className={errorClass}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className={fieldClass}
            placeholder="(478) 000-0000"
            {...register("phone")}
          />
          {errors.phone && (
            <p className={errorClass}>{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="size" className={labelClass}>
            Desired Rug Size
          </label>
          <select id="size" className={fieldClass} {...register("size")} defaultValue="">
            <option value="" disabled>
              Select size
            </option>
            {RUG_SIZES.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {errors.size && (
            <p className={errorClass}>{errors.size.message}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="description" className={labelClass}>
            Project Description
          </label>
          <textarea
            id="description"
            rows={4}
            className={cn(fieldClass, "resize-none")}
            placeholder="Describe your vision — subject, colors, style, references..."
            {...register("description")}
          />
          {errors.description && (
            <p className={errorClass}>{errors.description.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget Range
          </label>
          <select id="budget" className={fieldClass} {...register("budget")} defaultValue="">
            <option value="" disabled>
              Select budget
            </option>
            {BUDGET_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          {errors.budget && (
            <p className={errorClass}>{errors.budget.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="reference" className={labelClass}>
            Upload Reference Image
          </label>
          <label
            htmlFor="reference"
            className={cn(
              "flex cursor-pointer flex-col items-center justify-center border-2 border-dashed border-border bg-background px-4 py-8 transition-colors hover:border-gold"
            )}
          >
            <Upload className="mb-2 h-6 w-6 text-gold" />
            <span className="text-sm text-muted-foreground">
              {fileName ?? "Click to upload reference"}
            </span>
            <input
              id="reference"
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            />
          </label>
        </div>
      </div>

      {submitError && (
        <p className="mt-6 text-sm text-gold" role="alert">
          {submitError}
        </p>
      )}

      <Button
        type="submit"
        variant="gold"
        size="lg"
        className="mt-8 w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
}
