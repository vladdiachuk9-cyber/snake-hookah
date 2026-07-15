"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistState {
  skus: string[];
  toggle: (sku: string) => void;
  has: (sku: string) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      skus: [],
      toggle: (sku) =>
        set({
          skus: get().skus.includes(sku) ? get().skus.filter((s) => s !== sku) : [...get().skus, sku],
        }),
      has: (sku) => get().skus.includes(sku),
    }),
    { name: "snake-hookah-wishlist", skipHydration: true },
  ),
);
