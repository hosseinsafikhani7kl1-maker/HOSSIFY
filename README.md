# 📱 راهنمای وبسایت کاتالوگ و معرفی اپلیکیشن‌های HOSSIFY

وب‌سایت مدرن، واکنش‌گرا و دو زبانه (فارسی / انگلیسی) استودیو **HOSSIFY** برای معرفی و دانلود اپلیکیشن‌های موبایل از **مایکت (Myket)** و **گوگل‌پلی (Google Play)**.

این قالب به صورت **Data-Driven (مبتنی بر داده)** طراحی شده است؛ یعنی تمام اطلاعات اپلیکیشن‌ها، تصاویر، لینک‌های دانلود و متون در فایل `script.js` قرار دارند و با ویرایش آن، تمام بخش‌های وب‌سایت به صورت خودکار بروزرسانی می‌شوند.

---

## 📑 فهرست مطالب
1. [ساختار فایل‌ها](#ساختار-فایل‌ها)
2. [نحوه ویرایش و اضافه کردن اپلیکیشن جدید](#نحوه-ویرایش-و-اضافه-کردن-اپلیکیشن-جدید)
3. [نحوه تغییر متون و ترجمه‌ها (Bilingual)](#نحوه-تغییر-متون-و-ترجمه‌ها)
4. [تغییر رنگ‌ها و استایل‌ها](#تغییر-رنگ‌ها-و-استایل‌ها)
5. [آموزش استقرار روی GitHub Pages](#آموزش-استقرار-روی-github-pages)
6. [اتصال دامنه اختصاصی (Custom Domain)](#اتصال-دامنه-اختصاصی-custom-domain)

---

## 📂 ساختار فایل‌ها

```text
├── index.html        # فایل اصلی HTML و ساختار صفحات و بخش‌ها
├── style.css         # استایل‌های سفارشی، فونت وزیرمتن و اینتر، افکت‌های شیشه‌ای
├── script.js         # داده‌های اپلیکیشن‌ها (apps[])، ترجمه‌ها (translations{}) و منطق تعاملی
└── README.md         # راهنمای کامل استفاده و توسعه
```

---

## ✏️ نحوه ویرایش و اضافه کردن اپلیکیشن جدید

برای تغییر اپلیکیشن‌ها یا اضافه کردن برنامه جدید، فایل `script.js` را باز کنید. در بالای فایل آرایه `apps` قرار دارد:

### 🧩 نمونه کد یک اپلیکیشن:

```javascript
{
  id: 7, // یک شماره یکتا
  name: {
    fa: "نام اپلیکیشن شما به فارسی",
    en: "Your App Name in English"
  },
  tagline: {
    fa: "شعار کوتاه و جذاب برنامه (حداکثر ۱۰ کلمه)",
    en: "Short and catchy slogan"
  },
  description: {
    fa: "توضیحات کامل درباره کاربردها و مزایای اپلیکیشن شما.",
    en: "Full comprehensive description of your app features."
  },
  category: {
    fa: "بهره‌وری", // یا "آموزش", "ابزار", "مالی", "سلامت"
    en: "Productivity"
  },
  icon: "https://your-domain.com/icon.png", // آدرس آیکون برنامه
  screenshots: [
    "https://your-domain.com/screen1.jpg",
    "https://your-domain.com/screen2.jpg",
    "https://your-domain.com/screen3.jpg",
    "https://your-domain.com/screen4.jpg"
  ],
  rating: 4.9,              // امتیاز از ۰ تا ۵
  reviewsCount: 15400,      // تعداد نظرات
  downloads: "100K+",       // تعداد دانلودها
  size: "24 MB",            // حجم فایل نصبی
  version: "2.1.0",         // نسخه فعلی
  developer: "نام شما / استودیو",
  features: [
    { fa: "قابلیت اول", en: "First Key Feature" },
    { fa: "قابلیت دوم", en: "Second Key Feature" },
    { fa: "قابلیت سوم", en: "Third Key Feature" },
    { fa: "قابلیت چهارم", en: "Fourth Key Feature" }
  ],
  myketUrl: "https://myket.ir/app/com.example.myapp",           // لینک مایکت
  googlePlayUrl: "https://play.google.com/store/apps/details?id=com.example.myapp", // لینک گوگل‌پلی
  appStoreUrl: "https://apps.apple.com/app/id123456789",         // اختیاری
  color: "#6366f1"          // رنگ شاخص کارت (کد هگزادسیمال)
}
```

> 💡 **نکته:** اولین اپلیکیشن موجود در آرایه (`apps[0]`) به صورت خودکار به عنوان **اپلیکیشن برگزیده (Featured Showcase)** در بالای صفحه به همراه اسلایدر اسکرین‌شات‌ها نمایش داده می‌شود.

---

## 🌐 نحوه تغییر متون و ترجمه‌ها

در فایل `script.js`، شیء `translations` شامل تمام کلمات و جملات سایت به هر دو زبان فارسی (`fa`) و انگلیسی (`en`) است:

```javascript
const translations = {
  fa: {
    brandName: "HOSSIFY",
    heroTitle: "اپلیکیشن‌های هوشمند برای زندگی دیجیتال بهتر",
    btnDownloadMyket: "دانلود از مایکت",
    // ...
  },
  en: {
    brandName: "HOSSIFY",
    heroTitle: "Smart Apps for a Better Digital Life",
    btnDownloadMyket: "Download on Myket",
    // ...
  }
};
```

---

## 🎨 تغییر رنگ‌ها و استایل‌ها

1. **رنگ اصلی (Primary Color):**
   در بالای فایل `style.css` متغیرهای رنگی تعریف شده‌اند:
   ```css
   :root {
     --primary-color: #6366f1; /* رنگ بنفش / نیلی */
     --accent-color: #10b981;  /* رنگ سبز مایکت */
   }
   ```
2. **فونت‌ها:**
   - برای زبان فارسی به صورت پیش‌فرض از فونت استاندارد و زیبای **Vazirmatn** استفاده شده است.
   - برای زبان انگلیسی از فونت مدرن **Inter** استفاده شده است.

---

## 🚀 آموزش استقرار روی GitHub Pages (رایگان)

1. یک مخزن (Repository) جدید در [GitHub](https://github.com) بسازید.
2. فایل‌های پروژه (`index.html`, `style.css`, `script.js`) را در ریشه (Root) مخزن آپلود کنید:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of App Showcase site"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```
3. در گیت‌هاب، به تب **Settings** مخزن بروید.
4. از منوی سمت چپ روی گزینه **Pages** کلیک کنید.
5. در بخش **Build and deployment**، گزینه **Source** را روی `Deploy from a branch` بگذارید.
6. شاخه `main` و پوشه `/ (root)` را انتخاب کرده و روی **Save** کلیک کنید.
7. پس از چند ثانیه، سایت شما در آدرس `https://USERNAME.github.io/REPO_NAME` در دسترس خواهد بود.

---

## 🌐 اتصال دامنه اختصاصی (Custom Domain)

1. در تنظیمات GitHub Pages، در بخش **Custom domain**، نام دامنه خود را وارد کنید (مانند `myapp.ir` یا `apps.yourdomain.com`).
2. به پنل مدیریت DNS دامنه خود (مانند ابر آروان، کلودفلر یا پنل ثبت‌کننده) بروید:
   - برای ساب‌دامین (مانند `apps.example.com`): یک رکورد `CNAME` با نام `apps` و مقدار `USERNAME.github.io` ایجاد کنید.
   - برای دامنه اصلی (مانند `example.com`): رکورد‌های `A` را به IP‌های رسمی گیت‌هاب متصل کنید:
     ```text
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
3. گزینه **Enforce HTTPS** را در تنظیمات گیت‌هاب فعال نمایید تا گواهی SSL رایگان اعمال شود.

---

✨ توسعه داده شده برای معرفی حرفه‌ای اپلیکیشن‌های موبایل در استورهای ایرانی و بین‌المللی.
