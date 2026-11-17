import React, { useState } from 'react';
import {
  Video,
  PenTool,
  Compass,
  Palette,
  Code,
  Share2,
  Check,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { SERVICES, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return Video;
      case 'PenTool':
        return PenTool;
      case 'Compass':
        return Compass;
      case 'Palette':
        return Palette;
      case 'Code':
        return Code;
      case 'Share2':
        return Share2;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#050407]">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#8500FF]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#BD00FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BD00FF]" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Six Specialized Services.{' '}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BD00FF] via-purple-300 to-white">
                One Full-Growth Engine.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 max-w-md leading-relaxed">
            Every service is precision-crafted to build unshakeable brand authority and drive genuine, measurable engagement.
          </p>
        </div>

        {/* 6 Core Service Cards in Bento/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const Icon = getIcon(service.icon);
            const whatsappUrl = getWhatsAppUrl(service.whatsappMessage);

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl p-7 bg-[#0d0718] border border-purple-500/20 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_35px_rgba(133,0,255,0.25)] flex flex-col justify-between"
                onMouseEnter={() => soundManager.playClickSound()}
              >
                {/* Purple Hover Corner Glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-[#BD00FF]/20 transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Top Header: Index & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-purple-400/80">
                      SERVICE {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:text-white group-hover:border-purple-400 group-hover:scale-105 transition-all shadow-[0_0_15px_rgba(133,0,255,0.25)]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-purple-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Capabilities Checklist */}
                  <div className="space-y-2 mb-8">
                    {service.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                        <div className="w-4 h-4 rounded-full bg-purple-950 border border-purple-500/40 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#BD00FF]" />
                        </div>
                        <span className="leading-tight">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-5 border-t border-purple-500/20 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span className="text-purple-300">Signature Focus:</span>
                    <span className="truncate max-w-[180px]">{service.highlight}</span>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClickSound()}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#8500FF] to-[#BD00FF] hover:from-[#9510FF] hover:to-[#CD10FF] shadow-[0_0_15px_rgba(133,0,255,0.3)] hover:shadow-[0_0_25px_rgba(189,0,255,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Get This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Solution Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#120526] via-[#090315] to-[#14062a] border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white tracking-tight">
              Need a Custom Multi-Service Growth Package?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Combine video editing, content strategy, graphic design, and web development for a unified brand transformation.
            </p>
          </div>

          <a
            href={getWhatsAppUrl(`Hi Ravi & VibeCheck Media! I need a custom multi-service growth retainer for our brand. Let's schedule a consultation!`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClickSound()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-purple-200 bg-purple-950/60 border border-purple-500/50 hover:bg-purple-900/60 hover:border-purple-300 transition-all shrink-0 cursor-pointer"
          >
            <span>Inquire Custom Retainer</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
