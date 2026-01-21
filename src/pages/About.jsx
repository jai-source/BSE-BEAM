import React, { useEffect, useRef, useState } from 'react';
import heroImage from "../public/Hero-image1.png";
import boxesImage from "../public/bgn-boxes-01.jpg";
import vision1 from "../public/vision/7-very-good-reasons-to-do-master-s-in-finance.jpg";
import vision2 from "../public/vision/blog-post-14.jpg";
import vision3 from "../public/vision/Image-2-scaled.jpg";
import vision4 from "../public/vision/Image-5-scaled.jpg";
import vision5 from "../public/vision/Image-6-scaled.jpg";

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
      className={`transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } ${className}`}
    >
      {children}
    </div>
  );
};

export default function AboutUs() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-theme-text-primary bg-theme-page-bg selection:bg-theme-highlight/30 font-sans">

      {/* ================= GLOBAL BACKGROUND FX ================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Dynamic Aurora-like Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-theme-highlight/10 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-theme-accent/10 rounded-full blur-[100px] animate-[pulse_6s_ease-in-out_infinite_reverse]" />

        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay" />
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10 pt-20">

        {/* Parallax Background */}
        <div className="absolute inset-0 z-0 select-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-page-bg)]/40 via-transparent to-[var(--color-page-bg)] z-20" />
          <img
            src={heroImage}
            alt="Agricultural landscape"
            className="w-full h-full object-cover scale-110 animate-[pan_30s_linear_infinite_alternate] opacity-60 mix-blend-overlay"
          />
        </div>

        <div className="relative z-30 max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-theme-text-primary/5 border border-theme-text-primary/10 backdrop-blur-md text-theme-highlight text-sm font-semibold tracking-wide uppercase hover:bg-theme-text-primary/10 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-highlight opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-highlight"></span>
              </span>
              India's Digital Agri-Backbone
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="mt-8 text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.9]">
              Reimagining <br />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-white to-lime-300 bg-[length:200%_auto] animate-[shimmer_5s_linear_infinite]">
                Trust & Trade
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="mt-10 text-lg md:text-2xl text-theme-text-primary/70 max-w-2xl mx-auto font-light leading-relaxed">
              Where <span className="text-theme-text-primary font-medium">BSE's legacy</span> meets the future of agriculture.
              We are building the definitive digital infrastructure for a transparent, efficient Bharat.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ================= STATS / IMPACT STRIP ================= */}
      <section className="relative z-20 border-y border-theme-text-primary/5 bg-theme-text-primary/5 backdrop-blur-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { label: "BSE Heritage", value: "150+", suffix: "Years" },
            { label: "Transparency", value: "100", suffix: "%" },
            { label: "Market Reach", value: "Pan", suffix: "India" },
            { label: "Compliance", value: "SEBI", suffix: "Regulated" },
          ].map((stat, i) => (
            <div key={i} className="py-12 text-center group hover:bg-white/5 transition-colors duration-500">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}<span className="text-lime-400 text-2xl">{stat.suffix}</span>
              </h3>
              <p className="text-sm font-medium text-white/50 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= NARRATIVE SPLIT ================= */}
      <section className="relative py-40 z-10 bg-theme-page-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20">

          <FadeIn className="relative">
            <div className="absolute top-0 left-0 w-20 h-20 bg-theme-highlight/20 rounded-full blur-3xl" />
            <h2 className="text-5xl font-semibold mb-8 leading-tight">
              Transforming India's<br /> <span className="text-theme-highlight">Agri & Commodity Ecosystem</span>
            </h2>
            <div className="space-y-6 text-lg text-theme-text-primary/70 leading-relaxed">
              <p>
                BSE e-Agricultural Markets Ltd. (BeAM) is an associate company of BSE Investments Limited (a wholly owned subsidiary of Bombay Stock Exchange). The company offers platforms for national-level, transparent electronic commodity spot trading platform. Our goal is to enhance India’s agricultural market competitiveness through cutting-edge technology, efficient supply chain management, and financial integration.

The company is engaged in facilitating agri-commodity trading, connecting stakeholders across the agricultural ecosystem, and offering innovative financial solutions to enhance market access, operational efficiency, and value creation. BEAM partners with government departments, corporations, farmers, Farmer Producer Organizations (FPOs), traders, and industry associations to offer comprehensive supply chain solutions
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200} className="relative group">
            <div className="absolute inset-0 bg-theme-highlight rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
            <div className="relative h-full bg-[#0a261e] border border-white/10 rounded-3xl p-10 flex flex-col justify-center overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
              </div>
              <h3 className="text-2xl font-medium text-theme-text-primary mb-6">Sectors We Serve</h3>
              <ul className="space-y-4">
                {[
                  { 
                    name: 'Government Procurement Agencies',
                    
                    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" /></svg>
                  },
                  { 
                    name: 'Grains & Commodity Firms',
                    
                    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512"><path d="M64 96c0-35.3 28.7-64 64-64c106 0 192 86 192 192v172.1c-5.2-.7-10.6-1.1-16-1.1c-44.2 0-84.5 16.6-115.1 43.9C175.7 372.1 128 286.8 128 192c0-53-43-96-96-96C14.3 96 0 81.7 0 64S14.3 32 32 32c70.7 0 128 57.3 128 128v32H128c-70.7 0-128-57.3-128-128zm224 96c106 0 192 86 192 192c0 53-43 96-96 96s-96-43-96-96H256V192h32zm64 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                  },
                  { 
                    name: 'Food & Beverage Industry',
                    
                    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7 3V1h10v2h-2v2.275c3.175.8 5.5 3.607 5.5 6.975v8.5c0 .414-.336.75-.75.75H4.25a.75.75 0 0 1-.75-.75v-8.5c0-3.368 2.325-6.175 5.5-6.975V3H7zm2 0h6v3H9V3zm10.5 11.75c0-3.52-2.98-6.5-6.5-6.5s-6.5 2.98-6.5 6.5v7.75h13v-7.75z"/></svg>
                  },
                  { 
                    name: 'Dairy Supply Chains',
                    
                    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                  },
                  { 
                    name: 'Metal and Steel Sector',
                    
                    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.5 2.134a1 1 0 01.366 1.366L13.5 6.5h3a2 2 0 012 2v11a2 2 0 01-2 2h-9a2 2 0 01-2-2v-11a2 2 0 012-2h3l-1.366-3a1 1 0 111.732-1l2 3.464a1 1 0 01-.366 1.366L11.5 8.5v2l1.634-.817a1 1 0 011.732 1.003L13.5 13.5v4l1.634-.817a1 1 0 011.732 1.003L15.5 20H16v-12h-2v-2h-4v2h-2v12h.5l-1.366-2.684a1 1 0 011.732-1.003L10.5 17.5v-4l-1.366-2.814a1 1 0 011.732-1.003L12.5 10.5v-2l-1.366-.817a1 1 0 01-.366-1.366l2-3.464z"/></svg>
                  },
                  { 
                    name: 'Banks, NBFCs and Financial Institutions',
                    
                    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
                  },
                  { 
                    name: 'Biofuels and Bioenergy',
                    
                    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512"><path d="M32 64C32 28.7 60.7 0 96 0H256c35.3 0 64 28.7 64 64V256h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V222c-27.6-7.1-48-32.2-48-62V96L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3V376c0 39.8-32.2 72-72 72s-72-32.2-72-72V344c0-22.1-17.9-40-40-40h-8V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64zM96 80v96c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16z"/></svg>
                  }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-theme-text-primary/80 group/item hover:text-theme-text-primary transition-colors">
                    <div className="w-10 h-10 bg-theme-highlight-dim rounded-lg flex items-center justify-center text-theme-highlight group-hover/item:bg-theme-highlight/20 transition-colors">
                      {item.icon}
                    </div>
                    <span className="flex-1">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ================= MISSION & VISION CARDS ================= */}
      <section className="relative py-32 z-10 overflow-hidden">
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0">
          <img src={boxesImage} alt="" className="w-full h-full object-cover opacity-10 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-page-bg)] via-[var(--color-page-bg)]/95 to-[var(--color-page-bg)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <FadeIn className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-theme-highlight to-theme-accent rounded-[2.5rem] opacity-20 blur transition duration-500 group-hover:opacity-50" />
            <div className="relative h-full bg-theme-primary rounded-[2.5rem] p-12 border border-theme-text-primary/5 hover:border-theme-highlight/30 transition-colors duration-500">
              <div className="w-16 h-16 bg-theme-highlight-dim rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-theme-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-3xl font-semibold mb-6">Our Mission</h3>
              <p className="text-lg text-theme-text-primary/60 leading-relaxed group-hover:text-theme-text-primary/80 transition-colors">
                Strengthening the competitiveness of Indian agricultural markets through technology to maximize value creation.
              </p>
            </div>
          </FadeIn>

          {/* Vision */}
          <FadeIn delay={200} className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-500 rounded-[2.5rem] opacity-20 blur transition duration-500 group-hover:opacity-50" />
            <div className="relative h-full bg-[#081f18] rounded-[2.5rem] p-12 border border-white/5 hover:border-teal-500/30 transition-colors duration-500">
              <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-3xl font-semibold mb-6">Our Vision</h3>
              <p className="text-lg text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                To be the largest supply chain solutions platform for agriculture & food value chains, connecting suppliers to buyers in the most efficient, transparent and cost-effective way.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================= REASONS GRID ================= */}
      <section className="relative py-32 bg-white text-[#061712] rounded-t-[5rem] overflow-hidden -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
            <h2 className="text-5xl font-bold mb-6 tracking-tight">Why Choose<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-lime-600"> BeAM?</span></h2>
            <p className="text-xl text-gray-500">Built on the legacy of BSE, powered by technology, and trusted by institutions across sectors — BeAM is redefining how agricultural and allied markets connect, trade, and grow. Here's what sets us apart:</p>
          </div>

          <div className="space-y-8">
            {/* First Row - 4 items */}
            <div className="grid md:grid-cols-4 gap-8">
              {features.slice(0, 4).map((feature, idx) => (
                <div key={idx} className="group p-10 bg-gray-50 rounded-[2rem] border border-transparent hover:border-lime-200 hover:bg-white hover:shadow-2xl hover:shadow-lime-900/5 transition-all duration-500">
                  <div className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-green-700 mb-6 group-hover:bg-lime-500 group-hover:text-white transition-colors duration-500 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:translate-x-1 transition-transform">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Second Row - 3 items centered */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.slice(4, 7).map((feature, idx) => (
                <div key={idx + 4} className="group p-10 bg-gray-50 rounded-[2rem] border border-transparent hover:border-lime-200 hover:bg-white hover:shadow-2xl hover:shadow-lime-900/5 transition-all duration-500">
                  <div className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-green-700 mb-6 group-hover:bg-lime-500 group-hover:text-white transition-colors duration-500 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:translate-x-1 transition-transform">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUE WE ADD SECTION ================= */}
      <div className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[3rem] bg-[#061712] p-16 md:p-32 relative overflow-hidden">
            {/* Hover Reveal Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-lime-500/20 to-transparent opacity-30 transition-opacity duration-1000 pointer-events-none" />

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-24 text-center relative z-10">Value We Add</h2>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
              {[
                { title: 'Increased market access and trade volumes', image: vision1 },
                { title: 'Financial solutions for smoother trade flows', image: vision2 },
                { title: 'Transparency and trust', image: vision3 },
                { title: 'Quality Products and competitive pricing', image: vision4 },
                { title: 'Data-driven insights', image: vision5 }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="relative w-40 h-40 mb-12">
                    {/* Main Image with Enhanced Effects */}
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-lime-500/20 group-hover:shadow-3xl group-hover:shadow-lime-500/40 transition-all duration-700 transform group-hover:-translate-y-2 group-hover:scale-105">
                      {/* Image */}
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                      />
                      
                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-lime-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      {/* Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12" />
                      </div>
                    </div>
                    
                    {/* Mirror Reflection */}
                    <div 
                      className="absolute left-0 w-full h-40 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700"
                      style={{ 
                        top: 'calc(100% + 8px)',
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)',
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)'
                      }}
                    >
                      <div 
                        className="w-full h-full rounded-3xl overflow-hidden"
                        style={{ 
                          transform: 'scaleY(-1) translateY(-8px)',
                          filter: 'blur(1px) brightness(0.8)'
                        }}
                      >
                        <img 
                          src={item.image} 
                          alt="" 
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                        />
                      </div>
                    </div>
                    
                    {/* Glow Ring */}
                    <div className="absolute inset-0 rounded-3xl ring-2 ring-lime-400/0 group-hover:ring-lime-400/60 group-hover:scale-110 transition-all duration-700" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white/90 group-hover:text-lime-300 transition-all duration-500 leading-snug px-4">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

const features = [
  {
    title: "Backed by India's Most Trusted Exchange",
    description: "An initiative of BSE, BeAM carries forward a deep-rooted legacy of credibility, governance, and market trust.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
  },
  {
    title: "Transparency at Every Step",
    description: "We ensure 100% transparency and security in every transaction — from procurement to settlement — creating confidence across the value chain.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
  },
  {
    title: "One Platform. Many Commodities. Endless Possibilities.",
    description: "From grains to biofuels, perishables to steel — our multi-commodity digital platforms offer flexibility, scalability, and unmatched reach.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
  },
  {
    title: "Supply Chain, Simplified",
    description: "BeAM integrates the entire agri value chain — procurement, logistics, finance, and analytics — on a single, seamless interface.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
  },
  {
    title: "One MarketTruly Pan-India, Truly Connected",
    description: "With a presence that spans states, sectors, and stakeholders, BeAM is deeply embedded in the ecosystem it serves.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: "Preferred Partner for Institutions",
    description: "We’re a go-to partner for government agencies, large corporates, and financial institutions, offering reliability and neutrality they can trust.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  },
  {
    title: "Infrastructure that Powers Growth",
    description: "Our platforms are strengthened by a robust blend of financial tools, digital tech, and data intelligence — enabling smarter trade, faster outcomes.",
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  }
];
