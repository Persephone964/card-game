"use client";

import { useState, useEffect, createContext, useContext, useCallback } from "react";
import type { UserCard } from "@/types";

interface CollectionContextValue {
  collection: UserCard[];
  collectedIds: Set<string>;
  favoriteIds: Set<string>;
  addToCollection: (monumentId: string) => void;
  removeFromCollection: (monumentId: string) => void;
  toggleFavorite: (monumentId: string) => void;
  isCollected: (monumentId: string) => boolean;
  isFavorite: (monumentId: string) => boolean;
  completion: number;
  totalMonuments: number;
}

const CollectionContext = createContext<CollectionContextValue | null>(null);

const STORAGE_KEY = "heritage-cards-collection";

export function CollectionProvider({
  children,
  totalMonuments,
}: {
  children: React.ReactNode;
  totalMonuments: number;
}) {
  const [collection, setCollection] = useState<UserCard[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setCollection(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  const persist = useCallback((cards: UserCard[]) => {
    setCollection(cards);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
    } catch {
      // ignore
    }
  }, []);

  const addToCollection = useCallback(
    (monumentId: string) => {
      setCollection((prev) => {
        const existing = prev.find((c) => c.monumentId === monumentId);
        const next = existing
          ? prev.map((c) =>
              c.monumentId === monumentId ? { ...c, count: c.count + 1 } : c
            )
          : [
              ...prev,
              {
                monumentId,
                collectedAt: new Date().toISOString(),
                count: 1,
                favorite: false,
              },
            ];
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          // ignore
        }
        return next;
      });
    },
    []
  );

  const removeFromCollection = useCallback((monumentId: string) => {
    setCollection((prev) => {
      const next = prev.filter((c) => c.monumentId !== monumentId);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const toggleFavorite = useCallback((monumentId: string) => {
    setCollection((prev) => {
      const next = prev.map((c) =>
        c.monumentId === monumentId ? { ...c, favorite: !c.favorite } : c
      );
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const collectedIds = new Set(collection.map((c) => c.monumentId));
  const favoriteIds = new Set(
    collection.filter((c) => c.favorite).map((c) => c.monumentId)
  );

  const isCollected = useCallback(
    (id: string) => collectedIds.has(id),
    [collectedIds]
  );
  const isFavorite = useCallback(
    (id: string) => favoriteIds.has(id),
    [favoriteIds]
  );

  const completion = totalMonuments > 0 ? (collection.length / totalMonuments) * 100 : 0;

  return (
    <CollectionContext.Provider
      value={{
        collection,
        collectedIds,
        favoriteIds,
        addToCollection,
        removeFromCollection,
        toggleFavorite,
        isCollected,
        isFavorite,
        completion,
        totalMonuments,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
}

export function useCollection() {
  const ctx = useContext(CollectionContext);
  if (!ctx) throw new Error("useCollection must be used within CollectionProvider");
  return ctx;
}
