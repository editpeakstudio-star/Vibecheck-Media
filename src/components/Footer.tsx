import React from 'react';
import { Mail, Instagram, MessageCircle, ArrowUp, Sparkles } from 'lucide-react';
import { BRAND, SERVICES, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';

interface FooterProps {
  onReplayIntro: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundManager.playClickSound();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    soundManager.playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040306] border-t border-purple-500/20 pt-16 pb-12 overflow-hidden text-left">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-[#8500FF]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-purple-500/15">
          
          {/* Col 1: Brand Info & Official Logo (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-purple-500/40 bg-black p-0.5 shadow-[0_0_15px_rgba(133,0,255,0.3)]">
                <img
                  src={BRAND.logoImage}
                  alt="VibeCheck Media"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  VIBECHECK <span className="text-purple-400">MEDIA</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                  {BRAND.subtitle}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              {BRAND.description}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                onClick={() => soundManager.playClickSound()}
                className="w-9 h-9 rounded-lg bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-zinc-300 hover:text-white hover:border-purple-400 hover:bg-purple-900/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BRAND.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                onClick={() => soundManager.playClickSound()}
                className="w-9 h-9 rounded-lg bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-zinc-300 hover:text-white hover:border-purple-400 hover:bg-purple-900/40 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                aria-label="Email"
                onClick={() => soundManager.playClickSound()}
                className="w-9 h-9 rounded-lg bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-zinc-300 hover:text-white hover:border-purple-400 hover:bg-purple-900/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClickSound();
                  onReplayIntro();
                }}
                className="px-3 py-1.5 rounded-lg bg-purple-950/40 border border-purple-500/30 text-[11px] font-mono text-purple-300 hover:bg-purple-900/50 hover:border-purple-400 transition-colors cursor-pointer"
              >
                Replay 3D Armor
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              <li>
                <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, '#services')} className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleScrollTo(e, '#portfolio')} className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleScrollTo(e, '#process')} className="hover:text-white transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#founder" onClick={(e) => handleScrollTo(e, '#founder')} className="hover:text-white transition-colors">
                  Founder
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: All Six Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 mb-4">
              All Six Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-400">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a
                    href={getWhatsAppUrl(srv.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClickSound()}
                    className="hover:text-purple-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-purple-500 text-[10px]">›</span>
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <div>
                <span className="block text-[11px] font-mono text-zinc-500 uppercase">Direct Email</span>
                <a href={`mailto:${BRAND.email}`} className="text-white hover:text-purple-300 transition-colors">
                  {BRAND.email}
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-mono text-zinc-500 uppercase">WhatsApp & Phone</span>
                <a href={`https://wa.me/${BRAND.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition-colors">
                  {BRAND.phone}
                </a>
              </div>

              <div>
                <span className="block text-[11px] font-mono text-zinc-500 uppercase">Instagram</span>
                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300 transition-colors">
                  {BRAND.instagramHandle}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © 2026 VibeCheck Media. All Rights Reserved. Founder: {BRAND.founder}.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
