import heroImage from "../Assets/main.png"
import tech from "../Assets/tech.jpg";
import supply from "../Assets/supply.jpg";
import finance from "../Assets/finance.jpg";
import hexagon from "../Assets/hexagon-multiple.svg";
import triangleLarge from "../Assets/triangle-large.svg";
import triangleOutline from "../Assets/triangle-inverted-small-outline.svg";
import torn from "../Assets/Image-7-Banner-Image-scaled.jpg"
import Coil from "../components/Coil";
import heroVideo from "../Assets/VIDEO.mp4";
import backgroundimage from "../Assets/backgroundimage.png";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

import {
  Factory,
  Leaf,
  Wheat,
  Shuffle,
  BarChart3
} from "lucide-react";
const offerings = [
  {
    title: "Metals",
    desc: "Efficient procurement and disposal of steel, scrap, and industrial metals.",
    icon: Factory
  },
  {
    title: "Bioenergy",
    desc: "Biomass sourcing enabled through verified farm-gate networks.",
    icon: Leaf
  },
  {
    title: "Farm Gate",
    desc: "Direct access to farmers with transparent pricing and logistics.",
    icon: Wheat
  },
  {
    title: "Trade Connect",
    desc: "Digitally facilitated auctions and agri-commodity trade services.",
    icon: Shuffle
  },
  {
    title: "Market Intelligence",
    desc: "Data-backed insights powered by analytics and research.",
    icon: BarChart3
  }
];

function Landing() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-theme-bg-main text-theme-text-primary">

      {/* HERO SECTION */}
     <section className="relative w-full min-h-screen flex items-end overflow-hidden">

  {/* BACKGROUND VIDEO WITH PARALLAX ZOOM */}
  <motion.video
    src={heroVideo}
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
    initial={{ scale: 1.05 }}
    animate={{ scale: 1 }}
    transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#071b14] via-[#0b2a1e]/70 to-transparent" />

  {/* CONTENT */}
  <motion.div
    className="relative z-10 max-w-6xl px-12 pb-24"
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
  >
    <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-4xl">
      Reinventing <span className="font-semibold">Agri Trade</span>
      <br />
      Smarter Supply Chains, Smarter Capital
    </h1>

    <p className="mt-6 max-w-2xl text-white/80 text-base">
      Empowering agricultural stakeholders with satellite imagery,
      market intelligence, and advanced analytics to optimize yield,
      mitigate risk, and drive informed decisions at scale.
    </p>

    <motion.div
      className="mt-8 flex gap-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.12 }
        }
      }}
    >
      {[
        "Become a Member",
        "E-Auction Live"
      ].map((label, i) => (
        <motion.button
          key={i}
          className={
            i === 0
              ? "bg-white text-[#071b14] px-7 py-3 rounded-full text-sm font-semibold"
              : "border border-white/50 px-7 py-3 rounded-full text-sm font-medium"
          }
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -2 }}
        >
          {label}
        </motion.button>
      ))}
    </motion.div>
  </motion.div>
</section>

     {/* TRANSITION DIVIDER */}
