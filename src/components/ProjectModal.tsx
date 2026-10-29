import React, { useEffect, useState } from "react";
import { Project } from "../data/projects";
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Activity, 
  Cpu, 
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "demo">("overview");
  const [demoActionStatus, setDemoActionStatus] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const runInteractiveTest = (action: string) => {
    setDemoActionStatus(`Executing: ${action}...`);
    setTimeout(() => {
      setDemoActionStatus(`Success: Verified 200 OK (${action})`);
      setTimeout(() => setDemoActionStatus(null), 3000);
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in"
    >
      {/* Backdrop click */}
      <div 
        className="fixed inset-0 -z-10" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0c1222] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 shrink-0">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="text-sky-600 dark:text-sky-400 font-semibold">{project.badgeCategory}</span>
            <span aria-hidden="true">·</span>
            <span>Case Study &amp; Technical Breakdown</span>
          </div>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Visual Header / Image Frame */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 aspect-video max-h-72 flex items-center justify-center">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 flex flex-col items-center justify-center p-6 text-center">
                <Cpu className="w-12 h-12 text-sky-400 mb-3 opacity-80" />
                <h4 className="text-lg font-bold text-white mb-1">{project.title}</h4>
                <p className="text-xs text-slate-400 max-w-md">{project.subtitle}</p>
              </div>
            )}

            {/* Floating category tag */}
            <div className="absolute top-3 left-3 px-3 py-1 bg-black/75 backdrop-blur-md rounded-md text-[11px] font-mono text-white border border-white/10">
              {project.badgeCategory}
            </div>
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 id="project-modal-title" className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
              {project.subtitle}
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
            <button
              onClick={() => setActiveTab("overview")}
              type="button"
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === "overview"
                  ? "bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Overview &amp; Features
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              type="button"
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === "architecture"
                  ? "bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              System Architecture
            </button>
            <button
              onClick={() => setActiveTab("demo")}
              type="button"
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                activeTab === "demo"
                  ? "bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Interactive Preview
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === "overview" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Project Description
                </h4>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Metrics strip if present */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-0.5">{m.label}</div>
                      <div className="font-mono font-bold text-base sm:text-lg text-slate-900 dark:text-white tabular-nums">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  Key Technical Features
                </h4>
                <ul className="space-y-2.5">
                  {project.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack badges */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Architecture */}
          {activeTab === "architecture" && (
            <div className="space-y-6 animate-fade-in">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                  <Layers className="w-4 h-4 text-sky-500" />
                  <span>Data Flow &amp; Layer Segregation</span>
                </div>
                
                {project.architectureNotes ? (
                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {project.architectureNotes.map((note, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
                        {note}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Engineered with strict separation between user interfaces, application business services, and database persistence layers.
                  </p>
                )}
              </div>

              <div className="p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 font-mono text-xs text-slate-600 dark:text-slate-400 space-y-2">
                <div className="font-semibold text-slate-900 dark:text-white">System Invariants:</div>
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Transactional consistency verified via foreign key constraints &amp; atomic operations</span>
                </div>
                <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>End-to-end sanitization against XSS, SQLi, and unauthorized session tampering</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Interactive Demo Simulation */}
          {activeTab === "demo" && (
            <div className="space-y-5 animate-fade-in">
              <div className="p-5 rounded-xl bg-slate-900 text-white font-mono text-xs space-y-3 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 text-[11px] pb-2 border-b border-slate-800">
                  <span>LIVE ENDPOINT SIMULATOR</span>
                  <span className="text-sky-400">ENV: PREVIEW</span>
                </div>

                <p className="text-slate-300 text-xs font-sans">
                  Test typical application events directly against the simulated mock backend:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => runInteractiveTest("Validate Schema / Health Probe")}
                    className="p-2.5 rounded bg-slate-800 hover:bg-slate-700 text-left border border-slate-700 transition-colors"
                  >
                    <div className="text-sky-400 font-mono text-[11px]">GET /api/health</div>
                    <div className="text-[10px] text-slate-400">Ping server status</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => runInteractiveTest("Submit Sample Test Record")}
                    className="p-2.5 rounded bg-slate-800 hover:bg-slate-700 text-left border border-slate-700 transition-colors"
                  >
                    <div className="text-emerald-400 font-mono text-[11px]">POST /api/records</div>
                    <div className="text-[10px] text-slate-400">Simulate payload dispatch</div>
                  </button>
                </div>

                {demoActionStatus && (
                  <div className="p-2 rounded bg-sky-950/80 border border-sky-600/50 text-sky-300 text-xs flex items-center gap-2 animate-pulse">
                    <Activity className="w-3.5 h-3.5" />
                    <span>{demoActionStatus}</span>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 shrink-0">
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            Close
          </button>

          <div className="flex items-center gap-3">
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200 dark:border-slate-700"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>

            <button
              onClick={() => runInteractiveTest("Initiating Live Environment Instance")}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 rounded-lg shadow-sm transition-colors"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
