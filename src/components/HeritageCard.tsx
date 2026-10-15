"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import type { Monument } from "@/types";
import { rarityStyles } from "@/lib/rarity";
import { Link } from "@/i18n/routing";

interface HeritageCardProps {
  monument: Monument;
  locale: "en" | "ar";
  selected?: boolean;
  onSelect?: (monument: Monument) => void;
  inCollection?: boolean;
}

export function HeritageCard({
  monument,
  locale,
  selected = false,
  onSelect,
  inCollection = false,
}: HeritageCardProps) {
  const t = useTranslations();
  const cardRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!cardRef.current || prefersReducedMotion) return;
      const rect = cardRef.current.getBoundingClientRect();
      const clientX =
        "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
      const clientY =
        "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;

      const rotateY = (x - 0.5) * 20;
      const rotateX = (0.5 - y) * 20;

      setTilt({ x: rotateX, y: rotateY });
      setGlare({ x: x * 100, y: y * 100, opacity: 0.3 });
    },
    [prefersReducedMotion]
  );

  const handleLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setGlare((g) => ({ ...g, opacity: 0 }));
  }, []);

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isDragging) return;
    setFlipped((f) => !f);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isDragging) return;
    e.preventDefault();
    onSelect?.(monument);
  };

  const style = rarityStyles[monument.rarity];
  const isRtl = locale === "ar";

  const cardTransform = prefersReducedMotion
    ? undefined
    : {
        rotateX: tilt.x,
        rotateY: tilt.y,
        transformPerspective: 1000,
      };

  return (
    <div className="group relative w-full" style={{ perspective: "1200px" }}>
      <motion.div
        ref={cardRef}
        initial={false}
        animate={cardTransform}
        transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 25 }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onTouchMove={handleMove}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label={`${t("common.flip")}: ${monument.names.official[locale]}`}
        className={`relative aspect-[3/4] w-full cursor-pointer rounded-2xl border-2 ${style.frameColor} bg-gradient-to-br ${style.bgGradient} shadow-2xl ${style.glow} transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60 ${
          selected ? "ring-2 ring-gold-400/80" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 rounded-2xl p-0.5"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Front face */}
          <div
            className="absolute inset-0 flex flex-col overflow-hidden rounded-xl"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* Decorative frame border */}
            <div
              className={`pointer-events-none absolute inset-0 z-20 rounded-xl bg-gradient-to-br ${style.borderGradient} opacity-60 mix-blend-overlay`}
            />
            {/* Rarity corner indicator */}
            <div className="absolute right-2 top-2 z-30">
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                style={{ backgroundColor: `${style.accent}25`, color: style.accent, border: `1px solid ${style.accent}55` }}
              >
                {t(`rarity.${monument.rarity}`)}
              </span>
            </div>
            {inCollection && (
              <div className="absolute left-2 top-2 z-30">
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300 border border-emerald-500/40">
                  {t("common.inCollection")}
                </span>
              </div>
            )}
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src={monument.images[0]?.url}
                alt={monument.images[0]?.alt[locale] || monument.names.official[locale]}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent" />
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-3">
              <div>
                <h3 className={`font-display text-lg font-bold leading-tight text-parchment ${isRtl ? "text-right" : ""}`}>
                  {monument.names.official[locale]}
                </h3>
                <p className={`mt-0.5 text-xs text-gold-300/80 ${isRtl ? "text-right" : ""}`}>
                  {monument.civilization[locale]}
                </p>
              </div>
              <div className={`flex items-center justify-between text-[10px] text-parchment/60 ${isRtl ? "flex-row-reverse" : ""}`}>
                <span>{monument.country.name[locale]}</span>
                <span className="font-mono">{monument.cardNumber}</span>
              </div>
            </div>
            {/* Specular glare */}
            <div
              className="pointer-events-none absolute inset-0 z-40 rounded-xl opacity-0 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity * 0.4}) 0%, transparent 60%)`,
                opacity: glare.opacity,
              }}
            />
          </div>

          {/* Back face */}
          <div
            className="absolute inset-0 flex flex-col overflow-hidden rounded-xl p-4"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="flex h-full flex-col">
              <h4 className={`font-display text-base font-bold text-gold-300 ${isRtl ? "text-right" : ""}`}>
                {monument.names.official[locale]}
              </h4>
              <div className={`mt-2 space-y-1.5 text-xs text-parchment/80 ${isRtl ? "text-right" : ""}`}>
                <p>
                  <span className="text-parchment/50">{t("common.period")}: </span>
                  {monument.approximateDate[locale]}
                </p>
                <p>
                  <span className="text-parchment/50">{t("common.category")}: </span>
                  {t(`category.${monument.category}`)}
                </p>
                <p>
                  <span className="text-parchment/50">{t("common.location")}: </span>
                  {monument.country.name[locale]} — {monument.region[locale]}
                </p>
              </div>
              <p className={`mt-3 line-clamp-4 text-xs leading-relaxed text-parchment/70 ${isRtl ? "text-right" : ""}`}>
                {monument.overview[0]?.text[locale]}
              </p>
              <div className="mt-auto flex items-center justify-between pt-3">
                <Link
                  href={`/monument/${monument.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className={`rounded-lg bg-gold-500/20 px-3 py-1.5 text-xs font-semibold text-gold-300 transition-colors hover:bg-gold-500/30 ${isRtl ? "text-right" : ""}`}
                >
                  {t("common.learnMore")} →
                </Link>
                <span className="font-mono text-[10px] text-parchment/40">
                  {monument.cardNumber}
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Flip button */}
      <button
        onClick={handleFlip}
        aria-label={t("common.flip")}
        className="absolute -bottom-3 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink-800/90 px-3 py-1 text-[10px] font-medium text-gold-300 opacity-0 shadow-lg backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-ink-700 focus:opacity-100 focus:outline-none"
      >
        {flipped ? "↻ " : "↻ "}
        {t("common.flip")}
      </button>
    </div>
  );
}
