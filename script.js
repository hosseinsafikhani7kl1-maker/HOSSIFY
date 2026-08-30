// Helper for Asset Paths ensuring compatibility with GitHub Pages repo paths
function getAssetPath(url) {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url;
  }
  // Convert absolute leading slash /assets/... to relative ./assets/... for GitHub Pages
  if (url.startsWith('/')) {
    return '.' + url;
  }
  return url;
}

// ============================================================================
// ✏️ EDIT YOUR APPS HERE
// Add a new object to add a new app, or edit existing apps.
// All sections, modals, filters, and downloads update automatically!
// ============================================================================
const apps = [
  {
    id: 1,
    name: {
      fa: "محاسبات و مهندسی لوله‌مغزی سیار (CT Nexus)",
      en: "CT Nexus - Coiled Tubing Engineering"
    },
    tagline: {
      fa: "دستیار جامع محاسبات، هیدرولیک، کمانش و مهندسی لوله‌مغزی سیار نفت و گاز",
      en: "Comprehensive calculations, hydraulics, buckling & coiled tubing engineering suite"
    },
    description: {
      fa: `برنامه تخصصی محاسبات و مهندسی لوله‌مغزی سیار (Coiled Tubing Engineering & Calculations) یک ابزار جامع میدانی و مهندسی برای صنعت نفت و گاز است. این نرم‌افزار با ارائه ماژول‌های پیشرفته هیدرولیک، تحلیل مکانیک و کمانش لوله، شبیه‌ساز موتور درون‌چاهی، تمیزکاری ماسه و آکادمی ۱۲ فصلی، تمام نیازهای محاسباتی سرپرستان، مهندسان بهره‌برداری، تعمیر چاه و اساتید را در محیط دکل و دفتر برطرف می‌سازد.`,
      en: `CT Nexus is a specialized engineering and field calculation suite for Coiled Tubing operations in the oil & gas industry. Featuring advanced modules for wellbore hydraulics, tubing mechanics & buckling limits, PDM mud motor simulation, sand cleanout, and an interactive 12-chapter CT Academy.`
    },
    category: {
      fa: "ابزارهای کاربردی",
      en: "Utility & Tools"
    },
    icon: "/assets/ct-nexus-icon.svg",
    screenshots: [
      "/assets/ct-nexus-screen1.svg",
      "/assets/ct-nexus-screen2.svg",
      "/assets/ct-nexus-screen3.svg"
    ],
    rating: 5.0,
    reviewsCount: 28,
    downloads: {
      fa: "کمتر از ۱۰۰",
      en: "< 100"
    },
    size: {
      fa: "۴ مگابایت",
      en: "4 MB"
    },
    version: {
      fa: "۱.۰",
      en: "1.0"
    },
    lastUpdated: {
      fa: "۱۴۰۵/۰۶/۰۵",
      en: "2026/08/26"
    },
    appType: {
      fa: "برنامه اندرویدی",
      en: "Android App"
    },
    developer: "HOSSEIN SAFIKHANI",
    features: [
      { fa: "پنل سریع دکل: محاسبه آنی فشار هیدرواستاتیک، احجام حلقوی و زمان گردش سیال (Cycle Time)", en: "Field Quick Panel: Hydrostatic pressure, annular volume & cycle times" },
      { fa: "مکانیک لوله: پیش‌بینی حد کمانش سینوسی و مارپیچی و محاسبه نقطه قفل‌شدگی (Lockup)", en: "Tubing Mechanics: Sinusoidal & helical buckling limits, lockup point" },
      { fa: "شستشوی ماسه و جامدات: سرعت ته‌نشینی ذرات با مدل استوکس/روبینگر و نسبت حمل CCI", en: "Sand Cleanout: Stokes & Rubey settling velocity, critical rate & CCI" },
      { fa: "شبیه‌ساز موتور درون‌چاهی (PDM): گشتاور، توان، سرعت دوران مته (Bit RPM) و حد واماندگی", en: "PDM Mud Motor Simulator: Torque, HP, bit RPM & stall differential pressure" },
      { fa: "چیدمان BHA و لوبریکاتور: محاسبه پین‌های برش دیسکانکت و افت فشار نازل‌های جت", en: "BHA Toolstring & Lubricator: Clearance, jet nozzles & shear pin sizing" },
      { fa: "عملیات نیتروژن، اسیدکاری و سیمانکاری: تزریق N2، اسیدکاری ماتریکس و پلاگ تعادلی", en: "Nitrogen, Acid & Cement: N2 ratio, matrix acidizing & balanced plug" },
      { fa: "دیتابیس مشخصات لوله و پایش خستگی انباشته قرقره (Reel Fatigue Tracking)", en: "Reel Fatigue Tracking & standard CT pipe specifications database" },
      { fa: "آکادمی جامع لوله‌مغزی: ۱۲ فصل مدون آموزشی، فرمول‌های تعاملی و فرآیندهای ایمنی", en: "CT Academy: 12 comprehensive training chapters & interactive formulas" }
    ],
    myketUrl: "https://myket.ir/app/com.ctnexus.app",
    googlePlayUrl: "", // Will be added once listed on Google Play
    appStoreUrl: "",
    color: "#0284c7"
  },
  {
    id: 2,
    name: {
      fa: "نفت‌آموز - مرجع آموزش و مهندسی نفت",
      en: "Naft Amuz - Petroleum Training Suite"
    },
    tagline: {
      fa: "آکادمی جامع ۸ ترمه، ۱۴ ماشین‌حساب تخصصی و شبیه‌ساز آزمون‌های استخدامی",
      en: "8-Term Engineering Academy, 14 Specialized Calculators & Employment Mock Exams"
    },
    description: {
      fa: "آیا تا به‌حال برنامه نفت‌آموز را امتحان کرده‌اید؟ این برنامه با امکانات کاربردی و ویژگی‌هایی خاص، تجربه‌ای متفاوت را برای شما رقم می‌زند. جامع‌ترین مرجع آموزشی، محاسباتی و واژه‌نامه تخصصی برای داوطلبان آزمون‌های استخدامی وزارت نفت (NIOC, NIGC, NPC, NIORDC)، دانشجویان و اساتید، مهندسان فیلد و دفاتر فنی، پرسنل دکل و اپراتورهای پالایشگاه.",
      en: "Naft Amuz is the ultimate all-in-one educational and engineering companion for oil & gas professionals, recruitment candidates, petroleum students, rig crews, and refinery operators. Featuring an 8-term comprehensive academy with 768 standard lessons, 14 specialized engineering calculators, simulated timed recruitment exams, and an extensive technical dictionary."
    },
    category: {
      fa: "آموزشی",
      en: "Education"
    },
    icon: "/assets/naft-amooz-icon.svg",
    screenshots: [
      "/assets/naft-amooz-screen1.svg",
      "/assets/naft-amooz-screen2.svg",
      "/assets/naft-amooz-screen3.svg"
    ],
    rating: 5.0,
    reviewsCount: 4,
    downloads: {
      fa: "کمتر از ۱۰۰",
      en: "< 100"
    },
    size: {
      fa: "۴ مگابایت",
      en: "4 MB"
    },
    version: {
      fa: "۱.۰",
      en: "1.0"
    },
    lastUpdated: {
      fa: "۱۴۰۵/۰۶/۰۴",
      en: "2026/08/25"
    },
    appType: {
      fa: "برنامه اندرویدی",
      en: "Android App"
    },
    developer: "مهندس حسین صفی خانی (HOSSEIN SAFIKHANI)",
    developerEmail: "hosseinsafikhani7kl@gmail.com",
    developerTelegram: "hossify",
    features: [
      { fa: "📚 آکادمی جامع ۸ ترمی با ۷۶۸ درس استاندارد (زمین‌شناسی، حفاری، مخزن، بهره‌برداری، فرآورش، گاز، HSE، تجهیزات دوار)", en: "8-Term Academy with 768 lessons: Geology, Drilling, Reservoir, Production, Processing, Gas, HSE & Rotary Equipment" },
      { fa: "🧮 جعبه‌ابزار ۱۴ ماشین‌حساب تخصصی مهندسی: شیت کنترل فوران IWCF، مدلهای PVT، سایزینگ خط لوله API 14E، سپراتور API 12J، شیر اطمینان API 520 و هیدرولیک نازل مته", en: "14 Engineering Calculators: IWCF Kill Sheet, PVT models, API 14E pipeline sizing, API 12J separators, API 520 PSV & nozzle hydraulics" },
      { fa: "📝 بانک سوالات و شبیه‌ساز آزمون‌های استخدامی با نمره منفی، کارنامه آنی و پاسخ‌های تشریحی", en: "Mock Exam Simulator with negative grading, instant scorecards, and comprehensive answer keys" },
      { fa: "📖 واژه‌نامه تخصصی و اصطلاحات استاندارد نفت و گاز با تلفظ صوتی و معانی دقیق فنی", en: "Technical Oilfield English Glossary with audio pronunciations & field slang" },
      { fa: "🎨 طراحی مدرن با دو تم شیشه‌ای سه‌بعدی (3D Pop-Out Glass) و تم مونوکروم روز (E-Ink)", en: "Modern UI with 3D Pop-Out Glass and High-Contrast E-Ink daylight themes" },
      { fa: "🔒 عملکرد ۱۰۰٪ آفلاین، بدون تبلیغات آزاردهنده و حفظ کامل حریم خصوصی روی دستگاه", en: "100% Offline operation, zero intrusive ads, secure local storage on device" }
    ],
    targetAudiences: [
      { fa: "داوطلبان آزمون‌های استخدامی وزارت نفت (شرکت ملی نفت NIOC، گاز NIGC، پتروشیمی NPC، پالایش و پخش NIORDC و شرکت‌های تابعه و پیمانکاری)", en: "Ministry of Petroleum recruitment candidates (NIOC, NIGC, NPC, NIORDC and contractors)" },
      { fa: "دانشجویان و اساتید دانشگاهی رشته‌های مهندسی نفت (حفاری، مخزن، بهره‌برداری، اکتشاف)، مهندسی شیمی و مکانیک سیالات", en: "University students & professors in Petroleum, Chemical & Mechanical engineering" },
      { fa: "مهندسان فیلد و دفاتر فنی: حفاری و دکل (محاسبات IWCF)، مخزن و پتروفیزیک (PVT و ارزیابی لاگ‌ها)، فرآیند و پایپینگ (سایزینگ خطوط و سپراتورها)، HSE", en: "Field & technical office engineers: Rig crew (IWCF), Reservoir/Petrophysics (PVT), Process & HSE" },
      { fa: "تکنسین‌ها و اپراتورهای سایت‌های پالایشگاهی، پتروشیمی، تلمبه‌خانه‌ها و ایستگاه‌های تقویت فشار گاز", en: "Site technicians & operators at refineries, petrochemical complexes, and gas compressor stations" },
      { fa: "علاقه‌مندان، پژوهشگران و مترجمان متون تخصصی انگلیسی نفت و گاز", en: "Researchers, enthusiasts, and technical petroleum translators" }
    ],
    academicTerms: [
      { fa: "ترم ۱ (مبانی و زمین‌شناسی): زمین‌شناسی ساختمانی، پتروفیزیک، نمودارگیری چاه (Well Logging) و ارزیابی مخازن", en: "Term 1 (Fundamentals & Geology): Structural Geology, Petrophysics, Well Logging & Reservoir Evaluation" },
      { fa: "ترم ۲ (مهندسی حفاری و چاه‌پیمایی): مته‌ها، گل‌های حفاری، جداره‌گذاری (Casing)، سیمان‌کاری و مهار فوران (BOP)", en: "Term 2 (Drilling & Well Logging): Drill Bits, Mud Systems, Casing, Cementing & Blowout Prevention (BOP)" },
      { fa: "ترم ۳ (مهندسی مخزن و ارزیابی ستون هیدروکربوری): رفتار فازی، خواص سنگ و سیال، راندمان تخلیه و روش‌های ازدیاد برداشت (EOR)", en: "Term 3 (Reservoir Engineering): Phase Behavior, Rock & Fluid Properties, Drive Mechanisms & EOR Methods" },
      { fa: "ترم ۴ (مهندسی بهره‌برداری و چاه): تکمیل چاه، فرازآوری با گاز، پمپ‌های درون‌چاهی (ESP)، اسیدکاری و انگیزش مخزن", en: "Term 4 (Production Engineering): Well Completion, Gas Lift, ESP Pumps, Acidizing & Well Stimulation" },
      { fa: "ترم ۵ (فرآورش و تأسیسات سطحی): تفکیک‌کننده‌های دوفازی و سه‌فازی، نمک‌زدایی، تثبیت نفت خام و خطوط انتقال", en: "Term 5 (Surface Facilities & Processing): 2-Phase & 3-Phase Separators, Desalting, Crude Stabilization & Pipelines" },
      { fa: "ترم ۶ (فرآوری گاز و پالایش هیدروکربن): شیرین‌سازی با آمین، نم‌زدایی (TEG)، بازیافت گوگرد و تقطیر برج‌های پالایشگاهی", en: "Term 6 (Gas Processing & Refining): Amine Sweetening, TEG Dehydration, Sulfur Recovery & Refinery Distillation" },
      { fa: "ترم ۷ (ایمنی صنعتی، HSE و مدیریت ریسک): استانداردها و متدهای HAZOP / HAZID، مجوزهای کار (PTW)، ایمنی گاز ترش (H2S) و اطفای حریق", en: "Term 7 (Industrial Safety & HSE): HAZOP / HAZID, PTW Work Permits, Sour Gas (H2S) Safety & Firefighting" },
      { fa: "ترم ۸ (تجهیزات مکانیکی، دوار و پایپینگ): پمپ‌ها، کمپرسورها، مبدل‌های حرارتی پوسته-لوله و شیرآلات طبق API/ASME", en: "Term 8 (Mechanical & Rotary Equipment): Pumps, Compressors, Shell-and-Tube Heat Exchangers & API/ASME Valves" }
    ],
    calculators: [
      { fa: "شیت کامل کنترل فوران چاه (Kill Sheet IWCF) و محاسبه KWM، ICP و FCP", en: "Full IWCF Well Control Kill Sheet with KWM, ICP, and FCP calculations" },
      { fa: "حل و مقایسه همزمان مدل‌های PVT مخزن (Standing, Vasquez-Beggs, Glaso)", en: "Simultaneous PVT reservoir correlations solver (Standing, Vasquez-Beggs, Glaso)" },
      { fa: "سایزینگ خط لوله بر اساس سرعت فرسایش (API RP 14E) و افت فشار هیدرولیکی", en: "Pipeline sizing based on erosional velocity limits (API RP 14E) & hydraulic head loss" },
      { fa: "جریان دوفازی در خطوط لوله (Beggs & Brill) و افت اصطکاک سیالات غیرنیوتونی", en: "Two-phase flow in pipelines (Beggs & Brill) & non-Newtonian friction loss" },
      { fa: "سایزینگ تفکیک‌کننده‌های ثقلی (API 12J) و شیرهای اطمینان فشار (API 520)", en: "Gravity separator sizing (API 12J) & Pressure safety valves PSV (API 520)" },
      { fa: "محاسبه هیدرولیک نازل مته حفاری (TFA & Bit Hydraulics) و رابطه عملکرد جریان مخزن (Vogel IPR)", en: "Bit nozzle hydraulics (TFA & Jet Impact) & Vogel Inflow Performance Relationship (IPR)" },
      { fa: "مبدل جامع واحدهای تخصصی مهندسی نفت (فشار، دبی، ویسکوزیته، دانسیته گل و...)", en: "Comprehensive Petroleum unit converter (Pressure, Flow rate, Viscosity, Mud density)" }
    ],
    myketUrl: "https://myket.ir/app/com.naftamoz.app",
    googlePlayUrl: "", // Will be added once listed on Google Play
    appStoreUrl: "",
    color: "#f59e0b"
  },
  {
    id: 3,
    name: {
      fa: "محاسبات عمر خستگی لوله مغزی سیار",
      en: "Coiled Tubing Fatigue Life Analyzer (CT-Fatigue)"
    },
    tagline: {
      fa: "شبیه‌ساز دینامیک تنش، مدل کوفین-منسون و دوقلوی دیجیتال لوله‌مغزی سیار نفت و گاز",
      en: "Stress dynamics simulator, Coffin-Manson model & Coiled Tubing digital twin"
    },
    description: {
      fa: `برنامه CT-Fatigue Analyzer یک شبیه‌ساز مهندسی و دوقلوی دیجیتال برای تحلیل دینامیک تنش و تخمین عمر خستگی لوله‌های مغزی سیار در عملیات‌های درون‌چاهی نفت و گاز است. این نرم‌افزار به تیم‌های طراحی و عملیاتی کمک می‌کند تا با وارد کردن مشخصات هندسی لوله، فشار پمپ و نیروهای کششی، نرخ انباشت آسیب خستگی را در طول چاه محاسبه کرده و از وقوع حوادث ناخواسته و بریدگی لوله در درون چاه جلوگیری نمایند.`,
      en: `CT-Fatigue Analyzer is an advanced engineering simulator and digital twin for stress dynamics analysis and fatigue life estimation of coiled tubing strings in oil & gas well interventions. Helps field crews and engineers calculate fatigue accumulation rate, optimize cutoff lengths, and prevent catastrophic downhole tube failures.`
    },
    category: {
      fa: "ابزارهای کاربردی",
      en: "Utility & Tools"
    },
    icon: "/assets/ct-fatigue-icon.svg",
    screenshots: [
      "/assets/ct-fatigue-screen1.svg",
      "/assets/ct-fatigue-screen2.svg",
      "/assets/ct-fatigue-screen3.svg"
    ],
    rating: 5.0,
    reviewsCount: 19,
    downloads: {
      fa: "کمتر از ۱۰۰",
      en: "< 100"
    },
    size: {
      fa: "۵ مگابایت",
      en: "5 MB"
    },
    version: {
      fa: "۱.۰",
      en: "1.0"
    },
    lastUpdated: {
      fa: "۱۴۰۵/۰۶/۰۵",
      en: "2026/08/26"
    },
    appType: {
      fa: "برنامه اندرویدی",
      en: "Android App"
    },
    developer: "HOSSEIN SAFIKHANI",
    targetAudiences: [
      { fa: "مهندسان نفت (گرایش‌های حفاری، بهره‌برداری و مخازن)", en: "Petroleum Engineers (Drilling, Production & Reservoir)" },
      { fa: "ناظران و سوپروایزرهای عملیات چاه‌پیمایی و لوله‌مغزی سیار (Coiled Tubing)", en: "Well Intervention & Coiled Tubing Supervisors" },
      { fa: "تکنسین‌ها و خدمه دکل‌های حفاری و چاه‌های نفت و گاز", en: "Rig Crew & Field Operation Technicians" },
      { fa: "کارشناسان کنترل کیفی (QC) و بازرسی فنی لوله‌ها و سازه‌های فولادی", en: "QA/QC Tubing Inspectors & Materials Engineers" },
      { fa: "اساتید، پژوهشگران و دانشجویان مهندسی نفت و مکانیک", en: "Professors, Researchers & Petroleum/Mechanical Engineering Students" }
    ],
    features: [
      { fa: "محاسبات دقیق تنش‌های حلقوی (Hoop Stress) و تنش معادل فون مایسز (Von Mises) بر اساس ضخامت دیواره لوله و فشارهای کاری هیدرولیکی", en: "Precise Hoop Stress & Von Mises equivalent stress calculations based on wall thickness and hydraulic working pressures" },
      { fa: "شبیه‌سازی نرخ انباشت خستگی کم‌چرخه (Low-Cycle Fatigue) ناشی از خمیدگی لوله روی قوس هادی (Gooseneck) و قرقره (Reel) با مدل ریاضی کوفین-منسون (Coffin-Manson)", en: "Low-Cycle Fatigue (LCF) simulation on Gooseneck arch & Reel using the Coffin-Manson mathematical model" },
      { fa: "ماشین‌حساب پیشرفته برش لوله (Cutoff Calculator) جهت محاسبه طول بهینه برش انتهای آزاد لوله برای توزیع مجدد خستگی و تمدید ایمن عمر رشته لوله", en: "Advanced Cutoff Calculator for determining optimal free-end cut length to redistribute fatigue peaks and extend string life" },
      { fa: "نمودار توزیع خستگی پیش‌بینانه (Predictive Fatigue Twin) برای نمایش وضعیت ایمنی لوله در اعماق مختلف چاه به صورت لحظه‌ای", en: "Predictive Fatigue Twin depth profile chart displaying real-time tubing safety status at various well depths" },
      { fa: "مانیتور تله‌متری (HUD) جهت پایش زنده پارامترهای عملیاتی همراه با امکان شبیه‌سازی حرکت لوله به داخل و خارج چاه (Tripping In/Out)", en: "Live telemetry HUD monitoring operational parameters with Tripping In/Out well simulation" },
      { fa: "قابلیت تغییر لحظه‌ای سیستم اندازه‌گیری بین دو استاندارد متریک (mm / MPa / meters) و امپریال (in / psi / feet)", en: "Instant switching between Metric (mm / MPa / meters) and Imperial (in / psi / feet) measurement systems" },
      { fa: "پشتیبانی از زبان‌های فارسی و انگلیسی به همراه راهنمای جامع پارامترهای استاندارد صنعت نفت", en: "Bilingual Persian & English interface with comprehensive oil & gas standard parameters documentation" }
    ],
    myketUrl: "https://myket.ir/app/com.ctfatigue.app",
    googlePlayUrl: "",
    appStoreUrl: "",
    color: "#10b981"
  },
  {
    id: 4,
    name: {
      fa: "سامانه جامع مدیریت مأموریت",
      en: "MISSION LOG OS - Mission & Field Management"
    },
    tagline: {
      fa: "میز کار هوشمند و چندپنجره‌ای مدیریت عملیات، تجهیزات، لاگ‌شیت‌ها و اسناد مهندسی",
      en: "Smart multi-window OS for mission tracking, rig telemetry, equipment & logs"
    },
    description: {
      fa: `به دنبال یک دستیار هوشمند و یکپارچه برای مدیریت مأموریت‌های عملیاتی خود هستید؟ MISSION LOG یک سیستم مدیریت مأموریت (Mission Management OS) است که با الهام از محیط آشنا و زیبای دسکتاپ (طراحی مشابه ویندوز ۱۱) توسعه یافته تا تمامی ابزارهای مورد نیاز شما را در یک محیط یکپارچه ارائه دهد.

این اپلیکیشن با تمرکز ویژه بر مدیریت داده‌های حیاتی مانند تجهیزات، سوابق عملیاتی (مانند Coiled Tubing و پروژه‌های صنعتی)، تقویم کاری، و مستندات فنی ساخته شده است. طراحی ماژولار و رابط کاربری چندپنجره‌ای به شما اجازه می‌دهد تا همزمان چندین بخش از نرم‌افزار را مدیریت کنید، درست مانند کار با یک کامپیوتر شخصی!`,
      en: `Looking for a unified smart assistant for managing field missions? MISSION LOG is an advanced Mission Management OS inspired by modern desktop experiences (Windows 11 multi-window UI). Built specifically for operations, equipment tracking (such as Coiled Tubing & industrial projects), shift logs, technical docs, and interactive operations calendar.`
    },
    category: {
      fa: "کسب و کار",
      en: "Business"
    },
    icon: "/assets/mission-log-icon.svg",
    screenshots: [
      "/assets/mission-log-screen1.svg",
      "/assets/mission-log-screen2.svg",
      "/assets/mission-log-screen3.svg"
    ],
    rating: 5.0,
    reviewsCount: 15,
    downloads: {
      fa: "کمتر از ۱۰۰",
      en: "< 100"
    },
    size: {
      fa: "۶ مگابایت",
      en: "6 MB"
    },
    version: {
      fa: "۱.۰",
      en: "1.0"
    },
    lastUpdated: {
      fa: "۱۴۰۵/۰۶/۰۸",
      en: "2026/08/29"
    },
    appType: {
      fa: "برنامه اندرویدی",
      en: "Android App"
    },
    developer: "HOSSEIN SAFIKHANI",
    targetAudiences: [
      { fa: "مهندسین، تکنسین‌ها و سرپرستان کارگاه و پروژه‌ها", en: "Engineers, Technicians & Site Workshop Supervisors" },
      { fa: "مدیران عملیات در حوزه‌های نفت و گاز، پتروشیمی، عمرانی و صنعتی", en: "Operations Managers in Oil & Gas, Petrochemical & Civil Projects" },
      { fa: "تیم‌های عملیاتی نیازمند ثبت گزارش کار دقیق و لاگ‌شیت‌ها (Log Sheets)", en: "Field Crews needing accurate Shift Reports & Log Sheets" },
      { fa: "مسئولان رصد تجهیزات، ماشین‌آلات سنگین و مدیریت نیروی انسانی", en: "Equipment & Heavy Machinery Fleet Managers and HR Dispatchers" }
    ],
    features: [
      { fa: "🖥️ رابط کاربری دسکتاپ و چندپنجره‌ای: تجربه کاربری بی‌نظیر با قابلیت باز کردن، مینیمایز کردن و جابه‌جایی پنجره‌های مختلف به صورت همزمان", en: "Desktop & Multi-Window UI: Open, minimize, and drag multiple operational windows simultaneously" },
      { fa: "📊 داشبورد تحلیلی پیشرفته: ارائه آمار دقیق و لحظه‌ای از وضعیت عملیات‌ها، مأموریت‌های فعال، و گزارش‌های کلیدی با نمودارهای بصری", en: "Advanced Analytical Dashboard: Real-time mission stats, operational readiness and visual telemetry charts" },
      { fa: "🗓️ تقویم عملیاتی هوشمند: مدیریت، برنامه‌ریزی و رهگیری مأموریت‌ها به صورت بصری روی تقویم با پشتیبانی کامل از تاریخ شمسی و میلادی", en: "Smart Operations Calendar: Plan and track missions on interactive calendar with full Solar Hijri & Gregorian support" },
      { fa: "🗂️ مدیریت سوابق و تاریخچه (History): ثبت جزئیات دقیق هر عملیات با قابلیت جستجوی هوشمند بر اساس تاریخ، مکان، و کدهای رهگیری", en: "Comprehensive Mission History: Log detailed shift events with instant search by date, location, and tracking code" },
      { fa: "⚙️ سیستم جامع مدیریت تجهیزات: ثبت، بررسی و پیگیری وضعیت سلامت، تاییدdrawings و گواهینامه‌های دستگاه‌ها و تجهیزات عملیاتی", en: "Complete Equipment & Asset Management: Track health status, maintenance logs, API certs and calibration dates" },
      { fa: "📚 بایگانی اسناد فنی و ایمنی: دسترسی سریع و طبقه‌بندی شده به کاتالوگ‌ها، دستورالعمل‌ها، فرم‌ها و مستندات ایمنی HSE", en: "Technical & HSE Document Archive: Instant organized access to equipment manuals, safety forms and procedures" },
      { fa: "🌐 چندزبانه و استاندارد: پشتیبانی کامل از ۵ زبان شامل فارسی (راست‌چین)، انگلیسی، عربی، فرانسوی و چینی", en: "5 Languages Support: Full localization for Persian (RTL), English, Arabic, French, and Chinese" },
      { fa: "🧮 ابزارهای جانبی: دارای ماشین‌حساب داخلی مهندسی برای محاسبات سریع و مرکز اعلان‌ها (Notifications) برای یادآوری‌های مهم", en: "Built-in Engineering Tools: Fast calculation utilities, unit converters and smart task notification center" },
      { fa: "🌙 طراحی مدرن و چشم‌نواز: بهره‌گیری از تم تاریک استاندارد (Dark Mode) همراه با افکت‌های زیبای شیشه‌ای (Glassmorphism)", en: "Modern Dark Mode: Eye-friendly Glassmorphism desktop aesthetic designed for long shift hours" }
    ],
    myketUrl: "https://myket.ir/app/com.coiledtubing.missionlogbook",
    googlePlayUrl: "",
    appStoreUrl: "",
    color: "#0284c7"
  },
  {
    id: 5,
    name: {
      fa: "آموزش و مدیریت ایمنی و بهداشت صنعتی",
      en: "Industrial Safety & HSE Management"
    },
    tagline: {
      fa: "ابزار جامع عملیاتی، آموزشی و مدیریتی برای کارشناسان ایمنی، بهداشت حرفه‌ای و محیط زیست",
      en: "Comprehensive operational, educational & management tool for HSE experts in Oil, Gas & Industry"
    },
    description: {
      fa: `آیا تا‌به‌حال برنامه آموزش و مدیریت ایمنی و بهداشت صنعتی را امتحان کرده‌اید؟ این برنامه با امکانات کاربردی و ویژگی‌هایی خاص، تجربه‌ای متفاوت را برای شما رقم می‌زند.

برنامه «سامانه جامع HSE» یک راهکار یکپارچه و تخصصی است که با هدف ارتقای فرهنگ ایمنی، تسهیل فرآیندهای مدیریتی و آموزش تخصصی استانداردهای صنعتی توسعه یافته است. این سامانه با الهام از استانداردهای مرجع بین‌المللی نظیر ISO 45001، ISO 14001، OSHA و راهنماهای انجمن بین‌المللی تولیدکنندگان نفت و گاز (IOGP) طراحی شده است.`,
      en: `Have you ever tried the Industrial Safety and Occupational Health Management app? A comprehensive, integrated HSE management and training suite inspired by global standards (ISO 45001, ISO 14001, OSHA, IOGP) tailored for oil, gas, petrochemical, and heavy industries.`
    },
    category: {
      fa: "ابزارهای کاربردی",
      en: "Tools"
    },
    icon: "/assets/hse-app-icon.svg",
    screenshots: [
      "/assets/hse-screen1.svg",
      "/assets/hse-screen2.svg",
      "/assets/hse-screen3.svg"
    ],
    rating: 5.0,
    reviewsCount: 18,
    downloads: {
      fa: "کمتر از ۱۰۰",
      en: "< 100"
    },
    size: {
      fa: "۴ مگابایت",
      en: "4 MB"
    },
    version: {
      fa: "۱.۰",
      en: "1.0"
    },
    lastUpdated: {
      fa: "۱۴۰۵/۰۶/۰۳",
      en: "2026/08/24"
    },
    appType: {
      fa: "برنامه اندرویدی",
      en: "Android App"
    },
    developer: "HOSSEIN SAFIKHANI",
    targetAudiences: [
      { fa: "مدیران، سرپرستان و کارشناسان HSE و ایمنی صنعتی: جهت انجام محاسبات ریسک، ممیزی‌های دوره‌ای، گزارش‌نویسی حوادث، پایش شاخص‌های عملکردی (KPIs) و کنترل مجوزهای کار (Permit to Work).", en: "HSE Managers, Supervisors & Specialists: For risk calculation, periodic audits, incident reporting, KPI tracking and PTW management." },
      { fa: "مهندسان و تکنسین‌های صنایع نفت، گاز، پتروشیمی، حفاری و پالایشگاهی: برای دسترسی سریع به پروتکل‌های واکنش در شرایط اضطراری، ایمنی فرآیند (PSM)، ایمنی مواد شیمیایی و تجهیزات حفاظت فردی.", en: "Oil, Gas, Petrochemical, Drilling & Refinery Engineers: Fast access to ERP emergency protocols, Process Safety (PSM), SDS chemical safety and PPE." },
      { fa: "پیمانکاران و ناظران کارگاهی و پروژه‌های عمرانی: برای مدیریت HSE پیمانکاران، برگزاری جلسات پیش از کار (Toolbox Talk) و بازرسی‌های میدانی.", en: "Contractors & Site Supervisors: For contractor HSE management, Toolbox Talks (TBT) and field safety inspections." },
      { fa: "دانشجویان و پژوهشگران رشته‌های مهندسی ایمنی، بهداشت حرفه‌ای و محیط زیست: برای یادگیری آکادمیک، آشنایی با استانداردهای معتبر بین‌المللی (ISO 45001, ISO 14001, OSHA, IOGP) و شرکت در کوئیزهای ارزیابی دانش.", en: "Safety & Occupational Health Students: For academic learning, international standards (ISO 45001, OSHA, IOGP) and knowledge quizzes." }
    ],
    features: [
      { fa: "📊 داشبورد تحلیلی و مدیریتی: نمایش شاخص‌های ایمنی، آمار رویدادها و وضعیت عملکردی به صورت گرافیکی و لحظه‌ای", en: "Analytical & Management Dashboard: Graphical real-time safety KPIs, incident rates, and operational readiness" },
      { fa: "⚖️ ماژول ثبت و ارزیابی ریسک: ماتریس استاندارد ارزیابی و سطح‌بندی ریسک‌های شغلی و فرآیندی با امکان تعریف اقدامات کنترلی", en: "Risk Assessment Module: Standard risk matrix for occupational & process hazards with preventive action plans" },
      { fa: "🚨 سیستم گزارش‌دهی و تحلیل حوادث: ثبت رویدادها، شبه‌حوادث (Near Miss) و ریشه‌یابی علل بر اساس مدل‌های استاندارد", en: "Incident & Near-Miss Reporting: Structured incident logging and root-cause analysis (RCA)" },
      { fa: "📋 مجوزهای الکترونیکی کار (e-PTW): راهنما و مدیریت انواع مجوزهای گرم، سرد، ورود به فضای بسته و حفاری", en: "Electronic Permit to Work (e-PTW): Manage Hot Work, Cold Work, Confined Space Entry & Excavation permits" },
      { fa: "🔍 مدیریت ممیزی و بازرسی: ابزار ارزیابی تطابق با الزامات و ثبت اقدامات اصلاحی و پیشگیرانه (CAPA)", en: "Audit & Inspection Management: Compliance checklists with Corrective and Preventive Actions (CAPA)" },
      { fa: "🚒 مدیریت بحران و شرایط اضطراری: دستورالعمل‌های واکنش سریع، مانورها و پروتکلهای کنترل حادثه", en: "Emergency Response (ERP): Rapid response protocols, drill planning, and crisis management" },
      { fa: "🎓 آکادمی و آزمون‌های تخصصی: دوره‌های آموزشی طبقه‌بندی‌شده همراه با سوالات چهارگزینه‌ای و تحلیل پاسخ‌ها", en: "HSE Academy & Quizzes: Categorized training courses with interactive multiple-choice tests and rationales" },
      { fa: "📚 کتابخانه علمی و فنی: مجموعه‌ای از تعاریف، اصطلاحات استاندارد و نکات فنی ایمنی فرآیند، بهداشت شغلی و محیط زیست", en: "Technical Standards Library: Reference library of ISO, OSHA, IOGP terminology and process safety tips" },
      { fa: "📱 رابط کاربری بهینه‌شده: طراحی واکنش‌گرا با تم‌های صنعتی کنتراست بالا مناسب برای کار در محیط‌های عملیاتی و دکل‌های حفاری", en: "Optimized Industrial UI: High-contrast responsive interface built for field conditions and drilling rigs" }
    ],
    myketUrl: "https://myket.ir/app/com.hse.core.app",
    googlePlayUrl: "",
    appStoreUrl: "",
    color: "#059669"
  },
  {
    id: 6,
    name: {
      fa: "لایف‌کیپ (دستیار سرویس و اقساط)",
      en: "LifeKeep - Service & Asset Assistant"
    },
    tagline: {
      fa: "سامانه جامع پایش دوره‌ای وسایل نقلیه، تاسیسات خانگی، وام‌ها و یادآور اقساط",
      en: "All-in-one vehicle maintenance, home asset tracking & loan installment manager"
    },
    description: {
      fa: `آیا تا‌به‌حال برنامه دستیار سرویس و اقساط را امتحان کرده‌اید؟ این برنامه با امکانات کاربردی و ویژگی‌هایی خاص، تجربه‌ای متفاوت را برای شما رقم می‌زند.

«دستیار سرویس و اقساط» یک برنامه برای پایش دوره‌ای تجهیزات، وسایل نقلیه و تعهدات مالی است. این اپلیکیشن با حذف فراموشی‌های پرهزینه، زمان دقیق سرویس‌های فنی و سررسید اقساط را محاسبه کرده و به شما هشدار می‌دهد تا از استهلاک دارایی‌ها و خسارت‌های احتمالی جلوگیری شود.`,
      en: `Have you ever tried the Service & Loan Assistant app? A comprehensive operational manager for periodic maintenance of vehicles, home appliances, and financial loan obligations that saves you money by preventing costly forgetfulness.`
    },
    category: {
      fa: "ابزارهای کاربردی",
      en: "Tools"
    },
    icon: "/assets/service-app-icon.svg",
    screenshots: [
      "/assets/service-screen1.svg",
      "/assets/service-screen2.svg",
      "/assets/service-screen3.svg"
    ],
    rating: 5.0,
    reviewsCount: 14,
    downloads: {
      fa: "کمتر از ۱۰۰",
      en: "< 100"
    },
    size: {
      fa: "۵ مگابایت",
      en: "5 MB"
    },
    version: {
      fa: "۱.۰",
      en: "1.0"
    },
    lastUpdated: {
      fa: "۱۴۰۵/۰۶/۰۵",
      en: "2026/08/26"
    },
    appType: {
      fa: "برنامه اندرویدی",
      en: "Android App"
    },
    developer: "HOSSEIN SAFIKHANI",
    targetAudiences: [
      { fa: "مالکان انواع خودرو و موتورسیکلت: افرادی که می‌خواهند سررسید تعویض روغن، فیلترها، تسمه‌تایم، تایرها و بیمه‌نامه را بر اساس کیلومتر و تاریخ دقیق مدیریت کنند.", en: "Car & Motorcycle Owners: For tracking engine oil, filters, timing belts, tires, and insurance expiry by precise mileage and date." },
      { fa: "مدیران خانه و خانواده: افرادی که مایلند زمان تعویض فیلتر ساید، سرویس کولر، پکیج، تصفیه آب و مدارک گارانتی لوازم خانگی را ثبت و پیگیری نمایند.", en: "Home & Family Managers: For tracking refrigerator filters, AC/heater servicing, water purification, and warranty docs." },
      { fa: "افراد دارای تعهدات و اقساط ماهانه: کسانی که چند وام فعال دارند و نیاز به سیستم یادآوری سررسید اقساط و محاسبه میزان سود و بدهی باقیمانده دارند.", en: "Loan & Debt Holders: For smart reminders, interest calculations, and tracking settled vs remaining installments." },
      { fa: "تعمیرکاران و سرویس‌کاران مستقل: جهت ثبت پرونده فنی مشتریان و دسترسی به راهنمای عیب‌یابی لوازم و تجهیزات.", en: "Technicians & Independent Repairers: For keeping customer technical records and diagnostic error code guides." }
    ],
    features: [
      { fa: "🚗 مدیریت ناوگان و خودرو (Fleet & Auto Care): ثبت چند خودرو با مشخصات فنی، شماره پلاک، کیلومتر کارکرد، تمدید بیمه شخص ثالث، معاینه فنی و محاسبه استهلاک", en: "Fleet & Auto Care: Multi-vehicle support with technical specs, license plates, mileage, insurance renewal & depreciation calculation" },
      { fa: "🏠 پایش تاسیسات و لوازم خانگی (Home Assets): ثبت پکیج، کولر، ماشین لباسشویی، تصفیه آب، پیگیری تعویض فیلتر، رسوب‌زدایی، شارژ گاز و ثبت کارت‌های گارانتی", en: "Home Assets & Maintenance: Manage heaters, ACs, washers, water filters, descaling schedules & warranty expiry dates" },
      { fa: "💳 مدیریت وام و اقساط بانکی (Finance & Loans): ثبت مبلغ کل وام، نرخ بهره، جدول اقساط تسویه‌شده و باقیمانده، محاسبه خودکار سررسید و هشدار چند روز قبل", en: "Finance & Loan Management: Track loan totals, interest rates, installment progress & automated upcoming due alerts" },
      { fa: "🔧 عیب‌یاب هوشمند و راهنمای فنی (Diagnostic Assistant): دسته‌بندی خطاهای متداول لوازم خانگی و سیستم‌های خودرو به همراه کدهای خطا و راهکار رفع ایراد", en: "Smart Diagnostic Assistant: Common error code directory and initial troubleshooting guidelines for home appliances and cars" },
      { fa: "📞 دفترچه خدمات و تماس‌های ضروری (Service Directory): دسترسی به شماره‌های ضروری و ثبت اطلاعات سرویس‌کاران و تعمیرگاه‌های معتمد برای تماس سریع", en: "Service Directory: Quick access to trusted mechanics, technicians and emergency contact numbers" },
      { fa: "⚡ رابط کاربری سبک و عملکرد آفلاین: دسترسی سریع از طریق منوی شناور با تم تاریک/روشن بدون نیاز مداوم به اینترنت", en: "Lightweight UI & Offline First: Fast floating menu navigation with dark/light themes and full offline reliability" }
    ],
    myketUrl: "https://myket.ir/app/com.lifekeep.app",
    googlePlayUrl: "",
    appStoreUrl: "",
    color: "#0284c7",
    price: {
      fa: "رایگان",
      en: "Free",
      isFree: true
    }
  },
  {
    id: 7,
    name: {
      fa: "فلوید هانر (دستیار عیب‌یابی هیدرولیک و انژکتور)",
      en: "Fluid Honor - Hydraulic & Injector Diagnostics"
    },
    tagline: {
      fa: "بانک جامع ۱۶۰+ عیب تخصصی هیدرولیک سنگین، انژکتور لوله‌مغزی سیار، عیوب طلایی و پشتیبانی ۵ زبانه",
      en: "160+ heavy hydraulics & coiled tubing injector diagnostics, golden faults & 5-language suite"
    },
    description: {
      fa: `آیا تا‌به‌حال برنامه فلوید هانر را امتحان کرده‌اید؟ این برنامه با امکانات کاربردی و ویژگی‌هایی خاص، تجربه‌ای متفاوت را برای شما رقم می‌زند.

اپلیکیشن فلوید هانر (Fluid Honor) یک ابزار صرفاً عمومی نیست، بلکه به عنوان یک دستیار فنی و تخصصی (Technical Companion) در حوزه هیدرولیک سنگین و صنایع بالادستی نفت و گاز طراحی شده است.

در عملیات‌های حساس حفاری و خدمات چاه، انژکتور لوله‌مغزی سیار (Coiled Tubing Injector) قلب تپنده یونیت به شمار می‌رود. هرگونه اختلال هیدرولیکی، برقی یا مکانیکی در این بخش می‌تواند منجر به توقف کل عملیات و خسارت‌های سنگین مالی و زمانی شود.

اپلیکیشن فلوید هانر به عنوان مرجع عیب‌یابی انژکتور و سیستم‌های هیدرولیک بسته در ایران، تجربیات چندین ساله مهندسان ارشد مناطق نفت‌خیز را در قالب یک ابزار دیجیتال، آفلاین و سریع در اختیار شما قرار می‌دهد. این برنامه با رویکردی کاملاً مهندسی، از سطوح پایه تا پیشرفته‌ترین سناریوهای خرابی را پوشش می‌دهد.`,
      en: `Have you ever tried the Fluid Honor app? Designed with specialized features to deliver a superior technical experience. Fluid Honor is an advanced engineering companion for heavy hydraulics and upstream oil & gas well services. 

In critical drilling and well intervention operations, the Coiled Tubing Injector is the beating heart of the unit. Fluid Honor brings years of field engineering expertise into a fast, 100% offline digital tool featuring 160+ specialized fault cases, Golden Faults, 3-step structured diagnostics (Symptom, Root Cause, Action Plan), smart search, and full 5-language international support (Persian, English, Arabic, Russian, and Chinese).`
    },
    category: {
      fa: "ابزارهای کاربردی",
      en: "Tools"
    },
    icon: "/assets/fluid-honor-icon.svg",
    screenshots: [
      "/assets/fluid-honor-screen1.svg",
      "/assets/fluid-honor-screen2.svg",
      "/assets/fluid-honor-screen3.svg"
    ],
    rating: 5.0,
    reviewsCount: 16,
    downloads: {
      fa: "کمتر از ۱۰۰",
      en: "< 100"
    },
    size: {
      fa: "۵ مگابایت",
      en: "5 MB"
    },
    version: {
      fa: "۱.۰",
      en: "1.0"
    },
    lastUpdated: {
      fa: "۱۴۰۵/۰۶/۰۸",
      en: "2026/08/29"
    },
    appType: {
      fa: "برنامه اندرویدی (نسخه تجاری)",
      en: "Android App (Commercial Edition)"
    },
    developer: "HOSSEIN SAFIKHANI",
    price: {
      fa: "۴۰,۰۰۰ تومان",
      en: "40,000 Tomans",
      isFree: false
    },
    targetAudiences: [
      { fa: "اپراتورها، نوبت‌کاران و سرپرستان یونیت‌های لوله‌مغزی سیار (Coiled Tubing Operators & Supervisors) در دکل‌ها و مناطق عملیاتی نفت و گاز.", en: "Coiled Tubing Operators & Supervisors: For real-time fault isolation on drilling rigs and field well-intervention units." },
      { fa: "مهندسان ارشد و تکنسین‌های تعمیرات مکانیک و هیدرولیک در کارگاه‌های پشتیبانی و شرکت‌های خدمات فنی چاه‌های نفت.", en: "Mechanical & Hydraulic Maintenance Engineers: For workshop repairs, component overhauls, and deep-dive technical diagnostics." },
      { fa: "متخصصان سیستم‌های کنترل الکترونیکی و ابزار دقیق تجهیزات هیدرولیکی سنگین.", en: "Electro-Hydraulic & Instrumentation Specialists: For calibration, sensor telemetry, and interlock control logic." },
      { fa: "دانشجویان، کارآموزان و پژوهشگران مهندسی مکانیک، هیدرولیک و مهندسی نفت که به دنبال یادگیری فرآیندهای عملیاتی و عیب‌یابی واقعی (Real-world Troubleshooting) در فیلد هستند.", en: "Petroleum & Mechanical Engineering Students: For mastering practical field hydraulics, schematics, and hands-on operational troubleshooting." }
    ],
    features: [
      { fa: "🔎 بانک اطلاعاتی جامع عیوب (بیش از ۱۶۰ مورد تخصصی): دسترسی سریع به آرشیو بزرگی از خرابی‌های رایج و نادر در انژکتورها، پمپ‌های اصلی هیدرواستاتیک، موتورهای هیدرولیک، ترمزهای دیسکی تر، گاید آرک، لول‌وایند و سیستم‌های الکتروهیدرولیک", en: "Comprehensive 160+ Faults Database: Quick access to common and rare issues in injectors, hydrostatic pumps, motors, wet brakes, guide arch & levelwind" },
      { fa: "👑 عیوب فوق‌تخصصی و طلایی (Golden Faults): بررسی چالش‌برانگیزترین پدیده‌ها مانند قفل شدن اینترلاک هیدرولیک، پدیده چتر کردن (Chattering) در شیرهای ریلیف متقاطع (CPRV)، و رفع افت فشارهای ناگهانی پیستون ترمزها", en: "Golden Faults (High-Critical): Deep analysis of complex phenomena like hydraulic interlock lockup, CPRV valve chattering, and brake piston pressure drops" },
      { fa: "🧭 ساختار سه مرحله‌ای استاندارد برای هر عیب: علائم خرابی (Symptom)، دلیل ریشه‌ای بر اساس نقشه هیدرولیک (Root Cause)، و اقدام اصلاحی گام‌به‌گام و ایمن در فیلد (Action Plan)", en: "Standard 3-Stage Structure: Symptom (what you see on rig), Root Cause (hydraulic schematics analysis), and Step-by-Step Field Action Plan" },
      { fa: "⚡ جستجوی هوشمند هوش‌محور: پیشنهاد آنی عیب مرتبط به محض تایپ بخشی از کلمه، کد خطا یا علامت (مانند لرزش، نوسان فشار، داغ شدن یا قفل شدن)", en: "Smart AI-Assisted Search: Instant fault suggestions by typing keywords, error codes, or physical symptoms (vibration, pressure surge, overheating)" },
      { fa: "📂 بخش نشان‌شده‌ها (علاقه‌مندی‌ها): امکان ذخیره‌سازی عیوب پرکاربرد جهت دسترسی فوق‌سریع در زمان‌های بحرانی و شرایط سخت عملیات میدانی", en: "Operational Bookmarks: Save high-frequency faults for ultra-fast access during high-pressure field operations" },
      { fa: "🌐 پشتیبانی هوشمند از ۵ زبان زنده دنیا (Multilingual Support): پشتیبانی کامل از زبان‌های فارسی، انگلیسی، عربی، روسی و چینی با تغییر آنی اصطلاحات تخصصی با یک کلیک", en: "5-Language Support: Seamless one-click switching between Persian, English, Arabic, Russian, and Chinese for multinational teams" },
      { fa: "📱 کاربری آسان و کاملاً ۱۰۰٪ آفلاین: بدون نیاز به اینترنت در دکل‌ها و نقاط دورافتاده عملیاتی با سرعت پاسخ‌دهی آنی و حریم خصوصی کامل", en: "100% Offline & Rugged: Works completely offline on remote rigs and offshore platforms with zero loading lag" }
    ],
    myketUrl: "https://myket.ir/app/com.coiledtubingahwaz.fluidhonor",
    googlePlayUrl: "",
    appStoreUrl: "",
    color: "#f59e0b"
  }
];

