"use client";

import { useCartStore, type CartItem } from "./cart-store";
import { useHydratedStore } from "./use-hydrated-store";

// Referentially stable so getServerSnapshot doesn't trigger React's
// "should be cached" warning by returning a new array each call.
const EMPTY_CART: CartItem[] = [];

/** Returns [] during SSR/first paint, then the persisted cart after mount —
 * avoids a hydration mismatch between server render and localStorage state. */
export function useHydratedCartItems() {
  return useHydratedStore(useCartStore, (s) => s.items, EMPTY_CART);
}
