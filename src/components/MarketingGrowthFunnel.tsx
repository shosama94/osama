import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, ShieldCheck, Zap, ArrowUpRight, Search, Target, CheckCircle2, RefreshCw } from 'lucide-react';

export const MarketingGrowthFunnel: React.FC = () => {
  const [activeView, setActiveView] = useState<'funnel' | 'curve' | 'sentiment'>('funnel');
  const [tickerIndex, setTickerIndex] = useState(0);

  const liveEvents = [
    { title: 'Google SERP Rank #1', detail: 'Primary keyword group indexed on page 1', tag: 'SEO', color: 'emerald' },
    { title: '142 Verified Leads', detail: 'High-intent real estate buyers acquired via Meta', tag: 'Leads', color: 'pink' },
    { title: '96.4% Positive Sentiment', detail: '1,280 brand conversations analyzed in Meltwater', tag: 'Listening', color: 'cyan' },
    { title: 'Shopify E-Commerce Drop', detail: 'Skincare line conversion rate elevated to 4.2%', tag: 'Store', color: 'amber' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % liveEvents.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [liveEvents.length]);

  return (
    <div className="relative w-full rounded-2xl bg-[#080c14]/90 border border-slate-800 shadow-2xl shadow-cyan-950/40 overflow-hidden text-left select-none backdrop-blur-xl">
      
      {/* Top Telemetry Header */}
      <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-bold font-mono tracking-wider text-slate-200 uppercase">
            Marketing Funnel & Growth Engine
          </span>
        </div>

        {/* View Switcher using Framer Motion layoutId */}
        <div className="flex items-center gap-1 p-0.5 bg-slate-950 rounded-lg border border-slate-800 text-[11px] font-mono">
          {[
            { id: 'funnel', label: 'Funnel' },
            { id: 'curve', label: 'Growth Curve' },
            { id: 'sentiment', label: 'Sentiment' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveView(tab.id as any)}
              className="relative px-2.5 py-1 rounded-md text-xs transition-colors z-10"
            >
              {activeView === tab.id && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-cyan-500/20 border border-cyan-500/40 rounded-md -z-10 shadow-sm shadow-cyan-500/20"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
              <span className={activeView === tab.id ? 'text-cyan-300 font-bold' : 'text-slate-400 hover:text-white'}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Dynamic Animation Canvas */}
      <div className="p-5 sm:p-6 space-y-5">
        
        {/* Metric Cards Ribbon */}
        <div className="grid grid-cols-3 gap-3">
          <motion.div
            whileHover={{ y: -2 }}
            className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80"
          >
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[10px] font-mono uppercase">Organic SERP</span>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <p className="text-lg font-bold font-display text-white tabular-nums tracking-tight">
              +184.2%
            </p>
            <span className="text-[10px] text-emerald-400 font-mono">Top 3 Rankings</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -2 }}
            className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80"
          >
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[10px] font-mono uppercase">Listening Health</span>
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <p className="text-lg font-bold font-display text-white tabular-nums tracking-tight">
              96.4%
            </p>
            <span className="text-[10px] text-cyan-400 font-mono">Positive Sentiment</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -2 }}
            className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80"
          >
            <div className="flex items-center justify-between text-slate-400 mb-1">
              <span className="text-[10px] font-mono uppercase">Meta Ad ROAS</span>
              <Zap className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <p className="text-lg font-bold font-display text-white tabular-nums tracking-tight">
              4.8x
            </p>
            <span className="text-[10px] text-amber-400 font-mono">Lead Acquisition</span>
          </motion.div>
        </div>

        {/* Dynamic Visualizer Body - Driven by Framer Motion */}
        <div className="relative min-h-[200px] rounded-xl bg-slate-950/90 border border-slate-800/90 p-4 overflow-hidden flex flex-col justify-center">
          
          {/* Subtle Background Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

          {/* VIEW 1: FULL MARKETING FUNNEL ANIMATION */}
          {activeView === 'funnel' && (
            <motion.div
              key="funnel-view"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="space-y-2.5 relative z-10 w-full"
            >
              {/* Funnel Tier 1: Awareness & Impressions */}
              <motion.div
                initial={{ width: '0%', opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-2.5 rounded-lg bg-gradient-to-r from-cyan-950/70 via-blue-900/40 to-cyan-950/70 border border-cyan-500/30 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                    <Search className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white">Top Funnel: Awareness & Search</span>
                    <p className="text-[10px] text-slate-400">SEO Keyword Rank #1 · Meta Paid Ad Sets · Organic Reach</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-cyan-300">250K+</span>
                  <p className="text-[10px] text-slate-500">Impressions</p>
                </div>
              </motion.div>

              {/* Funnel Flow Particle Indicator */}
              <div className="flex justify-center -my-1">
                <motion.div
                  animate={{ y: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                />
              </div>

              {/* Funnel Tier 2: Engagement & Brand Listening */}
              <motion.div
                initial={{ width: '0%', opacity: 0 }}
                animate={{ width: '85%', opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mx-auto p-2.5 rounded-lg bg-gradient-to-r from-blue-950/70 via-indigo-900/40 to-blue-950/70 border border-blue-500/30 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-300 flex items-center justify-center">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white">Mid Funnel: Engagement & Sentiment</span>
                    <p className="text-[10px] text-slate-400">Meltwater Social Listening · Shopify Product Clicks · Story Reels</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-blue-300">18.4K</span>
                  <p className="text-[10px] text-slate-500">Engagements</p>
                </div>
              </motion.div>

              {/* Funnel Flow Particle Indicator */}
              <div className="flex justify-center -my-1">
                <motion.div
                  animate={{ y: [0, 4, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                />
              </div>

              {/* Funnel Tier 3: Conversion & Investor Leads */}
              <motion.div
                initial={{ width: '0%', opacity: 0 }}
                animate={{ width: '68%', opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mx-auto p-2.5 rounded-lg bg-gradient-to-r from-emerald-950/70 via-teal-900/40 to-emerald-950/70 border border-emerald-500/40 flex items-center justify-between shadow-lg shadow-emerald-950/30"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                    <Target className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white">Bottom Funnel: Conversions & Leads</span>
                    <p className="text-[10px] text-slate-400">Verified Investor Leads · Clinic Appointments · SAP Sync</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-emerald-300">4.8x</span>
                  <p className="text-[10px] text-slate-500">ROAS Return</p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* VIEW 2: SEO & ORGANIC GROWTH CURVE ANIMATION */}
          {activeView === 'curve' && (
            <motion.div
              key="curve-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative h-44 w-full z-10 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-cyan-300 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Google Organic Search Index</span>
                </span>
                <span className="text-emerald-400 font-bold">+184.2% Growth Velocity</span>
              </div>

              {/* Framer Motion Animated SVG Path */}
              <div className="relative h-32 w-full">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 100">
                  <defs>
                    <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="60%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                    <linearGradient id="growthFill" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Shaded Area under Curve */}
                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    d="M 0,85 Q 80,75 140,55 T 250,42 T 340,18 T 400,6 L 400,100 L 0,100 Z"
                    fill="url(#growthFill)"
                  />

                  {/* Animated Path Drawing */}
                  <motion.path
                    d="M 0,85 Q 80,75 140,55 T 250,42 T 340,18 T 400,6"
                    fill="none"
                    stroke="url(#growthGradient)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                  />

                  {/* Pulsing Coordinates Nodes */}
                  <motion.circle cx="140" cy="55" r="4" fill="#06b6d4" animate={{ r: [4, 6, 4] }} transition={{ repeat: Infinity, duration: 2 }} />
                  <motion.circle cx="250" cy="42" r="4" fill="#3b82f6" animate={{ r: [4, 6, 4] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }} />
                  <motion.circle cx="340" cy="18" r="4" fill="#10b981" animate={{ r: [4, 6, 4] }} transition={{ repeat: Infinity, duration: 2, delay: 0.8 }} />
                  <circle cx="396" cy="7" r="6" fill="#10b981" className="animate-ping" opacity="0.6" />
                  <circle cx="396" cy="7" r="4.5" fill="#ffffff" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-800/60 pt-1">
                <span>Month 1 (Audit)</span>
                <span>Month 3 (On-Page)</span>
                <span>Month 6 (Authority)</span>
                <span className="text-emerald-400 font-bold">Month 12 (SERP #1)</span>
              </div>
            </motion.div>
          )}

          {/* VIEW 3: MELTWATER SENTIMENT & BRAND LISTENING ANIMATION */}
          {activeView === 'sentiment' && (
            <motion.div
              key="sentiment-view"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="py-2 space-y-4 relative z-10 w-full text-center"
            >
              <div className="flex items-center justify-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <h4 className="text-sm font-bold font-display text-white">
                  Meltwater Corporate Brand Intelligence
                </h4>
              </div>

              {/* Animated Progress Sentiment Ring & Bar */}
              <div className="space-y-2 max-w-sm mx-auto">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Positive Consumer Sentiment</span>
                  <span className="font-mono font-bold text-cyan-300">96.4%</span>
                </div>
                <div className="h-2.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '96.4%' }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>Neutral: 3.2%</span>
                  <span>Negative Resolved: 0.4%</span>
                </div>
              </div>

              {/* Operational Response Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-300 font-mono">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                <span>Real-Time SAP S/4HANA Incident Dispatch: 100% Synced</span>
              </div>
            </motion.div>
          )}

        </div>

        {/* Live Marketing Telemetry Stream with AnimatePresence */}
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3 overflow-hidden">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800/60 shrink-0">
              {liveEvents[tickerIndex].tag}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={tickerIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="truncate"
              >
                <span className="text-xs font-semibold text-white mr-2">
                  {liveEvents[tickerIndex].title}
                </span>
                <span className="text-[11px] text-slate-400 truncate hidden sm:inline">
                  — {liveEvents[tickerIndex].detail}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[10px] font-mono text-slate-500 uppercase">Live Pipeline</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          </div>
        </div>

      </div>

      {/* Bottom Verified Technology Ribbon */}
      <div className="px-5 py-3 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <div className="flex items-center gap-3">
          <span className="text-slate-300 font-semibold">Stack:</span>
          <span>Google Search Console</span>
          <span>·</span>
          <span>Meltwater</span>
          <span>·</span>
          <span>Meta Ads Manager</span>
          <span>·</span>
          <span>SAP S/4HANA</span>
        </div>
        <span className="text-emerald-400 font-semibold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Optimized</span>
        </span>
      </div>

    </div>
  );
};
