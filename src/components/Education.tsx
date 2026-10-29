import React from "react";
import { siteConfig } from "../data/site";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from "lucide-react";

export const Education: React.FC = () => {
  const { education } = siteConfig;

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">
            04. Education &amp; Academics
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Academic Foundation
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Formal computer science training emphasizing data structures, distributed systems, and real-world software architecture.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-sky-500/30 dark:border-sky-500/20 space-y-8">
            
            {/* Timeline Marker */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-white dark:border-[#070b14]" />

            {/* University Card */}
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-md">
              
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-200/80 dark:border-slate-800">
                <div>
                  <span className="text-xs font-mono font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                    Undergraduate Degree
                  </span>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mt-1">
                    {education.degree} in {education.field}
                  </h3>
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                    {education.institution}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5 font-mono tabular-nums">
                    <Calendar className="w-3.5 h-3.5 text-sky-500" />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{education.location}</span>
                  </div>
                  <div className="mt-1 px-2.5 py-1 rounded bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 font-mono font-bold">
                    CGPA: {education.cgpa}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {education.summary}
              </p>

              {/* Academic Highlights */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Key Focus Areas &amp; Accomplishments
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {education.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Relevant Courses */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-slate-800">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  Core Subjects Completed
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                  {[
                    "Data Structures & Algorithms",
                    "Database Management Systems (MySQL)",
                    "Object-Oriented Programming (Java/Kotlin)",
                    "Web Engineering & RESTful APIs",
                    "Mobile Application Architecture",
                    "Computer Networks & Telemetry",
                    "Software Project Management",
                  ].map((course, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
