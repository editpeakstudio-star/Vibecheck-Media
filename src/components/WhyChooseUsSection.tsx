import React from 'react';
import {
  Lightbulb,
  CheckCircle,
  Target,
  Layers,
  MessageSquare,
  Users,
  Shield,
  Zap,
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/agencyData';
import { soundManager } from '../utils/audio';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return Lightbulb;
      case 'CheckCircle':
        return CheckCircle;
      case 'Target':
        return Target;
      case 'Layers':
        return Layers;
      case 'MessageSquare':
        return MessageSquare;
      case 'Users':
        return Users;
      default:
        return Zap;
    }
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#08040d]/70 border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BD00FF]" />
            <span>THE VIBECHECK ADVANTAGE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Why Brands Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BD00FF] via-purple-300 to-white">
              VibeCheck Media
            </span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-300 leading-relaxed">
            We don't do low-effort templates or vanity metrics. We construct bespoke creative systems designed to build genuine market authority.
          </p>
        </div>

        {/* 6 Interactive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <div
                key={item.number}
                className="group relative rounded-2xl p-6 bg-[#0c0617] border border-purple-500/20 hover:border-purple-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(133,0,255,0.2)] flex flex-col justify-between"
                onMouseEnter={() => soundManager.playClickSound()}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold tracking-widest text-purple-400/80">
                      // {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:border-purple-400 transition-colors shadow-[0_0_12px_rgba(133,0,255,0.2)]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-purple-500/15 flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">Benchmark:</span>
                  <span className="text-purple-300 font-semibold">{item.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
