export interface SkillItem {
  name: string;
  level?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    iconName: "Code2",
    description: "Core languages used for robust systems, mobile native development, and full-stack logic.",
    items: [
      { name: "Java", highlight: true },
      { name: "Kotlin", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "PHP" },
      { name: "SQL", highlight: true },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    iconName: "Smartphone",
    description: "Native Android and cross-platform UI with direct hardware sensor access and responsive mobile design.",
    items: [
      { name: "Android Native (Java/Kotlin)", highlight: true },
      { name: "Flutter Cross-Platform" },
      { name: "CameraX & Device Camera" },
      { name: "Hardware Sensors & Utilities" },
      { name: "Material 3 Mobile UI" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    iconName: "Layout",
    description: "Component-driven client web interfaces built with modern reactive state and accessible layouts.",
    items: [
      { name: "React", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "HTML5 Semantic Structure" },
      { name: "CSS3 & Modern Tailwind" },
      { name: "Responsive Viewport Design" },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    iconName: "Server",
    description: "Server architecture, microservices, and secure RESTful endpoints handling client requests.",
    items: [
      { name: "Node.js & Express", highlight: true },
      { name: "PHP & Laravel", highlight: true },
      { name: "REST API Architecture" },
      { name: "Authentication & Role Guards" },
      { name: "Middleware & Request Routing" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    iconName: "Database",
    description: "Relational relational schemas, indexing, and real-time document stores.",
    items: [
      { name: "MySQL Relational Schemas", highlight: true },
      { name: "Firebase Firestore", highlight: true },
      { name: "Firebase Realtime DB" },
      { name: "Data Modeling & Transactions" },
      { name: "Query Optimization" },
    ],
  },
  {
    id: "iot",
    title: "IoT & Hardware Integration",
    iconName: "Cpu",
    description: "Bridging embedded physical sensors and microcontroller telemetry directly to cloud backends.",
    items: [
      { name: "Sensor-Based Attendance Systems", highlight: true },
      { name: "Microcontroller-to-App Data Flow", highlight: true },
      { name: "RFID & Proximity Readers" },
      { name: "ESP32 / Arduino Interfacing" },
      { name: "Hardware Telemetry Pipelines" },
    ],
  },
  {
    id: "other",
    title: "Systems, Real-Time & Tools",
    iconName: "Zap",
    description: "Real-time communication engines, transaction gateways, and AI-assisted workflows.",
    items: [
      { name: "Real-Time Chat Systems (WebSockets/Firebase)", highlight: true },
      { name: "Payment Gateway Integration" },
      { name: "AI-Assisted Features & LLM Prompts", highlight: true },
      { name: "Git & Version Control" },
      { name: "System Debugging & Logging" },
    ],
  },
];