// ============================================================================
// 🌐 UI TRANSLATIONS DICTIONARY
// Edit texts here for complete Persian and English localization
// ============================================================================
const translations = {
  fa: {
    brandName: "HOSSIFY",
    brandSubtitle: "توسعه‌دهنده اپلیکیشن‌های موبایل",
    navHome: "صفحه اصلی",
    navFeatured: "اپ برگزیده",
    navApps: "همه اپلیکیشن‌ها",
    navFeatures: "ویژگی‌ها",
    navStats: "آمار",
    navTestimonials: "نظرات کاربران",
    navContact: "تماس و خبرنامه",
    langToggle: "EN",
    
    // Hero
    heroBadge: "🚀 نسخه جدید اپلیکیشن‌ها منتشر شد",
    heroTitle: "اپلیکیشن‌های هوشمند برای زندگی دیجیتال بهتر",
    heroSubtitle: "مجموعه‌ای از کاربردی‌ترین، سریع‌ترین و محبوب‌ترین برنامه‌های موبایل، توسعه داده شده با جدیدترین تکنولوژی‌های روز دنیا برای رفع نیازهای روزمره شما.",
    heroBtnViewApps: "مشاهده اپلیکیشن‌ها",
    heroBtnMyket: "دانلود از مایکت",
    heroStatsUsers: "کاربر فعال در مایکت و گوگل‌پلی",
    
    // Featured App
    featuredBadge: "⭐ اپلیکیشن برگزیده ماه",
    featuredTitle: "معرفی اپلیکیشن برتر",
    featuredSubtitle: "محبوب‌ترین برنامه این ماه با بالاترین رضایت و امتیاز کاربران",
    btnDownloadMyket: "دانلود از مایکت",
    btnBuyMyket: "خرید و دانلود از مایکت",
    btnDownloadGooglePlay: "دانلود از گوگل‌پلی",
    btnGooglePlayComingSoon: "گوگل‌پلی (به‌زودی)",
    btnDownloadAppStore: "نسخه iOS (به‌زودی)",
    verifiedDev: "توسعه‌دهنده برتر مایکت",
    
    // All Apps Grid
    appsHeading: "کاتالوگ کامل اپلیکیشن‌ها",
    appsSubheading: "اپلیکیشن مورد نظر خود را جستجو کنید یا بر اساس دسته‌بندی فیلتر نمایید",
    searchPlaceholder: "جستجوی نام یا کاربرد اپلیکیشن...",
    filterAll: "همه اپ‌ها",
    btnDetails: "مشاهده جزئیات",
    downloadsText: "دانلود",
    noAppsFound: "هیچ اپلیکیشنی با این مشخصات یافت نشد!",
    
    // App Modal
    modalScreenshots: "تصاویر محیط برنامه",
    modalFeatures: "امکانات و قابلیت‌های کلیدی",
    modalSpecs: "شناسنامه و مشخصات فنی برنامه",
    modalDetails: "اطلاعات فنی",
    modalDeveloper: "سازنده:",
    modalVersion: "نسخه:",
    modalLastUpdate: "آخرین بروزرسانی:",
    modalDownloads: "تعداد دانلود:",
    modalSize: "حجم:",
    modalType: "نوع:",
    modalCategory: "دسته‌بندی:",
    modalRating: "امتیاز کاربران:",
    modalPrice: "قیمت / وضعیت:",
    modalReviews: "نظر ثبت شده",
    modalClose: "بستن",
    
    // Why Choose Us
    featuresHeading: "چرا اپلیکیشن‌های ما؟",
    featuresSubheading: "استانداردهایی که ما در طراحی و توسعه هر محصول رعایت می‌کنیم",
    feature1Title: "کیفیت و عملکرد فوق‌العاده",
    feature1Desc: "کدنویسی بهینه، سرعت اجرای بالا و مصرف حداقل منابع پردازنده و باتری دستگاه.",
    feature2Title: "پشتیبانی ۲۴ ساعته و صمیمانه",
    feature2Desc: "تیم پشتیبانی ما همیشه آماده پاسخگویی به سوالات و پیشنهادات شما کاربران گرامی است.",
    feature3Title: "بروزرسانی‌های منظم",
    feature3Desc: "انتشار نسخه‌های ماهانه همراه با قابلیت‌های درخواستی و رفع مشکلات گزارش شده.",
    feature4Title: "رابط کاربری مدرن و روان",
    feature4Desc: "طراحی جذاب و کاربرپسند متناسب با استانداردهای طراحی متریال و iOS.",
    feature5Title: "حفظ حریم خصوصی و امنیت",
    feature5Desc: "عدم دسترسی به اطلاعات شخصی بدون اجازه و رمزنگاری کامل داده‌های محلی.",
    feature6Title: "پشتیبانی کامل از زبان فارسی",
    feature6Desc: "تایپوگرافی چشم‌نواز با فونت وزیرمتن، تاریخ شمسی و سازگاری کامل با راست‌به‌چپ.",
    
    // Stats Section
    statsHeading: "آمار و دستاوردهای ما در یک نگاه",
    stats1Value: "۱۲+",
    stats1Label: "اپلیکیشن منتشر شده",
    stats2Value: "۱.۲M+",
    stats2Label: "دانلود فعال در مایکت و گوگل‌پلی",
    stats3Value: "۴.۸★",
    stats3Label: "میانگین امتیاز کاربران",
    stats4Value: "۹۹.۴%",
    stats4Label: "رضایت مندی کاربران",
    
    // Testimonials
    testimonialsHeading: "نظرات کاربران در مایکت و گوگل‌پلی",
    testimonialsSubheading: "ببینید کاربران درباره تجربه استفاده از اپ‌های ما چه می‌گویند",
    
    // Contact & Newsletter
    newsletterHeading: "عضویت در خبرنامه و اطلاع‌رسانی",
    newsletterSubtitle: "از انتشار اپلیکیشن‌های جدید، تخفیف‌های ویژه و بروزرسانی‌ها زودتر از همه باخبر شوید.",
    emailPlaceholder: "ایمیل خود را وارد کنید...",
    btnSubscribe: "عضویت در خبرنامه",
    contactHeading: "ارتباط با تیم توسعه",
    contactSubtitle: "پیشنهاد، انتقاد یا سوالی درباره برنامه‌ها دارید؟ برای ما پیام بگذارید.",
    namePlaceholder: "نام و نام خانوادگی",
    messagePlaceholder: "متن پیام شما...",
    btnSendMessage: "ارسال پیام",
    
    // Footer
    footerDesc: "ما متعهد به خلق اپلیکیشن‌های موبایلی هستیم که زندگی روزمره کاربران را ساده‌تر، هوشمندانه‌تر و لذت‌بخش‌تر می‌سازند.",
    footerQuickLinks: "دسترسی سریع",
    footerStores: "دریافت از استورها",
    footerGooglePlaySoon: "صفحه توسعه‌دهنده در گوگل‌پلی (به‌زودی)",
    footerContact: "راه‌های ارتباطی",
    footerRights: "تمامی حقوق مادی و معنوی برای استودیو HOSSIFY محفوظ است. © ۲۰۲۶",
    toastSubscribed: "با تشکر! ایمیل شما در خبرنامه ثبت شد.",
    toastMessageSent: "پیام شما با موفقیت ارسال شد. به زودی پاسخ خواهیم داد.",
    toastError: "لطفاً تمامی فیلدها را با دقت پر کنید."
  },
  en: {
    brandName: "HOSSIFY",
    brandSubtitle: "Mobile Application Developer",
    navHome: "Home",
    navFeatured: "Featured App",
    navApps: "All Apps",
    navFeatures: "Why Us",
    navStats: "Stats",
    navTestimonials: "Reviews",
    navContact: "Contact",
    langToggle: "FA",
    
    // Hero
    heroBadge: "🚀 New App Releases & Major Updates",
    heroTitle: "Smart Apps for a Better Digital Life",
    heroSubtitle: "A curated suite of fast, lightweight, and intuitive mobile applications crafted to streamline your everyday tasks and boost your productivity.",
    heroBtnViewApps: "Explore All Apps",
    heroBtnMyket: "Download on Myket",
    heroStatsUsers: "Active users across Myket & Google Play",
    
    // Featured App
    featuredBadge: "⭐ Featured App of the Month",
    featuredTitle: "Featured Showcase",
    featuredSubtitle: "Our most acclaimed product with top ratings from tens of thousands of users",
    btnDownloadMyket: "Download on Myket",
    btnBuyMyket: "Buy on Myket",
    btnDownloadGooglePlay: "Get it on Google Play",
    btnGooglePlayComingSoon: "Google Play (Coming Soon)",
    btnDownloadAppStore: "App Store (Coming Soon)",
    verifiedDev: "Verified Top Developer",
    
    // All Apps Grid
    appsHeading: "Complete Product Catalog",
    appsSubheading: "Filter by category or search to find the perfect tool for your smartphone",
    searchPlaceholder: "Search app name, keyword or category...",
    filterAll: "All Apps",
    btnDetails: "View Details",
    downloadsText: "Downloads",
    noAppsFound: "No applications found matching your criteria!",
    
    // App Modal
    modalScreenshots: "App Screenshots",
    modalFeatures: "Key Highlights & Features",
    modalSpecs: "Technical Specifications & App Info",
    modalDetails: "App Specifications",
    modalDeveloper: "Developer:",
    modalVersion: "Version:",
    modalLastUpdate: "Last Updated:",
    modalDownloads: "Downloads:",
    modalSize: "File Size:",
    modalType: "Type:",
    modalCategory: "Category:",
    modalRating: "User Rating:",
    modalPrice: "Price / Status:",
    modalReviews: "total ratings",
    modalClose: "Close",
    
    // Why Choose Us
    featuresHeading: "Why Choose Our Apps?",
    featuresSubheading: "The craftsmanship and principles behind every single product we release",
    feature1Title: "High Performance & Speed",
    feature1Desc: "Optimized clean code, lightning fast loading times, and zero unnecessary battery drain.",
    feature2Title: "24/7 Dedicated Support",
    feature2Desc: "Our active support team listens to your feedback and resolves user issues rapidly.",
    feature3Title: "Frequent Quality Updates",
    feature3Desc: "Monthly feature additions, security enhancements, and compatibility optimizations.",
    feature4Title: "Intuitive & Modern UI",
    feature4Desc: "Sleek, fluid interfaces built according to modern Material Design and iOS guidelines.",
    feature5Title: "Privacy & Data Protection",
    feature5Desc: "No unwarranted permissions, zero tracking, and local-first encrypted offline storage.",
    feature6Title: "Full Bilingual Localization",
    feature6Desc: "Flawless RTL & LTR support, beautiful custom typography (Vazirmatn & Inter).",
    
    // Stats Section
    statsHeading: "Our Achievements at a Glance",
    stats1Value: "12+",
    stats1Label: "Published Apps",
    stats2Value: "1.2M+",
    stats2Label: "Active Downloads",
    stats3Value: "4.8★",
    stats3Label: "Average Store Rating",
    stats4Value: "99.4%",
    stats4Label: "User Satisfaction",
    
    // Testimonials
    testimonialsHeading: "What Our Users Say",
    testimonialsSubheading: "Real reviews and ratings from verified users on Myket and Google Play",
    
    // Contact & Newsletter
    newsletterHeading: "Subscribe to Our Newsletter",
    newsletterSubtitle: "Be the first to know about new app launches, major updates, and promo codes.",
    emailPlaceholder: "Enter your email address...",
    btnSubscribe: "Subscribe Now",
    contactHeading: "Get in Touch",
    contactSubtitle: "Have questions, feedback, or a feature request? Drop us a note anytime.",
    namePlaceholder: "Your full name",
    messagePlaceholder: "Your message...",
    btnSendMessage: "Send Message",
    
    // Footer
    footerDesc: "Dedicated to designing and developing lightweight, elegant, and practical mobile applications for millions of satisfied users worldwide.",
    footerQuickLinks: "Quick Navigation",
    footerStores: "Official Stores",
    footerGooglePlaySoon: "Google Play Developer (Coming Soon)",
    footerContact: "Direct Contact",
    footerRights: "All rights reserved. © 2026 HOSSIFY Studios.",
    toastSubscribed: "Thank you! You have successfully subscribed to our updates.",
    toastMessageSent: "Your message has been sent successfully. We will reply shortly!",
    toastError: "Please fill out all required fields properly."
  }
};

