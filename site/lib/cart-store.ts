"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  sku: string;
  slug: string;
  name: string;
  priceUsd: number;
  priceUah: number;
  image: string;
  qty: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (sku: string) => void;
  setQty: (sku: string, qty: number) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      add: (item, qty = 1) => {
        const items = get().items;
        const existing = items.find((i) => i.sku === item.sku);
        set({
          items: existing
            ? items.map((i) => (i.sku === item.sku ? { ...i, qty: i.qty + qty } : i))
            : [...items, { ...item, qty }],
          isOpen: true,
        });
      },
      remove: (sku) => set({ items: get().items.filter((i) => i.sku !== sku) }),
      setQty: (sku, qty) =>
        set({
          items: get().items.map((i) => (i.sku === sku ? { ...i, qty: Math.max(1, qty) } : i)),
        }),
      clear: () => set({ items: [] }),
    }),
    {
      name: "snake-hookah-cart",
      skipHydration: true,
      partialize: (state) => ({ items: state.items }),
    },
  ),
);

export function cartTotals(items: CartItem[]) {
  return items.reduce(
    (acc, item) => {
      acc.qty += item.qty;
      acc.usd += item.priceUsd * item.qty;
      acc.uah += item.priceUah * item.qty;
      return acc;
    },
    { qty: 0, usd: 0, uah: 0 },
  );
}
