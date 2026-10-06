const catalog = Array.isArray(window.HOSSIFY_APPS) ? window.HOSSIFY_APPS : [];
const analyticsEndpoint = String(window.HOSSIFY_ANALYTICS?.endpoint || '').replace(/\/$/, '');
let language = localStorage.getItem('hossify-language') === 'en' ? 'en' : 'fa';
let activeView = 'home';
let activeCategory = 'all';

const copy = {
  fa: {
    brandSub: 'اپلیکیشن‌های تخصصی و کاربردی',
    nav: [['home', 'خانه'], ['apps', 'برنامه‌ها'], ['about', 'روش ما'], ['support', 'ارتباط و نظر']],
    eyebrow: 'HOSSIFY · MOBILE PRODUCTS',
    heroTitle: 'ابزارهای حرفه‌ای، برای تصمیم‌های دقیق‌تر.',
    heroText: 'مجموعه‌ای متمرکز از اپلیکیشن‌های آموزشی، مهندسی و عملیاتی برای صنعت نفت و گاز و محیط‌های فنی. هر محصول با یک هدف مشخص طراحی شده است.',
    catalog: 'مشاهدهٔ همهٔ برنامه‌ها',
    contact: 'ارتباط با HOSSIFY',
    products: 'برنامه‌های HOSSIFY',
    productsText: 'یک برنامه را انتخاب کنید تا جزئیات، تصاویر محیط و لینک مایکت آن را ببینید.',
    all: 'همهٔ دسته‌ها', details: 'جزئیات', myket: 'مشاهده در مایکت', unavailable: 'لینک مایکت در دسترس نیست',
    emptyCatalog: 'هنوز برنامه‌ای در کاتالوگ منتشر نشده است. فهرست برنامه‌ها پس از انتشار از طریق HOSSIFY Site Manager در اینجا نمایش داده می‌شود.',
    why: 'رویکرد HOSSIFY', whyText: 'کیفیت محصول برای ما یعنی قابلیت استفادهٔ روشن، محتوای دقیق و تجربه‌ای آرام در محیط کار.',
    how: 'سه گام تا ابزار مناسب', howText: 'بدون صفحه‌های بلند و پراکنده؛ مسیر سایت کوتاه و مستقیم است.',
    support: 'ارتباط و بازخورد', supportText: 'برای پیشنهاد، گزارش مشکل یا درخواست محصول جدید با ما در تماس باشید.',
    review: 'نظرتان ارزشمند است', reviewText: 'بعد از استفاده از هر برنامه، امتیاز و بازخورد واقعی خود را در صفحهٔ همان برنامه در مایکت ثبت کنید. این بازخورد مسیر نسخه‌های بعدی را روشن می‌کند.',
    email: 'ایمیل', telegram: 'تلگرام', modalShots: 'محیط برنامه', modalAbout: 'دربارهٔ برنامه', modalFeatures: 'امکانات کلیدی', version: 'نسخه', size: 'حجم', rating: 'امتیاز', downloads: 'دانلود', close: 'بستن',
    statApps: 'اپلیکیشن تخصصی', statFocus: 'تمرکز بر تجربهٔ آفلاین', statMarket: 'دسترسی از مایکت',
    featureItems: [['◈', 'کاربرد مشخص', 'هر محصول یک مسئلهٔ واقعی را هدف می‌گیرد.'], ['⌁', 'طراحی آرام و سریع', 'رابطی ساده برای محیط دانشگاه، دفتر و میدان.'], ['⌘', 'اطلاعات دو زبانه', 'معرفی و مشخصات هر برنامه در فارسی و انگلیسی.'], ['✓', 'به‌روزرسانی کنترل‌شده', 'اطلاعات کاتالوگ پیش از انتشار بازبینی می‌شود.']],
    steps: [['انتخاب محصول', 'از کاتالوگ، برنامهٔ مناسب نیازتان را پیدا کنید.'], ['بررسی جزئیات', 'تصاویر، امکانات، نسخه و مشخصات را کوتاه و روشن ببینید.'], ['دریافت از مایکت', 'فقط از مسیر رسمی مایکت برنامه را دریافت کنید.']],
    noApps: 'برنامه‌ای در این دسته وجود ندارد.',
  },
  en: {
    brandSub: 'Specialized mobile products',
    nav: [['home', 'Home'], ['apps', 'Apps'], ['about', 'Our approach'], ['support', 'Contact & feedback']],
    eyebrow: 'HOSSIFY · MOBILE PRODUCTS',
    heroTitle: 'Professional tools for clearer decisions.',
    heroText: 'A focused collection of educational, engineering and operational mobile applications for oil & gas and technical environments. Every product is built around a specific purpose.',
    catalog: 'Explore all apps', contact: 'Contact HOSSIFY', products: 'HOSSIFY applications', productsText: 'Select a product to view its overview, screenshots and Myket link.',
    all: 'All categories', details: 'Details', myket: 'View on Myket', unavailable: 'Myket link unavailable',
    emptyCatalog: 'No apps have been published yet. Apps will appear here after they are published through HOSSIFY Site Manager.',
    why: 'The HOSSIFY approach', whyText: 'For us, product quality means a clear purpose, credible content and a calm experience at work.',
    how: 'Three steps to the right tool', howText: 'No endless scrolling. The path through the catalog stays short and direct.',
    support: 'Contact & feedback', supportText: 'For ideas, issues or requests for a new product, get in touch.',
    review: 'Your feedback matters', reviewText: 'After using an app, leave your genuine rating and feedback on its Myket page. It guides the next release.',
    email: 'Email', telegram: 'Telegram', modalShots: 'Inside the app', modalAbout: 'About this app', modalFeatures: 'Key capabilities', version: 'Version', size: 'Size', rating: 'Rating', downloads: 'Downloads', close: 'Close',
    statApps: 'specialized apps', statFocus: 'offline-first focus', statMarket: 'available through Myket',
    featureItems: [['◈', 'Clear purpose', 'Every product targets a real task.'], ['⌁', 'Calm and fast design', 'A simple interface for classroom, office and field.'], ['⌘', 'Bilingual product data', 'Product information is available in Persian and English.'], ['✓', 'Controlled updates', 'Catalog content is reviewed before publication.']],
    steps: [['Choose a product', 'Find the app that matches your need in the catalog.'], ['Review details', 'See screenshots, features, version and key details at a glance.'], ['Get it from Myket', 'Install through the official Myket listing only.']],
    noApps: 'No products in this category.',
  },
};

