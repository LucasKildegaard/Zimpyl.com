interface HeroProps {
  heroLines: string[];
}

export default function Hero({ heroLines }: HeroProps) {
  return (
    <section className="hero container">
      <h1 className="hero-title">
        {heroLines.map((line: string, i: number) => (
          <span key={i}>{line}</span>
        ))}
      </h1>
    </section>
  );
}
