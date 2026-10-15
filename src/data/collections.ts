import type { Collection } from "@/types";

export const collections: Collection[] = [
  {
    id: "ancient-iraq",
    slug: "ancient-iraq",
    name: { en: "Ancient Iraq", ar: "العراق القديم" },
    description: {
      en: "The cradle of civilization — explore the heritage of Mesopotamia from Sumer to the Abbasids.",
      ar: "مهد الحضارة — استكشف تراث بلاد الرافدين من سومر إلى العباسيين.",
    },
    monumentIds: [
      "ishtar-gate",
      "hanging-gardens",
      "ziggurat-ur",
      "babylon",
      "nineveh",
      "hatra",
      "erbil-citadel",
      "ashur",
      "nimrud",
      "khorsabad",
      "ctesiphon",
      "samarra",
      "malwiya",
      "uruk",
      "lagash",
      "nippur",
      "kesh",
      "larsa",
      "etemenanki",
      "mustansiriya",
    ],
    accentColor: "#c9a24b",
  },
  {
    id: "babylonian-civilization",
    slug: "babylonian-civilization",
    name: { en: "Babylonian Civilization", ar: "الحضارة البابلية" },
    description: {
      en: "The splendor of Babylon — from Hammurabi's law to Nebuchadnezzar's building projects.",
      ar: "فخامة بابل — من قانون حمورابي إلى مشاريع نبوخذ نصر البنائية.",
    },
    monumentIds: [
      "ishtar-gate",
      "hanging-gardens",
      "babylon",
      "etemenanki",
    ],
    accentColor: "#c9a24b",
  },
  {
    id: "assyrian-heritage",
    slug: "assyrian-heritage",
    name: { en: "Assyrian Heritage", ar: "التراث الآشوري" },
    description: {
      en: "The might of the Assyrian Empire — palaces, lamassu, and the great capitals of the north.",
      ar: "عظمة الإمبراطورية الآشورية — القصور واللاماسو وعواصم الشمال الكبرى.",
    },
    monumentIds: ["nineveh", "ashur", "nimrud", "khorsabad", "hatra"],
    accentColor: "#a87c3a",
  },
  {
    id: "mosul-heritage",
    slug: "mosul-heritage",
    name: { en: "Heritage of Mosul", ar: "تراث الموصل" },
    description: {
      en: "The archaeological heritage of northern Iraq around Mosul and the Nineveh plains.",
      ar: "التراث الأثري لشمال العراق حول الموصل وسهول نينوى.",
    },
    monumentIds: ["nineveh", "nimrud", "khorsabad", "hatra", "erbil-citadel"],
    accentColor: "#8b6f47",
  },
  {
    id: "islamic-architecture",
    slug: "islamic-architecture",
    name: { en: "Islamic Architecture", ar: "العمارة الإسلامية" },
    description: {
      en: "Masterpieces of Islamic architecture in Iraq from the Abbasid period.",
      ar: "روائع العمارة الإسلامية في العراق من العهد العباسي.",
    },
    monumentIds: ["samarra", "malwiya", "mustansiriya"],
    accentColor: "#b8935a",
  },
  {
    id: "mesopotamia-history",
    slug: "mesopotamia-history",
    name: { en: "The History of Mesopotamia", ar: "تاريخ بلاد الرافدين" },
    description: {
      en: "A journey through the earliest civilizations of the Fertile Crescent.",
      ar: "رحلة عبر أقدم حضارات الهلال الخصيب.",
    },
    monumentIds: ["uruk", "ur", "lagash", "nippur", "kesh", "larsa", "babylon"],
    accentColor: "#c9a24b",
  },
];

export const getCollectionBySlug = (slug: string) =>
  collections.find((c) => c.slug === slug);
