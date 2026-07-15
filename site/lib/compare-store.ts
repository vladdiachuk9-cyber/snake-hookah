"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

const MAX_COMPARE = 4;

interface CompareState {
  skus: string[];
  toggle: (sku: string) => void;
  has: (sku: string) => boolean;
  clear: () => void;
}

export const useCompareStore = create<CompareState>()(
  persist(
    (set, get) => ({
      skus: [],
      toggle: (sku) => {
        const skus = get().skus;
        if (skus.includes(sku)) {
          set({ skus: skus.filter((s) => s !== sku) });
        } else if (skus.length < MAX_COMPARE) {
          set({ skus: [...skus, sku] });
        }
      },
      has: (sku) => get().skus.includes(sku),
      clear: () => set({ skus: [] }),
    }),
    { name: "snake-hookah-compare", skipHydration: true },
  ),
);

export { MAX_COMPARE };
