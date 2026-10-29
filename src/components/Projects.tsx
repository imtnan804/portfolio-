import React, { useState } from "react";
import { projectsData, Project } from "../data/projects";
import { ProjectModal } from "./ProjectModal";
import { 
  ExternalLink, 
  Github, 
  Layers, 
  ArrowRight, 
  Cpu, 
  Smartphone, 
  Globe, 
  CheckCircle2,
  Maximize2
} from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "IoT / Hardware", "Mobile", "Web"];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const regularProjects = filteredProjects.filter((p) => !p.featured || selectedCategory !== "All");

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-[#080d19]/60 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">
              03. Selected Works
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Systems &amp; Applications
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              End-to-end applications demonstrating sensor integration, real-time message brokering, and responsive user experiences.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                type="button"
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? "bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 1. LARGE FEATURED CARD (Shown prominently when "All" is active) */}
        {selectedCategory === "All" && featuredProject && (
          <div className="mb-12">
            <div className="rounded-3xl glass-panel p-6 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-slate-800 hover:border-sky-500/40 transition-all shadow-lg overflow-hidden relative">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Left side: Editorial Information */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-sky-600 dark:text-sky-400">
                    <span className="font-semibold uppercase tracking-wider">FEATURED CAPSTONE</span>
                    <span aria-hidden="true">·</span>
                    <span>IoT + Web + Mobile</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {featuredProject.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {featuredProject.shortDescription}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                      <span>Hardware RFID sensor gates transmitting scan records in real-time</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                      <span>Dynamic multi-stage student petition &amp; approval workflow engine</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                      <span>Embedded AI assistant answering campus policies and inquiries 24/7</span>
                    </li>
                  </ul>

                  {/* Tech stack unboxed text tags */}
                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                    {featuredProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveProject(featuredProject)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 rounded-lg shadow-sm transition-all whitespace-nowrap"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Explore Case Study</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveProject(featuredProject)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors whitespace-nowrap"
                    >
                      <span>Interactive Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={featuredProject.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Right side: High-Fidelity Mockup Frame */}
                <div className="lg:col-span-6">
                  <div
                    onClick={() => setActiveProject(featuredProject)}
                    className="group cursor-pointer relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 aspect-[16/10] shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                  >
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-xs font-mono text-white flex items-center gap-1.5 opacity-90 group-hover:opacity-100">
                      <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
                      <span>Click to view details</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* 2. REGULAR PROJECTS GRID (2 or 3-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(selectedCategory === "All"
            ? regularProjects.filter((p) => !p.featured)
            : filteredProjects
          ).map((project) => (
            <div
              key={project.id}
              className="rounded-2xl glass-panel glass-panel-hover border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Visual Preview Header */}
                <div
                  onClick={() => setActiveProject(project)}
                  className="cursor-pointer relative aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-200/80 dark:border-slate-800"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950/60 p-6 flex flex-col items-center justify-center text-center">
                      <div className="p-3 rounded-full bg-sky-500/10 text-sky-400 mb-2">
                        {project.category === "Mobile" ? (
                          <Smartphone className="w-7 h-7" />
                        ) : project.category === "IoT / Hardware" ? (
                          <Cpu className="w-7 h-7" />
                        ) : (
                          <Globe className="w-7 h-7" />
                        )}
                      </div>
                      <span className="text-xs font-mono text-slate-300 font-semibold">{project.badgeCategory}</span>
                      <span className="text-[11px] text-slate-500 mt-1">Interactive Mobile Build</span>
                    </div>
                  )}

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-[10px] font-mono text-white border border-white/10">
                    {project.badgeCategory}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-sky-600 dark:text-sky-400">
                      {project.subtitle}
                    </span>
                  </div>

                  <h3
                    onClick={() => setActiveProject(project)}
                    className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack unboxed tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 text-slate-400">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 sm:px-6 py-4 border-t border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-500 flex items-center gap-1 group-hover:underline"
                >
                  <span>Details &amp; Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="p-1.5 rounded text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800"
                    title="Source Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
