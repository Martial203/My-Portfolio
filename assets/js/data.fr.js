// French translations of the portfolio projects, keyed by project name (see data.js).
// Only the fields displayed on the site are translated; anything missing falls back to English.
const projectsFr = {
  "SeTo (Secure Toolkit for Angular)": {
    shortDescription: "Collection de schematics Angular qui initialise un projet Angular sécurisé et entièrement outillé en un seul ng add",
    categoryLabel: "Librairie (schematics Angular)",
    client: "Open source (npm)",
    description: "SeTo (Secure Toolkit) est une collection de schematics Angular qui met en place, en une seule commande, tout ce dont un projet Angular a besoin pour être sécurisé et correctement outillé dès le premier jour : internationalisation, chiffrement de bout en bout des échanges HTTP, Content Security Policy, obfuscation du bundle de production, lint strict et contrôles automatiques au commit. Au lieu de recopier la même configuration sur chaque nouveau projet, « ng add @martiald/seto » pose quelques questions et génère une configuration standardisée, prête pour des environnements exigeants comme la santé, la finance ou les infrastructures critiques.",
    features: [
      "Menu interactif ng add pour choisir les configurations à appliquer au projet",
      "Mise en place de l'i18n avec Transloco et @martiald/translator",
      "Chiffrement de bout en bout des échanges HTTP avec @martiald/e2e-encryption",
      "Content Security Policy stricte, en-têtes de sécurité Nginx, Dockerfile et index.html dev/prod",
      "Obfuscation du bundle de production avec javascript-obfuscator",
      "Règles ESLint, Prettier et lint-staged strictes au commit",
      "Détection de secrets (Husky + gitleaks) et audit des dépendances (npm audit) en pre-commit",
      "Mode non interactif pour les pipelines CI et la génération de projets en masse"
    ],
    responsibilities: [
      "Conception et développement de toute la collection de schematics avec l'Angular DevKit",
      "Définition d'un ordre d'exécution fixe tenant compte des dépendances entre schematics",
      "Rédaction de la documentation de chaque schematic (options, fichiers générés, dépannage)",
      "Publication et maintenance du package sur npm"
    ],
    challenges: [
      "Garder chaque schematic indépendant tout en gérant les points de couplage (domaines CSP et handshake de chiffrement, build Docker et obfuscation)",
      "Modifier sans risque les fichiers existants du projet (app.config.ts, angular.json, package.json) sans casser la configuration de l'utilisateur",
      "Rendre la même configuration utilisable en mode interactif comme en CI"
    ],
    solutions: [
      "Utilisation des transformations d'arbre de l'Angular DevKit pour appliquer des modifications idempotentes et vérifiables",
      "Exposition de chaque question sous forme d'option en ligne de commande pour un usage non interactif",
      "Documentation des interactions entre schematics pour guider les choix de configuration"
    ]
  },
  "E2E Encryption for Angular": {
    shortDescription: "Intercepteur et services Angular pour le chiffrement et le déchiffrement de bout en bout des requêtes et réponses HTTP",
    categoryLabel: "Librairie (Angular / Sécurité)",
    client: "Open source (npm)",
    description: "@martiald/e2e-encryption est une librairie Angular qui chiffre et déchiffre les échanges HTTP entre le frontend et un backend compatible, en plus de TLS. Au démarrage, le client effectue un handshake d'échange de clés avec le serveur (ECDH X25519) et dérive une clé de session partagée avec HKDF-SHA256. Un intercepteur HTTP chiffre ensuite de manière transparente les données envoyées et déchiffre les réponses avec AES-GCM, y compris pour l'envoi et le téléchargement de fichiers.",
    features: [
      "Mise en place plug-and-play avec provideE2EEncryption() et un intercepteur HTTP fonctionnel",
      "Échange de clés ECDH (X25519) et dérivation de la clé de session en HKDF-SHA256, alignés sur une implémentation backend Java",
      "Chiffrement et déchiffrement AES-GCM des données JSON",
      "Chiffrement des fichiers dans les FormData et déchiffrement des Blob téléchargés",
      "Nouvelles tentatives du handshake avec backoff exponentiel et état de session réactif (Signals) pour l'interface",
      "Entièrement basée sur la Web Crypto API native du navigateur"
    ],
    responsibilities: [
      "Conception du protocole de handshake et de dérivation de la clé de session avec l'équipe backend",
      "Implémentation du CryptoService, de l'intercepteur HTTP et des providers",
      "Garantie de la compatibilité octet par octet de HKDF et des formats de données avec le backend Java",
      "Publication et maintenance du package sur npm"
    ],
    challenges: [
      "Faire correspondre exactement les primitives cryptographiques et les encodages entre le navigateur et Java",
      "Éviter plusieurs handshakes simultanés quand plusieurs requêtes démarrent en même temps",
      "Gérer les contenus binaires (fichiers) en plus des données JSON"
    ],
    solutions: [
      "Implémentation explicite de HKDF-SHA256 pour reproduire celle du backend",
      "Partage d'un unique Observable de handshake en cours entre les requêtes concurrentes",
      "Ajout de fonctions dédiées au chiffrement des FormData et au déchiffrement des Blob"
    ]
  },
  "Translator for Angular": {
    shortDescription: "Service Angular pour initialiser et changer dynamiquement la langue de l'application, avec persistance entre les rechargements",
    categoryLabel: "Librairie (Angular / i18n)",
    client: "Open source (npm)",
    description: "@martiald/translator est un service Angular qui encapsule @jsverse/transloco pour gérer la langue active de l'application et la conserver dans le localStorage, afin que le choix de l'utilisateur survive aux rechargements de page. Il fournit une API simple et cohérente, réutilisée d'un projet à l'autre, pour initialiser la langue au démarrage et la changer dynamiquement.",
    features: [
      "initLanguage() restaure la langue enregistrée au démarrage, ou conserve celle par défaut de Transloco",
      "setLanguage() change dynamiquement la langue active et l'enregistre",
      "getLanguage() renvoie la langue active",
      "Fonctionne par-dessus une configuration Transloco existante, sans la remplacer"
    ],
    responsibilities: [
      "Conception et développement de la librairie et de son API publique",
      "Intégration dans le schematic de traduction de SeTo",
      "Publication et maintenance du package sur npm"
    ],
    challenges: [
      "Fournir une couche réutilisable de gestion de la langue sans dupliquer la configuration Transloco"
    ],
    solutions: [
      "Transloco conservé comme peer dependency, la librairie se limitant à la gestion et à la persistance de la langue active"
    ]
  },
  "XSS Sanitization for Angular": {
    shortDescription: "Intercepteur HTTP Angular qui assainit les données des requêtes sortantes contre les failles XSS avec DOMPurify",
    categoryLabel: "Librairie (Angular / Sécurité)",
    client: "Open source (npm)",
    description: "@martiald/xss-sanitization est une librairie Angular qui protège les applications contre les attaques Cross-Site Scripting (XSS) en assainissant les saisies des utilisateurs avant qu'elles ne quittent le navigateur. Un intercepteur HTTP fonctionnel parcourt le corps de chaque requête sortante, nettoie chaque chaîne de caractères avec DOMPurify et transmet une copie assainie au backend : le HTML ou les scripts malveillants n'atteignent jamais le serveur et ne peuvent pas être stockés puis réaffichés à d'autres utilisateurs. Elle bloque aussi les clés de pollution de prototype et laisse intacts les fichiers et les contenus binaires.",
    features: [
      "Intercepteur fonctionnel prêt à l'emploi (xssSanitizerInterceptor), à déclarer avec provideHttpClient(withInterceptors(...))",
      "Assainissement récursif de toutes les chaînes des corps de requête JSON, y compris les objets et tableaux imbriqués",
      "Chaînes nettoyées avec DOMPurify en utilisant son profil HTML",
      "Protection contre la pollution de prototype : les clés __proto__, constructor et prototype sont ignorées",
      "Les FormData, Blob, File et ArrayBuffer sont transmis tels quels pour ne pas casser l'envoi de fichiers",
      "Travail sur une copie profonde du corps (structuredClone), sans jamais modifier les données d'origine"
    ],
    responsibilities: [
      "Conception et développement de la librairie et de son intercepteur",
      "Définition des types de contenus à assainir et de ceux à laisser passer",
      "Publication et maintenance du package sur npm"
    ],
    challenges: [
      "Assainir des données arbitraires et profondément imbriquées sans altérer les valeurs non textuelles",
      "Ne pas casser l'envoi de fichiers et les requêtes binaires",
      "Éviter tout effet de bord sur les données encore utilisées par l'application"
    ],
    solutions: [
      "Parcours récursif avec Reflect.ownKeys qui n'assainit que les chaînes et conserve tels quels nombres, booléens et dates",
      "Exclusion explicite des instances FormData, Blob, File, ArrayBuffer, Date et RegExp",
      "Assainissement appliqué à un structuredClone du corps, envoyé via req.clone()"
    ]
  },
  "iSA SFA": {
    shortDescription: "Application mobile de Sales Force Automation avec optimisation des tournées des commerciaux terrain",
    categoryLabel: "Application mobile (Sales Force Automation · Optimisation de tournées)",
    description: "iSA SFA est une application mobile de Sales Force Automation éditée par ISNOV SARL et intégrée à l'ERP INOV. Elle aide les équipes commerciales des secteurs de la distribution, de l'industrie, des services et du pétrole à planifier et suivre leurs visites clients, à consulter les données clients (historique des commandes, préférences, créances), à vérifier la disponibilité des produits et à passer des commandes directement sur le terrain, pendant que les superviseurs suivent l'activité et la performance grâce à des tableaux de bord. J'ai contribué à plusieurs fonctionnalités de l'application et j'ai notamment développé le module de routing, qui calcule l'itinéraire optimal de chaque commercial à partir de ses visites planifiées, afin de minimiser la distance parcourue et la consommation de carburant.",
    features: [
      "Optimisation des tournées : ordre de visite et itinéraire optimaux calculés à partir des visites planifiées du commercial",
      "Planification, suivi et justification des visites en temps réel avec géolocalisation",
      "Données clients centralisées : historique des commandes, préférences d'achat et créances",
      "Vérification de la disponibilité des produits et prise de commande sur le terrain",
      "Mode hors-ligne avec synchronisation automatique des données une fois connecté",
      "Tableaux de bord et indicateurs de performance pour les superviseurs"
    ],
    responsibilities: [
      "Conception et développement du module de routing qui calcule l'itinéraire le plus court entre les visites planifiées",
      "Intégration de la tournée optimisée dans le parcours de visite du commercial",
      "Contribution au développement d'autres fonctionnalités de l'application mobile",
      "Intégration de l'application avec le backend de l'ERP INOV"
    ],
    challenges: [
      "Trouver le meilleur ordre de visite parmi de nombreux clients, un problème dont la complexité augmente très vite avec le nombre de visites",
      "Garder un calcul d'itinéraire suffisamment rapide sur mobile",
      "Accompagner des commerciaux terrain travaillant avec une couverture réseau instable"
    ],
    solutions: [
      "Création d'un module de routing dédié qui optimise l'ordre des visites pour réduire la distance totale et la consommation de carburant",
      "Calcul volontairement léger pour fournir rapidement un résultat sur l'appareil",
      "Stockage des données en mode offline-first, avec synchronisation dès que le réseau est disponible"
    ]
  },
  "Laboussole Emploi": {
    shortDescription: "Plateforme de recherche d'emploi pour trouver des offres, créer un CV professionnel et rédiger ses lettres de motivation",
    categoryLabel: "Application web (Job board)",
    description: "Laboussole Emploi est une plateforme web qui aide les chercheurs d'emploi à trouver le poste de leurs rêves. Les utilisateurs peuvent rechercher des offres par mot-clé et par lieu, consulter les offres les plus récentes et utiliser des outils dédiés pour créer un CV professionnel et rédiger leur lettre de motivation.",
    features: [
      "Recherche d'emploi par intitulé de poste, mot-clé et lieu",
      "Liste des offres d'emploi récentes",
      "Création de CV professionnel (« Mon CV pro »)",
      "Outil de lettre de motivation (« Ma lettre de motivation »)",
      "Inscription et authentification des utilisateurs",
      "Interface responsive pour ordinateur et mobile"
    ],
    responsibilities: [
      "Développement du frontend de l'application web avec Angular et TailwindCSS",
      "Implémentation des parcours de recherche d'emploi, de liste des offres et de compte utilisateur",
      "Intégration des API REST du backend"
    ],
    challenges: [
      "Offrir une recherche rapide et intuitive sur un grand nombre d'offres",
      "Concevoir des outils de CV et de lettre de motivation simples à utiliser"
    ],
    solutions: [
      "Composants Angular réutilisables et TailwindCSS pour une interface cohérente et responsive",
      "Vues de recherche et de liste structurées autour des filtres par mot-clé et par lieu"
    ]
  },
  "Bantou Food": {
    shortDescription: "Application de recettes africaines avec instructions pas à pas et restaurants géolocalisés.",
    categoryLabel: "Application mobile",
    description: "Bantou Food est une application mobile riche en culture qui propose des recettes africaines authentiques de tout le continent. Avec des étapes joliment illustrées, des récits culturels et des instructions bilingues (anglais/français), l'application veut rapprocher les utilisateurs de l'Afrique à travers sa cuisine. Au-delà de la cuisine, elle aide à trouver les restaurants proches qui servent ces plats, avec géolocalisation, itinéraire et appel en un geste.",
    features: [
      "Des centaines de recettes traditionnelles par pays (par exemple le Yassa du Sénégal ou le Ndolé du Cameroun)",
      "Accompagnement pas à pas, avec des vidéos tutoriels pour certaines recettes",
      "Contenu bilingue en anglais et en français",
      "Géolocalisation pour trouver les restaurants proches qui proposent le plat choisi",
      "Fiches restaurants avec localisation, itinéraire et appel direct"
    ],
    responsibilities: [
      "Développement du frontend mobile avec Ionic et Angular",
      "Intégration des API REST du backend dans l'application mobile",
      "Conception et implémentation du microservice de gestion des recettes (Node.js + MongoDB)",
      "Contribution à l'amélioration de l'expérience pour les utilisateurs bilingues",
      "Déploiement et gestion des versions sur le Play Store et l'App Store",
      "Intégration de Google AdMob pour la monétisation publicitaire"
    ],
    challenges: [
      "Concilier un contenu multimédia riche (vidéos, images, textes culturels) avec de bonnes performances sur mobile",
      "Garantir une navigation fluide pour les utilisateurs bilingues",
      "Intégrer la géolocalisation et les itinéraires sur tous les appareils"
    ],
    solutions: [
      "Schéma backend modulaire prenant en charge le multilingue et les contenus riches en médias",
      "Plugins Capacitor pour améliorer la compatibilité des cartes et des appels selon les appareils",
      "Mise en cache et chargement différé pour améliorer les performances sur mobile"
    ]
  },
  "MoorCast": {
    shortDescription: "Application mobile de podcasts sur les sujets qui concernent les communautés noires dans le monde",
    categoryLabel: "Application mobile",
    description: "MoorCast est une application mobile de podcasts qui aborde des sujets clés comme la famille, les affaires, la politique, la technologie et la religion, qui concernent les personnes noires en Afrique et dans le monde. L'application permet d'écouter des podcasts enregistrés, d'organiser des playlists, de gérer ses favoris, de contrôler la lecture et d'écouter des émissions audio en direct.",
    features: [
      "Écoute de podcasts enregistrés avec contrôles de lecture (pause, avance, favoris)",
      "Création et organisation de playlists pour personnaliser l'écoute",
      "Diffusion audio en direct basée sur WebRTC pour les émissions en temps réel",
      "Lecture en arrière-plan pour continuer l'écoute en utilisant d'autres applications",
      "Lecteur audio personnalisé, conforme à la charte UI/UX de MoorCast"
    ],
    responsibilities: [
      "Développement du frontend de l'application mobile avec Ionic, Angular et Capacitor",
      "Implémentation de la diffusion audio en direct avec WebRTC",
      "Lecture audio fluide en arrière-plan et gestion de l'état de lecture",
      "Collaboration avec les designers pour respecter fidèlement l'identité visuelle et les parcours utilisateur"
    ],
    challenges: [
      "Intégrer un streaming audio en temps réel à faible latence pour les émissions en direct",
      "Maintenir une lecture continue quand l'application est en arrière-plan ou l'appareil verrouillé",
      "Respecter strictement la charte graphique du client tout en optimisant l'expérience"
    ],
    solutions: [
      "WebRTC pour un streaming audio en direct efficace et en temps réel",
      "Plugins natifs Capacitor pour la lecture en arrière-plan sur toutes les plateformes",
      "Architecture modulaire pour un code propre, évolutif et une interface cohérente"
    ]
  },
  "MoorNews": {
    shortDescription: "Application mobile d'actualités couvrant de nombreux secteurs dans le monde",
    categoryLabel: "Application mobile",
    description: "MoorNews est une application mobile pour lire et suivre l'actualité sur des sujets variés comme le sport, la finance, l'entrepreneuriat et bien d'autres, dans le monde entier. Elle offre une expérience personnalisée avec les mentions j'aime, la gestion des favoris et des notifications push pour rester informé des actualités pertinentes.",
    features: [
      "Lecture d'articles dans de nombreuses catégories : sport, finance, entrepreneuriat…",
      "Liste personnalisée d'articles favoris, facile d'accès",
      "Mentions j'aime pour exprimer ses préférences et améliorer les recommandations",
      "Notifications push pour être alerté des nouveaux articles pertinents",
      "Intégration de Google AdMob pour la monétisation"
    ],
    responsibilities: [
      "Développement du frontend mobile avec des interfaces responsives et simples d'utilisation",
      "Gestion côté client des mentions j'aime et des favoris",
      "Intégration des notifications push pour les mises à jour en temps réel",
      "Collaboration avec l'équipe backend pour l'intégration des API et la gestion des données",
      "Déploiement et gestion des versions sur le Play Store",
      "Intégration de Google AdMob pour la monétisation publicitaire"
    ],
    challenges: [
      "Recevoir et traiter les notifications push en temps réel sans épuiser les ressources de l'appareil",
      "Concevoir une interface intuitive pour naviguer facilement entre des catégories variées",
      "Garder une gestion d'état fluide côté client pour les mentions j'aime et les favoris"
    ],
    solutions: [
      "Services d'arrière-plan efficaces et gestion optimisée des notifications push",
      "Composants d'interface propres et modulaires pour améliorer l'expérience",
      "Librairies de gestion d'état pour synchroniser les préférences de façon transparente"
    ]
  },
  "MoorQuotes": {
    shortDescription: "Découvrir la sagesse africaine à travers les proverbes et les figures historiques",
    categoryLabel: "Application mobile",
    description: "MoorQuotes est une application mobile immersive qui fait découvrir toute la profondeur et la richesse de la sagesse africaine. À travers une sélection de proverbes, des commentaires et des récits historiques, MoorQuotes valorise le patrimoine africain et invite à une réflexion quotidienne.",
    features: [
      "Un proverbe africain chaque jour pour inspirer et motiver",
      "Contexte culturel et origine détaillés de chaque proverbe",
      "Ajout aux favoris et sauvegarde des citations pour les relire plus tard",
      "Commentaires interactifs pour partager ses réflexions et interprétations",
      "Section dédiée aux grandes figures historiques africaines et à leur histoire",
      "Intégration de Google AdMob pour la monétisation"
    ],
    responsibilities: [
      "Conception et implémentation de l'interface mobile avec Ionic et Angular",
      "Intégration d'un système de gestion de contenu pour diffuser les proverbes du jour et les portraits historiques",
      "Développement des favoris, des commentaires et de la consultation des contenus culturels",
      "Navigation et performances fluides sur tous les appareils grâce à des composants optimisés",
      "Déploiement et gestion des versions sur le Play Store et l'App Store",
      "Intégration de Google AdMob pour la monétisation publicitaire"
    ],
    challenges: [
      "Concevoir une interface à la fois simple et riche culturellement",
      "Concevoir des structures de données flexibles pour les contenus multilingues et leurs métadonnées",
      "Créer une expérience engageante autour des contenus (citations, légendes, commentaires)"
    ],
    solutions: [
      "Design minimaliste avec des éléments visuels vibrants qui reflètent l'authenticité culturelle",
      "Gestion et mise en cache locales des données pour un accès rapide et fiable, le contenu étant peu variable et non critique",
      "Parcours intuitif pour découvrir, sauvegarder et interagir avec les contenus"
    ]
  },
  "MoorRadio": {
    shortDescription: "Application gratuite d'écoute de radios afro en streaming",
    categoryLabel: "Application mobile",
    description: "MoorRadio est une application mobile qui permet d'écouter en streaming plus de 1 000 radios afro-centrées du continent et de la diaspora. Pensée pour offrir une expérience culturelle et musicale riche, elle propose une écoute personnalisée avec playlists, recherche, favoris et lecteur audio sur mesure.",
    features: [
      "Écoute en direct de plus de 1 000 radios africaines",
      "Lecteur audio personnalisé avec égaliseur intégré",
      "Playlists, recherche, favoris et mentions j'aime",
      "Lecture en arrière-plan pour une écoute sans interruption"
    ],
    responsibilities: [
      "Développement et maintenance de l'application mobile avec Ionic et Angular",
      "Implémentation de fonctions de lecture audio personnalisées, dont l'égaliseur",
      "Déploiement et gestion des versions sur le Play Store",
      "Intégration de Google AdMob pour la monétisation publicitaire"
    ],
    challenges: [
      "Garantir une lecture fluide sur un très grand nombre de stations",
      "Optimiser l'expérience pour les connexions à faible débit"
    ],
    solutions: [
      "Lecteur audio sur mesure avec égaliseur pour plus de contrôle et une meilleure qualité d'écoute",
      "Stratégies de cache et gestion d'état efficace pour une expérience fluide"
    ]
  },
  "QuickDocta": {
    shortDescription: "Trouver et contacter des médecins et des pharmacies de confiance partout en Afrique",
    categoryLabel: "Application mobile",
    description: "QuickDocta est une plateforme mobile qui permet de découvrir, localiser et contacter des médecins, cliniques et pharmacies bien notés partout en Afrique. Pensée pour être accessible et simple d'utilisation, l'application est bilingue (anglais et français) et propose des cartes interactives ainsi qu'un accès en temps réel aux informations et services de santé essentiels.",
    features: [
      "Liste sélectionnée de médecins et de pharmacies à proximité",
      "Carte interactive avec repères et itinéraire vers les établissements de santé",
      "Appel et itinéraire en un geste vers les professionnels de santé",
      "Fil de conseils santé et témoignages anonymes de patients",
      "Application bilingue : anglais et français",
      "Recherche et filtres avancés pour trouver rapidement",
      "Intégration de Google AdMob pour la monétisation"
    ],
    responsibilities: [
      "Développement de parties clés du client mobile avec Ionic et Angular",
      "Intégration du SDK Google Maps pour afficher les établissements de santé de façon interactive",
      "Implémentation de l'interface multilingue (anglais/français)",
      "Déploiement et publication de l'application sur les stores",
      "Intégration de Google AdMob pour la monétisation publicitaire"
    ],
    challenges: [
      "Concevoir une interface intuitive pour des utilisateurs variés dans plusieurs régions",
      "Garantir la performance et la réactivité de la carte et de la géolocalisation"
    ],
    solutions: [
      "Composants d'interface légers, optimisés pour le mobile et les appareils d'entrée de gamme",
      "Utilisation efficace du SDK Google Maps pour des repères et itinéraires précis",
      "Stratégies de traduction i18n pour le bilinguisme"
    ]
  },
  "Sahream": {
    shortDescription: "Plateforme de logement étudiant pour locataires et propriétaires",
    categoryLabel: "Application mobile",
    description: "Sahream est une plateforme mobile composée de deux applications, conçue pour simplifier le logement étudiant dans les villes africaines. La première s'adresse aux étudiants : elle leur permet de rechercher, consulter et réserver des chambres disponibles en toute transparence. La seconde est destinée aux propriétaires, pour gérer leurs annonces, suivre l'activité des locataires et contrôler les paiements en temps réel.",
    features: [
      "Les étudiants parcourent les chambres par ville, avec photos, vidéos, prix et équipements (Wi-Fi, salle de bain privée…)",
      "Carte intégrée avec itinéraire vers les logements via Google Maps",
      "Réservation et paiement des chambres dans l'application",
      "Les propriétaires ajoutent et gèrent leurs annonces avec photos et détails",
      "Consultation des informations des locataires et de l'historique des paiements",
      "Architecture à deux applications, pour les étudiants et pour les propriétaires"
    ],
    responsibilities: [
      "Développement des interfaces des applications locataire et propriétaire avec Ionic et Angular",
      "Implémentation de la navigation, des formulaires et de l'affichage dynamique des contenus",
      "Intégration des API de réservation, d'annonces, d'utilisateurs et de paiements",
      "Design responsive et expérience fluide sur tous les appareils"
    ],
    challenges: [
      "Concevoir deux expériences distinctes (locataires et propriétaires) dans une UI/UX cohérente",
      "Garantir un envoi et un affichage fiables des médias (photos/vidéos)",
      "Optimiser la carte et la géolocalisation pour les connexions à faible débit"
    ],
    solutions: [
      "Composants d'interface réutilisables pour accélérer le développement et garantir la cohérence visuelle",
      "Gestion optimisée des médias et chargement différé des ressources pour de meilleures performances",
      "SDK Google Maps pour une navigation précise et la localisation des logements"
    ]
  },
  "Prepa": {
    shortDescription: "Préparer et réussir ses concours d'entrée grâce aux anciennes épreuves, aux corrigés et à des outils intelligents",
    categoryLabel: "Application mobile",
    client: "Projet personnel",
    description: "Prepa est une application mobile qui accompagne les élèves et candidats dans la préparation des concours d'entrée aux grandes écoles. La plateforme donne accès aux anciennes épreuves, à des corrigés détaillés, à un chatbot tuteur intelligent et à un calendrier interactif des dates officielles. Prepa donne aux élèves des outils intelligents pour étudier, réviser et planifier efficacement leur réussite.",
    features: [
      "Accès à plus de 1 000 anciennes épreuves de concours, classées par catégorie",
      "Lecteur PDF intégré avec filigrane et protection contre le téléchargement",
      "Corrigés détaillés avec explications pas à pas",
      "Chatbot tuteur basé sur l'IA, disponible 24 h/24 pour un accompagnement personnalisé",
      "Calendrier interactif des concours avec rappels",
      "Authentification sécurisée avec OAuth 2.0 (Google, Facebook)",
      "RBAC (contrôle d'accès basé sur les rôles) selon le niveau d'abonnement",
      "Cache hors-ligne et optimisation des performances",
      "Passerelle de paiement sécurisée pour les offres premium"
    ],
    responsibilities: [
      "Développement fullstack de l'application mobile et des services backend",
      "Implémentation d'un lecteur PDF intégré et sécurisé, avec filigrane et blocage des captures d'écran",
      "Développement d'un script générant automatiquement les requêtes d'insertion MongoDB à partir d'une arborescence de fichiers, pour importer plus de 1 000 épreuves",
      "Conception d'une navigation intuitive façon dossiers pour explorer les épreuves",
      "Intégration d'un chatbot basé sur des API d'IA pour des questions-réponses interactives",
      "Développement du calendrier événementiel et des notifications de suivi des concours",
      "Authentification et contrôle d'accès sécurisés avec JWT et OAuth 2.0",
      "Mécanismes de cache client/serveur pour la performance et la montée en charge"
    ],
    challenges: [
      "Construire un lecteur PDF sécurisé qui empêche le téléchargement et les captures d'écran",
      "Ajouter aux PDF un filigrane avec l'identifiant de l'utilisateur pour tracer et dissuader les fuites",
      "Créer une interface de navigation des épreuves simple, façon explorateur de fichiers",
      "Automatiser l'import de milliers de fichiers d'épreuves dans MongoDB",
      "Concevoir un calendrier personnalisé avec rappels et mises à jour en direct",
      "Garantir l'accès hors-ligne et un chargement rapide grâce au cache",
      "Mettre en place le RBAC et des accès sécurisés liés aux niveaux d'abonnement"
    ],
    solutions: [
      "Lecteur PDF sur mesure avec restrictions et filigranes dynamiques",
      "Scripts d'automatisation pour structurer et importer en masse les épreuves",
      "Stockage local et cache côté serveur pour un accès rapide à faible latence",
      "Formulaires réactifs et gestion d'état Angular pour une expérience fluide",
      "Modèles d'IA intégrés au chatbot, avec une logique de repli",
      "Modèles inspirés de l'API Google Calendar pour gérer les événements du calendrier"
    ]
  },
  "Aida": {
    shortDescription: "Assistant d'urgence basé sur l'IA pour guider les premiers secours",
    categoryLabel: "Application mobile",
    description: "Aida est un assistant mobile de premiers secours basé sur une intelligence artificielle contextualisée. Conçue pour aider les personnes en situation d'urgence, l'application guide en temps réel, y compris à la voix, les gestes qui sauvent. Par texte, message vocal ou image, l'utilisateur échange avec Aida pour recevoir des instructions précises, étape par étape, adaptées à la situation, tout en étant orienté vers les hôpitaux les plus proches avec leurs coordonnées et une carte.",
    features: [
      "Chatbot IA contextuel d'aide aux premiers secours (texte, voix, image)",
      "Réponses de l'IA en voix et en texte, adaptées au contexte de l'urgence",
      "Guidage en temps réel des gestes de premiers secours",
      "Recherche des hôpitaux les plus proches avec itinéraire et contacts",
      "Saisie multimodale (texte, voix, image)",
      "Appel d'urgence et itinéraire vers l'hôpital",
      "Interface intuitive et accessible, pensée pour agir vite sous le stress"
    ],
    responsibilities: [
      "Pilotage du développement fullstack de l'application mobile",
      "Intégration de l'API Gemini pour gérer les conversations contextuelles",
      "Développement des modules de reconnaissance vocale et de synthèse vocale",
      "Implémentation de l'analyse d'images pour les plaies et blessures",
      "Connexion aux services de localisation et au SDK Google Maps pour l'itinéraire vers les hôpitaux",
      "Prise en charge du hors-ligne et mise en cache des contenus d'urgence critiques"
    ],
    challenges: [
      "Construire une interface IA multimodale qui comprend la voix, le texte et les images",
      "Garantir des réponses de l'IA claires, rapides et adaptées aux situations d'urgence",
      "Concevoir une interface minimaliste pour des utilisateurs sous forte tension",
      "Trouver et afficher en temps réel des établissements de santé proches et fiables"
    ],
    solutions: [
      "API Gemini avec des prompts sur mesure et des couches de contexte d'urgence structurées",
      "Interface légère avec des échanges vocaux rapides et un retour clair",
      "API Google Maps pour des emplacements d'hôpitaux et des itinéraires à jour",
      "Mécanismes de sécurité de repli pour fournir les gestes de base même hors-ligne"
    ]
  },
  "MN-DEV Portfolio": {
    shortDescription: "Ce site lui-même : un portfolio personnel bilingue, optimisé pour la performance, avec Google Analytics",
    categoryLabel: "Site web (portfolio personnel)",
    client: "Projet personnel",
    description: "MN-DEV Portfolio est le site que vous consultez en ce moment : mon portfolio personnel, conçu pour présenter mon profil d'ingénieur logiciel et d'ingénieur en sécurité applicative, mon expérience, mes compétences et une sélection de mes projets. Réalisé comme un site statique rapide, sans framework, il est entièrement bilingue (anglais et français), alimenté par des données pour la partie projets, optimisé pour la performance et l'accessibilité, et connecté à Google Analytics pour mesurer son audience.",
    features: [
      "Intégration de Google Analytics 4 (gtag.js) pour mesurer le trafic, l'audience et l'engagement des visiteurs",
      "Internationalisation complète anglais/français avec sélecteur de langue, détection de la langue du navigateur, choix mémorisé et liens partageables ?lang=",
      "Portfolio piloté par les données : projets générés à partir d'un unique fichier JavaScript, avec filtres par catégorie, bouton « Voir plus » et page détaillée par projet",
      "Design responsive pour ordinateur, tablette et mobile, avec un écran d'accueil sombre à fort contraste et des appels à l'action clairs",
      "Optimisation des performances : images WebP, chargement différé, vignettes légères et polices allégées",
      "Formulaire de contact qui ouvre l'application mail du visiteur avec un message pré-rempli, sans backend",
      "Valeurs automatiques : âge, années d'expérience et année du copyright calculés dans le navigateur",
      "Métadonnées SEO et de partage (titre, description, Open Graph) et améliorations d'accessibilité (textes alternatifs, navigation au clavier, focus visible)"
    ],
    responsibilities: [
      "Conception de l'UI/UX et de l'identité de marque personnelle du site",
      "Développement de tout le frontend en HTML, CSS et JavaScript, sur la base d'un template Bootstrap",
      "Création d'un moteur i18n léger (attributs data-i18n, dictionnaire français, traductions des projets)",
      "Intégration de Google Analytics 4 pour suivre l'audience du site",
      "Optimisation des images et du chargement, et mise en ligne du site sur Vercel"
    ],
    challenges: [
      "Présenter clairement, en quelques secondes, un double profil (ingénierie logicielle et sécurité applicative)",
      "Gérer deux langues sur un site statique, y compris pour les contenus générés dynamiquement",
      "Garder un site rapide tout en présentant des projets riches en images"
    ],
    solutions: [
      "Contenu structuré autour d'un écran d'accueil fort, de compétences regroupées et d'une carte de services AppSec mise en avant",
      "Anglais conservé dans le HTML pour le SEO, traductions françaises chargées par un petit script, avec un événement « languagechange » pour actualiser les contenus dynamiques",
      "Vignettes WebP optimisées, images chargées en différé et cartes à ratio fixe pour une mise en page stable"
    ]
  },
  "OK Foods Cameroon (Redesign Concept)": {
    shortDescription: "Concept de refonte du site institutionnel d'OK Foods Cameroun, industriel agroalimentaire basé à Douala",
    categoryLabel: "Site web (concept de refonte)",
    client: "Concept (proposition non commandée, sans affiliation avec OK Foods)",
    description: "Ce projet est un concept de refonte que j'ai proposé pour le site institutionnel d'OK Foods Cameroun, fabricant de biscuits, de confiserie et de produits laitiers basé à Bonaberi, à Douala. Il est né de l'audit que j'ai mené sur le site actuellement en production et de mon analyse critique de l'expérience utilisateur qu'il offre : informations difficiles à trouver, image de marque datée et absence de parcours dédiés aux publics qui comptent le plus pour l'entreprise. Réalisé dans le cadre d'une proposition commerciale, il n'a pas été commandé et ne constitue pas le site officiel de l'entreprise.\n\nAu-delà de la refonte visuelle, le concept a été pensé autour d'objectifs business. Chaque page s'adresse à un public précis : les distributeurs et partenaires, grâce à un appel à l'action « Partenariat » présent sur toutes les pages ; les consommateurs, avec un catalogue des marques et des produits ; les candidats, avec un parcours de recrutement complet ; et tous les visiteurs, avec des éléments de réassurance comme les certifications qualité et l'historique de l'entreprise. Google Analytics 4 est intégré pour mesurer le trafic, l'audience et le comportement des visiteurs, afin de piloter le site à partir de données, et des métadonnées SEO améliorent la visibilité de l'entreprise dans les moteurs de recherche.",
    features: [
      "Intégration de Google Analytics 4 pour mesurer le trafic, l'audience et l'engagement, et piloter le site par la donnée",
      "Génération de leads : appel à l'action « Partenariat » sur toutes les pages pour recueillir les demandes de distributeurs et de partenaires B2B",
      "Éléments de réassurance : certifications ISO 9001 / ISO 22000 mises en avant, historique de l'entreprise et section actualités",
      "Métadonnées SEO (titre et description) pour améliorer la visibilité dans les moteurs de recherche",
      "Cinq pages : Accueil, À propos, Nos marques, Carrières et Contact, chargées à la demande par le routeur Angular",
      "Internationalisation complète français/anglais avec sélecteur de langue, détection de la langue du navigateur et choix mémorisé",
      "Catalogue des marques avec un onglet par marque, fiches produits et variantes, et liens directs vers une marque",
      "Frise chronologique interactive retraçant l'histoire de l'entreprise depuis 1998",
      "Page Carrières avec les offres d'emploi et un formulaire de candidature (validation, envoi du CV en PDF, message pré-rempli)",
      "Page Contact avec un formulaire validé et une carte intégrée du site de production",
      "Animations au défilement basées sur IntersectionObserver",
      "Contenus (marques, produits, offres, historique, départements) alimentés par des fichiers JSON"
    ],
    responsibilities: [
      "Audit du site en production et analyse critique de son expérience utilisateur",
      "Définition des publics cibles (partenaires, consommateurs, candidats) et du parcours de conversion de chacun",
      "Conception de l'UI/UX et de la direction visuelle de la refonte",
      "Intégration de Google Analytics 4 et des métadonnées SEO",
      "Développement de tout le frontend avec Angular (composants standalone, signals) et TailwindCSS",
      "Création d'un service et d'un pipe de traduction légers pour le contenu bilingue",
      "Mise en ligne du concept sur Vercel pour la présentation au client"
    ],
    challenges: [
      "Transformer un site vitrine en véritable outil business, générateur de demandes de partenariat et de candidatures",
      "Donner une image moderne et cohérente à une entreprise multimarque où chaque marque a ses propres couleurs",
      "Livrer rapidement une démo convaincante et entièrement navigable pour une proposition commerciale",
      "Garder tout le contenu bilingue sans backend"
    ],
    solutions: [
      "Appels à l'action clairs pour chaque public et mesure de l'audience avec Google Analytics 4",
      "Couleurs d'accent propres à chaque marque, appliquées sur un design system commun construit avec TailwindCSS",
      "Pages pilotées par des fichiers JSON pour mettre à jour le contenu sans toucher aux composants",
      "Service de traduction basé sur les signals, qui charge des dictionnaires JSON et mémorise la langue choisie"
    ]
  },
  "Weblysoft Website": {
    shortDescription: "Site vitrine de l'entreprise Weblysoft LLC",
    categoryLabel: "Développement de site web",
    description: "Le site de Weblysoft est une vitrine moderne et responsive qui reflète l'identité, les valeurs et les services de Weblysoft LLC, une entreprise technologique spécialisée dans les solutions logicielles. Il présente la mission de l'entreprise, ses services, ses produits, les témoignages clients et son équipe. Son objectif : renforcer la présence en ligne de l'entreprise et soutenir son développement commercial.",
    features: [
      "Entièrement responsive et optimisé pour tous les appareils",
      "Design moderne et épuré, fidèle à l'identité de la marque",
      "Pages dédiées aux services, aux produits, à l'équipe et au contact",
      "Animations interactives et défilement fluide",
      "Structure et métadonnées optimisées pour le SEO",
      "Formulaire de contact avec validation et envoi par e-mail"
    ],
    responsibilities: [
      "Conception et développement de tout le frontend du site de l'entreprise",
      "Mise en page claire et convaincante pour retenir les visiteurs",
      "Intégration d'animations et d'effets au défilement pour enrichir l'expérience",
      "Collaboration avec le marketing pour aligner l'UI/UX sur la stratégie de marque",
      "Optimisation des performances et de l'accessibilité sur tous les écrans"
    ],
    challenges: [
      "Communiquer clairement tout en gardant un rendu visuel moderne",
      "Construire un site facile à maintenir et à faire évoluer",
      "Concilier performances, animations et contraintes SEO"
    ],
    solutions: [
      "Bootstrap pour un design modulaire et responsive",
      "HTML sémantique et stratégies de chargement optimisées",
      "Librairies JS légères (GSAP, AOS) pour des animations dynamiques mais performantes"
    ]
  },
  "Dietch Consulting": {
    shortDescription: "Site trilingue de conseil conjugal et familial",
    categoryLabel: "Développement de site web",
    description: "Dietch Consulting est un cabinet trilingue de conseil conjugal et familial qui accompagne ses clients en anglais, en français et en espagnol. Sa mission : réduire le taux de divorce, limiter les conséquences sociales des ruptures familiales et améliorer la communication au sein des familles. Le site présente sa méthode (formation, accompagnement et suivi dans la durée) et permet de prendre rendez-vous.",
    features: [
      "Présentation de la mission, des objectifs et des services de Dietch Consulting",
      "Contenu multilingue pour une clientèle internationale (anglais, français, espagnol)",
      "Appels à l'action clairs pour prendre rendez-vous",
      "Section dédiée à la proposition de valeur unique du service",
      "Design responsive, adapté au mobile",
      "Mise en page optimisée pour la lisibilité et la clarté"
    ],
    responsibilities: [
      "Développement du frontend du site en HTML5, CSS3 et Bootstrap",
      "Structure de contenu multilingue pour les publics francophone, anglophone et hispanophone",
      "Design responsive et compatibilité avec tous les appareils",
      "Structuration et mise en avant des messages clés, alignés sur la mission de l'entreprise",
      "Intégration du parcours de prise de rendez-vous (orienté appel à l'action)"
    ],
    challenges: [
      "Aborder des sujets émotionnellement sensibles avec clarté et empathie",
      "Rendre la plateforme accessible dans plusieurs langues et cultures",
      "Structurer beaucoup d'informations sans submerger le visiteur"
    ],
    solutions: [
      "Design épuré avec une palette de couleurs apaisante et professionnelle",
      "Hiérarchie typographique et découpage en sections clairs pour faciliter la navigation",
      "Mise en page structurée et évolutive pour accueillir de futurs contenus"
    ]
  },
  "Easy Integration": {
    shortDescription: "Site d'une entreprise internationale de formation IT et d'intégration de systèmes",
    categoryLabel: "Développement de site web",
    description: "Easy Integration est une entreprise IT multinationale présente au Cameroun, en Allemagne et en Côte d'Ivoire. Le site présente ses services de formation et de transformation digitale : intégration de systèmes avec Mulesoft et Apache Camel, solutions d'IA, déploiement d'ERP/CRM et développement d'API sur mesure. Il s'adresse à un public multilingue, en français, en anglais et en allemand.",
    features: [
      "Site responsive et multilingue pour une visibilité internationale",
      "Présentation des formations et des solutions de transformation digitale",
      "Sections détaillées sur l'expertise en API et en intégration de systèmes",
      "Formulaire interactif d'inscription aux formations avec choix du créneau",
      "Paiement en ligne sécurisé pour l'inscription aux formations",
      "Prise en charge multilingue (français, anglais, allemand)",
      "Interface moderne avec visuels thématiques et mise en page responsive"
    ],
    responsibilities: [
      "Développement et structuration du site multilingue de l'entreprise",
      "Design responsive pour ordinateur et mobile",
      "Inscription via un calendrier avec choix du créneau horaire",
      "Intégration d'un paiement en ligne sécurisé pour les inscriptions",
      "Mise en valeur de l'offre de services dans une mise en page claire et engageante",
      "Compatibilité entre navigateurs et accessibilité"
    ],
    challenges: [
      "Créer un parcours d'inscription en plusieurs étapes fluide, avec choix d'horaire",
      "Gérer dynamiquement le contenu multilingue sur tout le site",
      "Mettre en place un paiement sécurisé et simple à utiliser"
    ],
    solutions: [
      "Système d'inscription modulaire avec calendrier de créneaux intégré",
      "Grille Bootstrap et JavaScript pour un multilingue responsive",
      "API Stripe/PayPal pour des paiements sécurisés et une validation en temps réel"
    ]
  },
  "PerAnk": {
    shortDescription: "Site d'une maison d'édition pour des auteurs de tous horizons",
    categoryLabel: "Développement de site web",
    description: "PerAnk est un site moderne et responsive qui présente les services des Éditions Per Ankh Québec, une maison d'édition engagée à promouvoir la diversité des voix et à accompagner les auteurs tout au long du processus d'édition. La plateforme reflète des valeurs d'inclusion, de créativité et de transparence, tout en offrant des outils pratiques pour soumettre un manuscrit et découvrir les services.",
    features: [
      "Présentation claire de la mission, de la vision et des objectifs éditoriaux",
      "Mise en page en plusieurs sections : services, processus de soumission et accompagnement des auteurs",
      "Appels à l'action pour soumettre un manuscrit ou demander un service",
      "Description détaillée des options d'édition, en misant sur la transparence",
      "Design responsive et adaptatif pour toutes les tailles d'écran",
      "Interface élégante et accessible, avec une navigation fluide"
    ],
    responsibilities: [
      "Conception et intégration d'une interface claire et accessible avec Bootstrap",
      "Structuration du contenu pour la lisibilité et le SEO",
      "Mises en page responsives pour ordinateur, tablette et mobile",
      "Intégration d'un formulaire de contact et de soumission de manuscrit",
      "Langage visuel multilingue et inclusif"
    ],
    challenges: [
      "Traduire une vision éditoriale forte en une mise en page élégante et lisible",
      "Prévoir une architecture capable d'accueillir de futurs services d'édition",
      "Garder des parcours utilisateur clairs et transparents"
    ],
    solutions: [
      "Structure en composants modulaires pour faciliter les mises à jour et l'évolution",
      "Travail rapproché avec l'équipe éditoriale pour aligner l'identité visuelle sur la mission",
      "HTML sémantique et bonnes pratiques d'accessibilité pour renforcer la confiance et la clarté"
    ]
  },
  "Sawk Conseils": {
    shortDescription: "Site d'un cabinet de conseil en développement international",
    categoryLabel: "Développement de site web",
    description: "Sawk Conseils est le site de présentation de SAWK Advices Inc, un cabinet de conseil qui aide les entreprises à se développer à l'international. La plateforme présente ses services, sa présence internationale et son expertise sectorielle, en mettant en avant la confiance de ses clients et ses succès sur plus de 54 marchés.",
    features: [
      "Page d'accueil avec chiffres clés et proposition de valeur",
      "Présentation détaillée des services et des domaines d'expertise",
      "Témoignages par secteur issus de cas clients réussis",
      "Animations interactives et effets au défilement avec AOS.js",
      "Mise en page optimisée pour une clientèle internationale et multilingue",
      "Design responsive et adaptatif pour mobile, tablette et ordinateur"
    ],
    responsibilities: [
      "Conception et développement de toute la structure responsive du site en HTML et TailwindCSS",
      "Animations et transitions fluides au défilement avec AOS.js",
      "Transformation d'un contenu stratégique en une interface visuellement percutante",
      "Expérience optimisée sur toutes les tailles d'écran et tous les appareils",
      "Collaboration avec l'équipe métier pour aligner l'identité de marque et le contenu web"
    ],
    challenges: [
      "Transmettre une présence et une expertise mondiales sur une seule page",
      "Créer une interface élégante et professionnelle, à la hauteur de clients corporate exigeants",
      "Gérer de gros blocs de contenu tout en préservant l'harmonie visuelle et l'ergonomie"
    ],
    solutions: [
      "TailwindCSS pour une mise en page propre, modulaire et très responsive",
      "AOS.js pour enrichir l'expérience sans sacrifier les performances",
      "Contenu structuré en sections avec un rythme visuel et une identité cohérents"
    ]
  },
  "TRS Properties": {
    shortDescription: "Site immobilier pour présenter et vendre des biens et des terrains",
    categoryLabel: "Développement de site web",
    description: "TRS Properties est le site d'une société immobilière qui présente un large choix de biens : terrains, immeubles résidentiels et opportunités d'investissement. Construite avec des technologies web modernes, la plateforme met en avant les annonces phares, présente les valeurs de l'entreprise et donne un accès simple aux détails des biens et aux moyens de contact.",
    features: [
      "Page d'accueil responsive présentant les biens et les valeurs de l'entreprise",
      "Interface moderne et épurée, optimisée pour la consultation de biens immobiliers",
      "Animations au défilement avec AOS.js pour une expérience fluide",
      "Section contact avec appel à l'action direct vers l'entreprise",
      "Mise en avant des biens les plus consultés et des biens phares",
      "Compatibilité mobile, tablette et ordinateur"
    ],
    responsibilities: [
      "Développement du frontend du site en HTML, CSS et TailwindCSS",
      "Intégration d'AOS.js pour mettre en valeur les contenus et les transitions",
      "Structuration et mise en forme des sections d'annonces pour plus de clarté et d'impact",
      "Design responsive et accessibilité sur toutes les tailles d'écran",
      "Collaboration avec l'équipe métier pour refléter l'identité de la marque en ligne"
    ],
    challenges: [
      "Concevoir une interface élégante et fonctionnelle pour un large public",
      "Structurer un contenu immobilier complexe sans submerger le visiteur",
      "Garder une cohérence visuelle entre les blocs de contenu animés"
    ],
    solutions: [
      "Classes utilitaires TailwindCSS pour une mise en page efficace et maintenable",
      "Animations au défilement avec AOS.js pour guider l'attention du visiteur",
      "Contenu organisé en composants réutilisables et adaptatifs, prêts à évoluer"
    ]
  },
  "Prepa Website": {
    shortDescription: "Site promotionnel de l'application Prepa, dédiée à la préparation des concours",
    categoryLabel: "Développement de site web",
    client: "Projet personnel",
    description: "Le site Prepa a été développé comme page d'accueil officielle de l'application mobile Prepa, qui donne accès aux anciennes épreuves de concours et à leurs corrigés. Il devait être réalisé rapidement pour soutenir une présentation de pitch urgente. Il présente de façon claire et attractive les fonctionnalités clés, les avantages et les moyens d'accéder à l'application.",
    features: [
      "Page d'accueil optimisée pour le SEO, réalisée dans un délai serré",
      "Mise en page responsive, adaptée au mobile, avec Bootstrap",
      "Animations et effets au défilement avec AOS.js",
      "Appel à l'action clair et mise en avant des fonctionnalités de l'application",
      "Contenu bilingue, aligné sur le public multilingue de l'application"
    ],
    responsibilities: [
      "Développement et mise en ligne du site promotionnel dans des délais très courts",
      "Adaptation et personnalisation de templates Bootstrap selon les objectifs de design",
      "Application des bonnes pratiques SEO et optimisation des métadonnées",
      "Rédaction de tous les contenus et titres de la page",
      "Intégration d'animations pour renforcer la présentation du pitch"
    ],
    challenges: [
      "Délai très court pour livrer un site fonctionnel et attractif",
      "Garder une cohérence visuelle et un message clair sous la pression du temps"
    ],
    solutions: [
      "Templates Bootstrap pour accélérer la structuration de la mise en page",
      "Rédaction concise et percutante, centrée sur la valeur de l'application",
      "Images, métadonnées et mise en page optimisées pour le SEO et un chargement rapide"
    ]
  },
  "Kwarata-Website": {
    shortDescription: "Plateforme de gestion unifiée des terminaux adaptée aux besoins des entreprises africaines",
    categoryLabel: "Site web et plateforme SaaS",
    client: "Projet personnel",
    description: "Kwarata est une solution de gestion unifiée des terminaux (UEM) conçue en Afrique pour répondre aux défis de sécurité informatique propres aux entreprises africaines. Elle offre un contrôle centralisé des appareils multiplateformes, une application stricte des politiques de sécurité, la gestion à distance et une supervision avancée avec maintenance prédictive basée sur l'IA.",
    features: [
      "Design responsive et adaptatif pour une expérience fluide sur ordinateur et mobile",
      "Interface moderne et épurée qui met en avant clairement les bénéfices du produit",
      "Animations au défilement et éléments interactifs avec AOS.js",
      "Structure de contenu optimisée pour le SEO",
      "Chargement rapide grâce à des ressources optimisées",
      "Appels à l'action clairs (Commencer, Voir la vidéo, Contact)",
      "Sections de témoignages pour renforcer la crédibilité et la confiance",
      "FAQ répondant aux questions fréquentes des clients",
      "Mise en page en plusieurs sections : mission, fonctionnalités, services, tarifs et contact",
      "Design accessible, respectant les standards d'ergonomie et de lisibilité"
    ],
    responsibilities: [
      "Conception et développement d'un site marketing responsive avec Bootstrap",
      "Animations et interactions fluides avec AOS.js",
      "Optimisation du SEO et de la vitesse de chargement",
      "Collaboration avec l'équipe marketing pour des contenus clairs et convaincants",
      "Cohérence de la marque et de l'identité visuelle",
      "Compatibilité entre navigateurs et respect des standards d'accessibilité"
    ],
    challenges: [
      "Présenter une solution technique complexe de façon simple et convaincante",
      "Créer des animations engageantes sans dégrader les performances",
      "Garantir un design responsive sur de nombreux types d'appareils et tailles d'écran",
      "Concilier bonnes pratiques SEO et design moderne"
    ],
    solutions: [
      "Grille et utilitaires Bootstrap pour une mise en page flexible et responsive",
      "AOS.js pour des animations au défilement performantes",
      "Contenu HTML structuré sémantiquement pour le SEO et l'accessibilité",
      "Images optimisées et ressources allégées pour un chargement rapide",
      "Travail rapproché avec le marketing pour aligner messages techniques et marketing"
    ]
  },
  "Kwarata Unified Endpoint Management": {
    shortDescription: "Système de gestion unifiée des terminaux (UEM) de niveau entreprise, adapté au contexte africain",
    categoryLabel: "Application web et desktop fullstack",
    client: "Projet personnel",
    description: "Kwarata est une plateforme UEM de pointe qui permet aux entreprises africaines de gérer de manière centralisée, adaptative et sécurisée des parcs d'appareils variés. Construite sur une architecture microservices robuste, elle répond aux défis propres à la région tout en offrant une gestion d'infrastructure IT évolutive, fiable et extensible.",
    features: [
      "Architecture microservices pour des composants modulaires, évolutifs et maintenables",
      "Gestion multiplateforme des appareils : Windows, macOS, Linux, Android et iOS",
      "Télémétrie et supervision en temps réel avec la base de séries temporelles InfluxDB",
      "Contrôle d'accès basé sur les rôles (RBAC) pour une gestion fine des permissions",
      "Configuration à distance des appareils, déploiement d'applications et contrôle de conformité",
      "Déploiement cloud-native sur Azure avec conteneurisation Docker",
      "Application mobile d'administration développée avec .NET MAUI",
      "Interface riche et responsive avec Angular, TailwindCSS et la librairie de composants PrimeNG",
      "Bases de données relationnelles et NoSQL combinées pour un stockage et des requêtes optimisés",
      "Application automatique des politiques et géorepérage (geofencing)",
      "Tableaux de bord de reporting et d'analyse avancés pour les administrateurs IT"
    ],
    responsibilities: [
      "Développement fullstack : application Angular et microservices backend en ASP.NET Core",
      "Conception et mise en place de l'architecture microservices, modulaire et évolutive",
      "Développement d'une interface responsive avec TailwindCSS et PrimeNG pour une gestion intuitive des appareils",
      "Implémentation d'API sécurisées avec authentification et RBAC",
      "Conteneurisation des applications avec Docker et orchestration des déploiements sur Azure",
      "Gestion des couches de données SQL Server, MongoDB et InfluxDB (données structurées et séries temporelles)",
      "Développement du client mobile d'administration avec .NET MAUI, multiplateforme",
      "Collaboration avec l'équipe DevOps pour l'automatisation CI/CD et la gestion des ressources cloud"
    ],
    challenges: [
      "Concevoir une architecture microservices robuste, hautement disponible et tolérante aux pannes",
      "Garantir sécurité et conformité sur des parcs d'appareils hétérogènes",
      "Traiter efficacement les données de télémétrie en temps réel pour la supervision et les alertes",
      "Offrir une expérience fluide sur le web comme sur mobile",
      "Orchestrer des services conteneurisés évolutifs sur Azure",
      "Intégrer plusieurs bases de données aux modèles différents"
    ],
    solutions: [
      "Microservices pour isoler les domaines métier et permettre des développements et déploiements indépendants",
      "Authentification JWT et RBAC pour un contrôle d'accès sécurisé",
      "InfluxDB, optimisée pour les séries temporelles, pour traiter efficacement les flux de télémétrie",
      "TailwindCSS et PrimeNG pour des composants d'interface performants et accessibles",
      "Conteneurs Docker et Azure Kubernetes Service (AKS) pour un hébergement cloud évolutif",
      "Mécanismes de synchronisation entre SQL Server et MongoDB pour garantir la cohérence des données",
      "Application mobile .NET MAUI pour étendre l'administration aux appareils mobiles"
    ]
  },
  "Fleuva ERP": {
    shortDescription: "ERP web pour optimiser les processus métier et accélérer la croissance",
    categoryLabel: "Application web (ERP)",
    description: "Fleuva est un progiciel de gestion intégré (ERP) complet qui aide les entreprises à fluidifier leurs opérations, automatiser les tâches répétitives et prendre des décisions éclairées grâce à des analyses en temps réel. Il couvre de nombreux modules : gestion de projets, RH, finance, relation client, stocks, production, agriculture et gestion des actifs.",
    features: [
      "Interface moderne, responsive et simple d'utilisation, construite avec Angular et Bootstrap",
      "Navigation fluide entre les modules : finance, RH, ventes, agriculture…",
      "Composants d'interface réutilisables pour une meilleure maintenabilité et modularité",
      "Interactions complexes gérées avec jQuery et des éléments Bootstrap",
      "Tableaux de bord interactifs pour les KPI et le suivi de la performance en temps réel",
      "Pages entièrement responsives pour ordinateur, tablette et mobile",
      "Expérience enrichie par des animations et transitions"
    ],
    responsibilities: [
      "Développement de tout le frontend de l'ERP avec Angular",
      "Intégration des maquettes avec Bootstrap pour une mise en page responsive et professionnelle",
      "Utilisation de jQuery pour les interactions dynamiques complexes, si nécessaire",
      "Collaboration étroite avec l'équipe backend pour connecter les API et gérer les flux de données",
      "Tests et itérations sur les composants pour améliorer l'ergonomie et l'expérience",
      "Création de composants modulaires et réutilisables pour la cohérence du design et du code"
    ],
    challenges: [
      "Concevoir une interface cohérente qui s'adapte à de très nombreux modules métier",
      "Gérer des interactions complexes et dynamiques sans dégrader les performances",
      "Garantir une mise en page responsive et une expérience cohérente sur tous les appareils",
      "Réunir des domaines métier très variés dans une seule plateforme unifiée"
    ],
    solutions: [
      "Architecture modulaire d'Angular pour séparer et gérer clairement les fonctionnalités",
      "Grille Bootstrap pour un design responsive pensé mobile d'abord",
      "jQuery utilisé ponctuellement pour la manipulation directe du DOM",
      "Mini design system pour garantir la cohérence UI/UX dans toute l'application",
      "Itérations rapides avec le backend pour ajuster l'interface selon les retours réels des utilisateurs"
    ]
  },
  "JCS Admin Dashboard": {
    shortDescription: "Tableau de bord d'administration et interface de gestion de contenu du site de Jethro's Computing Services",
    categoryLabel: "Application web (Back-office)",
    description: "JCS (Jethro's Computing Services) avait besoin d'une plateforme d'administration web puissante et simple d'utilisation pour gérer le contenu de son site et suivre l'activité des utilisateurs. Cela comprenait un tableau de bord sécurisé pour mettre à jour les contenus, suivre les interactions des utilisateurs et analyser le trafic. L'objectif : donner à l'équipe JCS une visibilité et un contrôle complets sur sa plateforme, grâce à une interface élégante, responsive et intuitive.",
    features: [
      "Tableau de bord dynamique affichant en temps réel les interactions des utilisateurs et les statistiques de trafic",
      "Fonctions de CMS : ajout, modification et suppression des contenus du site",
      "Accès sécurisé et interface par rôle, avec une expérience épurée",
      "Visualisations de données avec les composants Angular Material (tableaux, graphiques)",
      "Interface entièrement responsive pour ordinateur et tablette",
      "Conception pilotée par les API pour l'affichage et la mise à jour dynamiques des données"
    ],
    responsibilities: [
      "Développement de tout le frontend avec Angular et SCSS, selon une architecture propre et modulaire",
      "Intégration des API REST du backend pour récupérer et mettre à jour les données en temps réel",
      "Angular Material pour une interface moderne et cohérente sur tous les composants",
      "Composants réutilisables pour les tableaux de bord, tableaux et formulaires de contenu",
      "Optimisation de l'ergonomie et des performances sur toutes les tailles d'écran"
    ],
    challenges: [
      "Garantir une intégration fluide entre le frontend et les API du backend",
      "Construire un tableau de bord maintenable et évolutif, riche en interactions",
      "Concevoir des visualisations de données à la fois parlantes et légères"
    ],
    solutions: [
      "Formulaires réactifs et services Angular pour la communication avec l'API et la validation",
      "Composants Material réutilisables pour une meilleure maintenabilité",
      "SCSS pour un style propre et une interface responsive sur toutes les vues d'administration"
    ]
  },
  "Ménager Ponctuel": {
    shortDescription: "Plateforme web pour trouver des prestataires de services à domicile à proximité (plombiers, électriciens…)",
    categoryLabel: "Application web (Marketplace de services)",
    description: "Ménager Ponctuel est une plateforme web qui permet de trouver et contacter facilement des prestataires de services à domicile proches : électriciens, plombiers, bricoleurs… Les professionnels peuvent de leur côté s'inscrire comme prestataires, gérer leurs disponibilités et recevoir des demandes d'intervention rémunérées. La plateforme simplifie la recherche, la réservation et la communication, pour les clients comme pour les prestataires.",
    features: [
      "Inscription et authentification des clients et des prestataires",
      "Recherche et filtres dynamiques pour trouver des prestataires proches par type de service et par lieu",
      "Tableau de bord prestataire pour gérer son profil, ses disponibilités et les demandes reçues",
      "Interface épurée et responsive avec TailwindCSS et les composants Angular Material",
      "Carte interactive des prestataires à proximité",
      "Parcours de réservation sécurisé avec confirmation de la demande et avis des utilisateurs"
    ],
    responsibilities: [
      "Pilotage du développement frontend de l'application web avec Angular",
      "Conception et intégration d'interfaces responsives avec TailwindCSS et Angular Material",
      "Composants réutilisables pour les formulaires, cartes, listes et tableaux de bord",
      "Expérience fluide pour les clients comme pour les prestataires, sur tous les écrans",
      "Collaboration avec l'équipe backend pour intégrer les API REST et les mises à jour en temps réel"
    ],
    challenges: [
      "Concevoir une expérience à double rôle, pour les clients et pour les prestataires",
      "Garantir un parcours de recherche et de réservation rapide et intuitif",
      "Créer une interface moderne et épurée tout en gardant de bonnes performances"
    ],
    solutions: [
      "Formulaires réactifs et structure modulaire d'Angular pour gérer des parcours complexes",
      "TailwindCSS pour prototyper rapidement des mises en page responsives",
      "Composants Angular Material pour des interactions cohérentes et accessibles"
    ]
  }
};
