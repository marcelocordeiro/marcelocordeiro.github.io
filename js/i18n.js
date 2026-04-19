/* ============================================================
   i18n — Internationalisation
   Languages: en (default), pt, de

   Translation keys:
     data-i18n     — plain text (sets textContent)
     data-i18n-md  — text with **bold** markers (safe DOM build, no innerHTML)
   ============================================================ */

const translations = {
  en: {
    /* Nav */
    'nav.about':        'About',
    'nav.experience':   'Experience',
    'nav.achievements': 'Achievements',
    'nav.skills':       'Skills',
    'nav.education':    'Education',
    'nav.contact':      'Contact',

    /* Hero */
    'hero.title':    'Senior Full Stack Software Engineer',
    'hero.location': 'Berlin, Germany',

    /* About */
    'about.title':          'About',
    'about.bio':            'Senior Full Stack Software Engineer with 8+ years of experience delivering high-availability global systems. At Delivery Hero, recognized as a Subject Matter Expert in Frontend Architecture and AI-Assisted Development. Proven track record of leading tribe-wide technical initiatives, automating complex engineering workflows, and being cross-functionally deployed to lead high-priority migrations across different business domains.',
    'about.location.label': 'Location',
    'about.phone.label':    'Phone',
    'about.email.label':    'Email',

    /* Experience */
    'exp.title':   'Experience',
    'exp.present': 'Present',

    /* Delivery Hero bullets — **text** renders as <strong> */
    'exp.dh.b1': '**AI Leadership & Innovation:** Leads tribe-wide explorations into AI-assisted development; architected specialized LLM workflows and \u201cskills\u201d now adopted across the organization to accelerate engineering velocity.',
    'exp.dh.b2': '**Cross-Domain Subject Matter Expert:** Acts as an expert consultant for high-priority frontend architecture migrations across different business domains.',
    'exp.dh.b3': '**AI-Powered Observability:** Architected and developed an end-to-end AI tool that fetches system alerts and utilizes LLMs for intelligent categorization and root-cause hypothesis generation, automating the full lifecycle from alert detection to Jira ticket creation and Confluence reporting.',
    'exp.dh.b4': '**System Reliability:** Spearheaded a total refactor of the audit logging architecture, reducing weekly production error noise from ~25,000 events to near-zero, restoring system trust for international stakeholders across Europe and the Middle East.',
    'exp.dh.b5': '**Infrastructure Strategy:** Authored the technical design and led the migration of backoffice frontend applications to a standardized Internal Operations Platform, integrating STS authentication for global market expansions.',
    'exp.dh.b6': '**Process Automation:** Architected an end-to-end configuration management tool replacing manual, error-prone deployments \u2014 reducing experiment launch delays from 1.5 weeks to near-instantaneous.',
    'exp.dh.b7': '**Global Market Expansion:** Technical lead for E2E execution of market launches in Spain, Portugal, and South Korea, ensuring service readiness for millions of users.',

    /* Marlabs bullets */
    'exp.marlabs.b1': 'Collaborated on international high-stakes projects for **VistaJet** (Malta) and **Delivery Hero** (Germany) in a distributed global team environment.',
    'exp.marlabs.b2': 'Developed and maintained complex web interfaces using React and integrated robust backend services to support private aviation and global food delivery logistics.',

    /* Other experience */
    'exp.ltia.title':  'Intern \u2014 Volunteer Software Developer & Team Coordinator',
    'exp.ltia.b1':     'Volunteer software developer and team coordinator on high-end projects using innovative technology for companies such as Motorola Solutions.',
    'exp.uoft.title':  'Summer Intern',
    'exp.uoft.b1':     'Summer internship at the Milstein Laboratory for Biological Physics of the University of Toronto Mississauga, under the supervision of Professor Joshua N. Milstein.',
    'exp.bauru.title': 'IT Intern',
    'exp.bauru.b1':    'Internship at the IT department of Bauru City Hall, responsible for providing technical support for government employees.',

    /* Achievements */
    'ach.title':             'Key Achievements',
    'ach.ai.title':          'AI Engineering Leadership',
    'ach.ai.desc':           'Leads Delivery Hero\u2019s AI-first engineering front across the tribe \u2014 building production-grade AI tools, authoring custom LLM \u201cskills\u201d now adopted company-wide, defining AI-assisted development workflows, and running continuous experiments that raise the ceiling of what engineering teams can ship.',
    'ach.automation.title':  'Process Automation',
    'ach.automation.desc':   'Architected a configuration management tool that replaced manual, error-prone deployments. Reduced experiment launch delays from 1.5 weeks to near-instantaneous, streamlining core business operations at scale.',
    'ach.reliability.title': 'System Reliability Overhaul',
    'ach.reliability.desc':  'Led a total refactor of the audit logging architecture, reducing weekly production error noise from ~25,000 events to near-zero and restoring system trust for international stakeholders across Europe and the Middle East.',

    /* Skills */
    'skills.title':          'Skills',
    'skills.ai.title':       'AI & Productivity',
    'skills.frontend.title': 'Frontend',
    'skills.backend.title':  'Backend',
    'skills.devops.title':   'Testing & DevOps',
    'skills.arch.title':     'Architecture & Tools',

    /* Education */
    'edu.title':          'Education',
    'edu.specialization': 'Specialization in Web Software Development',
    'edu.bachelor':       'Bachelor\u2019s Degree in Computer Science',
    'edu.visiting':       'Visiting Undergraduate Student',
    'edu.scholarship':    'Full Scholarship',

    /* Languages section */
    'lang.title':  'Languages',
    'lang.native': 'Native',
    'lang.fluent': 'Fluent',
    'lang.basic':  'Basic',

    /* Contact */
    'contact.title': 'Get in Touch',
    'contact.sub':   'Feel free to reach out for collaboration or just a hello.',

    /* Footer */
    'footer.text': '\u00a9 2026 Marcelo Cordeiro \u00b7 Berlin, Germany',
  },

  pt: {
    /* Nav */
    'nav.about':        'Sobre',
    'nav.experience':   'Experi\u00eancia',
    'nav.achievements': 'Conquistas',
    'nav.skills':       'Habilidades',
    'nav.education':    'Educa\u00e7\u00e3o',
    'nav.contact':      'Contato',

    /* Hero */
    'hero.title':    'Engenheiro de Software Full Stack Senior',
    'hero.location': 'Berlim, Alemanha',

    /* About */
    'about.title':          'Sobre',
    'about.bio':            'Engenheiro de Software Full Stack Senior com mais de 8 anos de experi\u00eancia entregando sistemas globais de alta disponibilidade. Na Delivery Hero, reconhecido como Especialista em Arquitetura Frontend e Desenvolvimento Assistido por IA. Hist\u00f3rico comprovado de lideran\u00e7a em iniciativas t\u00e9cnicas de toda a tribo, automa\u00e7\u00e3o de fluxos de trabalho complexos e atua\u00e7\u00e3o cross-funcional em migra\u00e7\u00f5es de alta prioridade em diferentes dom\u00ednios de neg\u00f3cio.',
    'about.location.label': 'Localiza\u00e7\u00e3o',
    'about.phone.label':    'Telefone',
    'about.email.label':    'E-mail',

    /* Experience */
    'exp.title':   'Experi\u00eancia',
    'exp.present': 'Presente',

    /* Delivery Hero bullets */
    'exp.dh.b1': '**Lideran\u00e7a em IA & Inova\u00e7\u00e3o:** Lidera explora\u00e7\u00f5es de desenvolvimento assistido por IA em toda a tribo; arquitetou fluxos de trabalho LLM especializados e \u201cskills\u201d agora adotados em toda a organiza\u00e7\u00e3o para acelerar a velocidade de engenharia.',
    'exp.dh.b2': '**Especialista Cross-Dom\u00ednio:** Atua como consultor especialista em migra\u00e7\u00f5es de arquitetura frontend de alta prioridade em diferentes dom\u00ednios de neg\u00f3cio.',
    'exp.dh.b3': '**Observabilidade com IA:** Arquitetou e desenvolveu uma ferramenta de IA end-to-end que busca alertas do sistema e utiliza LLMs para categoriza\u00e7\u00e3o inteligente e gera\u00e7\u00e3o de hip\u00f3teses de causa raiz, automatizando o ciclo completo desde a detec\u00e7\u00e3o de alertas at\u00e9 a cria\u00e7\u00e3o de tickets no Jira e relat\u00f3rios no Confluence.',
    'exp.dh.b4': '**Confiabilidade do Sistema:** Liderou um refactor total da arquitetura de audit logging, reduzindo o ru\u00eddo de erros de produ\u00e7\u00e3o semanal de ~25.000 eventos para quase zero, restaurando a confian\u00e7a do sistema para stakeholders internacionais na Europa e no Oriente M\u00e9dio.',
    'exp.dh.b5': '**Estrat\u00e9gia de Infraestrutura:** Elaborou o design t\u00e9cnico e liderou a migra\u00e7\u00e3o de aplica\u00e7\u00f5es frontend de backoffice para uma Plataforma de Opera\u00e7\u00f5es Internas padronizada, integrando autentica\u00e7\u00e3o STS para expans\u00f5es de mercado global.',
    'exp.dh.b6': '**Automa\u00e7\u00e3o de Processos:** Arquitetou uma ferramenta de gerenciamento de configura\u00e7\u00e3o end-to-end substituindo deployments manuais e sujeitos a erros \u2014 reduzindo atrasos no lan\u00e7amento de experimentos de 1,5 semana para quase instant\u00e2neo.',
    'exp.dh.b7': '**Expans\u00e3o de Mercado Global:** L\u00edder t\u00e9cnico para execu\u00e7\u00e3o E2E de lan\u00e7amentos de mercado na Espanha, Portugal e Coreia do Sul, garantindo a prontid\u00e3o do servi\u00e7o para milh\u00f5es de usu\u00e1rios.',

    /* Marlabs bullets */
    'exp.marlabs.b1': 'Colaborou em projetos internacionais de alta criticidade para a **VistaJet** (Malta) e **Delivery Hero** (Alemanha) em um ambiente de equipe global distribu\u00edda.',
    'exp.marlabs.b2': 'Desenvolveu e manteve interfaces web complexas usando React e integrou servi\u00e7os de backend robustos para suportar log\u00edstica de avia\u00e7\u00e3o privada e entrega de alimentos global.',

    /* Other experience */
    'exp.ltia.title':  'Estagi\u00e1rio \u2014 Desenvolvedor de Software Volunt\u00e1rio & Coordenador de Equipe',
    'exp.ltia.b1':     'Desenvolvedor de software volunt\u00e1rio e coordenador de equipe em projetos de ponta utilizando tecnologia inovadora para empresas como Motorola Solutions.',
    'exp.uoft.title':  'Estagi\u00e1rio de Ver\u00e3o',
    'exp.uoft.b1':     'Est\u00e1gio de ver\u00e3o no Laborat\u00f3rio Milstein de F\u00edsica Biol\u00f3gica da Universidade de Toronto Mississauga, sob a supervis\u00e3o do Professor Joshua N. Milstein.',
    'exp.bauru.title': 'Estagi\u00e1rio de TI',
    'exp.bauru.b1':    'Est\u00e1gio no departamento de TI da Prefeitura de Bauru, respons\u00e1vel por fornecer suporte t\u00e9cnico aos funcion\u00e1rios do governo.',

    /* Achievements */
    'ach.title':             'Principais Conquistas',
    'ach.ai.title':          'Lideran\u00e7a em Engenharia de IA',
    'ach.ai.desc':           'Lidera a frente de engenharia AI-first na Delivery Hero \u2014 construindo ferramentas de IA em produ\u00e7\u00e3o, criando \u201cskills\u201d LLM customizadas adotadas em toda a empresa, definindo fluxos de trabalho de desenvolvimento assistido por IA e conduzindo experimentos cont\u00ednuos que elevam o teto do que as equipes de engenharia conseguem entregar.',
    'ach.automation.title':  'Automa\u00e7\u00e3o de Processos',
    'ach.automation.desc':   'Arquitetou uma ferramenta de gerenciamento de configura\u00e7\u00e3o que substituiu deployments manuais e sujeitos a erros. Reduziu atrasos no lan\u00e7amento de experimentos de 1,5 semana para quase instant\u00e2neo, otimizando as opera\u00e7\u00f5es principais do neg\u00f3cio em escala.',
    'ach.reliability.title': 'Revis\u00e3o de Confiabilidade do Sistema',
    'ach.reliability.desc':  'Liderou um refactor total da arquitetura de audit logging, reduzindo o ru\u00eddo de erros de produ\u00e7\u00e3o semanal de ~25.000 eventos para quase zero e restaurando a confian\u00e7a do sistema para stakeholders internacionais na Europa e no Oriente M\u00e9dio.',

    /* Skills */
    'skills.title':          'Habilidades',
    'skills.ai.title':       'IA & Produtividade',
    'skills.frontend.title': 'Frontend',
    'skills.backend.title':  'Backend',
    'skills.devops.title':   'Testes & DevOps',
    'skills.arch.title':     'Arquitetura & Ferramentas',

    /* Education */
    'edu.title':          'Educa\u00e7\u00e3o',
    'edu.specialization': 'Especializa\u00e7\u00e3o em Desenvolvimento de Software Web',
    'edu.bachelor':       'Bacharelado em Ci\u00eancia da Computa\u00e7\u00e3o',
    'edu.visiting':       'Aluno de Gradua\u00e7\u00e3o Visitante',
    'edu.scholarship':    'Bolsa Integral',

    /* Languages section */
    'lang.title':  'Idiomas',
    'lang.native': 'Nativo',
    'lang.fluent': 'Fluente',
    'lang.basic':  'B\u00e1sico',

    /* Contact */
    'contact.title': 'Entre em Contato',
    'contact.sub':   'Sinta-se \u00e0 vontade para entrar em contato para colabora\u00e7\u00f5es ou apenas para dizer ol\u00e1.',

    /* Footer */
    'footer.text': '\u00a9 2026 Marcelo Cordeiro \u00b7 Berlim, Alemanha',
  },

  de: {
    /* Nav */
    'nav.about':        '\u00dcber mich',
    'nav.experience':   'Erfahrung',
    'nav.achievements': 'Erfolge',
    'nav.skills':       'F\u00e4higkeiten',
    'nav.education':    'Ausbildung',
    'nav.contact':      'Kontakt',

    /* Hero */
    'hero.title':    'Senior Full Stack Software Engineer',
    'hero.location': 'Berlin, Deutschland',

    /* About */
    'about.title':          '\u00dcber mich',
    'about.bio':            'Senior Full Stack Software Engineer mit \u00fcber 8 Jahren Erfahrung in der Entwicklung hochverf\u00fcgbarer globaler Systeme. Bei Delivery Hero als Fachexperte f\u00fcr Frontend-Architektur und KI-gest\u00fctzte Entwicklung anerkannt. Nachgewiesene Erfahrung in der Leitung stammweiter technischer Initiativen, der Automatisierung komplexer Engineering-Workflows und dem funktions\u00fcbergreifenden Einsatz bei hochpriorit\u00e4ren Migrationen in verschiedenen Gesch\u00e4ftsbereichen.',
    'about.location.label': 'Standort',
    'about.phone.label':    'Telefon',
    'about.email.label':    'E-Mail',

    /* Experience */
    'exp.title':   'Erfahrung',
    'exp.present': 'Heute',

    /* Delivery Hero bullets */
    'exp.dh.b1': '**KI-F\u00fchrung & Innovation:** Leitet stammweite Erkundungen zur KI-gest\u00fctzten Entwicklung; konzipierte spezialisierte LLM-Workflows und \u201eSkills\u201c, die nun organisationsweit eingesetzt werden, um die Engineering-Geschwindigkeit zu steigern.',
    'exp.dh.b2': '**Dom\u00e4nen\u00fcbergreifender Fachexperte:** Fungiert als Fachberater f\u00fcr hochpriorit\u00e4re Frontend-Architektur-Migrationen in verschiedenen Gesch\u00e4ftsbereichen.',
    'exp.dh.b3': '**KI-gest\u00fctzte Observability:** Konzipierte und entwickelte ein End-to-End-KI-Tool, das Systemalarme abruft und LLMs zur intelligenten Kategorisierung und Ursachenanalyse nutzt \u2013 automatisiert den gesamten Lebenszyklus von der Alarmerkennung bis zur Jira-Ticket-Erstellung und Confluence-Berichten.',
    'exp.dh.b4': '**Systemzuverl\u00e4ssigkeit:** Leitete ein vollst\u00e4ndiges Refactoring der Audit-Logging-Architektur, reduzierte den w\u00f6chentlichen Produktionsfehler-L\u00e4rm von ~25.000 Ereignissen auf nahezu null \u2013 wiederhergestelltes Systemvertrauen bei internationalen Stakeholdern in Europa und dem Nahen Osten.',
    'exp.dh.b5': '**Infrastrukturstrategie:** Erstellte das technische Design und leitete die Migration von Backoffice-Frontend-Anwendungen auf eine standardisierte interne Betriebsplattform mit STS-Authentifizierung f\u00fcr globale Markterweiterungen.',
    'exp.dh.b6': '**Prozessautomatisierung:** Konzipierte ein End-to-End-Konfigurationsmanagement-Tool, das manuelle, fehleranf\u00e4llige Deployments ersetzte \u2014 reduzierte Verz\u00f6gerungen beim Experiment-Launch von 1,5 Wochen auf nahezu sofort.',
    'exp.dh.b7': '**Globale Marktexpansion:** Technischer Leiter f\u00fcr die E2E-Durchf\u00fchrung von Markteinf\u00fchrungen in Spanien, Portugal und S\u00fcdkorea, mit Sicherstellung der Servicebereitschaft f\u00fcr Millionen von Nutzern.',

    /* Marlabs bullets */
    'exp.marlabs.b1': 'Mitwirkung an internationalen Hochrisikoprojekten f\u00fcr **VistaJet** (Malta) und **Delivery Hero** (Deutschland) in einem verteilten globalen Team.',
    'exp.marlabs.b2': 'Entwicklung und Wartung komplexer Web-Interfaces mit React sowie Integration robuster Backend-Services f\u00fcr die Privatluftfahrt- und globale Essenslieferungslogistik.',

    /* Other experience */
    'exp.ltia.title':  'Praktikant \u2014 Freiwilliger Softwareentwickler & Teamkoordinator',
    'exp.ltia.b1':     'Freiwilliger Softwareentwickler und Teamkoordinator bei hochwertigen Projekten mit innovativer Technologie f\u00fcr Unternehmen wie Motorola Solutions.',
    'exp.uoft.title':  'Sommerpraktikant',
    'exp.uoft.b1':     'Sommerpraktikum im Milstein Laboratory for Biological Physics der University of Toronto Mississauga unter der Aufsicht von Professor Joshua N. Milstein.',
    'exp.bauru.title': 'IT-Praktikant',
    'exp.bauru.b1':    'Praktikum in der IT-Abteilung der Stadtverwaltung Bauru, verantwortlich f\u00fcr die technische Unterst\u00fctzung von Regierungsangestellten.',

    /* Achievements */
    'ach.title':             'Wichtige Erfolge',
    'ach.ai.title':          'KI-Engineering-F\u00fchrung',
    'ach.ai.desc':           'F\u00fchrt die KI-first-Engineering-Front bei Delivery Hero \u2014 entwickelt produktionsreife KI-Tools, erstellt ma\u00dfgeschneiderte LLM-\u201eSkills\u201c, die unternehmensweit eingesetzt werden, definiert KI-gest\u00fctzte Entwicklungs-Workflows und treibt kontinuierliche Experimente voran, die das Potenzial der Engineering-Teams erweitern.',
    'ach.automation.title':  'Prozessautomatisierung',
    'ach.automation.desc':   'Konzipierte ein Konfigurationsmanagement-Tool, das manuelle, fehleranf\u00e4llige Deployments ersetzte. Reduzierte Verz\u00f6gerungen beim Experiment-Launch von 1,5 Wochen auf nahezu sofort und optimierte Kerngesch\u00e4ftsprozesse in gro\u00dfem Ma\u00dfstab.',
    'ach.reliability.title': 'Systemzuverl\u00e4ssigkeit',
    'ach.reliability.desc':  'Leitete ein vollst\u00e4ndiges Refactoring der Audit-Logging-Architektur, reduzierte den w\u00f6chentlichen Produktionsfehler-L\u00e4rm von ~25.000 Ereignissen auf nahezu null und stellte das Systemvertrauen bei internationalen Stakeholdern in Europa und dem Nahen Osten wieder her.',

    /* Skills */
    'skills.title':          'F\u00e4higkeiten',
    'skills.ai.title':       'KI & Produktivit\u00e4t',
    'skills.frontend.title': 'Frontend',
    'skills.backend.title':  'Backend',
    'skills.devops.title':   'Testing & DevOps',
    'skills.arch.title':     'Architektur & Tools',

    /* Education */
    'edu.title':          'Ausbildung',
    'edu.specialization': 'Spezialisierung in Web-Softwareentwicklung',
    'edu.bachelor':       'Bachelor in Informatik',
    'edu.visiting':       'Gaststudent',
    'edu.scholarship':    'Vollstipendium',

    /* Languages section */
    'lang.title':  'Sprachen',
    'lang.native': 'Muttersprache',
    'lang.fluent': 'Flie\u00dfend',
    'lang.basic':  'Grundkenntnisse',

    /* Contact */
    'contact.title': 'Kontakt aufnehmen',
    'contact.sub':   'Kontaktieren Sie mich gerne f\u00fcr eine Zusammenarbeit oder einfach nur f\u00fcr ein Hallo.',

    /* Footer */
    'footer.text': '\u00a9 2026 Marcelo Cordeiro \u00b7 Berlin, Deutschland',
  },
};

