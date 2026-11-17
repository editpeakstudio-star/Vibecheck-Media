import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Volume2, VolumeX, ArrowRight } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  onReplayIntro: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMuted, setIsMuted] = useState(soundManager.isMuted());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section scroll spy
      const sections = ['home', 'about', 'services', 'portfolio', 'process', 'founder', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const toggleSound = () => {
    const next = soundManager.toggleMute();
    setIsMuted(next);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundManager.playClickSound();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050407]/85 backdrop-blur-md border-b border-purple-500/20 py-3 shadow-xl shadow-black/50'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
          {/* Zone 1: Brand Wordmark & Official Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 sm:gap-3 shrink min-w-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden border border-purple-500/40 bg-black/60 p-0.5 group-hover:border-purple-400 transition-colors shadow-[0_0_15px_rgba(133,0,255,0.3)] shrink-0">
              <img
                src={BRAND.logoImage}
                alt="VibeCheck Media"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors truncate">
                VIBECHECK <span className="text-purple-400">MEDIA</span>
              </span>
              <span className="hidden sm:block text-[9px] sm:text-[10px] font-mono tracking-widest text-zinc-400 uppercase -mt-0.5 truncate">
                GROWTH AGENCY
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean Single-Line Typography) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 whitespace-nowrap transition-colors duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8500FF] to-[#BD00FF] rounded-full shadow-[0_0_8px_#BD00FF]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Controls */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              type="button"
              title={isMuted ? 'Turn Sound On' : 'Mute Sound'}
              aria-label={isMuted ? 'Turn Sound On' : 'Mute Sound'}
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg border border-purple-500/20 bg-purple-950/20 text-zinc-400 hover:text-purple-300 hover:border-purple-500/50 transition-all cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-purple-400" />}
            </button>

            {/* Replay 3D Armor Intro Button */}
            <button
              onClick={() => {
                soundManager.playClickSound();
                onReplayIntro();
              }}
              type="button"
              title="Replay 3D Armor Opening"
              aria-label="Replay 3D Armor Opening"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-purple-500/30 bg-purple-950/30 text-xs font-mono text-purple-300 hover:bg-purple-900/40 hover:border-purple-400 transition-all cursor-pointer"
            >
              <Play className="w-3 h-3 text-purple-400 fill-purple-400/50" />
              <span>REPLAY INTRO</span>
            </button>

            {/* Glowing Purple "Let's Talk" Primary Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold tracking-wide text-white rounded-lg bg-gradient-to-r from-[#8500FF] to-[#BD00FF] hover:from-[#9510FF] hover:to-[#CD10FF] shadow-[0_0_15px_rgba(133,0,255,0.4)] whitespace-nowrap cursor-pointer shrink-0"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5 hidden xs:inline" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="md:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-purple-500/30 bg-purple-950/40 text-white hover:text-purple-300 focus:outline-none cursor-pointer shrink-0"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-purple-500/20 bg-[#050407]/95 backdrop-blur-xl px-4 py-5 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-purple-900/30 text-purple-300 border border-purple-500/40'
                    : 'text-zinc-300 hover:text-white hover:bg-purple-950/20'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReplayIntro();
                }}
                type="button"
                className="flex items-center gap-2 px-3 py-2 text-xs font-mono text-purple-300 border border-purple-500/30 rounded-lg bg-purple-950/30"
              >
                <Play className="w-3 h-3 text-purple-400 fill-purple-400" />
                <span>Replay Armor Intro</span>
              </button>

              <button
                onClick={toggleSound}
                type="button"
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-zinc-300 border border-purple-500/30 rounded-lg bg-black/40"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-purple-400" />}
                <span>{isMuted ? 'Muted' : 'Sound'}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
