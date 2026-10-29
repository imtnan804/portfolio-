import React, { useState, useEffect } from "react";
import { siteConfig } from "../data/site";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Cpu, 
  Globe, 
  Smartphone, 
  Terminal,
  Activity,
  CheckCircle2,
  RefreshCw
} from "lucide-react";

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Interactive Live Architecture simulation state
  const [activeTab, setActiveTab] = useState<"iot" | "backend" | "client">("iot");
  const [logs, setLogs] = useState<Array<{ id: number; time: string; tag: string; msg: string }>>([
    { id: 1, time: "09:18:24", tag: "RFID-GATE", msg: "ESP32 card reader initialized at Academic Block Hall C" },
    { id: 2, time: "09:18:25", tag: "NODE-API", msg: "WebSocket pipe established: /ws/telemetry (latency 18ms)" },
    { id: 3, time: "09:18:27", tag: "DB-SYNC", msg: "Batch attendance logs persisted to MySQL tables" },
  ]);
  const [scanCount, setScanCount] = useState(48);

  const simulateScan = () => {
    const now = new Date();
    const timeStr = now.toTimeString().split(" ")[0];
    const newCount = scanCount + 1;
    setScanCount(newCount);
    const newEntry = {
      id: Date.now(),
      time: timeStr,
      tag: "RFID-SCAN",
      msg: `Student ID #U-${2400 + (newCount % 30)} verified · Turnstile unlocked [Pass]`,
    };
    setLogs((prev) => [newEntry, ...prev.slice(0, 3)]);
  };

  useEffect(() => {
    const currentTitle = siteConfig.titles[titleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(50);
        } else {
          setTypingSpeed(90);
        }
      } else {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % siteConfig.titles.length);
          setTypingSpeed(100);
        } else {
          setTypingSpeed(45);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, typingSpeed]);

  return (
    <section id="hero" className="relative pt-24 sm:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-sky-500/10 via-sky-500/5 to-transparent blur-3xl opacity-70 dark:opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid: 1440px desktop balanced layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean editorial kicker without pills */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-400 mb-3 tracking-wide">
              <span>Full-Stack &amp; Mobile Engineer</span>
              <span aria-hidden="true">·</span>
              <span>Hardware &amp; IoT Systems</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4 text-balance">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 dark:from-sky-400 dark:via-sky-300 dark:to-blue-400">
                {siteConfig.name}
              </span>
            </h1>

            {/* Cycling animated title */}
            <div className="h-10 sm:h-12 flex items-center mb-5 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
              <span className="text-sky-600 dark:text-sky-400 font-mono mr-2">&gt;</span>
              <span className="min-w-[200px] border-r-2 border-sky-500 pr-1 animate-pulse">
                {displayText}
              </span>
            </div>

            {/* Pitch description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              {siteConfig.pitch}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 rounded-lg shadow-sm hover:shadow-sky-500/25 transition-all group whitespace-nowrap"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 rounded-lg border border-slate-200/80 dark:border-slate-700 transition-colors whitespace-nowrap"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social / Direct Contacts */}
            <div className="flex items-center gap-5 text-slate-500 dark:text-slate-400 text-sm">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                Connect:
              </span>
              <a
                href={`mailto:${siteConfig.socials.email}`}
                aria-label={`Email ${siteConfig.socials.email}`}
                className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
                title={siteConfig.socials.email}
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${siteConfig.socials.phone}`}
                aria-label={`Call ${siteConfig.socials.phoneDisplay}`}
                className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
                title={siteConfig.socials.phoneDisplay}
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors p-1.5 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive System Architecture Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl glass-panel p-5 sm:p-6 shadow-xl border border-slate-200/80 dark:border-slate-800 relative">
              
              {/* Header: Visual window controls */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">
                    maan-system-bridge.ts
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-sky-600 dark:text-sky-400 font-mono">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Real-Time</span>
                </div>
              </div>

              {/* Architecture 3-Zone Flow */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setActiveTab("iot")}
                  className={`p-2.5 rounded-lg text-left transition-all ${
                    activeTab === "iot"
                      ? "bg-sky-500/10 border border-sky-500/40 text-sky-600 dark:text-sky-400"
                      : "bg-slate-100/60 dark:bg-slate-800/40 border border-transparent text-slate-600 dark:text-slate-400"
                  }`}
                >
                  <Cpu className="w-4 h-4 mb-1 text-sky-500" />
                  <div className="text-xs font-semibold">1. Hardware</div>
                  <div className="text-[10px] text-slate-500">IoT &amp; Sensors</div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("backend")}
                  className={`p-2.5 rounded-lg text-left transition-all ${
                    activeTab === "backend"
                      ? "bg-sky-500/10 border border-sky-500/40 text-sky-600 dark:text-sky-400"
                      : "bg-slate-100/60 dark:bg-slate-800/40 border border-transparent text-slate-600 dark:text-slate-400"
                  }`}
                >
                  <Globe className="w-4 h-4 mb-1 text-blue-500" />
                  <div className="text-xs font-semibold">2. Server</div>
                  <div className="text-[10px] text-slate-500">Node / MySQL</div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("client")}
                  className={`p-2.5 rounded-lg text-left transition-all ${
                    activeTab === "client"
                      ? "bg-sky-500/10 border border-sky-500/40 text-sky-600 dark:text-sky-400"
                      : "bg-slate-100/60 dark:bg-slate-800/40 border border-transparent text-slate-600 dark:text-slate-400"
                  }`}
                >
                  <Smartphone className="w-4 h-4 mb-1 text-indigo-500" />
                  <div className="text-xs font-semibold">3. Apps</div>
                  <div className="text-[10px] text-slate-500">Android &amp; Web</div>
                </button>
              </div>

              {/* Interactive explanation box */}
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 mb-4 text-xs space-y-2">
                {activeTab === "iot" && (
                  <div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                      <span>Physical Gate Sensor Interfacing</span>
                      <span className="font-mono text-sky-500">ESP32 / RC522</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      Direct microcontroller firmware written to buffer RFID scans and stream encrypted payloads over Wi-Fi directly to university server endpoints.
                    </p>
                  </div>
                )}
                {activeTab === "backend" && (
                  <div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                      <span>Backend Logic &amp; Relational Schemas</span>
                      <span className="font-mono text-blue-500">Node / Express</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      Handles validation, state transitions for student petitions, transactional MySQL writes, and pushes socket events to administrative consoles.
                    </p>
                  </div>
                )}
                {activeTab === "client" && (
                  <div>
                    <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                      <span>Native Android &amp; React Frontends</span>
                      <span className="font-mono text-indigo-500">Kotlin / React</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      Responsive multi-platform interfaces for students, instructors, and campus administrators with real-time UI updates and offline caching.
                    </p>
                  </div>
                )}
              </div>

              {/* Console log preview with active trigger */}
              <div className="rounded-lg bg-slate-900 p-3 font-mono text-[11px] text-slate-300 space-y-1.5 mb-3 border border-slate-800">
                <div className="text-slate-500 flex items-center justify-between text-[10px] border-b border-slate-800 pb-1">
                  <span>LIVE TRANSACTION LOG</span>
                  <span className="text-emerald-400 tabular-nums">Scans: {scanCount}</span>
                </div>
                {logs.map((log) => (
                  <div key={log.id} className="flex items-start gap-1.5 leading-snug">
                    <span className="text-slate-500 shrink-0 tabular-nums">{log.time}</span>
                    <span className="text-sky-400 shrink-0">[{log.tag}]</span>
                    <span className="text-slate-200 truncate">{log.msg}</span>
                  </div>
                ))}
              </div>

              {/* Interactive trigger button */}
              <button
                type="button"
                onClick={simulateScan}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 rounded-lg transition-colors border border-slate-300 dark:border-slate-700"
              >
                <RefreshCw className="w-3.5 h-3.5 text-sky-500" />
                <span>Simulate IoT RFID Scan Event</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
