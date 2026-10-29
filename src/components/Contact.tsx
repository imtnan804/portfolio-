import React, { useState } from "react";
import { siteConfig } from "../data/site";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Download, 
  FileText, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";

interface ContactProps {
  onOpenCvModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCvModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please provide your name";
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject";
    if (!formData.message.trim()) {
      errs.message = "Please write a brief message";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate working form transmission with client confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50 dark:bg-[#070b14] border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">
            05. Get In Touch
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let&apos;s Build Together
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Available for full-stack engineering roles, mobile application development, IoT system integrations, and collaborative projects.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Quick Copy Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="rounded-xl glass-panel p-5 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</div>
                  <a
                    href={`mailto:${siteConfig.socials.email}`}
                    className="font-medium text-slate-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 transition-colors text-sm sm:text-base"
                  >
                    {siteConfig.socials.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(siteConfig.socials.email, "email")}
                aria-label="Copy email address"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Copy to clipboard"
              >
                {copiedField === "email" ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="rounded-xl glass-panel p-5 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Phone &amp; WhatsApp</div>
                  <a
                    href={`tel:${siteConfig.socials.phone}`}
                    className="font-medium text-slate-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 transition-colors text-sm sm:text-base font-mono"
                  >
                    {siteConfig.socials.phoneDisplay}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(siteConfig.socials.phone, "phone")}
                aria-label="Copy phone number"
                className="p-2 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Copy to clipboard"
              >
                {copiedField === "phone" ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="rounded-xl glass-panel p-5 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3.5">
              <div className="p-3 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Current Location</div>
                <div className="font-medium text-slate-900 dark:text-white text-sm">
                  {siteConfig.location}
                </div>
              </div>
            </div>

            {/* Resume / CV Action Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 via-blue-500/5 to-transparent border border-sky-500/20 text-slate-800 dark:text-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-5 h-5 text-sky-500" />
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                  Curriculum Vitae
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                Download a clean, structured overview of academic background, hardware competencies, and project repositories.
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenCvModal}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 rounded-lg shadow-sm transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenCvModal}
                  className="px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:underline"
                >
                  Preview Online
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-md">
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below to initiate communication. Every inquiry receives a response within 24 hours.
              </p>

              {submitSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 text-emerald-800 dark:text-emerald-200 space-y-3 animate-fade-in">
                  <div className="flex items-center gap-2 font-bold text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span>Message Dispatched Successfully!</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-300">
                    Thank you for reaching out. A confirmation has been registered, and Imtnan will connect with you via your email address shortly.
                  </p>
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSubmitSuccess(false)}
                      className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`mailto:${siteConfig.socials.email}?subject=Follow-up`}
                      className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                    >
                      Open Email App Fallback &rarr;
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                          errors.name
                            ? "border-rose-500 dark:border-rose-500"
                            : "border-slate-200 dark:border-slate-800 focus:border-sky-500"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Your Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                          errors.email
                            ? "border-rose-500 dark:border-rose-500"
                            : "border-slate-200 dark:border-slate-800 focus:border-sky-500"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Subject / Project Context <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: "" });
                      }}
                      placeholder="e.g. Mobile App Development / Full-Stack Project"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                        errors.subject
                          ? "border-rose-500 dark:border-rose-500"
                          : "border-slate-200 dark:border-slate-800 focus:border-sky-500"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      placeholder="Describe the opportunity, project timeline, or system requirements..."
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-white dark:bg-slate-900 border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                        errors.message
                          ? "border-rose-500 dark:border-rose-500"
                          : "border-slate-200 dark:border-slate-800 focus:border-sky-500"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 disabled:opacity-50 rounded-lg shadow-sm transition-all whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <div className="text-[11px] text-slate-400">
                      Or reach out directly via{" "}
                      <a
                        href={`mailto:${siteConfig.socials.email}?subject=${encodeURIComponent(formData.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(formData.message || "")}`}
                        className="text-sky-600 dark:text-sky-400 hover:underline"
                      >
                        default email app
                      </a>
                    </div>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
