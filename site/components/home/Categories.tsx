import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import { Reveal } from "@/components/ui/Reveal";

export function Categories({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const cards = [
    {
      name: dict.home.spiralName,
      desc: dict.home.spiralDesc,
      image: "/images/products/snk-spr-wln-grn/2-crown.webp",
      alt: "Snake Hookah Spiral — дерев'яна спіраль зблизька",
    },
    {
      name: dict.home.wildName,
      desc: dict.home.wildDesc,
      image: "/images/products/snk-wld-crc-grn/1-front.webp",
      alt: "Snake Hookah Wild Collection — крокодилова шкіра",
    },
  ];

  return (
    <section style={{ paddingBlock: "var(--s-9)" }}>
      <div className="wrap">
        <Reveal>
          <span className="badge">{dict.home.categoriesKicker}</span>
          <h2 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>{dict.home.categoriesTitle}</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--s-6)", marginTop: "var(--s-8)" }}>
          {cards.map((card, i) => (
            <Reveal key={card.name} delay={i * 0.1}>
              <Link href={`/${locale}/catalog`} className="group block">
                <div className="relative overflow-hidden" style={{ borderRadius: "var(--r-lg)", aspectRatio: "4 / 5", background: "var(--ink-2)" }}>
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="transition-transform duration-700 group-hover:scale-105"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.55), transparent 55%)" }} />
                  <div className="absolute left-0 right-0 bottom-0" style={{ padding: "var(--s-6)" }}>
                    <h3 style={{ fontSize: "var(--t-h2)", color: "#fff" }}>{card.name}</h3>
                    <p style={{ fontSize: "var(--t-sm)", color: "#E8E6E3", maxWidth: 340, marginTop: "var(--s-2)" }}>{card.desc}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
