# World Heritage Cards — خطة التنفيذ (MVP)

## Task 1: تهيئة المشروع ونظام التصميم
- **Status**: `pending`
- **Priority**: high
- **Depends On**: None
- **Description**:
  - إنشاء مشروع Next.js + TypeScript + Tailwind CSS
  - تثبيت Framer Motion ومكتبات i18n
  - إعداد نظام التصميم (ألوان، خطوط، طبقات، إطارات البطاقات)
  - إعداد دعم RTL/LTR
- **Acceptance Criteria Addressed**: AC-8, AC-5
- **Test Requirements**:
  - `rule` TR-1.1: المشروع يبني ويعمل عبر `npm run dev` بدون أخطاء
  - `rubric` TR-1.2: نظام الألوان والخطوط يعكس هوية فاخرة سينمائية; scale 1-5; threshold >= 4

## Task 2: نماذج البيانات والمحتوى التراثي
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1
- **Description**:
  - تعريف أنواع TypeScript قوية (Monument, CardVariant, Collection, Civilization, Country, Period, Rarity)
  - إنشاء ~20 سجل تراثي عراقي بمحتوى موثق (بما فيها حدائق بابل مع توضيح عدم اليقين)
  - بيانات الحضارات، الدول، الفترات، الفئات، مجموعات
  - طبقة وصول للبيانات (data access) منفصلة
- **Acceptance Criteria Addressed**: AC-7, FR-9, FR-10
- **Test Requirements**:
  - `rule` TR-2.1: 20 سجلاً على الأقل تحتوي الحقول المطلوبة
  - `rule` TR-2.2: سجل حدائق بابل يوضح عدم اليقين الأثري صراحةً
  - `rule` TR-2.3: كل الأنواع مكتوبة بقوة TypeScript

## Task 3: نظام التدويل (i18n) عربي/إنجليزي
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 1
- **Description**:
  - إعداد مكتبة i18n (next-intl أو مخصص)
  - ملفات ترجمة للواجهة
  - حقول المحتوى القابلة للترجمة
  - تبديل اللغة واتجاه التخطيط
- **Acceptance Criteria Addressed**: AC-5
- **Test Requirements**:
  - `rule` TR-3.1: تبديل اللغة يغير النصوص واتجاه RTL/LTR
  - `rule` TR-3.2: المحتوى التراثي يحتوي حقولاً مترجمة

## Task 4: مكون البطاقة التفاعلي
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 2
- **Description**:
  - مكون بطاقة قابل لإعادة الاستخدام يقبل بيانات ومتغير ندرة
  - ميل 3D حسب موضع المؤشر
  - انعكاسات ضوئية متحركة (specular highlight)
  - قلب 3D سلس (وجه أمامي/خلفي)
  - حالات hover/focus/pressed/loading/selected
  - دعم touch و reduced-motion
  - إطارات متنوعة حسب الندرة
- **Acceptance Criteria Addressed**: AC-1
- **Test Requirements**:
  - `rule` TR-4.1: البطاقة تميل وتنقلب وتظهر انعكاسات ضوئية
  - `rule` TR-4.2: تعمل على اللمس ومع reduced-motion

## Task 5: معرض البطاقات (Carousel)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 4
- **Description**:
  - معرض أفقي سلس مع سحب ونقر
  - تنقل بالأسهم ولوحة المفاتيح
  - تأثيرات عمق وقياس
  - منع النقر أثناء السحب
- **Acceptance Criteria Addressed**: AC-2
- **Test Requirements**:
  - `rule` TR-5.1: التنقل يعمل بالسحب والأسهم ولوحة المفاتيح
  - `rule` TR-5.2: لا يتم اختيار بطاقة أثناء سحبها

## Task 6: الصفحة الرئيسية (Home / Discover)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 4, Task 5
- **Description**:
  - قسم سينمائي بطولي مع نصب وزر استكشاف
  - بطاقات مميزة، مضاف حديثاً، حضارات مميزة، مجموعات
  - شريط تنقل ونهاية صفحة