function t() { return copy[language]; }
function value(item, key) { const field = item?.[key]; return typeof field === 'object' && field ? field[language] || field.fa || field.en || '' : field || ''; }
function escapeHtml(value = '') { return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' })[char]); }
function asset(path = '') { if (!path) return ''; return /^(https?:|data:)/i.test(path) ? path : path.startsWith('/') ? `.${path}` : path; }
function selected(id) { return catalog.find((app) => String(app.id) === String(id)); }
function directDownloadLink(app) {
  if (!app?.directDownloadUrl) return '';
  const target = new URL(asset(app.directDownloadUrl), window.location.href).href;
  return analyticsEndpoint ? `${analyticsEndpoint}/d/${encodeURIComponent(app.id)}?target=${encodeURIComponent(target)}` : target;
}
function directDownloadButton(app, className = 'mini-button primary') {
  const href = directDownloadLink(app);
  return href ? `<a class="${className}" href="${escapeHtml(href)}" ${analyticsEndpoint ? '' : 'download'} rel="noopener">${language === 'fa' ? 'دانلود مستقیم ↧' : 'Direct download ↧'}</a>` : '';
}

function visitorId() {
  const key = 'hossify-visitor-id-v1';
  let id = localStorage.getItem(key);
  if (!id) { id = globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`; localStorage.setItem(key, id); }
  return id;
}
function trackPageView() {
  if (!analyticsEndpoint) return;
  fetch(`${analyticsEndpoint}/v1/view`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ path: location.pathname, visitorId: visitorId() }), keepalive: true }).catch(() => {});
}

function render() {
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
  document.title = language === 'fa' ? 'HOSSIFY | اپلیکیشن‌های تخصصی' : 'HOSSIFY | Specialized mobile apps';
  document.getElementById('app').innerHTML = `<div class="site">${header()}<section class="surface">${page()}</section><footer class="footer">© ${new Date().getFullYear()} HOSSIFY · ${language === 'fa' ? 'محصولات دیجیتال با تمرکز بر کاربرد واقعی' : 'Digital products focused on real work'}</footer></div>`;
}

function header() {
  const labels = t().nav;
  return `<header class="header"><a href="#" class="brand" data-action="view" data-view="home"><span class="brand-mark">H</span><span class="brand-copy"><b>HOSSIFY</b><small>${t().brandSub}</small></span></a>
    <nav class="nav" id="nav">${labels.map(([view, label]) => `<button class="${activeView === view ? 'active' : ''}" data-action="view" data-view="${view}">${label}</button>`).join('')}</nav>
    <div><button class="language-button" data-action="language">${language === 'fa' ? 'EN' : 'فا'}</button><button class="menu-button" data-action="menu">☰</button></div></header>`;
}

function page() {
  if (activeView === 'apps') return appsPage();
  if (activeView === 'about') return aboutPage();
  if (activeView === 'support') return supportPage();
  return homePage();
}

function homePage() {
  const featured = catalog[0];
  return `<div class="view hero"><div class="hero-copy"><div class="eyebrow">${t().eyebrow}</div><h1>${t().heroTitle}</h1><p>${t().heroText}</p><div class="hero-actions"><button class="cta primary" data-action="view" data-view="apps">${t().catalog} ←</button><button class="cta ghost" data-action="view" data-view="support">${t().contact}</button></div><div class="metrics"><div class="metric"><strong>${catalog.length}</strong><span>${t().statApps}</span></div><div class="metric"><strong>100%</strong><span>${t().statFocus}</span></div><div class="metric"><strong>MYKET</strong><span>${t().statMarket}</span></div></div></div></div>
    ${featured ? `<div class="view" style="padding-bottom:0"><div class="section-heading"><div><h2>${language === 'fa' ? 'محصول منتخب' : 'Featured product'}</h2><p>${escapeHtml(value(featured, 'tagline'))}</p></div><button class="mini-button" data-action="detail" data-id="${featured.id}">${t().details}</button></div></div>` : ''}`;
}

function appsPage() {
  const categories = [...new Set(catalog.map((app) => value(app, 'category')).filter(Boolean))];
  const visible = activeCategory === 'all' ? catalog : catalog.filter((app) => value(app, 'category') === activeCategory);
  const filter = categories.length ? `<select class="filter" data-action="category"><option value="all">${t().all}</option>${categories.map((category) => `<option value="${escapeHtml(category)}" ${category === activeCategory ? 'selected' : ''}>${escapeHtml(category)}</option>`).join('')}</select>` : '';
  const content = catalog.length
    ? visible.length ? visible.map(appCard).join('') : `<div class="empty">${t().noApps}</div>`
    : `<div class="empty">${t().emptyCatalog}</div>`;
  return `<div class="view"><div class="section-heading"><div><h1>${t().products}</h1><p>${t().productsText}</p></div>${filter}</div><div class="apps-grid">${content}</div></div>`;
}

function appCard(app) {
  const myket = app.myketUrl ? `<a class="mini-button primary" href="${escapeHtml(app.myketUrl)}" target="_blank" rel="noopener">${language === 'fa' ? 'مایکت ↗' : 'Myket ↗'}</a>` : '';
  const direct = directDownloadButton(app, 'mini-button');
  return `<article class="app-card"><div class="app-card-head">${app.icon ? `<img class="app-icon" src="${escapeHtml(asset(app.icon))}" alt="">` : '<div class="app-icon placeholder">📱</div>'}<div><h3>${escapeHtml(value(app, 'name'))}</h3><small>${escapeHtml(value(app, 'version'))}</small></div></div><span class="tag">${escapeHtml(value(app, 'category'))}</span><p>${escapeHtml(value(app, 'tagline'))}</p><div class="card-actions"><button class="mini-button" data-action="detail" data-id="${app.id}">${t().details}</button>${myket}${direct}</div></article>`;
}

function aboutPage() {
  return `<div class="view"><div class="section-heading"><div><h1>${t().why}</h1><p>${t().whyText}</p></div></div><div class="split"><section class="feature-panel"><h2>HOSSIFY</h2><p>${language === 'fa' ? 'کاتالوگ به‌جای شلوغ‌کردن صفحه، محتوا را در بخش‌های کوتاه و قابل انتخاب نمایش می‌دهد.' : 'Instead of endless sections, this catalog keeps information in compact, selectable views.'}</p><div class="feature-list">${t().featureItems.map(([symbol, title, description]) => `<div class="feature"><div class="symbol">${symbol}</div><div><b>${title}</b><span>${description}</span></div></div>`).join('')}</div></section><section class="info-panel"><h2>${t().how}</h2><p>${t().howText}</p><div class="steps">${t().steps.map(([title, description]) => `<div class="step"><div><b>${title}</b><span>${description}</span></div></div>`).join('')}</div><button class="cta primary" style="margin-top:22px;background:#1688d1;color:white" data-action="view" data-view="apps">${t().catalog}</button></section></div></div>`;
}

function supportPage() {
  const appLinks = catalog.filter((app) => app.myketUrl);
  return `<div class="view"><div class="section-heading"><div><h1>${t().support}</h1><p>${t().supportText}</p></div></div><div class="contact-layout"><section class="contact-card"><h2>HOSSIFY</h2><p>${language === 'fa' ? 'پیام خود را از طریق ایمیل یا تلگرام ارسال کنید. برای دریافت سریع‌تر پاسخ، نام برنامه و نسخهٔ آن را هم بنویسید.' : 'Send your message by email or Telegram. For a faster reply, include the app name and version.'}</p><div class="contact-actions"><a href="mailto:hosseinsafikhani7kl@gmail.com">✉ ${t().email}</a><a href="https://t.me/hossify" target="_blank" rel="noopener">◉ ${t().telegram}</a></div></section><section class="contact-card review-box"><h2>${t().review}</h2><p>${t().reviewText}</p><div class="contact-actions">${appLinks.slice(0, 3).map((app) => `<a href="${escapeHtml(app.myketUrl)}" target="_blank" rel="noopener">★ ${escapeHtml(value(app, 'name'))}</a>`).join('')}</div></section></div></div>`;
}

function modal(app) {
  if (!app) return '';
  const shots = (app.screenshots || []).slice(0, 6).map((screenshot, index) => `<img src="${escapeHtml(asset(screenshot))}" alt="${escapeHtml(value(app, 'name'))} ${index + 1}">`).join('');
  const features = (app.features || []).map((feature) => `<li>${escapeHtml(value({ feature }, 'feature'))}</li>`).join('');
  const myket = app.myketUrl ? `<a class="myket" href="${escapeHtml(app.myketUrl)}" target="_blank" rel="noopener">${t().myket} ↗</a>` : '';
  const direct = directDownloadButton(app, 'myket');
  const noLink = !myket && !direct ? `<span class="mini-button">${t().unavailable}</span>` : '';
  return `<div class="modal-backdrop" data-action="close-modal"><article class="modal" data-modal><button class="modal-close" data-action="close-modal">× ${t().close}</button><header class="modal-hero" style="background:linear-gradient(130deg,#071c33,${escapeHtml(app.color || '#1688d1')})"><div class="modal-title">${app.icon ? `<img class="app-icon" src="${escapeHtml(asset(app.icon))}" alt="">` : '<div class="app-icon placeholder">📱</div>'}<div><h2>${escapeHtml(value(app, 'name'))}</h2><p>${escapeHtml(value(app, 'tagline'))}</p></div></div></header><div class="modal-body">${shots ? `<h3>${t().modalShots}</h3><div class="shot-strip">${shots}</div>` : ''}<h3>${t().modalAbout}</h3><p class="modal-description">${escapeHtml(value(app, 'description'))}</p><div class="details-grid"><div class="detail"><b>${t().version}</b><span>${escapeHtml(value(app, 'version'))}</span></div><div class="detail"><b>${t().size}</b><span>${escapeHtml(value(app, 'size'))}</span></div><div class="detail"><b>${t().rating}</b><span>★ ${escapeHtml(app.rating || '—')}</span></div><div class="detail"><b>${t().downloads}</b><span>${escapeHtml(value(app, 'downloads'))}</span></div></div>${features ? `<h3>${t().modalFeatures}</h3><ul class="modal-features">${features}</ul>` : ''}<div class="modal-actions">${myket}${direct}${noLink}</div></div></article></div>`;
}

document.addEventListener('click', (event) => {
  const origin = event.target instanceof Element ? event.target : event.target?.parentElement;
  const control = origin?.closest('[data-action]');
  if (!control) return;
  const action = control.dataset.action;
  if (action === 'view') { event.preventDefault(); activeView = control.dataset.view; activeCategory = 'all'; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (action === 'language') { language = language === 'fa' ? 'en' : 'fa'; localStorage.setItem('hossify-language', language); render(); }
  if (action === 'menu') document.getElementById('nav')?.classList.toggle('open');
  if (action === 'detail') document.body.insertAdjacentHTML('beforeend', modal(selected(control.dataset.id)));
  if (action === 'close-modal') document.querySelector('.modal-backdrop')?.remove();
});

document.addEventListener('change', (event) => {
  if (event.target.matches('[data-action="category"]')) { activeCategory = event.target.value; render(); }
});

render();
trackPageView();
