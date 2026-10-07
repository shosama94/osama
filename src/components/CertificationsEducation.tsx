import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CertificationsEducation = () => {
  const { certifications, education } = PORTFOLIO_DATA;

  return (
    <section id="credentials" className="py-24 md:py-32 bg-[#06080d] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>Industry Credentials</span>
              </div>
              <h2 className="text-3xl font-bold font-display text-white tracking-tight">
                Accredited Certifications
              </h2>
              <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                Formally assessed competencies in search algorithms, social inbound marketing, and network systems.
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all flex items-center justify-between gap-4"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-white">
                        {cert.name}
                      </h3>
                      {cert.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-cyan-400 font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {cert.topic}
                    </p>
                  </div>

                  <span className="text-[10px] uppercase font-mono text-emerald-400/80 tracking-wider">
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Formal Education */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-3xl font-bold font-display text-white tracking-tight">
                Education
              </h2>
              <p className="mt-2 text-slate-400 text-sm leading-relaxed">
                Technical degree combining web engineering with digital human-computer interaction.
              </p>
            </div>

            {/* Education Cards */}
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold font-display text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400 shrink-0">
                      {edu.score}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-slate-300">
                    {edu.institution}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-800/60">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
