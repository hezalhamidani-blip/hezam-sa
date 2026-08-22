# Portfolio — حزام عبدالله الحميداني

موقع Portfolio شخصي مبني بـ React + Vite + Tailwind CSS.

---

## 🚀 تشغيل المشروع

```bash
# 1. تثبيت الحزم
npm install

# 2. تشغيل الموقع محلياً
npm run dev

# 3. فتح المتصفح على
http://localhost:5173
```

---

## 📁 هيكل الملفات

```
src/
├── App.jsx                  ← المكوّن الجذري (يجمع كل الأقسام)
├── main.jsx                 ← نقطة الدخول
├── index.css                ← الأنماط العامة والرسوم المتحركة
└── components/
    ├── Navbar.jsx           ← شريط التنقل
    ├── Hero.jsx             ← القسم الرئيسي (Hero)
    ├── Expertise.jsx        ← مجالات الخبرة
    ├── Projects.jsx         ← نماذج الأعمال
    ├── Achievements.jsx     ← الإنجازات
    ├── Stats.jsx            ← الإحصائيات
    ├── Certifications.jsx   ← الشهادات والرخص
    ├── Contact.jsx          ← قسم التواصل
    └── Footer.jsx           ← التذييل
```

---

## ✏️ كيف تعدّل البيانات

### تغيير الاسم أو المسمى الوظيفي
افتح `src/components/Hero.jsx` وعدّل كائن `INFO` في أعلى الملف.

### تغيير روابط LinkedIn / السيرة الذاتية
في `Hero.jsx` و`Contact.jsx` — ابحث عن `cvUrl` و`linkedIn` وأضف روابطك.

### إضافة مشروع جديد
افتح `Projects.jsx` وأضف كائنًا جديدًا في مصفوفة `projects`.

### تغيير الألوان
افتح `tailwind.config.js` وعدّل القيم في قسم `colors`.

---

## 🎨 لوحة الألوان

| الاسم | الكود |
|---|---|
| primary | #0F3D2E |
| secondary | #2F6B4F |
| lightbg | #EEF4F0 |
| mainbg | #F8F9F7 |
| accent | #86C9A2 |

---

## 🌐 نشر الموقع مجاناً

### على Netlify (الأسهل):
```bash
npm run build
# ارفع مجلد dist/ على netlify.com/drop
```

### على GitHub Pages:
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```
npm install
npm run dev