/* ============================================================
   Render helpers — safe DOM build, no innerHTML
   ============================================================ */

/**
 * Render plain text into an element (replaces all children).
 */
function renderText(el, text) {
  el.textContent = text;
}

/**
 * Render text with **bold** markers into an element using DOM nodes only.
 * Splits on **...** patterns and wraps matched segments in <strong>.
 */
function renderMd(el, text) {
  el.textContent = '';
  var parts = text.split(/(\*\*[^*]+\*\*)/);
  parts.forEach(function (part) {
    if (part.length > 4 && part.slice(0, 2) === '**' && part.slice(-2) === '**') {
      var strong = document.createElement('strong');
      strong.textContent = part.slice(2, -2);
      el.appendChild(strong);
    } else {
      el.appendChild(document.createTextNode(part));
    }
  });
}

/* ============================================================
   Core translation logic
   ============================================================ */

function applyTranslations(lang) {
  var t = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var val = t[el.dataset.i18n];
    if (val !== undefined) renderText(el, val);
  });

  document.querySelectorAll('[data-i18n-md]').forEach(function (el) {
    var val = t[el.dataset.i18nMd];
    if (val !== undefined) renderMd(el, val);
  });

  document.documentElement.lang = lang;
}

function updateLangButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ---- Typewriter ---- */
var _twTimeout = null;

