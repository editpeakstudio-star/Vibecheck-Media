import React from 'react';
import { Palette, Compass, TrendingUp, Sparkles, Award, Users2, Layers } from 'lucide-react';
import { soundManager } from '../utils/audio';

export const AboutSection: React.FC = () => {
  const cards = [
    {
      number: '01',
      title: 'Creativity First',
      subtitle: 'Original Storytelling & Visual Mastery',
      description: 'We believe genuine creativity is what stops the infinite scroll. From cinematic reel pacing to provocative brand design, we inject memorable artistry into every piece of content.',
      icon: Palette,
      metrics: '100% Bespoke Creatives',
      detail: 'Tailored aesthetic signatures engineered for maximum retention and viewer resonance.',
    },
    {
      number: '02',
      title: 'Strategy Driven',
      subtitle: 'Data-Backed Audience Positioning',
      description: 'Visual brilliance requires strategic direction. We analyze audience psychology, algorithm patterns, and competitive whitespace to ensure your brand commands attention.',
      icon: Compass,
      metrics: '3.4x Average Reach Multiplier',
      detail: 'Precision content calendars, narrative hooks, and distribution architectures.',
    },
    {
      number: '03',
      title: 'Growth Focused',
      subtitle: 'Converting Attention to Business ROI',
      description: 'Followers are vanity; revenue and brand authority are sanity. Every campaign, script, and website is architected to convert passive eyeballs into loyal advocates and clients.',
      icon: TrendingUp,
      metrics: 'Measurable Business Impact',
      detail: 'Frictionless inquiry funnels, high-conversion landing pages, and ongoing optimization.',
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#08040d]/80 border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BD00FF]" />
            <span>WHO WE ARE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            More Than Creativity.{' '}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400">
              We Create Impact.
            </span>
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-zinc-300 leading-relaxed">
            VibeCheck Media is a creative digital agency focused on helping brands establish a powerful online presence through creative storytelling, strategic content, and modern digital solutions.
          </p>
        </div>

        {/* 3 Premium Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.number}
                className="group relative rounded-2xl p-7 bg-gradient-to-b from-[#120722] to-[#090411] border border-purple-500/20 hover:border-purple-400/60 transition-all duration-300 hover:shadow-[0_10px_35px_-5px_rgba(133,0,255,0.25)] flex flex-col justify-between"
                onMouseEnter={() => soundManager.playClickSound()}
              >
                {/* Subtle Card Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-purple-600/20 transition-all pointer-events-none" />

                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-mono font-bold tracking-widest text-purple-400">
                      {card.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:border-purple-400 group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(133,0,255,0.2)]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs font-mono text-purple-300/80 mb-4">
                    {card.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Metric & Unboxed Spec */}
                <div className="pt-4 border-t border-purple-500/20 flex flex-col gap-1">
                  <span className="text-xs font-mono font-semibold text-white tracking-wide">
                    {card.metrics}
                  </span>
                  <span className="text-[11px] text-zinc-400">
                    {card.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Agency Quantitative Proof Ribbon */}
        <div className="mt-16 pt-10 border-t border-purple-500/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums text-purple-300">
              50M+
            </div>
            <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-mono">Organic Impressions</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums text-purple-300">
              100+
            </div>
            <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-mono">Brand Projects Delivered</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums text-purple-300">
              4.8x
            </div>
            <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-mono">Average Engagement Uplift</p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums text-purple-300">
              24/7
            </div>
            <p className="text-xs text-zinc-400 mt-1 uppercase tracking-wider font-mono">Direct Communication</p>
          </div>
        </div>

      </div>
    </section>
  );
};
