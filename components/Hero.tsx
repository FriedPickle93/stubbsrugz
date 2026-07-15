import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,102,255,0.18)_0%,_transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_60%,_#0a0a0a_100%)]" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-8">
        <Image
          src="/images/logo.jpg"
          alt="Stubbs' Rugs logo"
          width={420}
          height={280}
          priority
          className="h-auto w-full max-w-sm drop-shadow-[0_0_40px_rgba(0,102,255,0.35)]"
        />

        <div className="space-y-4">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Custom Hand-Tufted Rugs
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
            Bold, one-of-a-kind rugs crafted to order. Sports teams, automotive,
            pop culture, die-cut shapes — if you can dream it, we can tuft it.
          </p>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-[var(--accent-blue)] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[var(--accent-blue-light)] hover:shadow-[0_0_30px_rgba(0,102,255,0.4)]"
        >
          Request a Custom Rug
        </a>
      </div>
    </section>
  );
}
