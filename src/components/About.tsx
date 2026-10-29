import React from "react";
import { siteConfig } from "../data/site";
import { GraduationCap, Award, Compass, Layers, CheckCircle2 } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-[#090e1a]/60 border-y border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">
            01. Background &amp; Profile
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white text-balance">
            Building end-to-end applications from circuit board to cloud.
          </h2>
        </div>

        {/* 2-Column Story & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              {siteConfig.summary}
            </p>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
              Unlike developers restricted solely to frontend or backend stacks, my work connects the complete chain: writing C/C++ firmware on ESP32 microcontrollers to capture physical sensor signals, building robust Node.js/PHP backend services with normalized MySQL databases, and shipping smooth client interfaces in React and native Android (Kotlin/Java).
            </p>

            {/* Core Competency Highlights */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Full-Stack Web &amp; REST APIs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Native Android &amp; Mobile UI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                <span>IoT Sensors &amp; Microcontrollers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Real-Time Sockets &amp; Firebase</span>
              </div>
            </div>
          </div>

          {/* Education Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl glass-panel p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                    Academic Background
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {siteConfig.education.degree} in {siteConfig.education.field}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 text-sm border-t border-slate-200/80 dark:border-slate-800 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Institution:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200 text-right">
                    {siteConfig.education.institution}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Location:</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {siteConfig.education.location}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Timeline:</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 tabular-nums">
                    {siteConfig.education.period}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Cumulative GPA:</span>
                  <span className="font-mono font-semibold text-sky-600 dark:text-sky-400 tabular-nums">
                    {siteConfig.education.cgpa}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Active undergraduate scholar</span>
                <a
                  href="#education"
                  className="text-sky-600 dark:text-sky-400 hover:underline font-medium"
                >
                  View full syllabus &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Small Stat Cards Strip (Tabular numerals, full-width row) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {siteConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-xl glass-panel p-5 border border-slate-200/80 dark:border-slate-800/80 transition-all hover:border-sky-500/40"
            >
              <div className="font-mono font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tabular-nums mb-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-400">
                  {stat.value}
                </span>
              </div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
