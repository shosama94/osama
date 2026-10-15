import React, { useState } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { downloadCVPdf } from '../utils/generateCVPdf';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { profile, experiences, certifications, education } = PORTFOLIO_DATA;

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    downloadCVPdf();
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `SHAIKH OSAMA - Digital Marketer | SEO Expert | Customer Experience Specialist
Email: ${profile.email} | Phone: ${profile.phoneDisplay} | Location: ${profile.location}
LinkedIn: ${profile.linkedin}

PROFILE SUMMARY:
${profile.bio}

EXPERIENCE:
${experiences.map(e => `• ${e.company} - ${e.role} (${e.period})\n  ${e.highlights.join('\n  ')}`).join('\n\n')}

CERTIFICATIONS:
${certifications.map(c => `• ${c.name} - ${c.issuer}`).join('\n')}

EDUCATION:
${education.map(ed => `• ${ed.degree} - ${ed.institution} (${ed.score})`).join('\n')}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10 animate-fadeIn">
      {/* Background dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden z-10 text-left my-8 print:m-0 print:p-0 print:border-none print:shadow-none">
        
        {/* Top Modal Controls (Hidden in Print) */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Curriculum Vitae Preview
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">Shaikh Osama</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors"
              title="Copy plain text summary to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-md transition-colors shadow-sm"
              title="Download CV as PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="p-8 sm:p-12 space-y-8 bg-white max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                SHAIKH OSAMA
              </h1>
              <p className="text-sm font-semibold tracking-wide text-cyan-800 uppercase mt-1">
                Digital Marketer · SEO Expert · Customer Experience Specialist
              </p>
            </div>

            <div className="text-xs text-slate-600 space-y-1 font-mono sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.email}</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.phoneDisplay}</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                <span>linkedin.com/in/shaikhosama94</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.location}</span>
              </p>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              Digital Marketer with 3+ years of specialized experience across Search Engine Optimization, social media marketing, social media listening, customer chat support, and website management. Proven track record at K-Electric managing corporate brand presence, addressing public escalations via Meltwater & SAP S/4HANA, and executing performance marketing initiatives across diverse industries.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Work Experience
            </h2>

            <div className="space-y-5">
              {experiences.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900">{exp.company}</span>
                      <span className="text-slate-500"> — </span>
                      <span className="font-semibold text-slate-700">{exp.role}</span>
                    </div>
                    <span className="font-mono text-slate-500 text-[11px]">{exp.period}</span>
                  </div>

                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="leading-normal">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Education Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            
            {/* Certifications */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Certifications
              </h2>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {certifications.map((c, idx) => (
                  <li key={idx} className="flex items-start justify-between gap-2">
                    <span className="font-medium text-slate-800">• {c.name}</span>
                    <span className="text-slate-500 text-[11px] shrink-0">{c.issuer}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Education
              </h2>
              <div className="space-y-2.5 text-xs text-slate-700">
                {education.map((edu, idx) => (
                  <div key={idx}>
                    <p className="font-bold text-slate-900">• {edu.degree}</p>
                    <p className="text-slate-600">{edu.institution} ({edu.score})</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Core Tools */}
          <div className="pt-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
              Core Technical Competencies & Platforms
            </h2>
            <p className="text-xs text-slate-700 font-mono leading-relaxed">
              SEO (On-Page, Off-Page, Audits) · Meltwater · SAP S/4HANA · Shopify · WordPress · Meta Ads Manager · Facebook Lead Ads · Adobe Photoshop · SEMrush · Yoast · Web Design & Development (HTML/CSS) · Customer Chat Support
            </p>
          </div>

        </div>

        {/* Modal Bottom (Hidden in Print) */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between print:hidden">
          <span className="text-xs text-slate-500">
            Source: Shaikh Osama Curriculum Vitae
          </span>
          <button
            onClick={handleDownloadPdf}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF Copy</span>
          </button>
        </div>

      </div>
    </div>
  );
};