<div className="relative w-full h-8 bg-gradient-to-b from-[var(--color-gradient-from)] to-[var(--color-gradient-to)]" />
{/* DRIBBBLE-STYLE AGRI INSIGHTS SECTION */}
<section className="w-full bg-theme-bg-secondary py-32 overflow-hidden">
  <div className="max-w-6xl mx-auto px-12">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="text-xl text-[#5f6f64] mb-2"
    >
      Empowering Farmers with <br />
      Precision Agriculture
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

      {/* LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1.2 }}
      >
        <h2 className="text-4xl md:text-5xl leading-tight font-medium text-[#0b2a1e]">
          <span className="italic font-normal">Transforming India's</span>{" "}
          Agricultural Market with <br />
          <span className="text-theme-accent">Technology</span>{" "}
          and Supply <br />
          Chain Finance
        </h2>

        <p className="mt-6 text-theme-text-muted max-w-xl">
          At the forefront of agricultural innovation, offering
          precision farming solutions that empower farmers worldwide.
        </p>

        {/* STATS */}
        <motion.div
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {[
            ["25.9+", "Created Fields"],
            ["4.85+", "Acres processed"],
            ["11M+", "Registered users"],
            ["27,000+", "Counted plants"]
          ].map(([value, label], i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-5xl font-semibold text-[#0b2a1e]">{value}</p>
              <p className="text-sm text-[#5f6f64]">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT FLOATING PAPER */}
      <motion.div
        className="relative w-[420px] mx-auto rotate-[-5deg]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ rotate: -3, y: -6 }}
      >
        <Coil className="absolute top-[6px] left-1/2 -translate-x-1/2 z-0 opacity-30" />

        <div
          className="relative bg-[#fdfcf8] pt-10 px-3 rounded-md z-10"
          style={{ boxShadow: "0 28px 45px rgba(0,0,0,0.18)" }}
        >
          <img
            src={torn}
            alt="visual"
            className="w-[420px] h-[560px] object-cover rounded-sm"
          />
        </div>

        <Coil className="absolute top-[6px] left-1/2 -translate-x-1/2 z-30" />
      </motion.div>

    </div>
  </div>
</section>


      {/* PILLARS SECTION */}
<section className="relative bg-theme-bg-secondary py-40 overflow-hidden">

  {/* SOFT NEON AMBIENCE */}
  <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-emerald-300/20 blur-[160px]" />
  <div className="absolute top-1/2 -right-40 w-[520px] h-[520px] rounded-full bg-emerald-200/20 blur-[160px]" />

  {/* FLOATING GEOMETRY */}
  <motion.img
    src={hexagon}
    className="absolute top-[-160px] left-[-200px] w-[520px] opacity-[0.05]"
    animate={{ y: [0, 30, 0], rotate: [0, 6, 0] }}
    transition={{ duration: 14, repeat: Infinity }}
  />

  <motion.img
    src={triangleLarge}
    className="absolute top-[-140px] right-[-180px] w-[520px] opacity-[0.04]"
    animate={{ y: [0, -40, 0], rotate: [0, -8, 0] }}
    transition={{ duration: 18, repeat: Infinity }}
  />

  <motion.img
    src={triangleOutline}
    className="absolute bottom-[-220px] left-[35%] w-[480px] opacity-[0.035]"
    animate={{ y: [0, 35, 0] }}
    transition={{ duration: 16, repeat: Infinity }}
  />

  {/* CONTENT */}
  <div className="relative z-10 max-w-6xl mx-auto px-12">

    {/* HEADER */}
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-6xl text-center font-bold text-theme-text-secondary mb-20 tracking-tight"
    >
      Our Pillars
    </motion.h2>

    {/* GRID */}
    <div className="grid md:grid-cols-3 gap-14">

      {/* CARD */}
      {[
        {
          img: tech,
          title: "Technology",
          desc: "Robust and transparent platforms for increasing market efficiency."
        },
        {
          img: supply,
          title: "Supply Chain",
          desc: "Seamless linkages from farmers to industries and exporters."
        },
        {
          img: finance,
          title: "Finance",
          desc: "Secure payments and trade-support financial instruments."
        }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.15 }}
          viewport={{ once: true }}
          whileHover={{ y: -12 }}
          className="group relative rounded-2xl bg-theme-button-bg p-6 border border-theme-accent/10 
                     shadow-[0_20px_40px_-20px_rgba(6,95,70,0.35)]
                     hover:shadow-[0_30px_80px_-20px_rgba(16,185,129,0.45)]
                     transition-all duration-500"
        >

          {/* NEON OUTLINE */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                          shadow-[0_0_40px_rgba(16,185,129,0.25)] transition-opacity duration-500" />

          <img
            src={item.img}
            alt=""
            className="rounded-xl mb-6 relative z-10"
          />

          <h3 className="text-xl font-semibold text-[#071b14] mb-2 relative z-10">
            {item.title}
          </h3>

          <p className="text-sm text-[#5f6f64] leading-relaxed relative z-10">
            {item.desc}
          </p>
        </motion.div>
      ))}

    </div>
  </div>
</section>
<section className="relative py-24 overflow-hidden bg-[#061410]">

  {/* RICH MULTI-COLOR BACKGROUND */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(20,184,166,0.16),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(163,230,53,0.10),transparent_50%)]" />
  <div className="absolute inset-0 bg-[#061410]/85" />

  <div className="relative z-10 max-w-7xl mx-auto px-12">

    {/* HEADER */}
    <div className="max-w-3xl mb-28">
      <p className="text-xs tracking-[0.35em] text-emerald-300 mb-4">
        WHERE CAN WE HELP YOU
      </p>

      <h2 className="text-5xl font-bold text-theme-text-primary mb-6">
        Our Offerings
      </h2>

      <p className="text-lg text-emerald-100/80 leading-relaxed">
        Integrated, technology-driven services enabling transparency,
        efficiency, and scale across the agricultural value chain.
      </p>
    </div>

    {/* SCROLLER — VISUALLY BROKEN PLANE */}
    <div className="relative overflow-hidden">
      <div className="flex gap-16 animate-offerings-scroll items-start">

        {[
          { title: "Bioenergy", offset: "mt-10", accent: "from-emerald-500/20" },
          { title: "Farm Gate", offset: "mt-10", accent: "from-teal-400/20" },
          { title: "Trade Connect", offset: "mt-10", accent: "from-lime-400/20" },
          { title: "Market Intelligence", offset: "mt-1", accent: "from-green-400/20" },
        ].concat([
          { title: "Bioenergy", offset: "mt-6", accent: "from-emerald-500/20" }
        ]).map((item, i) => (

          <div
            key={i}
            className={`group relative min-w-[340px] ${item.offset}`}
          >
            {/* FLOATING CARD */}
            <div
              className="
                relative rounded-3xl p-8
                bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-primary)]
                border border-theme-text-primary/10
                transition-all duration-500 ease-out
                hover:-translate-y-6
              "
              style={{
                boxShadow:
                  "0 40px 90px -45px rgba(0,0,0,0.8)"
              }}
            >
              {/* COLOR ACCENT WASH */}
              <div
                className={`
                  absolute inset-0 rounded-3xl opacity-0
                  bg-gradient-to-br ${item.accent} to-transparent
                  group-hover:opacity-100
                  transition-opacity duration-500
                `}
              />

              <h3 className="text-xl font-semibold text-theme-text-primary mb-3 relative z-10">
                {item.title}
              </h3>

              <p className="text-sm text-emerald-100/75 leading-relaxed relative z-10">
                Direct access to farmers with transparent pricing and logistics.
              </p>

              <div className="mt-8 text-sm text-emerald-300 relative z-10">
                Explore →
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>

  </div>
</section>


<section className="relative bg-[#081f18] py-28  overflow-hidden">

  {/* subtle grid */}
  <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(#ffffff33_1px,transparent_1px),linear-gradient(90deg,#ffffff33_1px,transparent_1px)] bg-[size:48px_48px]" />

  <div className="relative max-w-7xl mx-auto px-8 text-theme-text-primary">
    <h2 className="text-5xl font-semibold mb-6">
      Technology <span className="text-[#7ccf9a]">Platforms</span>
    </h2>
    <p className="text-theme-text-primary/70 max-w-2xl mb-20">
      Modular, scalable platforms powering procurement, auctions, and settlement
      across agricultural markets.
    </p>

    <div className="grid md:grid-cols-3 gap-10">
      
      {/* Card */}
      <div className="group bg-theme-text-primary/5 backdrop-blur rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-xl font-semibold mb-3">E-Procurement of Crops</h3>
        <p className="text-theme-text-primary/70 text-sm leading-relaxed">
          Digitized procurement workflows for government and private buyers,
          enabling transparency and scale.
        </p>
      </div>

      {/* Featured */}
      <div className="group bg-theme-button-bg text-theme-text-secondary rounded-2xl p-10 scale-[1.02] shadow-xl hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-4">
          E-Auction of Commodities
        </h3>
        <p className="text-sm leading-relaxed">
          High-volume electronic auctions across grains, dairy, oilseeds,
          and agri-derivatives with real-time discovery.
        </p>
      </div>

      <div className="group bg-theme-text-primary/5 backdrop-blur rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-xl font-semibold mb-3">Clearing & Settlement</h3>
        <p className="text-theme-text-primary/70 text-sm leading-relaxed">
          Secure settlement rails integrating banks, clearing corporations,
          and market participants.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="bg-theme-bg-secondary py-28">
  <div className="max-w-7xl mx-auto px-8 text-center">

    <h2 className="text-4xl font-semibold text-theme-text-secondary mb-4">
      Our Clients & Partners
    </h2>
    <p className="text-theme-text-muted mb-16">
      Institutions building trust and liquidity across agri-commodity ecosystems
    </p>

    <div className="relative overflow-hidden">
      <div className="flex w-max animate-partners-scroll gap-20 text-theme-text-muted font-medium tracking-wide">
        <span>DUV</span>
        <span>KRIBHCO</span>
        <span>COFCO</span>
        <span>NCDEX</span>
        <span>ROQUETTE</span>
        <span>McDonald Polz</span>

        {/* duplicate */}
        <span>DUV</span>
        <span>KRIBHCO</span>
        <span>COFCO</span>
        <span>NCDEX</span>
        <span>ROQUETTE</span>
        <span>McDonald Polz</span>
      </div>
    </div>
  </div>
</section>
<section className="bg-theme-primary py-28">
  <div className="max-w-7xl mx-auto px-8 text-center text-theme-text-primary">

    <h2 className="text-4xl font-semibold mb-16">
      Commodities <span className="text-theme-accent">We Trade</span>
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-12 text-theme-text-primary/80">
      
      {[
        "Paddy",
        "Coarse Grains",
        "Sugar",
        "Rice",
        "Oil Seeds",
        "Corn",
        "Wheat",
        "Biofuels",
        "Fruits & Vegetables",
        "Spices",
        "Pulses",
      ].map(item => (
        <div
          key={item}
          className="flex flex-col items-center gap-3 hover:text-theme-text-primary transition"
        >
          <div className="w-12 h-12 rounded-full bg-theme-text-primary/10" />
          <span className="text-sm">{item}</span>
        </div>
      ))}

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

export default Landing
