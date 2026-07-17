import type { Dictionary } from "@/lib/dictionaries/ua";
import { Reveal } from "@/components/ui/Reveal";

export function GeoReviews({ dict }: { dict: Dictionary }) {
  const countries = dict.home.countries;
  return (
    <section style={{ background: "var(--sec-graphite)", paddingBlock: "var(--s-9)" }}>
      <div className="wrap-narrow text-center">
        <Reveal>
          <span className="badge">{dict.home.reviewsKicker}</span>
          <h2 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>{dict.home.reviewsTitle}</h2>
          <p style={{ fontSize: 16, color: "var(--text-body)", marginTop: "var(--s-4)", maxWidth: 560, marginInline: "auto" }}>
            {dict.home.reviewsBody}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap justify-center" style={{ gap: "var(--s-3)", marginTop: "var(--s-6)" }}>
          {countries.map((country) => (
            <span
              key={country}
              style={{
                border: "1px solid #3a3a3f",
                borderRadius: "var(--r-pill)",
                padding: "8px 18px",
                fontSize: "var(--t-sm)",
                color: "var(--text)",
              }}
            >
              {country}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
