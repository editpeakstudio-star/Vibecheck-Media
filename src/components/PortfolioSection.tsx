import React, { useState } from 'react';
import { Eye, ExternalLink, X, Check, MessageSquare, Sparkles } from 'lucide-react';
import { PORTFOLIO_PROJECTS, getWhatsAppUrl, BRAND } from '../data/agencyData';
import { PortfolioProject } from '../types';
import { soundManager } from '../utils/audio';

type CategoryFilter = 'All' | 'Video Editing' | 'Graphic Designing' | 'Web Development' | 'Social Media Creatives';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories: CategoryFilter[] = [
    'All',
    'Video Editing',
    'Graphic Designing',
    'Web Development',
    'Social Media Creatives',
  ];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  const handleOpenProject = (project: PortfolioProject) => {
    soundManager.playClickSound();
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    soundManager.playClickSound();
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-[#050407]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-purple-400 uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BD00FF]" />
              <span>FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Selected Projects.{' '}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BD00FF] via-purple-300 to-white">
                Engineered for Impact.
              </span>
            </h2>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-purple-950/30 border border-purple-500/20">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  soundManager.playClickSound();
                  setActiveCategory(cat);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#8500FF] to-[#BD00FF] text-white shadow-[0_0_12px_rgba(189,0,255,0.4)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-[#0c0618] border border-purple-500/20 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_10px_35px_-5px_rgba(133,0,255,0.3)] flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0618] via-transparent to-transparent opacity-80" />

                {/* Category Chip */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-purple-500/40 text-[10px] font-mono text-purple-300">
                  {project.category}
                </div>

                {/* Key Metric Chip */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-purple-950/80 backdrop-blur-md border border-purple-500/40 text-[10px] font-mono text-white">
                  {project.metrics}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-purple-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono text-zinc-400 border border-purple-500/20 rounded px-2 py-0.5 bg-purple-950/20"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Button */}
                <button
                  type="button"
                  onClick={() => handleOpenProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-purple-200 bg-purple-950/50 hover:bg-purple-900/60 border border-purple-500/30 hover:border-purple-400 transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-purple-400" />
                  <span>View Project Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl rounded-2xl bg-[#0e071c] border border-purple-500/40 p-6 sm:p-8 shadow-2xl shadow-purple-950/80 overflow-y-auto max-h-[90vh]">
              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseProject}
                aria-label="Close project modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-black/60 border border-purple-500/30 text-zinc-400 hover:text-white hover:border-purple-400 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Category Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-[11px] font-mono text-purple-300 mb-4">
                <span>{selectedProject.category}</span>
                <span>·</span>
                <span className="text-zinc-400">{selectedProject.clientType}</span>
              </div>

              {/* Title & Metric */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                {selectedProject.title}
              </h3>
              <div className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-purple-950 to-black border border-purple-500/30 text-xs font-mono text-purple-300 font-semibold mb-6">
                Outcome Metric: {selectedProject.metrics}
              </div>

              {/* Project Preview Image */}
              <div className="rounded-xl overflow-hidden border border-purple-500/30 aspect-[16/9] mb-6 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Detailed Description */}
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="mb-8">
                <h4 className="text-xs font-mono text-purple-300 uppercase tracking-wider mb-3">
                  Scope & Deliverables Handed Over:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-[#BD00FF]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct WhatsApp Call to Action for Similar Project */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-purple-500/20">
                <a
                  href={getWhatsAppUrl(`Hi Ravi & VibeCheck Media! I checked out the "${selectedProject.title}" project on your website and would like a similar solution for my brand.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playClickSound()}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#8500FF] to-[#BD00FF] hover:from-[#9510FF] hover:to-[#CD10FF] shadow-[0_0_20px_rgba(133,0,255,0.4)] transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Similar Project</span>
                </a>

                <button
                  type="button"
                  onClick={handleCloseProject}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-zinc-300 hover:text-white border border-purple-500/20 bg-purple-950/20 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