- **Acceptance Criteria Addressed**: FR-home
- **Test Requirements**:
  - `rule` TR-6.1: الصفحة تعرض كل الأقسام المطلوبة
  - `rubric` TR-6.2: التصميم السينمائي الفاخر; scale 1-5; threshold >= 4

## Task 7: صفحة استكشاف البطاقات (Explorer)
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 2, Task 4
- **Description**:
  - شبكة بطاقات متجاوبة
  - بحث بالاسم
  - فلاتر (دولة، حضارة، فترة، فئة، ندرة)
  - فرز (اسم، تاريخ، مضاف حديثاً)
  - حالة فارغة وحالات تحميل/خطأ
- **Acceptance Criteria Addressed**: AC-3
- **Test Requirements**:
  - `rule` TR-7.1: البحث والفلاتر والفرز تعمل على بيانات حقيقية
  - `rule` TR-7.2: تظهر حالة فارغة عند عدم تطابق نتائج

## Task 8: صفحة تفاصيل النصب
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 2
- **Description**:
  - URL مستقر لكل نصب
  - صورة بطولية، أسماء رسمية وبديلة، دولة، إحداثيات، منطقة
  - نظرة عامة، فترة البناء، حضارة، معالم معمارية، الأهمية، الحفظ، الحالة الحالية، اليونسكو
  - معرض صور، خط زمني، نصب ذات صلة، مراجع
  - SEO-friendly
- **Acceptance Criteria Addressed**: AC-4, AC-7
- **Test Requirements**:
  - `rule` TR-8.1: صفحة كاملة بكل الأقسام
  - `rule` TR-8.2: URL مستقر قابل للمشاركة

## Task 9: صفحة مجموعتي (My Collection)
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 4
- **Description**:
  - البطاقات المجمعة والمفضلة
  - نسبة إكمال المجموعة
  - فلاتر وفرز
  - حفظ في localStorage
- **Acceptance Criteria Addressed**: AC-6
- **Test Requirements**:
  - `rule` TR-9.1: البطاقات المحفوظة تبقى بعد تحديث الصفحة
  - `rule` TR-9.2: نسبة الإكمال تحسب بشكل صحيح

## Task 10: رحلات تعليمية (Learning Journeys)
- **Status**: `pending`
- **Priority**: medium
- **Depends On**: Task 2, Task 8
- **Description**:
  - رحلات منسقة (اكتشف بابل القديمة، العمارة الآشورية، تراث الموصل، تاريخ بلاد ما بين النهرين)
  - ربط نصب متعددة في مسار تعليمي
- **Acceptance Criteria Addressed**: FR-journeys
- **Test Requirements**:
  - `rule` TR-10.1: الرحلات تعرض نصبها مرتبة

## Task 11: التهيئة للبنية الخلفية والإدارة (المسار فقط)
- **Status**: `pending`
- **Priority**: low
- **Depends On**: Task 2
- **Description**:
  - طبقة API وهمية/واجهة واضحة جاهزة لـ Supabase
  - هيكل لإدارة المحتوى (غير مفعّل للعامة)
  - ملف README بالإعداد والنشر
- **Acceptance Criteria Addressed**: NFR-5
- **Test Requirements**:
  - `rule` TR-11.1: واجهة API محددة تفصل الواجهة عن البيانات
  - `rule` TR-11.2: README يحتوي تعليمات الإعداد

## Task 12: الاختبار والتحقق النهائي
- **Status**: `pending`
- **Priority**: high
- **Depends On**: Task 6, 7, 8, 9, 10
- **Description**:
  - فحص الاستجابة على أحجام متعددة
  - فحص إمكانية الوصول (keyboard, reduced-motion, contrast)
  - فحص i18n RTL
  - بناء الإنتاج وتشغيله
- **Acceptance Criteria Addressed**: AC-9, NFR-1, NFR-2
- **Test Requirements**:
  - `rule` TR-12.1: `npm run build` ينجح بدون أخطاء
  - `rubric` TR-12.2: تجربة متجاوبة ويمكن الوصول إليها; scale 1-5; threshold >= 4
