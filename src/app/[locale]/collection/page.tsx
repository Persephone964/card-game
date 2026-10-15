"use client";

import { useState, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { PageShell } from "@/components/PageShell";
import { HeritageCard } from "@/components/HeritageCard";
import { monuments } from "@/data/monuments";
import { useCollection } from "@/lib/collection-store";
import type { Rarity } from "@/types";
import { rarityOrder } from "@/lib/rarity";

type SortOption = "name" | "date" | "recent";
type FilterType = "all" | "collected" | "favorites";

export default function CollectionPage() {
  return (
    <PageShell totalMonuments={monuments.length}>
      <CollectionContent />
    </PageShell>
  );
}

function CollectionContent() {
  const t = useTranslations();
  const locale = useLocale() as "en" | "ar";
  const { collection, collectedIds, favoriteIds, completion, removeFromCollection, toggleFavorite } = useCollection();
  const [filter, setFilter] = useState<FilterType>("all");
  const [rarityFilter, setRarityFilter] = useState<string>("all");
  const [sort, setSort] = useState<SortOption>("recent");

  const collectedMonuments = useMemo(() => {
    return monuments.filter((m) => collectedIds.has(m.id));
  }, [collectedIds]);

  const favoriteMonuments = useMemo(() => {
    return monuments.filter((m) => favoriteIds.has(m.id));
  }, [favoriteIds]);

  const visibleMonuments = useMemo(() => {
    let result: typeof monuments = [];
    if (filter === "all") result = monuments;
    else if (filter === "collected") result = collectedMonuments;
    else result = favoriteMonuments;

    if (rarityFilter !== "all") {
      result = result.filter((m) => m.rarity === rarityFilter);
    }

    result = [...result].sort((a, b) => {
      if (sort === "name") return a.names.official.en.localeCompare(b.names.official.en);
      if (sort === "date") return (a.yearFrom ?? 0) - (b.yearFrom ?? 0);
      return b.addedAt.localeCompare(a.addedAt);
    });

    return result;
  }, [filter, rarityFilter, sort, collectedMonuments, favoriteMonuments]);

  const filterSelectClass =
    "rounded-lg border border-gold-500/20 bg-ink-900/60 px-3 py-2 text-sm text-parchment focus:border-gold-500/50 focus:outline-none";

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <h1 className="font-display text-4xl font-bold text-parchment">
          {t("common.collection")}
        </h1>
        <p className="mt-2 text-parchment/60">
          {t("common.completion")}: {collectedMonuments.length} / {monuments.length}
        </p>
      </div>

      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between text-sm text-parchment/60 mb-2">
          <span>{t("common.collected")}: {collectedMonuments.length}</span>
          <span>{Math.round(completion)}%</span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-ink-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-400 transition-all duration-500"
            style={{ width: `${completion}%` }}
          />
        </div>
      </div>

      {/* Rarity breakdown */}
      <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {rarityOrder.map((r) => {
          const total = monuments.filter((m) => m.rarity === r).length;
          const owned = collectedMonuments.filter((m) => m.rarity === r).length;
          return (
            <div key={r} className="rounded-xl border border-gold-500/10 bg-ink-900/50 p-4">
              <p className="text-xs uppercase tracking-wider text-parchment/40">
                {t(`rarity.${r}`)}
              </p>
              <p className="mt-1 text-xl font-bold text-parchment">
                {owned} <span className="text-sm text-parchment/40">/ {total}</span>
              </p>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <div className="flex rounded-lg border border-gold-500/20 bg-ink-900/60 p-1">
          {(["all", "collected", "favorites"] as FilterType[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === f
                  ? "bg-gold-500/20 text-gold-300"
                  : "text-parchment/60 hover:text-parchment"
              }`}
            >
              {f === "all" ? t("common.all") : f === "collected" ? t("common.collected") : t("common.favorites")}
            </button>
          ))}
        </div>
        <select
          value={rarityFilter}
          onChange={(e) => setRarityFilter(e.target.value)}
          className={filterSelectClass}
        >
          <option value="all">{t("common.all")} {t("common.rarity")}</option>
          {rarityOrder.map((r) => (
            <option key={r} value={r}>{t(`rarity.${r}`)}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className={filterSelectClass}
        >
          <option value="recent">{t("common.recentlyAdded")}</option>
          <option value="name">{t("common.name")}</option>
          <option value="date">{t("common.oldest")}</option>
        </select>
      </div>

      {/* Cards */}
      {visibleMonuments.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gold-500/20 py-20">
          <p className="text-parchment/60">{t("common.noResults")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {visibleMonuments.map((m) => (
            <div key={m.id} className="relative">
              <HeritageCard
                monument={m}
                locale={locale}
                inCollection={collectedIds.has(m.id)}
              />
              <div className="mt-6 flex gap-2">
                {collectedIds.has(m.id) ? (
                  <button
                    onClick={() => removeFromCollection(m.id)}
                    className="flex-1 rounded-lg bg-rose-500/20 px-2 py-1.5 text-xs font-semibold text-rose-300 transition-colors hover:bg-rose-500/30"
                  >
                    {t("common.removeFromCollection")}
                  </button>
                ) : null}
                {collectedIds.has(m.id) && (
                  <button
                    onClick={() => toggleFavorite(m.id)}
                    className={`rounded-lg px-3 py-1.5 text-xs transition-colors ${
                      favoriteIds.has(m.id)
                        ? "bg-amber-500/20 text-amber-300"
                        : "bg-ink-800 text-parchment/50"
                    }`}
                    aria-label={t("common.favorite")}
                  >
                    {favoriteIds.has(m.id) ? "★" : "☆"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