// Testimonials data
const testimonials = [
  {
    name: { fa: "علی رضایی", en: "Ali Rezaei" },
    role: { fa: "کاربر مایکت • کارا تسک", en: "Myket User • Kara Task" },
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80",
    rating: 5,
    comment: {
      fa: "اپلیکیشن کارا واقعاً زندگی کاری من رو متحول کرد. ویجت تقویم و یادآور صوتی فوق‌العاده‌ست. پشتیبانی هم خیلی سریع به پیشنهادم جواب دادن.",
      en: "Kara completely streamlined my daily workflow. The calendar widgets and audio reminders are top tier. Outstanding development quality!"
    }
  },
  {
    name: { fa: "سارا محمدی", en: "Sara Mohammadi" },
    role: { fa: "کاربر گوگل‌پلی • زبان‌آموز نوین", en: "Google Play User • LinguaLearn" },
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    rating: 5,
    comment: {
      fa: "بهترین برنامه یادگیری لغت انگلیسی در بین برنامه‌های ایرانی. سیستم لایتنر واقعاً کلمات رو در حافظه بلندمدت ثبت می‌کنه.",
      en: "By far the most polished vocabulary app I have ever used. The spaced repetition algorithms are smooth and genuinely effective."
    }
  },
  {
    name: { fa: "مهرداد کاظمی", en: "Mehrdad Kazemi" },
    role: { fa: "کاربر مایکت • حسابدار جیبی", en: "Myket User • Pocket Ledger" },
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80",
    rating: 5,
    comment: {
      fa: "قابلیت خواندن خودکار پیامک‌های بانکی بدون نیاز به اینترنت شگفت‌انگیزه! بالاخره تونستم پس‌انداز ماهانه‌ام رو به درستی مدیریت کنم.",
      en: "Automatic SMS transaction reading without requiring an internet connection is brilliant. Finally have total clarity on my expenses."
    }
  }
];

