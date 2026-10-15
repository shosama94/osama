import { Share2, Search, HeartHandshake, CheckCircle } from 'lucide-react';

export const SkillsEcosystem = () => {
  const specializations = [
    {
      category: 'Social Media Marketing',
      shortTitle: 'SMM & Paid Growth',
      icon: Share2,
      accentColor: 'text-pink-400',
      borderColor: 'hover:border-pink-500/40',
      description: 'Multi-platform social execution combining paid Meta advertising, creative content direction, and organic community growth.',
      skills: [
        'Meta Ads Manager & Account Architecture',
        'Facebook Lead Generation Ad Funnels',
        'Instagram Organic Growth & Curation',
        'Story, Post & Carousel Creative Production',
        'Audience Retargeting & Lookalike Audiences',
        'Social Media Copywriting & Brand Messaging',
        'Content Calendar & Scheduling Workflows',
        'LinkedIn Profile & Page Optimization'
      ],
      tools: ['Meta Business Suite', 'Facebook Ads Manager', 'Adobe Photoshop', 'Instagram Creator Studio', 'LinkedIn']
    },
    {
      category: 'Search Engine Optimization',
      shortTitle: 'SEO & Organic Visibility',
      icon: Search,
      accentColor: 'text-cyan-400',
      borderColor: 'hover:border-cyan-500/40',
      description: 'End-to-end technical, on-page, and off-page optimization to capture organic commercial search intent and sustain top SERP rankings.',
      skills: [
        'On-Page SEO & Content Intent Alignment',
        'Off-Page SEO & High-Authority Backlink Acquisition',
        'Comprehensive Technical SEO Site Audits',
        'Keyword Research & Competitor Gap Analysis',
        'Guest Posting & Outreach Strategies',
        'Shopify & E-Commerce Catalog SEO',
        'SEO Metadata, Internal Linking & URL Architecture',
        'Google Search Console & Indexation Audits'
      ],
      tools: ['SEMrush', 'Yoast SEO', 'Mangools', 'Google Search Console', 'Google Analytics', 'Shopify SEO']
    },
    {
      category: 'Customer Experience & Listening',
      shortTitle: 'CX & Brand Protection',
      icon: HeartHandshake,
      accentColor: 'text-amber-400',
      borderColor: 'hover:border-amber-500/40',
      description: 'Enterprise brand stewardship, real-time sentiment analysis, crisis escalation management, and high-touch customer communication.',
      skills: [
        'Enterprise Social Media Listening via Meltwater',
        'Corporate Brand Health & Reputation Protection',
        'Consumer Sentiment Trend Tracking & Analysis',
        'Real-Time Customer Chat Support & Inquiry Resolution',
        'Crisis Escalation & PR Incident Mitigation',
        'Case-Tracking & Workflow Routing in SAP S/4HANA',
        'Public Grievance Escalation Governance',
        'Cross-Functional Operational Alignment'
      ],
      tools: ['Meltwater', 'SAP S/4HANA', 'Sentiment Analytics', 'Customer Chat Software', 'Crisis Playbooks']
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 bg-[#06080d] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Specialized Skills: SEO, Social Media & Customer Experience
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
            Targeted expertise built through hands-on corporate execution at K-Electric, agency consulting at Digital Gravity, and consumer brand management.
          </p>
        </div>

        {/* 3 Pillars Grid: Social Media, SEO, and Customer Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specializations.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <div
                key={idx}
                className={`p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80 ${spec.borderColor} transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center">
                      <Icon className={`w-6 h-6 ${spec.accentColor}`} />
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-2">
                    {spec.category}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {spec.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/60">
                    {spec.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle className={`w-3.5 h-3.5 ${spec.accentColor} shrink-0 mt-0.5`} />
                        <span className="leading-snug">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Tools */}
                <div className="pt-4 border-t border-slate-800/60">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Primary Tools & Software
                  </p>
                  <p className="text-xs font-mono text-slate-300 leading-relaxed">
                    {spec.tools.join(' · ')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
