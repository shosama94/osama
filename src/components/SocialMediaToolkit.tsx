import React, { useState } from 'react';
import { Share2, Calculator, Sparkles, Copy, Check, TrendingUp, Info, Hash, FileText } from 'lucide-react';
import { playSuccessSound } from '../utils/sound';

export const SocialMediaToolkit: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'hooks'>('calculator');

  // Tab 1: Calculator State
  const [platform, setPlatform] = useState<'instagram' | 'linkedin' | 'facebook'>('instagram');
  const [followers, setFollowers] = useState<number>(10000);
  const [likes, setLikes] = useState<number>(380);
  const [comments, setComments] = useState<number>(45);
  const [sharesSaves, setSharesSaves] = useState<number>(85);

  // Tab 2: Hook Generator State
  const [objective, setObjective] = useState<'hook' | 'authority' | 'lead' | 'ecommerce'>('hook');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [captionDraft, setCaptionDraft] = useState<string>('');

  // Calculate Engagement Rate
  const totalInteractions = (Number(likes) || 0) + (Number(comments) || 0) + (Number(sharesSaves) || 0);
  const engagementRate = followers > 0 ? ((totalInteractions / followers) * 100).toFixed(2) : '0.00';
  const numericRate = parseFloat(engagementRate);

  // Benchmarks
  const getBenchmark = (rate: number, plat: string) => {
    if (plat === 'linkedin') {
      if (rate >= 4.0) return { label: 'Top Tier Viral Reach', color: 'text-emerald-400', badge: 'bg-emerald-950/60 border-emerald-800' };
      if (rate >= 2.0) return { label: 'Above Average B2B Engagement', color: 'text-cyan-400', badge: 'bg-cyan-950/60 border-cyan-800' };
      return { label: 'Average B2B Engagement', color: 'text-amber-400', badge: 'bg-amber-950/60 border-amber-800' };
    }
    // Instagram / Facebook
    if (rate >= 5.0) return { label: 'Exceptional Viral Performance', color: 'text-emerald-400', badge: 'bg-emerald-950/60 border-emerald-800' };
    if (rate >= 3.0) return { label: 'Strong Organic Engagement', color: 'text-cyan-400', badge: 'bg-cyan-950/60 border-cyan-800' };
    if (rate >= 1.5) return { label: 'Industry Average', color: 'text-amber-400', badge: 'bg-amber-950/60 border-amber-800' };
    return { label: 'Needs Optimization', color: 'text-rose-400', badge: 'bg-rose-950/60 border-rose-800' };
  };

  const benchmark = getBenchmark(numericRate, platform);

  // Hooks Repository
  const hookPresets = {
    hook: [
      { id: 'h1', text: '90% of brands make this exact mistake with their organic social strategy...' },
      { id: 'h2', text: 'Here is the step-by-step framework we used to 3x engagement in 60 days:' },
      { id: 'h3', text: 'Stop posting daily until you fix this single metric in your content calendar.' },
      { id: 'h4', text: 'The secret to building brand loyalty without spending thousands on paid ads:' }
    ],
    authority: [
      { id: 'a1', text: 'Over the past 3 years managing corporate brand listening, one truth became crystal clear:' },
      { id: 'a2', text: 'Data always tells a story before revenue does. Here is how we track sentiment:' },
      { id: 'a3', text: 'Case Study: How addressing customer escalations within 15 minutes protected corporate reputation.' }
    ],
    lead: [
      { id: 'l1', text: 'Looking for verified investor opportunities? Here is our comprehensive market overview:' },
      { id: 'l2', text: 'Comment "AUDIT" below and I will send you our 10-point organic checklist directly.' },
      { id: 'l3', text: 'Ready to transform your search rankings? Book a 15-minute strategy consultation today.' }
    ],
    ecommerce: [
      { id: 'e1', text: 'The wait is over. Our exclusive festive collection is officially live online!' },
      { id: 'e2', text: 'Handcrafted precision meets modern elegance. Swipe to explore the details:' },
      { id: 'e3', text: 'Limited quantity restock: Tap the link in bio to secure yours before it sells out.' }
    ]
  };

  const handleCopyHook = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    playSuccessSound();
    setTimeout(() => setCopiedId(null), 2000);
  };

  const hashtagCount = (captionDraft.match(/#[a-zA-Z0-9_]+/g) || []).length;
  const charLimit = platform === 'linkedin' ? 3000 : 2200;

  return (
    <section className="py-20 md:py-28 bg-[#05070c] border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              <Share2 className="w-3.5 h-3.5" />
              <span>Interactive Social Toolkit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Social Media Growth & Engagement Studio
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              A practical utility designed for content strategists and brand managers to benchmark performance and craft high-converting hooks.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'calculator'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Engagement Calculator</span>
            </button>

            <button
              onClick={() => setActiveTab('hooks')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'hooks'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hook & Caption Studio</span>
            </button>
          </div>
        </div>

        {/* TAB 1: ENGAGEMENT CALCULATOR */}
        {activeTab === 'calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Select Channel
                </span>

                <div className="flex items-center gap-1">
                  {(['instagram', 'linkedin', 'facebook'] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPlatform(p)}
                      className={`px-3 py-1 rounded-md text-xs font-mono capitalize transition-all ${
                        platform === p
                          ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40'
                          : 'text-slate-400 hover:text-white bg-slate-950 border border-slate-800'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders & Inputs */}
              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between mb-1.5">
                    <label className="text-slate-300 font-medium">Follower Count</label>
                    <span className="font-mono text-cyan-300 font-bold">{followers.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="200000"
                    step="1000"
                    value={followers}
                    onChange={(e) => setFollowers(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="space-y-1">
                    <label className="text-slate-400">Avg. Likes</label>
                    <input
                      type="number"
                      value={likes}
                      onChange={(e) => setLikes(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-xs focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-400">Avg. Comments</label>
                    <input
                      type="number"
                      value={comments}
                      onChange={(e) => setComments(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-xs focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-400">Shares / Saves</label>
                    <input
                      type="number"
                      value={sharesSaves}
                      onChange={(e) => setSharesSaves(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white font-mono text-xs focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Formulated using industry formula: (Total Likes + Comments + Shares) / Followers × 100</span>
              </div>
            </div>

            {/* Results Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Calculated Benchmark
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${benchmark.badge} ${benchmark.color}`}>
                  {benchmark.label}
                </span>
              </div>

              <div className="py-2 text-center border-y border-slate-800/80">
                <p className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight tabular-nums">
                  {engagementRate}%
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Average Engagement Rate per Post
                </p>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Total Interactions per Post:</span>
                  <span className="font-mono font-bold text-white">{totalInteractions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Active Channel:</span>
                  <span className="font-mono text-cyan-400 capitalize">{platform}</span>
                </div>
              </div>

              {/* Strategic Tip */}
              <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-800/40 text-xs text-slate-300 space-y-1">
                <p className="font-bold text-cyan-300 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Strategic Optimization Tip</span>
                </p>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {numericRate >= 3.0
                    ? 'High performance detected. Leverage top-performing creative hooks for retargeting ad sets to maximize return.'
                    : 'Increase saves and shares by packaging educational insights into carousel slides and adding clear conversational CTAs.'}
                </p>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: HOOK GENERATOR & CAPTION COUNTER */}
        {activeTab === 'hooks' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Hook Selector */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Content Objective
                </span>

                <div className="flex flex-wrap gap-1">
                  {[
                    { id: 'hook', label: 'Scroll Stopper' },
                    { id: 'authority', label: 'Authority & CX' },
                    { id: 'lead', label: 'Lead Gen' },
                    { id: 'ecommerce', label: 'E-Commerce' }
                  ].map((obj) => (
                    <button
                      key={obj.id}
                      onClick={() => setObjective(obj.id as any)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                        objective === obj.id
                          ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40'
                          : 'text-slate-400 hover:text-white bg-slate-950 border border-slate-800'
                      }`}
                    >
                      {obj.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Hook Presets */}
              <div className="space-y-2.5">
                {hookPresets[objective].map((hook) => (
                  <div
                    key={hook.id}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex items-center justify-between gap-3 text-xs"
                  >
                    <p className="text-slate-200 leading-snug">
                      "{hook.text}"
                    </p>

                    <button
                      onClick={() => handleCopyHook(hook.id, hook.text)}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0 flex items-center gap-1 font-mono text-[11px]"
                      title="Copy hook to clipboard"
                    >
                      {copiedId === hook.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Caption Formatter & Counter */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                  Caption Drafting Pad
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  {captionDraft.length} / {charLimit} chars
                </span>
              </div>

              <textarea
                rows={5}
                value={captionDraft}
                onChange={(e) => setCaptionDraft(e.target.value)}
                placeholder="Paste or draft your post copy here to test length and hashtag density..."
                className="w-full p-3 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none font-sans"
              />

              {/* Real-Time Stats */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-left">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-0.5">
                    <Hash className="w-3 h-3 text-cyan-400" />
                    <span>Hashtags</span>
                  </div>
                  <p className="text-sm font-bold font-mono text-white">
                    {hashtagCount} tags
                  </p>
                  <span className="text-[10px] text-slate-500">
                    {hashtagCount > 5 ? 'High density (3-5 optimal)' : 'Optimal density'}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-left">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-0.5">
                    <FileText className="w-3 h-3 text-amber-400" />
                    <span>Readability</span>
                  </div>
                  <p className="text-sm font-bold font-mono text-white">
                    {captionDraft.length > 500 ? 'Deep Dive' : 'Fast Hook'}
                  </p>
                  <span className="text-[10px] text-slate-500">
                    {captionDraft.length > 500 ? 'Best for LinkedIn' : 'Best for IG / Meta'}
                  </span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
