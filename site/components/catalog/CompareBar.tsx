"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries/ua";
import { useCompareStore } from "@/lib/compare-store";
import { useHydratedStore } from "@/lib/use-hydrated-store";

const EMPTY: string[] = [];

export function CompareBar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const skus = useHydratedStore(useCompareStore, (s) => s.skus, EMPTY);
  const clear = useCompareStore((s) => s.clear);

  return (
    <AnimatePresence>
      {skus.length > 0 && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed left-0 right-0 z-40 flex justify-center"
          style={{ bottom: "var(--s-5)" }}
        >
          <div
            className="flex items-center"
            style={{
              gap: "var(--s-5)",
              background: "var(--ink-2)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-pill)",
              padding: "10px 10px 10px 22px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
            }}
          >
            <span style={{ fontSize: "var(--t-sm)", color: "var(--text)" }}>
              {dict.catalog.compareBarTitle} · {skus.length}
            </span>
            <button
              type="button"
              onClick={clear}
              style={{ fontSize: "var(--t-xs)", color: "var(--text-mute)" }}
            >
              {dict.catalog.compareClear}
            </button>
            <Link href={`/${locale}/compare`} className="btn btn-primary" style={{ padding: "10px 20px" }}>
              {dict.catalog.compareBarCta}
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
