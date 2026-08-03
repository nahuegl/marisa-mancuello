const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const translations = {
  es: {
    navAbout: 'Sobre mí', navServices: 'Servicios', navContact: 'Contacto', book: 'Agendá tu asesoría',
    heroEyebrow: 'Contadora Pública (UBA) · Especialista en Finanzas',
    heroTitle: 'Entendé tus números.<br>Tomá mejores decisiones.<br><em>Hacé crecer tu negocio.</em>',
    heroDescription: 'Ordenamos las finanzas y la gestión contable-impositiva de tu empresa para que decidas con claridad, calma y una estrategia que se sostenga.',
    credential: 'Matrícula CPCE CABA · Tomo 463 · Folio 69', viewServices: 'Conocé mis servicios',
    value1: 'Estrategia clara, sin jerga', value2: 'Acompañamiento cercano', value3: 'Procesos accionables', value4: 'Mirada de negocio real', imageNote: 'Finanzas con foco humano',
    aboutEyebrow: 'Sobre mí', aboutTitle: 'Hola, soy Marisa.',
    aboutLead: 'Contadora Pública, consultora y aliada de emprendedoras y emprendedores que quieren sentir más calma al tomar decisiones financieras.',
    aboutP1: 'Durante años vi que muchas personas tomaban decisiones importantes sin tener la información ordenada, cargando una sensación de culpa que no merecían. Mi trabajo empezó a tomar otra forma: no solo hacer números correctos, sino volverlos útiles, cercanos y posibles de sostener en el día a día.',
    quote: '“La claridad financiera no debería quitarte energía: debería devolvértela.”',
    aboutP2: 'Hoy acompaño procesos de orden y crecimiento con una mirada estratégica, siempre cuidando que los números tengan sentido dentro de la vida real de cada negocio.',
    credentialsTitle: 'Formación y credenciales', cred1: 'Contadora Pública — Universidad de Buenos Aires (UBA)', cred2: 'Matrícula: Tomo 463 – Folio 69', cred3: 'Especialización en Finanzas',
    aboutP3: 'Una trayectoria que une rigor contable con mirada de negocio. Especial atención a los negocios de turismo, sus temporadas y su ritmo propio.', approachTitle: 'Mi forma de acompañar', approach: 'Simplicidad con rigor. Lo importante, explicado con claridad.',
    servicesEyebrow: 'Servicios', servicesTitle: 'Finanzas y gestión contable que se traducen en decisiones claras.', consult: 'Consultar',
    service1Title: 'Diagnóstico y orden financiero-contable', service1Text: 'Una fotografía clara de tu situación actual, conciliaciones y un mapa de prioridades para saber por dónde empezar.',
    service2Title: 'Gestión impositiva y contable mensual', service2Text: 'IVA, IIBB, retenciones, presentaciones ante ARCA, AGIP y ARBA, e información fiscal preparada a tiempo.',
    service3Title: 'Liquidación de sueldos y cargas sociales', service3Text: 'Liquidaciones mensuales, SAC, vacaciones, altas y bajas, con una gestión ordenada de sindicatos y cargas sociales.',
    service4Title: 'Reportes, balances y acompañamiento continuo', service4Text: 'Balances, reportes financieros y control operativo de clientes y proveedores para empresas que necesitan mirada de negocio.',
    resourcesEyebrow: 'Recursos gratuitos', resourcesTitle: 'Recursos para ordenar tus finanzas', resourcesDescription: 'Herramientas prácticas que podés descargar y empezar a usar hoy.',
    resource1Type: 'Guía práctica · PDF', resource1Title: 'Ebook: Dos Cajas, Un Negocio', resource1Text: 'La guía definitiva para separar tus finanzas personales de las de tu negocio y finalmente entender tus impuestos.', downloadEbook: 'Descargar ebook',
    resource2Type: 'Para empezar · PDF', resource2Title: 'Checklist: 7 Acciones para Empezar Esta Semana', resource2Text: 'Acciones concretas para ordenar tus finanzas esta misma semana.', downloadChecklist: 'Descargar checklist',
    resource3Type: 'Herramienta editable · Excel', resource3Title: 'Planilla de Finanzas', resource3Text: 'Planilla lista para usar: ingresos, gastos, impuestos y resumen mensual.', downloadSpreadsheet: 'Descargar planilla',
    contactEyebrow: 'Empecemos', contactTitle: 'Cuando estés listo/a, empecemos por una conversación.', contactDescription: '30 minutos sin compromiso. Revisamos tu situación y vemos cómo puedo ayudarte de forma concreta.',
    footerRole: 'Contadora Pública | Especialista en Finanzas', footerCredential: 'Matrícula Tomo 463 · Folio 69', footerText: 'Finanzas claras para emprendedores y empresas que quieren crecer con orden.'
  },
  en: {
    navAbout: 'About me', navServices: 'Services', navContact: 'Contact', book: 'Book your consultation',
    heroEyebrow: 'Certified Public Accountant (UBA) · Finance Specialist',
    heroTitle: 'Understand your numbers.<br>Make better decisions.<br><em>Grow your business.</em>',
    heroDescription: 'We organize your company’s finances and accounting-tax management so you can decide with clarity, confidence, and a strategy built to last.',
    credential: 'CPCE CABA Registration · Volume 463 · Page 69', viewServices: 'Explore my services',
    value1: 'Clear strategy, no jargon', value2: 'Close support', value3: 'Actionable processes', value4: 'A practical business perspective', imageNote: 'Finance with a human focus',
    aboutEyebrow: 'About me', aboutTitle: 'Hello, I’m Marisa.',
    aboutLead: 'Certified Public Accountant, consultant, and ally to business owners who want to make financial decisions with greater confidence and calm.',
    aboutP1: 'For years, I saw people making important decisions without organized information, carrying a sense of guilt they did not deserve. My work began to take on a new meaning: not only making numbers accurate, but making them useful, approachable, and sustainable in day-to-day business.',
    quote: '“Financial clarity should not drain your energy: it should give it back.”',
    aboutP2: 'Today, I guide organization and growth processes through a strategic lens, always making sure the numbers make sense in the real life of each business.',
    credentialsTitle: 'Education and credentials', cred1: 'Certified Public Accountant — University of Buenos Aires (UBA)', cred2: 'Registration: Volume 463 – Page 69', cred3: 'Specialization in Finance',
    aboutP3: 'A career that brings together accounting rigor and business insight, with special attention to tourism businesses, their seasons, and their own pace.', approachTitle: 'How I work', approach: 'Simplicity with rigor. What matters, explained clearly.',
    servicesEyebrow: 'Services', servicesTitle: 'Finance and accounting management translated into clear decisions.', consult: 'Get in touch',
    service1Title: 'Financial and accounting diagnosis', service1Text: 'A clear picture of your current situation, reconciliations, and a priority map to know where to begin.',
    service2Title: 'Monthly tax and accounting management', service2Text: 'VAT, turnover tax, withholdings, filings with ARCA, AGIP, and ARBA, plus timely preparation of tax information.',
    service3Title: 'Payroll and social security', service3Text: 'Monthly payroll, bonuses, vacations, hires and terminations, with organized union and social-security management.',
    service4Title: 'Reports, financial statements, and ongoing support', service4Text: 'Financial statements, reports, and customer and supplier controls for businesses that need a true business perspective.',
    resourcesEyebrow: 'Free resources', resourcesTitle: 'Resources to organize your finances', resourcesDescription: 'Practical tools you can download and start using today.',
    resource1Type: 'Practical guide · PDF', resource1Title: 'Ebook: Two Accounts, One Business', resource1Text: 'The definitive guide to separating your personal finances from your business and finally understanding your taxes.', downloadEbook: 'Download ebook',
    resource2Type: 'Getting started · PDF', resource2Title: 'Checklist: 7 Actions to Start This Week', resource2Text: 'Concrete actions to organize your finances this very week.', downloadChecklist: 'Download checklist',
    resource3Type: 'Editable tool · Excel', resource3Title: 'Finance Spreadsheet', resource3Text: 'A ready-to-use spreadsheet for income, expenses, taxes, and a monthly summary.', downloadSpreadsheet: 'Download spreadsheet',
    contactEyebrow: 'Let’s start', contactTitle: 'When you’re ready, let’s start with a conversation.', contactDescription: '30 minutes, no obligation. We’ll review your situation and see how I can help in a practical way.',
    footerRole: 'Certified Public Accountant | Finance Specialist', footerCredential: 'Registration Volume 463 · Page 69', footerText: 'Clear finances for entrepreneurs and businesses ready to grow with structure.'
  }
};

const languageToggle = document.querySelector('.language-toggle');
const setLanguage = (language) => {
  document.documentElement.lang = language === 'es' ? 'es-AR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = translations[language][element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = translations[language][element.dataset.i18nHtml];
  });
  languageToggle.textContent = language === 'es' ? 'EN' : 'ES';
  languageToggle.setAttribute('aria-label', language === 'es' ? 'Switch to English' : 'Cambiar a español');
  localStorage.setItem('marisa-language', language);
};

languageToggle?.addEventListener('click', () => {
  setLanguage(document.documentElement.lang.startsWith('es') ? 'en' : 'es');
});

setLanguage(localStorage.getItem('marisa-language') === 'en' ? 'en' : 'es');
