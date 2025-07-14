const categories = {
  "Mobile app": "app",
  "Web app": "product",
  "Website": "branding"
}

const categoriesArray = ['Mobile app', 'Web app', 'Website'];

var projects = [
  // {
  //   name: 'Afrilease',
  //   shortDescription: 'Mobile-first platform for streamlined rental property management',
  //   categoryLabel: 'Mobile App (Property Tech)', // e.g., "Mobile App", "Property Tech"
  //   category: 'app',
  //   client: 'Weblysoft LLC',
  //   date: '2024',
  //   url: '', // Add live link if applicable
  //   coverImage: '/assets/img/portfolio/afrilease.png', // Optional: add a banner image
  //   gallery: ['/assets/img/portfolio/afrilease.png'], // Optional: array of screenshots
  //   description: `Afrilease is a dual mobile application ecosystem designed to modernize rental property operations. The platform enables tenants to manage their rental experience—paying rent and utility bills, submitting maintenance requests, accessing digital lease documents, and communicating directly with landlords. On the other side, landlords benefit from tools to monitor property status, manage technicians, assign property managers, review payment reports, and maintain direct contact with tenants via integrated messaging.`,
  //   technologies: ['Ionic', 'Angular', 'Capacitor', 'SCSS'],
  //   features: [
  //     'Secure rent and utility payments through mobile interface',
  //     'Real-time messaging between landlords and tenants',
  //     'Maintenance request and technician assignment system',
  //     'Digital lease document access and export',
  //     'Role-based dashboards with real-time data synchronization'
  //   ],
  //   responsibilities: [
  //     'Led the frontend development of both tenant and landlord applications using Ionic and Angular',
  //     'Implemented responsive UI components and dynamic interactions tailored to distinct user roles',
  //     'Integrated RESTful APIs for secure data handling and state synchronization',
  //     'Collaborated with backend and design teams to ensure UX consistency across both applications'
  //   ],
  //   challenges: [
  //     'Designing two seamless but distinct user experiences within a single platform',
  //     'Maintaining real-time communication between users across different applications',
  //     'Ensuring mobile performance across varied device types and screen sizes'
  //   ],
  //   solutions: [
  //     'Adopted modular architecture with reusable UI components and role-specific logic',
  //     'Integrated WebSocket services for real-time chat and event handling',
  //     'Optimized rendering strategies and applied lazy-loading techniques to enhance mobile performance'
  //   ],
  //   sourceCodeLink: '', // Add a GitHub or Bitbucket link if shareable
  //   rate: 1
  // },
  {
    name: "Bantou Food",
    shortDescription: "A cultural African food recipe app with step-by-step instructions and geolocated restaurants.",
    categoryLabel: "Mobile App",
    category: 'app',
    client: "Weblysoft LLC",
    date: "2024",
    url: "https://bantoufood.com", // Add if available
    coverImage: "/assets/img/portfolio/bantoufoodthumbnail.jpg", // Add if available
    gallery: ["/assets/img/portfolio/bantoufoodsignup.png", "/assets/img/portfolio/authenticrecipes.png", "/assets/img/portfolio/aienhancedvisuals2.png", "/assets/img/portfolio/cookingvideosandmedia2.png", "/assets/img/portfolio/bilingualinstructions2.png"], // Add image URLs if available
    description: `
      Bantou Food is a culturally rich mobile application that offers authentic African recipes from across the continent. 
      With beautifully illustrated steps, cultural storytelling, and dual-language instructions (English/French), the app aims to connect users to Africa through cuisine. 
      Beyond cooking, it helps users discover nearby restaurants that serve the meals, complete with geolocation, directions, and one-tap call functionality.
    `,
    technologies: ["Ionic", "Angular", "Capacitor", "RESTful APIs", "OpenStreetMap API", "Google Maps API"],
    features: [
      "Browse hundreds of traditional recipes by country (e.g., Senegal’s Yassa, Cameroon’s Ndolé)",
      "Step-by-step cooking guidance supported by tutorial videos for select recipes",
      "Bilingual content in English and French",
      "Geolocation features to find nearby restaurants offering the selected dish",
      "Restaurant profiles with location, route, and direct call integration",
    ],
    responsibilities: [
      "Developed the mobile frontend using Ionic + Angular",
      "Integrated backend REST APIs into the mobile app",
      "Designed and implemented the microservice for recipe management (Node.js + MongoDB)",
      "Contributed to UX improvements for bilingual users",
      "Handled Play Store and App Store deployment and release management",
      "Integrated Google AdMob for ad monetization"
    ],
    challenges: [
      "Balancing rich multimedia content (videos, images, cultural texts) with performance optimization on mobile devices.",
      "Ensuring seamless user experience for bilingual navigation",
      "Integrating geolocation and route features across devices"
    ],
    solutions: [
      "Designed a modular backend schema supporting multi-language and media-rich content",
      "Used Capacitor plugins to enhance device compatibility for maps and phone calls",
      "Implemented caching and lazy loading to improve performance on mobile devices"
    ],
    rate: 1
  },
  {
    name: "MoorCast",
    shortDescription: "Mobile podcast app focusing on topics impacting Black communities globally",
    categoryLabel: "Mobile Application",
    category: 'app',
    client: "Weblysoft LLC",
    date: "2024",
    url: " ", // ajouter l'URL si disponible
    coverImage: "/assets/img/portfolio/moorcast.png", // ajouter une image de couverture si possible
    gallery: ["/assets/img/portfolio/moorcast.png", "/assets/img/portfolio/moorcast1.png", ""], // images supplémentaires si besoin

    description: `MoorCast is a mobile podcast application that explores key topics such as Family, Business, Politics, Technology, and Religion impacting Black people in Africa and worldwide. The app enables users to listen to recorded podcasts, organize playlists, manage favorites, control playback, and stream live audio broadcasts in real time.`,

    objective: `To provide a seamless and branded podcast listening experience with live audio streaming capabilities, empowering users to stay connected with relevant conversations that matter to the global Black community.`,

    features: [
      "Listen to on-demand recorded podcasts with playback controls (pause, seek, favorites).",
      "Create and organize playlists to customize the listening experience.",
      "Live audio streaming powered by WebRTC, enabling real-time podcast broadcasts.",
      "Background audio playback to allow continuous listening while multitasking.",
      "Custom branded audio player aligned with MoorCast’s UI/UX guidelines."
    ],

    responsibilities: [
      "Developed the mobile application frontend using Ionic, Angular, and Capacitor.",
      "Implemented the live audio streaming feature using WebRTC technology.",
      "Ensured smooth background audio playback and state management.",
      "Collaborated with designers to faithfully implement the brand’s visual identity and user flow."
    ],

    challenges: [
      "Integrating real-time audio streaming with low latency for live podcast broadcasts.",
      "Maintaining seamless audio playback when the app runs in the background or device is locked.",
      "Adhering strictly to the client’s branding guidelines while optimizing UX."
    ],

    solutions: [
      "Utilized WebRTC for efficient, real-time live audio streaming.",
      "Implemented Capacitor native plugins to support background playback across platforms.",
      "Applied modular design patterns to maintain clean, scalable code and consistent UI."
    ],

    technologies: [
      "Ionic",
      "Angular",
      "Capacitor",
      "ExpressJS",
      "WebRTC"
    ],

    sourceCodeLink: "", // ajouter si disponible
    rate: 1
  },
  {
    name: "MoorNews",
    shortDescription: "Mobile news app delivering global updates across various sectors",
    categoryLabel: "Mobile Application",
    category: 'app',
    client: "Weblysoft LLC",
    date: "2024",
    url: "https://moornews.net/", // ajouter l'URL si disponible
    coverImage: "/assets/img/portfolio/moornews.png", // ajouter une image de couverture si possible
    gallery: ["/assets/img/portfolio/moornews2.png", "/assets/img/portfolio/moornews.png", "/assets/img/portfolio/moornews-gal (1).jpg", "/assets/img/portfolio/moornews-gal (2).jpg", "/assets/img/portfolio/moornews-gal (3).jpg", "/assets/img/portfolio/moornews-gal (4).jpg"], // images supplémentaires si besoin

    description: `MoorNews is a mobile application designed for reading and following news articles covering diverse topics such as sports, finance, entrepreneurship, and more worldwide. The app offers personalized user experiences including likes, favorites management, and push notifications to keep users updated with relevant news.`,

    objective: `To provide users with a streamlined and engaging platform for staying informed about the latest news across multiple sectors, while offering personalized content interaction and timely notifications.`,

    features: [
      "Read articles spanning various categories like sports, finance, and entrepreneurship.",
      "Manage a personalized list of favorite articles for easy access.",
      "Like articles to express preferences and improve content recommendations.",
      "Receive push notifications alerting users to new and relevant articles.",
      'Google AdMob integration for monetization'
    ],

    responsibilities: [
      "Developed the mobile app frontend with responsive and user-friendly interfaces.",
      "Implemented client-side management of likes and favorites.",
      "Integrated push notification services to deliver real-time updates.",
      "Collaborated with backend teams for API integration and data handling.",
      "Handled Play Store deployment and release management",
      "Integrated Google AdMob for ad monetization"
    ],

    challenges: [
      "Ensuring real-time delivery and handling of push notifications without draining device resources.",
      "Creating an intuitive UI for effortless navigation through diverse content categories.",
      "Maintaining smooth client-side state management for likes and favorites."
    ],

    solutions: [
      "Used efficient background services and optimized push notification handling.",
      "Implemented clean and modular UI components to enhance user experience.",
      "Utilized state management libraries to synchronize user preferences seamlessly."
    ],

    technologies: [
      "Ionic",
      "Angular",
      "Capacitor"
    ],

    sourceCodeLink: "", // ajouter si disponible
    rate: 1
  },
  {
    name: "MoorQuotes",
    shortDescription: "Discover African wisdom through proverbs and historical figures",
    categoryLabel: "Mobile Application",
    category: 'app',
    client: "Weblysoft LLC",
    date: "2024",
    url: "https://moorquotes.com/", // Ajouter le lien vers le projet si disponible
    coverImage: "/assets/img/portfolio/moorquotes.png", // Ajouter une image de couverture
    gallery: ["/assets/img/portfolio/moorquotes.png", "/assets/img/portfolio/moorquotes2.png", "/assets/img/portfolio/moorquotes3.png", "/assets/img/portfolio/moorquotes4.png"], // Ajoute ici des captures d’écran

    description: `MoorQuotes is a culturally immersive mobile application designed to connect users with the depth and richness of African wisdom. Through curated proverbs, engaging commentary, and historical storytelling, MoorQuotes fosters appreciation for African heritage while inspiring daily reflection.`,

    objective: `To promote African culture and wisdom by offering users a daily dose of authentic proverbs, interactive engagement, and access to historical insights from across the continent.`,

    features: [
      "Daily delivery of African proverbs to inspire and motivate users.",
      "Detailed cultural background and origin of each proverb to enhance understanding.",
      "Ability to favorite and save quotes for personal reflection and future reading.",
      "Interactive commenting system to share thoughts and interpretations with others.",
      "Dedicated section featuring influential African historical figures and their stories.",
      'Google AdMob integration for monetization'
    ],

    responsibilities: [
      "Designed and implemented the mobile app interface using Ionic and Angular.",
      "Integrated a content management system to deliver daily proverbs and historical profiles.",
      "Developed features for saving favorites, posting comments, and browsing cultural insights.",
      "Ensured smooth navigation and performance across devices through optimized UI components.",
      "Handled Play Store and App Store deployment and release management",
      "Integrated Google AdMob for ad monetization"
    ],

    challenges: [
      "Creating a user interface that balances simplicity with cultural richness.",
      "Designing flexible data structures to accommodate multilingual content and metadata.",
      "Building an engaging user experience around content-driven features (quotes, legends, comments)."
    ],

    solutions: [
      "Applied minimalist design with vibrant visual elements to reflect cultural authenticity.",
      "Implemented a local data management and caching system to ensure fast and reliable access, considering the low variability and non-critical nature of the content.",
      "Developed an intuitive UX flow for discovering, saving, and interacting with content."
    ],

    technologies: [
      "Ionic",
      "Angular",
      "Capacitor"
    ],

    sourceCodeLink: "", // ajouter si open-source
    rate: 1
  },
  {
    name: 'MoorRadio',
    shortDescription: 'Free Afro Internet Radio Streaming App',
    categoryLabel: 'Mobile Application',
    category: 'app',
    client: 'Weblysoft LLC',
    date: '2023', // à remplir si tu veux afficher la date de réalisation
    url: 'https://moorradio.com', // à remplir si disponible
    coverImage: '/assets/img/portfolio/moorradio.png', // lien vers une image si tu en as une
    gallery: ['/assets/img/portfolio/moorradio.png', '/assets/img/portfolio/moorradio2.png'], // facultatif si tu veux une galerie
    description: `MoorRadio is a mobile application that allows users to stream over 1,000 Afro-centric radio stations from across the continent and diaspora. Designed to deliver a rich cultural and musical experience, it offers a personalized listening journey with features like playlists, search, favorites, and custom audio playback.`,
    technologies: ['Ionic', 'Angular', 'Capacitor'],
    features: [
      'Stream over 1,000 African radio stations in real time',
      'Custom audio player with built-in equalizer',
      'Playlists, search, favorites, and like features',
      'Background audio support for uninterrupted listening'
    ],
    responsibilities: [
      'Developed and maintained the mobile application using Ionic and Angular',
      'Implemented custom audio playback features including equalizer integration',
      'Handled Play Store deployment and release management',
      'Integrated Google AdMob for ad monetization'
    ],
    challenges: [
      'Ensuring seamless audio playback across a wide range of stations',
      'Optimizing the user experience for low-bandwidth environments'
    ],
    solutions: [
      'Built a custom audio player with equalizer to enhance user control and listening quality',
      'Applied caching strategies and efficient state management for smooth UX'
    ],
    sourceCodeLink: '', // si tu souhaites fournir un lien GitHub ou GitLab
    rate: 1
  },
  {
    name: 'QuickDocta',
    shortDescription: 'Find and Connect with Trusted Doctors and Pharmacies Across Africa',
    categoryLabel: 'Mobile Application',
    category: 'app',
    client: 'Weblysoft LLC',
    date: '2023', // facultatif
    url: 'https://quickdocta.com/', // facultatif
    coverImage: '/assets/img/portfolio/quickdocta.png', // lien image principale du projet
    gallery: ['/assets/img/portfolio/quickdocta.png', '/assets/img/portfolio/quickdocta2.png'], // images secondaires si disponible
    description: `QuickDocta is a mobile platform that allows users to discover, locate, and connect with highly rated doctors, clinics, and pharmacies across Africa. Designed for accessibility and ease of use, the app offers bilingual (English and French) support, interactive maps, and real-time access to essential healthcare information and services.`,
    technologies: ['Ionic', 'Angular', 'Capacitor', 'Google Maps SDK', 'AdMob'],
    features: [
      'Browse a curated list of doctors and pharmacies near you',
      'Interactive map with location markers and routing to medical facilities',
      'One-tap call and directions to healthcare providers',
      'Health tips feed and anonymous patient stories',
      'Bilingual support: English and French',
      'Search and advanced filtering for quick discovery',
      'Google AdMob integration for monetization'
    ],
    responsibilities: [
      'Developed key parts of the mobile client using Ionic and Angular',
      'Integrated Google Maps SDK for interactive healthcare location display',
      'Implemented multilingual user interface (English/French)',
      'Handled app deployment and release to mobile stores',
      'Integrated Google AdMob for ad monetization'
    ],
    challenges: [
      'Designing an intuitive UI for diverse users across multiple regions',
      'Ensuring performance and responsiveness of map and geolocation features'
    ],
    solutions: [
      'Built lightweight UI components optimized for mobile and low-end devices',
      'Leveraged Google Maps SDK efficiently for accurate marker and routing features',
      'Used i18n translation strategies for bilingual support'
    ],
    sourceCodeLink: '', // à ajouter si pertinent
    rate: 1
  },
  {
    name: 'Sahream',
    shortDescription: 'Student Housing Marketplace for Tenants and Landlords',
    categoryLabel: 'Mobile Application',
    category: 'app',
    client: 'Sahream',
    date: '2025', // Optionnel
    url: '', // Si disponible
    coverImage: '/assets/img/portfolio/sahream.png', // Image principale du projet
    gallery: ['/assets/img/portfolio/sahream1.png', '/assets/img/portfolio/sahream2.png', '/assets/img/portfolio/sahream3.png'], // Liens vers d’autres images ou vidéos du projet
    description: `Sahream is a dual-application mobile platform designed to streamline the student housing experience in African cities. One app targets students, enabling them to search, view, and book available rooms with complete transparency. The other app is tailored for landlords to manage listings, track tenant activity, and monitor payments in real time.`,
    technologies: ['Ionic', 'Angular', 'Capacitor', 'Google Maps SDK'],
    features: [
      'Students can browse room listings by city with photos, videos, prices, and amenities (Wi-Fi, private bathroom, etc.)',
      'Integrated map with directions to properties via Google Maps',
      'In-app room booking and payment functionality',
      'Landlords can add and manage room listings with images and details',
      'View tenant information and payment history',
      'Dual-application architecture for both student tenants and landlords'
    ],
    responsibilities: [
      'Developed the frontend interfaces for both tenant and landlord apps using Ionic and Angular',
      'Implemented navigation, form handling, and dynamic content rendering',
      'Integrated API endpoints for booking, listing, user, and payment data',
      'Ensured responsive design and smooth cross-device experience'
    ],
    challenges: [
      'Designing two distinct user experiences (for tenants and landlords) in a cohesive UI/UX',
      'Ensuring reliable media (photos/videos) upload and display',
      'Optimizing map and geolocation features for low-bandwidth environments'
    ],
    solutions: [
      'Created reusable UI components to speed up development and ensure visual consistency',
      'Optimized media handling and lazy-loaded resources to improve performance',
      'Implemented Google Maps SDK for accurate navigation and property location'
    ],
    sourceCodeLink: '', // À ajouter si pertinent
    rate: 1
  },
  {
    name: 'Prepa',
    shortDescription: 'Prepare and succeed in entrance exams with past papers, solutions, and intelligent tools',
    categoryLabel: 'Mobile Application',
    category: 'app',
    client: 'Personnal Project',
    date: '2024', // Optionnel
    url: ' ', // Si disponible
    coverImage: '/assets/img/portfolio/prepa-website (1).png', // Image principale du projet
    gallery: ['/assets/img/portfolio/prepa (2).png', '/assets/img/portfolio/prepa (3).png', '/assets/img/portfolio/prepa (4).png', '/assets/img/portfolio/prepa (5).png'], // Images ou vidéos d’illustration
    description: `Prepa is a mobile application designed to support students and candidates preparing for competitive entrance exams to training schools. The platform gives access to past exam papers, detailed solutions, an intelligent tutor chatbot, and an interactive calendar with official dates. Prepa empowers students with smart tools to help them study, revise, and plan their academic success efficiently.`,
    technologies: ['Ionic', 'Angular', 'Capacitor', 'ExpressJS', 'MongoDB'],
    features: [
      'Access to over 1000 past entrance exam papers with categorized navigation',
      'Integrated PDF reader with watermarking and download protection',
      'Detailed solutions with step-by-step explanations',
      'AI-powered chatbot tutor available 24/7 for personalized guidance',
      'Interactive calendar with exam dates and reminders',
      'Secure authentication with OAuth 2.0 (Google, Facebook)',
      'RBAC (Role-Based Access Control) for different subscription levels',
      'Offline caching and performance optimization',
      'Integrated secure payment gateway for premium plans'
    ],
    responsibilities: [
      'Fullstack development of the mobile application and backend services',
      'Implemented a secure, embedded PDF viewer with watermark and screenshot restrictions',
      'Developed a script to auto-generate MongoDB insert queries from a structured file system for bulk insertion of over 1000 exams',
      'Designed an intuitive folder-like navigation system for exam discovery',
      'Integrated chatbot features using AI APIs for interactive Q&A experiences',
      'Built event-based calendar and notification features for exam tracking',
      'Implemented secure authentication and access control using JWT and OAuth 2.0',
      'Integrated client/server caching mechanisms for performance and scalability'
    ],
    challenges: [
      'Building a secure PDF reader to prevent downloads and screenshots',
      'Watermarking PDFs with user IDs to track and discourage data leaks',
      'Creating a user-friendly file explorer–like interface to navigate exams',
      'Automating the import of thousands of exam files into MongoDB',
      'Designing a custom calendar with reminders and live updates',
      'Ensuring offline access and fast loading via caching mechanisms',
      'Implementing RBAC and secure access flows tied to subscription levels'
    ],
    solutions: [
      'Developed a custom PDF viewer with restrictions and dynamic watermarks',
      'Created automation scripts to structure and bulk upload exam content',
      'Used local storage and server-side caching for fast, low-latency access',
      'Adopted Angular’s reactive forms and state management for a seamless UX',
      'Integrated AI models into the chatbot with fallback to human-like logic',
      'Used Google Calendar API patterns to handle custom calendar events'
    ],
    sourceCodeLink: '', // À ajouter si pertinent
    rate: 1
  },
  {
    name: 'Aida',
    shortDescription: 'AI-powered emergency assistant for first aid guidance',
    categoryLabel: 'Mobile Application',
    category: 'app',
    client: 'Aida',
    date: '2024', // À compléter si nécessaire
    url: '', // Ajoute un lien si l’app est déployée
    coverImage: '/assets/img/portfolio/first-aid.png', // Lien vers une image principale du projet
    gallery: ['/assets/img/portfolio/first-aid.png', '/assets/img/portfolio/first-aid1.png', '/assets/img/portfolio/first-aid2.png'], // Images ou vidéos de démonstration
    description: `Aida is a mobile first-aid assistant powered by contextualized artificial intelligence. Designed to support individuals in emergency situations, the app provides real-time, voice-assisted guidance for life-saving gestures. Whether through text, voice messages, or images, users can interact with Aida to receive accurate, step-by-step instructions based on the situation, while also being directed to nearby hospitals with contact details and maps.`,
    technologies: ['Ionic', 'Angular', 'Capacitor', 'Gemini API', 'Google Maps SDK'],
    features: [
      'Contextual AI chatbot for first-aid support (text, voice, image inputs)',
      'Voice and text-based AI responses tailored to the emergency context',
      'Real-time gesture guidance for first aid procedures',
      'Nearest hospitals lookup with directions and contact info',
      'Multimodal input support (text, voice, image)',
      'Emergency call and hospital routing features',
      'Intuitive and accessible UI designed for quick action under stress'
    ],
    responsibilities: [
      'Led the fullstack development of the mobile app',
      'Integrated Gemini AI API to handle contextual conversations',
      'Developed modules for voice recognition and text-to-speech responses',
      'Implemented image processing input for wound and injury analysis',
      'Connected the app to location services and Google Maps SDK for hospital directions',
      'Ensured offline support and caching for critical emergency content'
    ],
    challenges: [
      'Building a multimodal AI interface that understands voice, text, and images',
      'Ensuring AI responses are clear, fast, and adapted to emergency situations',
      'Designing a minimal UI for high-stress user interaction',
      'Finding and displaying accurate nearby medical facilities in real-time'
    ],
    solutions: [
      'Used Gemini API with custom prompts and structured emergency context layers',
      'Built a lightweight UI with fast voice interaction loops and clear feedback',
      'Leveraged Google Maps API to provide up-to-date hospital locations and routes',
      'Integrated fallback safety mechanisms to provide basic first-aid steps even offline'
    ],
    sourceCodeLink: '', // Si open-source ou démo technique
    rate: 1
  },
  // {
  //   name: 'PlateMate',
  //   shortDescription: 'Social dining app for meaningful connections around shared interests',
  //   categoryLabel: 'Mobile Application',
  //   category: 'app',
  //   client: 'Weblysoft LLC',
  //   date: '', // Ajoute si nécessaire
  //   url: '', // Si disponible
  //   coverImage: '/assets/img/portfolio/platemate.png', // Capture d'écran ou illustration de l'app
  //   gallery: ['/assets/img/portfolio/platemate.png'], // Images ou vidéos
  //   description: `PlateMate is a mobile app that connects people through curated dining experiences. Users can explore restaurants, order meals, and organize or join open social meetings based on shared interests. Whether it's networking, cultural exchange, or simply meeting new people, PlateMate transforms meals into opportunities for connection and community.`,
  //   technologies: ['Ionic', 'Angular', 'Capacitor', 'ASP.NET Core', 'SQL Server'],
  //   features: [
  //     'User registration and profile setup based on interests',
  //     'Browse and filter restaurants and menus',
  //     'Schedule or join open-table events and invite others to dine',
  //     'Matchmaking algorithm to suggest meetups based on shared interests',
  //     'Integrated food ordering and reservation system',
  //     'Live chat and notifications for event coordination',
  //     'Geolocation and map integration for restaurant directions'
  //   ],
  //   responsibilities: [
  //     'Developed the entire frontend interface using Ionic and Angular',
  //     'Designed a smooth and intuitive user journey for discovering and joining meetups',
  //     'Contributed to backend API development (Node.js + Express)',
  //     'Implemented interest-based matching and filtering mechanisms',
  //     'Integrated geolocation and restaurant APIs for dynamic search',
  //     'Collaborated on UI/UX decisions to enhance social engagement and retention'
  //   ],
  //   challenges: [
  //     'Creating a seamless flow between food ordering and social interaction',
  //     'Matching users based on overlapping interests and availability',
  //     'Designing a scalable and responsive UI for real-time interactions',
  //     'Ensuring privacy and security for event creation and participant data'
  //   ],
  //   solutions: [
  //     'Built modular components and real-time data sync between users and meetups',
  //     'Used tag-based interest modeling and dynamic event recommendations',
  //     'Integrated restaurant data and ordering API with fallback strategies',
  //     'Implemented chat moderation and RSVP confirmation system to build trust'
  //   ],
  //   sourceCodeLink: '', // Facultatif
  //   rate: 1
  // },
  {
    name: 'Weblysoft Website',
    shortDescription: 'Corporate showcase website for Weblysoft LLC',
    categoryLabel: 'Website Development',
    category: 'branding',
    client: 'Weblysoft LLC',
    date: '2024', // Ajoute la date si disponible
    url: 'https://weblysoft.com/', // Lien vers le site en ligne, si accessible
    coverImage: '/assets/img/portfolio/weblysoft-website (1).png', // Capture d’écran du site
    gallery: ['/assets/img/portfolio/weblysoft-website (1).png', '/assets/img/portfolio/weblysoft-website (2).png', '/assets/img/portfolio/weblysoft-website (3).png', '/assets/img/portfolio/weblysoft-website (4).png', '/assets/img/portfolio/weblysoft-website (5).png', '/assets/img/portfolio/weblysoft-website (6).png', '/assets/img/portfolio/weblysoft-website (7).png', '/assets/img/portfolio/weblysoft-website (8).png', '/assets/img/portfolio/weblysoft-website (9).png', '/assets/img/portfolio/weblysoft-website (10).png', '/assets/img/portfolio/weblysoft-website (11).png'], // Screenshots ou pages clés
    description: `The Weblysoft website is a modern, responsive showcase platform designed to reflect the identity, values, and services of Weblysoft LLC — a technology company specializing in software solutions. The website introduces the company’s mission, its core services, product offerings, client testimonials, and its dedicated team. Its goal is to reinforce the company’s online presence and support business development efforts.`,
    technologies: ['HTML5', 'CSS3', 'TailwindCSS', 'JavaScript', 'AOS.js'],
    features: [
      'Fully responsive and optimized for all devices',
      'Modern, clean design aligned with the brand identity',
      'Dedicated pages for services, products, team, and contact',
      'Interactive animations and smooth scrolling effects',
      'SEO-friendly structure and metadata',
      'Contact form with validation and email integration'
    ],
    responsibilities: [
      'Designed and developed the entire frontend of the corporate website',
      'Implemented a clear, persuasive content layout to improve user retention',
      'Integrated animations and scroll effects to enhance user experience',
      'Collaborated with marketing to align the UI/UX with the brand strategy',
      'Optimized website performance and accessibility for all screen sizes'
    ],
    challenges: [
      'Ensuring clarity of communication while maintaining modern visual appeal',
      'Building a site that is easily maintainable and scalable',
      'Balancing performance, animations, and SEO constraints'
    ],
    solutions: [
      'Used Bootstrap for modular, responsive design',
      'Adopted semantic HTML and optimized loading strategies',
      'Integrated lightweight JS libraries (GSAP, AOS) for dynamic but performant animations'
    ],
    sourceCodeLink: '', // Facultatif, si le code est open source
    rate: 1
  },
  // {
  //   name: 'Cedi Grove Partners',
  //   shortDescription: 'Corporate website for a cybersecurity and talent solutions firm',
  //   categoryLabel: 'Website Development',
  //   category: 'branding',
  //   client: 'Weblysoft LLC',
  //   date: '2025', // Ajouter la date si connue
  //   url: 'https://cedigrovepartners.com/', // URL du site si disponible
  //   coverImage: '/assets/img/portfolio/cedi-grove (1).png', // Capture d’écran principale
  //   gallery: ['/assets/img/portfolio/cedi-grove (1).png', '/assets/img/portfolio/cedi-grove (2).png', '/assets/img/portfolio/cedi-grove (3).png', '/assets/img/portfolio/cedi-grove (4).png', '/assets/img/portfolio/cedi-grove (5).png'], // Screenshots secondaires
  //   description: `Cedi Grove Partners is a cybersecurity and career development firm. Their corporate website serves as a central hub for showcasing their capabilities in cybersecurity strategy, RMF compliance, software development, and data analytics. It also includes matchmaking tools and resources for employers and job seekers, offering recruitment, coaching, and application optimization services.`,
  //   technologies: ['HTML5', 'CSS3', 'TailwindCSS', 'JavaScript', 'AOS.js'],
  //   features: [
  //     'Presentation of cybersecurity services and consulting expertise',
  //     'Dedicated sections for employers and job seekers',
  //     'Job board and search functionalities by skills, location, and experience',
  //     'Interactive capabilities section detailing areas of expertise',
  //     'Clear call-to-actions for recruitment and coaching services',
  //     'Bilingual-friendly design for future scalability',
  //     'Modern and responsive layout across all devices'
  //   ],
  //   responsibilities: [
  //     'Developed and structured the corporate website frontend using Tailwindcss and JavaScript',
  //     'Implemented clean and modern UI reflecting the firm’s values and technical expertise',
  //     'Optimized layout and navigation for diverse audiences: employers, candidates, and partners',
  //     'Integrated animations and interactive elements to enhance user engagement',
  //     'Optimized page structure and layout for accessibility and performance'
  //   ],
  //   challenges: [
  //     'Presenting a wide range of services without overwhelming users',
  //     'Balancing corporate identity with a friendly and accessible user experience',
  //     'Organizing multi-audience content into a coherent and intuitive navigation flow'
  //   ],
  //   solutions: [
  //     'Designed a modular structure with clear content separation by user type',
  //     'Used progressive disclosure and accordions to manage dense information',
  //     'Incorporated user-focused CTAs and visual hierarchy for easy access to core features'
  //   ],
  //   sourceCodeLink: '', // Optionnel
  //   rate: 1
  // },
  {
    name: 'Dietch Consulting',
    shortDescription: 'Trilingual family counseling and marriage support website',
    categoryLabel: 'Website Development',
    category: 'branding',
    client: 'Weblysoft LLC',
    date: '2025', // à compléter
    url: 'https://dietchconsulting.us', // à compléter si disponible
    coverImage: '/assets/img/portfolio/dietchconsulting.jpg', // à compléter avec une capture
    gallery: ['/assets/img/portfolio/dietchconsulting.png'], // captures secondaires
    description: `Dietch Consulting is a trilingual marriage and family counseling service offering support in English, French, and Spanish. Their mission is to reduce divorce rates, address social consequences of family breakdown, and improve intra-family communication. The website provides key information about their methodology—training, counseling, and long-term monitoring—while offering appointment booking capabilities.`,
    technologies: ['HTML5', 'CSS3', 'TailwindCSS', 'JavaScript', 'AOS.js'],
    features: [
      'Presentation of Dietch Consulting’s mission, objectives, and services',
      'Multilingual content to support international clients (English, French, Spanish)',
      'Clear call-to-action to schedule appointments',
      'Dedicated section explaining the unique value proposition of the service',
      'Responsive and mobile-friendly design',
      'Optimized page layout for readability and clarity'
    ],
    responsibilities: [
      'Developed the frontend of the website using HTML5, CSS3, and Bootstrap',
      'Implemented a multilingual content structure for French, English, and Spanish audiences',
      'Ensured responsive design and device compatibility',
      'Structured and highlighted core messaging to align with business mission',
      'Integrated appointment scheduling flow (CTA focus)'
    ],
    challenges: [
      'Presenting emotionally sensitive topics with clarity and empathy',
      'Making the platform accessible across multiple languages and cultures',
      'Structuring large amounts of information without overwhelming the user'
    ],
    solutions: [
      'Applied clean design principles with a calming, professional color palette',
      'Used clear typographic hierarchy and sectioning to facilitate navigation',
      'Built a scalable and structured layout for potential content expansion'
    ],
    sourceCodeLink: '', // optionnel
    rate: 1
  },
  {
    name: 'Easy Integration',
    shortDescription: 'Website for an international IT training and system integration company',
    categoryLabel: 'Website Development',
    category: 'branding',
    client: 'Weblysoft LLC',
    date: '2025', // à compléter
    url: 'https://www.easy-integration.com', // à compléter si en ligne
    coverImage: '/assets/img/portfolio/easyintegrationproject.png', // capture principale
    gallery: ['/assets/img/portfolio/easyintegrationproject.png'], // captures secondaires
    description: `Easy Integration is a multinational IT company operating in Cameroon, Germany, and Ivory Coast. The platform presents the company's services in training and digital transformation, including system integration with Mulesoft and Apache Camel, AI solutions, ERP/CRM implementation, and custom API development. It also supports multilingual audiences in French, English, and German.`,
    technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    features: [
      'Multilingual responsive website for international visibility',
      'Presentation of training services and digital transformation solutions',
      'Detailed sections on API and system integration expertise',
      'Interactive training registration form with schedule selection',
      'Secure payment gateway integration for course registration',
      'Multilingual support (French, English, German)',
      'Modern UI with thematic visuals and responsive layout'
    ],
    responsibilities: [
      'Developed and structured the company’s multilingual website',
      'Implemented responsive design for desktop and mobile',
      'Built a calendar-based registration feature with time-slot selection',
      'Integrated a secure online payment system for training registration',
      'Showcased service offerings in a clean and engaging layout',
      'Ensured cross-browser compatibility and accessibility'
    ],
    challenges: [
      'Creating a smooth UX for multi-step training registration with time scheduling',
      'Handling multilingual content dynamically across the website',
      'Implementing a secure and user-friendly payment flow'
    ],
    solutions: [
      'Built a modular registration system with integrated time-slot calendar',
      'Used Bootstrap’s grid system and JavaScript to enhance multilingual responsiveness',
      'Integrated Stripe/PayPal API for secure payments and real-time validation'
    ],
    sourceCodeLink: '', // si applicable
    rate: 1
  },
  {
    name: 'PerAnk',
    shortDescription: 'Publishing house website for authors from diverse backgrounds',
    categoryLabel: 'Website Development',
    category: 'branding',
    client: 'Weblysoft LLC',
    date: '2025', // À compléter (ex: 'April 2024')
    url: 'https://editeurpa.com', // Lien du site s'il est en ligne
    coverImage: '/assets/img/portfolio/ankhproject.png', // URL vers une capture d'écran principale
    gallery: ['/assets/img/portfolio/ankhproject.png'], // Captures supplémentaires
    description: `PerAnk is a modern, responsive website built to present the services of Éditions Per Ankh Québec — a publishing house committed to promoting diverse voices and supporting authors throughout the publishing process. The platform reflects the values of inclusivity, creativity, and transparency, while providing practical tools for manuscript submission and service exploration.`,
    technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
    features: [
      'Clear presentation of mission, vision, and publishing goals',
      'Multisection layout showcasing services, submission process, and author support',
      'Call-to-action sections for manuscript submission and service inquiries',
      'Detailed description of publishing options with emphasis on transparency',
      'Responsive and adaptive design for all screen sizes',
      'Elegant and accessible interface with smooth user experience'
    ],
    responsibilities: [
      'Designed and implemented a clean and accessible user interface using Bootstrap',
      'Structured content for optimal readability and SEO',
      'Created responsive layouts for desktop, tablet, and mobile views',
      'Integrated a contact and manuscript submission form',
      'Ensured multilingual and inclusive design language'
    ],
    challenges: [
      'Translating a strong editorial vision into an elegant and readable layout',
      'Ensuring the site architecture could grow with future publishing services',
      'Maintaining clarity and transparency in user interaction flows'
    ],
    solutions: [
      'Adopted a modular component structure for easy updates and expansion',
      'Worked closely with the editorial team to align visual identity with mission',
      'Used semantic HTML and accessibility best practices to enhance user trust and clarity'
    ],
    sourceCodeLink: '', // à remplir si applicable (GitHub, etc.)
    rate: 1
  },
  {
    name: 'Sawk Conseils',
    shortDescription: 'Corporate website for international business consulting services',
    categoryLabel: 'Website Development',
    category: 'branding',
    client: 'Weblysoft LLC',
    date: '2025', // À compléter (ex: 'June 2024')
    url: 'https://swconseils.com', // À compléter (ex: 'https://sawk-advices.com')
    coverImage: '/assets/img/portfolio/swconseilsproject.png', // Capture principale
    gallery: ['/assets/img/portfolio/swconseilsproject.png'], // Captures supplémentaires du site
    description: `Sawk Conseils is a corporate presentation website for SAWK Advices Inc, a global consulting firm dedicated to helping businesses expand internationally. The platform showcases their services, international reach, and sector-specific expertise while emphasizing client trust and proven success in over 54 markets.`,
    technologies: ['HTML5', 'CSS3', 'TailwindCSS', 'AOS.js'],
    features: [
      'Landing page with key statistics and value proposition',
      'Detailed presentation of services and areas of expertise',
      'Sector-specific testimonials from successful case studies',
      'Interactive animations and scroll-based effects with AOS.js',
      'Optimized layout for multilingual and international clients',
      'Responsive and adaptive design for mobile, tablet, and desktop'
    ],
    responsibilities: [
      'Designed and developed the full responsive website structure using HTML and TailwindCSS',
      'Implemented smooth scroll animations and transitions using AOS.js',
      'Translated strategic business content into a visually compelling interface',
      'Ensured optimized user experience across different screen sizes and devices',
      'Collaborated with the business team to align brand identity with web content'
    ],
    challenges: [
      'Conveying global presence and expertise in a single-page layout',
      'Creating a sleek yet professional interface suitable for high-profile corporate clients',
      'Managing large content blocks while maintaining visual harmony and usability'
    ],
    solutions: [
      'Used TailwindCSS to create a clean and modular layout with excellent responsiveness',
      'Employed AOS.js to enrich the user experience without compromising performance',
      'Carefully structured content into sections with consistent visual rhythm and branding'
    ],
    sourceCodeLink: '', // GitHub link si applicable
    rate: 1
  },
  {
    name: 'TRS Properties',
    shortDescription: 'Real estate website for showcasing and selling properties and land',
    categoryLabel: 'Website Development',
    category: 'branding',
    client: 'Weblysoft LLC',
    date: '2025', // Exemple : 'May 2024'
    url: 'https://trsproperties.net/', // Exemple : 'https://trs-properties.com'
    coverImage: '/assets/img/portfolio/trs (1).png', // Capture principale du site
    gallery: ['/assets/img/portfolio/trs (1).png', '/assets/img/portfolio/trs (2).png', '/assets/img/portfolio/trs (3).png', '/assets/img/portfolio/trs (4).png', '/assets/img/portfolio/trs (5).png'], // Captures supplémentaires
    description: `TRS Properties is a real estate company website designed to present a broad range of property listings including land plots, residential buildings, and investment opportunities. Built with modern web technologies, the platform highlights key listings, presents company values, and provides users with intuitive access to property details and contact features.`,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'TailwindCSS', 'AOS.js'],
    features: [
      'Responsive landing page presenting property listings and company values',
      'Clean and modern interface optimized for real estate browsing',
      'Animated scroll effects powered by AOS.js for smooth UX',
      'Contact section with direct call-to-action to reach the company',
      'Highlight of most viewed and featured properties',
      'Multi-device compatibility for mobile, tablet, and desktop users'
    ],
    responsibilities: [
      'Developed the website’s frontend using HTML, CSS, and TailwindCSS',
      'Integrated AOS.js to enhance content presentation and transitions',
      'Structured and styled property listing sections for visual clarity and impact',
      'Ensured responsive design and accessibility across various screen sizes',
      'Collaborated with the business team to reflect the brand identity online'
    ],
    challenges: [
      'Designing an elegant and functional interface for a broad audience',
      'Structuring complex real estate content without overwhelming users',
      'Creating visual consistency between animated content blocks'
    ],
    solutions: [
      'Used utility-first TailwindCSS classes for efficient and maintainable layout building',
      'Applied scroll animations with AOS.js to guide user focus smoothly',
      'Organized content using reusable and adaptive components for future scalability'
    ],
    sourceCodeLink: '', // Ajoute ton lien GitHub ici si applicable
    rate: 1
  },
  {
    name: 'Prepa Website',
    shortDescription: 'Promotional website for the Prepa mobile app focused on entrance exam preparation',
    categoryLabel: 'Website Development',
    category: 'branding',
    client: 'Personnal Project',
    date: '2024', // Exemple : 'June 2024'
    url: 'https://prepa-iota.vercel.app', // Exemple : 'https://prepa-app.com'
    coverImage: '/assets/img/portfolio/prepa-website (1).png', // Capture du site principal
    gallery: ['/assets/img/portfolio/prepa-website (1).png', '/assets/img/portfolio/prepa-website (2).png', '/assets/img/portfolio/prepa-website (3).png'], // Autres captures si disponibles
    description: `The Prepa website was developed to serve as the official landing page for the Prepa mobile application, which provides access to past entrance exam papers and solutions for students. The site had to be built quickly and efficiently to support an urgent pitch presentation. It presents key features, benefits, and access points to the app in a clear and attractive manner.`,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'AOS.js'],
    features: [
      'SEO-optimized landing page built under time constraints',
      'Responsive and mobile-friendly layout using Bootstrap',
      'Smooth animations and scroll effects with AOS.js',
      'Clear call-to-action and app feature highlights',
      'Bilingual content to align with app’s multilingual audience'
    ],
    responsibilities: [
      'Developed and deployed the promotional website within tight deadlines',
      'Adapted and customized Bootstrap templates to meet design goals',
      'Implemented SEO best practices and optimized metadata',
      'Crafted all on-page content and headlines through effective copywriting',
      'Integrated animations to enhance presentation for the pitch'
    ],
    challenges: [
      'Very short timeline to produce a functional and appealing website',
      'Maintaining visual consistency and message clarity under time pressure'
    ],
    solutions: [
      'Used Bootstrap templates to accelerate layout structuring',
      'Focused on concise, impactful copywriting aligned with the app’s core value',
      'Optimized images, metadata, and layout for SEO and fast loading'
    ],
    sourceCodeLink: '', // Ajoute le lien GitHub si applicable
    rate: 1
  },
  // {
  //   name: 'ServeSell Method Website',
  //   shortDescription: 'Responsive website presenting the ServeSell Method™ sales coaching program',
  //   categoryLabel: 'Website Development',
  //   category: 'branding',
  //   client: 'Weblysoft LLC',
  //   date: '', // ex : 'July 2025'
  //   url: '', // ajouter l’URL si disponible
  //   coverImage: '/assets/img/portfolio/', // capture d’écran principale du site
  //   gallery: ['', '', ''], // autres captures d’écran si disponibles
  //   description: `ServeSell Method is a professional website designed to promote Serge Wacka’s innovative sales coaching program based on authentic, service-driven selling. The site clearly communicates the mission, methodology, and offers a high-impact 3-day challenge to help entrepreneurs and professionals master genuine selling techniques.`,
  //   technologies: ['HTML5', 'CSS3', 'JavaScript', 'TailwindCSS', 'AOS.js'],
  //   features: [
  //     'Responsive and adaptive design optimized for various devices',
  //     'Engaging animated scroll effects using AOS.js',
  //     'Clear call-to-action sections for joining the ServeSell Challenge',
  //     'Presentation of program mission, testimonials, and book promotion',
  //     'User-friendly navigation and information architecture',
  //     'Multilingual support potential (English focus)'
  //   ],
  //   responsibilities: [
  //     'Developed and deployed a clean, modern, and responsive website',
  //     'Customized TailwindCSS styles to align with brand identity',
  //     'Implemented smooth animations with AOS.js for visual engagement',
  //     'Ensured fast loading times and SEO best practices',
  //     'Collaborated closely with marketing to ensure effective messaging'
  //   ],
  //   challenges: [
  //     'Conveying complex sales concepts simply and attractively online',
  //     'Designing a scalable and reusable UI with TailwindCSS',
  //     'Maintaining accessibility and responsiveness across devices'
  //   ],
  //   solutions: [
  //     'Structured content with clear headlines and segmented sections',
  //     'Used TailwindCSS utility classes for rapid, maintainable styling',
  //     'Integrated AOS.js animations to enhance user experience without sacrificing performance',
  //     'Focused on SEO optimization and semantic HTML to boost discoverability'
  //   ],
  //   sourceCodeLink: '', // lien GitHub ou repo privé si applicable
  //   rate: 1
  // },
  // {
  //   name: 'DigiConnect',
  //   shortDescription: 'Mobile app for creating, managing, and sharing professional business cards',
  //   categoryLabel: 'Mobile Application',
  //   category: 'app',
  //   client: 'Weblysoft LLC', // à compléter si client connu
  //   date: '', // date de réalisation ou en cours
  //   url: '', // lien vers app store ou démo si disponible
  //   coverImage: '/assets/img/portfolio/', // image principale de l’application
  //   gallery: [], // captures d’écran ou vidéos si disponibles
  //   description: `DigiConnect is a mobile application designed to streamline the creation, management, and sharing of professional business cards. It empowers users to create digital cards quickly, organize their contacts efficiently, and share their professional identity seamlessly.`,
  //   technologies: ['Ionic', 'Angular', 'Capacitor'], // à ajuster selon tech stack
  //   features: [
  //     'Intuitive card creation interface with customizable templates',
  //     'Efficient contact management and organization',
  //     'Easy sharing options via QR codes, email, and social media',
  //     'Secure storage and offline access to business cards',
  //     'In-progress development with focus on seamless UX'
  //   ],
  //   responsibilities: [
  //     'Designing and developing the mobile frontend interfaces',
  //     'Implementing core features for card creation and sharing',
  //     'Integrating backend APIs for user data management',
  //     'Collaborating on feature planning and UX improvements'
  //   ],
  //   challenges: [
  //     'Ensuring smooth and responsive UI for quick card edits',
  //     'Implementing secure and efficient data sharing mechanisms',
  //     'Designing for cross-platform consistency and offline support'
  //   ],
  //   solutions: [
  //     'Utilized modular component architecture for maintainability',
  //     'Leveraged Capacitor for native functionality access',
  //     'Implemented local caching and data synchronization strategies'
  //   ],
  //   sourceCodeLink: '', // à ajouter si disponible
  //   rate: 1
  // },
  {
    name: 'Kwarata-Website',
    shortDescription: 'Unified Endpoint Management platform tailored to African business needs',
    categoryLabel: 'Website & SaaS Platform',
    category: 'branding',
    client: 'Personnal Project',
    date: '2025', // préciser la date ou période
    url: 'https://kwarata-app.vercel.app', // lien vers site web si disponible
    coverImage: '/assets/img/portfolio/kwarata-website (1).png', // image principale du site ou logo
    gallery: ['/assets/img/portfolio/kwarata-website (1).png', '/assets/img/portfolio/kwarata-website (2).png', '/assets/img/portfolio/kwarata-website (3).png'], // captures d’écran, vidéos, etc.
    description: `Kwarata is an African-built unified endpoint management solution designed to address the unique IT security challenges of African enterprises. It offers centralized control of multi-platform devices, strong policy enforcement, remote management, and advanced monitoring with AI-powered predictive maintenance.`,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'AOS.js'],
    features: [
      'Responsive and adaptive design for seamless experience on desktop and mobile devices',
      'Clean, modern UI highlighting key product benefits clearly and effectively',
      'Smooth scroll animations and interactive elements using AOS.js',
      'SEO optimized content structure for better visibility in search engines',
      'Fast loading performance with optimized assets',
      'Clear calls-to-action (Get Started, Watch Video, Contact)',
      'Testimonial sections to build credibility and trust',
      'FAQ section addressing common customer questions',
      'Multi-section layout presenting mission, features, services, pricing, and contact',
      'Accessible design considering usability and readability standards'
    ],
    responsibilities: [
      'Designed and developed a responsive and adaptive marketing website using Bootstrap',
      'Implemented smooth animations and user interactions with AOS.js',
      'Optimized website for SEO and page speed',
      'Collaborated with marketing team to craft clear and persuasive content',
      'Ensured consistent branding and visual coherence',
      'Maintained cross-browser compatibility and accessibility standards'
    ],
    challenges: [
      'Communicating a complex tech solution in a simple, compelling way',
      'Creating engaging animations without impacting performance',
      'Ensuring responsive design across many device types and screen sizes',
      'Balancing SEO best practices with modern design elements'
    ],
    solutions: [
      'Leveraged Bootstrap grid and utilities for flexible layout and responsiveness',
      'Used AOS.js for performant scroll-triggered animations',
      'Structured HTML content semantically for SEO and accessibility',
      'Optimized images and minimized assets for fast loading',
      'Worked closely with marketing to align technical and marketing messages'
    ],
    sourceCodeLink: '', // ajouter lien GitHub si applicable
    rate: 1
  },
  {
    name: 'Kwarata Unified Endpoint Management',
    shortDescription: 'Enterprise-grade Unified Endpoint Management (UEM) system tailored for African business contexts',
    categoryLabel: 'Fullstack Web & Desktop Application',
    category: 'product',
    client: 'Personnal Project',
    status: 'In Development',
    coverImage: '/assets/img/portfolio/kwarata2.png',
    date: '2025', // Date de début ou de fin du projet
    url: 'https://kwarata.vercel.app', // Lien vers la démo ou le site
    gallery: ['/assets/img/portfolio/kwarata (1).png', '/assets/img/portfolio/kwarata (2).png', '/assets/img/portfolio/kwarata (3).png', '/assets/img/portfolio/kwarata (4).png', '/assets/img/portfolio/kwarata (5).png', '/assets/img/portfolio/kwarata (6).png', '/assets/img/portfolio/kwarata (7).png', '/assets/img/portfolio/kwarata (8).png', '/assets/img/portfolio/kwarata (9).png', '/assets/img/portfolio/kwarata (10).png'],
    description: `Kwarata is a cutting-edge UEM platform designed to empower African enterprises with centralized, adaptive, and secure management of diverse device fleets. Built on a robust microservices architecture, it addresses unique regional challenges while providing scalable, reliable, and extensible IT infrastructure management.`,
    technologies: [
      'Angular',
      'TypeScript',
      'TailwindCSS',
      'PrimeNG',
      'ASP.NET Core (C#)',
      '.NET MAUI (C#)',
      'SQL Server',
      'MongoDB',
      'InfluxDB',
      'Docker',
      'Azure Cloud'
    ],
    features: [
      'Microservices architecture enabling modular, scalable, and maintainable system components',
      'Cross-platform device management including Windows, macOS, Linux, Android, and iOS',
      'Real-time telemetry and monitoring with InfluxDB time-series database',
      'Role-Based Access Control (RBAC) for fine-grained permission management',
      'Remote device configuration, application deployment, and compliance enforcement',
      'Cloud-native deployment on Azure with containerization via Docker',
      'Mobile management app built with .NET MAUI for seamless admin experience on mobile devices',
      'Rich and responsive frontend UI with Angular, TailwindCSS, and PrimeNG component library',
      'Integration of relational and NoSQL databases for optimized data storage and querying',
      'Automated policy enforcement and geofencing capabilities',
      'Advanced reporting and analytics dashboards for IT administrators'
    ],
    responsibilities: [
      'Fullstack development including frontend Angular app and backend microservices in ASP.NET Core',
      'Design and implementation of microservices architecture ensuring modularity and scalability',
      'Developing responsive UI with TailwindCSS and PrimeNG for intuitive device management',
      'Implementing secure API endpoints with authentication and RBAC',
      'Containerizing applications with Docker and orchestrating deployments on Azure',
      'Managing SQL Server, MongoDB, and InfluxDB data layers for structured and time-series data',
      'Building mobile management client with .NET MAUI for cross-platform compatibility',
      'Collaborating with DevOps for CI/CD pipeline automation and cloud resource management'
    ],
    challenges: [
      'Designing a robust microservices architecture supporting high availability and fault tolerance',
      'Ensuring security and compliance across heterogeneous device ecosystems',
      'Handling real-time telemetry data efficiently for monitoring and alerting',
      'Maintaining a seamless user experience on web and mobile platforms',
      'Orchestrating containerized services with scalability on Azure Cloud',
      'Integrating multiple databases with different data models'
    ],
    solutions: [
      'Adopted microservices to isolate business domains and facilitate independent development and deployment',
      'Implemented JWT-based authentication and RBAC for secure access control',
      'Used InfluxDB optimized for time-series data to efficiently process telemetry streams',
      'Leveraged TailwindCSS and PrimeNG for performant and accessible UI components',
      'Configured Docker containers and Azure Kubernetes Service (AKS) for scalable cloud hosting',
      'Established data synchronization patterns between SQL Server and MongoDB for consistency',
      'Developed .NET MAUI mobile app to extend management capabilities on handheld devices'
    ],
    sourceCodeLink: '', // ajouter lien GitHub si disponible
    rate: 1,
    expectedRelease: 'TBD' // à préciser si possible
  },
  {
    name: 'Fleuva ERP',
    shortDescription: 'Web-based ERP platform for optimizing business processes and driving growth',
    categoryLabel: 'Web Application (ERP)',
    category: 'product',
    client: 'Fleuva',
    date: '2024-2025', // optional: you can specify a timeline like '2024'
    url: 'https://www.fleuva.com/', // optional: link to a demo or live app
    coverImage: '/assets/img/portfolio/fleuva.jpg', // optional: screenshot or visual preview
    gallery: ['/assets/img/portfolio/fleuva.jpg', '/assets/img/portfolio/fleuva1.webp', '/assets/img/portfolio/fleuva2.webp', '/assets/img/portfolio/fleuva3.webp', '/assets/img/portfolio/fleuva4.webp'],
    technologies: ['Angular', 'Bootstrap', 'jQuery', 'HTML5', 'CSS3', 'TypeScript'],
    description: `Fleuva is a comprehensive enterprise resource planning (ERP) application designed to help businesses streamline operations, automate repetitive tasks, and make informed decisions through real-time analytics. It covers a wide range of functional modules such as project management, HR, finance, customer relationships, inventory, production, agriculture, and asset management.`,
    features: [
      'Modern, responsive and user-friendly interface built with Angular and Bootstrap',
      'Smooth navigation between functional modules like Finance, HR, Sales, Agriculture, etc.',
      'Reusable UI components for better maintainability and modularity',
      'Complex UI interactions handled using jQuery and Bootstrap elements',
      'Interactive dashboards for real-time KPIs and performance monitoring',
      'Fully responsive pages for desktop, tablet and mobile views',
      'Enhanced user experience with animations and transitions'
    ],
    responsibilities: [
      'Developed the entire frontend of the ERP using Angular',
      'Integrated UI mockups with Bootstrap for a responsive and professional layout',
      'Used jQuery for handling complex dynamic interactions when necessary',
      'Collaborated closely with the backend team to connect APIs and handle data flow',
      'Tested and iterated on UI components to improve usability and user experience',
      'Created modular, reusable components to ensure design and code consistency'
    ],
    challenges: [
      'Designing a cohesive interface that adapts to a wide range of business modules',
      'Handling complex and dynamic user interactions while maintaining performance',
      'Ensuring responsive layout and consistent UX across different devices',
      'Accommodating highly diverse business domains within a single unified platform'
    ],
    solutions: [
      'Used Angular’s modular architecture to clearly separate and manage features',
      'Leveraged Bootstrap’s grid system to ensure mobile-first responsive design',
      'Applied jQuery selectively for direct DOM manipulation when needed',
      'Built a mini design system to enforce UI/UX consistency across the app',
      'Iterated rapidly with backend integration to adjust UI based on real user feedback'
    ]
  },
  {
    name: 'JCS Admin Dashboard',
    shortDescription: 'Admin dashboard and content management interface for Jethro’s Computing Services website',
    categoryLabel: 'Web Application (Admin Panel)',
    category: 'product',
    client: '(JCS) Jethro\'s Computing Services',
    date: '2024',
    coverImage: '/assets/img/portfolio/jcs.png',
    gallery: ['/assets/img/portfolio/jcs.png'],
    technologies: ['Angular', 'SCSS', 'Angular Material', 'REST APIs'],
    description: `JCS (Jethro's Computing Services) required a powerful and user-friendly web-based administration platform to manage their website content and monitor user activity. This included a secure dashboard for content updates, user interactions, and web traffic analytics. The goal was to provide the JCS team with full visibility and control over their online platform through an elegant, responsive, and intuitive interface.`,
    features: [
      'Dynamic dashboard displaying real-time user interaction and web traffic statistics',
      'Content Management System (CMS) features: add/edit/delete website content',
      'Secure access and role-based interface with clean UX',
      'Data visualizations using Angular Material components (tables, charts, graphs)',
      'Fully responsive UI for desktop and tablet',
      'API-driven design for dynamic data rendering and updates'
    ],
    responsibilities: [
      'Developed the complete frontend using Angular and SCSS with a clean, modular architecture',
      'Integrated RESTful APIs provided by the backend to fetch and update data in real-time',
      'Used Angular Material to ensure a consistent and modern UI across all components',
      'Implemented reusable UI components for dashboards, tables, and content forms',
      'Optimized the interface for usability and performance across multiple screen sizes'
    ],
    challenges: [
      'Ensuring seamless integration between frontend and backend APIs',
      'Building a maintainable and scalable dashboard with rich interactions',
      'Designing data visualizations that are both insightful and lightweight'
    ],
    solutions: [
      'Used Angular reactive forms and services for API communication and validation',
      'Built reusable Material components for better maintainability',
      'Applied SCSS for clean styling and UI responsiveness across all admin views'
    ]
  },
  {
    name: 'Ménager Ponctuel',
    shortDescription: 'Web platform to connect individuals with nearby household service providers (plumbers, electricians, etc.)',
    categoryLabel: 'Web Application (Service Marketplace)',
    category: 'product',
    client: 'YETI',
    coverImage: '/assets/img/portfolio/menagerponctuel.png',
    gallery: ['/assets/img/portfolio/menager-ponctuel (1).png', '/assets/img/portfolio/menager-ponctuel (2).png', '/assets/img/portfolio/menager-ponctuel (3).png', '/assets/img/portfolio/menager-ponctuel (4).png', '/assets/img/portfolio/menager-ponctuel (5).png', '/assets/img/portfolio/menager-ponctuel (6).png', '/assets/img/portfolio/menager-ponctuel (7).png', '/assets/img/portfolio/menager-ponctuel (8).png'],
    technologies: ['Angular', 'TailwindCSS', 'Angular Material'],
    description: `Ménager Ponctuel is a web-based platform that enables users to easily find and contact local household service providers such as electricians, plumbers, and handymen. At the same time, professionals can register as service providers, manage their availability, and receive job requests in exchange for payment. The platform was designed to streamline the search, booking, and communication process for both clients and workers.`,
    features: [
      'User registration and authentication for both clients and service providers',
      'Dynamic search and filter functionality to locate nearby providers by service type and location',
      'Service provider dashboard to manage profile, availability, and incoming requests',
      'Responsive and clean UI built with TailwindCSS and Angular Material components',
      'Interactive map integration to display nearby service providers',
      'Secure booking workflow with request confirmation and user feedback system'
    ],
    responsibilities: [
      'Led the frontend development of the web application using Angular',
      'Designed and implemented responsive user interfaces with TailwindCSS and Angular Material',
      'Developed reusable components for forms, cards, lists, and dashboards',
      'Ensured a smooth UX for both service seekers and providers across all screens',
      'Collaborated with backend team to integrate RESTful APIs and real-time data updates'
    ],
    challenges: [
      'Designing a dual-role experience for both service seekers and providers',
      'Ensuring a fast and intuitive search and booking flow',
      'Creating a clean, modern UI while keeping performance optimized'
    ],
    solutions: [
      'Used Angular’s reactive forms and modular structure to manage complex user flows',
      'Leveraged TailwindCSS for fast layout prototyping and responsive design',
      'Integrated Angular Material components for consistent and accessible UI interactions'
    ]
  }

]

