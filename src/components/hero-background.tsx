export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-grid animate-hero-grid-drift absolute -inset-20 opacity-[0.06]" />
    </div>
  );
}
