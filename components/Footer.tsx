export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <p className="font-display text-xl font-bold text-white">
          Stubbs&apos; Rugs
        </p>
        <p className="text-sm text-[var(--text-muted)]">
          Custom hand-tufted rugs, made to order.
        </p>

        <div className="flex gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent-blue-light)]"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--accent-blue-light)]"
          >
            Facebook
          </a>
        </div>

        <p className="text-xs text-white/30">
          &copy; {new Date().getFullYear()} Stubbs&apos; Rugs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
