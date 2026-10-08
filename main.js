/**
 * MENNA GERAMY - PORTFOLIO INTERACTIVITY & LOCALIZATION ENGINE
 * Complete bilingual support (English & Arabic), dynamic theme toggle,
 * interactive typewriter animation, smooth scrollspy, and functional contact routing.
 */

// ==========================================
// 1. TRANSLATION DICTIONARY (EN & AR)
// ==========================================
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.training": "Training & Certs",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.contact": "Contact",

    // Hero Section
    "hero.status": "Data Engineering Student • Zagazig University",
    "hero.greeting": "Hello, I'm",
    "hero.rolePrefix": "Focused on",
    "hero.bio": "Third-year Computer Science student at Zagazig University with a strong interest in Data Engineering. Developing practical skills in SQL, Python, Data Warehousing, data processing, and database technologies through university study, training programs, and practical projects.",
    "hero.location": "Egypt",
    "hero.year": "Third Year • Computer Science",
    "hero.depi": "DEPI Trainee",
    "hero.btnProjects": "View My Projects",
    "hero.btnContact": "Contact Me",
    "hero.connect": "Connect:",
    "hero.photoStatus": "Data Engineering Student",
    "hero.captionSub": "Zagazig University • CS Dept",

    // About Me
    "about.tag": "Get To Know Me",
    "about.title": "About Me",
    "about.lead": "Transforming Raw Data into Organized and Useful Information.",
    "about.p1": "Hello, I'm Menna Geramy, a third-year Computer Science student at Zagazig University with a strong interest in Data Engineering.",
    "about.p2": "I am currently developing my skills in SQL, Python, Data Warehousing, data processing, and related technologies through university study, training programs, and practical projects.",
    "about.p3": "I enjoy working with data, learning new technologies, and transforming raw data into organized and useful information. My goal is to become a professional Data Engineer and continue my academic journey toward a Master's degree after graduation.",
    "about.goalTitle": "Career Goal",
    "about.goalIntro": "My goal is to become a professional Data Engineer with strong skills in:",
    "about.academicTitle": "Academic Pursuit",
    "about.academicDesc": "Third-year Computer Science student at Zagazig University, aiming for a Master's degree post-graduation.",
    "about.focusTitle": "Skill Development",
    "about.focusDesc": "Developing skills in SQL, Python, Data Warehousing, and data processing through practical projects.",
    "about.trainingTitle": "Programs & Training",
    "about.trainingDesc": "Enrolled in Digital Egypt Pioneers Initiative (DEPI - Data Engineering Track), Creativa, and DataCamp.",

    // Education
    "education.tag": "Academic Background",
    "education.title": "Education",
    "education.university": "Zagazig University",
    "education.dept": "Computer Science Department",
    "education.status": "Third Year",
    "education.deptLabel": "Faculty / Department:",
    "education.deptValue": "Computer Science",
    "education.yearLabel": "Academic Year:",
    "education.yearValue": "Third Year",
    "education.locationLabel": "Location:",
    "education.locationValue": "Egypt",
    "education.note": "Studying Computer Science at Zagazig University while advancing practical skills in Data Engineering, Data Warehousing, SQL, and Python through specialized training programs and practical projects.",

    // Skills
    "skills.tag": "Technical Capabilities",
    "skills.title": "Skills",
    "skills.deTitle": "Data Engineering",
    "skills.deSub": "Core Focus & Concepts",
    "skills.progTitle": "Programming",
    "skills.progSub": "Languages & Paradigms",
    "skills.dbTitle": "Databases",
    "skills.dbSub": "Design, Queries & Storage",
    "skills.toolsTitle": "Tools",
    "skills.toolsSub": "Version Control & Workspaces",
    "skills.intermediate": "Intermediate",
    "skills.learning": "Learning",

    // Training & Certificates
    "training.tag": "Professional Growth",
    "training.title": "Training & Certificates",
    "training.programsTitle": "Training & Programs",
    "training.depiBadge": "Featured Initiative",
    "training.depiTitle": "Digital Egypt Pioneers Initiative (DEPI)",
    "training.depiTrack": "Data Engineering Track",
    "training.creativa1": "IT & Technical Skills Development",
    "training.creativa2": "Specialized Training Program",
    "training.datacamp": "Interactive Data Learning & Practice",
    "training.webDevTitle": "Web Development Training",
    "training.webDevTrack": "Web Fundamentals (HTML, CSS, JS)",
    "training.roboticsTitle": "Robotics Training",
    "training.roboticsTrack": "Robotics and Hardware Systems",
    "training.certsTitle": "Certificates",
    "training.certSQL": "SQL Certificate",
    "training.certRobotics": "Robotics Certificate",
    "training.moreCertsTitle": "Additional Certificates",
    "training.moreCertsDesc": "Additional certificates may be added later.",

    // Projects
    "projects.tag": "Portfolio Highlights",
    "projects.title": "Projects",
    "projects.cppBadge": "Academic Project • C++ / OOP",
    "projects.cppTitle": "C++ OOP Calculator",
    "projects.cppDesc": "A calculator application developed using Object-Oriented Programming in C++.",
    "projects.cppConceptsLabel": "Concepts Used:",
    "projects.cppStructLabel": "Project Structure:",
    "projects.oopDataSub": "Encapsulation & Data",
    "projects.oopOpsSub": "Modular Logic",
    "projects.oopCalcSub": "System Coordinator",
    "projects.simBadge": "Interactive OOP Simulation",
    "projects.btnRunCalc": "Run Method",
    "projects.futureBadge": "Pipeline & Roadmap",
    "projects.futureTitle": "Future Projects",
    "projects.futureLead": "Additional Data Engineering, SQL, and data-processing projects will be added to the portfolio as they are completed.",
    "projects.upcomingTag": "Upcoming Project",
    "projects.f1Title": "Data Warehousing & Star Schema Pipeline",
    "projects.f1Desc": "Multi-layer data warehouse implementation featuring Star Schema modeling, Fact and Dimension tables, and structured data flow.",
    "projects.f2Title": "SQL Server Database & Stored Procedures",
    "projects.f2Desc": "Comprehensive relational database design, complex analytical SQL queries, and automated stored procedures on SQL Server.",
    "projects.f3Title": "Python ETL & Data Processing Pipeline",
    "projects.f3Desc": "Python-based data cleaning and transformation pipeline using Google Colab and Jupyter Notebook to convert raw datasets into analytics-ready tables.",
    "projects.hintTitle": "Modular Architecture: Ready for New Projects",
    "projects.hintDesc": "New Data Engineering projects can be added seamlessly by appending to the project grid or using the modular project card template in HTML/JS.",

    // Services
    "services.tag": "What I Offer",
    "services.title": "Services",
    "services.s1Title": "Data Cleaning",
    "services.s1Desc": "Cleaning and organizing datasets, handling missing values, removing duplicates, and preparing data for analysis.",
    "services.s2Title": "SQL & SQL Server",
    "services.s2Desc": "Writing SQL queries, creating tables, manipulating data, and working with SQL Server databases.",
    "services.s3Title": "Data Preparation",
    "services.s3Desc": "Transforming raw datasets into clean and structured data ready for analysis.",
    "services.s4Title": "Python Data Processing",
    "services.s4Desc": "Using Python, Google Colab, and Jupyter Notebook for basic data cleaning and data processing.",
    "services.hireTitle": "Available for Freelance & Projects on:",

    // Contact
    "contact.tag": "Get In Touch",
    "contact.title": "Contact",
    "contact.head": "Let's connect for opportunities, internships, or data projects.",
    "contact.desc": "Feel free to reach out directly through email, message on WhatsApp, or connect on LinkedIn and freelance platforms.",
    "contact.locationLabel": "Location",
    "contact.locationVal": "Egypt",
    "contact.profilesTitle": "Profiles & Links",
    "contact.formTitle": "Send a Message",
    "contact.formDesc": "Submit this form to send directly via Email or open on WhatsApp.",
    "contact.nameLabel": "Your Name",
    "contact.subjectLabel": "Subject / Service Needed",
    "contact.msgLabel": "Your Message",
    "contact.btnWhatsApp": "Send via WhatsApp",
    "contact.btnEmail": "Send via Email",
    "contact.optGeneral": "General Inquiry / Opportunity",

    // Footer
    "footer.sub": "Data Engineering Student"
  },

  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "عنّي",
    "nav.education": "التعليم",
    "nav.skills": "المهارات",
    "nav.training": "التدريب والشهادات",
    "nav.projects": "المشاريع",
    "nav.services": "الخدمات",
    "nav.contact": "تواصل معي",

    // Hero Section
    "hero.status": "طالبة هندسة بيانات • جامعة الزقازيق",
    "hero.greeting": "أهلاً بك، أنا",
    "hero.rolePrefix": "متخصصة في",
    "hero.bio": "طالبة بالفرقة الثالثة بقسم علوم الحاسب بجامعة الزقازيق، ولدي اهتمام وشغف كبير بمجال هندسة البيانات. أعمل على تطوير مهاراتي في SQL، وبايثون، ومستودعات البيانات، ومعالجة البيانات، وتقنيات قواعد البيانات من خلال الدراسة الجامعية والبرامج التدريبية والمشاريع العملية.",
    "hero.location": "مصر",
    "hero.year": "الفرقة الثالثة • علوم الحاسب",
    "hero.depi": "متدربة بمبادرة DEPI",
    "hero.btnProjects": "استعراض مشاريعي",
    "hero.btnContact": "تواصل معي",
    "hero.connect": "تواصل عبر:",
    "hero.photoStatus": "طالبة هندسة بيانات",
    "hero.captionSub": "جامعة الزقازيق • قسم علوم الحاسب",

    // About Me
    "about.tag": "نبذة شخصية",
    "about.title": "عنّي",
    "about.lead": "تحويل البيانات الخام إلى معلومات منظمة ونافعة ومفيدة.",
    "about.p1": "مرحباً، أنا منة جرمي، طالبة بالفرقة الثالثة في قسم علوم الحاسب بجامعة الزقازيق، ولدي اهتمام وشغف قوي بمجال هندسة البيانات.",
    "about.p2": "أقوم حالياً بتطوير مهاراتي في SQL، وبايثون، ومستودعات البيانات، ومعالجة البيانات، والتقنيات المرتبطة بها من خلال الدراسة الجامعية والبرامج التدريبية والمشاريع العملية.",
    "about.p3": "أستمتع بالعمل مع البيانات، وتعلم التقنيات الحديثة، وتحويل البيانات الخام إلى معلومات منظمة ونافعة ومفيدة. هدفي هو أن أصبح مهندسة بيانات محترفة ومواصلة مسيرتي الأكاديمية نحو الحصول على درجة الماجستير بعد التخرج.",
    "about.goalTitle": "الهدف المهني",
    "about.goalIntro": "هدفي هو أن أصبح مهندسة بيانات محترفة بمهارات قوية في:",
    "about.academicTitle": "المسار الأكاديمي",
    "about.academicDesc": "طالبة بالفرقة الثالثة علوم حاسب بجامعة الزقازيق، مع التخطيط لإكمال دراسة الماجستير بعد التخرج.",
    "about.focusTitle": "تطوير المهارات",
    "about.focusDesc": "تطوير المهارات العملية في SQL وبايثون ومستودعات البيانات ومعالجة البيانات عبر المشاريع التطبيقية.",
    "about.trainingTitle": "البرامج والتدريبات",
    "about.trainingDesc": "مشاركة في مبادرة رواد مصر الرقمية (DEPI - مسار هندسة البيانات)، وتدريبات كرياتيفا، ومنصة DataCamp.",

    // Education
    "education.tag": "المؤهل الأكاديمي",
    "education.title": "التعليم",
    "education.university": "جامعة الزقازيق",
    "education.dept": "قسم علوم الحاسب",
    "education.status": "الفرقة الثالثة",
    "education.deptLabel": "الكلية / القسم:",
    "education.deptValue": "علوم الحاسب",
    "education.yearLabel": "السنة الدراسية:",
    "education.yearValue": "الفرقة الثالثة",
    "education.locationLabel": "الموقع الجغرافي:",
    "education.locationValue": "مصر",
    "education.note": "دراسة علوم الحاسب في جامعة الزقازيق مع صقل المهارات العملية والتطبيقية في هندسة البيانات ومستودعات البيانات وSQL وبايثون من خلال برامج التدريب المتخصصة والمشاريع العملية.",

    // Skills
    "skills.tag": "القدرات التقنية",
    "skills.title": "المهارات",
    "skills.deTitle": "هندسة البيانات",
    "skills.deSub": "المفاهيم والتركيز الأساسي",
    "skills.progTitle": "البرمجة",
    "skills.progSub": "اللغات والأنماط",
    "skills.dbTitle": "قواعد البيانات",
    "skills.dbSub": "التصميم والاستعلام والتخزين",
    "skills.toolsTitle": "الأدوات",
    "skills.toolsSub": "إدارة الإصدارات وبيئات العمل",
    "skills.intermediate": "متوسط",
    "skills.learning": "قيد التعلم",

    // Training & Certificates
    "training.tag": "التطور المهني",
    "training.title": "التدريب والشهادات",
    "training.programsTitle": "التدريبات والبرامج",
    "training.depiBadge": "مبادرة ريادية",
    "training.depiTitle": "مبادرة رواد مصر الرقمية (DEPI)",
    "training.depiTrack": "مسار هندسة البيانات",
    "training.creativa1": "تطوير مهارات تكنولوجيا المعلومات والتقنية",
    "training.creativa2": "برنامج تدريبي متخصص",
    "training.datacamp": "تعلم وتطبيقات عملية في البيانات",
    "training.webDevTitle": "تدريب تطوير الويب",
    "training.webDevTrack": "أساسيات الويب (HTML, CSS, JS)",
    "training.roboticsTitle": "تدريب الروبوتات",
    "training.roboticsTrack": "أنظمة الروبوتات والعتاد الإلكتروني",
    "training.certsTitle": "الشهادات",
    "training.certSQL": "شهادة SQL",
    "training.certRobotics": "شهادة الروبوتات",
    "training.moreCertsTitle": "شهادات إضافية",
    "training.moreCertsDesc": "قد تتم إضافة شهادات إضافية لاحقاً.",

    // Projects
    "projects.tag": "أبرز الأعمال",
    "projects.title": "المشاريع",
    "projects.cppBadge": "مشروع دراسي • C++ برمجة كائنية",
    "projects.cppTitle": "آلة حاسبة بلغة C++ بأسلوب OOP",
    "projects.cppDesc": "تطبيق آلة حاسبة تم تطويره باستخدام مبادئ ومفاهيم البرمجة كائنية التوجه (OOP) بلغة C++.",
    "projects.cppConceptsLabel": "المفاهيم المستخدمة:",
    "projects.cppStructLabel": "هيكل المشروع المعماري:",
    "projects.oopDataSub": "التغليف وتخزين البيانات",
    "projects.oopOpsSub": "المنطق البرمجي والعمليات",
    "projects.oopCalcSub": "منسق ومنفذ النظام",
    "projects.simBadge": "محاكاة تفاعلية للبرمجة الكائنية",
    "projects.btnRunCalc": "تشغيل الدالة",
    "projects.futureBadge": "خارطة المشاريع القادمة",
    "projects.futureTitle": "المشاريع القادمة (Future Projects)",
    "projects.futureLead": "ستتم إضافة مشاريع إضافية في هندسة البيانات وSQL ومعالجة البيانات فور اكتمالها.",
    "projects.upcomingTag": "مشروع قيد التطوير",
    "projects.f1Title": "مستودع بيانات ونمذجة Star Schema",
    "projects.f1Desc": "بناء مستودع بيانات متكامل يطبق نمذجة Star Schema وجداول الحقائق والأبعاد (Fact & Dimension) وتدفق منظم للبيانات.",
    "projects.f2Title": "تصميم قاعدة بيانات SQL Server وإجراءات مخزنة",
    "projects.f2Desc": "تصميم معماري لقواعد البيانات العلائقية، وكتابة استعلامات SQL التحليلية، وأتمتة الإجراءات المخزنة (Stored Procedures).",
    "projects.f3Title": "مسار معالجة البيانات وتدفق ETL بلغة بايثون",
    "projects.f3Desc": "معالجة وتنظيف البيانات باستخدام بايثون وبيئات Colab و Jupyter لتحويل مجموعات البيانات الخام إلى جداول جاهزة للتحليل.",
    "projects.hintTitle": "بنية معمارية مرنة وجاهزة لإضافة مشاريعك القادمة بسهولة",
    "projects.hintDesc": "يمكنكِ إضافة مشاريع جديدة بسهولة تامة عبر تكرار كارت المشروع في HTML أو عبر ملف المشاريع.",

    // Services
    "services.tag": "ما أقدمه",
    "services.title": "الخدمات",
    "services.s1Title": "تنظيف البيانات",
    "services.s1Desc": "تنظيف وتنظيم مجموعات البيانات، ومعالجة القيم المفقودة، وحذف السجلات المكررة، وتجهيز البيانات للتحليل.",
    "services.s2Title": "SQL وقواعد بيانات SQL Server",
    "services.s2Desc": "كتابة استعلامات SQL، وإنشاء الجداول، ومعالجة البيانات والتعديل عليها، والعمل مع قواعد بيانات SQL Server.",
    "services.s3Title": "تجهيز وتحضير البيانات",
    "services.s3Desc": "تحويل مجموعات البيانات الخام إلى بيانات نظيفة ومنظمة ومهيأة للتحليل.",
    "services.s4Title": "معالجة البيانات بلغة بايثون",
    "services.s4Desc": "استخدام لغة بايثون وبيئات Google Colab و Jupyter Notebook لتنظيف ومعالجة البيانات الأساسية.",
    "services.hireTitle": "متاحة لتنفيذ المشاريع والعمل الحر عبر منصات:",

    // Contact
    "contact.tag": "تواصل معي",
    "contact.title": "تواصل معي",
    "contact.head": "يسعدني التواصل للفرص التدريبية، أو مشاريع البيانات والتعاون العملي.",
    "contact.desc": "يمكنك التواصل معي مباشرة عبر البريد الإلكتروني أو الواتساب، أو عبر لينكد إن ومنصات العمل الحر.",
    "contact.locationLabel": "الموقع",
    "contact.locationVal": "مصر",
    "contact.profilesTitle": "الملفات الشخصية والروابط",
    "contact.formTitle": "إرسال رسالة مباشرة",
    "contact.formDesc": "أرسل عبر هذا النموذج للتواصل السريع عبر البريد أو الواتساب.",
    "contact.nameLabel": "اسمك الكريم",
    "contact.subjectLabel": "الموضوع / الخدمة المطلوبة",
    "contact.msgLabel": "نص الرسالة",
    "contact.btnWhatsApp": "إرسال عبر واتساب",
    "contact.btnEmail": "إرسال عبر الإيميل",
    "contact.optGeneral": "استفسار عام / فرصة تدريب أو عمل",

    // Footer
    "footer.sub": "طالبة هندسة بيانات"
  }
};

