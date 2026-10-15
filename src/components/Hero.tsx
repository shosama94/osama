import { ArrowDown, Download, ShieldCheck, Mail, Linkedin, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { downloadCVPdf } from '../utils/generateCVPdf';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero = ({ onOpenCV }: HeroProps) => {
  const { profile, stats } = PORTFOLIO_DATA;

  const handleDownloadCV = () => {
    downloadCVPdf();
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[80vh] flex flex-col justify-center">
      {/* Ambient radial gradient mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        {/* Live Role Kicker - Unboxed clean metadata */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium text-slate-200">Social Media Listening & Brand Specialist</span>
          <span className="text-slate-500" aria-hidden="true">·</span>
          <span className="text-cyan-400 font-medium">K-Electric</span>
        </div>

        {/* Display Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-[1.12] text-balance max-w-4xl mx-auto">
          {profile.headline}
        </h1>

        {/* 1-2 line positioning statement */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {profile.subheadline}
        </p>

        {/* Action Buttons: Direct Download CV as PDF Enabled! */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#06080d] bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-md shadow-cyan-900/20 active:scale-95"
          >
            <span>View Portfolio & Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {/* Direct PDF Download Action */}
          <button
            onClick={handleDownloadCV}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-400 rounded-lg transition-all active:scale-95 shadow-sm"
            title="Download Shaikh Osama CV as PDF"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download CV (PDF)</span>
          </button>

          <button
            onClick={onOpenCV}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            title="Preview Curriculum Vitae on Screen"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Preview CV</span>
          </button>
        </div>

        {/* Quick Profile Links */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-800/80 mt-10">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-slate-400" />
            <span>linkedin.com/in/shaikhosama94</span>
          </a>
          <span className="text-slate-700 hidden sm:inline" aria-hidden="true">·</span>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>{profile.email}</span>
          </a>
          <span className="text-slate-700 hidden sm:inline" aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Professional Data</span>
          </span>
        </div>

        {/* Claim-to-Proof Adjacency: Metric Strip */}
        <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight tabular-nums">
                {stat.value}
              </p>
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-[11px] text-slate-500">
                {stat.context}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
