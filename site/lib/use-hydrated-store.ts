"use client";

import { useEffect, useSyncExternalStore } from "react";
import type { StoreApi, UseBoundStore } from "zustand";

type PersistedStore<T> = UseBoundStore<StoreApi<T>> & {
  persist: { rehydrate: () => void };
};

/** Generic SSR-safe reader for a zustand store created with
 * `persist(..., { skipHydration: true })`. Returns `fallback` until the
 * client has rehydrated from localStorage, avoiding a hydration mismatch. */
export function useHydratedStore<T, U>(
  store: PersistedStore<T>,
  selector: (state: T) => U,
  fallback: U,
): U {
  useEffect(() => {
    store.persist.rehydrate();
  }, [store]);

  return useSyncExternalStore(
    store.subscribe,
    () => selector(store.getState()),
    () => fallback,
  );
}