// ==========================================
// 2. STATE MANAGEMENT & DOM SELECTION
// ==========================================
let currentLang = localStorage.getItem("mg_lang") || "en";
let currentTheme = localStorage.getItem("mg_theme") || "dark";

const langToggleBtn = document.getElementById("langToggle");
const langLabel = document.getElementById("langLabel");
const themeToggleBtn = document.getElementById("themeToggle");
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const typewriterElem = document.getElementById("typewriter");
const contactForm = document.getElementById("contactForm");
const sendWhatsAppBtn = document.getElementById("sendWhatsAppBtn");
const sendEmailBtn = document.getElementById("sendEmailBtn");
const formFeedback = document.getElementById("formFeedback");
const copyEmailBtn = document.getElementById("copyEmailBtn");
const copyPhoneBtn = document.getElementById("copyPhoneBtn");
const toastNotification = document.getElementById("toastNotification");

// ==========================================
// 3. TYPEWRITER EFFECT
// ==========================================
const typewriterPhrases = {
  en: [
    "Data Warehousing",
    "ETL / ELT",
    "SQL & SQL Server",
    "Star Schema & Data Flow",
    "Data Cleaning & Processing"
  ],
  ar: [
    "مستودعات البيانات (Data Warehousing)",
    "مفاهيم تدفق البيانات (ETL / ELT)",
    "قواعد بيانات SQL و SQL Server",
    "مخطط النجمة وتدفق البيانات (Star Schema)",
    "تنظيف ومعالجة البيانات"
  ]
};

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterTimeout = null;