// ============================================================================
// ⚙️ APPLICATION STATE
// ============================================================================
let currentLang = 'en';
let currentCategory = 'all';
let currentSearch = '';
let isDarkMode = false;
let featuredSwiper = null;
let modalSwiper = null;
let testimonialsSwiper = null;

// ============================================================================
// 🎨 HELPER FUNCTIONS & SVG ICONS
// ============================================================================

// Official Brand Icons
const ICONS = {
  myket: `
    <svg class="w-5 h-5 inline-block shrink-0 fill-current" viewBox="0 0 24 24">
      <path d="M19.5 2H4.5C3.12 2 2 3.12 2 4.5v15C2 20.88 3.12 22 4.5 22h15c1.38 0 2.5-1.12 2.5-2.5v-15C22 3.12 20.88 2 19.5 2zm-7.5 15.5l-5.5-5.5 1.41-1.41L12 14.67l7.09-7.08 1.41 1.41-8.5 8.5z"/>
    </svg>`,
  googlePlay: `
    <svg class="w-5 h-5 inline-block shrink-0 fill-current" viewBox="0 0 24 24">
      <path d="M3.609 1.814L13.793 12 3.61 22.186a2.31 2.31 0 0 1-.61-1.61V3.424c0-.626.225-1.2.61-1.61zm11.24 11.24l2.557-2.557-12.793-7.39 10.236 9.947zm0 1.892L4.613 24.893l12.793-7.39-2.557-2.557zm1.488-1.488l3.197 1.846c1.173.677 1.173 1.776 0 2.453l-3.197 1.846-2.128-2.128 2.128-2.017z"/>
    </svg>`,
  apple: `
    <svg class="w-5 h-5 inline-block shrink-0 fill-current" viewBox="0 0 24 24">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1.01.08 2.06-.51 2.68-1.26z"/>
    </svg>`
};

