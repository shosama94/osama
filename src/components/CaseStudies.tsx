import { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

interface CaseStudiesProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const CaseStudies = ({ onSelectProject }: CaseStudiesProps) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'listening' | 'seo' | 'ecommerce' | 'ads' | 'creative'>('all');
  const { projects } = PORTFOLIO_DATA;

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'listening', label: 'Brand Intelligence' },
    { id: 'ecommerce', label: 'SEO & E-Commerce' },
    { id: 'ads', label: 'Meta Ads & Leads' },
    { id: 'creative', label: 'Creative & Social' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-24 md:py-32 bg-[#06080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Selected Work & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Evidence-Based Execution Across Search, Social & Brand
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
              Real projects executed for power utilities, aesthetic clinics, real estate firms, and e-commerce brands with verified deliverables.
            </p>
          </div>

          {/* Interactive Filter Tabs - Functional Buttons styled as segmented control */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start md:self-auto">
            {filters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/10 flex flex-col overflow-hidden text-left"
            >
              {/* Media Preview Box */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />

                {/* Top Corner Meta Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#06080d]/80 backdrop-blur-md border border-slate-700/60 text-[11px] font-medium text-cyan-300">
                  {project.categoryLabel}
                </div>

                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-[#06080d]/80 text-slate-300 group-hover:text-cyan-400 group-hover:scale-110 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Unboxed Metadata: Client & Role */}
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="font-semibold text-slate-200">{project.client}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>{project.role}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Bottom Tools & View Trigger */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 truncate max-w-[200px]">
                    {project.tools.slice(0, 3).join(' · ')}
                  </span>
                  <span className="font-medium text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                    View Study &rarr;
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
