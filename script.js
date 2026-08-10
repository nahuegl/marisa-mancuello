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
    navAbout: 'Sobre mí', navServices: 'Servicios', navResources: 'Recursos', navContact: 'Contacto', book: 'Agendá tu asesoría',
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
    viewTrajectory: 'Conocé mi trayectoria profesional completa',
    servicesEyebrow: 'Servicios', servicesTitle: 'Finanzas y gestión contable que se traducen en decisiones claras.', consult: 'Consultar',
    service1Title: 'Diagnóstico y orden financiero-contable', service1Text: 'Una fotografía clara de tu situación actual, conciliaciones y un mapa de prioridades para saber por dónde empezar.',
    service2Title: 'Gestión impositiva y contable mensual', service2Text: 'IVA, IIBB, retenciones, presentaciones ante ARCA, AGIP y ARBA, e información fiscal preparada a tiempo.',
    service3Title: 'Liquidación de sueldos y cargas sociales', service3Text: 'Liquidaciones mensuales, SAC, vacaciones, altas y bajas, con una gestión ordenada de sindicatos y cargas sociales.',
    service4Title: 'Reportes, balances y acompañamiento continuo', service4Text: 'Balances, reportes financieros y control operativo de clientes y proveedores para empresas que necesitan mirada de negocio.',
    resourcesEyebrow: 'Recursos gratuitos', resourcesTitle: 'Accedé a nuestros recursos y novedades', resourcesDescription: 'Completá tus datos para recibir la guía, checklist y planilla de finanzas directamente en tu correo electrónico.',
    resource1Type: 'Guía práctica · PDF', resource1Title: 'Ebook: Dos Cajas, Un Negocio', resource1Text: 'La guía definitiva para separar tus finanzas personales de las de tu negocio y finalmente entender tus impuestos.', downloadEbook: 'Descargar ebook',
    resource2Type: 'Para empezar · PDF', resource2Title: 'Checklist: 7 Acciones para Empezar Esta Semana', resource2Text: 'Acciones concretas para ordenar tus finanzas esta misma semana.', downloadChecklist: 'Descargar checklist',
    resource3Type: 'Herramienta editable · Excel', resource3Title: 'Planilla de Finanzas', resource3Text: 'Planilla lista para usar: ingresos, gastos, impuestos y resumen mensual.', downloadSpreadsheet: 'Descargar planilla',
    formName: 'Nombre *', formLastName: 'Apellido *', formEmail: 'Correo electrónico *',
    formSubscribeText: 'Quiero suscribirme a novedades, consejos financieros y futuras charlas de Marisa Mancuello.',
    formContinue: 'Continuar y verificar datos', confirmTitle: 'Confirmá tus datos antes de enviar',
    confirmSub: 'Enviaremos los 3 recursos gratuitos (Ebook, Checklist y Planilla) a la siguiente casilla:',
    summaryName: 'Nombre y Apellido:', summaryEmail: 'Correo electrónico:', summarySub: 'Suscripción a novedades:',
    confirmSend: 'Confirmar y recibir recursos por correo', confirmEdit: 'Corregir datos',
    emailSentTitle: '¡Recursos enviados a tu correo!',
    emailSentText: 'Hemos enviado la guía, la checklist y la planilla de finanzas a',
    emailPreviewTag: 'Mensaje de bienvenida', welcomeGreeting: '¡Hola', welcomeSubGreeting: '! Te damos la bienvenida.',
    emailWelcomeP1: 'En tu casilla encontrás adjuntos los enlaces directos para descargar:',
    emailWelcomeQuote: '“Mi objetivo es que sientas calma y claridad al tomar decisiones financieras en tu negocio.”',
    emailWelcomeP2: 'Revisá tu bandeja de entrada (y la carpeta de Spam o Promociones por las dudas). Si tenés cualquier consulta sobre tus números o querés agendar una llamada sin compromiso, podés responder directamente a ese correo o escribirnos.',
    formReset: 'Modificar datos o registrar otro correo',
    contactEyebrow: 'Empecemos', contactTitle: 'Cuando estés listo/a, empecemos por una conversación.', contactDescription: '30 minutos sin compromiso. Revisamos tu situación y vemos cómo puedo ayudarte de forma concreta.',
    footerRole: 'Contadora Pública | Especialista en Finanzas', footerCredential: 'Matrícula Tomo 463 · Folio 69', footerText: 'Finanzas claras para emprendedores y empresas que quieren crecer con orden.',
    // Trajectory i18n
    backToHome: 'Volver a Sobre Mí', trajEyebrow: 'Perfil Profesional', trajName: 'Marisa Raquel Mancuello',
    trajSub: 'Contadora Pública (UBA) · Matriculada en CABA — Tomo 463, Folio 69',
    trajBio: 'Contadora Pública con más de 10 años de trayectoria en administración, contabilidad, impuestos y finanzas. Mi diferencial no es solamente ejecutar tareas: me especializo en detectar inconsistencias, optimizar procesos y transformar la información contable en una herramienta estratégica para la toma de decisiones. Aporto enfoque analítico, criterio profesional y una orientación permanente a la mejora continua de los procesos administrativos, impositivos y financieros.',
    expEyebrow: 'Trayectoria Laboral', expTitle: 'Experiencia Profesional',
    job1Title: 'Analista Sr. Administrativo / Contable', job1Dates: 'ABR 2024 — ACTUALIDAD',
    job1Desc: 'Al incorporarme, encontré procesos contables enfocados solo en el cumplimiento mensual, con inconsistencias arrastradas de gestiones anteriores. Lideré el área contable y administrativa regularizando las obligaciones pendientes, corrigiendo errores de categorización tributaria y documentando y estandarizando los procedimientos del área, además de elaborar reportes financieros para gerencia.',
    job1Impact: 'Reducción de riesgos fiscales y fortalecimiento del control interno, con información confiable para la toma de decisiones de dirección.',
    job2Title: 'Analista Administrativo / Contable', job2Dates: 'MAY 2023 — ABR 2024',
    job2Desc: 'Lideré el área contable, administrativa e impositiva en una empresa importadora de alto volumen. A cargo del circuito de carga, control documental y conciliación de cuentas corrientes de clientes y proveedores locales e internacionales, optimicé la gestión de expedientes para presentaciones regulatorias y coordiné directamente con el estudio externo la provisión de información contable e impositiva para los cierres mensuales y anuales.',
    job2Impact: 'Reducción de tiempos de procesamiento y mayor confiabilidad de la información para la gestión.',
    job3Title: 'Analista Impositivo / Contable', job3Dates: 'AGO 2022 — MAY 2023',
    job3Desc: 'Encargada operativa de estudio contable, asumiendo el liderazgo del equipo y la capacitación técnica de los nuevos integrantes. Gestioné de manera integral una cartera diversificada de clientes, ejecutando liquidaciones simultáneas de impuestos, sueldos y cargas sociales bajo estrictos calendarios de vencimiento. A su vez, impulsé la optimización de los circuitos internos de trabajo, logrando procesos más ágiles y eficientes en toda la operatoria del estudio.',
    job3Impact: 'Mayor eficiencia del equipo y mejor calidad de servicio para cada cliente.',
    impactLabel: 'Impacto:', toolsLabel: 'Herramientas:',
    skillsEyebrow: 'Competencias', skillsTitle: 'Formación, Idiomas y Habilidades',
    eduTitle: 'Formación Académica', langTitle: 'Idiomas', skillsListTitle: 'Áreas de Especialidad'
  },
  en: {
    navAbout: 'About me', navServices: 'Services', navResources: 'Resources', navContact: 'Contact', book: 'Book your consultation',
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
    viewTrajectory: 'View full professional background',
    servicesEyebrow: 'Services', servicesTitle: 'Finance and accounting management translated into clear decisions.', consult: 'Get in touch',
    service1Title: 'Financial and accounting diagnosis', service1Text: 'A clear picture of your current situation, reconciliations, and a priority map to know where to begin.',
    service2Title: 'Monthly tax and accounting management', service2Text: 'VAT, turnover tax, withholdings, filings with ARCA, AGIP, and ARBA, plus timely preparation of tax information.',
    service3Title: 'Payroll and social security', service3Text: 'Monthly payroll, bonuses, vacations, hires and terminations, with organized union and social-security management.',
    service4Title: 'Reports, financial statements, and ongoing support', service4Text: 'Financial statements, reports, and customer and supplier controls for businesses that need a true business perspective.',
    resourcesEyebrow: 'Free resources', resourcesTitle: 'Access our resources & updates', resourcesDescription: 'Complete your details to receive the guide, checklist, and finance spreadsheet directly in your email.',
    resource1Type: 'Practical guide · PDF', resource1Title: 'Ebook: Two Accounts, One Business', resource1Text: 'The definitive guide to separating your personal finances from your business and finally understanding your taxes.', downloadEbook: 'Download ebook',
    resource2Type: 'Getting started · PDF', resource2Title: 'Checklist: 7 Actions to Start This Week', resource2Text: 'Concrete actions to organize your finances this very week.', downloadChecklist: 'Download checklist',
    resource3Type: 'Editable tool · Excel', resource3Title: 'Finance Spreadsheet', resource3Text: 'A ready-to-use spreadsheet for income, expenses, taxes, and a monthly summary.', downloadSpreadsheet: 'Download spreadsheet',
    formName: 'First Name *', formLastName: 'Last Name *', formEmail: 'Email Address *',
    formSubscribeText: 'I want to subscribe to news, financial tips, and future talks by Marisa Mancuello.',
    formContinue: 'Continue & verify details', confirmTitle: 'Confirm your details before sending',
    confirmSub: 'We will send all 3 free resources (Ebook, Checklist & Spreadsheet) to the following email address:',
    summaryName: 'Full Name:', summaryEmail: 'Email Address:', summarySub: 'Newsletter Subscription:',
    confirmSend: 'Confirm & receive resources by email', confirmEdit: 'Edit details',
    emailSentTitle: 'Resources sent to your email!',
    emailSentText: 'We have sent the guide, checklist, and finance spreadsheet to',
    emailPreviewTag: 'Welcome Message', welcomeGreeting: 'Hello', welcomeSubGreeting: '! Welcome.',
    emailWelcomeP1: 'In your inbox you will find direct links to download:',
    emailWelcomeQuote: '“My goal is for you to feel calm and clarity when making financial decisions in your business.”',
    emailWelcomeP2: 'Check your inbox (and spam/promotions folder just in case). If you have any questions about your numbers or want to book a call, feel free to reply directly to that email or write to us.',
    formReset: 'Modify details or register another email',
    contactEyebrow: 'Let’s start', contactTitle: 'When you’re ready, let’s start with a conversation.', contactDescription: '30 minutes, no obligation. We’ll review your situation and see how I can help in a practical way.',
    footerRole: 'Certified Public Accountant | Finance Specialist', footerCredential: 'Registration Volume 463 · Page 69', footerText: 'Clear finances for entrepreneurs and businesses ready to grow with structure.',
    // Trajectory i18n
    backToHome: 'Back to About Me', trajEyebrow: 'Professional Profile', trajName: 'Marisa Raquel Mancuello',
    trajSub: 'Certified Public Accountant (UBA) · Registered in CABA — Vol 463, Page 69',
    trajBio: 'Certified Public Accountant with over 10 years of experience in administration, accounting, taxation, and finance. Specializing in detecting inconsistencies, optimizing processes, and converting accounting data into a strategic tool for decision making.',
    expEyebrow: 'Work History', expTitle: 'Professional Experience',
    job1Title: 'Senior Administrative / Accounting Analyst', job1Dates: 'APR 2024 — PRESENT',
    job1Desc: 'Led accounting and administrative area, resolving pending tax obligations, correcting tax categorization errors, and standardizing operational procedures while generating financial reports for executive management.',
    job1Impact: 'Tax risk reduction and internal control enhancement with reliable financial data for executive decision-making.',
    job2Title: 'Administrative / Accounting Analyst', job2Dates: 'MAY 2023 — APR 2024',
    job2Desc: 'Managed accounting, administrative, and tax circuits in a high-volume import business. Controlled bank reconciliations, vendor/client accounts, regulatory files, and monthly/annual tax filings.',
    job2Impact: 'Reduced processing times and significantly improved financial information reliability.',
    job3Title: 'Tax / Accounting Analyst', job3Dates: 'AUG 2022 — MAY 2023',
    job3Desc: 'Operational head of accounting firm. Managed team leadership and technical onboarding. Handled multi-client tax filings, payroll, and social security under strict regulatory deadlines.',
    job3Impact: 'Increased team efficiency and overall client service quality.',
    impactLabel: 'Impact:', toolsLabel: 'Tools:',
    skillsEyebrow: 'Competencies', skillsTitle: 'Education, Languages & Skills',
    eduTitle: 'Education', langTitle: 'Languages', skillsListTitle: 'Specializations'
  }
};

