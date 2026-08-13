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
      heroDescription: "Acompañamos tus finanzas y la gestión contable-impositiva para que puedas decidir con más claridad, más calma y una estrategia que se sostenga en el tiempo.",
      viewServices: "Conocé mis servicios",
      value1: "Estrategia clara, sin jerga",
      value2: "Acompañamiento cercano",
      value3: "Procesos accionables",
      value4: "Mirada de negocio real",
      aboutEyebrow: "Sobre mí",
      aboutTitle: "Hola, soy Marisa.",
      aboutLead: "Contadora Pública, consultora y compañera de camino de quienes quieren tomar decisiones financieras con más calma y menos peso encima.",
      aboutP1: "No siempre fue fácil. Aprendí —en la facultad, en estudios contables y en empresas reales— que los números pueden <strong>ordenar una vida</strong>… o volverse una fuente constante de ansiedad cuando nadie los traduce a algo humano.",
      aboutP2: "Vi a emprendedoras y emprendedores cargar culpas que no les correspondían, postergar decisiones importantes y sentir que “no sabían de plata”, cuando en realidad nadie les había ofrecido un mapa claro. Esa experiencia me cambió el oficio.",
      aboutP3: "Dejé de pensar solo en cumplir y empecé a construir otra forma de acompañar: números correctos, sí, pero también <strong>útiles, cercanos y posibles de sostener</strong> en el día a día. Hoy trabajo para que la información financiera devuelva energía en lugar de quitarla.",
      quote: "“La claridad financiera no debería quitarte energía: debería devolvértela.”",
      aboutP4: "Acompaño procesos de orden y crecimiento con mirada estratégica, cuidando siempre que los números tengan sentido dentro de la vida real de cada negocio —con especial atención a emprendimientos y a los ritmos propios del turismo.",
      aboutP5: "Si estás buscando alguien que te explique sin jerga, te ordene sin juicio y te acompañe con cercanía profesional, este puede ser un buen lugar para empezar.",
      viewTrajectory: "Conocé mi trayectoria profesional completa",
      imageNote: "Finanzas con foco humano",
      servicesEyebrow: "Servicios",
      servicesTitle: "Finanzas y gestión contable pensadas para que decidas con más claridad.",
      service1Title: "Diagnóstico y orden financiero-contable",
      service1Text: "Una foto clara de tu situación actual, conciliaciones y un mapa de prioridades para saber, con calma, por dónde empezar.",
      service2Title: "Gestión impositiva y contable mensual",
      service2Text: "IVA, IIBB, retenciones y presentaciones ante ARCA, AGIP y ARBA, con la información fiscal lista cuando la necesitás.",
      service3Title: "Liquidación de sueldos y cargas sociales",
      service3Text: "Liquidaciones mensuales, SAC, vacaciones, altas y bajas, con una gestión ordenada y previsible de sindicatos y cargas sociales.",
      service4Title: "Reportes, balances y acompañamiento continuo",
      service4Text: "Balances, reportes y control de clientes y proveedores, con una mirada de negocio que te ayude a crecer con orden.",
      consult: "Consultar",
      resourcesEyebrow: "Recursos gratuitos",
      resourcesTitle: "Sumate a la comunidad",
      resourcesDescription: "En el grupo de WhatsApp comparto recursos útiles de finanzas personales y las novedades que voy publicando. Un espacio cercano, para acompañarte sin ruido.",
      whatsappCta: "Unirme al grupo de WhatsApp",
      whatsappAria: "Unirme al grupo de WhatsApp de Marisa Mancuello",
      resourcesNote: "Solo recursos y novedades. Sin spam.",
      contactEyebrow: "Empecemos",
      contactTitle: "Cuando te sientas listo o lista, empecemos por una conversación.",
      contactDescription: "30 minutos, sin compromiso. Revisamos juntos tu situación y vemos cómo puedo acompañarte de forma concreta.",
      footerRole: "Contadora Pública | Especialista en Finanzas",
      footerCredential: "Matrícula Tomo 463 · Folio 69",
      footerText: "Finanzas claras para emprendedores y empresas que quieren crecer con orden.",
      backToHome: "Volver a Sobre mí",
      backToSite: "← Volver al sitio",
      trajEyebrow: "Perfil profesional",
      trajName: "Marisa Raquel Mancuello",
      trajSub: "Contadora Pública (UBA) · Matriculada en CABA — Tomo 463, Folio 69",
      trajBio: "Contadora Pública con más de 10 años de trayectoria en administración, contabilidad, impuestos y finanzas. Me especializo en detectar inconsistencias, optimizar procesos y transformar la información contable en una herramienta estratégica para la toma de decisiones.",
      expEyebrow: "Trayectoria laboral",
      expTitle: "Experiencia profesional",
      impactLabel: "Impacto",
      job1Dates: "Abr 2024 — Actualidad",
      job1Title: "Analista Sr. Administrativo / Contable",
      job1Desc: "Al incorporarme, encontré procesos contables enfocados solo en el cumplimiento mensual, con inconsistencias arrastradas de gestiones anteriores. Lideré el área contable y administrativa: regularicé obligaciones pendientes, corregí errores de categorización tributaria, documenté y estandaricé procedimientos, y elaboré reportes financieros para gerencia.",
      job1Impact: "Menor riesgo fiscal, mejor control interno e información confiable para la dirección.",
      job2Dates: "May 2023 — Abr 2024",
      job2Title: "Analista Administrativo / Contable",
      job2Desc: "Lideré el área contable, administrativa e impositiva en una empresa importadora de alto volumen. Estuve a cargo del circuito de carga, control documental y conciliación de cuentas corrientes de clientes y proveedores locales e internacionales; optimicé expedientes regulatorios y coordiné con el estudio externo la información para cierres mensuales y anuales.",
      job2Impact: "Menores tiempos de procesamiento y mayor confiabilidad de la información para la gestión.",
      job3Dates: "Ago 2022 — May 2023",
      job3Title: "Analista Impositivo / Contable",
      job3Desc: "Encargada operativa del estudio contable: liderazgo del equipo, capacitación técnica de nuevos integrantes y gestión integral de una cartera diversificada de clientes. Ejecuté liquidaciones simultáneas de impuestos, sueldos y cargas sociales bajo calendarios estrictos, e impulsé circuitos internos más ágiles.",
      job3Impact: "Mayor eficiencia del equipo y mejor calidad de servicio para cada cliente.",
      skillsEyebrow: "Competencias",
      skillsTitle: "Formación, idiomas y habilidades",
      eduTitle: "Formación académica",
      langTitle: "Idiomas",
      langEs: "Español:",
      langEsLevel: "Nativo",
      langPt: "Portugués:",
      langPtLevel: "Intermedio",
      skillsListTitle: "Áreas de especialidad",
      skill1: "Gestión financiera: cierres, conciliaciones, análisis.",
      skill2: "Impuestos: IVA, Ingresos Brutos, Monotributo.",
      skill3: "Control: auditoría interna, riesgos, procesos."
    },
    en: {
      navAbout: "About me",
      navServices: "Services",
      navResources: "Resources",
      navContact: "Contact",
      book: "Book your session",
      heroEyebrow: "Public Accountant (UBA) · Finance Specialist",
      heroTitle: "Understand your numbers.<br />Make better decisions.<br /><em>Grow your business.</em>",
      heroDescription: "We support your finances and tax-accounting management so you can decide with more clarity, more calm, and a strategy that lasts over time.",
      viewServices: "See my services",
      value1: "Clear strategy, no jargon",
      value2: "Close accompaniment",
      value3: "Actionable processes",
      value4: "Real business perspective",
      aboutEyebrow: "About me",
      aboutTitle: "Hi, I'm Marisa.",
      aboutLead: "Public Accountant, consultant and walking companion for people who want to make financial decisions with more calm and less weight on their shoulders.",
      aboutP1: "It wasn't always easy. I learned —at university, in accounting firms and in real companies— that numbers can <strong>organize a life</strong>… or become a constant source of anxiety when nobody translates them into something human.",
      aboutP2: "I saw entrepreneurs carry guilt that wasn't theirs, postpone important decisions and feel they “weren't good with money”, when in reality nobody had offered them a clear map. That experience changed how I practice.",
      aboutP3: "I stopped thinking only about compliance and started building another way of supporting people: correct numbers, yes, but also <strong>useful, close and sustainable</strong> day to day. Today I work so that financial information gives energy back instead of taking it away.",
      quote: "“Financial clarity shouldn't drain your energy — it should give it back.”",
      aboutP4: "I support order and growth processes with a strategic eye, always making sure the numbers make sense in the real life of each business —with special attention to entrepreneurs and the rhythms of tourism.",
      aboutP5: "If you're looking for someone who explains without jargon, brings order without judgment and supports you with professional closeness, this may be a good place to start.",
      viewTrajectory: "See my full professional background",
      imageNote: "Finance with a human focus",
      servicesEyebrow: "Services",
      servicesTitle: "Finance and accounting management designed so you can decide with more clarity.",
      service1Title: "Financial-accounting diagnosis & order",
      service1Text: "A clear snapshot of your current situation, reconciliations and a priority map so you know, with calm, where to start.",
      service2Title: "Monthly tax & accounting management",
      service2Text: "VAT, gross income tax, withholdings and filings with tax agencies, with fiscal information ready when you need it.",
      service3Title: "Payroll & social security",
      service3Text: "Monthly payroll, bonuses, vacations, hires and terminations, with orderly and predictable management of unions and social charges.",
      service4Title: "Reports, balance sheets & ongoing support",
      service4Text: "Balance sheets, reports and control of clients and suppliers, with a business view that helps you grow with order.",
      consult: "Inquire",
      resourcesEyebrow: "Free resources",
      resourcesTitle: "Join the community",
      resourcesDescription: "In the WhatsApp group I share useful personal finance resources and the updates I publish. A close space to support you without noise.",
      whatsappCta: "Join the WhatsApp group",
      whatsappAria: "Join Marisa Mancuello's WhatsApp group",
      resourcesNote: "Only resources and updates. No spam.",
      contactEyebrow: "Let's begin",
      contactTitle: "When you feel ready, let's start with a conversation.",
      contactDescription: "30 minutes, no commitment. We review your situation together and see how I can support you in a concrete way.",
      footerRole: "Public Accountant | Finance Specialist",
      footerCredential: "License Volume 463 · Folio 69",
      footerText: "Clear finances for entrepreneurs and companies that want to grow with order.",
      backToHome: "Back to About me",
      backToSite: "← Back to the site",
      trajEyebrow: "Professional profile",
      trajName: "Marisa Raquel Mancuello",
      trajSub: "Public Accountant (UBA) · Licensed in CABA — Volume 463, Folio 69",
      trajBio: "Public Accountant with more than 10 years of experience in administration, accounting, taxes and finance. I specialize in detecting inconsistencies, optimizing processes and turning accounting information into a strategic tool for decision-making.",
      expEyebrow: "Work history",
      expTitle: "Professional experience",
      impactLabel: "Impact",
      job1Dates: "Apr 2024 — Present",
      job1Title: "Sr. Administrative / Accounting Analyst",
      job1Desc: "When I joined, I found accounting processes focused only on monthly compliance, with inconsistencies carried over from previous management. I led the accounting and administrative area: regularized pending obligations, corrected tax categorization errors, documented and standardized procedures, and prepared financial reports for management.",
      job1Impact: "Lower tax risk, stronger internal control and reliable information for leadership.",
      job2Dates: "May 2023 — Apr 2024",
      job2Title: "Administrative / Accounting Analyst",
      job2Desc: "I led the accounting, administrative and tax area in a high-volume import company. I handled document loading and control, reconciliation of local and international client and supplier accounts, optimized regulatory filings and coordinated with the external firm for monthly and annual closings.",
      job2Impact: "Shorter processing times and more reliable information for management.",
      job3Dates: "Aug 2022 — May 2023",
      job3Title: "Tax / Accounting Analyst",
      job3Desc: "Operational lead of the accounting firm: team leadership, technical training of new members and full management of a diversified client portfolio. I ran simultaneous tax, payroll and social security settlements under strict deadlines, and drove leaner internal workflows.",
      job3Impact: "Greater team efficiency and better service quality for each client.",
      skillsEyebrow: "Competencies",
      skillsTitle: "Education, languages and skills",
      eduTitle: "Academic background",
      langTitle: "Languages",
      langEs: "Spanish:",
      langEsLevel: "Native",
      langPt: "Portuguese:",
      langPtLevel: "Intermediate",
      skillsListTitle: "Areas of expertise",
      skill1: "Financial management: closings, reconciliations, analysis.",
      skill2: "Taxes: VAT, gross income tax, simplified regime.",
      skill3: "Control: internal audit, risk, processes."
    }
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
      toggle.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
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