function runTypewriter() {
  if (!typewriterElem) return;

  const currentList = typewriterPhrases[currentLang] || typewriterPhrases.en;
  const currentPhrase = currentList[phraseIndex % currentList.length];

  if (isDeleting) {
    typewriterElem.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterElem.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentPhrase.length) {
    typeSpeed = 1800; // Pause at full word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % currentList.length;
    typeSpeed = 400; // Pause before next word
  }

  clearTimeout(typewriterTimeout);
  typewriterTimeout = setTimeout(runTypewriter, typeSpeed);
}

// ==========================================
// 4. LANGUAGE SWITCHER
// ==========================================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("mg_lang", lang);

  const html = document.documentElement;
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  // Update button label
  if (langLabel) {
    langLabel.textContent = lang === "ar" ? "EN" : "AR";
  }

  // Update document title
  document.title = lang === "ar" 
    ? "منة جرمي | طالبة هندسة بيانات وعلوم حاسب - البورتفوليو الشخصي" 
    : "Menna Geramy | Data Engineering Student & Portfolio";

  // Translate all DOM elements with data-i18n
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Reset and restart typewriter
  charIndex = 0;
  isDeleting = false;
  runTypewriter();
}

if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    const nextLang = currentLang === "en" ? "ar" : "en";
    setLanguage(nextLang);
  });
}

