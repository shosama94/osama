import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [formState, setFormState] = useState({ name: '', email: '', roleType: 'Full-time / In-house', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate immediate client confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', roleType: 'Full-time / In-house', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#06080d] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Quick Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                <Mail className="w-3.5 h-3.5" />
                <span>Recruiter & Client Inquiries</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                Let's Discuss Opportunities
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                Currently open to roles in Digital Marketing Management, Enterprise SEO, Brand Listening, and Growth Consulting.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 uppercase tracking-wider">Direct Email</p>
                    <a href={`mailto:${profile.email}`} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-slate-400 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 uppercase tracking-wider">Phone / WhatsApp</p>
                    <a href={`tel:${profile.phone}`} className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors font-mono">
                      {profile.phoneDisplay}
                    </a>
                  </div>
                </div>
                <a
                  href={`https://wa.me/923402042125`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 text-xs font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-800/50 rounded-md transition-colors"
                >
                  WhatsApp
                </a>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 uppercase tracking-wider">LinkedIn Profile</p>
                    <p className="text-sm font-semibold text-white">
                      shaikhosama94
                    </p>
                  </div>
                </div>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300"
                >
                  <span>Connect</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-800 text-slate-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider">Current Location</p>
                  <p className="text-xs text-slate-300 font-medium">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 shadow-xl space-y-6">
              <div>
                <h3 className="text-lg font-bold font-display text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Reach out with role specifications, consulting briefs, or partnership proposals.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/50 border border-emerald-800/60 text-emerald-200 space-y-2 text-center animate-fadeIn">
                  <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-400" />
                  <p className="text-sm font-bold">Message Submitted!</p>
                  <p className="text-xs text-emerald-300">
                    Thank you. Your inquiry has been noted. You can also reach out directly via email at <span className="font-mono text-white">{profile.email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="s.jenkins@company.com"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Inquiry Scope / Opportunity</label>
                    <select
                      value={formState.roleType}
                      onChange={(e) => setFormState({ ...formState, roleType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="Full-time / In-house">Full-Time Role (Digital Marketing / SEO)</option>
                      <option value="Brand Listening Specialist">Enterprise Brand Listening (Meltwater / S4HANA)</option>
                      <option value="Contract / Freelance SEO">Contract / Freelance SEO & E-Commerce</option>
                      <option value="Performance Marketing Project">Meta Ads / Lead Generation Project</option>
                      <option value="General Recruiter Inquiry">Recruiter / HR Outreach</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Message / Role Details *</label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Briefly describe the role, team, or project requirements..."
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-md shadow-cyan-900/20 disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message to Shaikh Osama'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