function createProjectsList(projects){
  return `${projects.map((p, index) => `
    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-${p.category}">
      <img src="${p.coverImage}" class="img-fluid" alt="${p.name}">
      <div class="portfolio-info">
        <h4>${p.name}</h4>
        <p class="pr-5">${p.shortDescription}</p>
        <div class="portfolio-actions" style="display: flex; gap: 12px; align-items: center; margin-top: 8px;">
          <a href="${p.coverImage}" title="${p.name}" data-gallery="portfolio-gallery-${p.category}" class="glightbox preview-link" style="display: flex; align-items: center; justify-content: center;">
            <i class="bi bi-zoom-in" style="font-size: 1.5rem;"></i>
          </a>
          <a href="portfolio-details.html?project=${index}" title="More Details" class="details-link" style="display: flex; align-items: center; justify-content: center;">
            <i class="bi bi-info-circle" style="font-size: 1.5rem; width: 16px; position: relative; top: 0px; right: 4px;"></i>
          </a>
        </div>
      </div>
    </div>
  `).join("")}`;
}

function renderProjects(){
  const elt = document.getElementById("isotope-container");
  if(elt) elt.innerHTML = createProjectsList(projects)

  reinitializeIsotope();
}

function reinitializeIsotope() {
  const container = document.querySelector('.isotope-container');

  // Wait for all images to load before initializing Isotope
  imagesLoaded(container, function () {
    // Initialize Isotope with masonry layout
    const iso = new Isotope(container, {
      itemSelector: '.isotope-item',
      layoutMode: 'masonry'
    });

    // Filter click handling
    document.querySelectorAll('.portfolio-filters li').forEach(el => {
      el.addEventListener('click', function () {
        document.querySelector('#portfolio-filters .filter-active')?.classList.remove('filter-active');
        this.classList.add('filter-active');
        const filterValue = this.getAttribute('data-filter');
        iso.arrange({ filter: filterValue });
      });
    });

    // Re-initialize GLightbox
    GLightbox({ selector: '.glightbox' });
  });
}


document.addEventListener("DOMContentLoaded", function() {
  renderProjects();
});