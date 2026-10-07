/**
 * Lightweight EN/FR internationalization.
 *
 * English is written directly in the HTML (default language, good for SEO). Elements to translate
 * carry data-i18n="key" (innerHTML) or data-i18n-<attribute>="key" (placeholder, aria-label, alt,
 * content, typed). Their English values are captured from the page on load, so only French
 * strings live here. Scripts read translations with I18N.t(key) and re-render on "languagechange".
 */
(function () {
  "use strict";

  const STORAGE_KEY = 'portfolio-lang';
  const SUPPORTED = ['en', 'fr'];
  const ATTRIBUTES = ['placeholder', 'aria-label', 'alt', 'content', 'typed'];

  const dictionaries = {
    en: {
        "cat.app": "Mobile App",
        "cat.product": "Web App",
        "cat.branding": "Website",
        "cat.library": "Library",
        "card.more": "View project",
        "card.aria": "view project details",
        "contact.error": "Please fill in every field with a valid email address.",
        "details.pageTitle": "Project details",
        "details.description": "Description",
        "details.features": "Features",
        "details.responsibilities": "Responsibilities",
        "details.challenges": "Challenges",
        "details.solutions": "Solutions",
        "details.technologies": "Technologies",
        "details.info": "Project information",
        "details.category": "Category",
        "details.client": "Client",
        "details.date": "Project date",
        "details.npm": "View on npm",
        "details.learnMore": "Learn more",
        "details.visit": "Visit Website",
        "details.prev": "Previous",
        "details.next": "Next",
        "details.breadcrumbHome": "Home",
        "details.breadcrumbPortfolio": "Portfolio",
        "switch.label": "Change language"
    },
    fr: {
        "meta.title": "Martial NOUNGA | Ingénieur logiciel & Ingénieur en sécurité applicative",
        "meta.description": "Martial NOUNGA, ingénieur logiciel et ingénieur en sécurité applicative. Applications web et mobiles sécurisées, automatisation DevSecOps et tests d'intrusion.",
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.resume": "Parcours",
        "nav.portfolio": "Portfolio",
        "nav.services": "Services",
        "nav.contact": "Contact",
        "hero.eyebrow": "<span class=\"status-dot\"></span> Disponible pour des missions freelance",
        "hero.role": "Ingénieur logiciel &amp; <span class=\"text-accent\">Ingénieur en sécurité applicative</span>",
        "hero.typed": "Je conçois des applications web et mobiles sécurisées, J'automatise la sécurité dans les pipelines CI/CD, Je teste la sécurité des API et des applications, Je publie des outils de sécurité open source pour Angular",
        "hero.cta.work": "Voir mes réalisations <i class=\"bi bi-arrow-right\"></i>",
        "hero.cta.talk": "Discutons",
        "hero.scroll": "Défiler vers À propos",
        "about.title": "À propos",
        "about.tagline": "Je conçois des logiciels agréables à utiliser, et difficiles à attaquer.",
        "about.photo": "Portrait de Martial NOUNGA",
        "about.heading": "Développeur fullstack &amp; Ingénieur en sécurité applicative.",
        "about.intro": "Entre développement et sécurité, je crée des expériences numériques non seulement intuitives et dynamiques, mais aussi sécurisées dès la conception.",
        "about.birthday": "Date de naissance :",
        "about.birthdayValue": "22 février 2003",
        "about.role": "Poste actuel :",
        "about.roleValue": "Ingénieur Logiciel et AppSec @ CCA Bank",
        "about.phone": "Téléphone :",
        "about.location": "Localisation :",
        "common.location": "Yaoundé &amp; Douala, Cameroun",
        "about.age": "Âge :",
        "about.degree": "Diplôme :",
        "about.degreeValue": "Ingénieur en systèmes numériques (major de promotion)",
        "about.email": "E-mail :",
        "about.freelance": "Freelance :",
        "about.available": "Disponible",
        "about.bio": "Avec plus de 4 ans d'expérience dans la création d'applications web et mobiles et une formation en cybersécurité, je travaille à la croisée de l'ingénierie logicielle et de la sécurité applicative. Je conçois et livre des produits fullstack avec Angular, Ionic et Spring Boot, et j'intègre la sécurité à chaque livraison : architecture sécurisée, cryptographie appliquée, contrôles de sécurité automatisés dans la CI/CD et tests d'intrusion des applications web, des API et des applications mobiles.",
        "about.cta": "Travaillons ensemble <i class=\"bi bi-arrow-right\"></i>",
        "stats.clients": "Clients satisfaits",
        "stats.projects": "Projets livrés",
        "stats.years": "Années d'expérience",
        "stats.brands": "Marques qui me font confiance",
        "skills.title": "Compétences",
        "skills.subtitle": "Une boîte à outils d'ingénierie fullstack, avec la sécurité intégrée à chaque couche.",
        "skills.appsec": "Sécurité applicative",
        "skills.pentest": "Tests d'intrusion web, API &amp; mobile",
        "skills.assessments": "Évaluations de sécurité",
        "skills.crypto": "Cryptographie appliquée (X25519, AES-GCM, HKDF)",
        "skills.sdlc": "Cycle de développement sécurisé (SSDLC)",
        "skills.risk": "Analyse de risques",
        "skills.devsecops": "DevSecOps &amp; outillage",
        "skills.sast": "Automatisation SAST &amp; SCA",
        "skills.secrets": "Détection de secrets (gitleaks)",
        "skills.cicd": "Pipelines CI/CD",
        "skills.nginx": "Nginx &amp; en-têtes de sécurité (CSP)",
        "skills.git": "Git &amp; hooks Husky",
        "skills.frontend": "Frontend &amp; mobile",
        "skills.backend": "Backend &amp; données",
        "skills.rest": "API REST &amp; microservices",
        "resume.title": "Parcours",
        "resume.subtitle": "Titulaire d'un diplôme d'ingénieur en systèmes numériques orienté développement logiciel et cybersécurité, j'ai conçu des applications web et mobiles fullstack avec Angular, Ionic, Spring Boot, Node.js et ASP.NET Core, et mené des projets freelance dans des secteurs d'activité variés.",
        "resume.summary": "Résumé",
        "resume.summaryText": "<em>Ingénieur logiciel et ingénieur en sécurité applicative polyvalent et rigoureux, avec plus de 4 ans d'expérience dans la conception et le développement d'applications web et mobiles sécurisées et centrées sur l'utilisateur, de l'idée au déploiement. J'intègre la sécurité à chaque étape du cycle de développement, du code sécurisé aux contrôles automatisés jusqu'aux tests d'intrusion, pour livrer des solutions à la fois innovantes et résilientes par conception.</em>",
        "resume.location": "Yaoundé &amp; Douala, Cameroun",
        "resume.certifications": "Certifications",
        "resume.casaDate": "Mai 2026",
        "resume.casaText": "Certification attestant d'une expertise en sécurité des API : identification et test des vulnérabilités des API selon l'OWASP API Security Top 10, sécurisation de l'authentification et des autorisations, et application des bonnes pratiques de sécurité des API.",
        "resume.ccText": "Certification reconnue attestant des connaissances fondamentales en cybersécurité : principes de sécurité, contrôle d'accès, sécurité réseau et gestion des risques.",
        "resume.ceh": "Certified Ethical Hacker (CEH), en cours",
        "resume.cehDate": "2024 - En cours",
        "resume.cehOrg": "<em>Cisco Networking Academy - En ligne</em>",
        "resume.cehText": "Préparation en cours de la certification CEH via Cisco NetAcad : hacking éthique, évaluation des vulnérabilités et défense des réseaux.",
        "resume.education": "Formation",
        "resume.master": "Diplôme d'ingénieur en systèmes numériques (niveau Master)",
        "resume.masterSchool": "<em>International Advanced School of Digital Engineering, Cameroun</em>",
        "resume.masterHonor": "<i class=\"bi bi-trophy\"></i> Major de promotion",
        "resume.masterText": "Une formation d'ingénieur de 5 ans, par projets et orientée business. Au-delà du développement logiciel, des réseaux et de la cybersécurité, elle m'a appris à partir de vrais problèmes métier pour les résoudre grâce à la technologie, avec une forte dimension entrepreneuriat, stratégie d'entreprise et création de valeur. La technique y est un moyen, pas une fin : l'objectif est toujours de livrer des solutions qui ont un impact mesurable pour les utilisateurs et les organisations.",
        "resume.bac": "Baccalauréat C (Mathématiques &amp; Sciences physiques)",
        "resume.bacHonor": "<i class=\"bi bi-award\"></i> Mention Très Bien",
        "resume.experience": "Expérience professionnelle",
        "resume.cca": "Ingénieur logiciel &amp; Ingénieur AppSec",
        "resume.ccaDate": "Mai 2026 - Aujourd'hui",
        "resume.cca1": "Développement frontend d'applications web.",
        "resume.cca2": "Conception et implémentation, côté frontend et backend, des mécanismes cryptographiques.",
        "resume.cca3": "Conception et mise en place de workflows de développement et de déploiement sécurisés.",
        "resume.cca4": "Tests d'intrusion et évaluation de la sécurité des API.",
        "resume.cca5": "Évaluations de sécurité d'applications web, d'API et d'applications mobiles.",
        "resume.isnov": "Développeur Ionic-Angular",
        "resume.isnovDate": "Août 2025 - Juin 2026",
        "resume.isnovOrg": "<em>ISNOV SARL, Yaoundé, Cameroun</em>",
        "resume.isnov1": "Développement d'applications mobiles intégrées au système ERP INOV.",
        "resume.isnov2": "Développement de librairies standards pour accélérer la production d'applications mobiles.",
        "resume.isnov3": "Implémentation de schematics Angular pour industrialiser le développement d'applications web et mobiles.",
        "resume.webly": "Ingénieur logiciel",
        "resume.weblyDate": "2023 - Aujourd'hui",
        "resume.weblyOrg": "<em>Weblysoft, McLean, Virginie, États-Unis</em>",
        "resume.webly1": "Développement et maintenance d'applications web et mobiles avec Angular, Ionic et TailwindCSS.",
        "resume.webly2": "Développement d'API REST et de microservices pour divers projets clients, avec ASP.NET Core (C#).",
        "resume.webly3": "Création de sites web performants qui renforcent la visibilité des marques et présentent efficacement leurs services à leurs cibles.",
        "resume.webly4": "Évolutivité et maintenabilité assurées par une architecture modulaire et un code propre.",
        "resume.cover": "Développeur frontend",
        "resume.coverOrg": "<em>Cover, Yaoundé, Cameroun</em>",
        "resume.cover1": "Contribution au développement des interfaces frontend modernes de l'ERP FLEUVA avec Angular et TypeScript.",
        "resume.cover2": "Intégration d'interfaces responsives et de composants réutilisables, selon les bonnes pratiques UX.",
        "resume.cover3": "Travail en méthode agile, en étroite collaboration avec les équipes backend.",
        "resume.cover4": "Participation à la phase de tests logiciels et à l'équipe d'évaluation de la sécurité, pour identifier et corriger les vulnérabilités du système.",
        "resume.freelance": "Développeur fullstack web &amp; mobile freelance",
        "resume.freelanceDate": "2022 - Aujourd'hui",
        "resume.freelanceOrg": "<em>Indépendant</em>",
        "resume.freelance1": "Développement et déploiement d'applications web et mobiles sur mesure pour des clients de la santé, de l'éducation, du divertissement, du commerce, etc.",
        "resume.freelance2": "Gestion complète des projets : planification, financement, UI/UX, backend, frontend, hébergement et maintenance.",
        "portfolio.title": "Portfolio",
        "portfolio.subtitle": "Des sites web pour des marques en croissance aux applications web et mobiles complètes, en passant par des librairies open source, ces projets illustrent ma capacité à transformer des idées en solutions numériques fonctionnelles, sécurisées et centrées sur l'utilisateur. Ce n'est qu'une partie de mon travail : de nombreux autres projets ne peuvent pas être présentés ici pour des raisons de confidentialité.",
        "portfolio.all": "Tous",
        "portfolio.apps": "Apps mobiles",
        "portfolio.web": "Apps web",
        "portfolio.sites": "Sites web",
        "portfolio.libs": "Librairies",
        "portfolio.showMore": "Voir plus de projets (<span class=\"count\">0</span>) <i class=\"bi bi-chevron-down\"></i>",
        "services.title": "Services",
        "services.subtitle": "Je propose des solutions numériques sur mesure, du développement d'applications web et mobiles modernes à l'ingénierie de la sécurité applicative, des contrôles de sécurité automatisés dans vos pipelines jusqu'aux tests d'intrusion. Mon objectif : aider les entreprises à se développer de façon sûre et efficace grâce à la technologie.",
        "services.web": "Développement web fullstack",
        "services.webText": "Sites et applications web responsives et dynamiques avec Angular, TailwindCSS, Spring Boot, Node.js et .NET. De la conception de l'interface à l'intégration backend.",
        "services.mobile": "Développement <br>mobile",
        "services.mobileText": "Applications mobiles multiplateformes avec Ionic &amp; Angular. Une interface moderne et des performances fluides sur Android &amp; iOS.",
        "services.api": "Conception <br>&amp; intégration d'API",
        "services.apiText": "Conception et intégration d'API REST pour connecter et faire évoluer efficacement vos applications web et mobiles.",
        "services.site": "Création &amp; optimisation de sites web",
        "services.siteText": "Des sites modernes et responsives, adaptés à votre marque, optimisés pour la performance, le SEO et l'expérience utilisateur.",
        "services.pentest": "Tests d'intrusion &amp; évaluation de sécurité",
        "services.pentestText": "Évaluations de sécurité et tests d'intrusion d'applications web, d'API et d'applications mobiles, avec des résultats priorisés et des recommandations de correction.",
        "services.consulting": "Conseil <br>freelance",
        "services.consultingText": "Accompagnement technique des startups et entrepreneurs : cadrage de projet, création de MVP et conseil logiciel.",
        "services.badge": "Ingénierie AppSec",
        "services.appsec": "Sécurité applicative &amp; automatisation DevSecOps",
        "services.appsecText": "J'intègre la sécurité à votre cycle de développement au lieu de l'ajouter à la fin. Des contrôles automatiques s'exécutent à chaque commit et à chaque build : les vulnérabilités, les secrets exposés et les dépendances à risque sont détectés avant d'atteindre la production.",
        "services.appsecCta": "Sécuriser mon projet <i class=\"bi bi-arrow-right\"></i>",
        "services.sast": "Audits de code automatisés (SAST)",
        "services.sastText": "Analyse statique intégrée à la CI/CD et aux pull requests, avec des règles de lint orientées sécurité et des quality gates.",
        "services.sca": "Scan des dépendances &amp; des vulnérabilités",
        "services.scaText": "Audit continu des packages tiers et des images de conteneurs face aux CVE connues (SCA).",
        "services.secrets": "Détection de secrets",
        "services.secretsText": "Hooks pre-commit et scans en CI (gitleaks) qui empêchent les clés d'API, tokens et mots de passe d'entrer dans vos dépôts.",
        "services.dast": "Tests de sécurité web &amp; API",
        "services.dastText": "Tests dynamiques (DAST) et tests d'intrusion manuels selon l'OWASP Top 10 et l'OWASP API Security Top 10.",
        "services.pipelines": "Pipelines CI/CD sécurisés",
        "services.pipelinesText": "Conception de workflows de développement et de déploiement sécurisés, avec des contrôles de sécurité automatiques à chaque étape.",
        "services.hardening": "Durcissement &amp; cryptographie",
        "services.hardeningText": "CSP et en-têtes de sécurité, chiffrement de bout en bout des échanges HTTP et obfuscation du bundle de production.",
        "trusted.title": "Ils me font confiance",
        "trusted.subtitle": "Entreprises et marques pour lesquelles j'ai conçu et sécurisé des logiciels.",
        "contact.title": "Contact",
        "contact.subtitle": "Un projet, une évaluation de sécurité ou une opportunité d'emploi ? Parlons-en. Je réponds généralement sous 24 heures.",
        "contact.location": "Localisation",
        "contact.locationValue": "Yaoundé &amp; Douala, Cameroun",
        "contact.whatsapp": "Écrire sur WhatsApp",
        "contact.name": "Votre nom",
        "contact.email": "Votre e-mail",
        "contact.subject": "Comment puis-je vous aider ?",
        "contact.opt1": "Développement d'application web ou mobile",
        "contact.opt2": "Évaluation de sécurité / test d'intrusion",
        "contact.opt3": "DevSecOps / automatisation de la sécurité",
        "contact.opt4": "Opportunité d'emploi",
        "contact.opt5": "Autre",
        "contact.message": "Parlez-moi de votre projet",
        "contact.send": "Envoyer le message <i class=\"bi bi-send\"></i>",
        "contact.note": "Votre application de messagerie s'ouvrira avec le message prêt à être envoyé.",
        "footer.tagline": "Ingénieur logiciel &amp; Ingénieur en sécurité applicative. Des applications web et mobiles sécurisées, conçues pour durer.",
        "footer.rights": "Tous droits réservés",
        "cat.app": "App mobile",
        "cat.product": "App web",
        "cat.branding": "Site web",
        "cat.library": "Librairie",
        "card.more": "Voir le projet",
        "card.aria": "voir le détail du projet",
        "contact.error": "Merci de remplir tous les champs avec une adresse e-mail valide.",
        "details.pageTitle": "Détails du projet",
        "details.description": "Description",
        "details.features": "Fonctionnalités",
        "details.responsibilities": "Responsabilités",
        "details.challenges": "Défis",
        "details.solutions": "Solutions",
        "details.technologies": "Technologies",
        "details.info": "Informations du projet",
        "details.category": "Catégorie",
        "details.client": "Client",
        "details.date": "Date",
        "details.npm": "Voir sur npm",
        "details.learnMore": "En savoir plus",
        "details.visit": "Visiter le site",
        "details.prev": "Précédent",
        "details.next": "Suivant",
        "details.breadcrumbHome": "Accueil",
        "details.breadcrumbPortfolio": "Portfolio",
        "switch.label": "Changer de langue"
    }
  };

  function readStoredLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // Storage can be unavailable (private mode): the choice just won't persist
    }
  }

  function detectLanguage() {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (SUPPORTED.includes(fromUrl)) return fromUrl;
    const stored = readStoredLanguage();
    if (SUPPORTED.includes(stored)) return stored;
    const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : 'en';
  }

  // Capture the English (HTML) values once, before anything is translated
  function captureEnglish() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (!(key in dictionaries.en)) {
        dictionaries.en[key] = el.tagName === 'TITLE' ? el.textContent : el.innerHTML.trim();
      }
    });
    ATTRIBUTES.forEach(attr => {
      document.querySelectorAll(`[data-i18n-${attr}]`).forEach(el => {
        const key = el.getAttribute(`data-i18n-${attr}`);
        const htmlAttr = attr === 'typed' ? 'data-typed-items' : attr;
        if (!(key in dictionaries.en)) dictionaries.en[key] = el.getAttribute(htmlAttr);
      });
    });
  }

  let current = 'en';

  function t(key) {
    const value = dictionaries[current][key];
    return value !== undefined ? value : dictionaries.en[key];
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = t(el.dataset.i18n);
      if (value === undefined) return;
      if (el.tagName === 'TITLE') el.textContent = value;
      else el.innerHTML = value;
    });
    ATTRIBUTES.forEach(attr => {
      document.querySelectorAll(`[data-i18n-${attr}]`).forEach(el => {
        const value = t(el.getAttribute(`data-i18n-${attr}`));
        if (value === undefined) return;
        el.setAttribute(attr === 'typed' ? 'data-typed-items' : attr, value);
      });
    });
  }

  function updateSwitchers() {
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      const active = btn.dataset.lang === current;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    document.querySelectorAll('.lang-switch').forEach(el => el.setAttribute('aria-label', t('switch.label')));
  }

  function setLanguage(lang, options = {}) {
    if (!SUPPORTED.includes(lang)) lang = 'en';
    current = lang;
    document.documentElement.lang = lang;
    applyTranslations();
    updateSwitchers();
    if (options.persist !== false) storeLanguage(lang);
    if (options.silent !== true) {
      document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
    }
  }

  window.I18N = {
    t,
    setLanguage,
    get lang() { return current; }
  };

  captureEnglish();
  // Initial pass is silent: other scripts read I18N.lang when they first render
  setLanguage(detectLanguage(), { persist: false, silent: true });

  document.addEventListener('click', e => {
    const btn = e.target.closest('.lang-switch button');
    if (btn && btn.dataset.lang !== current) setLanguage(btn.dataset.lang);
  });
})();
