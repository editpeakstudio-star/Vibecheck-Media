import React from 'react';
import { Mail, Instagram, MessageCircle, Phone, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="relative py-24 sm:py-32 bg-[#050407] overflow-hidden">
      {/* Ambient background halos */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#8500FF]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BD00FF]" />
            <span>LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            The Vision Behind{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BD00FF] via-purple-300 to-white">
              VibeCheck Media.
            </span>
          </h2>
        </div>

        {/* 2-Column Founder Spotlight Bento Card */}
        <div className="rounded-3xl p-1 bg-gradient-to-b from-purple-500/30 via-purple-900/10 to-transparent border border-purple-500/20 shadow-[0_0_50px_rgba(133,0,255,0.2)]">
          <div className="rounded-[22px] bg-[#0c0618] p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Authentic Founder Portrait Asset */}
              <div className="lg:col-span-5 relative">
                {/* Purple Halo Backlight */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#8500FF]/40 to-[#BD00FF]/30 rounded-2xl blur-lg pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden border border-purple-500/40 bg-black/60 aspect-[4/3] sm:aspect-square group">
                  <img
                    src={BRAND.founderBannerImage}
                    alt="Ravi Chauhan - Founder of VibeCheck Media"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0618] via-transparent to-transparent opacity-60" />

                  {/* Corner Brand Mark */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-purple-500/40 text-xs font-mono text-purple-200">
                    <Sparkles className="w-3.5 h-3.5 text-[#BD00FF]" />
                    <span>Ravi Chauhan · Founder</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Founder Narrative & Direct Contact Channels */}
              <div className="lg:col-span-7 flex flex-col justify-center text-left">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 tracking-wider uppercase mb-4 w-fit">
                  FOUNDER & CREATIVE DIRECTOR
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                  {BRAND.founder}
                </h3>
                <p className="text-sm font-mono text-purple-400 mb-6">
                  Founder – VibeCheck Media
                </p>

                {/* Core Description Quote */}
                <blockquote className="text-base sm:text-lg text-zinc-300 leading-relaxed italic border-l-2 border-[#BD00FF] pl-4 mb-8">
                  "{BRAND.description} Driven by creativity, digital innovation, and a passion for building meaningful brands, Ravi Chauhan leads VibeCheck Media with a vision to help businesses establish a stronger digital presence."
                </blockquote>

                {/* Philosophy Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#BD00FF] shrink-0" />
                    <span>Direct founder-led creative oversight</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#BD00FF] shrink-0" />
                    <span>Storytelling tailored to retention curves</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#BD00FF] shrink-0" />
                    <span>Zero fluff, pure conversion design</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#BD00FF] shrink-0" />
                    <span>Fast turnaround & responsive sync</span>
                  </div>
                </div>

                {/* Direct Founder Contact Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={getWhatsAppUrl(`Hi Ravi! I saw your founder profile on the VibeCheck Media website. I'd love to chat directly about a project.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClickSound()}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#8500FF] to-[#BD00FF] hover:from-[#9510FF] hover:to-[#CD10FF] shadow-[0_0_20px_rgba(133,0,255,0.4)] transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={BRAND.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClickSound()}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-purple-950/30 border border-purple-500/30 hover:border-purple-400 transition-all cursor-pointer"
                  >
                    <Instagram className="w-4 h-4 text-purple-400" />
                    <span>{BRAND.instagramHandle}</span>
                  </a>

                  <a
                    href={`mailto:${BRAND.email}`}
                    onClick={() => soundManager.playClickSound()}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-purple-950/30 border border-purple-500/30 hover:border-purple-400 transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>Email Ravi</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