const languageToggle = document.querySelector('.language-toggle');
const setLanguage = (language) => {
  document.documentElement.lang = language === 'es' ? 'es-AR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    if (translations[language][element.dataset.i18n]) {
      element.textContent = translations[language][element.dataset.i18n];
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    if (translations[language][element.dataset.i18nHtml]) {
      element.innerHTML = translations[language][element.dataset.i18nHtml];
    }
  });
  if (languageToggle) {
    languageToggle.textContent = language === 'es' ? 'EN' : 'ES';
    languageToggle.setAttribute('aria-label', language === 'es' ? 'Switch to English' : 'Cambiar a español');
  }
  localStorage.setItem('marisa-language', language);
};

languageToggle?.addEventListener('click', () => {
  setLanguage(document.documentElement.lang.startsWith('es') ? 'en' : 'es');
});

// Multi-step Lead Capture Form Handler
const leadForm = document.getElementById('lead-capture-form');
const confirmStep = document.getElementById('lead-confirmation-step');
const successStep = document.getElementById('lead-success-step');

const confirmSubmitBtn = document.getElementById('confirm-submit-btn');
const confirmEditBtn = document.getElementById('confirm-edit-btn');
const resetBtn = document.getElementById('lead-reset-btn');

if (leadForm && confirmStep && successStep) {
  let tempLeadData = null;

  const renderSuccessState = (data) => {
    const userEmailEl = document.getElementById('success-user-email');
    const userNameEl = document.getElementById('welcome-user-name');
    if (userEmailEl) userEmailEl.textContent = data.email;
    if (userNameEl) userNameEl.textContent = data.name;

    leadForm.style.display = 'none';
    confirmStep.style.display = 'none';
    successStep.style.display = 'block';
  };

  const savedLead = localStorage.getItem('marisa_lead_info');
  if (savedLead) {
    try {
      const parsed = JSON.parse(savedLead);
      renderSuccessState(parsed);
    } catch (err) {
      console.error(err);
    }
  }

  // Paso 1: Enviar formulario -> Mostrar tarjeta de verificación
  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('lead-name');
    const lastNameInput = document.getElementById('lead-lastname');
    const emailInput = document.getElementById('lead-email');
    const subscribeInput = document.getElementById('lead-subscribe');

    if (!nameInput.value.trim() || !lastNameInput.value.trim() || !emailInput.value.trim()) {
      alert(document.documentElement.lang.startsWith('es') ? 'Por favor completá todos los campos requeridos.' : 'Please fill in all required fields.');
      return;
    }

    tempLeadData = {
      name: nameInput.value.trim(),
      lastname: lastNameInput.value.trim(),
      email: emailInput.value.trim(),
      subscribe: subscribeInput.checked,
      timestamp: new Date().toISOString()
    };

    // Actualizar datos de verificación
    const fullNameEl = document.getElementById('confirm-full-name');
    const emailAddrEl = document.getElementById('confirm-email-addr');
    const subStatusEl = document.getElementById('confirm-sub-status');
    const isEs = document.documentElement.lang.startsWith('es');

    if (fullNameEl) fullNameEl.textContent = `${tempLeadData.name} ${tempLeadData.lastname}`;
    if (emailAddrEl) emailAddrEl.textContent = tempLeadData.email;
    if (subStatusEl) subStatusEl.textContent = tempLeadData.subscribe ? (isEs ? 'Sí, activada' : 'Yes, subscribed') : (isEs ? 'No' : 'No');

    leadForm.style.display = 'none';
    confirmStep.style.display = 'block';
  });

  // Paso 2 -> Editar datos: regresar al formulario
  confirmEditBtn?.addEventListener('click', () => {
    confirmStep.style.display = 'none';
    leadForm.style.display = 'block';
  });

  // Paso 2 -> Confirmar envío: guardar y mostrar confirmación de entrega por email
  confirmSubmitBtn?.addEventListener('click', () => {
    if (tempLeadData) {
      localStorage.setItem('marisa_lead_info', JSON.stringify(tempLeadData));
      renderSuccessState(tempLeadData);
    }
  });

  // Modificar datos o registrar otro correo
  resetBtn?.addEventListener('click', () => {
    localStorage.removeItem('marisa_lead_info');
    leadForm.reset();
    successStep.style.display = 'none';
    confirmStep.style.display = 'none';
    leadForm.style.display = 'block';
  });
}

setLanguage(localStorage.getItem('marisa-language') === 'en' ? 'en' : 'es');