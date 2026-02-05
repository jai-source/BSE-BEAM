import React, { useEffect, useRef, useState } from 'react';
import { Building2 } from 'lucide-react';
import heroImage from "../public/img-slider-01.jpg";
import statutoryImage from "../public/img-callback.png";

// --- Utility Component for Scroll Animations ---
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
};

// --- Downloads Accordion Component ---
const DownloadsAccordion = () => {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      id: 'annual-returns',
      title: 'Annual Returns',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      count: 5,
      items: [
        { title: "Annual Returns FY 2024-25", year: "2024-25" },
        { title: "Annual Returns FY 2023-24", year: "2023-24" },
        { title: "Annual Returns FY 2022-23", year: "2022-23" },
        { title: "Annual Returns FY 2021-22", year: "2021-22" },
        { title: "Annual Returns FY 2020-21", year: "2020-21" },
      ]
    },
    {
      id: 'notices',
      title: 'Notices',
      icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
      count: 5,
      items: [
        { title: "Notice of 5th AGM", year: "2025" },
        { title: "Notice of 4th AGM", year: "2024" },
        { title: "Notice of 3rd AGM", year: "2023" },
        { title: "Notice of 2nd AGM", year: "2022" },
        { title: "Notice of 1st AGM", year: "2021" },
      ]
    }
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {sections.map((section, index) => {
        const isOpen = openSection === section.id;
        
        return (
          <FadeIn key={section.id} delay={100 * (index + 1)}>
            <div className="relative group">
              {/* Geometric shadow */}
              <div className={`absolute inset-0 bg-theme-highlight/5 transition-all duration-300 ${
                isOpen ? 'translate-x-4 translate-y-4' : 'translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3'
              }`} />
              

              
              <div className="relative bg-theme-primary border-2 border-theme-highlight/20 hover:border-theme-highlight/40 transition-all duration-300 group-hover:scale-[1.02] transform-gpu">
                {/* Header - Clickable */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-8 flex items-center justify-between cursor-pointer group/header"
                >
                  <div className="flex items-center gap-6">
                    {/* Icon */}
                    <div className={`relative transition-all duration-300 ${
                      isOpen ? 'scale-110' : 'scale-100'
                    }`}>
                      <div className={`absolute inset-0 bg-theme-highlight/10 transition-transform duration-300 ${
                        isOpen ? 'translate-x-2 translate-y-2' : 'translate-x-0 translate-y-0'
                      }`} />
                      <div className={`relative w-16 h-16 bg-theme-highlight/10 border-2 flex items-center justify-center transition-colors duration-300 ${
                        isOpen ? 'border-theme-highlight bg-theme-highlight/20' : 'border-theme-highlight/30'
                      }`}>
                        <svg className="w-8 h-8 text-theme-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={section.icon} />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Title and count */}
                    <div className="text-left">
                      <h3 className="text-2xl md:text-3xl font-black text-theme-text-primary mb-1">{section.title}</h3>
                      <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-theme-highlight/50" />
                        <span className="text-sm text-theme-highlight/60 font-mono">{section.count} Documents</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expand/Collapse indicator */}
                  <div className="flex items-center gap-4">
                    <div className={`text-xs font-mono uppercase tracking-widest transition-colors duration-300 ${
                      isOpen ? 'text-theme-highlight' : 'text-theme-text-primary/40'
                    }`}>
                      {isOpen ? 'Collapse' : 'Expand'}
                    </div>
                    <div className={`w-12 h-12 border-2 flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'border-theme-highlight bg-theme-highlight/10 rotate-180' : 'border-theme-highlight/30 rotate-0'
                    }`}>
                      <svg className="w-6 h-6 text-theme-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                {/* Content - Expandable */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="border-t-2 border-theme-highlight/20 bg-theme-highlight/5">
                    <div className="p-8 pt-6">
                      <ul className="space-y-3">
                        {section.items.map((item, i) => (
                          <li key={i} className="group/item relative">
                            <div className="absolute inset-0 bg-theme-highlight/5 translate-x-0 translate-y-0 group-hover/item:translate-x-1 group-hover/item:translate-y-1 transition-transform opacity-0 group-hover/item:opacity-100" />
                            <a 
                              href="#download" 
                              onClick={(e) => { e.preventDefault(); alert(`Downloading: ${item.title}`); }}
                              className="relative flex items-center justify-between p-4 border-l-2 border-theme-highlight/0 hover:border-theme-highlight transition-all duration-300 cursor-pointer group-hover/item:bg-theme-highlight/5"
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-2 h-2 bg-theme-highlight/50 group-hover/item:animate-pulse" />
                                <div className="flex-1">
                                  <span className="text-theme-text-primary font-medium group-hover/item:text-theme-highlight transition-colors">{item.title}</span>
                                </div>
                                <div className="px-3 py-1 border border-theme-highlight/30 text-xs font-mono text-theme-highlight/60 group-hover/item:border-theme-highlight group-hover/item:bg-theme-highlight/10">
                                  FY {item.year}
                                </div>
                              </div>
                              <div className="flex items-center gap-3 ml-4">
                                <svg className="w-5 h-5 text-theme-text-primary/30 group-hover/item:text-theme-highlight transition-colors group-hover/item:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                              </div>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
};

// --- Collapsible Downloads Section ---
const CollapsibleDownloads = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Main Download Button - Always Visible */}
      <FadeIn>
        <div className="relative group">
          <div className="absolute inset-0 bg-theme-highlight/5 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-full bg-theme-primary border-2 border-theme-highlight/20 hover:border-theme-highlight transition-all duration-300 p-8 md:p-12 group-hover:scale-[1.02] transform-gpu overflow-hidden"
          >
            {/* Animated sweep effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-theme-highlight/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-theme-highlight/10 translate-x-1 translate-y-1" />
                  <div className="relative w-20 h-20 bg-theme-highlight/10 border-2 border-theme-highlight/30 flex items-center justify-center group-hover:animate-bounce">
                    <svg className="w-10 h-10 text-theme-highlight relative z-10 group-hover:scale-125 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                
                <div className="text-left">
                  <div className="text-xs font-mono text-theme-highlight/50 uppercase tracking-widest mb-2">Compliance Documents</div>
                  <h2 className="text-4xl md:text-5xl font-black text-theme-text-primary mb-2">Downloads</h2>
                  <p className="text-theme-text-primary/60 text-sm">Access Annual Returns & AGM Notices</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="hidden sm:block text-right">
                  <div className="text-xs font-mono uppercase tracking-widest text-theme-text-primary/40 mb-1">
                    {isOpen ? 'Hide' : 'Show'}
                  </div>
                  <div className="text-sm text-theme-highlight font-bold">10 Documents</div>
                </div>
                
                <div className={`w-16 h-16 border-2 flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                  isOpen ? 'border-theme-highlight bg-theme-highlight/20 rotate-180 animate-pulse' : 'border-theme-highlight/30 rotate-0 group-hover:animate-bounce'
                }`}>
                  <svg className="w-8 h-8 text-theme-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </div>
      </FadeIn>

      {/* Expandable Content */}
      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
        isOpen ? 'max-h-[2000px] opacity-100 mt-12' : 'max-h-0 opacity-0 mt-0'
      }`}>
        <DownloadsAccordion />
      </div>
    </div>
  );
};

function Investors() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-theme-text-primary bg-theme-page-bg selection:bg-theme-highlight/30 font-sans">

      {/* ================= GLOBAL BACKGROUND FX ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(124, 207, 154, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 207, 154, 0.2) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-end overflow-hidden z-10">

        {/* Parallax Background */}
        <div className="absolute inset-0 z-0 select-none">
          <div className="absolute inset-0 bg-gradient-to-t from-theme-primary via-theme-primary/70 to-transparent z-20" />
          <img
            src={heroImage}
            alt="Investors Relations"
            className="w-full h-full object-cover scale-110 animate-[pan_30s_linear_infinite_alternate] opacity-80 mix-blend-overlay"
          />
        </div>

        <div className="relative z-30 max-w-6xl px-12 pb-24">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-theme-highlight/10 border border-theme-highlight/20 text-theme-highlight text-sm font-semibold tracking-wide uppercase hover:bg-theme-highlight/20 transition-colors cursor-default mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-highlight opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-highlight"></span>
              </span>
              Investors Relations
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight max-w-4xl group relative">
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-theme-highlight via-theme-accent to-theme-text-primary bg-[length:200%_auto] animate-[shimmer_4s_linear_infinite] relative inline-block hover:scale-105 transition-transform duration-500">
                Investor Relations
                {/* Glitch layers */}
                <span className="absolute inset-0 text-theme-highlight opacity-0 group-hover:opacity-70 transition-opacity duration-300 animate-pulse" style={{transform: 'translate(-2px, -2px)', mixBlendMode: 'screen', zIndex: -1}}>Investor Relations</span>
                <span className="absolute inset-0 text-theme-accent opacity-0 group-hover:opacity-70 transition-opacity duration-300 animate-pulse" style={{transform: 'translate(2px, 2px)', mixBlendMode: 'screen', zIndex: -1, animationDelay: '150ms'}}>Investor Relations</span>
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="mt-6 max-w-2xl text-theme-text-primary/80 text-base">
              Transparent information and engagement with our valued investors
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ================= STATS / HIGHLIGHTS STRIP - UNIQUE DESIGN ================= */}
      <section className="relative z-20 py-20 bg-theme-primary overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Growth YoY", value: "45", suffix: "%", color: "from-blue-400 to-cyan-400" },
            { label: "Market Value", value: "₹2.5", suffix: "B", color: "from-purple-400 to-pink-400" },
            { label: "Transparency", value: "100", suffix: "%", color: "from-emerald-400 to-teal-400" },
            { label: "SEBI", value: "✓", suffix: "Regulated", color: "from-amber-400 to-orange-400" },
          ].map((stat, i) => (
            <div key={i} className="relative group perspective-1000">
              <div className="absolute inset-0 bg-theme-highlight/5 translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
              <div className="relative bg-theme-primary border-2 border-theme-highlight/20 p-8 text-center group-hover:border-theme-highlight transition-all duration-500 group-hover:scale-110 group-hover:-rotate-2 group-hover:shadow-[0_20px_50px_rgba(124,207,154,0.3)] transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-br from-theme-highlight/0 via-theme-highlight/10 to-theme-highlight/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[shimmer_2s_linear_infinite]" />
                <h3 className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-500 animate-[bounce_2s_ease-in-out_infinite]`}>
                  {stat.value}<span className="text-3xl">{stat.suffix}</span>
                </h3>
                <p className="text-sm font-medium text-theme-text-primary/70 uppercase tracking-wider group-hover:text-theme-text-primary transition-colors">{stat.label}</p>
                {/* Orbiting particles */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-theme-highlight rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[spin_3s_linear_infinite]" style={{transformOrigin: '-50px -50px'}} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 1: FINANCIAL PERFORMANCE - UNIQUE LAYOUT ================= */}
      <section className="relative py-40 z-10 bg-theme-primary">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-20">
            <div className="flex items-center gap-6 mb-8">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
                BeAM <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Edge</span>
              </h2>
            </div>
            <p className="text-xl text-theme-text-primary/60 max-w-4xl">
              BSE e-Agricultural Markets (BeAM) is not just another agri-tech company — it is a purpose-built, institutional platform at the forefront of India’s agricultural market transformation. Here’s why BEAM stands out as a high-potential, credible investment opportunity:
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <FadeIn delay={100}>
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-theme-highlight/5 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                <div className="relative h-full bg-theme-primary p-8 border-2 border-theme-highlight/20 hover:border-theme-highlight transition-all duration-300 flex flex-col group-hover:shadow-[0_0_30px_rgba(124,207,154,0.4)] group-hover:scale-105 transform-gpu overflow-hidden">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-theme-highlight/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="w-12 h-12 bg-theme-highlight/10 border-2 border-theme-highlight/30 flex items-center justify-center group-hover:rotate-12 group-hover:scale-125 transition-all duration-500">
                      <svg className="w-6 h-6 text-theme-highlight group-hover:animate-bounce" fill="currentColor" viewBox="0 0 640 512">
                        <path d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM256 416c0-35.3 28.7-64 64-64s64 28.7 64 64v32H256V416zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm0 128h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zM320 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM240 208c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V208zm144-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H384c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H480c-8.8 0-16-7.2-16-16V208zM240 336c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V336zm144-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H384c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H480c-8.8 0-16-7.2-16-16V336z"/>
                      </svg>
                    </div>
                    <div className="text-xs font-mono text-theme-highlight/50">01</div>
                  </div>
                  <h3 className="text-2xl font-black text-theme-text-primary mb-4 leading-tight">
                    Institutional Integrity, Unmatched Neutrality
                  </h3>
                  <p className="text-theme-text-primary/60 leading-relaxed flex-grow text-sm">
                    BeAM operates with complete neutrality, never taking positions in any trade. As a non-proprietary platform, it purely facilitates transactions — ensuring transparent, conflict-free operations for every market participant.
                  </p>
                  <div className="mt-6 pt-4 border-t-2 border-theme-highlight/20">
                    <div className="text-xs font-bold text-theme-highlight uppercase tracking-wider">Zero Conflicts</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Profitability Card */}
            <FadeIn delay={150}>
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-theme-highlight/5 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                <div className="relative h-full bg-theme-primary p-8 border-2 border-theme-highlight/20 hover:border-theme-highlight transition-all duration-300 flex flex-col group-hover:scale-105 transform-gpu overflow-hidden">
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="w-12 h-12 bg-theme-highlight/10 border-2 border-theme-highlight/30 flex items-center justify-center group-hover:rotate-12 group-hover:scale-125 transition-all duration-500">
                      <Building2 className="w-6 h-6 text-theme-highlight group-hover:animate-bounce" />
                    </div>
                    <div className="text-xs font-mono text-theme-highlight/50">02</div>
                  </div>
                  <h3 className="text-2xl font-black text-theme-text-primary mb-4 leading-tight">
                    Credibility Rooted in Trust
                  </h3>
                  <p className="text-theme-text-primary/60 leading-relaxed flex-grow text-sm">
                    Promoted by BSE, Asia's oldest stock exchange, BeAM inherits a legacy of governance, reliability, and regulatory discipline making it a trusted partner for governments, corporates, and investors alike.
                  </p>
                  <div className="mt-6 pt-4 border-t-2 border-theme-highlight/20">
                    <div className="text-xs font-bold text-theme-highlight uppercase tracking-wider">BSE Legacy</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={200}>
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-theme-highlight/5 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                <div className="relative h-full bg-theme-primary p-8 border-2 border-theme-highlight/20 hover:border-theme-highlight transition-colors duration-300 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-theme-highlight/10 border-2 border-theme-highlight/30 flex items-center justify-center">
                      <svg className="w-6 h-6 text-theme-highlight" fill="currentColor" viewBox="0 0 512 512">
                        <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/>
                      </svg>
                    </div>
                    <div className="text-xs font-mono text-theme-highlight/50">03</div>
                  </div>
                  <h3 className="text-2xl font-black text-theme-text-primary mb-4 leading-tight">
                    Institutional Approach to Fragmented Ecosystem
                  </h3>
                  <p className="text-theme-text-primary/60 leading-relaxed flex-grow text-sm">
                    BeAM is one of only two institutional-scale players building national-level infrastructure for agri and commodity spot markets — entering this space as a robust institutional player bringing structure, scale, and systems to an otherwise opaque market
                  </p>
                  <div className="mt-6 pt-4 border-t-2 border-theme-highlight/20">
                    <div className="text-xs font-bold text-theme-highlight uppercase tracking-wider">National Scale</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Transaction Volume Card */}
            <FadeIn delay={250}>
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-theme-highlight/5 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                <div className="relative h-full bg-theme-primary p-8 border-2 border-theme-highlight/20 hover:border-theme-highlight transition-colors duration-300 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-orange-500/10 border-2 border-orange-500/30 flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 640 512">
                      <path d="M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"/>
                    </svg>
                  </div>
                    <div className="text-xs font-mono text-theme-highlight/50">04</div>
                  </div>
                  <h3 className="text-2xl font-black text-theme-text-primary mb-4 leading-tight">
                    Scalable, Multi-Commodity Business Model
                  </h3>
                  <p className="text-theme-text-primary/60 leading-relaxed flex-grow text-sm">
                    With operations spanning grains, dairy, bioenergy, steel, perishables, and more, BEAM's diversified portfolio and pan-India presence unlock long-term value with low concentration risk.
                  </p>
                  <div className="mt-6 pt-4 border-t-2 border-theme-highlight/20">
                    <div className="text-xs font-bold text-theme-highlight uppercase tracking-wider">Pan-India Reach</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card 5 */}
            <FadeIn delay={300}>
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-theme-highlight/5 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                <div className="relative h-full bg-theme-primary p-8 border-2 border-theme-highlight/20 hover:border-theme-highlight transition-colors duration-300 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-theme-highlight/10 border-2 border-theme-highlight/30 flex items-center justify-center">
                      <svg className="w-6 h-6 text-theme-highlight" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M0 64C0 28.7 28.7 0 64 0H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM256 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM384 64H64V384H384V64z"/>
                      </svg>
                    </div>
                    <div className="text-xs font-mono text-theme-highlight/50">05</div>
                  </div>
                  <h3 className="text-2xl font-black text-theme-text-primary mb-4 leading-tight">
                    Powered by Tech, Poised for Scale
                  </h3>
                  <p className="text-theme-text-primary/60 leading-relaxed flex-grow text-sm">
                    From AI-enabled analytics to blockchain-ready smart contracts and digital settlement systems, BEAM is future-ready — scaling with agility in an ecosystem demanding transparency and traceability.
                  </p>
                  <div className="mt-6 pt-4 border-t-2 border-theme-highlight/20">
                    <div className="text-xs font-bold text-theme-highlight uppercase tracking-wider">Future Ready</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Asset Quality Card */}
            <FadeIn delay={350}>
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-theme-highlight/5 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
                <div className="relative h-full bg-theme-primary p-8 border-2 border-theme-highlight/20 hover:border-theme-highlight transition-colors duration-300 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 640 512">
                      <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H516h-4-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48V304c0 26.5 21.5 48 48 48H156.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z"/>
                      </svg>
                    </div>
                    <div className="text-xs font-mono text-theme-highlight/50">06</div>
                  </div>
                  <h3 className="text-2xl font-black text-theme-text-primary mb-4 leading-tight">
                    Strong Public-Private Ecosystem
                  </h3>
                  <p className="text-theme-text-primary/60 leading-relaxed flex-grow text-sm">
                    Backed by long-term engagements with government agencies and corporate powerhouses, BEAM is deeply embedded into India's evolving agri-trade infrastructure, creating enduring growth opportunities.
                  </p>
                  <div className="mt-6 pt-4 border-t-2 border-theme-highlight/20">
                    <div className="text-xs font-bold text-theme-highlight uppercase tracking-wider">Deep Partnerships</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ================= STATUTORY DISCLOSURES AND GOVERNANCE ================= */}
      <section className="relative py-32 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-theme-primary" />
        <div className="relative max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="mb-20">
              {/* Creative geometric header */}
              <div className="flex items-start gap-8 mb-12">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                      <div className="h-1 w-24 bg-theme-highlight" />
                      <div className="h-1 w-16 bg-theme-highlight/50 mt-1" />
                      <div className="h-1 w-12 bg-theme-highlight/30 mt-1" />
                    </div>
                    <div className="relative group inline-block">
                      <div className="absolute inset-0 bg-theme-highlight/10 translate-x-1 translate-y-1" />
                      <div className="relative px-4 py-2 border-2 border-theme-highlight bg-theme-primary">
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-theme-highlight">Governance</span>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-6xl md:text-8xl font-black text-theme-text-primary leading-[0.9] mb-6">
                    Statutory<br />
                    <span className="text-theme-highlight">Disclosures</span>
                  </h2>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-theme-highlight" />
                    <div className="w-2 h-2 bg-theme-highlight/70" />
                    <div className="w-2 h-2 bg-theme-highlight/40" />
                    <p className="text-theme-text-primary/60 text-sm font-mono uppercase tracking-widest ml-2">Transparency by Design</p>
                  </div>
                </div>
                
                {/* Large geometric accent */}
                <div className="hidden lg:block relative w-96 h-96">
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={statutoryImage} 
                      alt="Statutory Disclosures" 
                      className="w-full h-full object-cover opacity-70"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="grid md:grid-cols-12 gap-8">
              {/* Left decorative panel */}
              <div className="hidden md:block md:col-span-3">
                <div className="sticky top-24">
                  <div className="space-y-4">
                    {/* Geometric decorative elements */}
                    <div className="relative h-32">
                      <div className="absolute inset-0 border-2 border-theme-highlight/20" />
                      <div className="absolute top-2 left-2 right-2 bottom-2 border-2 border-theme-highlight/10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl font-black text-theme-highlight mb-1">100%</div>
                          <div className="text-xs font-mono text-theme-highlight/60 uppercase tracking-wider">Compliant</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative h-32">
                      <div className="absolute inset-0 bg-theme-highlight/5" />
                      <div className="absolute inset-0 border-l-2 border-theme-highlight" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center px-4">
                          <div className="text-xl font-black text-theme-text-primary mb-1">SEBI</div>
                          <div className="text-xs font-mono text-theme-text-primary/60 uppercase tracking-wider">Regulated</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main content */}
              <div className="md:col-span-9">
                <div className="relative group">
                  {/* Layered geometric shadows */}
                  <div className="absolute inset-0 bg-theme-highlight/5 translate-x-6 translate-y-6 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-theme-highlight/3 translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300" />
                  
                  <div className="relative bg-theme-primary border-2 border-theme-highlight/20 hover:border-theme-highlight/40 transition-all duration-300">
                    {/* Top label bar */}
                    <div className="border-b-2 border-theme-highlight/20 p-6 bg-theme-highlight/5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-1 h-8 bg-theme-highlight" />
                          <div>
                            <div className="text-xs font-mono text-theme-highlight/60 uppercase tracking-widest mb-1">Our Commitment</div>
                            <div className="text-sm font-bold text-theme-text-primary uppercase tracking-wide">Corporate Governance Excellence</div>
                          </div>
                        </div>
                        <div className="hidden sm:flex items-center gap-2">
                          <div className="w-3 h-3 border-2 border-theme-highlight" />
                          <div className="text-xs font-mono text-theme-highlight/50">EST. 2020</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content area */}
                    <div className="p-8 md:p-12">
                      <p className="text-2xl md:text-3xl text-theme-text-primary font-light leading-relaxed mb-8">
                        BeAM is committed to upholding the <span className="text-theme-highlight font-bold relative inline-block">
                          highest standards
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-theme-highlight/30" />
                        </span> of corporate governance, ensuring transparency, accountability, and ethical conduct across all levels of the organization.
                      </p>
                      
                      <div className="relative">
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-theme-highlight/20" />
                        <p className="text-lg text-theme-text-primary/70 leading-relaxed pl-6">
                          We regularly engage with our shareholders and stakeholders to align our governance practices with their expectations and global best standards.
                        </p>
                      </div>
                      
                      {/* Bottom stats */}
                      <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t-2 border-theme-highlight/10">
                        <div>
                          <div className="text-2xl font-black text-theme-highlight mb-1">60%</div>
                          <div className="text-xs text-theme-text-primary/50 uppercase tracking-wider">Independent Directors</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-theme-highlight mb-1">4x</div>
                          <div className="text-xs text-theme-text-primary/50 uppercase tracking-wider">Annual Audits</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-theme-highlight mb-1">24/7</div>
                          <div className="text-xs text-theme-text-primary/50 uppercase tracking-wider">Compliance Monitoring</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================= SECTION 2: REPORTS & DISCLOSURES - HIDDEN DROPDOWN ================= */}
      <section className="relative py-40 z-10 bg-theme-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-1/3 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}} />
          <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[120px] animate-pulse" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <CollapsibleDownloads />
          
          {/* Governance Section */}
          <FadeIn delay={300}>
            <div className="mt-12 relative group">
              <div className="absolute inset-0 bg-theme-highlight/5 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
              <div className="relative bg-theme-primary p-12 border-2 border-theme-highlight/20 hover:border-theme-highlight transition-colors duration-300">
                <div className="grid md:grid-cols-3 gap-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-theme-highlight/10 border-2 border-theme-highlight/30 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-theme-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-theme-text-primary mb-2">Board Composition</h4>
                    <p className="text-theme-text-primary/60 text-sm">Independent directors: 60%</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-theme-highlight/10 border-2 border-theme-highlight/30 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-theme-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-theme-text-primary mb-2">Compliance Rating</h4>
                    <p className="text-theme-text-primary/60 text-sm">100% SEBI compliant</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-theme-highlight/10 border-2 border-theme-highlight/30 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-theme-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-theme-text-primary mb-2">Audit Committee</h4>
                    <p className="text-theme-text-primary/60 text-sm">Quarterly reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================= INVESTOR RELATIONS CONTACT ================= */}
      <section className="relative py-24 z-10 bg-theme-primary">
        <div className="absolute inset-0" />
        <div className="relative max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-theme-highlight font-semibold mb-4">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-theme-highlight" />
               For investor inquiries, reach out to:
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-theme-highlight" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-theme-text-primary mb-4">
                Investor Relations Contact
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg">
                <div className="text-center">
                  <p className="text-theme-text-primary/60 text-sm font-semibold uppercase tracking-wider mb-2">Email Us</p>
                  <a href="mailto:inquiry@bsebeamagri.com" className="flex items-center gap-2 text-theme-highlight hover:text-theme-accent transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    inquiry@bsebeamagri.com
                  </a>
                </div>
                <span className="text-theme-text-primary/30">|</span>
                <div className="text-center">
                  <p className="text-theme-text-primary/60 text-sm font-semibold uppercase tracking-wider mb-2">Call Us</p>
                  <a href="tel:+911244031928" className="flex items-center gap-2 text-theme-highlight hover:text-theme-accent transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91-124-4031928
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="relative group">
              <div className="absolute inset-0 bg-theme-highlight/5 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
              <div className="relative bg-theme-primary border-2 border-theme-highlight/20 hover:border-theme-highlight transition-colors duration-300 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src={statutoryImage} 
                    alt="RTA Background" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="relative p-8 md:p-12 space-y-6">
                  {/* Company Name */}
                  <div className="text-center pb-6 border-b border-theme-text-primary/10">
                    <h3 className="text-2xl md:text-3xl font-bold text-theme-text-primary mb-2">
                      Registrar and Share Transfer Agents (RTA)
                    </h3>
                    <p className="text-xl text-theme-highlight font-semibold">
                      KFin Technologies Limited
                    </p>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-theme-highlight/10 border-2 border-theme-highlight/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-theme-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-theme-text-primary/80 uppercase tracking-wide mb-2">Address</h4>
                      <p className="text-theme-text-primary/90 leading-relaxed">
                        Selenium Building, Tower-B, Plot No 31 & 32,<br />
                        Financial District, Nanakramguda, Serilingampally,<br />
                        Hyderabad, Rangareddy, Telangana India – 500 032
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-theme-highlight/10 border-2 border-theme-highlight/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-theme-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-theme-text-primary/80 uppercase tracking-wide mb-2">Phone</h4>
                      <a href="tel:+914079615565" className="text-theme-text-primary/90 hover:text-theme-highlight transition-colors text-lg">
                        +91 40 7961 5565
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-theme-highlight/10 border-2 border-theme-highlight/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-theme-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-theme-text-primary/80 uppercase tracking-wide mb-2">Website</h4>
                      <a 
                        href="https://www.kfintech.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-theme-highlight hover:text-theme-accent transition-colors text-lg font-medium underline decoration-theme-highlight/30 hover:decoration-theme-accent"
                      >
                        www.kfintech.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================= FOOTER SECTION ================= */}
      <footer className="bg-theme-primary text-theme-text-primary pt-20">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-14 pb-16">

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">
              BSE E-Agricultural Markets Limited
            </h4>
            <p className="text-theme-text-primary/70 text-sm leading-relaxed">
              Delivering value across agri-commodity ecosystems through transparent,
              secure, and scalable market infrastructure.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-theme-text-primary/70">
              <li>About Us</li>
              <li>Platforms</li>
              <li>Services</li>
              <li>Investors</li>
              <li>Compliance</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-theme-text-primary/70">
              <li>Circulars</li>
              <li>Contact</li>
              <li>Become a Member</li>
              <li>Live Auctions</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <div className="w-9 h-9 rounded-full bg-theme-text-primary/10" />
              <div className="w-9 h-9 rounded-full bg-theme-text-primary/10" />
              <div className="w-9 h-9 rounded-full bg-theme-text-primary/10" />
              <div className="w-9 h-9 rounded-full bg-theme-text-primary/10" />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-theme-text-primary/10 py-6 text-center text-xs text-theme-text-primary/60">
          © 2026 BSE E-Agricultural Markets Limited. All rights reserved.
        </div>
      </footer>

    </div>
  )
}

export default Investors

