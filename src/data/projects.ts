import smartCampusImage from "../assets/images/Smart University Platform Infographic.png";
import universityEventImage from "../assets/images/University Event Management App Showcase.png";
import ecommerceImage from "../assets/images/ShopZone E-Commerce UI Showcase-1.png";
import campusVotingImage from "../assets/images/University Voting System Infographic.png";
import socialMediaImage from "../assets/images/Campus Social Media App Showcase.png";
import utilityAppImage from "../assets/images/Multi-Tool Utility App Showcase.png";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "All" | "Featured" | "Web" | "Mobile" | "IoT / Hardware";
  badgeCategory: string;
  shortDescription: string;
  fullDescription: string;
  featured: boolean;
  image: string;
  techStack: string[];
  metrics?: { label: string; value: string }[];
  keyFeatures: string[];
  architectureNotes?: string[];
  links: {
    demo: string;
    github: string;
    docs?: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "smart-university-platform",
    title: "Smart University Management Platform",
    subtitle: "IoT Telemetry + Student Approval Workflows + AI Assistant",
    category: "IoT / Hardware",
    badgeCategory: "IoT & Full-Stack",
    shortDescription: "IoT-based attendance tracking integrated with the application backend, dynamic application tracking workflow for student requests and approvals, and AI-assisted functionality to support users.",
    fullDescription: "An enterprise-grade campus management ecosystem connecting physical classroom hardware directly to administrative databases. The system replaces error-prone manual roll calls with automated RFID/biometric sensor gates that push scan events over MQTT/REST to the central server in real time. Beyond attendance, the platform houses a state machine workflow for student academic requests (transcripts, course drops, leaves) with multi-tier faculty sign-offs, and an embedded AI assistant that provides 24/7 instant answers to campus policy inquiries.",
    featured: true,
    image: smartCampusImage,
    techStack: ["IoT / RFID Sensors", "Node.js", "Express", "React", "MySQL", "AI Assistant", "REST APIs", "WebSockets"],
    metrics: [
      { label: "Hardware Latency", value: "<150ms" },
      { label: "Attendance Accuracy", value: "99.8%" },
      { label: "Paperwork Reduction", value: "85%" },
    ],
    keyFeatures: [
      "Hardware sensor attendance gateway: Microcontroller RFID readers transmit student ID tap records straight to MySQL via secured REST API endpoints.",
      "Multi-stage application tracking: Dynamic workflow engine tracking student applications across student, department head, and registrar states.",
      "Embedded AI Assistant: Interactive conversational bot grounded on university procedures to answer student inquiries and guide form submissions.",
      "Role-Based Access Control: Granular privileges for students, teaching faculty, department chairpersons, and system administrators.",
      "Real-time campus occupancy & attendance analytics with instant exportable CSV/PDF reports.",
    ],
    architectureNotes: [
      "Hardware Layer: Microcontroller (ESP32/RFID-RC522) with Wi-Fi telemetry pushing JSON payloads.",
      "Server Layer: Node.js/Express REST API with JWT verification and rate limiting.",
      "Database Layer: Normalized MySQL relational database with transactional attendance logs and indexed student IDs.",
    ],
    links: {
      demo: "#live-demo-modal",
      github: "https://github.com/#smart-university",
      docs: "#architecture-spec",
    },
  },
  {
    id: "university-event-management",
    title: "University Event Management App",
    subtitle: "Mobile Event Hub & QR Ticket Check-In",
    category: "Mobile",
    badgeCategory: "Mobile App",
    shortDescription: "Create, manage, and track university events and attendee participation with real-time registration and digital QR ticket verification.",
    fullDescription: "A specialized mobile and organizer platform built for university societies, academic symposiums, and cultural festivals. Organizers can publish events with speaker schedules, venue maps, and seat quotas, while students browse upcoming activities, RSVP with one tap, and receive digital QR entry passes synced directly to their mobile wallets.",
    featured: false,
    image: universityEventImage,
    techStack: ["Android (Kotlin)", "Flutter", "Firebase Firestore", "QR Code Engine", "Cloud Messaging"],
    metrics: [
      { label: "QR Check-In Speed", value: "1.2s / attendee" },
      { label: "Live Sync", value: "Real-time" },
      { label: "Cross-Platform", value: "Android & iOS" },
    ],
    keyFeatures: [
      "Dynamic event publishing: Society heads and faculty create events with multi-track agendas and multimedia banners.",
      "Instant RSVP & Digital Pass: Generates unique encrypted QR codes for registered participants with offline ticket caching.",
      "Gatekeeper scanner mode: Built-in camera barcode scanner allows volunteers to validate attendee entries in under 2 seconds.",
      "Personalized agenda reminders: Push notifications before event commencement and live schedule modification alerts.",
    ],
    architectureNotes: [
      "Mobile Client: Native Android / Flutter framework with Material 3 responsive layout.",
      "Cloud Backend: Firebase Firestore for real-time ticket state synchronization and concurrency handling.",
    ],
    links: {
      demo: "#event-app-demo",
      github: "https://github.com/#university-event-app",
    },
  },
  {
    id: "ecommerce-web-platform",
    title: "E-Commerce Website",
    subtitle: "Responsive Online Store & Checkout Flow",
    category: "Web",
    badgeCategory: "Full-Stack Web",
    shortDescription: "Product listings, cart, and checkout flow with high-performance responsive catalog browsing, category filtering, and transaction state handling.",
    fullDescription: "A clean, modern online shopping experience built for speed and reliability. Features structured product catalogs, multi-attribute filtering (brand, category, price range), a persistent client-side cart drawer with reactive stock computation, and a streamlined multi-step checkout workflow with client validation and mock order fulfillment.",
    featured: false,
    image: ecommerceImage,
    techStack: ["React", "JavaScript (ES6+)", "Node.js", "MySQL", "Tailwind CSS", "Payment API"],
    metrics: [
      { label: "Cart Update Latency", value: "<50ms" },
      { label: "Responsive Layout", value: "Mobile + Desktop" },
      { label: "Checkout Steps", value: "3-Step Flow" },
    ],
    keyFeatures: [
      "Product catalog with instant text search and live parametric category/price range filtering.",
      "Interactive cart drawer: Increment/decrement item quantity, calculate sales tax and discount codes in real time.",
      "Multi-step checkout flow: Shipping address validation, payment method selector, and summary receipt generation.",
      "Inventory state safety: Visual badges for in-stock and low-stock items with disabled actions on depleted inventory.",
    ],
    architectureNotes: [
      "Frontend: Component-driven React SPA with context-managed cart state and optimistic UI updates.",
      "Backend: RESTful API endpoints for product catalogs, cart persistence, and order dispatching.",
    ],
    links: {
      demo: "#ecommerce-demo",
      github: "https://github.com/#ecommerce-platform",
    },
  },
  {
    id: "campus-voting-system",
    title: "University GR & CR Voting System",
    subtitle: "Secure Web Portal for Student Representative Elections",
    category: "Web",
    badgeCategory: "Full-Stack Web",
    shortDescription: "Web-based voting for university elections with secure vote submission, candidate profiles, and live result tracking.",
    fullDescription: "A tamper-resistant digital voting portal engineered for campus General Representative (GR) and Class Representative (CR) elections. Enforces strict single-vote-per-student constraints via institutional credentials, hides live tallies until voting closes or displays verified turnout meters, and provides election administrators with verifiable audit trails.",
    featured: false,
    image: campusVotingImage,
    techStack: ["PHP", "Laravel", "MySQL", "JavaScript", "Role-Based Auth", "CSRF Protection"],
    metrics: [
      { label: "Ballot Integrity", value: "100% Unique" },
      { label: "Audit Trail", value: "Cryptographic Log" },
      { label: "Voting Window", value: "Automated Timer" },
    ],
    keyFeatures: [
      "Credentialed voter authentication: Validates student roll numbers and ensures each student casts exactly one ballot per post.",
      "Candidate manifesto profiles: Comprehensive candidate cards showcasing vision statements, CGPA eligibility, and photo bios.",
      "Real-time election dashboard: Turnout meters by department and automatic tally compilation at the close of voting.",
      "Administrative oversight: Election commission panel to set candidate lists, define voting start/stop windows, and export certified results.",
    ],
    architectureNotes: [
      "Backend: PHP / Laravel MVC architecture with robust CSRF and SQL-injection defense.",
      "Database: MySQL relational schema with isolated ballot tables preventing voter-choice de-anonymization.",
    ],
    links: {
      demo: "#voting-system-demo",
      github: "https://github.com/#gr-cr-voting-system",
    },
  },
  {
    id: "social-media-app",
    title: "Social Media Application",
    subtitle: "Real-Time User Connections & Instant Messaging",
    category: "Mobile",
    badgeCategory: "Mobile App",
    shortDescription: "User connections and real-time chat, with core Facebook-like functionality including activity feeds, comments, and media uploads.",
    fullDescription: "A native mobile social networking application enabling university peers to interact, form study circles, share status updates with photos, and engage in instant one-on-one and group messaging. Features a responsive timeline feed, real-time typing indicators, and user presence detection.",
    featured: false,
    image: socialMediaImage,
    techStack: ["Android (Java/Kotlin)", "Firebase Realtime DB", "Firebase Auth", "Cloud Storage", "WebSockets"],
    metrics: [
      { label: "Message Delivery", value: "<100ms" },
      { label: "Presence Status", value: "Live Online/Offline" },
      { label: "Media Compression", value: "Client-side" },
    ],
    keyFeatures: [
      "Personalized social feed: Share text and photo posts with like reactions and threaded comments.",
      "Real-time instant chat: Direct messaging powered by Firebase Realtime DB with message delivery indicators.",
      "User profiles & discovery: Search friends by department and view peer posts and bio information.",
      "Active presence tracking: Live green indicator for active users and timestamped last-seen logs.",
    ],
    architectureNotes: [
      "Client: Android Java/Kotlin with RecyclerView viewholder patterns and optimized image caching.",
      "Real-Time Data: Firebase Realtime Database event listeners for zero-polling message synchronization.",
    ],
    links: {
      demo: "#social-app-demo",
      github: "https://github.com/#social-media-app",
    },
  },
  {
    id: "multitool-utility-app",
    title: "Multi-Tool Utility App",
    subtitle: "Mobile Toolkit Bundling 20+ Everyday Utilities",
    category: "Mobile",
    badgeCategory: "Mobile App",
    shortDescription: "Mobile toolkit bundling 20+ utilities including flashlight, photo editing, unit converter, sensor gauges, and calculator tools.",
    fullDescription: "An all-in-one Android utility hub designed to eliminate the need for dozens of ad-heavy standalone tools. Packed with 20+ native tools that tap directly into device hardware APIs—ranging from CameraX flashlight controllers, sound level decibel meters using the microphone, and compass orientation via magnetometers, to offline photo filters and financial calculators.",
    featured: false,
    image: utilityAppImage,
    techStack: ["Android", "Kotlin", "Hardware APIs", "CameraX", "SensorManager", "Canvas"],
    metrics: [
      { label: "Bundled Tools", value: "20+ Utilities" },
      { label: "App Footprint", value: "Under 15MB" },
      { label: "Offline First", value: "100% Offline" },
    ],
    keyFeatures: [
      "20+ Essential Utilities: Torch, scientific calculator, BMI calculator, currency/unit converter, stopwatch, and note scratchpad.",
      "Hardware sensor monitors: Real-time compass heading, sound level dB meter, light sensor lux meter, and bubble level gauge.",
      "Photo editing suite: Rapid crop, rotate, brightness/contrast adjustments, and grayscale document scanning filters.",
      "Battery & Storage Diagnostics: Live RAM usage, battery temperature, and internal storage space visualizer.",
    ],
    architectureNotes: [
      "Hardware Integration: Direct Kotlin hooks to Android SensorManager, Camera2/CameraX, and AudioRecord APIs.",
      "Performance: Strict zero-background battery drain architecture with listeners unregistering on lifecycle pause.",
    ],
    links: {
      demo: "#utility-app-demo",
      github: "https://github.com/#multitool-utility-app",
    },
  },
];
