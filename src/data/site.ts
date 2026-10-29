export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  summary: string;
  highlights: string[];
}

export interface SocialLinks {
  email: string;
  phone: string;
  phoneDisplay: string;
  github: string;
  linkedin: string;
}

export interface SiteConfig {
  name: string;
  titles: string[];
  pitch: string;
  summary: string;
  location: string;
  socials: SocialLinks;
  stats: Stat[];
  education: Education;
  cvUrl: string;
}

export const siteConfig: SiteConfig = {
  name: "Imtnan Khawar Maan",
  titles: [
    "Full-Stack Developer",
    "Mobile App Developer",
    "IoT Integrator",
  ],
  pitch: "Builds end-to-end applications across web, mobile, and hardware, with real-time features and AI-assisted functionality.",
  summary: "Full-stack and mobile developer with hands-on project experience across web platforms, mobile apps, and system integration. Comfortable working end to end on application design, database structure, front-end interfaces, and backend logic, with practical exposure to IoT integration, real-time features, and AI-assisted functionality.",
  location: "Nankana Sahib, Punjab, Pakistan",
  cvUrl: "/cv.pdf",
  socials: {
    email: "kingmaan2004@gmail.com",
    phone: "03254733410",
    phoneDisplay: "0325 4733410",
    github: "https://github.com/#",
    linkedin: "https://linkedin.com/in/#",
  },
  stats: [
    {
      value: "6+",
      label: "Production Projects",
      detail: "Spanning web, Android, and hardware integration",
    },
    {
      value: "5",
      label: "Core Languages",
      detail: "Java, Kotlin, JavaScript, PHP, and SQL",
    },
    {
      value: "3",
      label: "Architecture Pillars",
      detail: "Web platforms + Mobile apps + IoT microcontrollers",
    },
    {
      value: "3.09",
      label: "Academic CGPA",
      detail: "BS Computer Science (Baba Guru Nanak University)",
    },
  ],
  education: {
    degree: "Bachelor of Science",
    field: "Computer Science",
    institution: "Baba Guru Nanak University",
    location: "Nankana Sahib, Pakistan",
    period: "2022 – 2026",
    cgpa: "3.09 / 4.0",
    summary: "Rigorous curriculum focused on software engineering principles, distributed systems, mobile application architectures, and database design with practical capstone development.",
    highlights: [
      "Core coursework in Data Structures, Algorithms, OOP (Java & Kotlin), DBMS, and Web Engineering",
      "Hands-on engineering in microcontroller data streaming, sensor networks, and cloud telemetry",
      "Lead developer on university event and student voting applications with campus-wide deployment testing",
    ],
  },
};
