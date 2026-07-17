import type { Dictionary } from "@/lib/dictionaries/ua";
import { Reveal } from "@/components/ui/Reveal";

export function Advantages({ dict }: { dict: Dictionary }) {
  const items = dict.home.advantagesItems;
  return (
    <section style={{ background: "var(--sec-forest)", paddingBlock: "var(--s-9)" }}>
      <div className="wrap">
        <Reveal>
          <span className="badge">{dict.home.advantagesKicker}</span>
          <h2 style={{ fontSize: "var(--t-h1)", maxWidth: 640, marginTop: "var(--s-4)" }}>
            {dict.home.advantagesTitle}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "var(--s-6)", marginTop: "var(--s-8)" }}>
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div style={{ borderTop: "1px solid var(--gold)", paddingTop: "var(--s-4)" }}>
                <h3 style={{ fontSize: "var(--t-h3)", color: "var(--text)" }}>{item.title}</h3>
                <p style={{ fontSize: "var(--t-sm)", color: "var(--text-body)", marginTop: "var(--s-2)" }}>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
