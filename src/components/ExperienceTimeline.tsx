import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceTimeline = () => {
  const { experiences, internshipsAndVolunteering } = PORTFOLIO_DATA;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First job expanded by default

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#06080d] border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey & Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Work Experience & Corporate Impact
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
            Progressive trajectory across enterprise utility monitoring, celebrity brand management, real estate acquisitions, and agency SEO.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-slate-800 ml-3 sm:ml-6 space-y-10">
          {experiences.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div key={idx} className="relative pl-6 sm:pl-10">
                {/* Timeline node */}
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                  idx === 0
                    ? 'bg-cyan-400 border-[#06080d] ring-4 ring-cyan-500/20'
                    : 'bg-slate-800 border-slate-600'
                }`} />

                {/* Experience Card */}
                <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-xl font-bold font-display text-white">
                          {exp.role}
                        </h3>
                        {exp.badge && (
                          <span className="text-xs text-cyan-400 font-medium">
                            · {exp.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-base font-medium text-slate-300 mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    {/* Metadata: Dates & Location */}
                    <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1 font-mono text-cyan-300">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Accordion Toggle */}
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Hide Key Responsibilities' : 'View Key Responsibilities & Tools'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {/* Expandable Responsibilities & Tools */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-4 text-xs animate-fadeIn">
                      <ul className="space-y-2 text-slate-400 list-disc list-inside">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="leading-relaxed">
                            <span className="text-slate-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tool tags - Unboxed clean text with typographic separator */}
                      <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                        <span className="font-semibold text-slate-400 uppercase tracking-wider">Technologies:</span>
                        <span>{exp.tools.join(' · ')}</span>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Internships & Volunteering Strip */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-cyan-400" />
            <h3 className="text-lg font-bold font-display text-white">
              Internships & Community Engagements
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internshipsAndVolunteering.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 text-left space-y-1"
              >
                <p className="text-xs font-semibold text-cyan-300 font-mono">
                  {item.role}
                </p>
                <p className="text-sm font-medium text-slate-200">
                  {item.organization}
                </p>
                <p className="text-xs text-slate-400 leading-snug">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
