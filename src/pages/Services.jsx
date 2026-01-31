
import nine from "../Assets/image-9-scaled.jpg";
import ten from "../Assets/image-10-scaled.jpg";
import { motion } from "framer-motion";

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
     <section className="relative bg-[#EEF3F8] py-48 overflow-hidden">

  {/* neon dot texture */}
  <div className="absolute inset-0 bg-[radial-gradient(#4DA3FF_0.8px,transparent_1px)]
                  [background-size:26px_26px] opacity-20" />

  {/* asymmetric glow blobs */}
  <div className="absolute -top-40 -left-40 w-[520px] h-[520px]
                  bg-[#4DA3FF]/20 blur-[160px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-[420px] h-[420px]
                  bg-[#F4C430]/20 blur-[140px] rounded-full" />

  <div className="relative max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-24 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* label */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex items-center gap-4 mb-10"
      >
        <span className="w-14 h-[2px] bg-[#F4C430]" />
        <p className="text-xs tracking-[0.35em] text-black font-semibold">
          SUPPLY CHAINS
        </p>
      </motion.div>

      {/* headline with inline typewriter */}
      <motion.h1
        className="text-6xl font-extrabold leading-tight text-green-900"
      >
        {"Unlocking Value".split("").map((c, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
          >
            {c === " " ? "\u00A0" : c}
          </motion.span>
        ))}
        <br />

        <span className="text-[#4DA3FF] [text-shadow:0_0_14px_#4DA3FF66]">
          {"Across India’s".split("").map((c, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.04 }}
            >
              {c === " " ? "\u00A0" : c}
            </motion.span>
          ))}
        </span>
        <br />

        <span className="text-[#F4C430] [text-shadow:0_0_16px_#F4C43066]">
          {"Agri & Allied Markets".split("").map((c, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 + i * 0.04 }}
            >
              {c === " " ? "\u00A0" : c}
            </motion.span>
          ))}
        </span>
      </motion.h1>

      {/* description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.8 }}
        className="mt-12 max-w-xl text-lg text-black leading-relaxed"
      >
        Building a transparent, efficient, and tech-powered
        agricultural ecosystem — connecting Bharat’s farms
        directly with India’s most trusted institutions.
      </motion.p>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      <div className="absolute -inset-6 rotate-3 bg-[#123E32] ml-32 opacity-60 rounded-[28px]" />
      <div className="absolute -inset-6 -rotate-2 border ml-32 border-[#4DA3FF]/40 rounded-[28px]" />

      <img
        src={nine}
        alt="Agri Supply Chain"
        className="relative rounded-[24px] ml-28 w-[480px] object-cover
                   shadow-[0_0_70px_#4DA3FF33]"
      />
    </motion.div>

  </div>
</section>


  <section className="relative pt-40 pb-40 px-24 bg-[#07140f] text-white overflow-hidden">

  {/* ================= SUBTLE DATA GRID ================= */}
  <div className="absolute inset-0 bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)]
                  bg-[size:72px_72px] opacity-[0.08]" />

  {/* ================= DIAGONAL PLANES ================= */}
  <div className="absolute -top-48 -left-56 w-[560px] h-[560px]
                  bg-gradient-to-br from-[#1F7A5A]/40 to-transparent
                  rotate-[25deg] blur-3xl pointer-events-none" />

  <div className="absolute bottom-[-300px] right-[-280px] w-[620px] h-[620px]
                  bg-gradient-to-tr from-[#4DA3FF]/35 to-transparent
                  rotate-[-18deg] blur-3xl pointer-events-none" />

  {/* ================= NEON AXIS ================= */}
  <div className="absolute top-0 left-[20%] w-[2px] h-full bg-[#F4C430]/30 blur-sm" />
  <div className="absolute top-0 right-[26%] w-[1px] h-full bg-[#4DA3FF]/25 blur-sm" />

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* ================= TOP GRID ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      {/* ================= LEFT CONTENT ================= */}
      <div className="relative">

        {/* vertical signal bar */}
        <div className="absolute -left-8 top-8 w-1 h-28 bg-[#F4C430]
                        shadow-[0_0_18px_rgba(244,196,48,0.8)]" />

        <h2 className="text-6xl font-extrabold leading-tight">
          Public Sector{" "}
          <span className="block text-[#F4C430]
                           [text-shadow:0_0_24px_#F4C43066]">
            Auctions
          </span>
        </h2>

        <p className="mt-10 text-lg leading-relaxed text-white/75 max-w-xl">
          BeAM’s auction platform is purpose-built for government bodies, PSUs,
          and cooperatives — delivering compliant, transparent, and audit-ready
          digital auctions with maximum bidder participation and zero friction.
        </p>

        {/* ================= FEATURES ================= */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">

          {[
            {
              title: "Robust Stakeholder Engagement",
              desc: "Active onboarding, bidder outreach, and continuous handholding across states and institutions.",
            },
            {
              title: "Govt-Grade Auction Infrastructure",
              desc: "Highly configurable workflows aligned with SOPs, regulatory mandates, and audit protocols.",
            },
            {
              title: "End-to-End Auction Support",
              desc: "From lot creation to award issuance — seamless execution without operational bottlenecks.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative p-6
                         bg-white/5 backdrop-blur-xl
                         border border-white/10 rounded-2xl
                         clip-path-[polygon(0_0,95%_0,100%_50%,95%_100%,0_100%)]
                         hover:border-[#4DA3FF]/60
                         shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                         transition-all"
            >
              <div className="absolute top-0 right-0 w-4 h-4 bg-[#F4C430]
                              shadow-[0_0_16px_#F4C430]" />

              <h4 className="mt-2 font-semibold text-white">
                {item.title}
              </h4>
              <p className="mt-2 text-sm text-white/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT VISUAL ================= */}
      <div className="relative sticky top-20
                      clip-path-[polygon(0_0,100%_0,92%_100%,0_100%)]
                      border border-[#4DA3FF]/30 rounded-2xl
                      shadow-[0_40px_120px_rgba(77,163,255,0.25)]">

        <img
          src={ten}
          alt="Public sector auctions"
          className="w-full h-[420px] border border-[#4DA3FF]/30 rounded-2xl object-cover opacity-90"
        />

        <div className="absolute inset-0 bg-gradient-to-tr
                        from-black/40 via-transparent to-black/30" />
      </div>
    </div>

    {/* ================= DIVIDER ================= */}
    <div className="my-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

 {/* ================= WHO WE SERVE ================= */}
<div>
  <h3 className="text-6xl font-extrabold text-center mb-24">
    Who We{" "}
    <span className="text-[#1F7A5A] drop-shadow-[0_0_12px_rgba(31,122,90,0.6)]">
      Serve
    </span>
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
    {[
      { icon: Building, label: "State Marketing Federations" },
      { icon: Users, label: "PSU Procurement & Disposal Divisions" },
      { icon: Landmark, label: "Government Departments & Agencies" },
      { icon: Handshake, label: "Cooperatives & Public Institutions" },
    ].map((item, i) => {
      const Icon = item.icon;
      return (
        <div
          key={i}
          className="group p-10 text-center
                     bg-white/5 backdrop-blur-xl
                     border border-white/10 rounded-2xl
                     clip-path-[polygon(0_0,95%_0,100%_50%,95%_100%,0_100%)]
                     hover:border-[#F4C430]/60
                     shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                     transition-all"
        >
          <Icon
            className="w-8 h-8 mx-auto mb-5 text-[#1F7A5A]
                       group-hover:text-[#F4C430]
                       transition-colors"
          />

          <p className="font-medium text-white/90 leading-snug">
            {item.label}
          </p>
        </div>
      );
    })}
  </div>
</div>


  </div>
</section>


  <section className="relative bg-[#F7FBF9] py-32 text-[#0B2F26] overflow-hidden">

  {/* subtle grid (softer) */}
  <div className="absolute inset-0 opacity-[0.05]
    bg-[linear-gradient(#1E8E6E_1px,transparent_1px),linear-gradient(90deg,#1E8E6E_1px,transparent_1px)]
    bg-[size:96px_96px]" />

  {/* soft capital washes */}
  <div className="absolute -top-56 -left-56 w-[560px] h-[560px]
    bg-gradient-to-br from-[#E6F4EE] to-transparent blur-3xl" />

  <div className="absolute bottom-[-260px] right-[-240px] w-[520px] h-[520px]
    bg-gradient-to-tr from-[#FFF4CC] to-transparent blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20">

    {/* ================= LEFT ================= */}
    <motion.div
      className="lg:col-span-7 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      {/* accent bar */}
      <div className="absolute -left-8 top-4 w-1 h-24 bg-[#F4C430]" />

      <h1 className="text-6xl font-extrabold leading-tight tracking-tight">
        Trade <br />
        <span className="text-[#1E8E6E]">
          Connect
        </span>
      </h1>

      <p className="mt-8 text-[#4B6F64] leading-relaxed max-w-xl">
        BeAM is a leading institutional-grade service provider for dynamic,
        transparent e-auctions across agri and allied sectors—engineered
        for trust, speed, and competitive price discovery.
      </p>

      <p className="mt-4 text-[#4B6F64] leading-relaxed max-w-xl">
        Our flagship trade vertical facilitates real-time, transparent
        procurement auctions, enhancing buyer-seller efficiency at scale.
      </p>

      {/* ================= FEATURES ================= */}
      <div className="mt-16">
        <h3 className="text-lg font-semibold mb-8 tracking-wide">
          Key <span className="text-[#1E8E6E]">Features</span>
        </h3>

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {[
            {
              title: "Zero-Lag Bidding Engine",
              desc: "Real-time auction interface with full traceability",
            },
            {
              title: "Custom Auction Frameworks",
              desc: "Forward and reverse bidding across sectors",
            },
            {
              title: "Robust Supplier Ecosystem",
              desc: "Verified sellers across agri, dairy & metals",
            },
            {
              title: "Proactive Partner Onboarding",
              desc: "Dedicated seller acquisition & enablement",
            },
            {
              title: "Smart Docs & Insights",
              desc: "Audit-ready contracts, reports & analytics",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 6 }}
              transition={{ duration: 0.45 }}
              className="flex gap-6 p-6 rounded-2xl
                         bg-white
                         border border-[#E2EFEA]
                         shadow-[0_18px_50px_rgba(0,0,0,0.07)]
                         hover:border-[#1E8E6E]/40
                         transition"
            >
              <div>
                <h4 className="font-semibold text-[#0B2F26]">
                  {item.title}
                </h4>
                <p className="text-sm text-[#4B6F64] mt-1">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>

    {/* ================= RIGHT ================= */}
    <motion.div
      className="lg:col-span-5"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="sticky top-28 relative
                   bg-white rounded-[28px]
                   border border-[#E2EFEA]
                   shadow-[0_30px_80px_rgba(0,0,0,0.1)]
                   overflow-hidden"
        whileHover={{ y: -6 }}
      >
        <img
          src={nine}
          alt=""
          className="w-full h-[260px] object-cover
                     border-b border-[#E2EFEA]"
        />

        <div className="p-10">
          <h4 className="text-lg font-semibold mb-8">
            Who <span className="text-[#1E8E6E]">We Serve</span>
          </h4>

          <ul className="space-y-6 text-sm text-[#355E52]">
            {[
              "Agri & Food Processing Firms",
              "Dairy Cooperatives & Allied Players",
              "Institutional Buyers & Agencies",
              "FPOs, Aggregators & Exporters",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <span className="text-[#1E8E6E]">▸</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>



<section className="relative pt-40 pb-40 px-24 bg-[#07140f] text-white">

  {/* ================= SUBTLE DATA GRID ================= */}
  <div className="absolute inset-0 bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)]
                  bg-[size:72px_72px] opacity-[0.08]" />

  {/* ================= DIAGONAL DATA PLANES ================= */}
  <div className="absolute -top-48 -left-56 w-[560px] h-[560px]
                  bg-gradient-to-br from-[#1F7A5A]/40 to-transparent
                  rotate-[25deg] blur-3xl pointer-events-none" />

  <div className="absolute bottom-[-300px] right-[-280px] w-[620px] h-[620px]
                  bg-gradient-to-tr from-[#4DA3FF]/35 to-transparent
                  rotate-[-18deg] blur-3xl pointer-events-none" />

  {/* ================= NEON AXIS LINES ================= */}
  <div className="absolute top-0 left-[20%] w-[2px] h-full bg-[#F4C430]/30 blur-sm" />
  <div className="absolute top-0 right-[26%] w-[1px] h-full bg-[#4DA3FF]/25 blur-sm" />

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* ================= TOP GRID ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      {/* ================= LEFT CONTENT ================= */}
      <div className="relative">

        {/* vertical signal bar */}
        <div className="absolute -left-8 top-8 w-1 h-28 bg-[#F4C430]
                        shadow-[0_0_18px_rgba(244,196,48,0.8)]" />

        <h2 className="text-6xl font-extrabold leading-tight">
          Data Analytics &
          <span className="block text-[#4DA3FF]
                           [text-shadow:0_0_24px_#4DA3FF66]">
            Consulting
          </span>
        </h2>

        <p className="mt-10 text-lg leading-relaxed text-white/75 max-w-xl">
          Through active partnerships, BeAM empowers stakeholders across the agri
          value chain with actionable insights, predictive intelligence, and
          strategy-backed advisory. We convert complex data into
          decision-ready intelligence.
        </p>

        {/* ================= SERVICES ================= */}
        <div className="mt-16 grid  grid-cols-1 sm:grid-cols-3 gap-8">

          {[
            {
              icon: BarChart3,
              title: "Strategic Consulting",
              desc: "Pricing trends, sourcing strategy, supply chain optimization",
            },
            {
              icon: TrendingUp,
              title: "Market Intelligence",
              desc: "Commodity movements, demand shifts, policy impact",
            },
            {
              icon: Laptop2,
              title: "Digital Deployment",
              desc: "Analytics platforms integrated into enterprise systems",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative p-6
                           bg-white/5 backdrop-blur-xl
                           border border-white/10 rounded-2xl
                           clip-path-[polygon(0_0,95%_0,100%_50%,95%_100%,0_100%)]
                           hover:border-[#4DA3FF]/60
                           shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                           transition-all"
              >
                {/* neon corner */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-[#F4C430]
                                shadow-[0_0_16px_#F4C430]" />

                <Icon className="w-8 h-8 text-[#1F7A5A]
                                 group-hover:text-[#4DA3FF]
                                 transition-colors" />

                <h4 className="mt-4 font-semibold text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-white/70">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= RIGHT VISUAL ================= */}
      <div className="relative sticky top-20
                      clip-path-[polygon(0_0,100%_0,92%_100%,0_100%)]
                      border border-[#4DA3FF]/30 rounded-2xl
                      shadow-[0_40px_120px_rgba(77,163,255,0.25)]">

        <img
          src={ten}
          alt="Data consulting"
          className="w-full h-[420px] border border-[#4DA3FF]/30 rounded-2xl object-cover opacity-90"
        />

        {/* data overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr
                        from-black/40 via-transparent to-black/30" />
      </div>
    </div>

    {/* ================= DIVIDER ================= */}
    <div className="my-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

    {/* ================= WHO WE SERVE ================= */}
    <div>
      <h3 className="text-6xl font-extrabold text-center mb-24">
        Who We{" "}
        <span className="text-[#1F7A5A] drop-shadow-[0_0_12px_rgba(31,122,90,0.6)]">
          Serve
        </span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
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
              className="group p-10 text-center
                         bg-white/5 backdrop-blur-xl
                         border border-white/10
                         clip-path-[polygon(0_0,95%_0,100%_50%,95%_100%,0_100%)]
                         hover:border-[#F4C430]/60
                         shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                         transition-all"
            >
              <Icon className="w-8 h-8 mx-auto mb-5 text-[#1F7A5A]
                               group-hover:text-[#F4C430]
                               transition-colors" />
              <p className="font-medium text-white/90 leading-snug">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>

  </div>
</section>
<section className="relative bg-[#F7FBF9] py-40 overflow-hidden text-[#0B2F26]">

  {/* subtle finance grid */}
  <div className="absolute inset-0 opacity-[0.05]
    bg-[linear-gradient(#1E8E6E_1px,transparent_1px),linear-gradient(90deg,#1E8E6E_1px,transparent_1px)]
    bg-[size:96px_96px]" />

  {/* soft capital glows */}
  <div className="absolute -top-60 -left-72 w-[640px] h-[640px]
    bg-gradient-to-br from-[#DDF2EB] to-transparent blur-3xl" />

  <div className="absolute bottom-[-340px] right-[-300px] w-[680px] h-[680px]
    bg-gradient-to-tr from-[#FFF3C4] to-transparent blur-3xl" />

  <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-28">

    {/* LEFT CONTENT */}
    <div className="relative">

      {/* accent bar */}
      <div className="absolute -left-10 top-6 w-1 h-24 bg-[#F4C430]" />

      <h2 className="text-6xl font-extrabold leading-tight">
        Trade{" "}
        <span className="text-[#1E8E6E]">
          Finance
        </span>
      </h2>

      <p className="mt-10 text-lg leading-relaxed text-[#4B6F64] max-w-xl">
        BeAM enables seamless liquidity for agri-value chains and MSMEs.
        Our plug-and-play platforms bridge working capital gaps, enabling
        faster procurement, timely payouts, and uninterrupted trade execution —
        with zero collateral.
      </p>

      {/* OFFERINGS */}
      <div className="mt-20 space-y-7">
        {[
          {
            icon: Receipt,
            title: "End-to-End Invoice Discounting",
            desc: "Digitized invoice-based finance enabling early payments for buyers and sellers.",
          },
          {
            icon: Wallet,
            title: "Working Capital as a Service",
            desc: "Collateral-free short-term liquidity aligned with procurement cycles.",
          },
          {
            icon: Shuffle,
            title: "Buyer & Seller Float Solutions",
            desc: "Structured float mechanisms to bridge cash flow gaps across value chains.",
          },
          {
            icon: Layers,
            title: "Embedded Finance via Fintech & NBFC Partners",
            desc: "Scalable and compliant credit disbursement through integrated lending partners.",
          },
          {
            icon: Database,
            title: "Data-Driven Credit Intelligence",
            desc: "Smart underwriting using trade data and behavioral patterns.",
          },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex gap-6 p-7 rounded-2xl bg-white
                         border border-[#E2EFEA]
                         shadow-[0_14px_40px_rgba(0,0,0,0.06)]
                         hover:-translate-y-1 transition"
            >
              <div className="flex h-12 w-12 items-center justify-center
                              rounded-xl bg-[#E6F4EE] text-[#1E8E6E]">
                <Icon size={26} />
              </div>
              <div>
                <h4 className="font-semibold text-[#0B2F26]">
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
      <div className="absolute -inset-10 rounded-[36px]
        bg-gradient-to-br from-[#EAF7F1] to-transparent blur-xl" />

      <div className="sticky top-32 bg-white rounded-[30px]
        overflow-hidden border border-[#E2EFEA]
        shadow-[0_30px_80px_rgba(0,0,0,0.1)]">

        <img
          src={ten}
          alt="Trade Finance"
          className="w-full h-64 object-cover"
        />

        <div className="p-10">
          <h3 className="text-xl font-semibold mb-8">
            Who We Serve
          </h3>

          <div className="space-y-6">
            {[
              { icon: Users, title: "Agri Traders & Aggregators", desc: "Liquidity support for high-volume trade cycles." },
              { icon: Store, title: "Input Distributors & Retail Networks", desc: "Credit solutions to manage seasonal demand." },
              { icon: Factory, title: "Large Buyers & Food Processors", desc: "Streamlined supplier payments and procurement finance." },
              { icon: Rocket, title: "Agri-Tech Platforms & Startups", desc: "Embedded finance layers for ecosystem growth." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center
                                  rounded-lg bg-[#E6F4EE] text-[#1E8E6E]">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h5 className="font-medium text-[#0B2F26]">
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

 <section className="relative pt-40 pb-40 px-24 bg-[#07140f] text-white">

  {/* ================= SUBTLE DATA GRID ================= */}
  <div className="absolute inset-0 bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)]
                  bg-[size:72px_72px] opacity-[0.08]" />

  {/* ================= DIAGONAL DATA PLANES ================= */}
  <div className="absolute -top-48 -left-56 w-[560px] h-[560px]
                  bg-gradient-to-br from-[#1F7A5A]/40 to-transparent
                  rotate-[25deg] blur-3xl pointer-events-none" />

  <div className="absolute bottom-[-300px] right-[-280px] w-[620px] h-[620px]
                  bg-gradient-to-tr from-[#4DA3FF]/35 to-transparent
                  rotate-[-18deg] blur-3xl pointer-events-none" />

  {/* ================= NEON AXIS LINES ================= */}
  <div className="absolute top-0 left-[20%] w-[2px] h-full bg-[#F4C430]/30 blur-sm" />
  <div className="absolute top-0 right-[26%] w-[1px] h-full bg-[#4DA3FF]/25 blur-sm" />

  <div className="relative z-10 max-w-7xl mx-auto">

    {/* ================= TOP GRID ================= */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      {/* ================= LEFT CONTENT ================= */}
      <div className="relative">

        {/* vertical signal bar */}
        <div className="absolute -left-8 top-8 w-1 h-28 bg-[#F4C430]
                        shadow-[0_0_18px_rgba(244,196,48,0.8)]" />

        <h2 className="text-6xl font-extrabold leading-tight">
          Metals
        </h2>

        <p className="mt-10 text-lg leading-relaxed text-white/75 max-w-xl">
          BeAM brings transparency, speed, and efficiency to the industrial
          metals trade. Whether you’re buying or selling steel, scrap, or
          alloys — our digital platforms simplify every step with trust,
          compliance, and traceability.
        </p>

        {/* ================= FEATURES ================= */}
        <div className="mt-16 space-y-8">

          <div className="flex gap-5">
            <BarChart3 className="w-7 h-7 text-[#1F7A5A] mt-1" />
            <div>
              <h4 className="font-semibold text-lg text-white">
                Market Intelligence & Analytics
              </h4>
              <p className="text-white/70">
                Price trends, bidder behavior, and trade data that empower
                smarter, faster decisions.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <ShieldCheck className="w-7 h-7 text-[#1F7A5A] mt-1" />
            <div>
              <h4 className="font-semibold text-lg text-white">
                Quality & Compliance Assurance
              </h4>
              <p className="text-white/70">
                Audit trails, certifications, and digital documentation for
                risk-free trading.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <Settings className="w-7 h-7 text-[#1F7A5A] mt-1" />
            <div>
              <h4 className="font-semibold text-lg text-white">
                Seamless Execution Support
              </h4>
              <p className="text-white/70">
                Logistics coordination, delivery tracking, and contract
                lifecycle management.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= RIGHT VISUAL ================= */}
      <div className="relative sticky top-20
                      clip-path-[polygon(0_0,100%_0,92%_100%,0_100%)]
                      border border-[#4DA3FF]/30 rounded-2xl
                      shadow-[0_40px_120px_rgba(77,163,255,0.25)]">

        <img
          src={ten}
          alt="Metals Trading"
          className="w-full h-[420px] border border-[#4DA3FF]/30 rounded-2xl object-cover opacity-90"
        />

        <div className="absolute inset-0 bg-gradient-to-tr
                        from-black/40 via-transparent to-black/30" />
      </div>
    </div>

    {/* ================= DIVIDER ================= */}
    <div className="my-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

    {/* ================= WHO WE SERVE ================= */}
    <div>
      <h3 className="text-6xl font-extrabold text-center mb-24">
        Who We{" "}
        <span className="text-[#1F7A5A] drop-shadow-[0_0_12px_rgba(31,122,90,0.6)]">
          Serve
        </span>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { icon: Factory, label: "Steel Manufacturers & Processors" },
          { icon: Recycle, label: "Scrap Aggregators & Dealers" },
          { icon: Building2, label: "Infrastructure & Construction" },
          { icon: Landmark, label: "Public Sector & Institutions" },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="group p-10 text-center
                         bg-white/5 backdrop-blur-xl
                         border border-white/10 rounded-2xl
                         clip-path-[polygon(0_0,95%_0,100%_50%,95%_100%,0_100%)]
                         hover:border-[#F4C430]/60
                         shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                         transition-all"
            >
              <Icon className="w-8 h-8 mx-auto mb-5 text-[#1F7A5A]
                               group-hover:text-[#F4C430]
                               transition-colors" />
              <p className="font-medium text-white/90 leading-snug">
                {item.label}
              </p>
            </div>
          );
        })}
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
      <h2 className="text-5xl font-bold tracking-tight text-theme-text-secondary">
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
<footer className="bg-theme-primary text-theme-text-primary pt-20">

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
