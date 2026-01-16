
import nine from "../Assets/image-9-scaled.jpg";
import ten from "../Assets/image-10-scaled.jpg";
import React from "react";
import { Building, Users, Landmark, Handshake } from "lucide-react";
import { Globe, Leaf, Globe2, Truck,Zap, Layers, TrendingUp, FileText } from "lucide-react";
import {

  ShieldCheck,
  Settings,

  Recycle,

} from "lucide-react";
import {
  BarChart3,
  Laptop2,
  Building2,
  Briefcase,
} from "lucide-react";
import {
  Receipt,
  Wallet,
  Shuffle,
  Database,
  Store,
  Factory,
  Rocket
} from "lucide-react";
const Services = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-[#071B14] py-32 overflow-hidden">
        {/* subtle texture for depth */}
        <div
          className="absolute inset-0 bg-[radial-gradient(#0e3b2e_1px,transparent_1px)]
                     [background-size:22px_22px] opacity-30"
        />

        <div className="relative max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#6FAE9C]" />
              <p className="text-sm tracking-widest text-[#9FD6C6] font-medium">
                SUPPLY CHAINS
              </p>
            </div>

            <h1 className="text-6xl font-bold leading-tight text-white">
              Unlocking Value <br />
              Across India’s{" "}
              <span className="text-[#E24A3B]">Agri</span> <br />
              <span className="text-[#E24A3B]">and Allied Markets</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-[#CFE7DE] leading-relaxed">
              At BSE E-Agricultural Markets (BEAM), our suite of business
              verticals reflects our commitment to building a transparent,
              efficient, and tech-powered agri-trade ecosystem. From digital
              procurement to financing and consulting, each vertical is
              tailored to serve a unique need within the agricultural and
              allied sectors.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute -inset-4 bg-[#0E3B2E] rounded-2xl" />
            <img
              src={nine}
              alt="Agricultural Supply Chain"
              className="relative rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* DIRECT PROCUREMENT SECTION */}
     <section className="bg-white py-32">
  <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-12 gap-20">

    {/* LEFT CONTENT */}
    <div className="lg:col-span-7">
      <h2 className="text-5xl font-bold mb-8">
        <span className="text-[#143D2B]">Direct </span>
        <span className="text-[#C62828]">Procurement</span>
      </h2>

      <p className="text-[#2F4F43] text-lg leading-relaxed max-w-2xl mb-16">
        BeAM brings the Bharat’s farmlands closer to the India’s largest buyers —
        delivering traceable, compliant, and farmer-first procurement at scale.
        Through strong technology infrastructure, it brings verified access to
        over a million farmers and simplifies procurement for public agencies and
        private agri-enterprises alike. From digital onboarding to DBT-enabled
        payments, our platform ensures trust, speed, and scale at the grassroots.
      </p>

      <h4 className="text-xl font-semibold mb-10">
        <span className="text-[#143D2B] text-xl">Our </span>
        <span className="text-[#C62828]">Offerings</span>
      </h4>

      <div className="space-y-10 max-w-2xl">

        {[
          {
            title: "Verified Farmer Access at Scale",
            desc:
              "Over 1.17 million KYC-compliant farmers, geo-tagged and digitally profiled via UIDAI, land records, and utilities.",
          },
          {
            title: "Custom Procurement Workflows",
            desc:
              "Digitized tendering, survey, and sourcing modules — configurable for MSP, DBT, and institutional schemes.",
          },
          {
            title: "Seamless Outreach & Aggregation",
            desc:
              "Region- and crop-specific mobilization with last-mile field teams and data-driven targeting.",
          },
          {
            title: "100% Digital, Secure & Compliant",
            desc:
              "Real-time monitoring, PFMS-enabled DBT, and encrypted transactions with full audit traceability.",
          },
          {
            title: "End-to-End Automation",
            desc:
              "Auto-generated POs, receipts, payment orders, and compliance reports — eliminating manual bottlenecks.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="relative pl-8 border-l border-[#D6E5DE]"
          >
            <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#143D2B]" />
            <h5 className="font-semibold text-[#143D2B] mb-2">
              {item.title}
            </h5>
            <p className="text-sm text-[#4A6B5F] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT SIDE CARD */}
    <div className="lg:col-span-5">
      <div className="sticky top-32 bg-[#0F3B2E] rounded-2xl overflow-hidden shadow-2xl">

        <img
          src={ten}
          alt="Direct Procurement"
          className="w-full h-56 object-cover"
        />

        <div className="p-10">
          <h4 className="text-white text-lg font-semibold mb-8">
            Who <span className="text-[#C62828]">We Serve</span>
          </h4>

          <ul className="space-y-6 text-sm text-[#D7EEE6]">
            <li className="border-b border-white/10 pb-4">
              Government Procurement Agencies
            </li>
            <li className="border-b border-white/10 pb-4">
              Agribusiness Corporates & Food Brands
            </li>
            <li className="border-b border-white/10 pb-4">
              Input Companies & Contract Farming Ventures
            </li>
            <li>
              Research, Extension & Agri-Tech Bodies
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</section>

    <section className="relative bg-[#0B3B2E] text-white py-36 px-8 overflow-hidden">
      {/* Optional subtle background image */}
      <img
        src={ten}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold">
          Public Sector <span className="text-white/90">Auctions</span>
        </h2>
        <p className="mt-6 text-lg max-w-3xl mx-auto text-white/80 leading-relaxed">
          BeAM’s auction platform is purpose-built to serve government bodies, PSUs, and cooperatives — delivering compliant,
          transparent, and audit-ready digital auctions for both sale and procurement. Our platform ensures regulatory alignment, operational
          efficiency, and maximum bidder participation.
        </p>
      </div>

      {/* Features Cards */}
      <div className="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row justify-between gap-8 relative z-10">
        {[
          {
            title: "Robust Stakeholder Engagement",
            desc: "Active onboarding and handholding of bidders, suppliers, and government users across states.",
          },
          {
            title: "Govt-Grade Auction Infrastructure",
            desc: "Configurable workflows aligned with regulatory mandates, audit protocols, and SOPs.",
          },
          {
            title: "End-to-End Auction Support",
            desc: "From lot setup to award issuance — seamless execution with zero bottlenecks.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white/10 p-8 rounded-2xl flex-1 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-white/80 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Who We Serve */}
      <div className="max-w-6xl mx-auto mt-24 relative z-10">
        <h3 className="text-4xl font-bold text-center mb-12">
          Who We <span className="text-white/90">Serve</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          {[
            { icon: Building, title: "State Marketing Federations" },
            { icon: Users, title: "PSU Procurement & Disposal Divisions" },
            { icon: Landmark, title: "Government Departments & State Agencies" },
            { icon: Handshake, title: "Cooperatives & Public Institutions" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center p-8 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Icon className="w-12 h-12 mb-4 text-white" />
                <p className="text-white font-medium text-lg">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <section className="relative bg-white py-28">

  {/* subtle background accents */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-green-900/5 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-green-700/5 blur-3xl" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20">

    {/* LEFT */}
    <div className="lg:col-span-7">

      <h1 className="text-5xl font-bold leading-tight text-green-900">
        Trade <br />
        <span className="text-green-700">Connect</span>
      </h1>

      <p className="mt-6 text-gray-700 leading-relaxed max-w-xl">
        BeAM is a leading institutional-grade service provider for dynamic,
        transparent e-auctions across agri and allied sectors. Built to drive
        competitive price discovery, procurement efficiency, and trust, the
        platform seamlessly connects verified buyers and sellers through
        customized auction formats. Our proactive approach to supply-side
        mobilization—ensuring each auction has the reach, participation,
        and transparency it needs to deliver unmatched value.
      </p>

      <p className="mt-4 text-gray-700 leading-relaxed max-w-xl">
        Our flagship trade vertical facilitates real-time, transparent
        e-auctions for procurement requirements, enhancing price discovery
        and buyer-seller efficiency.
      </p>

      <div className="mt-14">
        <h3 className="text-lg font-semibold text-green-900 mb-6">
          Key <span className="text-green-700">Features</span>
        </h3>

        <div className="space-y-6">

          <div className="flex gap-5 p-5 rounded-xl bg-green-50/60 border border-green-100 transition-all duration-300 hover:bg-green-100/60 hover:translate-x-1">
            <div className="text-green-700">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="9" /></svg>
            </div>
            <div>
              <h4 className="font-semibold text-green-900">Zero-Lag Bidding Engine</h4>
              <p className="text-sm text-gray-700 mt-1">
                Real-time, high-speed auction interface with nanosecond-level timestamp traceability
              </p>
            </div>
          </div>

          <div className="flex gap-5 p-5 rounded-xl bg-green-50/60 border border-green-100 transition-all duration-300 hover:bg-green-100/60 hover:translate-x-1">
            <div className="text-green-700">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="16" height="16" /></svg>
            </div>
            <div>
              <h4 className="font-semibold text-green-900">Custom Auction Frameworks</h4>
              <p className="text-sm text-gray-700 mt-1">
                Forward and reverse-bid formats tailored for multi-sector use
              </p>
            </div>
          </div>

          <div className="flex gap-5 p-5 rounded-xl bg-green-50/60 border border-green-100 transition-all duration-300 hover:bg-green-100/60 hover:translate-x-1">
            <div className="text-green-700">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 19h18M6 17V7m6 10V7m6 10V7" /></svg>
            </div>
            <div>
              <h4 className="font-semibold text-green-900">Robust Supplier Ecosystem</h4>
              <p className="text-sm text-gray-700 mt-1">
                Deep network of verified sellers across agri, dairy, packaging, metals, and services
              </p>
            </div>
          </div>

          <div className="flex gap-5 p-5 rounded-xl bg-green-50/60 border border-green-100 transition-all duration-300 hover:bg-green-100/60 hover:translate-x-1">
            <div className="text-green-700">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20" /></svg>
            </div>
            <div>
              <h4 className="font-semibold text-green-900">Proactive Partner Onboarding</h4>
              <p className="text-sm text-gray-700 mt-1">
                Dedicated teams driving seller mobilization to boost competition and trade volumes
              </p>
            </div>
          </div>

          <div className="flex gap-5 p-5 rounded-xl bg-green-50/60 border border-green-100 transition-all duration-300 hover:bg-green-100/60 hover:translate-x-1">
            <div className="text-green-700">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /></svg>
            </div>
            <div>
              <h4 className="font-semibold text-green-900">Smart Docs & Insights</h4>
              <p className="text-sm text-gray-700 mt-1">
                Auto-generated contracts, audit-ready reports, and performance analytics for every auction
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* RIGHT */}
    
     <div className="lg:col-span-5">
  <div className="sticky top-28 rounded-2xl overflow-hidden shadow-xl bg-green-900 text-white">


        <img
          src={nine}
          alt=""
          className="w-full h-[260px] object-cover"
        />

        <div className="p-10">
          <h4 className="text-lg font-semibold mb-8">
            Who <span className="text-green-300">We Serve</span>
          </h4>

          <ul className="space-y-6 text-sm">
            <li className="flex gap-4"><span className="text-green-300">●</span>Agri & Food Processing Firms</li>
            <li className="flex gap-4"><span className="text-green-300">●</span>Dairy Cooperatives and Allied Sector Players</li>
            <li className="flex gap-4"><span className="text-green-300">●</span>Institutional Buyers and Procurement Agencies</li>
            <li className="flex gap-4"><span className="text-green-300">●</span>FPOs, Aggregators, and Exporters</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</section>
<section className="relative pt-36 pb-36 pl-32 pr-24 bg-[#071B14] overflow-hidden text-white">
  {/* CONTENT WRAPPER */}
  <div className="relative z-10 max-w-7xl mx-auto">

    {/* TOP GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h2 className="text-5xl font-bold leading-tight">
          Data Analytics &
          <span className="block text-[#FF0000] ">Consulting</span>
        </h2>

        <p className="mt-8 text-lg leading-relaxed text-white-50 max-w-xl">
          Through active partnerships, BeAM empowers stakeholders across the agri
          value chain with actionable insights, predictive intelligence, and
          strategy-backed advisory. We convert complex data into decision-ready
          intelligence.
        </p>

        {/* SERVICE ICON ROW */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-5 rounded-xl bg-white/80 shadow-md">
            <BarChart3 className="w-8 h-8 text-[#1F7A5A]" />
            <div>
              <h4 className="font-semibold text-[#1F7A5A]">Strategic Consulting</h4>
              <p className="text-sm text-[#5C746C] mt-1">
                Pricing trends, sourcing strategy, supply chain optimization
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl bg-white/80 shadow-md">
            <TrendingUp className="w-8 h-8 text-[#1F7A5A]" />
            <div>
              <h4 className="font-semibold text-[#1F7A5A]">Market Intelligence</h4>
              <p className="text-sm text-[#5C746C] mt-1">
                Commodity movements, demand shifts, policy impact
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl bg-white/80 shadow-md">
            <Laptop2 className="w-8 h-8 text-[#1F7A5A]" />
            <div>
              <h4 className="font-semibold text-[#1F7A5A]">Digital Deployment</h4>
              <p className="text-sm text-[#5C746C] mt-1">
                Analytics platforms integrated into enterprise systems
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE STACK */}
      <div className="relative">
        <div className="absolute rounded-3xl bg-gradient-to-tr from-[#DDEFE9] to-transparent blur-2xl" />
        <img
          src={ten}
          alt="Data consulting"
          className="relative rounded-3xl shadow-2xl object-cover"
        />
      </div>
    </div>

    {/* DIVIDER */}
    <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#CFE3DC] to-transparent" />

    {/* WHO WE SERVE */}
    <div>
      <h3 className="text-6xl font-bold text-center mb-20">
        Who We <span className="text-[#1F7A5A]">Serve</span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {[
          { icon: Briefcase, label: "Financial Institutions & NBFCs" },
          { icon: Building2, label: "Agri Corporates & FPOs" },
          { icon: Landmark, label: "Government & State Agencies" },
          { icon: Handshake, label: "Development Organizations & NGOs" },
          { icon: Globe, label: "Trade & Export Consortia" },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#EAF4F1] text-[#1F7A5A]">
                <Icon size={28} />
              </div>
              <p className="font-medium text-[#355E52] leading-snug">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>
<section className="relative bg-white py-40 ">

      {/* playful background shapes */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#E6F4EE] blur-3xl" />
      <div className="absolute top-1/2 -right-32 w-[460px] h-[460px] rounded-full bg-[#F0FAF6] blur-3xl" />
      <div className="absolute bottom-[-200px] left-[30%] w-[420px] h-[420px] rounded-full bg-[#EAF7F1] blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-5xl font-bold text-[#0B2F26] leading-tight">
            Trade <span className="text-[#1E8E6E]">Finance</span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-[#4B6F64] max-w-xl">
            BeAM enables seamless liquidity for agri-value chains and MSMEs.
            Our plug-and-play platforms bridge working capital gaps, enabling
            faster procurement, timely payouts, and uninterrupted trade execution —
            with zero collateral.
          </p>

          {/* OFFERINGS */}
          <div className="mt-16 space-y-6">
            {[
              {
                icon: Receipt,
                title: "End-to-End Invoice Discounting",
                desc: "Digitized invoice-based finance enabling early payments for buyers and sellers."
              },
              {
                icon: Wallet,
                title: "Working Capital as a Service",
                desc: "Collateral-free short-term liquidity aligned with procurement cycles."
              },
              {
                icon: Shuffle,
                title: "Buyer & Seller Float Solutions",
                desc: "Structured float mechanisms to bridge cash flow gaps across value chains."
              },
              {
                icon: Layers,
                title: "Embedded Finance via Fintech & NBFC Partners",
                desc: "Scalable and compliant credit disbursement through integrated lending partners."
              },
              {
                icon: Database,
                title: "Data-Driven Credit Intelligence",
                desc: "Smart underwriting using trade data and behavioral patterns."
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex gap-5 p-6 rounded-2xl bg-white shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-[#E4F1EC] hover:-translate-y-1 transition"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6F4EE] text-[#1E8E6E]">
                    <Icon size={26} />
                  </div>
                  <div>
                    <h4 className="text-[#0B2F26] font-semibold">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-[#4B6F64]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="relative">
          <div className="absolute -inset-8 rounded-[32px] bg-gradient-to-br from-[#E6F4EE] to-transparent blur-xl" />

          <div className="sticky top-32 bg-white rounded-[28px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)] border border-[#E4F1EC]">
            <img
              src={ten}
              alt="Trade Finance"
              className="w-full h-60 object-cover"
            />

            <div className="p-10">
              <h3 className="text-xl font-semibold text-[#0B2F26] mb-8">
                Who We Serve
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Agri Traders & Aggregators",
                    desc: "Liquidity support for high-volume trade cycles."
                  },
                  {
                    icon: Store,
                    title: "Input Distributors & Retail Networks",
                    desc: "Credit solutions to manage seasonal demand."
                  },
                  {
                    icon: Factory,
                    title: "Large Buyers & Food Processors",
                    desc: "Streamlined supplier payments and procurement finance."
                  },
                  {
                    icon: Rocket,
                    title: "Agri-Tech Platforms & Startups",
                    desc: "Embedded finance layers for ecosystem growth."
                  }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E6F4EE] text-[#1E8E6E]">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h5 className="text-[#0B2F26] font-medium">
                          {item.title}
                        </h5>
                        <p className="text-sm text-[#4B6F64]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  <section className="relative overflow-hidden py-40 bg-[#071B14]">

      {/* Decorative blurred circles */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-green-200/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-300px] right-[-200px] w-[620px] h-[620px] bg-emerald-300/40 rounded-full blur-[180px] pointer-events-none" />

      {/* subtle green pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#1B7F5C 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-8">

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-6xl font-bold text-white leading-tight">
              Metals
            </h1>

            <p className="mt-6 text-lg text-white max-w-xl">
              BeAM brings transparency, speed, and efficiency to the industrial
              metals trade. Whether you’re buying or selling steel, scrap, or
              alloys — our digital platforms simplify every step with trust,
              compliance, and traceability.
            </p>

            {/* FEATURES */}
            <div className="mt-14 space-y-8">

              <div className="flex gap-5">
                <BarChart3 className="w-7 h-7 text-green-700 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-white">
                    Market Intelligence & Analytics
                  </h4>
                  <p className="text-white">
                    Price trends, bidder behavior, and trade data that empower
                    smarter, faster decisions.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <ShieldCheck className="w-7 h-7 text-white mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-white">
                    Quality & Compliance Assurance
                  </h4>
                  <p className="text-white">
                    Audit trails, certifications, and digital documentation for
                    risk-free trading.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Settings className="w-7 h-7 text-white mt-1" />
                <div>
                  <h4 className="font-semibold text-lg text-white">
                    Seamless Execution Support
                  </h4>
                  <p className="text-white">
                    Logistics coordination, delivery tracking, and contract
                    lifecycle management.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative rounded-3xl overflow-hidden border-xl shadow-2xl">
            <img
              src={ten}
              alt="Metals Trading"
              className="w-full h-[420px] object-cover"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-2xl p-6">
              <p className="text-sm text-gray-700 font-medium">
                Secure, transparent, and scalable digital trading for India’s
                metals ecosystem.
              </p>
            </div>
          </div>

        </div>

        {/* WHO WE SERVE */}
        <div className="mt-40 text-center">
          <h2 className="text-6xl font-bold text-white">
            Who We <span className="text-red-600">Serve</span>
          </h2>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <Factory className="w-8 h-8 text-green-700 mx-auto mb-4" />
              <h4 className="font-semibold text-black">
                Steel Manufacturers & Processors
              </h4>
              <p className="mt-2 text-gray-600 text-sm">
                Efficient sourcing and competitive metal sales.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <Recycle className="w-8 h-8 text-green-700 mx-auto mb-4" />
              <h4 className="font-semibold text-black">
                Scrap Aggregators & Dealers
              </h4>
              <p className="mt-2 text-gray-600 text-sm">
                Wider reach with transparent price discovery.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <Building2 className="w-8 h-8 text-green-700 mx-auto mb-4" />
              <h4 className="font-semibold text-black">
                Infrastructure & Construction
              </h4>
              <p className="mt-2 text-gray-600 text-sm">
                Reliable bulk procurement of compliant steel.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
              <Landmark className="w-8 h-8 text-green-700 mx-auto mb-4" />
              <h4 className="font-semibold text-black">
                Public Sector & Institutions
              </h4>
              <p className="mt-2 text-gray-600 text-sm">
                Auditable and transparent procurement workflows.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>

<section className="relative bg-white py-32 overflow-hidden">

  {/* soft decorative geometry */}
  <div className="absolute -top-48 -left-48 w-[520px] h-[520px] bg-emerald-400/10 rounded-full blur-[140px]" />
  <div className="absolute bottom-[-280px] right-[-260px] w-[600px] h-[600px] bg-lime-300/15 rounded-full blur-[180px]" />

  {/* diagonal texture */}
  <div
    className="absolute inset-0 opacity-[0.25]"
    style={{
      backgroundImage:
        "repeating-linear-gradient(135deg, rgba(5,120,80,0.04) 0, rgba(5,120,80,0.04) 1px, transparent 1px, transparent 14px)"
    }}
  />

  <div className="relative max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-12 gap-20">

    {/* LEFT CONTENT */}
    <div className="lg:col-span-7">
      <h2 className="text-5xl font-semibold font-bold tracking-tight text-[#0b2f24]">
        Bioenergy
      </h2>

      <p className="mt-6 text-[#355f52] leading-relaxed max-w-2xl">
        BeAM fuels the future of clean energy by building trusted digital
        marketplaces for biomass, briquettes, pellets, and alternate fuels.
        Our platform enables seamless trade discovery, verified supply, and
        transparent pricing.
      </p>

      <div className="mt-16 space-y-10">

        <div className="flex items-start gap-5">
          <div className="mt-1 h-12 w-12 flex items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/25">
            <BarChart3 size={22} className="text-emerald-600" />
          </div>
          <div>
            <h4 className="font-medium text-[#0b2f24]">Smart Trading Support</h4>
            <p className="text-sm text-[#4b6f64] mt-1 max-w-xl">
              Commodity-specific services tailored to the bioenergy trade lifecycle.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div className="mt-1 h-12 w-12 flex items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/25">
            <ShieldCheck size={22} className="text-emerald-600" />
          </div>
          <div>
            <h4 className="font-medium text-[#0b2f24]">Verified & Trusted Supply Base</h4>
            <p className="text-sm text-[#4b6f64] mt-1 max-w-xl">
              Onboarded network of vetted producers and aggregators.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div className="mt-1 h-12 w-12 flex items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/25">
            <Factory size={22} className="text-emerald-600" />
          </div>
          <div>
            <h4 className="font-medium text-[#0b2f24]">Price Discovery</h4>
            <p className="text-sm text-[#4b6f64] mt-1 max-w-xl">
              Transparent pricing powered by trade data and logistics insights.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div className="mt-1 h-12 w-12 flex items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/25">
            <Truck size={22} className="text-emerald-600" />
          </div>
          <div>
            <h4 className="font-medium text-[#0b2f24]">End-to-End Logistics Coordination</h4>
            <p className="text-sm text-[#4b6f64] mt-1 max-w-xl">
              Integrated support for delivery, dispatch tracking, and payment flows.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div className="mt-1 h-12 w-12 flex items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/25">
            <Globe2 size={22} className="text-emerald-600" />
          </div>
          <div>
            <h4 className="font-medium text-[#0b2f24]">Pan-India Access</h4>
            <p className="text-sm text-[#4b6f64] mt-1 max-w-xl">
              Digital reach across major production and consumption zones.
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* RIGHT STICKY CARD */}
    <div className="lg:col-span-5">
      <div className="sticky top-32 rounded-[28px] overflow-hidden bg-[#0f3b2e] shadow-[0_30px_80px_rgba(0,0,0,0.25)]">

        <div className="relative h-[320px]">
          <img
            src={ten}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f3b2e]/90 via-transparent to-transparent" />
        </div>

        <div className="p-10 text-white">
          <h3 className="text-xl font-semibold mb-8">Who We Serve</h3>

          <div className="space-y-6 text-sm">
            <div className="flex items-center gap-4">
              <Users size={20} className="text-emerald-300" />
              Biomass Producers & Aggregators
            </div>
            <div className="flex items-center gap-4">
              <Factory size={20} className="text-emerald-300" />
              Industrial Fuel Buyers (Cement, Textile, Steel, FMCG)
            </div>
            <div className="flex items-center gap-4">
              <Leaf size={20} className="text-emerald-300" />
              Bioenergy Project Developers & EPCs
            </div>
            <div className="flex items-center gap-4">
              <Building2 size={20} className="text-emerald-300" />
              Green Energy Investors & Policy Bodies
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
<footer className="bg-[#081f18] text-white pt-20">

  <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-14 pb-16">

    {/* About */}
    <div>
      <h4 className="font-semibold mb-4">
        BSE E-Agricultural Markets Limited
      </h4>
      <p className="text-white/70 text-sm leading-relaxed">
        Delivering value across agri-commodity ecosystems through transparent,
        secure, and scalable market infrastructure.
      </p>
    </div>

    {/* Links */}
    <div>
      <h4 className="font-semibold mb-4">Company</h4>
      <ul className="space-y-2 text-sm text-white/70">
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
      <ul className="space-y-2 text-sm text-white/70">
        <li>Circulars</li>
        <li>Privacy Policy</li>
        <li>Contact</li>
        <li>Become a Member</li>
        <li>Live Auctions</li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <h4 className="font-semibold mb-4">Connect</h4>
      <div className="flex gap-4">
        <div className="w-9 h-9 rounded-full bg-white/10" />
        <div className="w-9 h-9 rounded-full bg-white/10" />
        <div className="w-9 h-9 rounded-full bg-white/10" />
        <div className="w-9 h-9 rounded-full bg-white/10" />
      </div>
    </div>

  </div>

  {/* Bottom Bar */}
  <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
    © 2026 BSE E-Agricultural Markets Limited. All rights reserved.
  </div>
</footer>
    </>
  );
};

export default Services;
