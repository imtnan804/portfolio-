import React, { useEffect } from "react";
import { siteConfig } from "../data/site";
import { skillCategories } from "../data/skills";
import { projectsData } from "../data/projects";
import { X, Download, Printer, Copy, Check, Mail, Phone, MapPin, Globe } from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyTextCV = () => {
    const textCV = `
${siteConfig.name} - Full-Stack & Mobile Application Developer
Email: ${siteConfig.socials.email} | Phone: ${siteConfig.socials.phoneDisplay} | Location: ${siteConfig.location}

SUMMARY:
${siteConfig.summary}

EDUCATION:
${siteConfig.education.degree} in ${siteConfig.education.field} (CGPA: ${siteConfig.education.cgpa})
${siteConfig.education.institution}, ${siteConfig.education.location} (${siteConfig.education.period})

CORE SKILLS:
- Languages: Java, Kotlin, JavaScript, PHP, SQL
- Mobile: Android Native, Flutter, CameraX, Hardware Sensors
- Web & Backend: React, Node.js, Express, PHP/Laravel, REST APIs
- Databases: MySQL, Firebase Firestore & Realtime DB
- Hardware & IoT: Microcontroller telemetry, RFID Attendance Systems, ESP32
- Other: Real-Time Sockets, Payment Gateways, AI integration, Git

PROJECTS:
1. Smart University Management Platform (IoT RFID Attendance + Student Requests Workflow + AI Assistant)
2. University Event Management App (Mobile RSVP & QR Pass Verification)
3. E-Commerce Website (Product Catalog, Cart & Checkout Flow)
4. University GR & CR Voting System (Tamper-Resistant Web Voting Portal)
5. Social Media Application (Real-Time Messaging & Activity Feeds)
6. Multi-Tool Utility App (20+ Mobile Hardware Utilities)
    `.trim();

    navigator.clipboard.writeText(textCV);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in"
    >
      <div className="fixed inset-0 -z-10" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto text-slate-900 dark:text-slate-100">
        
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-base text-slate-900 dark:text-white">
              Curriculum Vitae Preview
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              (Imtnan_Khawar_Maan_CV.pdf)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyTextCV}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy Text"}</span>
            </button>

            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href="/cv.pdf"
              download="Imtnan_Khawar_Maan_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              type="button"
              aria-label="Close CV Modal"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable CV Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-7 bg-white dark:bg-slate-900">
          
          {/* Candidate Name & Header Info */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <h2 id="cv-modal-title" className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {siteConfig.name}
            </h2>
            <div className="text-base font-semibold text-sky-600 dark:text-sky-400 mt-1">
              Full-Stack &amp; Mobile Application Developer
            </div>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 dark:text-slate-400 mt-3 font-mono">
              <div className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href={`mailto:${siteConfig.socials.email}`} className="hover:underline">
                  {siteConfig.socials.email}
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <a href={`tel:${siteConfig.socials.phone}`} className="hover:underline">
                  {siteConfig.socials.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{siteConfig.location}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-sky-600 dark:text-sky-400 mb-2">
              Professional Profile
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {siteConfig.summary}
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-sky-600 dark:text-sky-400 mb-3">
              Education
            </h3>
            <div className="space-y-1">
              <div className="flex justify-between items-start text-sm">
                <span className="font-bold text-slate-900 dark:text-white">
                  {siteConfig.education.degree} in {siteConfig.education.field}
                </span>
                <span className="font-mono text-xs text-slate-500 tabular-nums">
                  {siteConfig.education.period}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-slate-600 dark:text-slate-400">
                <span>{siteConfig.education.institution}, {siteConfig.education.location}</span>
                <span className="font-semibold text-sky-600 dark:text-sky-400">
                  CGPA: {siteConfig.education.cgpa}
                </span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-sky-600 dark:text-sky-400 mb-3">
              Technical Proficiencies
            </h3>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                <span className="font-semibold text-slate-500 dark:text-slate-400">Languages:</span>
                <span className="sm:col-span-3 text-slate-800 dark:text-slate-200">Java, Kotlin, JavaScript, PHP, SQL</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                <span className="font-semibold text-slate-500 dark:text-slate-400">Mobile Development:</span>
                <span className="sm:col-span-3 text-slate-800 dark:text-slate-200">Android Native, Flutter, CameraX, Device Hardware Sensors, Material 3 UI</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                <span className="font-semibold text-slate-500 dark:text-slate-400">Web &amp; Backend:</span>
                <span className="sm:col-span-3 text-slate-800 dark:text-slate-200">React, Node.js, Express, PHP Laravel, REST API Architecture, HTML5/CSS3</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                <span className="font-semibold text-slate-500 dark:text-slate-400">Databases &amp; Cloud:</span>
                <span className="sm:col-span-3 text-slate-800 dark:text-slate-200">MySQL, Firebase Firestore, Firebase Realtime Database</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                <span className="font-semibold text-slate-500 dark:text-slate-400">IoT &amp; Hardware:</span>
                <span className="sm:col-span-3 text-slate-800 dark:text-slate-200">Sensor-Based Attendance Systems, Microcontroller-to-App Data Flow, ESP32, RFID</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                <span className="font-semibold text-slate-500 dark:text-slate-400">Systems &amp; Integrations:</span>
                <span className="sm:col-span-3 text-slate-800 dark:text-slate-200">Real-Time Chat Systems (WebSockets), Payment Gateways, AI-Assisted Features, Git</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-sky-600 dark:text-sky-400 mb-3">
              Selected Projects
            </h3>
            <div className="space-y-4 text-xs">
              {projectsData.map((project) => (
                <div key={project.id} className="space-y-1">
                  <div className="flex justify-between items-baseline font-bold text-slate-900 dark:text-white">
                    <span>{project.title}</span>
                    <span className="text-[11px] font-mono text-sky-600 dark:text-sky-400">{project.badgeCategory}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-normal">
                    {project.shortDescription}
                  </p>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Stack: {project.techStack.join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
