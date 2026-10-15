import React, { useState, useRef } from 'react';
import { User, Sparkles, TrendingUp, ShieldCheck, Target, Play, Pause, Volume2, VolumeX, Video } from 'lucide-react';
import jinnahLogo from '../assets/clients/jinnah_builders.png';
import digitalGravityLogo from '../assets/clients/digital_gravity.jpg';
import reliableLogo from '../assets/clients/reliable_technical_services.png';
import capitalHealthLogo from '../assets/clients/capital_health.jpg';
import denimCraftsLogo from '../assets/clients/denim_crafts.jpeg';
import digitalExpressLogo from '../assets/clients/digital_express.png';
import nakooshVideo from '../assets/clients/nakoosh_client_campaign.mp4';

interface ClientItem {
  name: string;
  category: string;
  image?: string;
  highlight: string;
}

export const AboutSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const pillars = [
    {
      icon: TrendingUp,
      title: 'Data-Informed Organic Growth',
      description: 'Prioritizing search intent, clean crawl architectures, and content relevance over shallow hacks to build lasting search equity.'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Brand Stewardship',
      description: 'Real-time social sentiment monitoring via Meltwater to protect corporate image, address escalations, and synchronize with operations via SAP.'
    },
    {
      icon: Target,
      title: 'Conversion-Centric Creativity',
      description: 'Bridging commercial ad creative, Meta lead funnels, and Shopify user experience to translate clicks into qualified inquiries and transactions.'
    }
  ];

  const clientShowcase: ClientItem[] = [
    {
      name: 'K-Electric',
      category: 'Power Utility',
      highlight: 'Enterprise Meltwater Brand Listening & SAP S/4HANA Workflows'
    },
    {
      name: 'Dr. Shaista Lodhi (SL Creative)',
      category: 'Celebrity Aesthetic Clinic & Skincare',
      highlight: 'Shopify Store Architecture & Treatment Procedure SEO'
    },
    {
      name: 'Jinnah Builders',
      category: 'Bahria Town Real Estate',
      image: jinnahLogo,
      highlight: 'Targeted Facebook Lead Ads & Real Estate Web Architecture'
    },
    {
      name: 'Digital Gravity',
      category: 'Digital Agency',
      image: digitalGravityLogo,
      highlight: 'Technical SEO Audits, Backlink Building & SERP Intelligence'
    },
    {
      name: 'Nakoosh',
      category: 'Women Prêt Clothing Brand',
      highlight: 'Multi-Channel Social Creative & Seasonal Catalog SEO'
    },
    {
      name: 'Reliable Technical Services',
      category: 'Engineering & Services',
      image: reliableLogo,
      highlight: 'B2B Brand Footprint & Organic Search Visibility'
    },
    {
      name: 'Capital Health (CHSC)',
      category: 'Healthcare & Clinical Services',
      image: capitalHealthLogo,
      highlight: 'Digital Healthcare Marketing & Social Positioning'
    },
    {
      name: 'Denim Crafts',
      category: 'Textile & Apparel Export',
      image: denimCraftsLogo,
      highlight: 'E-commerce Media Production & Brand Presentation'
    },
    {
      name: 'Digital Express',
      category: 'Marketing Solutions',
      image: digitalExpressLogo,
      highlight: 'Paid Performance Ad Management & Social Media Handling'
    },
    {
      name: 'PARHLO Media',
      category: 'Digital Publishing',
      highlight: 'Audience Engagement Analysis & Media Creation'
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#06080d] border-t border-slate-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            <User className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Strategic Marketer with a Technical Foundation
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg leading-relaxed">
            Digital Marketer with 3+ years of specialized experience across Search Engine Optimization, social media marketing, enterprise brand listening, customer chat support, and e-commerce website management. Currently safeguarding corporate brand health for K-Electric while delivering performance marketing for consumer and enterprise brands.
          </p>
        </div>

        {/* 3 Core Strategic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-display text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Client Brands Worked With & Live Client Commercial Video Showcase */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/30 border border-slate-800/80 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <h3 className="text-base font-bold font-display text-white">
                Selected Client Brands & Live Content Video Showcase
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Verified Professional Engagements & Creative Production
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Live Playing Client Video */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group max-w-sm mx-auto">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full aspect-[9/13] object-cover cursor-pointer"
                  onClick={togglePlay}
                  title="Click to toggle playback"
                >
                  <source src={nakooshVideo} type="video/mp4" />
                </video>

                {/* Floating Media Controls */}
                <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white transition-colors"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white transition-colors"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
                  </button>
                </div>

                {/* Video Info Tag */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-left">
                  <div className="flex items-center gap-1.5 text-pink-400 text-[10px] font-mono uppercase font-bold mb-0.5">
                    <Video className="w-3 h-3" />
                    <span>Commercial Client Video Reel</span>
                  </div>
                  <p className="text-xs font-bold text-white">
                    Nakoosh - Maisori Prêt Collection Drop
                  </p>
                  <p className="text-[11px] text-slate-300 leading-tight mt-0.5">
                    Short-form creative video reel driving customer inquiries & social orders.
                  </p>
                </div>
              </div>
              <p className="text-center text-[11px] text-slate-500">
                Live commercial asset produced for client seasonal collection drop
              </p>
            </div>

            {/* Clean Client Logos Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {clientShowcase.map((client, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all flex items-center gap-3.5 text-left group"
                  >
                    {/* Client Logo Image Container */}
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 p-1.5 flex items-center justify-center shrink-0 overflow-hidden group-hover:border-slate-700 transition-colors">
                      {client.image ? (
                        <img
                          src={client.image}
                          alt={`${client.name} logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <span className="text-xs font-bold font-display text-cyan-400 tracking-wider">
                          {client.name.split(' ').map(w => w[0]).join('').slice(0, 3)}
                        </span>
                      )}
                    </div>

                    <div className="space-y-0.5 min-w-0">
                      <p className="text-sm font-bold text-slate-100 truncate group-hover:text-cyan-300 transition-colors">
                        {client.name}
                      </p>
                      <p className="text-[11px] text-cyan-400 font-medium">
                        {client.category}
                      </p>
                      <p className="text-[11px] text-slate-400 truncate leading-snug">
                        {client.highlight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