// ==========================================
// 5. THEME SWITCHER
// ==========================================
function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("mg_theme", theme);
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });
}

// ==========================================
// 6. MOBILE MENU & NAVIGATION SCROLLSPY
// ==========================================
if (hamburgerBtn && navMenu) {
  hamburgerBtn.addEventListener("click", () => {
    const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
    hamburgerBtn.setAttribute("aria-expanded", !isExpanded);
    navMenu.classList.toggle("active");
  });

  // Close menu on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// Active Nav highlight on scroll
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY + 130;
  const sections = document.querySelectorAll("section[id]");

  sections.forEach((sec) => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (scrollPosition >= top && scrollPosition < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("data-nav") === id) {
          link.classList.add("active");
        }
      });
    }
  });
});

// ==========================================
// 7. TOAST NOTIFICATIONS & COPY ACTIONS
// ==========================================
function showToast(message) {
  if (!toastNotification) return;
  toastNotification.textContent = message;
  toastNotification.classList.add("show");

  setTimeout(() => {
    toastNotification.classList.remove("show");
  }, 2600);
}

if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("mhamg7589@gmail.com").then(() => {
      showToast(currentLang === "ar" ? "تم نسخ البريد الإلكتروني بنجاح!" : "Email copied to clipboard!");
    }).catch(() => {
      showToast("mhamg7589@gmail.com");
    });
  });
}

