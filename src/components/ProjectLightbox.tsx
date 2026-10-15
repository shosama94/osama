import React, { useEffect } from 'react';
import { X, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2, Folder } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectLightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  onClose,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, onNext, onPrev]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn">
      {/* Background click dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#090d16] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 text-left my-8">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:px-6 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-xs text-slate-300 font-medium">
              {project.client}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Media Banner */}
        <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-cyan-300 mt-1 font-medium">
              Role: {project.role}
            </p>
          </div>
        </div>

        {/* Case Study Details Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Objective & Problem */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Objective & Challenge
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              {project.objective}
            </p>
          </div>

          {/* Solution & Execution */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Strategy & Execution
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Impact */}
          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Impact & Value Delivered
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              {project.impact}
            </p>
          </div>

          {/* Deliverables & Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Key Deliverables
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {project.deliverables?.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Tools & Platforms
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {project.tools.join(' · ')}
              </p>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Verified Client Deliverable · Shaikh Osama Portfolio
            </span>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Close Window
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
