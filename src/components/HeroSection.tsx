import React, { useState } from 'react';
import { Sparkles, ArrowRight, Rocket, Video, TrendingUp, CheckCircle2, ShieldCheck, Flame, Maximize2 } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';

export const HeroSection: React.FC = () => {
  const [viewBannerMode, setViewBannerMode] = useState<boolean>(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    soundManager.playClickSound();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 lg:py-28 overflow-hidden"
    >
      {/* Background Neon Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-[#8500FF]/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/4 w-72 sm:w-[28rem] h-72 sm:h-[28rem] bg-[#BD00FF]/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Cyber Grid Subtle Horizon */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(133,0,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(133,0,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Small Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-widest uppercase mb-4 sm:mb-6 shadow-[0_0_15px_rgba(133,0,255,0.2)] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BD00FF] shadow-[0_0_8px_#BD00FF]" />
              <span>CREATIVE DIGITAL AGENCY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-4 sm:mb-6 break-words">
              We Build Brands.{' '}
              <br />
              We Create{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BD00FF] via-[#8500FF] to-[#D946EF] animate-gradient-text drop-shadow-[0_0_30px_rgba(189,0,255,0.4)]">
                Growth.
              </span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-xl font-normal leading-relaxed mb-6 sm:mb-8">
              From powerful content to strategic digital experiences, we help businesses build their identity, connect with their audience, and grow online.
            </p>

            {/* CTAs */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full xs:w-auto">
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, 'services')}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#8500FF] to-[#BD00FF] hover:from-[#9510FF] hover:to-[#CD10FF] shadow-[0_0_20px_rgba(133,0,255,0.4)] hover:shadow-[0_0_30px_rgba(189,0,255,0.6)] transition-all cursor-pointer whitespace-nowrap text-center"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl(`Hi Ravi & VibeCheck Media! I'm ready to scale my brand. Let's work together!`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClickSound()}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-purple-200 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/40 hover:border-purple-400 transition-all shadow-lg shadow-black/40 cursor-pointer whitespace-nowrap text-center"
              >
                <span>Let's Work Together</span>
                <Sparkles className="w-4 h-4 text-purple-400" />
              </a>
            </div>

            {/* Three Highlights with Glowing Icons */}
            <div className="pt-5 border-t border-purple-500/20 grid grid-cols-3 gap-2 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 shadow-[0_0_10px_rgba(133,0,255,0.2)]">
                  <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white tracking-tight truncate">Strategic</h4>
                  <p className="text-[10px] sm:text-[11px] text-zinc-400 leading-none mt-0.5">Marketing</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 shadow-[0_0_10px_rgba(133,0,255,0.2)]">
                  <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white tracking-tight truncate">Creative</h4>
                  <p className="text-[10px] sm:text-[11px] text-zinc-400 leading-none mt-0.5">Content</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 shadow-[0_0_10px_rgba(133,0,255,0.2)]">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-sm font-bold text-white tracking-tight truncate">Real</h4>
                  <p className="text-[10px] sm:text-[11px] text-zinc-400 leading-none mt-0.5">Growth</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Founder Portrait & Brand Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center w-full max-w-lg mx-auto">
            {/* Background Halo Ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#8500FF]/30 via-transparent to-[#BD00FF]/20 blur-xl pointer-events-none" />

            {/* Main Founder Card Container */}
            <div className="relative w-full rounded-2xl p-0.5 sm:p-1 bg-gradient-to-b from-purple-500/40 via-purple-900/20 to-black/60 shadow-[0_0_40px_rgba(133,0,255,0.25)]">
              <div className="relative rounded-2xl overflow-hidden bg-[#0c0618] border border-purple-500/30 flex flex-col">
                
                {/* Switch between portrait view and full 16:9 banner view */}
                <div className="relative w-full bg-[#080312] overflow-hidden flex items-center justify-center">
                  {viewBannerMode ? (
                    /* Complete 16:9 Landscape Banner with NO cropping (1600x900) */
                    <div className="relative w-full aspect-[16/9] flex items-center justify-center bg-black/60">
                      <img
                        src={BRAND.founderBannerImage}
                        alt="VibeCheck Media Official Brand Banner"
                        className="w-full h-full object-contain object-center"
                      />
                    </div>
                  ) : (
                    /* Perfectly Centered Founder Portrait Asset (Ravi Chauhan) */
                    <div className="relative w-full aspect-[4/5] sm:aspect-square flex items-center justify-center bg-gradient-to-b from-[#140628] to-[#0c0618] overflow-hidden">
                      <img
                        src={BRAND.founderPortraitImage}
                        alt="Ravi Chauhan - Founder of VibeCheck Media"
                        className="w-full h-full object-contain object-center transition-transform duration-500 hover:scale-102"
                      />
                    </div>
                  )}

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-purple-500/40 text-purple-300 text-[10px] sm:text-xs font-mono">
                    <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400" />
                    <span>FOUNDER & DIRECTOR</span>
                  </div>

                  {/* Toggle Banner / Portrait View Button */}
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playClickSound();
                      setViewBannerMode(!viewBannerMode);
                    }}
                    title={viewBannerMode ? 'Switch to Founder Portrait' : 'View Full Official Banner'}
                    className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-950/80 backdrop-blur-md border border-purple-500/50 text-white text-[10px] sm:text-xs font-mono hover:bg-purple-900 transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3 h-3 text-[#BD00FF]" />
                    <span>{viewBannerMode ? 'Portrait View' : 'Full Banner'}</span>
                  </button>
                </div>

                {/* Founder Info Label & Clean Responsive Typography */}
                <div className="p-4 sm:p-6 relative text-left">
                  {/* Founder Name & Instagram Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2.5">
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {BRAND.founder}
                      </h3>
                      <p className="text-xs font-mono tracking-wider sm:tracking-widest text-purple-400 uppercase mt-0.5">
                        FOUNDER – VIBECHECK MEDIA
                      </p>
                    </div>

                    <a
                      href={BRAND.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundManager.playClickSound()}
                      className="self-start sm:self-auto text-xs font-mono text-zinc-300 hover:text-purple-300 border border-purple-500/30 rounded-lg px-2.5 py-1.5 bg-purple-950/40 hover:bg-purple-900/40 transition-colors whitespace-nowrap shrink-0"
                    >
                      {BRAND.instagramHandle}
                    </a>
                  </div>

                  {/* Description Quote */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-2.5 break-words">
                    "Driven by creativity, digital innovation, and a passion for building meaningful brands that command attention."
                  </p>

                  {/* Trust markers */}
                  <div className="mt-4 pt-3.5 border-t border-purple-500/20 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 text-[11px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5 text-purple-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#BD00FF] shrink-0" />
                      <span>Full-Service Production</span>
                    </span>
                    <span className="text-zinc-500">Pan-India & Global Reach</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
