# How to Add New Projects in the Future / كيفية إضافة مشاريع جديدة مستقبلاً

Welcome, Menna! This guide explains how you can easily add your future Data Engineering, SQL, and Python projects to your portfolio.

---

## 🇺🇸 English Guide

You can add a new project in **less than 2 minutes** using either of the two methods below:

### Method 1: Duplicate a Project Card in `index.html` (Recommended)

1. Open `index.html` in your code editor.
2. Locate the `<div class="projects-grid">` section (around line 520).
3. Copy and paste the project card template below directly inside `<div class="projects-grid">`:

```html
<article class="project-card">
  <div class="project-banner">
    <div class="banner-status-tag">
      <span class="code-dot"></span>
      <span>Completed Project • Data Engineering</span>
    </div>
    <span class="scope-tag">Data Warehousing</span>
  </div>

  <div class="project-content">
    <div class="project-title-row">
      <h3 class="project-title">Your Project Title Here</h3>
      <a href="https://github.com/menna753-afk/your-repo-name" target="_blank" rel="noopener noreferrer" class="project-link-badge">
        <span>GitHub</span> ↗
      </a>
    </div>
    
    <p class="project-desc">
      Write a clear 1-2 sentence description explaining what this project does, the dataset used, and the pipeline architecture.
    </p>

    <!-- Concepts Used -->
    <div class="project-structure-box">
      <span class="tech-label">Concepts Used:</span>
      <div class="tech-pills-wrap">
        <span class="tech-pill highlight-pill">ETL / ELT</span>
        <span class="tech-pill highlight-pill">Star Schema</span>
        <span class="tech-pill">SQL Server</span>
        <span class="tech-pill">Python</span>
      </div>
    </div>

    <!-- Project Pipeline Flow -->
    <div class="project-structure-box">
      <span class="tech-label">Data Flow:</span>
      <div class="structure-flow">
        <span class="struct-node">Raw Data</span>
        <span class="flow-sym">→</span>
        <span class="struct-node">Cleaned Data</span>
        <span class="flow-sym">→</span>
        <span class="struct-node">Data Warehouse</span>
      </div>
    </div>
  </div>
</article>
```

4. Save the file and refresh your browser. Your new project will appear with the same glowing styling, animations, and responsive layout!

---

## 🇪🇬 Arabic Guide / الدليل باللغة العربية

أهلاً بكِ يا منة! يمكنكِ إضافة أي مشروع جديد في هندسة البيانات أو SQL أو بايثون بكل سهولة عبر الخطوات التالية:

### الطريقة: نسخ كارت المشروع ولصقه في `index.html`

1. افتحي ملف `index.html` في محرر الأكواد (مثل VS Code).
2. ابحثي عن قسم المشاريع `<div class="projects-grid">`.
3. انسخي القالب أعلاه والصقيه داخل `<div class="projects-grid">`.
4. قومي بتعديل اسم المشروع، والوصف، ورابط الـ GitHub الخاص بكِ، والتقنيات المستخدمة.
5. احفظي الملف، وسيظهر مشروعك فوراً بنفس التصميم العصري الجذاب والمتوافق مع جميع الشاشات.

---

© 2026 Menna Geramy - Data Engineering Portfolio
