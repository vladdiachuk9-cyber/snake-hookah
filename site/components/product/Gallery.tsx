"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { ProductImage } from "@/lib/data/products";

type Slide = { kind: "image"; image: ProductImage } | { kind: "video"; src: string };

export function Gallery({
  images,
  video,
  soonLabel,
}: {
  images: ProductImage[];
  video?: string;
  soonLabel: string;
}) {
  const slides: Slide[] = [
    ...images.map((image): Slide => ({ kind: "image", image })),
    ...(video ? [{ kind: "video", src: video } as Slide] : []),
  ];
  const [active, setActive] = useState(0);
  const current = slides[active];

  if (!current) {
    return (
      <div className="gallery flex items-center justify-center" style={{ aspectRatio: "2 / 3", color: "var(--text-mute)", fontSize: "var(--t-sm)" }}>
        {soonLabel}
      </div>
    );
  }

  return (
    <div className="flex flex-col" style={{ gap: "var(--s-4)" }}>
      <div className="gallery relative overflow-hidden" style={{ aspectRatio: "2 / 3" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.kind === "image" ? current.image.src : current.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            {current.kind === "image" ? (
              <Image
                src={current.image.src}
                alt={current.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                style={{ objectFit: "contain" }}
              />
            ) : (
              <>
                <video
                  src={current.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
                <span
                  className="absolute"
                  style={{
                    top: "var(--s-3)",
                    left: "var(--s-3)",
                    fontSize: "var(--t-label)",
                    letterSpacing: "0.1em",
                    color: "var(--gold)",
                    border: "1px solid var(--gold)",
                    borderRadius: "var(--r-sm)",
                    padding: "3px 8px",
                    background: "color-mix(in srgb, var(--ink) 70%, transparent)",
                  }}
                >
                  360°
                </span>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {slides.length > 1 && (
        <div className="flex" style={{ gap: "var(--s-3)" }}>
          {slides.map((slide, i) => (
            <button
              key={slide.kind === "image" ? slide.image.src : slide.src}
              type="button"
              onClick={() => setActive(i)}
              className="gallery relative"
              style={{
                padding: 4,
                width: 72,
                height: 72,
                borderColor: i === active ? "var(--gold)" : "var(--line)",
              }}
              aria-label={slide.kind === "image" ? `${i + 1}` : "360°"}
            >
              {slide.kind === "image" ? (
                <Image src={slide.image.src} alt={slide.image.alt} width={64} height={64} style={{ objectFit: "contain", width: "100%", height: "100%" }} />
              ) : (
                <div className="flex items-center justify-center h-full" style={{ color: "var(--gold)", fontSize: 10, letterSpacing: "0.05em" }}>
                  360°
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