function getLocalizedText(field) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[currentLang] || field['en'] || field['fa'] || '';
}

// Generate Star Rating HTML
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      html += `<i data-lucide="star" class="w-4 h-4 text-amber-400 fill-amber-400"></i>`;
    } else if (i === fullStars && hasHalf) {
      html += `<i data-lucide="star-half" class="w-4 h-4 text-amber-400 fill-amber-400"></i>`;
    } else {
      html += `<i data-lucide="star" class="w-4 h-4 text-slate-300 dark:text-slate-600"></i>`;
    }
  }
  return html;
}

// Show Toast Notification
function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.className = `fixed bottom-6 ${currentLang === 'fa' ? 'left-6' : 'right-6'} z-50 flex items-center gap-3 px-5 py-3 rounded-xl shadow-2xl text-white transition-all duration-300 ${isError ? 'bg-rose-600' : 'bg-emerald-600'}`;
  toast.classList.remove('hidden', 'opacity-0', 'translate-y-4');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-4');
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 4000);
}

// ============================================================================
// 🖥️ UI RENDERING FUNCTIONS
// ============================================================================

// Update Static Translation Texts
function updateUITexts() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Update Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Update Document Direction & Title
  document.documentElement.setAttribute('dir', currentLang === 'fa' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', currentLang);
  document.title = currentLang === 'fa' 
    ? `${t.brandName} - ${t.heroTitle}` 
    : `${t.brandName} - ${t.heroTitle}`;

  // Update Language Switcher Button Text & Title
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.setAttribute('title', currentLang === 'fa' ? 'Switch to English' : 'تغییر زبان به فارسی');
    langBtn.innerHTML = `
      <i data-lucide="globe" class="w-4 h-4 text-indigo-500"></i>
      <span>${currentLang === 'fa' ? 'EN' : 'فا'}</span>
    `;
  }
}

