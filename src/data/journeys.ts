import type { Journey } from "@/types";

export const journeys: Journey[] = [
  {
    id: "discover-ancient-babylon",
    slug: "discover-ancient-babylon",
    title: {
      en: "Discover Ancient Babylon",
      ar: "اكتشف بابل القديمة",
    },
    subtitle: {
      en: "Walk the Processional Way through the city of Nebuchadnezzar",
      ar: "امشِ طريق الموكب عبر مدينة نبوخذ نصر",
    },
    description: {
      en: "Journey through the capital of the Neo-Babylonian Empire, from the Ishtar Gate to the Etemenanki ziggurat.",
      ar: "رحلة عبر عاصمة الإمبراطورية البابلية الحديثة، من بوابة عشتار إلى زقورة إيتيمانانكي.",
    },
    steps: [
      {
        monumentId: "babylon",
        narration: {
          en: "Begin at the great city of Babylon, capital of empires and center of ancient Mesopotamian civilization.",
          ar: "ابدأ من مدينة بابل العظيمة، عاصمة الإمبراطوريات ومركز الحضارة الرافدية القديمة.",
        },
      },
      {
        monumentId: "ishtar-gate",
        narration: {
          en: "Pass through the magnificent Ishtar Gate, decorated with glazed-brick dragons and bulls.",
          ar: "عبِر بوابة عشتار المهيبة، المزينة بتنانين وثيران من الطوب المزجج.",
        },
      },
      {
        monumentId: "etemenanki",
        narration: {
          en: "Reach the Etemenanki ziggurat, the great temple tower dedicated to Marduk.",
          ar: "صل إلى زقورة إيتيمانانكي، برج المعبد العظيم المكرس لمردوق.",
        },
      },
      {
        monumentId: "hanging-gardens",
        narration: {
          en: "Explore the legend of the Hanging Gardens, one of the Seven Wonders whose exact location remains debated.",
          ar: "استكشف أسطورة الحدائق المعلقة، إحدى عجائب الدنيا السبع التي لا يزال موقعها الدقيق موضع نقاش.",
        },
      },
    ],
    accentColor: "#c9a24b",
    quiz: [
      {
        question: {
          en: "Who commissioned the Ishtar Gate?",
          ar: "من أشرف على بناء بوابة عشتار؟",
        },
        options: [
          { en: "Hammurabi", ar: "حمورابي" },
          { en: "Nebuchadnezzar II", ar: "نبوخذ نصر الثاني" },
          { en: "Sargon II", ar: "سركون الثاني" },
          { en: "Ashurbanipal", ar: "أشوربانيبال" },
        ],
        correctIndex: 1,
        explanation: {
          en: "The Ishtar Gate was built during the reign of Nebuchadnezzar II (c. 575 BCE).",
          ar: "بُنيت بوابة عشتار في عهد نبوخذ نصر الثاني (حوالي 575 ق.م).",
        },
      },
      {
        question: {
          en: "What is the status of the Hanging Gardens' location?",
          ar: "ما هي حالة تحديد موقع الحدائق المعلقة؟",
        },
        options: [
          { en: "Confirmed at Babylon", ar: "مؤكد في بابل" },
          { en: "Confirmed at Nineveh", ar: "مؤكد في نينوى" },
          { en: "Still debated by scholars", ar: "لا يزال موضع نقاش بين العلماء" },
          { en: "Definitely never existed", ar: "لم توجد قط بكل تأكيد" },
        ],
        correctIndex: 2,
        explanation: {
          en: "No definitive archaeological evidence has been found, and the location remains debated.",
          ar: "لم يُعثر على دليل أثري قاطع، ولا يزال الموقع موضع نقاش.",
        },
      },
    ],
  },
  {
    id: "explore-assyrian-architecture",
    slug: "explore-assyrian-architecture",
    title: {
      en: "Explore Assyrian Architecture",
      ar: "استكشف العمارة الآشورية",
    },
    subtitle: {
      en: "From Ashur to Nineveh — the palaces and lamassu of the Assyrian Empire",
      ar: "من آشور إلى نينوى — قصور ولاماسو الإمبراطورية الآشورية",
    },
    description: {
      en: "Discover the monumental art and architecture of the Assyrian Empire across its great capitals.",
      ar: "اكتشف الفن والعمارة الضخمة للإمبراطورية الآشورية عبر عواصمها الكبرى.",
    },
    steps: [
      {
        monumentId: "ashur",
        narration: {
          en: "Begin at Ashur, the first capital and religious heart of the Assyrian world.",
          ar: "ابدأ من آشور، أول عاصمة والقلب الديني للعالم الآشوري.",
        },
      },
      {
        monumentId: "nimrud",
        narration: {
          en: "Visit Nimrud, the royal city of Ashurnasirpal II, famous for its lamassu and ivory carvings.",
          ar: "زر نمرود، المدينة الملكية لآشور ناصر بال الثاني، الشهيرة باللاماسو ومنحوتات العاج.",
        },
      },
      {
        monumentId: "khorsabad",
        narration: {
          en: "Explore Dur-Sharrukin, Sargon II's planned capital abandoned after his death.",
          ar: "استكشف دور شروكين، عاصمة سركون الثاني المخططة التي هُجرت بعد وفاته.",
        },
      },
      {
        monumentId: "nineveh",
        narration: {
          en: "Reach Nineveh, the great capital of Sennacherib and Ashurbanipal on the Tigris.",
          ar: "صل إلى نينوى، العاصمة الكبرى لسنحاريب وأشوربانيبال على دجلة.",
        },
      },
    ],
    accentColor: "#a87c3a",
    quiz: [
      {
        question: {
          en: "Which Assyrian king built a new capital at Dur-Sharrukin (Khorsabad)?",
          ar: "أي ملك آشوري بنى عاصمة جديدة في دور شروكين (خورساباد)؟",
        },
        options: [
          { en: "Sennacherib", ar: "سنحاريب" },
          { en: "Ashurnasirpal II", ar: "آشور ناصر بال الثاني" },
          { en: "Sargon II", ar: "سركون الثاني" },
          { en: "Tiglath-Pileser III", ar: "تكلاث فلاسر الثالث" },
        ],
        correctIndex: 2,
        explanation: {
          en: "Sargon II founded Dur-Sharrukin ('Fortress of Sargon') in the late 8th century BCE.",
          ar: "أسس سركون الثاني دور شروكين (حصن سركون) في أواخر القرن الثامن ق.م.",
        },
      },
    ],
  },
  {
    id: "heritage-of-mosul",
    slug: "heritage-of-mosul",
    title: {
      en: "Heritage of Mosul",
      ar: "تراث الموصل",
    },
    subtitle: {
      en: "The Nineveh plains and the archaeological treasures of northern Iraq",
      ar: "سهول نينوى والكنوز الأثرية لشمال العراق",
    },
    description: {
      en: "Explore the rich archaeological heritage of the Mosul region, from Assyrian capitals to the Erbil Citadel.",
      ar: "استكشف التراث الأثري الغني لمنطقة الموصل، من عواصم آشور إلى قلعة أربيل.",
    },
    steps: [
      {
        monumentId: "nineveh",
        narration: {
          en: "Start at Nineveh, the great Assyrian capital near modern Mosul.",
          ar: "ابدأ من نينوى، العاصمة الآشورية الكبرى قرب الموصل الحديثة.",
        },
      },
      {
        monumentId: "nimrud",
        narration: {
          en: "Visit Nimrud, the royal city of the 9th-century BCE Assyrian kings.",
          ar: "زر نمرود، المدينة الملكية لملوك آشور في القرن التاسع ق.م.",
        },
      },
      {
        monumentId: "hatra",
        narration: {
          en: "Discover Hatra, the Parthian desert fortress that resisted Roman legions.",
          ar: "اكتشف حضر، حصن البارثيين الصحراوي الذي أصمت الفيالق الرومانية.",
        },
      },
      {
        monumentId: "erbil-citadel",
        narration: {
          en: "Conclude at the Erbil Citadel, one of the oldest continuously inhabited sites on Earth.",
          ar: "اختتم رحلتك في قلعة أربيل، من أقدم المواقع المأهولة باستمرار على الأرض.",
        },
      },
    ],
    accentColor: "#8b6f47",
    quiz: [
      {
        question: {
          en: "Which site successfully resisted Roman assaults in the 2nd century CE?",
          ar: "أي موقع أصمت الهجمات الرومانية في القرن الثاني م؟",
        },
        options: [
          { en: "Nineveh", ar: "نينوى" },
          { en: "Hatra", ar: "حضر" },
          { en: "Nimrud", ar: "نمرود" },
          { en: "Erbil Citadel", ar: "قلعة أربيل" },
        ],
        correctIndex: 1,
        explanation: {
          en: "Hatra resisted the sieges of Trajan (117 CE) and Septimius Severus (197–199 CE).",
          ar: "أصمت حضر حصار تراجان (117 م) وسبتميوس سيفيرس (197–199 م).",
        },
      },
    ],
  },
];

export const getJourneyBySlug = (slug: string) =>
  journeys.find((j) => j.slug === slug);
