(() => {
  "use strict";

  const translations = {
    es: {
      navAbout: "Sobre mí",
      navServices: "Servicios",
      navResources: "Recursos",
      navContact: "Contacto",
      book: "Agendá tu asesoría",
      heroEyebrow: "Contadora Pública (UBA) · Especialista en Finanzas",
      heroTitle: "Entendé tus números.<br />Tomá mejores decisiones.<br /><em>Hacé crecer tu negocio.</em>",
      heroDescription:
        "Ordenamos las finanzas y la gestión contable-impositiva de tu empresa para que decidas con claridad, calma y una estrategia que se sostenga.",
      credential: "Matrícula CPCE CABA · Tomo 463 · Folio 69",
      viewServices: "Conocé mis servicios",
      value1: "Estrategia clara, sin jerga",
      value2: "Acompañamiento cercano",
      value3: "Procesos accionables",
      value4: "Mirada de negocio real",
      aboutEyebrow: "Sobre mí",
      aboutTitle: "Hola, soy Marisa.",
      aboutLead:
        "Contadora Pública, consultora y aliada de emprendedoras y emprendedores que quieren sentir más calma al tomar decisiones financieras.",
      aboutP1:
        "Durante años vi que muchas personas tomaban decisiones importantes sin tener la información ordenada, cargando una sensación de culpa que no merecían. Mi trabajo empezó a tomar otra forma: no solo hacer números correctos, sino volverlos útiles, cercanos y posibles de sostener en el día a día.",
      quote: "“La claridad financiera no debería quitarte energía: debería devolvértela.”",
      aboutP2:
        "Hoy acompaño procesos de orden y crecimiento con una mirada estratégica, siempre cuidando que los números tengan sentido dentro de la vida real de cada negocio.",
      credentialsTitle: "Formación y credenciales",
      cred1: "Contadora Pública — Universidad de Buenos Aires (UBA)",
      cred2: "Matrícula: Tomo 463 – Folio 69",
      cred3: "Especialización en Finanzas",
      aboutP3:
        "Una trayectoria que une rigor contable con mirada de negocio. Especial atención a los negocios de turismo, sus temporadas y su ritmo propio.",
      approachTitle: "Mi forma de acompañar",
      approach: "Simplicidad con rigor. Lo importante, explicado con claridad.",
      viewTrajectory: "Conocé mi trayectoria profesional completa",
      imageNote: "Finanzas con foco humano",
      servicesEyebrow: "Servicios",
      servicesTitle: "Finanzas y gestión contable que se traducen en decisiones claras.",
      service1Title: "Diagnóstico y orden financiero-contable",
      service1Text:
        "Una fotografía clara de tu situación actual, conciliaciones y un mapa de prioridades para saber por dónde empezar.",
      service2Title: "Gestión impositiva y contable mensual",
      service2Text:
        "IVA, IIBB, retenciones, presentaciones ante ARCA, AGIP y ARBA, e información fiscal preparada a tiempo.",
      service3Title: "Liquidación de sueldos y cargas sociales",
      service3Text:
        "Liquidaciones mensuales, SAC, vacaciones, altas y bajas, con una gestión ordenada de sindicatos y cargas sociales.",
      service4Title: "Reportes, balances y acompañamiento continuo",
      service4Text:
        "Balances, reportes financieros y control operativo de clientes y proveedores para empresas que necesitan mirada de negocio.",
      consult: "Consultar",
      resourcesEyebrow: "Recursos gratuitos",
      resourcesTitle: "Sumate a la comunidad",
      resourcesDescription:
        "En el grupo de WhatsApp comparto recursos útiles de finanzas personales y las novedades que voy publicando. Un espacio cercano para acompañarte.",
      whatsappCta: "Unirme al grupo de WhatsApp",
      whatsappAria: "Unirme al grupo de WhatsApp de Marisa Mancuello",
      resourcesNote: "Solo recursos y novedades. Sin spam.",
      contactEyebrow: "Empecemos",
      contactTitle: "Cuando estés listo/a, empecemos por una conversación.",
      contactDescription:
        "30 minutos sin compromiso. Revisamos tu situación y vemos cómo puedo ayudarte de forma concreta.",
      footerRole: "Contadora Pública | Especialista en Finanzas",
      footerCredential: "Matrícula Tomo 463 · Folio 69",
      footerText: "Finanzas claras para emprendedores y empresas que quieren crecer con orden.",
      backToHome: "Volver a Sobre Mí",
      trajEyebrow: "Perfil Profesional",
      trajName: "Marisa Raquel Mancuello",
      trajSub: "Contadora Pública (UBA) · Matriculada en CABA — Tomo 463, Folio 69",
      trajBio:
        "Contadora Pública con más de 10 años de trayectoria en administración, contabilidad, impuestos y finanzas. Mi diferencial no es solamente ejecutar tareas: me especializo en detectar inconsistencias, optimizar procesos y transformar la información contable en una herramienta estratégica para la toma de decisiones. Aporto enfoque analítico, criterio profesional y una orientación permanente a la mejora continua de los procesos administrativos, impositivos y financieros.",
    },
    en: {
      navAbout: "About me",
      navServices: "Services",
      navResources: "Resources",
      navContact: "Contact",
      book: "Book your session",
      heroEyebrow: "Public Accountant (UBA) · Finance Specialist",
      heroTitle: "Understand your numbers.<br />Make better decisions.<br /><em>Grow your business.</em>",
      heroDescription:
        "We organize your finances and tax-accounting management so you can decide with clarity, calm and a strategy that lasts.",
      credential: "License CPCE CABA · Volume 463 · Folio 69",
      viewServices: "See my services",
      value1: "Clear strategy, no jargon",
      value2: "Close accompaniment",
      value3: "Actionable processes",
      value4: "Real business perspective",
      aboutEyebrow: "About me",
      aboutTitle: "Hi, I'm Marisa.",
      aboutLead:
        "Public Accountant, consultant and ally of entrepreneurs who want more calm when making financial decisions.",
      aboutP1:
        "For years I saw people making important decisions without ordered information, carrying a sense of guilt they didn't deserve. My work started to take another shape: not only producing correct numbers, but making them useful, close and sustainable day to day.",
      quote: "“Financial clarity shouldn't drain your energy — it should give it back.”",
      aboutP2:
        "Today I support order and growth processes with a strategic eye, always making sure the numbers make sense in the real life of each business.",
      credentialsTitle: "Education & credentials",
      cred1: "Public Accountant — University of Buenos Aires (UBA)",
      cred2: "License: Volume 463 – Folio 69",
      cred3: "Specialization in Finance",
      aboutP3:
        "A path that joins accounting rigor with a business mindset. Special attention to tourism businesses, their seasons and their own rhythm.",
      approachTitle: "How I work with you",
      approach: "Simplicity with rigor. What matters, explained with clarity.",
      viewTrajectory: "See my full professional background",
      imageNote: "Finance with a human focus",
      servicesEyebrow: "Services",
      servicesTitle: "Finance and accounting management that turn into clear decisions.",
      service1Title: "Financial-accounting diagnosis & order",
      service1Text:
        "A clear snapshot of your current situation, reconciliations and a priority map so you know where to start.",
      service2Title: "Monthly tax & accounting management",
      service2Text:
        "VAT, gross income tax, withholdings, filings with tax agencies, and fiscal information ready on time.",
      service3Title: "Payroll & social security",
      service3Text:
        "Monthly payroll, bonuses, vacations, hires and terminations, with orderly management of unions and social charges.",
      service4Title: "Reports, balance sheets & ongoing support",
      service4Text:
        "Balance sheets, financial reports and operational control of clients and suppliers for companies that need a business view.",
      consult: "Inquire",
      resourcesEyebrow: "Free resources",
      resourcesTitle: "Join the community",
      resourcesDescription:
        "In the WhatsApp group I share useful personal finance resources and the updates I publish. A close space to support you.",
      whatsappCta: "Join the WhatsApp group",
      whatsappAria: "Join Marisa Mancuello's WhatsApp group",
      resourcesNote: "Only resources and updates. No spam.",
      contactEyebrow: "Let's begin",
      contactTitle: "When you're ready, let's start with a conversation.",
      contactDescription:
        "30 minutes, no commitment. We review your situation and see how I can help you concretely.",
      footerRole: "Public Accountant | Finance Specialist",
      footerCredential: "License Volume 463 · Folio 69",
      footerText: "Clear finances for entrepreneurs and companies that want to grow with order.",
      backToHome: "Back to About me",
      trajEyebrow: "Professional Profile",
      trajName: "Marisa Raquel Mancuello",
      trajSub: "Public Accountant (UBA) · Licensed in CABA — Volume 463, Folio 69",
      trajBio:
        "Public Accountant with more than 10 years of experience in administration, accounting, taxes and finance. My differential is not only executing tasks: I specialize in detecting inconsistencies, optimizing processes and turning accounting information into a strategic tool for decision-making. I bring analytical focus, professional judgment and a permanent orientation toward continuous improvement of administrative, tax and financial processes.",
    },
  };

  const storageKey = "mm-lang";
  let currentLang = localStorage.getItem(storageKey) || "es";

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.es;
    currentLang = lang;
    localStorage.setItem(storageKey, lang);
    document.documentElement.lang = lang === "en" ? "en" : "es-AR";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });

    const toggle = document.querySelector(".language-toggle");
    if (toggle) {
      toggle.textContent = lang === "es" ? "EN" : "ES";
      toggle.setAttribute(
        "aria-label",
        lang === "es" ? "Switch to English" : "Cambiar a español"
      );
    }
  }

  function initMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menú");
      });
    });
  }

  function initLanguageToggle() {
    const toggle = document.querySelector(".language-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      applyLanguage(currentLang === "es" ? "en" : "es");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);
    initMenu();
    initLanguageToggle();
  });
})();