function restartTypewriter(lang) {
  var t    = translations[lang] || translations.en;
  var text = t['hero.title'] || translations.en['hero.title'];
  var el   = document.getElementById('typewriter');
  if (!el) return;

  if (_twTimeout) { clearTimeout(_twTimeout); _twTimeout = null; }
  el.textContent = '';

  var i = 0;
  function tick() {
    if (i < text.length) {
      el.textContent += text[i++];
      _twTimeout = setTimeout(tick, 65);
    }
  }
  _twTimeout = setTimeout(tick, 300);
}

/* ============================================================
   Public API
   ============================================================ */

function setLanguage(lang) {
  if (!translations[lang]) return;
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
  restartTypewriter(lang);
  updateLangButtons(lang);
}

function detectLanguage() {
  var stored = localStorage.getItem('lang');
  if (stored && translations[stored]) return stored;

  var browser = (navigator.language || 'en').toLowerCase();
  if (browser.startsWith('pt')) return 'pt';
  if (browser.startsWith('de')) return 'de';
  return 'en';
}

/* Init — script is at end of <body>, DOM is ready */
(function () {
  var lang = detectLanguage();
  applyTranslations(lang);
  updateLangButtons(lang);
  restartTypewriter(lang);
}());

window.setLanguage = setLanguage;
