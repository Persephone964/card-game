import type { Monument } from "@/types";

const img = (prompt: string) =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt
  )}&image_size=landscape_16_9`;

const t = (en: string, ar: string) => ({ en, ar });

export const monuments: Monument[] = [
  {
    id: "ishtar-gate",
    slug: "ishtar-gate",
    names: {
      official: t("Ishtar Gate", "بوابة عشتار"),
      alternatives: [t("Babylon Ishtar Gate", "بوابة بابل لعشتار")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Babylon Governorate", "محافظة بابل"),
    coordinates: { lat: 32.5375, lng: 44.4219 },
    civilization: t("Neo-Babylonian", "البابلية الحديثة"),
    periods: [t("Neo-Babylonian Empire", "الإمبراطورية البابلية الحديثة")],
    category: "gate",
    approximateDate: t("c. 575 BCE", "حوالي 575 ق.م"),
    yearFrom: -575,
    yearTo: -575,
    overview: [
      {
        type: "fact",
        text: t(
          "The Ishtar Gate was the eighth gate to the inner city of Babylon, constructed under the reign of King Nebuchadnezzar II.",
          "كانت بوابة عشتار هي البوابة الثامنة لداخل مدينة بابل، بُنيت في عهد الملك نبوخذ نصر الثاني."
        ),
        sourceIds: ["british-museum-babylon", "pergamon-museum-ishtar"],
      },
      {
        type: "fact",
        text: t(
          "The gate was dedicated to the goddess Ishtar and was part of the grand Processional Way leading into the city.",
          "كُرّست البوابة للمعبودة عشتار وكانت جزءاً من طريق الموكب المؤدي إلى المدينة."
        ),
        sourceIds: ["pergamon-museum-ishtar"],
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "The gate was decorated with glazed brick reliefs, including rows of dragons (mušḫuššu) and bulls (aurochs) symbolizing the gods Marduk and Adad.",
          "زُينت البوابة بنقوش من الطوب المزجج، تشمل صفوفاً من التنانين (الموشحوشو) والثيران التي ترمز لآلهة مردوق وأداد."
        ),
        sourceIds: ["pergamon-museum-ishtar"],
      },
      {
        type: "fact",
        text: t(
          "The reconstructed Ishtar Gate, assembled from excavated fragments, is displayed at the Pergamon Museum in Berlin. A smaller reconstruction exists in Babylon.",
          "تُعرض بوابة عشتار المعاد بناؤها من القطع المستخرجة في متحف بيرغامون ببرلين. ويوجد نسخة أصغر في بابل."
        ),
        sourceIds: ["pergamon-museum-ishtar"],
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "The gate symbolizes the grandeur of Neo-Babylonian architecture and the city of Babylon under Nebuchadnezzar II.",
          "ترمز البوابة إلى عظمة العمارة البابلية الحديثة ومدينة بابل في عهد نبوخذ نصر الثاني."
        ),
      },
    ],
    preservation: [
      {
        type: "fact",
        text: t(
          "Original fragments were excavated in the early 20th century by German archaeologists under Robert Koldewey.",
          "استخرجت البقايا الأصلية في مطلع القرن العشرين على يد علماء آثار ألمان بقيادة روبرت كولداوي."
        ),
        sourceIds: ["pergamon-museum-ishtar"],
      },
    ],
    unesco: { inscribed: false },
    images: [
      {
        id: "ishtar-1",
        url: img("Ishtar Gate of Babylon, blue glazed bricks, mušḫuššu dragon reliefs, archaeological museum, cinematic lighting"),
        alt: t("Ishtar Gate reconstruction", "إعادة بناء بوابة عشتار"),
      },
    ],
    timeline: [
      {
        year: "c. 575 BCE",
        title: t("Construction under Nebuchadnezzar II", "البناء في عهد نبوخذ نصر الثاني"),
      },
      {
        year: "1902 CE",
        title: t("Excavation begins", "بداية التنقيب"),
      },
      {
        year: "1930 CE",
        title: t("Reconstruction in Pergamon Museum", "إعادة البناء في متحف بيرغامون"),
      },
    ],
    relatedMonumentIds: ["babylon", "hanging-gardens", "etemenanki"],
    collections: ["ancient-iraq", "babylonian-civilization", "mosul-heritage"],
    rarity: "legendary",
    cardNumber: "IQ-001",
    cardSet: "Ancient Iraq",
    sources: [
      {
        id: "pergamon-museum-ishtar",
        title: t("Ishtar Gate — Pergamon Museum", "بوابة عشتار — متحف بيرغامون"),
        institution: t("Staatliche Museen zu Berlin", "متاحف برلين الحكومية"),
        url: "https://www.smb.museum/en/museums-institutions/pergamonmuseum/",
      },
      {
        id: "british-museum-babylon",
        title: t("Babylon — British Museum", "بابل — المتحف البريطاني"),
        institution: t("The British Museum", "المتحف البريطاني"),
        url: "https://www.britishmuseum.org/",
      },
    ],
    addedAt: "2025-01-01",
  },
  {
    id: "hanging-gardens",
    slug: "hanging-gardens",
    names: {
      official: t("Hanging Gardens of Babylon", "حدائق بابل المعلقة"),
      alternatives: [
        t("Hanging Gardens of Semiramis", "حدائق شميراميس المعلقة"),
      ],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Babylon Governorate", "محافظة بابل"),
    coordinates: { lat: 32.5375, lng: 44.4219 },
    civilization: t("Neo-Babylonian", "البابلية الحديثة"),
    periods: [t("Neo-Babylonian Empire", "الإمبراطورية البابلية الحديثة")],
    category: "garden",
    approximateDate: t("c. 6th century BCE (uncertain)", "حوالي القرن السادس ق.م (غير مؤكد)"),
    yearFrom: -600,
    yearTo: -562,
    overview: [
      {
        type: "tradition",
        text: t(
          "According to classical tradition, the Hanging Gardens were one of the Seven Wonders of the Ancient World, said to be built by King Nebuchadnezzar II for his wife Amytis of Media.",
          "بحسب التقاليد الكلاسيكية، كانت الحدائق المعلقة إحدى عجائب الدنيا السبع، ويُقال إنها بناها الملك نبوخذ نصر الثاني لزوجته أميتيس ملكة الميد."
        ),
        sourceIds: ["britannica-hanging-gardens"],
      },
      {
        type: "debate",
        text: t(
          "No definitive archaeological evidence for the gardens has been found at Babylon. Their existence and exact location remain disputed among scholars.",
          "لم يُعثر على دليل أثري قاطع لوجود الحدائق في بابل. لا يزال وجودها وموقعها الدقيق موضع خلاف بين العلماء."
        ),
        sourceIds: ["britannica-hanging-gardens", "dalley-hanging-gardens"],
      },
      {
        type: "interpretation",
        text: t(
          "Some scholars, including Stephanie Dalley, propose the gardens may have been located at Nineveh, built by the Assyrian king Sennacherib, rather than at Babylon.",
          "يرى بعض العلماء، منهم ستيفاني دالي، أن الحدائق ربما كانت في نينوى، بناها الملك الآشوري سنحاريب، لا في بابل."
        ),
        sourceIds: ["dalley-hanging-gardens"],
      },
    ],
    architecture: [
      {
        type: "tradition",
        text: t(
          "Ancient Greek and Roman authors describe terraced gardens with exotic plants, waterfalls, and an advanced irrigation system rising above the palace.",
          "يصف الكتاب اليونان والرومان القدماء حدائق مصطبة بنباتات غريبة وشلالات ونظام ري متطور يرتفع فوق القصر."
        ),
        sourceIds: ["britannica-hanging-gardens"],
      },
    ],
    significance: [
      {
        type: "tradition",
        text: t(
          "The gardens are celebrated in classical literature as a marvel of engineering and horticulture, though their physical form remains unknown.",
          "تُحتفى بالحدائق في الأدب الكلاسيكي كمعجزة هندسية وبستانية، رغم أن شكلها المادي لا يزال مجهولاً."
        ),
      },
    ],
    unesco: { inscribed: false },
    images: [
      {
        id: "gardens-1",
        url: img("Hanging Gardens of Babylon, ancient terraced gardens with waterfalls and exotic plants, artistic reconstruction, golden light"),
        alt: t("Artistic reconstruction of the Hanging Gardens", "إعادة إحياء فنية للحدائق المعلقة"),
      },
    ],
    timeline: [
      {
        year: "c. 6th century BCE",
        title: t("Traditional dating of the gardens", "التأريخ التقليدي للحدائق"),
      },
      {
        year: "4th century BCE",
        title: t("First written accounts by Greek authors", "أول وصفات مكتوبة من الكتاب اليونان"),
      },
      {
        year: "Modern era",
        title: t("Ongoing scholarly debate about location", "النقاش العلمي المستمر حول الموقع"),
      },
    ],
    relatedMonumentIds: ["babylon", "ishtar-gate", "nineveh"],
    collections: ["ancient-iraq", "babylonian-civilization"],
    rarity: "legendary",
    cardNumber: "IQ-002",
    cardSet: "Ancient Iraq",
    sources: [
      {
        id: "britannica-hanging-gardens",
        title: t("Hanging Gardens of Babylon — Encyclopaedia Britannica", "حدائق بابل المعلقة — موسوعة بريتانيكا"),
        institution: t("Encyclopaedia Britannica", "موسوعة بريتانيكا"),
        url: "https://www.britannica.com/topic/Hanging-Gardens-of-Babylon",
      },
      {
        id: "dalley-hanging-gardens",
        title: t("The Mystery of the Hanging Garden of Babylon", "لغز حديقة بابل المعلقة"),
        author: t("Stephanie Dalley", "ستيفاني دالي"),
        url: "https://global.oup.com/academic/product/the-mystery-of-the-hanging-garden-of-babylon-9780199385980",
      },
    ],
    addedAt: "2025-01-01",
  },
  {
    id: "ziggurat-ur",
    slug: "ziggurat-ur",
    names: {
      official: t("Great Ziggurat of Ur", "زقورة اور العظيمة"),
      alternatives: [t("Ziggurat of Ur-Nammu", "زقورة اور نامو")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Dhi Qar Governorate", "محافظة ذي قار"),
    coordinates: { lat: 30.9625, lng: 46.1036 },
    civilization: t("Sumerian / Neo-Sumerian", "السومرية / السومرية الحديثة"),
    periods: [t("Third Dynasty of Ur", "السلالة الثالثة من اور")],
    category: "ziggurat",
    approximateDate: t("c. 2100 BCE", "حوالي 2100 ق.م"),
    yearFrom: -2112,
    yearTo: -2095,
    overview: [
      {
        type: "fact",
        text: t(
          "The Great Ziggurat of Ur was built by King Ur-Nammu of the Third Dynasty of Ur and dedicated to the moon god Nanna (Sin).",
          "بُنيت زقورة اور العظيمة على يد الملك اور نامو من السلالة الثالثة من اور وكُرست لإله القمر نانا (سين)."
        ),
        sourceIds: ["british-museum-ur"],
      },
      {
        type: "fact",
        text: t(
          "It is one of the best-preserved ziggurats of ancient Mesopotamia and a defining example of Sumerian sacred architecture.",
          "هي إحدى أحفظ زقورات بلاد الرافدين القديمة ونموذج بارز للعمارة الدينية السومرية."
        ),
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "The ziggurat was constructed from baked bricks with bitumen mortar, rising in three levels to a height of over 30 meters.",
          "بُنيت الزقورة من الطوب المخبووط بمادة القطران، وترتفع في ثلاثة مستويات إلى ارتفاع يزيد عن 30 متراً."
        ),
        sourceIds: ["british-museum-ur"],
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "The ziggurat served as the religious heart of the city of Ur, connecting the earthly realm with the divine.",
          "كانت الزقورة القلب الديني لمدينة اور، موصلة العالم الأرضي بالعالم الإلهي."
        ),
      },
    ],
    unesco: { inscribed: false },
    images: [
      {
        id: "ur-ziggurat-1",
        url: img("Great Ziggurat of Ur, ancient Sumerian mud-brick stepped pyramid, desert landscape, cinematic golden hour"),
        alt: t("Great Ziggurat of Ur", "زقورة اور العظيمة"),
      },
    ],
    timeline: [
      { year: "c. 2100 BCE", title: t("Built by Ur-Nammu", "البناء على يد اور نامو") },
      { year: "6th century BCE", title: t("Restoration under Nabonidus", "ترميم في عهد نابونيد") },
      { year: "1920s CE", title: t("Excavation by Leonard Woolley", "تنقيب ليونارد وولي") },
    ],
    relatedMonumentIds: ["ur", "uruk", "lagash"],
    collections: ["ancient-iraq", "assyrian-heritage"],
    rarity: "legendary",
    cardNumber: "IQ-003",
    cardSet: "Ancient Iraq",
    sources: [
      {
        id: "british-museum-ur",
        title: t("Ur — British Museum", "اور — المتحف البريطاني"),
        institution: t("The British Museum", "المتحف البريطاني"),
        url: "https://www.britishmuseum.org/",
      },
    ],
    addedAt: "2025-01-01",
  },
  {
    id: "babylon",
    slug: "babylon",
    names: {
      official: t("Ancient City of Babylon", "مدينة بابل القديمة"),
      alternatives: [t("Babylon", "بابل")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Babylon Governorate", "محافظة بابل"),
    coordinates: { lat: 32.5375, lng: 44.4219 },
    civilization: t("Babylonian", "البابلية"),
    periods: [
      t("Old Babylonian", "البابلية القديمة"),
      t("Neo-Babylonian Empire", "الإمبراطورية البابلية الحديثة"),
    ],
    category: "city",
    approximateDate: t("c. 2300 BCE – 1st century CE", "حوالي 2300 ق.م – القرن الأول م"),
    yearFrom: -2300,
    yearTo: 100,
    overview: [
      {
        type: "fact",
        text: t(
          "Babylon was a major city-state in ancient Mesopotamia and capital of the Babylonian Empire, located on the Euphrates River.",
          "كانت بابل مدينة-دولة كبرى في بلاد الرافدين القديمة وعاصمة الإمبراطورية البابلية، على نهر الفرات."
        ),
        sourceIds: ["unesco-babylon"],
      },
      {
        type: "fact",
        text: t(
          "Under Hammurabi (18th century BCE) and later Nebuchadnezzar II (6th century BCE), Babylon became one of the largest and most influential cities of antiquity.",
          "في عهد حمورابي (القرن الثامن عشر ق.م) ثم نبوخذ نصر الثاني (القرن السادس ق.م)، أصبحت بابل من أكبر وأشهر مدن العصور القديمة."
        ),
        sourceIds: ["unesco-babylon"],
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "The city featured massive defensive walls, the Ishtar Gate, the Processional Way, and the Etemenanki ziggurat, often associated with the Tower of Babel tradition.",
          "اشتملت المدينة على أسوار دفاعية ضخمة، وبوابة عشتار، وطريق الموكب، وزقورة إيتيمانانكي التي ترتبط غالباً بتقليد برج بابل."
        ),
        sourceIds: ["unesco-babylon"],
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "Babylon's cultural and political influence shaped the ancient Near East for over a millennium.",
          "أثرت بابل ثقافياً وسياسياً على الشرق الأدنى القديم لأكثر من ألف سنة."
        ),
      },
    ],
    preservation: [
      {
        type: "fact",
        text: t(
          "The archaeological site of Babylon was inscribed on the UNESCO World Heritage List in 2019.",
          "سُجل الموقع الأثري لبابل في قائمة التراث العالمي لليونسكو في عام 2019."
        ),
        sourceIds: ["unesco-babylon"],
      },
    ],
    unesco: {
      inscribed: true,
      year: 2019,
      criteria: ["iii", "vi"],
    },
    images: [
      {
        id: "babylon-1",
        url: img("Ancient ruins of Babylon city, mud-brick walls, Euphrates river, archaeological site, golden sunset"),
        alt: t("Ruins of ancient Babylon", "أطلال بابل القديمة"),
      },
    ],
    timeline: [
      { year: "c. 2300 BCE", title: t("Earliest settlement", "أول استيطان") },
      { year: "c. 1792 BCE", title: t("Hammurabi's reign", "عهد حمورابي") },
      { year: "c. 605 BCE", title: t("Nebuchadnezzar II's building projects", "مشاريع نبوخذ نصر الثاني") },
      { year: "2019 CE", title: t("UNESCO World Heritage inscription", "تسجيل اليونسكو") },
    ],
    relatedMonumentIds: ["ishtar-gate", "hanging-gardens", "etemenanki"],
    collections: ["ancient-iraq", "babylonian-civilization", "mesopotamia-history"],
    rarity: "legendary",
    cardNumber: "IQ-004",
    cardSet: "Ancient Iraq",
    sources: [
      {
        id: "unesco-babylon",
        title: t("Babylon — UNESCO World Heritage", "بابل — تراث اليونسكو العالمي"),
        institution: t("UNESCO", "اليونسكو"),
        url: "https://whc.unesco.org/en/list/278",
      },
    ],
    addedAt: "2025-01-01",
  },
  {
    id: "nineveh",
    slug: "nineveh",
    names: {
      official: t("Ancient City of Nineveh", "مدينة نينوى القديمة"),
      alternatives: [t("Nineveh", "نينوى")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Nineveh Governorate", "محافظة نينوى"),
    coordinates: { lat: 36.3438, lng: 43.1575 },
    civilization: t("Neo-Assyrian", "الآشورية الحديثة"),
    periods: [t("Neo-Assyrian Empire", "الإمبراطورية الآشورية الحديثة")],
    category: "city",
    approximateDate: t("c. 7th century BCE (peak)", "القرن السابع ق.م (ذروة)"),
    yearFrom: -705,
    yearTo: -612,
    overview: [
      {
        type: "fact",
        text: t(
          "Nineveh was the capital of the Neo-Assyrian Empire under kings Sennacherib, Esarhaddon, and Ashurbanipal.",
          "كانت نينوى عاصمة الإمبراطورية الآشورية الحديثة في عهد الملوك سنحاريب، إسرحدون، وأشوربانيبال."
        ),
        sourceIds: ["british-museum-nineveh"],
      },
      {
        type: "fact",
        text: t(
          "At its peak in the 7th century BCE, Nineveh was one of the largest cities in the ancient world, situated on the Tigris River near modern Mosul.",
          "في ذروتها في القرن السابع ق.م، كانت نينوى من أكبر مدن العالم القديم، على نهر دجلة قرب الموصل الحديثة."
        ),
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "The city featured the great palaces of Sennacherib at Kuyunjik and Ashurbanipal at North Palace, famous for their carved wall reliefs.",
          "اشتملت المدينة على قصور سنحاريب في كويونجك وقصور أشوربانيبال، الشهيرة بنقوشها الجدارية المنقوشة."
        ),
        sourceIds: ["british-museum-nineveh"],
      },
      {
        type: "fact",
        text: t(
          "The Library of Ashurbanipal at Nineveh preserved thousands of cuneiform tablets, including the Epic of Gilgamesh.",
          "حفظت مكتبة أشوربانيبال في نينوى آلاف الألواح المسمارية، من بينها ملحمة جلجامش."
        ),
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "Nineveh's destruction in 612 BCE marked the fall of the Assyrian Empire.",
          "يمثل دمار نينوى في 612 ق.م سقوط الإمبراطورية الآشورية."
        ),
      },
    ],
    unesco: { inscribed: false },
    images: [
      {
        id: "nineveh-1",
        url: img("Ancient Nineveh Assyrian city, winged bull lamassu statues, palace reliefs, Tigris river, dramatic sky"),
        alt: t("Ruins of Nineveh", "أطلال نينوى"),
      },
    ],
    timeline: [
      { year: "c. 700 BCE", title: t("Sennacherib makes Nineveh his capital", "سنحاريب يجعل نينوى عاصمته") },
      { year: "612 BCE", title: t("Fall of Nineveh", "سقوط نينوى") },
      { year: "1840s CE", title: t("Excavations by Austen Henry Layard", "تنقيبات أوستن هنري ليارد") },
    ],
    relatedMonumentIds: ["nimrud", "khorsabad", "hanging-gardens"],
    collections: ["ancient-iraq", "assyrian-heritage", "mosul-heritage"],
    rarity: "epic",
    cardNumber: "IQ-005",
    cardSet: "Ancient Iraq",
    sources: [
      {
        id: "british-museum-nineveh",
        title: t("Nineveh — British Museum", "نينوى — المتحف البريطاني"),
        institution: t("The British Museum", "المتحف البريطاني"),
        url: "https://www.britishmuseum.org/",
      },
    ],
    addedAt: "2025-01-01",
  },
  {
    id: "hatra",
    slug: "hatra",
    names: {
      official: t("Ancient City of Hatra", "مدينة حضر القديمة"),
      alternatives: [t("Hatra", "حضر")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Nineveh Governorate", "محافظة نينوى"),
    coordinates: { lat: 35.5875, lng: 42.7206 },
    civilization: t("Parthian / Arab", "البارثية / العربية"),
    periods: [t("Parthian period", "الفترة البارثية")],
    category: "city",
    approximateDate: t("c. 3rd century BCE – 3rd century CE", "القرن الثالث ق.م – القرن الثالث م"),
    yearFrom: -300,
    yearTo: 240,
    overview: [
      {
        type: "fact",
        text: t(
          "Hatra was a fortified Parthian city and an important caravan trading center in the desert of northern Mesopotamia.",
          "كانت حضر مدينة بارثية محصنة ومركزاً تجارياً مهماً لقوافل الصحراء في شمال بلاد الرافدين."
        ),
        sourceIds: ["unesco-hatra"],
      },
      {
        type: "fact",
        text: t(
          "Hatra flourished under the Parthian Empire and successfully resisted the Roman assaults of Trajan (117 CE) and Septimius Severus (197–199 CE).",
          "ازدهرت حضر تحت الإمبراطورية البارثية وأصمت هجمات الرومان بقيادة تراجان (117 م) وسبتميوس سيفيرس (197–199 م)."
        ),
        sourceIds: ["unesco-hatra"],
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "Hatra is known for its unique fusion of Greco-Roman and Parthian architectural styles, including temples with arched facades and carved stone sculptures.",
          "تُعرف حضر بدمجها الفريد للأساليب المعمارية اليونانية-الرومانية والبارثية، بما فيها المعابد ذات الواجهات المقوسة والمنحوتات الحجرية."
        ),
        sourceIds: ["unesco-hatra"],
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "Hatra was inscribed on the UNESCO World Heritage List in 1985.",
          "سُجلت حضر في قائمة التراث العالمي لليونسكو في عام 1985."
        ),
        sourceIds: ["unesco-hatra"],
      },
    ],
    unesco: {
      inscribed: true,
      year: 1985,
      criteria: ["ii", "iii", "iv", "vi"],
    },
    images: [
      {
        id: "hatra-1",
        url: img("Ancient city of Hatra, Parthian temple ruins, desert fortress, carved stone arches, golden hour"),
        alt: t("Ruins of Hatra", "أطلال حضر"),
      },
    ],
    timeline: [
      { year: "c. 3rd century BCE", title: t("Founding of Hatra", "تأسيس حضر") },
      { year: "117 CE", title: t("Resists Trajan's siege", "مقاومة حصار تراجان") },
      { year: "240 CE", title: t("Fall of Hatra to the Sassanids", "سقوط حضر أمام الساسانيين") },
      { year: "1985 CE", title: t("UNESCO World Heritage inscription", "تسجيل اليونسكو") },
    ],
    relatedMonumentIds: ["nineveh", "erbil-citadel"],
    collections: ["ancient-iraq", "assyrian-heritage", "mosul-heritage"],
    rarity: "epic",
    cardNumber: "IQ-006",
    cardSet: "Ancient Iraq",
    sources: [
      {
        id: "unesco-hatra",
        title: t("Hatra — UNESCO World Heritage", "حضر — تراث اليونسكو العالمي"),
        institution: t("UNESCO", "اليونسكو"),
        url: "https://whc.unesco.org/en/list/277",
      },
    ],
    addedAt: "2025-01-01",
  },
  {
    id: "erbil-citadel",
    slug: "erbil-citadel",
    names: {
      official: t("Erbil Citadel", "قلعة أربيل"),
      alternatives: [t("Arbil Citadel", "قلعة أربيل")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Erbil Governorate", "محافظة أربيل"),
    coordinates: { lat: 36.1911, lng: 44.0092 },
    civilization: t("Multi-period", "متعدد الفترات"),
    periods: [
      t("Assyrian", "الآشورية"),
      t("Abbasid", "العباسية"),
      t("Ottoman", "العثمانية"),
    ],
    category: "citadel",
    approximateDate: t("c. 6th millennium BCE – present", "الألف السادس ق.م – الحاضر"),
    yearFrom: -5000,
    yearTo: 1900,
    overview: [
      {
        type: "fact",
        text: t(
          "The Erbil Citadel, built on an ancient tell (archaeological mound), is one of the oldest continuously inhabited settlements in the world.",
          "تُعد قلعة أربيل، المبنية على تل أثري، من أقدم المستوطنات المأهولة باستمرار في العالم."
        ),
        sourceIds: ["unesco-erbil"],
      },
      {
        type: "fact",
        text: t(
          "The citadel mound rises about 30 meters above the surrounding plain and has been occupied for approximately 6,000 years.",
          "يرتفع تل القلعة حوالي 30 متراً عن السهل المحيط وكان مأهولاً لحوالي 6000 سنة."
        ),
        sourceIds: ["unesco-erbil"],
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "The citadel contains traditional Ottoman-era houses, mosques, bathhouses, and the famous Mulla Effendi Mosque, reflecting layered urban history.",
          "تضم القلعة منازلاً تقليدية من العهد العثماني ومساجداً وحمامات، منها مسجد ملا أفندي الشهير."
        ),
        sourceIds: ["unesco-erbil"],
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "The Erbil Citadel was inscribed on the UNESCO World Heritage List in 2014.",
          "سُجلت قلعة أربيل في قائمة التراث العالمي لليونسكو في عام 2014."
        ),
        sourceIds: ["unesco-erbil"],
      },
    ],
    unesco: {
      inscribed: true,
      year: 2014,
      criteria: ["iv", "v"],
    },
    images: [
      {
        id: "erbil-1",
        url: img("Erbil Citadel, ancient fortified city on a mound, traditional Kurdish architecture, golden sunset"),
        alt: t("Erbil Citadel", "قلعة أربيل"),
      },
    ],
    timeline: [
      { year: "c. 6000 BCE", title: t("Earliest settlement", "أول استيطان") },
      { year: "2014 CE", title: t("UNESCO World Heritage inscription", "تسجيل اليونسكو") },
    ],
    relatedMonumentIds: ["nineveh", "hatra"],
    collections: ["ancient-iraq", "mosul-heritage"],
    rarity: "epic",
    cardNumber: "IQ-007",
    cardSet: "Ancient Iraq",
    sources: [
      {
        id: "unesco-erbil",
        title: t("Erbil Citadel — UNESCO World Heritage", "قلعة أربيل — تراث اليونسكو العالمي"),
        institution: t("UNESCO", "اليونسكو"),
        url: "https://whc.unesco.org/en/list/1435",
      },
    ],
    addedAt: "2025-01-01",
  },
  {
    id: "ashur",
    slug: "ashur",
    names: {
      official: t("Ancient City of Ashur", "مدينة آشور القديمة"),
      alternatives: [t("Assur", "آشور")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Saladin Governorate", "محافظة صلاح الدين"),
    coordinates: { lat: 35.4586, lng: 43.2597 },
    civilization: t("Assyrian", "الآشورية"),
    periods: [t("Old Assyrian", "الآشورية القديمة")],
    category: "city",
    approximateDate: t("c. 2600 BCE – 14th century CE", "حوالي 2600 ق.م – القرن الرابع عشر م"),
    yearFrom: -2600,
    yearTo: 1400,
    overview: [
      {
        type: "fact",
        text: t(
          "Ashur (Assur) was the first capital of the Assyrian Empire and the religious center of the Assyrian people, dedicated to the god Ashur.",
          "كانت آشور أول عاصمة للإمبراطورية الآشورية والمركز الديني للآشوريين، مكرسة للآله آشور."
        ),
        sourceIds: ["unesco-ashur"],
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "The site includes the remains of temples, palaces, and city walls along the Tigris River, demonstrating the evolution of Assyrian architecture over millennia.",
          "يضم الموقع بقايا معابد وقصور وأسوار مدينة على طول نهر دجلة، تعرض تطور العمارة الآشورية."
        ),
        sourceIds: ["unesco-ashur"],
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "Ashur was inscribed on the UNESCO World Heritage List in 2003 and is also on the List of World Heritage in Danger.",
          "سُجلت آشور في قائمة التراث العالمي لليونسكو في عام 2003، وهي أيضاً في قائمة التراث العالمي المعرض للخطر."
        ),
        sourceIds: ["unesco-ashur"],
      },
    ],
    unesco: {
      inscribed: true,
      year: 2003,
      criteria: ["iii", "iv"],
    },
    images: [
      {
        id: "ashur-1",
        url: img("Ancient city of Ashur, Assyrian temple ruins along Tigris river, archaeological mound, sunset"),
        alt: t("Ruins of Ashur", "أطلال آشور"),
      },
    ],
    timeline: [
      { year: "c. 2600 BCE", title: t("Early settlement", "الاستيطان المبكر") },
      { year: "2003 CE", title: t("UNESCO World Heritage inscription", "تسجيل اليونسكو") },
    ],
    relatedMonumentIds: ["nineveh", "nimrud", "khorsabad"],
    collections: ["ancient-iraq", "assyrian-heritage"],
    rarity: "epic",
    cardNumber: "IQ-008",
    cardSet: "Ancient Iraq",
    sources: [
      {
        id: "unesco-ashur",
        title: t("Ashur (Qal'at Sherqat) — UNESCO", "آشور (قلعة شرقاط) — اليونسكو"),
        institution: t("UNESCO", "اليونسكو"),
        url: "https://whc.unesco.org/en/list/1130",
      },
    ],
    addedAt: "2025-01-01",
  },
  {
    id: "nimrud",
    slug: "nimrud",
    names: {
      official: t("Ancient City of Nimrud", "مدينة نمرود القديمة"),
      alternatives: [t("Kalhu", "كالحو")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Nineveh Governorate", "محافظة نينوى"),
    coordinates: { lat: 36.0819, lng: 43.3119 },
    civilization: t("Neo-Assyrian", "الآشورية الحديثة"),
    periods: [t("Neo-Assyrian Empire", "الإمبراطورية الآشورية الحديثة")],
    category: "city",
    approximateDate: t("c. 13th century BCE – 7th century BCE", "القرن الثالث عشر ق.م – القرن السابع ق.م"),
    yearFrom: -1300,
    yearTo: -612,
    overview: [
      {
        type: "fact",
        text: t(
          "Nimrud (ancient Kalhu) was an Assyrian royal city and capital under Ashurnasirpal II and Shalmaneser III in the 9th century BCE.",
          "كانت نمرود (كالحو القديمة) مدينة ملكية آشورية وعاصمة في عهد آشور ناصر بال الثاني وشلمنصر الثالث في القرن التاسع ق.م."
        ),
        sourceIds: ["british-museum-nimrud"],
      },
      {
        type: "fact",
        text: t(
          "The city is famous for its colossal lamassu (winged human-headed bulls) and intricate ivory carvings discovered in the royal palaces.",
          "تشتهر المدينة بتماثيل اللاماسو العملاقة (ثيران مجنحة برأس بشري) ومنحوتات العاج المعقدة المكتشفة في القصور الملكية."
        ),
        sourceIds: ["british-museum-nimrud"],
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "The Northwest Palace of Ashurnasirpal II featured vast courtyards, throne rooms, and walls covered with carved alabaster slabs depicting royal campaigns and rituals.",
          "كان القصر الشمالي الغربي لآشور ناصر بال الثاني يضم أفنية واسعة وقاعات عرش وجدران مغطاة بألواح رخام منقوش تصور الحملات الملكية."
        ),
        sourceIds: ["british-museum-nimrud"],
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "Nimrud's excavations in the 19th and 20th centuries revealed some of the finest examples of Assyrian art and sculpture.",
          "كشفت تنقيبات نمرود في القرنين التاسع عشر والعشرين من أرقى أمثلة الفن والنحت الآشوري."
        ),
      },
    ],
    unesco: { inscribed: false },
    images: [
      {
        id: "nimrud-1",
        url: img("Ancient Nimrud, Assyrian palace ruins, winged lamassu statues, carved reliefs, archaeological site"),
        alt: t("Ruins of Nimrud", "أطلال نمرود"),
      },
    ],
    timeline: [
      { year: "c. 879 BCE", title: t("Ashurnasirpal II makes Nimrud his capital", "آشور ناصر بال يجعل نمرود عاصمته") },
      { year: "1845 CE", title: t("Excavation by Austen Henry Layard", "تنقيبات ليارد") },
      { year: "1988 CE", title: t("Discovery of the Nimrud Tombs", "اكتشاف مقابر نمرود") },
    ],
    relatedMonumentIds: ["nineveh", "ashur", "khorsabad"],
    collections: ["ancient-iraq", "assyrian-heritage", "mosul-heritage"],
    rarity: "epic",
    cardNumber: "IQ-009",
    cardSet: "Ancient Iraq",
    sources: [
      {
        id: "british-museum-nimrud",
        title: t("Nimrud — British Museum", "نمرود — المتحف البريطاني"),
        institution: t("The British Museum", "المتحف البريطاني"),
        url: "https://www.britishmuseum.org/",
      },
    ],
    addedAt: "2025-01-01",
  },
  {
    id: "khorsabad",
    slug: "khorsabad",
    names: {
      official: t("Dur-Sharrukin (Khorsabad)", "دور شروكين (خورساباد)"),
      alternatives: [t("Khorsabad", "خورساباد")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Nineveh Governorate", "محافظة نينوى"),
    coordinates: { lat: 36.5133, lng: 43.2281 },
    civilization: t("Neo-Assyrian", "الآشورية الحديثة"),
    periods: [t("Neo-Assyrian Empire", "الإمبراطورية الآشورية الحديثة")],
    category: "city",
    approximateDate: t("c. 717 BCE – 705 BCE", "حوالي 717 ق.م – 705 ق.م"),
    yearFrom: -717,
    yearTo: -705,
    overview: [
      {
        type: "fact",
        text: t(
          "Dur-Sharrukin (\"Fortress of Sargon\") was a newly founded Assyrian capital city built by King Sargon II in the late 8th century BCE.",
          "كانت دور شروكين (حصن سركون) عاصمة آشورية مؤسسة حديثاً بناها الملك سركون الثاني في أواخر القرن الثامن ق.م."
        ),
        sourceIds: ["louvre-khorsabad"],
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "The city was laid out on a grand rectangular plan with a massive palace complex, temples, and fortification walls featuring seven gates.",
          "صُممت المدينة بخطة مستطيلة ضخمة تشمل مجمع قصر عظيم ومعابد وأسوار حصون ذات سبعة أبواب."
        ),
        sourceIds: ["louvre-khorsabad"],
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "Dur-Sharrukin was abandoned after Sargon II's death in 705 BCE and never completed, making it a remarkable archaeological snapshot.",
          "هُجرت دور شروكين بعد موت سركون الثاني في 705 ق.م ولم تكتمل، مما جعلها لقطة أثرية استثنائية."
        ),
      },
    ],
    unesco: { inscribed: false },
    images: [
      {
        id: "khorsabad-1",
        url: img("Ancient Dur-Sharrukin Khorsabad, Assyrian capital ruins, lamassu gateway, planned city layout"),
        alt: t("Ruins of Dur-Sharrukin", "أطلال دور شروكين"),
      },
    ],
    timeline: [
      { year: "717 BCE", title: t("Sargon II founds Dur-Sharrukin", "سركون الثاني يؤسس دور شروكين") },
      { year: "705 BCE", title: t("Sargon's death and abandonment", "موت سركون وهجور المدينة") },
    ],
    relatedMonumentIds: ["nineveh", "nimrud", "ashur"],
    collections: ["ancient-iraq", "assyrian-heritage"],
    rarity: "rare",
    cardNumber: "IQ-010",
    cardSet: "Ancient Iraq",
    sources: [
      {
        id: "louvre-khorsabad",
        title: t("Dur-Sharrukin — Louvre Museum", "دور شروكين — متحف اللوفر"),
        institution: t("Musée du Louvre", "متحف اللوفر"),
        url: "https://www.louvre.fr/en",
      },
    ],
    addedAt: "2025-01-01",
  },
  {
    id: "ctesiphon",
    slug: "ctesiphon",
    names: {
      official: t("Taq Kasra (Ctesiphon)", "طاق كسرى (طيسفون)"),
      alternatives: [
        t("Archway of Ctesiphon", "قوس طيسفون"),
        t("Taq Kisra", "طاق كسرى"),
      ],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Baghdad Governorate", "محافظة بغداد"),
    coordinates: { lat: 33.0914, lng: 44.5783 },
    civilization: t("Sassanid", "الساسانية"),
    periods: [t("Sassanid Empire", "الإمبراطورية الساسانية")],
    category: "monument",
    approximateDate: t("c. 3rd–6th century CE", "القرن الثالث – السادس م"),
    yearFrom: 200,
    yearTo: 600,
    overview: [
      {
        type: "fact",
        text: t(
          "Ctesiphon was the capital of the Sassanid Empire and one of the greatest cities of late antiquity, located on the Tigris River near modern Baghdad.",
          "كانت طيسفون عاصمة الإمبراطورية الساسانية وإحدى أعظم مدن العصور القديمة المتأخرة، على نهر دجلة قرب بغداد الحديثة."
        ),
      },
      {
        type: "fact",
        text: t(
          "The Taq Kasra (Arch of Ctesiphon) is the largest single-span vault of unreinforced brickwork in the world.",
          "يُعد طاق كسرى (قوس طيسفون) أكبر قوس واحد من الطوب غير المقوّى في العالم."
        ),
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "The Taq Kasra vault spans approximately 37 meters and rises to about 34 meters, demonstrating advanced Sassanid engineering.",
          "يمتد قوس طاق كسرى حوالي 37 متراً ويرتفع نحو 34 متراً، مما يبرز الهندسة الساسانية المتقدمة."
        ),
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "Ctesiphon served as the Sassanid capital for over 800 years until its fall to the Arab conquest in 637 CE.",
          "كانت طيسفون العاصمة الساسانية لأكثر من 800 سنة حتى سقوطها في الفتح العربي عام 637 م."
        ),
      },
    ],
    unesco: { inscribed: false },
    images: [
      {
        id: "ctesiphon-1",
        url: img("Taq Kasra archway of Ctesiphon, massive Sassanid brick vault, ancient Persian architecture, desert"),
        alt: t("Taq Kasra (Arch of Ctesiphon)", "طاق كسرى"),
      },
    ],
    timeline: [
      { year: "c. 3rd century CE", title: t("Ctesiphon becomes Sassanid capital", "تصبح طيسفون عاصمة ساسانية") },
      { year: "637 CE", title: t("Arab conquest of Ctesiphon", "الفتح العربي لطيسفون") },
    ],
    relatedMonumentIds: ["samarra", "baghdad"],
    collections: ["ancient-iraq", "islamic-architecture"],
    rarity: "epic",
    cardNumber: "IQ-011",
    cardSet: "Ancient Iraq",
    sources: [],
    addedAt: "2025-01-01",
  },
  {
    id: "samarra",
    slug: "samarra",
    names: {
      official: t("Ancient City of Samarra", "مدينة سامراء القديمة"),
      alternatives: [t("Samarra", "سامراء")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Salah ad-Din Governorate", "محافظة صلاح الدين"),
    coordinates: { lat: 34.2014, lng: 43.8817 },
    civilization: t("Abbasid", "العباسية"),
    periods: [t("Abbasid Caliphate", "الخلافة العباسية")],
    category: "city",
    approximateDate: t("c. 836 CE – 892 CE", "حوالي 836 م – 892 م"),
    yearFrom: 836,
    yearTo: 892,
    overview: [
      {
        type: "fact",
        text: t(
          "Samarra was the capital of the Abbasid Caliphate between 836 and 892 CE, founded by Caliph al-Mu'tasim.",
          "كانت سامراء عاصمة الخلافة العباسية بين 836 و892 م، أسسها الخليفة المعتصم."
        ),
        sourceIds: ["unesco-samarra"],
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "The site preserves the largest scale of Abbasid urban planning, including palaces, mosques, and the famous spiral Malwiya minaret of the Great Mosque.",
          "يحفظ الموقع أكبر نطاق للتخطيط الحضري العباسي، بما فيها القصور والمساجد ومنارة الملوية الحلزونية الشهيرة."
        ),
        sourceIds: ["unesco-samarra"],
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "Samarra Archaeological City was inscribed on the UNESCO World Heritage List in 2007.",
          "سُجلت مدينة سامراء الأثرية في قائمة التراث العالمي لليونسكو في عام 2007."
        ),
        sourceIds: ["unesco-samarra"],
      },
    ],
    unesco: {
      inscribed: true,
      year: 2007,
      criteria: ["ii", "iii", "iv"],
    },
    images: [
      {
        id: "samarra-1",
        url: img("Samarra archaeological city, Great Mosque with spiral Malwiya minaret, Abbasid architecture, golden light"),
        alt: t("Samarra with Malwiya minaret", "سامراء ومنارة الملوية"),
      },
    ],
    timeline: [
      { year: "836 CE", title: t("Samarra founded by al-Mu'tasim", "تأسيس سامراء على يد المعتصم") },
      { year: "892 CE", title: t("Capital returns to Baghdad", "عودة العاصمة لبغداد") },
      { year: "2007 CE", title: t("UNESCO World Heritage inscription", "تسجيل اليونسكو") },
    ],
    relatedMonumentIds: ["malwiya", "ctesiphon"],
    collections: ["ancient-iraq", "islamic-architecture"],
    rarity: "epic",
    cardNumber: "IQ-012",
    cardSet: "Ancient Iraq",
    sources: [
      {
        id: "unesco-samarra",
        title: t("Samarra — UNESCO World Heritage", "سامراء — تراث اليونسكو العالمي"),
        institution: t("UNESCO", "اليونسكو"),
        url: "https://whc.unesco.org/en/list/1291",
      },
    ],
    addedAt: "2025-01-01",
  },
  {
    id: "malwiya",
    slug: "malwiya-minaret",
    names: {
      official: t("Malwiya Minaret (Great Mosque of Samarra)", "منارة الملوية (جامع سامراء الكبير)"),
      alternatives: [t("Malwiya", "الملوية")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Salah ad-Din Governorate", "محافظة صلاح الدين"),
    coordinates: { lat: 34.2117, lng: 43.8775 },
    civilization: t("Abbasid", "العباسية"),
    periods: [t("Abbasid Caliphate", "الخلافة العباسية")],
    category: "mosque",
    approximateDate: t("c. 851 CE", "حوالي 851 م"),
    yearFrom: 848,
    yearTo: 852,
    overview: [
      {
        type: "fact",
        text: t(
          "The Malwiya is the minaret of the Great Mosque of Samarra, built by Caliph al-Mutawakkil in the 9th century CE.",
          "الملوية هي منارة جامع سامراء الكبير التي بناها الخليفة المتوكل في القرن التاسع م."
        ),
      },
      {
        type: "fact",
        text: t(
          "Its distinctive spiral design, with an external spiral ramp, is one of the most iconic structures of Islamic architecture.",
          "يُعد تصميمها الحلزوني المميز، مع منحدر خارجي حلزوني، من أكثر الهياكل أيقونية في العمارة الإسلامية."
        ),
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "The minaret rises about 52 meters, with a spiral ramp that winds around its exterior to the top.",
          "ترتفع المنارة حوالي 52 متراً، مع منحدر حلزوني يلتف حول خارجها إلى القمة."
        ),
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "The Malwiya has inspired mosque minarets across the Islamic world and remains a symbol of Abbasid architectural genius.",
          "ألهمت الملوية منارات المساجد في العالم الإسلامي ولا تزال رمزاً لبراعة العمارة العباسية."
        ),
      },
    ],
    unesco: { inscribed: true, year: 2007 },
    images: [
      {
        id: "malwiya-1",
        url: img("Malwiya spiral minaret of Samarra, iconic Islamic architecture, golden sunset, desert landscape"),
        alt: t("Malwiya minaret", "منارة الملوية"),
      },
    ],
    timeline: [
      { year: "851 CE", title: t("Construction completed", "اكتمال البناء") },
      { year: "2005 CE", title: t("Damage to the top by explosion", "ضرر بالقمة بسبب انفجار") },
    ],
    relatedMonumentIds: ["samarra", "ctesiphon"],
    collections: ["ancient-iraq", "islamic-architecture"],
    rarity: "epic",
    cardNumber: "IQ-013",
    cardSet: "Ancient Iraq",
    sources: [],
    addedAt: "2025-01-01",
  },
  {
    id: "uruk",
    slug: "uruk",
    names: {
      official: t("Ancient City of Uruk", "مدينة وركاء القديمة"),
      alternatives: [t("Warka", "الوركاء")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Muthanna Governorate", "محافظة المثنى"),
    coordinates: { lat: 31.3264, lng: 45.6403 },
    civilization: t("Sumerian", "السومرية"),
    periods: [t("Uruk period", "فترة وركاء")],
    category: "city",
    approximateDate: t("c. 4th millennium BCE – 3rd century CE", "الألف الرابع ق.م – القرن الثالث م"),
    yearFrom: -3500,
    yearTo: 300,
    overview: [
      {
        type: "fact",
        text: t(
          "Uruk was one of the world's earliest major cities and the center of the Sumerian Uruk period, associated with the legendary king Gilgamesh.",
          "كانت وركاء إحدى أولى المدن الكبرى في العالم ومركز فترة وركاء السومرية، المرتبطة بالملك الأسطوري جلجامش."
        ),
        sourceIds: ["british-museum-uruk"],
      },
      {
        type: "fact",
        text: t(
          "Uruk is widely considered one of the first true cities in human history, where writing (cuneiform) and monumental architecture first developed.",
          "تُعتبر وركاء إحدى أولى المدن الحقيقية في تاريخ البشرية، حيث تطور الكتابة (المسمارية) والعمارة الضخمة لأول مرة."
        ),
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "The site contains the remains of the White Temple dedicated to the sky god Anu, built atop a ziggurat in the late 4th millennium BCE.",
          "يضم الموقع بقايا المعبد الأبيض المكرس لإله السماء آنو، المبني فوق زقورة في أواخر الألف الرابع ق.م."
        ),
        sourceIds: ["british-museum-uruk"],
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "The Uruk period (c. 4000–3100 BCE) is named after the city and represents the emergence of urban civilization in Mesopotamia.",
          "سُميت فترة وركاء (حوالي 4000–3100 ق.م) نسبة إلى المدينة وتمثل نشوء الحضارة الحضرية في بلاد الرافدين."
        ),
      },
    ],
    unesco: { inscribed: false },
    images: [
      {
        id: "uruk-1",
        url: img("Ancient city of Uruk ruins, Sumerian White Temple ziggurat, desert, archaeological mound"),
        alt: t("Ruins of Uruk", "أطلال وركاء"),
      },
    ],
    timeline: [
      { year: "c. 4000 BCE", title: t("Uruk period begins", "بداية فترة وركاء") },
      { year: "c. 3100 BCE", title: t("Development of cuneiform writing", "تطور الكتابة المسمارية") },
      { year: "1912 CE", title: t("German excavations begin", "بداية التنقيبات الألمانية") },
    ],
    relatedMonumentIds: ["ur", "lagash", "nippur"],
    collections: ["ancient-iraq", "mesopotamia-history"],
    rarity: "epic",
    cardNumber: "IQ-014",
    cardSet: "Ancient Iraq",
    sources: [
      {
        id: "british-museum-uruk",
        title: t("Uruk — British Museum", "وركاء — المتحف البريطاني"),
        institution: t("The British Museum", "المتحف البريطاني"),
        url: "https://www.britishmuseum.org/",
      },
    ],
    addedAt: "2025-01-01",
  },
  {
    id: "lagash",
    slug: "lagash",
    names: {
      official: t("Ancient City of Lagash", "مدينة لجش القديمة"),
      alternatives: [t("Tell al-Hiba", "تل الحيبة")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Dhi Qar Governorate", "محافظة ذي قار"),
    coordinates: { lat: 31.3833, lng: 46.1167 },
    civilization: t("Sumerian", "السومرية"),
    periods: [t("Early Dynastic", "الملكية المبكرة")],
    category: "city",
    approximateDate: t("c. 2900 BCE – 2000 BCE", "حوالي 2900 ق.م – 2000 ق.م"),
    yearFrom: -2900,
    yearTo: -2000,
    overview: [
      {
        type: "fact",
        text: t(
          "Lagash was one of the major Sumerian city-states, known for its rulers including Ur-Nanshe, Eannatum, and Gudea.",
          "كانت لجش من أهم المدن-الدول السومرية، اشتهرت بحكامها اور نانشي وإعناتوم وغوديا."
        ),
      },
      {
        type: "fact",
        text: t(
          "The city is famous for the Stele of the Vultures (Eannatum's victory stele) and the statues of Gudea, among the finest Sumerian sculptures.",
          "اشتهرت المدينة بملصق النسور (ملصق انتصار إعناتوم) وتماثيل غوديا، من أرقى المنحوتات السومرية."
        ),
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "Lagash contains extensive temple and palace remains, including the temple of the god Ningirsu.",
          "تضم لجش بقايا معابد وقصور واسعة، بما فيها معبد الإله نينجيرسو."
        ),
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "Lagash's artistic and architectural achievements represent a peak of Early Dynastic Sumerian civilization.",
          "تمثل إنجازات لجش الفنية والمعمارية ذروة الحضارة السومرية في الملوك المبكرة."
        ),
      },
    ],
    unesco: { inscribed: false },
    images: [
      {
        id: "lagash-1",
        url: img("Ancient Lagash ruins, Sumerian city-state, temple remains, desert archaeological site"),
        alt: t("Ruins of Lagash", "أطلال لجش"),
      },
    ],
    timeline: [
      { year: "c. 2900 BCE", title: t("Rise of Lagash", "صعود لجش") },
      { year: "c. 2450 BCE", title: t("Eannatum's reign", "عهد إعناتوم") },
      { year: "c. 2100 BCE", title: t("Gudea's building program", "برنامج غوديا البنائي") },
    ],
    relatedMonumentIds: ["ur", "uruk", "nippur"],
    collections: ["ancient-iraq", "mesopotamia-history"],
    rarity: "rare",
    cardNumber: "IQ-015",
    cardSet: "Ancient Iraq",
    sources: [],
    addedAt: "2025-01-01",
  },
  {
    id: "nippur",
    slug: "nippur",
    names: {
      official: t("Ancient City of Nippur", "مدينة نيبور القديمة"),
      alternatives: [t("Nuffar", "نفر")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Qadisiyyah Governorate", "محافظة القادسية"),
    coordinates: { lat: 32.1533, lng: 45.2617 },
    civilization: t("Sumerian", "السومرية"),
    periods: [t("Sumerian", "السومرية")],
    category: "city",
    approximateDate: t("c. 5th millennium BCE – 9th century CE", "الألف الخامس ق.م – القرن التاسع م"),
    yearFrom: -4000,
    yearTo: 900,
    overview: [
      {
        type: "fact",
        text: t(
          "Nippur was the religious capital of Sumer and the main cult center of the supreme god Enlil.",
          "كانت نيبور العاصمة الدينية لسامر والمركز الرئيسي لعبادة الإله الأعلى إنليل."
        ),
      },
      {
        type: "fact",
        text: t(
          "The city was never a political capital but held immense religious authority; kings of Sumer and Akkad sought legitimacy by receiving Enlil's blessing at Nippur.",
          "لم تكن المدينة عاصمة سياسية قط، لكنها كانت تملك سلطة دينية هائلة؛ حيث سعى ملوك سومر وأكد للحصول على الشرعية عبر نيل بركة إنليل في نيبور."
        ),
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "The Ekur temple complex, dedicated to Enlil, and a great ziggurat dominated the city's sacred landscape.",
          "هيمن مجمع معبد إيكور المكرس لإنليل وزقورة عظيمة على المشهد الديني للمدينة."
        ),
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "Nippur's archives yielded tens of thousands of cuneiform tablets documenting religion, literature, and administration across millennia.",
          "سلمت أرشيفات نيبور عشرات الآلاف من الألواح المسمارية توثيق الدين والأدب والإدارة على مدى آلاف السنين."
        ),
      },
    ],
    unesco: { inscribed: false },
    images: [
      {
        id: "nippur-1",
        url: img("Ancient Nippur ruins, Sumerian ziggurat of Enlil, temple complex, desert mound"),
        alt: t("Ruins of Nippur", "أطلال نيبور"),
      },
    ],
    timeline: [
      { year: "c. 4000 BCE", title: t("Early settlement", "الاستيطان المبكر") },
      { year: "c. 2100 BCE", title: t("Ziggurat built by Ur-Nammu", "زقورة اور نامو") },
    ],
    relatedMonumentIds: ["ur", "uruk", "lagash"],
    collections: ["ancient-iraq", "mesopotamia-history"],
    rarity: "rare",
    cardNumber: "IQ-016",
    cardSet: "Ancient Iraq",
    sources: [],
    addedAt: "2025-01-01",
  },
  {
    id: "kesh",
    slug: "kish",
    names: {
      official: t("Ancient City of Kish", "مدينة كيش القديمة"),
      alternatives: [t("Al-Uhaimir", "الأحيمر")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Babil Governorate", "محافظة بابل"),
    coordinates: { lat: 32.5833, lng: 44.5167 },
    civilization: t("Sumerian", "السومرية"),
    periods: [t("Early Dynastic", "الملكية المبكرة")],
    category: "city",
    approximateDate: t("c. 2900 BCE – 1st millennium BCE", "حوالي 2900 ق.م – الألف الأول ق.م"),
    yearFrom: -2900,
    yearTo: -500,
    overview: [
      {
        type: "fact",
        text: t(
          "Kish was an important Sumerian city-state located east of Babylon, considered in Sumerian tradition the first city to receive kingship after the Flood.",
          "كانت كيش مدينة-دولة سومرية مهمة شرق بابل، وتُعتبر في التقاليد السومرية أول مدينة استلمت الملكية بعد الطوفان."
        ),
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "The site includes the remains of a ziggurat, temples, and a palace complex from the Early Dynastic period.",
          "يضم الموقع بقايا زقورة ومعابد ومجمع قصر من فترة الملوك المبكرة."
        ),
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "Kish's rulers include the famous queen Ku-Baba and the king Sargon of Akkad, who began his career as cupbearer to the king of Kish.",
          "من حكام كيش الملكة المشهورة كو بابا والملك سركون من أكد الذي بدأ مسيرته خادماً للملك كيش."
        ),
      },
    ],
    unesco: { inscribed: false },
    images: [
      {
        id: "kesh-1",
        url: img("Ancient city of Kish ruins, Sumerian ziggurat, early dynastic settlement, desert"),
        alt: t("Ruins of Kish", "أطلال كيش"),
      },
    ],
    timeline: [
      { year: "c. 2900 BCE", title: t("First Dynasty of Kish", "السلالة الأولى لكيش") },
      { year: "c. 2334 BCE", title: t("Sargon of Akkad rises from Kish", "صعود سركون من أكد من كيش") },
    ],
    relatedMonumentIds: ["ur", "lagash", "nippur"],
    collections: ["ancient-iraq", "mesopotamia-history"],
    rarity: "common",
    cardNumber: "IQ-017",
    cardSet: "Ancient Iraq",
    sources: [],
    addedAt: "2025-01-01",
  },
  {
    id: "larsa",
    slug: "larsa",
    names: {
      official: t("Ancient City of Larsa", "مدينة لارسا القديمة"),
      alternatives: [t("Tell Senkereh", "تل سنكرة")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Dhi Qar Governorate", "محافظة ذي قار"),
    coordinates: { lat: 31.2333, lng: 45.8333 },
    civilization: t("Sumerian / Amorite", "السومرية / الأمورية"),
    periods: [t("Old Babylonian", "البابلية القديمة")],
    category: "city",
    approximateDate: t("c. 2900 BCE – 1762 BCE", "حوالي 2900 ق.م – 1762 ق.م"),
    yearFrom: -2900,
    yearTo: -1762,
    overview: [
      {
        type: "fact",
        text: t(
          "Larsa was an important Sumerian city-state and a major religious center of the sun god Utu (Shamash).",
          "كانت لارسا مدينة-دولة سومرية مهمة ومركز ديني كبير لإله الشمس أوتو (شمش)."
        ),
      },
      {
        type: "fact",
        text: t(
          "Under King Rim-Sin I (1822–1763 BCE), Larsa became the dominant power in southern Mesopotamia before being conquered by Hammurabi of Babylon.",
          "في عهد الملك ريم سين الأول (1822–1763 ق.م)، أصبحت لارسا القوة المسيطرة في جنوب بلاد الرافدين قبل أن يفتحها حمورابي بابل."
        ),
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "Larsa contains the remains of the great ziggurat of Utu and an oval temple enclosure, among the largest Sumerian sacred precincts.",
          "تضم لارسا بقايا زقورة أوتو العظيمة وسياج معبد بيضاوي، من أكبر الحرمات الدينية السومرية."
        ),
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "Larsa's conquest by Hammurabi in 1762 BCE paved the way for Babylon's rise as the dominant power in Mesopotamia.",
          "فتح حمورابي لارسا في 1762 ق.م مهّد لصعود بابل كقوة مسيطرة في بلاد الرافدين."
        ),
      },
    ],
    unesco: { inscribed: false },
    images: [
      {
        id: "larsa-1",
        url: img("Ancient Larsa ruins, Sumerian ziggurat of sun god Utu, temple oval, desert archaeological site"),
        alt: t("Ruins of Larsa", "أطلال لارسا"),
      },
    ],
    timeline: [
      { year: "c. 2900 BCE", title: t("Early settlement", "الاستيطان المبكر") },
      { year: "1822 BCE", title: t("Rim-Sin I's reign", "عهد ريم سين الأول") },
      { year: "1762 BCE", title: t("Conquest by Hammurabi", "الفتح على يد حمورابي") },
    ],
    relatedMonumentIds: ["ur", "lagash", "uruk"],
    collections: ["ancient-iraq", "mesopotamia-history"],
    rarity: "common",
    cardNumber: "IQ-018",
    cardSet: "Ancient Iraq",
    sources: [],
    addedAt: "2025-01-01",
  },
  {
    id: "etemenanki",
    slug: "etemenanki-ziggurat",
    names: {
      official: t("Etemenanki Ziggurat (Tower of Babel)", "زقورة إيتيمانانكي (برج بابل)"),
      alternatives: [t("Tower of Babel", "برج بابل")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Babylon Governorate", "محافظة بابل"),
    coordinates: { lat: 32.5375, lng: 44.4219 },
    civilization: t("Neo-Babylonian", "البابلية الحديثة"),
    periods: [t("Neo-Babylonian Empire", "الإمبراطورية البابلية الحديثة")],
    category: "ziggurat",
    approximateDate: t("c. 6th century BCE", "القرن السادس ق.م"),
    yearFrom: -605,
    yearTo: -562,
    overview: [
      {
        type: "fact",
        text: t(
          "Etemenanki was a ziggurat dedicated to the god Marduk in Babylon, often associated with the biblical Tower of Babel tradition.",
          "كانت إيتيمانانكي زقورة مكرسة للآله مردوق في بابل، وترتبط غالباً بتقليد برج بابل التوراتي."
        ),
        sourceIds: ["british-museum-babylon"],
      },
      {
        type: "interpretation",
        text: t(
          "While Etemenanki is the most commonly cited archaeological candidate for the Tower of Babel, the biblical story is a religious tradition and should not be treated as a literal historical account.",
          "بينما تعد إيتيمانانكي المرشح الأثري الأكثر شيوعاً لبرج بابل، إلا أن القصة التوراتية تقليد ديني ولا ينبغي التعامل معها كرواية تاريخية حرفية."
        ),
        sourceIds: ["british-museum-babylon"],
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "The ziggurat was a massive stepped structure built of fired bricks, reaching approximately 91 meters in height according to ancient sources.",
          "كانت الزقورة هيكل دربي ضخم من الطوب المخبوز، يصل ارتفاعه إلى حوالي 91 متراً بحسب المصادر القديمة."
        ),
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "The Etemenanki was the religious center of Babylon and a symbol of the city's connection to the divine.",
          "كانت إيتيمانانكي المركز الديني لبابل ورمز ارتباط المدينة بالإلهي."
        ),
      },
    ],
    unesco: { inscribed: false },
    images: [
      {
        id: "etemenanki-1",
        url: img("Etemenanki ziggurat of Babylon, massive stepped tower, reconstruction, dramatic sky, golden light"),
        alt: t("Artistic reconstruction of Etemenanki", "إعادة إحياء إيتيمانانكي"),
      },
    ],
    timeline: [
      { year: "c. 600 BCE", title: t("Construction under Nebuchadnezzar II", "البناء في عهد نبوخذ نصر الثاني") },
      { year: "331 BCE", title: t("Alexander the Great orders restoration", "الإسكندر الأكبر يأمر بالترميم") },
    ],
    relatedMonumentIds: ["babylon", "ishtar-gate", "hanging-gardens"],
    collections: ["ancient-iraq", "babylonian-civilization"],
    rarity: "epic",
    cardNumber: "IQ-019",
    cardSet: "Ancient Iraq",
    sources: [
      {
        id: "british-museum-babylon",
        title: t("Babylon — British Museum", "بابل — المتحف البريطاني"),
        institution: t("The British Museum", "المتحف البريطاني"),
        url: "https://www.britishmuseum.org/",
      },
    ],
    addedAt: "2025-01-01",
  },
  {
    id: "mustansiriya",
    slug: "al-mustansiriya",
    names: {
      official: t("Al-Mustansiriya Madrasa", "مدرسة المستنصرية"),
      alternatives: [t("Mustansiriya School", "مدرسة المستنصرية")],
    },
    country: { code: "IQ", name: t("Iraq", "العراق") },
    region: t("Baghdad Governorate", "محافظة بغداد"),
    coordinates: { lat: 33.3433, lng: 44.3897 },
    civilization: t("Abbasid", "العباسية"),
    periods: [t("Abbasid Caliphate", "الخلافة العباسية")],
    category: "monument",
    approximateDate: t("1227 CE – 1233 CE", "1227 م – 1233 م"),
    yearFrom: 1227,
    yearTo: 1233,
    overview: [
      {
        type: "fact",
        text: t(
          "Al-Mustansiriya Madrasa was a major Islamic educational institution in Baghdad, established by the Abbasid Caliph al-Mustansir.",
          "كانت مدرسة المستنصرية مؤسسة تعليمية إسلامية كبرى في بغداد، أسسها الخليفة العباسي المستنصر بالله."
        ),
      },
      {
        type: "fact",
        text: t(
          "It is one of the few surviving Abbasid monuments in Baghdad, renowned for its distinctive four-iwan plan and intricate brickwork and stucco decoration.",
          "هي من النادر من البواقي العباسية في بغداد، تشتهر بخطتها الأربعة الأيوان والطوب والجبس المنقوش المعقد."
        ),
      },
    ],
    architecture: [
      {
        type: "fact",
        text: t(
          "The madrasa features four iwans arranged around a central courtyard, with student cells, a mosque, and lecture halls reflecting its role as a theological university.",
          "تضم المدرسة أربعة أيوان حول فناء مركزي، مع خلايا طلاب ومسجد وقاعات محاضرات تعكس دورها كجامعة دينية."
        ),
      },
    ],
    significance: [
      {
        type: "fact",
        text: t(
          "Al-Mustansiriya represents the peak of Abbasid architectural patronage and educational institutions in the Islamic world.",
          "تمثل المستنصرية ذروة الرعاية المعمارية العباسية والمؤسسات التعليمية في العالم الإسلامي."
        ),
      },
    ],
    unesco: { inscribed: false },
    images: [
      {
        id: "mustansiriya-1",
        url: img("Al-Mustansiriya Madrasa in Baghdad, Abbasid four-iwan architecture, brick and stucco, historic courtyard"),
        alt: t("Al-Mustansiriya Madrasa", "مدرسة المستنصرية"),
      },
    ],
    timeline: [
      { year: "1227 CE", title: t("Founded by al-Mustansir", "تأسيسها على يد المستنصر") },
      { year: "1233 CE", title: t("Construction completed", "اكتمال البناء") },
      { year: "1258 CE", title: t("Survives the Mongol sack of Baghdad", "البقاء على قيد الحياة بعد سقوط بغداد المغولي") },
    ],
    relatedMonumentIds: ["samarra", "malwiya"],
    collections: ["ancient-iraq", "islamic-architecture"],
    rarity: "epic",
    cardNumber: "IQ-020",
    cardSet: "Ancient Iraq",
    sources: [],
    addedAt: "2025-01-01",
  },
];

export const getMonumentById = (id: string) =>
  monuments.find((m) => m.id === id);

export const getMonumentBySlug = (slug: string) =>
  monuments.find((m) => m.slug === slug);