if (copyPhoneBtn) {
  copyPhoneBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("+201008684319").then(() => {
      showToast(currentLang === "ar" ? "تم نسخ رقم الواتساب بنجاح!" : "WhatsApp number copied to clipboard!");
    }).catch(() => {
      showToast("+201008684319");
    });
  });
}

// ==========================================
// 8. INTERACTIVE CONTACT FORM ROUTING
// ==========================================
function getFormData() {
  const name = document.getElementById("senderName").value.trim();
  const subject = document.getElementById("senderSubject").value;
  const message = document.getElementById("senderMessage").value.trim();
  return { name, subject, message };
}

if (sendWhatsAppBtn) {
  sendWhatsAppBtn.addEventListener("click", () => {
    const { name, subject, message } = getFormData();
    if (!name || !message) {
      if (formFeedback) {
        formFeedback.style.color = "#f43f5e";
        formFeedback.textContent = currentLang === "ar" 
          ? "يرجى كتابة الاسم والرسالة أولاً." 
          : "Please enter your name and message first.";
      }
      return;
    }

    const whatsappText = `Hello Menna, my name is ${encodeURIComponent(name)}.%0A*Subject:* ${encodeURIComponent(subject)}%0A*Message:* ${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/201008684319?text=${whatsappText}`;
    window.open(whatsappUrl, "_blank");

    if (formFeedback) {
      formFeedback.style.color = "#10b981";
      formFeedback.textContent = currentLang === "ar" 
        ? "جارٍ فتح واتساب لإرسال رسالتك..." 
        : "Opening WhatsApp to send your message...";
    }
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const { name, subject, message } = getFormData();
    if (!name || !message) return;

    const emailSubject = encodeURIComponent(`Portfolio Inquiry: ${subject} from ${name}`);
    const emailBody = encodeURIComponent(`Name: ${name}\nSubject: ${subject}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:mhamg7589@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoUrl;

    if (formFeedback) {
      formFeedback.style.color = "#10b981";
      formFeedback.textContent = currentLang === "ar" 
        ? "جارٍ فتح تطبيق البريد الإلكتروني..." 
        : "Launching your email client...";
    }
  });
}

// ==========================================
// 8.5. C++ OOP CALCULATOR INTERACTIVE SIMULATOR
// ==========================================
const calcRunBtn = document.getElementById("calcRunBtn");
if (calcRunBtn) {
  calcRunBtn.addEventListener("click", () => {
    const num1Raw = document.getElementById("calcNum1").value;
    const num2Raw = document.getElementById("calcNum2").value;
    const op = document.getElementById("calcOp").value;
    const outputElem = document.getElementById("calcOutput");

    const num1 = parseFloat(num1Raw) || 0;
    const num2 = parseFloat(num2Raw) || 0;

    let result;
    let isDivZero = false;

    if (op === "+") {
      result = num1 + num2;
    } else if (op === "-") {
      result = num1 - num2;
    } else if (op === "*") {
      result = num1 * num2;
    } else if (op === "/") {
      if (num2 === 0) {
        isDivZero = true;
      } else {
        result = +(num1 / num2).toFixed(4);
      }
    }

    if (isDivZero) {
      outputElem.innerHTML = `
        <div class="terminal-line"><span class="t-scope">[BaseData]</span> Encapsulated num1 = ${num1}, num2 = 0</div>
        <div class="terminal-line"><span class="t-scope">[Operations]</span> Execution: divide(${num1}, 0)</div>
        <div class="terminal-line t-error"><span class="t-scope">[Calculator]</span> Error: Division by zero caught in Operations class!</div>
      `;
    } else {
      outputElem.innerHTML = `
        <div class="terminal-line"><span class="t-scope">[BaseData]</span> Encapsulating num1 = ${num1}, num2 = ${num2}</div>
        <div class="terminal-line"><span class="t-scope">[Operations]</span> Executing modular method: ${num1} ${op} ${num2}</div>
        <div class="terminal-line t-result"><span class="t-scope">[Calculator]</span> Output Result = <strong>${result}</strong></div>
      `;
    }
  });
}

// ==========================================
// 9. INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  setTheme(currentTheme);
  setLanguage(currentLang);
});