// Render Featured Hero App
function renderFeaturedApp() {
  const heroApp = apps.find(a => a.id === 2) || apps[0];
  if (!heroApp) return;

  const container = document.getElementById('featured-app-container');
  if (!container) return;

  const t = translations[currentLang];
  const appName = getLocalizedText(heroApp.name);
  const appTagline = getLocalizedText(heroApp.tagline);
  const appDesc = getLocalizedText(heroApp.description);
  const appCat = getLocalizedText(heroApp.category);

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <!-- App Info Column -->
      <div class="lg:col-span-6 space-y-6" data-aos="fade-up">
        <div class="flex items-center gap-4">
          <div class="relative shrink-0">
            <img src="${getAssetPath(heroApp.icon)}" alt="${appName}" class="w-20 h-20 md:w-24 md:h-24 rounded-2xl shadow-xl object-cover border-2 border-indigo-500/30" />
            <div class="absolute -inset-1 rounded-2xl bg-indigo-500/25 blur-sm -z-10"></div>
          </div>
          <div>
            <div class="flex items-center gap-2 mb-1 flex-wrap">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800/80 shadow-2xs">
                ${appCat}
              </span>
              <span class="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
                ${t.verifiedDev}
              </span>
            </div>
            <h3 class="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
              ${appName}
            </h3>
            <div class="flex items-center gap-2 mt-1.5">
              <div class="flex items-center gap-1">
                ${generateStars(heroApp.rating)}
              </div>
              <span class="text-sm font-bold text-slate-800 dark:text-slate-100">${heroApp.rating}</span>
              <span class="text-xs text-slate-500 dark:text-slate-400">(${heroApp.reviewsCount.toLocaleString()} ${t.modalReviews})</span>
            </div>
          </div>
        </div>

        <p class="text-base sm:text-lg font-semibold text-indigo-600 dark:text-indigo-400 leading-relaxed">
          ${appTagline}
        </p>

        <p class="text-slate-700 dark:text-slate-200 leading-relaxed text-sm md:text-base">
          ${appDesc}
        </p>

        <!-- Quick Specs Row -->
        <div class="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
          <span class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
            <i data-lucide="tag" class="w-3.5 h-3.5 text-indigo-500"></i>
            <span>${t.modalVersion} ${getLocalizedText(heroApp.version)}</span>
          </span>
          <span class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
            <i data-lucide="hard-drive" class="w-3.5 h-3.5 text-indigo-500"></i>
            <span>${t.modalSize} ${getLocalizedText(heroApp.size)}</span>
          </span>
          <span class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
            <i data-lucide="calendar" class="w-3.5 h-3.5 text-indigo-500"></i>
            <span>${t.modalLastUpdate} ${getLocalizedText(heroApp.lastUpdated)}</span>
          </span>
          <span class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
            <i data-lucide="user" class="w-3.5 h-3.5 text-indigo-500"></i>
            <span>${heroApp.developer}</span>
          </span>
        </div>

        <!-- Feature Badges -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
          ${heroApp.features.slice(0, 4).map(f => `
            <div class="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-800 dark:text-slate-200">
              <i data-lucide="check" class="w-4 h-4 text-emerald-500 shrink-0"></i>
              <span>${getLocalizedText(f)}</span>
            </div>
          `).join('')}
        </div>

        <!-- Download Buttons -->
        <div class="pt-4 flex flex-wrap items-center gap-3">
          <a href="${heroApp.myketUrl}" target="_blank" rel="noopener noreferrer" 
             class="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm md:text-base shadow-lg shadow-emerald-500/25 transition duration-200 transform hover:-translate-y-0.5">
            ${ICONS.myket}
            <span>${t.btnDownloadMyket}</span>
          </a>

          ${heroApp.googlePlayUrl ? `
            <a href="${heroApp.googlePlayUrl}" target="_blank" rel="noopener noreferrer"
               class="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-sm md:text-base shadow-lg shadow-slate-900/20 transition duration-200 transform hover:-translate-y-0.5 border border-slate-700/50">
              ${ICONS.googlePlay}
              <span>${t.btnDownloadGooglePlay}</span>
            </a>
          ` : `
            <div class="flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-slate-500 font-semibold text-xs md:text-sm border border-slate-200 dark:border-slate-700/60 cursor-not-allowed select-none" title="به‌زودی در گوگل‌پلی منتشر می‌شود">
              ${ICONS.googlePlay}
              <span>${t.btnGooglePlayComingSoon}</span>
            </div>
          `}

          <button onclick="openAppModal(${heroApp.id})" 
                  class="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm transition border border-slate-200/80 dark:border-slate-700">
            <i data-lucide="info" class="w-4 h-4 text-indigo-500"></i>
            <span>${t.btnDetails}</span>
          </button>
        </div>
      </div>

      <!-- Screenshot Carousel Column -->
      <div class="lg:col-span-6" data-aos="fade-left">
        <div class="relative max-w-[340px] sm:max-w-[380px] mx-auto">
          <!-- Decorative Glow -->
          <div class="absolute -inset-4 bg-gradient-to-r from-indigo-500/30 to-emerald-500/30 rounded-3xl blur-2xl -z-10"></div>
          
          <!-- Mockup Container -->
          <div class="phone-mockup border-4 border-slate-800 shadow-2xl">
            <div class="phone-screen bg-slate-950">
              <div class="swiper featured-swiper w-full">
                <div class="swiper-wrapper">
                  ${heroApp.screenshots.map((img, idx) => `
                    <div class="swiper-slide flex items-center justify-center bg-slate-950">
                      <img src="${getAssetPath(img)}" alt="Screenshot ${idx + 1}" class="w-full h-[520px] object-contain" />
                    </div>
                  `).join('')}
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Initialize Featured Swiper
  if (featuredSwiper) featuredSwiper.destroy();
  featuredSwiper = new Swiper('.featured-swiper', {
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    loop: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  if (window.lucide) lucide.createIcons();
}

// Render Categories Filter
function renderCategoryFilters() {
  const container = document.getElementById('category-filters');
  if (!container) return;

  const t = translations[currentLang];
  
  // Extract unique categories
  const categoriesMap = new Map();
  apps.forEach(app => {
    const catEn = typeof app.category === 'object' ? app.category.en : app.category;
    const catLocalized = getLocalizedText(app.category);
    if (!categoriesMap.has(catEn)) {
      categoriesMap.set(catEn, catLocalized);
    }
  });

  let html = `
    <button onclick="setCategoryFilter('all')" 
            class="filter-pill px-4 py-2 rounded-xl text-sm font-semibold transition ${currentCategory === 'all' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}">
      ${t.filterAll} (${apps.length})
    </button>
  `;

  categoriesMap.forEach((catName, catKey) => {
    const count = apps.filter(a => (typeof a.category === 'object' ? a.category.en : a.category) === catKey).length;
    const isActive = currentCategory === catKey;
    html += `
      <button onclick="setCategoryFilter('${catKey}')" 
              class="filter-pill px-4 py-2 rounded-xl text-sm font-semibold transition ${isActive ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}">
        ${catName} (${count})
      </button>
    `;
  });

  container.innerHTML = html;
}

// Set Category Filter
function setCategoryFilter(categoryKey) {
  currentCategory = categoryKey;
  renderCategoryFilters();
  filterAndRenderApps();
}

// Render All Apps Grid
function filterAndRenderApps() {
  const container = document.getElementById('apps-grid');
  if (!container) return;

  const t = translations[currentLang];
  
  // Filtering logic
  const filtered = apps.filter(app => {
    const catEn = typeof app.category === 'object' ? app.category.en : app.category;
    const matchesCategory = (currentCategory === 'all') || (catEn === currentCategory);
    
    const searchLower = currentSearch.toLowerCase().trim();
    if (!searchLower) return matchesCategory;

    const nameFa = typeof app.name === 'object' ? app.name.fa : app.name;
    const nameEn = typeof app.name === 'object' ? app.name.en : app.name;
    const descFa = typeof app.description === 'object' ? app.description.fa : app.description;
    const descEn = typeof app.description === 'object' ? app.description.en : app.description;
    const tagFa = typeof app.tagline === 'object' ? app.tagline.fa : app.tagline;
    const tagEn = typeof app.tagline === 'object' ? app.tagline.en : app.tagline;

    const matchesSearch = (nameFa && nameFa.toLowerCase().includes(searchLower)) ||
                          (nameEn && nameEn.toLowerCase().includes(searchLower)) ||
                          (descFa && descFa.toLowerCase().includes(searchLower)) ||
                          (descEn && descEn.toLowerCase().includes(searchLower)) ||
                          (tagFa && tagFa.toLowerCase().includes(searchLower)) ||
                          (tagEn && tagEn.toLowerCase().includes(searchLower));

    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
          <i data-lucide="search-x" class="w-8 h-8"></i>
        </div>
        <h4 class="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">${t.noAppsFound}</h4>
        <p class="text-sm text-slate-500 dark:text-slate-400">لطفاً واژه دیگری را جستجو کنید یا فیلتر دسته‌بندی را تغییر دهید.</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(app => {
    const appName = getLocalizedText(app.name);
    const appDesc = getLocalizedText(app.description);
    const appCat = getLocalizedText(app.category);
    const appSize = getLocalizedText(app.size);
    const appDownloads = getLocalizedText(app.downloads);
    const appThemeColor = app.color || '#6366f1';
    const isPaid = app.price && !app.price.isFree;
    const priceText = app.price ? getLocalizedText(app.price) : (currentLang === 'fa' ? 'رایگان' : 'Free');

    return `
      <div class="app-card flex flex-col justify-between rounded-2xl glass-card p-6 border transition-all duration-300 relative overflow-hidden" 
           data-aos="fade-up">
        <div>
          <!-- Header: Icon, Category & Price Tag -->
          <div class="flex items-start justify-between gap-4 mb-4">
            <div class="relative shrink-0">
              <img src="${getAssetPath(app.icon)}" alt="${appName}" class="w-16 h-16 rounded-2xl object-cover shadow-md border border-white/20" />
              <div class="absolute -inset-1 rounded-2xl opacity-30 blur-sm -z-10" style="background-color: ${appThemeColor}"></div>
            </div>
            <div class="flex flex-col items-end gap-1.5">
              <span class="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                ${appCat}
              </span>
              ${isPaid ? `
                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-amber-500/15 text-amber-600 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1 shadow-2xs">
                  <span>💰</span>
                  <span>${priceText}</span>
                </span>
              ` : `
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  ${priceText}
                </span>
              `}
              <span class="text-[11px] font-medium text-slate-500 dark:text-slate-400">${appSize}</span>
            </div>
          </div>

          <!-- Title & Rating -->
          <h3 class="text-xl font-extrabold text-slate-900 dark:text-white mb-2 line-clamp-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer" onclick="openAppModal(${app.id})">
            ${appName}
          </h3>

          <div class="flex items-center gap-3 mb-3">
            <div class="flex items-center gap-1">
              ${generateStars(app.rating)}
            </div>
            <span class="text-xs font-bold text-slate-800 dark:text-slate-200">${app.rating}</span>
            <span class="text-slate-300 dark:text-slate-700">•</span>
            <span class="text-xs font-medium text-slate-500 dark:text-slate-400">${appDownloads} ${t.downloadsText}</span>
          </div>

          <!-- Description -->
          <p class="text-sm text-slate-700 dark:text-slate-300 line-clamp-2 leading-relaxed mb-6">
            ${appDesc}
          </p>
        </div>

        <!-- Footer Actions -->
        <div class="pt-4 border-t border-slate-200/70 dark:border-slate-800/90 flex items-center justify-between gap-2">
          <button onclick="openAppModal(${app.id})" 
                  class="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-indigo-50 dark:bg-indigo-900/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 text-xs md:text-sm font-bold transition border border-indigo-200/50 dark:border-indigo-800/50">
            <i data-lucide="eye" class="w-4 h-4 text-indigo-500"></i>
            <span>${t.btnDetails}</span>
          </button>

          <div class="flex items-center gap-1.5">
            <!-- Quick Myket -->
            <a href="${app.myketUrl}" target="_blank" rel="noopener noreferrer" 
               title="${isPaid ? `${t.btnBuyMyket} (${priceText})` : t.btnDownloadMyket}"
               class="p-2.5 rounded-xl ${isPaid ? 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-600 dark:text-amber-400 border border-amber-500/30' : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'} transition">
              ${ICONS.myket}
            </a>

            <!-- Quick Google Play -->
            ${app.googlePlayUrl ? `
              <a href="${app.googlePlayUrl}" target="_blank" rel="noopener noreferrer" title="${t.btnDownloadGooglePlay}"
                 class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition border border-slate-200 dark:border-slate-700">
                ${ICONS.googlePlay}
              </a>
            ` : `
              <span title="${t.btnGooglePlayComingSoon}"
                    class="p-2.5 rounded-xl bg-slate-100/60 dark:bg-slate-800/40 text-slate-300 dark:text-slate-600 cursor-not-allowed select-none border border-slate-200/40 dark:border-slate-800/40">
                ${ICONS.googlePlay}
              </span>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

// Render Testimonials
function renderTestimonials() {
  const wrapper = document.getElementById('testimonials-wrapper');
  if (!wrapper) return;

  wrapper.innerHTML = testimonials.map(item => {
    const authorName = getLocalizedText(item.name);
    const authorRole = getLocalizedText(item.role);
    const comment = getLocalizedText(item.comment);

    return `
      <div class="swiper-slide">
        <div class="glass-card p-6 md:p-8 rounded-2xl flex flex-col justify-between h-full border">
          <div class="mb-4">
            <div class="flex items-center gap-1 mb-4">
              ${generateStars(item.rating)}
            </div>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base italic">
              "${comment}"
            </p>
          </div>
          <div class="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <img src="${item.avatar}" alt="${authorName}" class="w-11 h-11 rounded-full object-cover border-2 border-indigo-500/30" />
            <div>
              <h5 class="text-sm font-bold text-slate-900 dark:text-white">${authorName}</h5>
              <span class="text-xs text-slate-500 dark:text-slate-400">${authorRole}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (testimonialsSwiper) testimonialsSwiper.destroy();
  testimonialsSwiper = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: { delay: 4500 },
    pagination: {
      el: '.testimonials-pagination',
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });

  if (window.lucide) lucide.createIcons();
}

// ============================================================================
// 🔍 APP DETAIL MODAL LOGIC
// ============================================================================
function openAppModal(appId) {
  const app = apps.find(a => a.id === appId);
  if (!app) return;

  const modal = document.getElementById('app-modal');
  const modalBody = document.getElementById('modal-content');
  if (!modal || !modalBody) return;

  const t = translations[currentLang];
  const appName = getLocalizedText(app.name);
  const appTagline = getLocalizedText(app.tagline);
  const appDesc = getLocalizedText(app.description);
  const appCat = getLocalizedText(app.category);
  const appVersion = getLocalizedText(app.version) || '1.0';
  const appSize = getLocalizedText(app.size) || '4 MB';
  const appDownloads = getLocalizedText(app.downloads) || '< 100';
  const appLastUpdated = getLocalizedText(app.lastUpdated) || (currentLang === 'fa' ? '۱۴۰۵/۰۶/۰۵' : '2026/08/26');
  const appType = getLocalizedText(app.appType) || (currentLang === 'fa' ? 'برنامه اندرویدی' : 'Android App');
  const appDev = app.developer || 'HOSSEIN SAFIKHANI';
  const isPaid = app.price && !app.price.isFree;
  const appPriceText = app.price ? getLocalizedText(app.price) : (currentLang === 'fa' ? 'رایگان' : 'Free');

  modalBody.innerHTML = `
    <!-- Header (Pinned at Top) -->
    <div class="flex items-center justify-between gap-3 p-4 sm:p-5 md:p-6 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm z-10">
      <div class="flex items-center gap-3 sm:gap-4 min-w-0">
        <img src="${getAssetPath(app.icon)}" alt="${appName}" class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl object-cover shadow-md shrink-0 border border-white/20" />
        <div class="min-w-0">
          <div class="flex items-center gap-2 flex-wrap mb-0.5">
            <span class="inline-block px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 truncate max-w-full">
              ${appCat}
            </span>
            ${isPaid ? `
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-black bg-amber-500/15 text-amber-600 dark:text-amber-300 border border-amber-500/30 shadow-2xs">
                <span>💰</span>
                <span>${appPriceText}</span>
              </span>
            ` : `
              <span class="inline-block px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                ${appPriceText}
              </span>
            `}
          </div>
          <h3 class="text-lg sm:text-xl md:text-2xl font-black text-slate-900 dark:text-white truncate">
            ${appName}
          </h3>
          <p class="text-[11px] sm:text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium truncate">
            ${appDev} • ${appVersion}
          </p>
        </div>
      </div>
      <button onclick="closeAppModal()" aria-label="Close" class="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition shrink-0">
        <i data-lucide="x" class="w-5 h-5 sm:w-6 sm:h-6"></i>
      </button>
    </div>

    <!-- Body Scrollable (Dynamic Flex-1) -->
    <div class="modal-scrollable-body p-4 sm:p-6 space-y-5 overflow-y-auto">
      
      <!-- Metrics Bar -->
      <div class="grid grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-center border border-slate-200/60 dark:border-slate-700/60">
        <div>
          <div class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mb-0.5 sm:mb-1">${t.modalRating}</div>
          <div class="flex items-center justify-center gap-1 text-sm sm:text-base font-bold text-slate-900 dark:text-white">
            <span>${app.rating}</span>
            <i data-lucide="star" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400"></i>
          </div>
          <div class="text-[10px] text-slate-400">(${app.reviewsCount.toLocaleString()})</div>
        </div>
        <div class="border-x border-slate-200 dark:border-slate-700">
          <div class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mb-0.5 sm:mb-1">${t.modalDownloads}</div>
          <div class="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">${appDownloads}</div>
          <div class="text-[10px] text-slate-400 truncate">${app.googlePlayUrl ? (currentLang === 'fa' ? 'مایکت / گوگل‌پلی' : 'Myket / Google Play') : (currentLang === 'fa' ? 'مایکت' : 'Myket')}</div>
        </div>
        <div>
          <div class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mb-0.5 sm:mb-1">${t.modalSize}</div>
          <div class="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">${appSize}</div>
          <div class="text-[10px] text-slate-400">نسخه ${appVersion}</div>
        </div>
      </div>

      <!-- Technical Specifications (شناسنامه و مشخصات فنی برنامه) -->
      <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60">
        <h4 class="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
          <i data-lucide="info" class="w-4 h-4 text-indigo-500"></i>
          ${t.modalSpecs}
        </h4>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5 text-xs">
          <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/70 shadow-2xs">
            <div class="text-[10px] sm:text-[11px] text-slate-400 mb-0.5">${t.modalVersion}</div>
            <div class="font-bold text-slate-900 dark:text-slate-100 truncate">${appVersion}</div>
          </div>
          <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/70 shadow-2xs">
            <div class="text-[10px] sm:text-[11px] text-slate-400 mb-0.5">${t.modalPrice}</div>
            <div class="font-bold ${isPaid ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-600 dark:text-emerald-400'} truncate">${appPriceText}</div>
          </div>
          <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/70 shadow-2xs">
            <div class="text-[10px] sm:text-[11px] text-slate-400 mb-0.5">${t.modalLastUpdate}</div>
            <div class="font-bold text-slate-900 dark:text-slate-100 truncate">${appLastUpdated}</div>
          </div>
          <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/70 shadow-2xs">
            <div class="text-[10px] sm:text-[11px] text-slate-400 mb-0.5">${t.modalDownloads}</div>
            <div class="font-bold text-slate-900 dark:text-slate-100 truncate">${appDownloads}</div>
          </div>
          <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/70 shadow-2xs">
            <div class="text-[10px] sm:text-[11px] text-slate-400 mb-0.5">${t.modalSize}</div>
            <div class="font-bold text-slate-900 dark:text-slate-100 truncate">${appSize}</div>
          </div>
          <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/70 shadow-2xs">
            <div class="text-[10px] sm:text-[11px] text-slate-400 mb-0.5">${t.modalType}</div>
            <div class="font-bold text-slate-900 dark:text-slate-100 truncate">${appType}</div>
          </div>
          <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/70 shadow-2xs">
            <div class="text-[10px] sm:text-[11px] text-slate-400 mb-0.5">${t.modalCategory}</div>
            <div class="font-bold text-slate-900 dark:text-slate-100 truncate">${appCat}</div>
          </div>
          <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/70 shadow-2xs">
            <div class="text-[10px] sm:text-[11px] text-slate-400 mb-0.5">${t.modalDeveloper}</div>
            <div class="font-bold text-slate-900 dark:text-slate-100 truncate">${appDev}</div>
          </div>
        </div>
      </div>

      <!-- Screenshots Carousel -->
      <div>
        <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
          <i data-lucide="image" class="w-4 h-4 text-indigo-500"></i>
          ${t.modalScreenshots}
        </h4>
        <div class="swiper modal-swiper rounded-2xl overflow-hidden shadow-inner border border-slate-200 dark:border-slate-800">
          <div class="swiper-wrapper">
            ${app.screenshots.map((s, idx) => `
              <div class="swiper-slide flex items-center justify-center bg-slate-950 p-2 rounded-xl">
                <img src="${getAssetPath(s)}" alt="Screenshot ${idx + 1}" class="w-full h-56 sm:h-72 md:h-80 max-h-[35vh] object-contain rounded-lg" />
              </div>
            `).join('')}
          </div>
          <div class="swiper-pagination modal-pagination"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>

      <!-- Description -->
      <div>
        <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
          <i data-lucide="align-right" class="w-4 h-4 text-indigo-500"></i>
          درباره اپلیکیشن
        </h4>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
          ${appDesc}
        </p>
      </div>

      <!-- Features Checklist -->
      <div>
        <h4 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500"></i>
          ${t.modalFeatures}
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${app.features.map(f => `
            <div class="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
              <i data-lucide="check" class="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 shrink-0"></i>
              <span>${getLocalizedText(f)}</span>
            </div>
          `).join('')}
        </div>
      </div>

      ${app.targetAudiences && app.targetAudiences.length > 0 ? `
        <!-- Target Audience (مخاطبان هدف برنامه) -->
        <div class="p-3.5 sm:p-4 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20">
          <h4 class="text-xs sm:text-sm font-bold text-amber-700 dark:text-amber-400 mb-2.5 flex items-center gap-2">
            <i data-lucide="users" class="w-4 h-4 text-amber-500"></i>
            ${currentLang === 'fa' ? 'این برنامه مخصوص چه کسانی است؟' : 'Who is this app for?'}
          </h4>
          <div class="space-y-2">
            ${app.targetAudiences.map(aud => `
              <div class="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span class="text-amber-500 font-black mt-0.5">•</span>
                <span>${getLocalizedText(aud)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${app.academicTerms && app.academicTerms.length > 0 ? `
        <!-- Academic Terms (سرفصل‌های ترمیک آکادمی) -->
        <div class="p-3.5 sm:p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/50">
          <h4 class="text-xs sm:text-sm font-bold text-indigo-700 dark:text-indigo-300 mb-2.5 flex items-center gap-2">
            <i data-lucide="graduation-cap" class="w-4 h-4 text-indigo-500"></i>
            ${currentLang === 'fa' ? 'سرفصل‌های آکادمی جامع (۸ ترم - ۷۶۸ درس)' : 'Comprehensive Academy Terms (8 Terms - 768 Lessons)'}
          </h4>
          <div class="grid grid-cols-1 gap-2">
            ${app.academicTerms.map(term => `
              <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-indigo-100 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-200 flex items-start gap-2">
                <i data-lucide="book-open" class="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5"></i>
                <span class="leading-relaxed">${getLocalizedText(term)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${app.calculators && app.calculators.length > 0 ? `
        <!-- Engineering Calculators (جعبه ابزار محاسبات) -->
        <div class="p-3.5 sm:p-4 rounded-2xl bg-sky-50/70 dark:bg-sky-950/40 border border-sky-200/60 dark:border-sky-800/50">
          <h4 class="text-xs sm:text-sm font-bold text-sky-700 dark:text-sky-300 mb-2.5 flex items-center gap-2">
            <i data-lucide="calculator" class="w-4 h-4 text-sky-500"></i>
            ${currentLang === 'fa' ? 'جعبه‌ابزار محاسبات مهندسی (۱۴ ماشین‌حساب تخصصی)' : 'Engineering Toolset (14 Specialized Calculators)'}
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            ${app.calculators.map(calc => `
              <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-sky-100 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-200 flex items-start gap-2">
                <i data-lucide="binary" class="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5"></i>
                <span class="leading-relaxed">${getLocalizedText(calc)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${app.developerEmail || app.developerTelegram ? `
        <!-- Contact & Developer Support -->
        <div class="p-3.5 rounded-2xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 text-xs">
          <div class="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2">
            <i data-lucide="headset" class="w-4 h-4 text-emerald-500"></i>
            ${currentLang === 'fa' ? 'اطلاعات پشتیبانی و توسعه‌دهنده:' : 'Developer Contact & Support:'}
          </div>
          <div class="flex flex-wrap gap-y-2 gap-x-4 text-slate-600 dark:text-slate-400">
            <div>
              <span class="font-medium">${currentLang === 'fa' ? 'توسعه‌دهنده:' : 'Developer:'}</span>
              <strong class="text-slate-800 dark:text-slate-200">${app.developer}</strong>
            </div>
            ${app.developerEmail ? `
              <div>
                <span class="font-medium">ایمیل:</span>
                <a href="mailto:${app.developerEmail}" class="text-indigo-600 dark:text-indigo-400 hover:underline dir-ltr inline-block">${app.developerEmail}</a>
              </div>
            ` : ''}
            ${app.developerTelegram ? `
              <div>
                <span class="font-medium">تلگرام:</span>
                <a href="https://t.me/${app.developerTelegram}" target="_blank" rel="noopener noreferrer" class="text-sky-600 dark:text-sky-400 hover:underline dir-ltr inline-block">@${app.developerTelegram}</a>
              </div>
            ` : ''}
          </div>
          <div class="mt-2 text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-500 shrink-0"></i>
            <span>${currentLang === 'fa' ? 'تمامی سوابق و داده‌ها فقط روی حافظه محلی ذخیره شده، ۱۰۰٪ آفلاین و فاقد تبلیغات آزاردهنده است.' : 'All study data is stored securely offline on local device with zero telemetry.'}</span>
          </div>
        </div>
      ` : ''}
    </div>

    <!-- Footer Action Buttons (Pinned at Bottom with Safe Area) -->
    <div class="modal-footer-safe p-3.5 sm:p-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 sm:gap-3 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-sm shrink-0 z-10">
      <div class="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
        <a href="${app.myketUrl}" target="_blank" rel="noopener noreferrer"
           class="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl ${isPaid ? 'bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600' : 'bg-emerald-600 hover:bg-emerald-700'} text-white font-bold text-xs sm:text-sm shadow-md transition">
          ${ICONS.myket}
          <span>${isPaid ? `${t.btnBuyMyket} (${appPriceText})` : t.btnDownloadMyket}</span>
        </a>

        ${app.googlePlayUrl ? `
          <a href="${app.googlePlayUrl}" target="_blank" rel="noopener noreferrer"
             class="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs sm:text-sm shadow-md transition">
            ${ICONS.googlePlay}
            <span>${t.btnDownloadGooglePlay}</span>
          </a>
        ` : `
          <div class="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 font-semibold text-xs sm:text-sm border border-slate-200 dark:border-slate-700/60 cursor-not-allowed select-none" title="به‌زودی در گوگل‌پلی منتشر می‌شود">
            ${ICONS.googlePlay}
            <span>${t.btnGooglePlayComingSoon}</span>
          </div>
        `}

        ${app.appStoreUrl ? `
          <a href="${app.appStoreUrl}" target="_blank" rel="noopener noreferrer"
             class="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm shadow-md transition">
            ${ICONS.apple}
            <span>iOS App Store</span>
          </a>
        ` : ''}
      </div>

      <button onclick="closeAppModal()" class="w-full sm:w-auto px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold transition">
        ${t.modalClose}
      </button>
    </div>
  `;

  // Show Modal with Animation
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');

  // Modal Swiper
  if (modalSwiper) modalSwiper.destroy();
  modalSwiper = new Swiper('.modal-swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.modal-pagination',
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 2 }
    }
  });

  if (window.lucide) lucide.createIcons();
}

function closeAppModal() {
  const modal = document.getElementById('app-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

// Close on backdrop click & ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAppModal();
});

// ============================================================================
// 🔢 ANIMATED STATISTICS COUNTER
// ============================================================================
function initStatsCounter() {
  const statElements = document.querySelectorAll('.counter-val');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statElements.forEach(el => {
          const target = el.getAttribute('data-target');
          if (target) {
            el.textContent = target;
          }
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats-section');
  if (statsSection) observer.observe(statsSection);
}

// ============================================================================
// 🌓 THEME & LANGUAGE CONTROLLERS
// ============================================================================
function toggleTheme() {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

function toggleLanguage() {
  currentLang = currentLang === 'fa' ? 'en' : 'fa';
  localStorage.setItem('lang', currentLang);
  
  // Re-render everything
  updateUITexts();
  renderFeaturedApp();
  renderCategoryFilters();
  filterAndRenderApps();

  // Update Language Button Text
  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.innerHTML = `
      <i data-lucide="globe" class="w-4 h-4"></i>
      <span>${currentLang === 'fa' ? 'EN' : 'فا'}</span>
    `;
  }

  if (window.lucide) lucide.createIcons();
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;
  menu.classList.toggle('hidden');
}

// Close mobile menu on click
function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu && !menu.classList.contains('hidden')) {
    menu.classList.add('hidden');
  }
}

// ============================================================================
// 📩 NEWSLETTER & CONTACT FORM HANDLERS
// ============================================================================
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const emailInput = document.getElementById('newsletter-email');
  const t = translations[currentLang];

  if (!emailInput || !emailInput.value.trim() || !emailInput.value.includes('@')) {
    showToast(t.toastError, true);
    return;
  }

  showToast(t.toastSubscribed);
  emailInput.value = '';
}

function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name');
  const email = document.getElementById('contact-email');
  const message = document.getElementById('contact-message');
  const t = translations[currentLang];

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    showToast(t.toastError, true);
    return;
  }

  showToast(t.toastMessageSent);
  name.value = '';
  email.value = '';
  message.value = '';
}

// ============================================================================
// 🚀 INITIALIZATION ON DOM READY
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Load saved preferences
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDarkMode = true;
    document.documentElement.classList.add('dark');
  }

  const savedLang = localStorage.getItem('lang');
  if (savedLang && (savedLang === 'fa' || savedLang === 'en')) {
    currentLang = savedLang;
  }

  // Initialize UI
  updateUITexts();
  renderFeaturedApp();
  renderCategoryFilters();
  filterAndRenderApps();
  initStatsCounter();

  // Search input listener
  const searchInput = document.getElementById('app-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      filterAndRenderApps();
    });
  }

  // Form event listeners
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }

  // Initialize AOS scroll animations
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
    });
  }

  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }
});
