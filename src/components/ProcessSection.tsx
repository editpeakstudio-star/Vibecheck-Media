import React, { useState } from 'react';
import { Search, Crosshair, Cpu, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS, getWhatsAppUrl } from '../data/agencyData';
import { soundManager } from '../utils/audio';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return Search;
      case 'Crosshair':
        return Crosshair;
      case 'Cpu':
        return Cpu;
      case 'Rocket':
        return Rocket;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="process" className="relative py-20 sm:py-28 bg-[#08040d]/80 border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BD00FF]" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Our Working Process.{' '}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BD00FF] via-purple-300 to-white">
              From Concept to Scale.
            </span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-300 leading-relaxed">
            A seamless four-stage production framework engineered to turn raw ideas into high-converting brand equity.
          </p>
        </div>

        {/* Animated 4-Step Timeline Desktop / Mobile */}
        <div className="relative">
          {/* Glowing Purple Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-8 bg-gradient-to-r from-purple-900 via-[#8500FF] to-purple-900 shadow-[0_0_15px_rgba(133,0,255,0.4)] z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = getStepIcon(step.icon);
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => {
                    soundManager.playClickSound();
                    setActiveStep(idx);
                  }}
                  className={`group relative rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#120722] border-2 border-purple-400 shadow-[0_0_30px_rgba(189,0,255,0.3)] scale-[1.02]'
                      : 'bg-[#0b0515] border border-purple-500/20 hover:border-purple-500/50 hover:bg-[#0f071c]'
                  }`}
                >
                  <div>
                    {/* Top Step Badge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-mono font-bold tracking-widest ${isActive ? 'text-[#BD00FF]' : 'text-purple-400'}`}>
                          STEP {step.number}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30 text-purple-200">
                          {step.phase}
                        </span>
                      </div>

                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-gradient-to-tr from-[#8500FF] to-[#BD00FF] text-white shadow-[0_0_15px_#BD00FF]'
                            : 'bg-purple-950/40 border border-purple-500/30 text-purple-300'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-purple-500/20 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase text-purple-400/80 tracking-wider">
                      Deliverables:
                    </span>
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5 text-xs text-zinc-400">
                        <span className="w-1 h-1 rounded-full bg-[#BD00FF]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 text-center">
          <a
            href={getWhatsAppUrl(`Hi Ravi! I loved your 4-step working process and want to kick off Step 1 (Discovery) for my brand!`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundManager.playClickSound()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#8500FF] to-[#BD00FF] hover:from-[#9510FF] hover:to-[#CD10FF] shadow-[0_0_20px_rgba(133,0,255,0.4)] transition-all cursor-pointer"
          >
            <span>Start Step 01 Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
