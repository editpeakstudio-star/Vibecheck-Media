import React from 'react';
import { Sparkles, ArrowRight, Rocket, Video, TrendingUp, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';

export const HeroSection: React.FC = () => {
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
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Background Neon Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8500FF]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/4 w-[28rem] h-[28rem] bg-[#BD00FF]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Cyber Grid Subtle Horizon */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(133,0,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(133,0,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none mask-radial" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Small Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(133,0,255,0.2)] w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BD00FF]" />
              <span>CREATIVE DIGITAL AGENCY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              We Build Brands.{' '}
              <br />
              We Create{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BD00FF] via-[#8500FF] to-[#D946EF] animate-gradient-text drop-shadow-[0_0_30px_rgba(189,0,255,0.4)]">
                Growth.
              </span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-xl font-normal leading-relaxed mb-8">
              From powerful content to strategic digital experiences, we help businesses build their identity, connect with their audience, and grow online.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, 'services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#8500FF] to-[#BD00FF] hover:from-[#9510FF] hover:to-[#CD10FF] shadow-[0_0_25px_rgba(133,0,255,0.4)] hover:shadow-[0_0_35px_rgba(189,0,255,0.6)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl(`Hi Ravi & VibeCheck Media! I'm ready to scale my brand. Let's work together!`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClickSound()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-purple-200 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/40 hover:border-purple-400 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-black/40 cursor-pointer"
              >
                <span>Let's Work Together</span>
                <Sparkles className="w-4 h-4 text-purple-400" />
              </a>
            </div>

            {/* Three Highlights with Glowing Icons */}
            <div className="pt-6 border-t border-purple-500/20 grid grid-cols-3 gap-3 sm:gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 shadow-[0_0_10px_rgba(133,0,255,0.2)]">
                  <Rocket className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">Strategic</h4>
                  <p className="text-[11px] text-zinc-400 hidden sm:block">Marketing</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 shadow-[0_0_10px_rgba(133,0,255,0.2)]">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">Creative</h4>
                  <p className="text-[11px] text-zinc-400 hidden sm:block">Content</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 shadow-[0_0_10px_rgba(133,0,255,0.2)]">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">Real</h4>
                  <p className="text-[11px] text-zinc-400 hidden sm:block">Growth</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Founder Portrait & Brand Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Background Halo Ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#8500FF]/30 via-transparent to-[#BD00FF]/20 blur-xl pointer-events-none" />

            {/* Main Founder Card Container */}
            <div className="relative w-full max-w-md rounded-2xl p-1 bg-gradient-to-b from-purple-500/40 via-purple-900/20 to-black/60 shadow-[0_0_50px_rgba(133,0,255,0.3)]">
              <div className="relative rounded-2xl overflow-hidden bg-[#0a0514] border border-purple-500/30">
                {/* Authentic Founder Image */}
                <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden group">
                  <img
                    src={BRAND.founderBannerImage}
                    alt="Ravi Chauhan - Founder of VibeCheck Media"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Measured Dark Scrim for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/30 to-transparent" />

                  {/* Top Badge: Verified Founder */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-purple-500/40 text-purple-300 text-xs font-mono">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                    <span>FOUNDER & DIRECTOR</span>
                  </div>

                  {/* Floating Metric 1 */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-purple-500/40 text-zinc-200 text-xs font-mono">
                    <Flame className="w-3.5 h-3.5 text-[#BD00FF]" />
                    <span>50M+ VIEWS</span>
                  </div>
                </div>

                {/* Founder Info Label & Typography */}
                <div className="p-6 relative">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {BRAND.founder}
                      </h3>
                      <p className="text-xs font-mono tracking-widest text-purple-400 uppercase mt-0.5">
                        FOUNDER – VIBECHECK MEDIA
                      </p>
                    </div>

                    <a
                      href={BRAND.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-zinc-400 hover:text-purple-300 border border-purple-500/30 rounded-lg px-2.5 py-1 bg-purple-950/30 transition-colors"
                    >
                      {BRAND.instagramHandle}
                    </a>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mt-3">
                    "Driven by creativity, digital innovation, and a passion for building meaningful brands that command attention."
                  </p>

                  {/* Trust markers */}
                  <div className="mt-4 pt-4 border-t border-purple-500/20 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1 text-purple-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#BD00FF]" />
                      Full-Service Production
                    </span>
                    <span>Pan-India & Global</span>
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
