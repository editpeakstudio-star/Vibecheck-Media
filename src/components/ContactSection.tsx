import React, { useState } from 'react';
import { Mail, Phone, Instagram, MessageCircle, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { BRAND, SERVICES } from '../data/agencyData';
import { ContactFormData } from '../types';
import { soundManager } from '../utils/audio';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: 'Video Editing',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone or WhatsApp number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please provide a valid contact number (at least 8 digits).';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please briefly describe your project or goals.';
    } else if (formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = 'Please provide a bit more detail (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playClickSound();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Format WhatsApp message cleanly
    const formattedMessage =
      `*NEW INQUIRY // VIBECHECK MEDIA*\n\n` +
      `• *Name:* ${formData.fullName.trim()}\n` +
      `• *Email:* ${formData.email.trim()}\n` +
      `• *Phone:* ${formData.phone.trim()}\n` +
      `• *Service Requested:* ${formData.service}\n\n` +
      `• *Project Overview:*\n${formData.projectDetails.trim()}\n\n` +
      `Sent via VibeCheck Media Website`;

    const targetUrl = `https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent(formattedMessage)}`;
    setSubmittedUrl(targetUrl);

    // Prompt specifies: On submission, open WhatsApp with a properly formatted inquiry message
    window.open(targetUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#050407] border-t border-purple-500/10">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#8500FF]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#BD00FF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BD00FF]" />
            <span>START A PROJECT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BD00FF] via-purple-300 to-white">
              Amazing Together.
            </span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-300 leading-relaxed">
            Have an idea, a project, or a brand that needs a creative upgrade? Let's discuss how VibeCheck Media can help.
          </p>
        </div>

        {/* Contact Grid: Details + Working Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Agency Channels & Verification */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="rounded-2xl p-5 sm:p-7 bg-[#0c0618] border border-purple-500/20 shadow-xl shadow-black/40 space-y-5 sm:space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Channels
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Connect directly with founder Ravi Chauhan and the VibeCheck team for rapid responses, custom quotes, or instant consultations.
              </p>

              {/* Direct WhatsApp Contact Item */}
              <a
                href={`https://wa.me/${BRAND.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClickSound()}
                className="group flex items-center gap-4 p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-900/30 transition-all cursor-pointer"
              >
                <div className="w-11 h-11 rounded-lg bg-green-950/40 border border-green-500/40 flex items-center justify-center text-green-400 shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    WhatsApp & Calls
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-green-300 transition-colors">
                    {BRAND.whatsappNumber}
                  </span>
                </div>
              </a>

              {/* Direct Email Contact Item */}
              <a
                href={`mailto:${BRAND.email}`}
                onClick={() => soundManager.playClickSound()}
                className="group flex items-center gap-4 p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-900/30 transition-all cursor-pointer"
              >
                <div className="w-11 h-11 rounded-lg bg-purple-950/50 border border-purple-500/40 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Official Email
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {BRAND.email}
                  </span>
                </div>
              </a>

              {/* Direct Instagram Contact Item */}
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClickSound()}
                className="group flex items-center gap-4 p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-900/30 transition-all cursor-pointer"
              >
                <div className="w-11 h-11 rounded-lg bg-pink-950/40 border border-pink-500/40 flex items-center justify-center text-pink-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    Instagram Official
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-pink-300 transition-colors">
                    {BRAND.instagramHandle}
                  </span>
                </div>
              </a>

              {/* Response Time Guarantee */}
              <div className="pt-4 border-t border-purple-500/15 flex items-center gap-2 text-xs text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-[#BD00FF]" />
                <span>Average Response Time: <strong className="text-white">Under 2 Hours</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Validated Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-4 sm:p-7 md:p-9 bg-[#0b0517] border border-purple-500/30 shadow-[0_0_35px_rgba(133,0,255,0.15)] relative text-left">
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Project Inquiry Form
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Fill in your details to launch a pre-formatted conversation on WhatsApp.
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-purple-950/50 border border-purple-500/30 flex items-center justify-center text-[#BD00FF]">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-mono text-purple-200 mb-1.5 uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. John Doe or Brand Name"
                    className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-white text-sm placeholder-zinc-500 focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-purple-500/30 focus:border-[#BD00FF] focus:shadow-[0_0_15px_rgba(189,0,255,0.3)]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-purple-200 mb-1.5 uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-white text-sm placeholder-zinc-500 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-purple-500/30 focus:border-[#BD00FF] focus:shadow-[0_0_15px_rgba(189,0,255,0.3)]'
                      }`}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono text-purple-200 mb-1.5 uppercase">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-white text-sm placeholder-zinc-500 focus:outline-none transition-colors ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-purple-500/30 focus:border-[#BD00FF] focus:shadow-[0_0_15px_rgba(189,0,255,0.3)]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-xs font-mono text-purple-200 mb-1.5 uppercase">
                    Select a Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-black/80 border border-purple-500/30 text-white text-sm focus:outline-none focus:border-[#BD00FF] focus:shadow-[0_0_15px_rgba(189,0,255,0.3)] transition-colors cursor-pointer"
                  >
                    {SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.title} className="bg-[#0c0618] text-white">
                        {srv.title} ({srv.capabilities[0]})
                      </option>
                    ))}
                    <option value="Complete Agency Growth Retainer" className="bg-[#0c0618] text-white">
                      Complete Multi-Service Growth Retainer
                    </option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="block text-xs font-mono text-purple-200 mb-1.5 uppercase">
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Tell us about your brand, current challenges, timelines, or specific goals..."
                    className={`w-full px-4 py-3 rounded-xl bg-black/60 border text-white text-sm placeholder-zinc-500 focus:outline-none transition-colors resize-y ${
                      errors.projectDetails
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-purple-500/30 focus:border-[#BD00FF] focus:shadow-[0_0_15px_rgba(189,0,255,0.3)]'
                    }`}
                  />
                  {errors.projectDetails && (
                    <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.projectDetails}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#8500FF] to-[#BD00FF] hover:from-[#9510FF] hover:to-[#CD10FF] shadow-[0_0_20px_rgba(133,0,255,0.4)] hover:shadow-[0_0_30px_rgba(189,0,255,0.6)] transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Opening WhatsApp...' : 'Submit Inquiry via WhatsApp'}</span>
                </button>

                {/* Notification after submission */}
                {submittedUrl && (
                  <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between text-xs text-purple-200">
                    <span>Inquiry formatted! If WhatsApp did not open automatically:</span>
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 font-bold underline hover:text-white"
                    >
                      Click here to open
                    </a>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
