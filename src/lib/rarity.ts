import type { Rarity } from "@/types";

export interface RarityStyle {
  name: string;
  borderGradient: string;
  glow: string;
  accent: string;
  bgGradient: string;
  frameColor: string;
}

export const rarityStyles: Record<Rarity, RarityStyle> = {
  common: {
    name: "Common",
    borderGradient: "from-stone-400/40 via-stone-500/30 to-stone-400/40",
    glow: "shadow-stone-500/10",
    accent: "#a8a29e",
    bgGradient: "from-stone-900/80 to-stone-950/90",
    frameColor: "border-stone-400/30",
  },
  rare: {
    name: "Rare",
    borderGradient: "from-sky-400/50 via-sky-500/40 to-sky-400/50",
    glow: "shadow-sky-500/20",
    accent: "#38bdf8",
    bgGradient: "from-sky-950/80 to-ink-950/90",
    frameColor: "border-sky-400/40",
  },
  epic: {
    name: "Epic",
    borderGradient: "from-purple-400/50 via-fuchsia-500/40 to-purple-400/50",
    glow: "shadow-purple-500/20",
    accent: "#c084fc",
    bgGradient: "from-purple-950/80 to-ink-950/90",
    frameColor: "border-purple-400/40",
  },
  legendary: {
    name: "Legendary",
    borderGradient: "from-amber-300/70 via-gold-500/60 to-amber-300/70",
    glow: "shadow-gold-500/30",
    accent: "#d4af37",
    bgGradient: "from-amber-950/80 to-ink-950/90",
    frameColor: "border-gold-400/50",
  },
};

export const rarityOrder: Rarity[] = ["common", "rare", "epic", "legendary"];
