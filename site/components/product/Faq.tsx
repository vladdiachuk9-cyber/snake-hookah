import type { Dictionary } from "@/lib/dictionaries/ua";

export function Faq({ dict }: { dict: Dictionary }) {
  const items = dict.product.faqItems;
  return (
    <div>
      <h2 style={{ fontSize: "var(--t-h2)", marginBottom: "var(--s-5)" }}>{dict.product.faq}</h2>
      <div className="flex flex-col">
        {items.map((item) => (
          <details key={item.q} style={{ borderTop: "1px solid var(--line-soft)", padding: "var(--s-4) 0" }}>
            <summary style={{ cursor: "pointer", color: "var(--text)", fontSize: "var(--t-body)", fontWeight: 600 }}>
              {item.q}
            </summary>
            <p style={{ color: "var(--text-body)", fontSize: "var(--t-sm)", marginTop: "var(--s-3)" }}>{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
