import React, { useState } from 'react';
import { Mail, Instagram, MessageCircle, Sparkles, CheckCircle2, ArrowRight, Eye, Image as ImageIcon } from 'lucide-react';
import { BRAND, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';

export const FounderSection: React.FC = () => {
  const [showFullBannerModal, setShowFullBannerModal] = useState<boolean>(false);

  return (
    <section id="founder" className="relative py-20 sm:py-28 bg-[#050407] overflow-hidden text-left">
      {/* Ambient background halos */}
      <div className="absolute top-1/3 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#8500FF]/15 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
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
        <div className="rounded-2xl sm:rounded-3xl p-0.5 sm:p-1 bg-gradient-to-b from-purple-500/30 via-purple-900/10 to-transparent border border-purple-500/20 shadow-[0_0_40px_rgba(133,0,255,0.2)]">
          <div className="rounded-[18px] sm:rounded-[22px] bg-[#0c0618] p-5 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Clean Centered Portrait Asset */}
              <div className="lg:col-span-5 relative w-full max-w-md mx-auto">
                {/* Purple Halo Backlight */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#8500FF]/40 to-[#BD00FF]/30 rounded-2xl blur-lg pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden border border-purple-500/40 bg-[#080312] aspect-[4/5] sm:aspect-square flex items-center justify-center group shadow-xl">
                  {/* High Resolution Centered Portrait of Ravi Chauhan */}
                  <img
                    src={BRAND.founderPortraitImage}
                    alt="Ravi Chauhan - Founder of VibeCheck Media"
                    className="w-full h-full object-contain sm:object-cover object-center transition-transform duration-700 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0618] via-transparent to-transparent opacity-40 pointer-events-none" />

                  {/* Corner Brand Mark */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-black/80 backdrop-blur-md border border-purple-500/40 text-[10px] sm:text-xs font-mono text-purple-200">
                    <Sparkles className="w-3 h-3 text-[#BD00FF]" />
                    <span>Ravi Chauhan · Founder</span>
                  </div>

                  {/* View Full 16:9 Banner Button */}
                  <button
                    type="button"
                    onClick={() => {
                      soundManager.playClickSound();
                      setShowFullBannerModal(true);
                    }}
                    title="View Full Official 16:9 Banner"
                    className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-950/80 backdrop-blur-md border border-purple-500/40 text-purple-200 text-[10px] font-mono hover:bg-purple-900 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3 h-3 text-[#BD00FF]" />
                    <span>View Banner</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Founder Narrative & Direct Contact Channels */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-[10px] sm:text-xs font-mono text-purple-300 tracking-wider uppercase mb-3 w-fit">
                  FOUNDER & CREATIVE DIRECTOR
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    {BRAND.founder}
                  </h3>

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

                <p className="text-xs sm:text-sm font-mono text-purple-400 mb-5">
                  Founder – VibeCheck Media
                </p>

                {/* Core Description Quote */}
                <blockquote className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed italic border-l-2 border-[#BD00FF] pl-3 sm:pl-4 mb-6 sm:mb-8 break-words">
                  "Driven by creativity, digital innovation, and a passion for building meaningful brands, Ravi Chauhan leads VibeCheck Media with a vision to help businesses establish a stronger digital presence."
                </blockquote>

                {/* Philosophy Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
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
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <a
                    href={getWhatsAppUrl(`Hi Ravi! I saw your founder profile on the VibeCheck Media website. I'd love to chat directly about a project.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClickSound()}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#8500FF] to-[#BD00FF] hover:from-[#9510FF] hover:to-[#CD10FF] shadow-[0_0_15px_rgba(133,0,255,0.4)] transition-all cursor-pointer whitespace-nowrap text-center"
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
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-purple-950/30 border border-purple-500/30 hover:border-purple-400 transition-all cursor-pointer whitespace-nowrap text-center"
                  >
                    <Instagram className="w-4 h-4 text-purple-400" />
                    <span>{BRAND.instagramHandle}</span>
                  </a>

                  <a
                    href={`mailto:${BRAND.email}`}
                    onClick={() => soundManager.playClickSound()}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-purple-950/30 border border-purple-500/30 hover:border-purple-400 transition-all cursor-pointer whitespace-nowrap text-center"
                  >
                    <Mail className="w-4 h-4 text-purple-400" />
                    <span>Email Ravi</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Full 16:9 Official Banner Showcase Drawer / Modal */}
        {showFullBannerModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl rounded-2xl bg-[#0e071c] border border-purple-500/40 p-4 sm:p-6 shadow-2xl shadow-purple-950/80">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-purple-400" />
                  <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                    Official 16:9 Brand Banner
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setShowFullBannerModal(false)}
                  className="px-3 py-1 rounded-lg bg-purple-950/50 border border-purple-500/30 text-xs font-mono text-zinc-300 hover:text-white cursor-pointer"
                >
                  Close ✕
                </button>
              </div>

              {/* Complete 16:9 Image - 100% Uncropped with object-contain */}
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-black flex items-center justify-center border border-purple-500/20">
                <img
                  src={BRAND.founderBannerImage}
                  alt="Official VibeCheck Media Founder Banner"
                  className="w-full h-full object-contain object-center"
                />
              </div>

              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400">
                <span>Ravi Chauhan · Founder – VibeCheck Media</span>
                <a
                  href={getWhatsAppUrl(`Hi Ravi! I saw your official banner on VibeCheck Media and want to connect with you.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-white font-semibold underline"
                >
                  Message Ravi on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
