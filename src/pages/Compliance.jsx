import React from "react";
import { ShieldCheck, Download } from "lucide-react";
import businessPartners from "../public/business-partners-checking-signing-document-scaled.jpg";
import busyProfessional from "../public/busy-professional-looking-businesspeople-writing-scaled.jpg";
import qualityControl from "../public/standard-quality-control-collage-concept-scaled.jpg";

function Compliance() {
  return (
    <>
      {/* EPIC HERO SECTION - FULL VIEWPORT */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#071B14] via-[#0B2820] to-[#143D2B] flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Radial gradient circles */}
          <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-[#6FAE9C] rounded-full blur-[140px] opacity-10 animate-pulse" />
          
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 bg-[radial-gradient(#0e3b2e_1px,transparent_1px)]
                       [background-size:40px_40px] opacity-20"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-16 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* LEFT - CONTENT */}
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-[#6FAE9C]/30">
              <div className="w-2 h-2 bg-[#6FAE9C] rounded-full animate-pulse" />
              <span className="text-xs tracking-[0.3em] text-[#9FD6C6] font-semibold uppercase">
                Governance & Transparency
              </span>
            </div>

            {/* Title */}
            <h1 className="text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
              <span className="text-white block mb-2">Downloads</span>
              <span className="text-white block mb-2">and</span>
              <span className="text-[#E24A3B] block">
                Compliance
              </span>
            </h1>

            {/* Decorative line */}
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-20 bg-gradient-to-r from-[#6FAE9C] to-transparent" />
              <ShieldCheck className="text-[#6FAE9C]" size={24} />
            </div>
          </div>

          {/* RIGHT - IMAGE PLACEHOLDER */}
          <div className="relative group">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E24A3B] to-[#6FAE9C] rounded-3xl blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-[#0E3B2E] to-[#1B5840] rounded-3xl p-8 border border-[#6FAE9C]/20 backdrop-blur-sm shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
              <img 
                src={businessPartners} 
                alt="Business Partners" 
                className="aspect-[4/3] rounded-2xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[#9FD6C6]/60 text-xs tracking-widest">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#6FAE9C] to-transparent" />
        </div>
      </section>

      {/* MAIN CONTENT SECTION - CENTERED & EPIC */}
      <section className="relative bg-white py-32 lg:py-40 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E24A3B] to-transparent" />
        
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          {/* Content blocks */}
          <div className="space-y-16">
            {/* Block 1 */}
            <div className="group">
              <div className="relative pl-12 border-l-4 border-[#143D2B] hover:border-[#E24A3B] transition-colors duration-300">
                <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#143D2B] group-hover:bg-[#E24A3B] transition-colors duration-300 ring-4 ring-white shadow-lg" />
                
                <p className="text-2xl lg:text-3xl font-light leading-relaxed text-[#2F4F43]">
                  At <span className="font-bold text-[#143D2B]">BSE E-Agricultural Markets (BEAM)</span>, 
                  we uphold the <span className="font-semibold text-[#E24A3B]">highest standards of governance, 
                  transparency, and accountability</span> in every aspect of our operations. As part of the 
                  BSE ecosystem, our platforms, processes, and transactions adhere to all applicable 
                  <span className="font-semibold text-[#143D2B]"> legal, regulatory, and policy frameworks</span> governing 
                  commodity spot markets in India.
                </p>
              </div>
            </div>

            {/* Image Placeholder - Middle */}
            <div className="relative my-20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#143D2B] to-[#6FAE9C] blur-[80px] opacity-20" />
              <div className="relative bg-gradient-to-br from-[#0E3B2E] to-[#1B5840] rounded-3xl p-12 border border-[#6FAE9C]/30">
                <img 
                  src={busyProfessional} 
                  alt="Professional Business Environment" 
                  className="aspect-[21/9] rounded-2xl object-cover w-full"
                />
              </div>
            </div>

            {/* Block 2 */}
            <div className="group">
              <div className="relative pl-12 border-l-4 border-[#E24A3B] hover:border-[#143D2B] transition-colors duration-300">
                <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-[#E24A3B] group-hover:bg-[#143D2B] transition-colors duration-300 ring-4 ring-white shadow-lg" />
                
                <p className="text-2xl lg:text-3xl font-light leading-relaxed text-[#2F4F43]">
                  We are committed to <span className="font-bold text-[#E24A3B]">maintaining institutional integrity</span>, 
                  ensuring <span className="font-semibold text-[#143D2B]">data security</span>, and operating within a 
                  fully <span className="font-semibold text-[#E24A3B]">compliant, audit-ready environment</span> — 
                  reinforcing trust among all stakeholders, from 
                  <span className="font-semibold text-[#143D2B]"> government bodies and corporates to farmers and investors</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD BUTTON SECTION */}
      <section className="relative bg-white py-20">
        <div className="max-w-5xl mx-auto px-8 lg:px-16 flex justify-center">
          <a 
            href="#" 
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#143D2B] to-[#1B5840] rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(20,61,43,0.4)] transition-all duration-500 hover:scale-105"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E24A3B] to-[#FF6B5E] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors duration-300">
                <Download size={28} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-xl tracking-wide">Download Form 5A</p>
                <p className="text-white/70 text-sm mt-1">Compliance Documentation</p>
              </div>
            </div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </a>
        </div>
      </section>

      {/* BOTTOM IMAGE PLACEHOLDER SECTION */}
      <section className="relative bg-gradient-to-b from-[#071B14] to-[#000000] py-32">
        <div className="max-w-6xl mx-auto px-8 lg:px-16">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6FAE9C] via-[#E24A3B] to-[#6FAE9C] rounded-3xl blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
            
            {/* Placeholder card */}
            <div className="relative bg-gradient-to-br from-[#0E3B2E] to-[#1B5840] rounded-3xl p-16 border border-[#6FAE9C]/20">
              <img 
                src={qualityControl} 
                alt="Quality Control Standards" 
                className="aspect-[16/9] rounded-2xl object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="relative bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Registered Office */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#143D2B] mb-4">
                  BSE E-Agricultural Markets Limited
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-[#E24A3B] to-transparent mb-6" />
              </div>
              
              <div>
                <h4 className="text-[#143D2B] font-semibold text-sm tracking-wider uppercase mb-3">
                  Registered Office
                </h4>
                <p className="text-[#2F4F43] leading-relaxed">
                  25th Floor, P. J. Towers, Dalal Street, Fort, Mumbai,<br />
                  Mumbai City, Maharashtra, India, 400001
                </p>
              </div>

              <div className="pt-4 space-y-2">
                <p className="text-[#2F4F43] text-sm">
                  <span className="text-[#143D2B] font-semibold">CIN:</span> U01400MH2020PLC350979
                </p>
                <a 
                  href="mailto:inquiry@bsebeamagri.com" 
                  className="text-[#E24A3B] hover:text-[#FF6B5E] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="text-lg">✉</span>
                  <span className="group-hover:underline">inquiry@bsebeamagri.com</span>
                </a>
              </div>
            </div>

            {/* NCR Office */}
            <div className="space-y-6">
              <div>
                <h4 className="text-[#143D2B] font-semibold text-sm tracking-wider uppercase mb-3">
                  NCR Office
                </h4>
                <p className="text-[#2F4F43] leading-relaxed">
                  Unit No. 319, Suncity Success Towers,<br />
                  Sector 65, Golf Course Extension Road,<br />
                  Gurugram, Haryana, India – 122018
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#4A6B5F] text-sm">
                © {new Date().getFullYear()} BSE E-Agricultural Markets Limited. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#6FAE9C]" />
                <span className="text-[#4A6B5F] text-sm">Compliance & Governance</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Compliance
