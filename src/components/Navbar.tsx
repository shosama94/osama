import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download, Volume2, VolumeX, FileText } from 'lucide-react';
import { downloadCVPdf } from '../utils/generateCVPdf';
import { isSoundEnabled, toggleSound } from '../utils/sound';

interface NavbarProps {
  onOpenCV: () => void;
}

export const Navbar = ({ onOpenCV }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    setSoundOn(isSoundEnabled());
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const updated = toggleSound();
    setSoundOn(updated);
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06080d]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Appropriate Brand Logo & Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-0.5 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-shadow">
              <div className="w-full h-full bg-[#06080d] rounded-[10px] flex items-center justify-center">
                <span className="font-display font-black text-xs tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                  SO
                </span>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold font-display tracking-tight text-white group-hover:text-cyan-400 transition-colors leading-tight">
                Shaikh Osama
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
                SEO · CX · Marketing
              </span>
            </div>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-cyan-400 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary actions & Sound Toggle */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Tactile Sound Feedback Toggle */}
            <button
              onClick={handleToggleSound}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 text-slate-300 hover:text-white transition-colors"
              title={soundOn ? 'Click Sound: Enabled (Click to Mute)' : 'Click Sound: Muted (Click to Enable)'}
              aria-label="Toggle UI click sounds"
            >
              {soundOn ? (
                <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-slate-500" />
              )}
            </button>

            {/* Direct PDF Download Action */}
            <button
              onClick={downloadCVPdf}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-100 bg-slate-800/80 hover:bg-slate-700/80 border border-cyan-500/30 rounded-lg transition-colors whitespace-nowrap shadow-sm"
              title="Download Shaikh Osama CV as PDF"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download CV (PDF)</span>
            </button>

            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-1 px-2.5 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
              title="Preview CV details on screen"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Preview</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#06080d] bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-cyan-900/30"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0e1a]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 mt-2 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                downloadCVPdf();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-100 bg-slate-800 border border-cyan-500/30 rounded-lg"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download CV (PDF)</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Preview Full CV</span>
            </button>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#06080d] bg-cyan-400 hover:bg-cyan-300 rounded-lg"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
