"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Monument } from "@/types";
import { HeritageCard } from "./HeritageCard";
import { Link } from "@/i18n/routing";

interface CardCarouselProps {
  monuments: Monument[];
  locale: "en" | "ar";
  collectionIds?: Set<string>;
}

export function CardCarousel({ monuments, locale, collectionIds }: CardCarouselProps) {
  const t = useTranslations();
  const [index, setIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (newIndex: number) => {
      setIndex(Math.max(0, Math.min(newIndex, monuments.length - 1)));
    },
    [monuments.length]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        locale === "ar" ? prev() : next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        locale === "ar" ? next() : prev();
      }
    },
    [next, prev, locale]
  );

  const onDragStart = (clientX: number) => {
    setDragStartX(clientX);
    setIsDragging(false);
  };

  const onDragMove = (clientX: number) => {
    if (dragStartX === null) return;
    const delta = clientX - dragStartX;
    if (Math.abs(delta) > 10) {
      setIsDragging(true);
    }
  };

  const onDragEnd = (clientX: number) => {
    if (dragStartX === null) return;
    const delta = clientX - dragStartX;
    if (Math.abs(delta) > 60) {
      if (delta < 0) {
        locale === "ar" ? prev() : next();
      } else {
        locale === "ar" ? next() : prev();
      }
    }
    setDragStartX(null);
    setTimeout(() => setIsDragging(false), 100);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  if (monuments.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center text-parchment/50">
        {t("common.noResults")}
      </div>
    );
  }

  const getCardStyle = (i: number) => {
    const offset = i - index;
    const absOffset = Math.abs(offset);
    if (absOffset > 2) return { display: "none" as const };

    const isCenter = offset === 0;
    const scale = isCenter ? 1 : 0.75;
    const translateX = offset * 55;
    const zIndex = 10 - absOffset;
    const opacity = absOffset > 1 ? 0.4 : 1;

    return {
      scale,
      x: `${translateX}%`,
      zIndex,
      opacity,
      rotateY: offset * -8,
    };
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-5xl"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={t("common.featuredMonuments")}
    >
      <div className="relative h-[420px] sm:h-[480px]">
        <AnimatePresence initial={false}>
          {monuments.map((monument, i) => {
            const style = getCardStyle(i);
            if ("display" in style) return null;
            return (
              <motion.div
                key={monument.id}
                className="absolute left-1/2 top-0 w-56 sm:w-64"
                style={{ marginLeft: "-7rem" }}
                animate={style}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 300, damping: 28 }
                }
                onMouseDown={(e) => onDragStart(e.clientX)}
                onMouseMove={(e) => onDragMove(e.clientX)}
                onMouseUp={(e) => onDragEnd(e.clientX)}
                onMouseLeave={() => {
                  if (dragStartX !== null) onDragEnd(dragStartX);
                }}
                onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
                onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
                onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
              >
                <div
                  style={{ pointerEvents: i === index ? "auto" : "none" }}
                >
                  <HeritageCard
                    monument={monument}
                    locale={locale}
                    inCollection={collectionIds?.has(monument.id)}
                    onSelect={(m) => {
                      if (isDragging) return;
                      if (i === index) {
                        window.location.href = `/${locale}/monument/${m.slug}`;
                      } else {
                        goTo(i);
                      }
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          disabled={index === 0}
          aria-label={t("common.prev")}
          className="rounded-full border border-gold-500/30 bg-ink-800/50 p-2.5 text-gold-300 transition-colors hover:bg-gold-500/20 disabled:opacity-30 disabled:hover:bg-ink-800/50"
        >
          {locale === "ar" ? "→" : "←"}
        </button>

        <div className="flex items-center gap-2">
          {monuments.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`${t("common.prev")} ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-gold-400"
                  : "w-2 bg-parchment/20 hover:bg-parchment/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={index === monuments.length - 1}
          aria-label={t("common.next")}
          className="rounded-full border border-gold-500/30 bg-ink-800/50 p-2.5 text-gold-300 transition-colors hover:bg-gold-500/20 disabled:opacity-30 disabled:hover:bg-ink-800/50"
        >
          {locale === "ar" ? "←" : "→"}
        </button>
      </div>
    </div>
  );
}
