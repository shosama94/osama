import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, ShieldCheck, Activity, Share2, Zap, ArrowUpRight } from 'lucide-react';

export const MarketingAnimation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'seo' | 'listening' | 'leads'>('seo');
  const [tickerIndex, setTickerIndex] = useState(0);

  const tickerEvents = [
    { text: 'Keyword "Aesthetic Clinic Karachi" moved to #1 on Google SERP', tag: 'SEO', color: 'text-emerald-400' },
    { text: 'Meltwater: 1,280 brand mentions analyzed for K-Electric (94% Positive)', tag: 'Listening', color: 'text-cyan-400' },
    { text: 'Meta Lead Ads: 142 high-net-worth real estate leads captured', tag: 'Ads', color: 'text-pink-400' },
    { text: 'SAP S/4HANA: Case escalation resolution time decreased by 38%', tag: 'CX', color: 'text-amber-400' },
    { text: 'Shopify Store: Organic conversion rate elevated to 4.2%', tag: 'E-com', color: 'text-blue-400' }
  ];

  // Rotate live telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerEvents.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [tickerEvents.length]);

  return (
    <div className="relative w-full rounded-2xl bg-slate-950/80 border border-slate-800 shadow-2xl shadow-cyan-950/30 overflow-hidden text-left select-none backdrop-blur-xl">
      {/* Top Futuristic Command Header */}
      <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-bold font-mono tracking-wider text-slate-200 uppercase">
            Marketing Command Engine
          </span>
        </div>

        {/* Channel Switcher */}
        <div className="flex items-center gap-1 p-0.5 bg-slate-950 rounded-lg border border-slate-800 text-[11px] font-mono">
          <button
            onClick={() => setActiveTab('seo')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'seo' ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            SEO
          </button>
          <button
            onClick={() => setActiveTab('listening')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'listening' ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Meltwater
          </button>
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'leads' ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Meta Ads
          </button>
        </div>
      </div>

      {/* Main Visual Animation Canvas */}
      <div className="p-5 sm:p-6 space-y-5">
        
        {/* Dynamic Metric Cards */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[10px] font-mono uppercase">Organic Visibility</span>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <p className="text-lg font-bold font-display text-white tabular-nums tracking-tight">
              +184.2%
            </p>
            <span className="text-[10px] text-emerald-400 font-mono">Top 3 SERP Dominance</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[10px] font-mono uppercase">Meltwater Sentiment</span>
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <p className="text-lg font-bold font-display text-white tabular-nums tracking-tight">
              96.4%
            </p>
            <span className="text-[10px] text-cyan-400 font-mono">Brand Health Index</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[10px] font-mono uppercase">Paid Funnel ROAS</span>
              <Zap className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <p className="text-lg font-bold font-display text-white tabular-nums tracking-tight">
              4.8x
            </p>
            <span className="text-[10px] text-amber-400 font-mono">Targeted Investor CPL</span>
          </div>
        </div>

        {/* Animated Marketing Graph with Scanline & Floating Nodes */}
        <div className="relative h-44 rounded-xl bg-slate-950/90 border border-slate-800/80 p-3 overflow-hidden">
          
          {/* Subtle Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

          {/* Animated SVG Chart Line */}
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 120">
            <defs>
              <linearGradient id="gradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
              <linearGradient id="gradientArea" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Shaded Area under Curve */}
            <path
              d="M 0,95 Q 60,85 110,65 T 210,50 T 310,25 T 400,10 L 400,120 L 0,120 Z"
              fill="url(#gradientArea)"
            />

            {/* Glowing Trend Line with Pulse */}
            <path
              d="M 0,95 Q 60,85 110,65 T 210,50 T 310,25 T 400,10"
              fill="none"
              stroke="url(#gradientLine)"
              strokeWidth="3.5"
              strokeLinecap="round"
              className="drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            />

            {/* Animated Data Pulse Nodes */}
            <circle cx="110" cy="65" r="4.5" fill="#06b6d4" className="animate-pulse" />
            <circle cx="210" cy="50" r="4.5" fill="#3b82f6" className="animate-pulse" />
            <circle cx="310" cy="25" r="4.5" fill="#10b981" className="animate-pulse" />
            <circle cx="395" cy="11" r="6" fill="#10b981" className="animate-ping" opacity="0.6" />
            <circle cx="395" cy="11" r="5" fill="#ffffff" />
          </svg>

          {/* Floating Live Badges over the Graph */}
          <div className="absolute top-3 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/60 text-[10px] font-mono text-cyan-300">
            <Activity className="w-3 h-3 text-cyan-400 animate-spin" />
            <span>SEO Crawl & SERP Tracker Active</span>
          </div>

          <div className="absolute bottom-3 right-4 flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-800/60 text-[10px] font-mono text-emerald-300">
            <span>Peak Velocity: High</span>
            <ArrowUpRight className="w-3 h-3 text-emerald-400" />
          </div>
        </div>

        {/* Live Marketing Telemetry Stream */}
        <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-3 overflow-hidden">
          <div className="flex items-center gap-2 min-w-0">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-400 border border-cyan-800 shrink-0">
              {tickerEvents[tickerIndex].tag}
            </span>
            <p className="text-xs text-slate-300 truncate font-mono">
              {tickerEvents[tickerIndex].text}
            </p>
          </div>

          <span className="text-[10px] font-mono text-slate-500 shrink-0">
            LIVE SYNC
          </span>
        </div>

      </div>

      {/* Bottom Technology Ribbon */}
      <div className="px-5 py-3 bg-slate-900/50 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Search className="w-3 h-3 text-cyan-400" />
            <span>SEMrush</span>
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Activity className="w-3 h-3 text-emerald-400" />
            <span>Meltwater</span>
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Share2 className="w-3 h-3 text-pink-400" />
            <span>Meta Ads</span>
          </span>
        </div>
        <span className="text-emerald-400 font-semibold">100% Operational</span>
      </div>
    </div>
  );
};
