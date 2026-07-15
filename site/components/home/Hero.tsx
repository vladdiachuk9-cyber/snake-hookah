"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ minHeight: "92vh" }}>
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="/images/products/snk-spr-wln-grn/1-front.webp"
          alt="Snake Hookah Spiral Walnut Green"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "65% 20%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--ink) 0%, color-mix(in srgb, var(--ink) 55%, transparent) 42%, color-mix(in srgb, var(--ink) 15%, transparent) 70%), linear-gradient(0deg, var(--ink) 0%, transparent 30%)",
          }}
        />
      </motion.div>

      <motion.div className="relative wrap flex flex-col justify-center" style={{ minHeight: "92vh", opacity }}>
        <motion.span
          className="badge"
          style={{ width: "fit-content", marginBottom: "var(--s-5)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {dict.home.heroKicker}
        </motion.span>
        <motion.h1
          style={{ fontSize: "var(--t-hero)", maxWidth: 620, lineHeight: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {dict.home.heroTitle}
        </motion.h1>
        <motion.p
          style={{ fontSize: 18, color: "var(--text-body)", maxWidth: 480, marginTop: "var(--s-4)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {dict.home.heroLede}
        </motion.p>
        <motion.div
          className="flex flex-wrap"
          style={{ gap: "var(--s-4)", marginTop: "var(--s-6)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link href={`/${locale}/catalog`} className="btn btn-primary">
            {dict.home.heroCtaPrimary}
          </Link>
          <Link href={`/${locale}/about`} className="btn btn-secondary">
            {dict.home.heroCtaSecondary}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
