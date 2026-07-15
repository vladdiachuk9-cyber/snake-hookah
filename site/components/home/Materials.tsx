import Image from "next/image";
import type { Dictionary } from "@/lib/dictionaries/ua";
import { Reveal } from "@/components/ui/Reveal";

export function Materials({ dict }: { dict: Dictionary }) {
  return (
    <section style={{ paddingBlock: "var(--s-9)" }}>
      <div className="wrap grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: "var(--s-8)" }}>
        <Reveal className="relative overflow-hidden" style={{ borderRadius: "var(--r-lg)", aspectRatio: "4 / 5" }}>
          <Image
            src="/images/products/snk-spr-wln-grn/3-base.webp"
            alt="Snake Hookah — натуральна шкіра та дерев'яна спіраль зблизька"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <span className="badge">{dict.home.materialsKicker}</span>
          <h2 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>{dict.home.materialsTitle}</h2>
          <p style={{ fontSize: 18, color: "var(--text-body)", marginTop: "var(--s-4)", maxWidth: 480 }}>
            {dict.home.materialsBody}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
