import React from "react";
import { siteConfig } from "../data/site";
import { ArrowUp, Github, Linkedin, Mail, Phone } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#060a12] py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/70 dark:border-slate-800/80">
          
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#hero"
              className="font-display font-bold text-lg text-slate-900 dark:text-white hover:text-sky-500 transition-colors"
            >
              {siteConfig.name}
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm">
              Full-Stack &amp; Mobile Application Developer · Nankana Sahib, Pakistan
            </p>
          </div>

          {/* Clean text nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600 dark:text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-sky-600 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500">
            <a
              href={`mailto:${siteConfig.socials.email}`}
              aria-label="Email"
              className="hover:text-slate-900 dark:hover:text-white transition-colors p-1"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${siteConfig.socials.phone}`}
              aria-label="Phone"
              className="hover:text-slate-900 dark:hover:text-white transition-colors p-1"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-slate-900 dark:hover:text-white transition-colors p-1"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-slate-900 dark:hover:text-white transition-colors p-1"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom row: Copyright & Back-to-Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-mono text-slate-400">
              Designed for high performance &amp; accessibility
            </span>

            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
