export type Locale = "en" | "ar";

export type Rarity = "common" | "rare" | "epic" | "legendary";

export type MonumentCategory =
  | "temple"
  | "palace"
  | "ziggurat"
  | "city"
  | "citadel"
  | "gate"
  | "garden"
  | "museum"
  | "mosque"
  | "church"
  | "monument";

export type ClaimType = "fact" | "interpretation" | "tradition" | "debate";

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface Source {
  id: string;
  title: LocalizedText;
  author?: LocalizedText;
  institution?: LocalizedText;
  url?: string;
  accessedAt?: string;
  notes?: LocalizedText;
}

export interface Claim {
  type: ClaimType;
  text: LocalizedText;
  sourceIds?: string[];
}

export interface TimelineEvent {
  year: string;
  title: LocalizedText;
  description?: LocalizedText;
  sourceIds?: string[];
}

export interface MonumentImage {
  id: string;
  url: string;
  alt: LocalizedText;
  attribution?: LocalizedText;
  license?: string;
}

export interface Monument {
  id: string;
  slug: string;
  names: {
    official: LocalizedText;
    alternatives: LocalizedText[];
  };
  country: {
    code: string;
    name: LocalizedText;
  };
  region: LocalizedText;
  coordinates?: {
    lat: number;
    lng: number;
  };
  civilization: LocalizedText;
  periods: LocalizedText[];
  category: MonumentCategory;
  approximateDate: LocalizedText;
  yearFrom?: number;
  yearTo?: number;
  overview: Claim[];
  architecture: Claim[];
  significance: Claim[];
  preservation?: Claim[];
  condition?: Claim[];
  unesco?: {
    inscribed: boolean;
    year?: number;
    criteria?: string[];
    notes?: LocalizedText;
  };
  images: MonumentImage[];
  timeline: TimelineEvent[];
  relatedMonumentIds: string[];
  collections: string[];
  rarity: Rarity;
  cardNumber: string;
  cardSet: string;
  sources: Source[];
  addedAt: string;
}

export interface Collection {
  id: string;
  slug: string;
  name: LocalizedText;
  description: LocalizedText;
  monumentIds: string[];
  accentColor: string;
}

export interface Journey {
  id: string;
  slug: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  steps: {
    monumentId: string;
    narration: LocalizedText;
  }[];
  quiz?: {
    question: LocalizedText;
    options: LocalizedText[];
    correctIndex: number;
    explanation: LocalizedText;
  }[];
  accentColor: string;
}

export interface CardVariant {
  id: string;
  monumentId: string;
  edition: string;
  rarity: Rarity;
  frameColor: string;
}

export interface UserCard {
  monumentId: string;
  variantId?: string;
  collectedAt: string;
  count: number;
  favorite: boolean;
}
