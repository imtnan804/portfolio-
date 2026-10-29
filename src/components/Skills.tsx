import React, { useState } from "react";
import { skillCategories, SkillCategory } from "../data/skills";
import { 
  Code2, 
  Smartphone, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Zap, 
  CheckCircle2,
  Filter
} from "lucide-react";

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 h-5" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5" />;
      case "Layout":
        return <Layout className="w-5 h-5" />;
      case "Server":
        return <Server className="w-5 h-5" />;
      case "Database":
        return <Database className="w-5 h-5" />;
      case "Cpu":
        return <Cpu className="w-5 h-5" />;
      case "Zap":
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  const filterTabs = [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages" },
    { id: "mobile", label: "Mobile" },
    { id: "web", label: "Web & Backend" },
    { id: "hardware", label: "IoT & Data" },
  ];

  const filteredCategories = skillCategories.filter((cat) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "languages") return cat.id === "languages";
    if (selectedFilter === "mobile") return cat.id === "mobile";
    if (selectedFilter === "web") return cat.id === "frontend" || cat.id === "backend";
    if (selectedFilter === "hardware") return cat.id === "iot" || cat.id === "databases";
    return true;
  });

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">
              02. Technical Toolkit
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              End-to-End Stack &amp; Specializations
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              From embedded C-level sensor communication to reactive web frontends and high-performance mobile clients.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented control) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                type="button"
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedFilter === tab.id
                    ? "bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl glass-panel glass-panel-hover p-6 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 shrink-0">
                    {getIcon(category.iconName)}
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Items List (Clean unboxed tags with subtle accent markers) */}
                <div className="space-y-2 border-t border-slate-200/70 dark:border-slate-800/80 pt-4">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs py-1 px-2 rounded-md hover:bg-slate-100/70 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <span className={`font-medium ${
                        item.highlight 
                          ? "text-slate-900 dark:text-slate-100 font-semibold" 
                          : "text-slate-700 dark:text-slate-300"
                      }`}>
                        {item.name}
                      </span>
                      {item.highlight && (
                        <span className="text-[10px] uppercase font-mono tracking-wider text-sky-600 dark:text-sky-400">
                          Core
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quiet bottom metadata */}
              <div className="mt-6 pt-3 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                <span>{category.items.length} competencies</span>
                <span className="font-mono">Production tested</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
