import type { Dictionary } from "@/lib/dictionaries/ua";
import { Reveal } from "@/components/ui/Reveal";

export function InstagramCta({ dict }: { dict: Dictionary }) {
  return (
    <section style={{ paddingBlock: "var(--s-8)" }}>
      <div className="wrap flex flex-col items-center text-center">
        <Reveal>
          <span className="badge">{dict.home.instagramKicker}</span>
          <h2 style={{ fontSize: "var(--t-h1)", marginTop: "var(--s-4)" }}>{dict.home.instagramTitle}</h2>
          <a
            href="https://www.instagram.com/snake.hookah"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ marginTop: "var(--s-5)" }}
          >
            Instagram →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
