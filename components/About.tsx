export default function About() {
  const features = [
    {
      title: "Fully Custom",
      description:
        "Send your design, logo, or idea — we bring it to life in plush, hand-tufted yarn.",
    },
    {
      title: "Any Shape",
      description:
        "Rectangles, ovals, die-cut logos, bottle shapes — no limits on creativity.",
    },
    {
      title: "Bold Craft",
      description:
        "Dense pile, carved details, and vibrant colors that make your space stand out.",
    },
  ];

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-12">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            About Stubbs&apos; Rugs
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
            Stubbs&apos; Rugs is a custom rug studio specializing in hand-tufted,
            made-to-order pieces. From Saints game-day rugs to automotive floor
            mats and pop-culture icons, every piece is built by hand with
            tufting guns and premium yarn — no mass production, no shortcuts.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-[var(--accent-blue)]/20 bg-[var(--accent-blue)]/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
