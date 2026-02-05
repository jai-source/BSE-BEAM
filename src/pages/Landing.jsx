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
      Empowering sexual stakeholders with satellite imagery,
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
<section className="relative w-full min-h-screen overflow-hidden bg-white">
  {/* BACKGROUND BLOBS */}
  <div className="absolute -top-40 -left-32 w-[520px] h-[520px] bg-yellow-300/30 rounded-full blur-[140px]" />
  <div className="absolute top-1/3 -right-40 w-[620px] h-[620px] bg-emerald-400/30 rounded-full blur-[160px]" />
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-400/20 rounded-full blur-[160px]" />

  <div className="relative max-w-7xl mx-auto  pl-12 mr-0  ">
    {/* EYEBROW */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-lg text-emerald-700"
    >
     
    </motion.div>

    {/* GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-24 items-stretch min-h-[80vh]">
      {/* LEFT CONTENT */}
     <motion.div
  className="pt-44 mb-44"
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
>
  Empowering Farmers with <br />
      Precision Agriculture
        <h2 className="text-5xl md:text-6xl leading-tight font-medium text-[#0b2a1e]">
          <span className="italic font-normal text-blue-600">
            Transforming India's
          </span>{" "}
          Agricultural Market with{" "}
          <span className="relative inline-block text-emerald-600">
            Technology
            <span className="absolute -bottom-2 left-0 w-full h-[6px] bg-yellow-300/70 blur-sm" />
          </span>{" "}
          & Supply <br />
          Chain Finance
        </h2>

        <p className="mt-8 text-[#4b6357] max-w-xl">
          At the forefront of agricultural innovation, offering precision
          farming solutions that empower farmers worldwide.
        </p>

        {/* STATS */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
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
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/30 via-blue-400/30 to-yellow-300/30 blur-xl opacity-0 hover:opacity-100 transition-opacity" />
              <p className="relative text-5xl font-semibold text-[#0b2a1e]">
                {value}
              </p>
              <p className="relative text-sm text-[#5f6f64]">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT – FULL HEIGHT LEFT-TORN IMAGE */}
      <div className="relative ml-auto w-full max-w-[520px] h-full self-start">


        {/* SOFT EDGE GLOW */}
        <div className="absolute inset-y-0 -left-10 w-32 bg-emerald-200/20 blur-3xl pointer-events-none" />

        <div
          className="relative h-full bg-white"
          style={{
            clipPath: `polygon(
              5% 0%,
              1% 3%,
              4% 7%,
              1% 12%,
              5% 18%,
              2% 25%,
              6% 33%,
              2% 41%,
              5% 50%,
              2% 58%,
              6% 66%,
              2% 74%,
              5% 82%,
              2% 90%,
              5% 96%,
              2% 100%,
              100% 100%,
              100% 0%
            )`,
            boxShadow: "0 25px 55px rgba(0,0,0,0.18)"
          }}
        >
          {/* WHITE PAPER BORDER (TORN EDGE) */}
          <div
            className="absolute left-[2px] top-0 h-full w-[8px] pointer-events-none"
            style={{
              clipPath: `polygon(
                60% 0%,
                20% 3%,
                55% 7%,
                15% 12%,
                60% 18%,
                25% 25%,
                65% 33%,
                20% 41%,
                60% 50%,
                25% 58%,
                65% 66%,
                20% 74%,
                60% 82%,
                25% 90%,
                60% 96%,
                30% 100%,
                100% 100%,
                100% 0%
              )`,
              background: "white",
              boxShadow: "2px 0 6px rgba(0,0,0,0.15)"
            }}
          />

          <img
            src={torn}
            alt="visual"
            className="w-full h-full object-cover saturate-[0.95] contrast-[0.96]"
          />
        </div>
      </div>
    </div>
  </div>
</section>




{/* PILLARS – DARK MODE */}
{/* PILLARS SECTION */}
<section className="relative py-24 overflow-hidden bg-[#071b14]">

  {/* ================= GEOMETRIC BACKGROUND ================= */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">

    {/* RADIAL DOT GRID */}
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
        backgroundSize: "48px 48px"
      }}
    />

    {/* AMBIENT BLOBS */}
    <div className="absolute -top-60 -left-60 w-[700px] h-[700px] bg-emerald-500/20 rounded-full blur-[220px]" />
    <div className="absolute bottom-[-300px] right-[-300px] w-[800px] h-[800px] bg-blue-500/15 rounded-full blur-[240px]" />

    {/* ROTATING WIREFRAME RINGS */}
    <motion.div
      className="absolute -top-[35%] -left-[25%] w-[900px] h-[900px] rounded-full border border-emerald-400/20"
      animate={{ rotate: 360 }}
      transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
    />

    <motion.div
      className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full border border-blue-400/20"
      animate={{ rotate: -360 }}
      transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
    />

    {/* ANGLED LIGHT PANEL */}
    <div className="absolute top-1/4 -right-[20%] w-[720px] h-[420px] 
                    bg-gradient-to-br from-emerald-500/10 to-transparent 
                    rotate-[-18deg] rounded-3xl blur-xl" />

    {/* FLOATING HEX */}
    <motion.svg
      width="420"
      height="420"
      viewBox="0 0 100 100"
      className="absolute bottom-[12%] left-[14%] opacity-[0.06]"
      animate={{ y: [0, 30, 0], rotate: [0, 6, 0] }}
      transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
    >
      <polygon
        points="50,5 93,27 93,73 50,95 7,73 7,27"
        fill="none"
        stroke="white"
        strokeWidth="0.6"
      />
    </motion.svg>

    {/* FLOATING TRIANGLE */}
    <motion.svg
      width="360"
      height="360"
      viewBox="0 0 100 100"
      className="absolute top-[20%] right-[12%] opacity-[0.05]"
      animate={{ y: [0, -25, 0], rotate: [0, -8, 0] }}
      transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
    >
      <polygon
        points="50,8 92,92 8,92"
        fill="none"
        stroke="white"
        strokeWidth="0.6"
      />
    </motion.svg>
  </div>

  {/* ================= CONTENT ================= */}
  <div className="relative z-10 max-w-7xl mx-auto px-12">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-center mb-28"
    >
      <h2 className="text-7xl font-semibold tracking-tight text-white">
        Our Pillars
      </h2>
      <div className="mt-6 h-[3px] w-32 mx-auto bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 rounded-full" />
    </motion.div>

    {/* PILLARS GRID */}
    <div className="grid md:grid-cols-3 gap-20 items-start">

      {[
        {
          img: tech,
          title: "Technology",
          desc: "Robust and transparent platforms for increasing market efficiency.",
          offset: "md:mt-12"
        },
        {
          img: supply,
          title: "Supply Chain",
          desc: "Seamless linkages from farmers to industries and exporters.",
          offset: "md:mt-12"
        },
        {
          img: finance,
          title: "Finance",
          desc: "Secure payments and trade-support financial instruments.",
          offset: "md:mt-12"
        }
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: i * 0.2 }}
          whileHover={{ y: -14 }}
          className={`relative group ${item.offset}`}
        >

          {/* NEON AURA */}
          <div className="absolute -inset-6 rounded-3xl 
                          bg-gradient-to-br from-emerald-400/30 via-blue-400/30 to-emerald-400/30 
                          blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* CARD */}
          <div className="relative rounded-3xl bg-white-600 p-6
                          border border-white/5
                          shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]
                          transition-all duration-700">

            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-2xl mb-6">
              <div className="absolute inset-0 bg-gradient-to-t from-[#071b14] via-transparent to-transparent z-10" />
              <motion.img
                src={item.img}
                alt=""
                className="w-full h-[220px] object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.8 }}
              />
            </div>

            {/* TEXT */}
            <h3 className="text-2xl font-semibold text-white mb-3">
              {item.title}
            </h3>

            <p className="text-sm text-emerald-200/70 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section className="relative overflow-hidden bg-[#F4FAF7] py-4">

  {/* ───────────── TOP SEMI-CIRCLE ───────────── */}
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[130%] h-[300px] rounded-b-[100%] overflow-hidden z-0">

  {/* background image */}
  <img
    src={heroImage} // import this at the top
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* optional dark overlay for contrast */}
  <div className="absolute inset-0 bg-[#0B3B2E]/70" />

  {/* subtle dotted grid */}
  <div
    className="absolute inset-0 opacity-[0.12]"
    style={{
      backgroundImage:
        "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
      backgroundSize: "28px 28px",
    }}
  />

</div>

  {/* ───────────── HEADER INSIDE ARC ───────────── */}
  <div className="relative z-10 max-w-6xl mx-auto px-12 text-center pt-16 mb-44">
    <p className="text-xs tracking-[0.4em] text-emerald-200 mb-3">
      WHERE CAN WE HELP YOU
    </p>

    <h2 className="text-6xl font-bold text-white mt-0">
      Our Offerings
    </h2>

    <p className="max-w-3xl mx-auto text-emerald-100/80 text-lg leading-relaxed">
      Integrated, technology-driven services enabling transparency,
      efficiency, and scale across the agricultural value chain.
    </p>
  </div>

  {/* ───────────── LIGHT SECTION BACKGROUND DETAILS ───────────── */}
  <div className="absolute inset-0 pointer-events-none">
    {/* soft color fields */}
    <div className="absolute top-[55%] left-20 w-[360px] h-[360px] bg-blue-200/30 rounded-full blur-[120px]" />
    <div className="absolute bottom-24 right-28 w-[420px] h-[420px] bg-yellow-100/40 rounded-full blur-[140px]" />

    {/* faint diagonal line */}
    <div
      className="absolute top-[50%] left-[-20%] w-[140%] h-[1px] opacity-[0.05]"
      style={{
        background:
          "linear-gradient(90deg, transparent, #0B3B2E, transparent)",
      }}
    />
  </div>

  
  {/* ───────────── CARDS (OUTSIDE ARC) ───────────── */}
<div className="relative z-10 max-w-6xl mx-auto px- mt-64 mb-44">

  <div className="carousel-track flex gap-14 w-max">

    {[
      "Farm Gate",
      "Trade Connect",
      "Market Intelligence",
      "Bioenergy",
      "Farm Gate",
      "Trade Connect",
      "Market Intelligence",
      "Bioenergy",
    ].map((title, i) => (
      <div key={i} className="min-w-[320px] group"> <div className=" relative rounded-3xl p-8 bg-white border border-[#0B3B2E]/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_70px_-30px_rgba(11,59,46,0.35)] " >
          {/* neon accent strip */}
          <div className="absolute top-0 left-6 w-14 h-[3px] bg-emerald-500 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.6)]" />

          <h3 className="text-xl font-semibold text-[#0B3B2E] mb-3 mt-2">
            {title}
          </h3>

          <p className="text-sm text-[#5F7F75] leading-relaxed mb-6">
            Direct access to farmers with transparent pricing and logistics.
          </p>

          <span className="text-sm font-medium text-emerald-600">
            Explore →
          </span>
        </div>
      </div>
    ))}

  </div>
</div>

</section>


<section className="relative bg-[#081f18] py-28 overflow-hidden">

  {/* subtle grid */}
  <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(#ffffff33_1px,transparent_1px),linear-gradient(90deg,#ffffff33_1px,transparent_1px)] bg-[size:48px_48px]" />

  <motion.div
    className="relative max-w-7xl mx-auto px-8 text-theme-text-primary"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-120px" }}
    variants={{
      show: { transition: { staggerChildren: 0.18 } }
    }}
  >

    {/* typewriter heading */}
    <motion.h2
      className="text-5xl font-semibold mb-6 overflow-hidden whitespace-nowrap"
      initial={{ width: 0 }}
      whileInView={{ width: "fit-content" }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      Technology <span className="text-[#7ccf9a]">Platforms</span>
    </motion.h2>

    <motion.p
      className="text-theme-text-primary/70 max-w-2xl mb-20"
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 }
        }
      }}
    >
      Modular, scalable platforms powering procurement, auctions, and settlement
      across agricultural markets.
    </motion.p>

    <motion.div
      className="grid md:grid-cols-3 gap-10"
      variants={{
        show: { transition: { staggerChildren: 0.2 } }
      }}
    >

      {/* card */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
          }
        }}
        className="group bg-theme-text-primary/5 backdrop-blur rounded-2xl p-8
                   hover:-translate-y-3
                   hover:shadow-[0_20px_60px_-20px_rgba(124,207,154,0.35)]
                   transition-all duration-300"
      >
        <h3 className="text-xl font-semibold mb-3">
          E-Procurement of Crops
        </h3>
        <p className="text-theme-text-primary/70 text-sm leading-relaxed">
          Digitized procurement workflows for government and private buyers,
          enabling transparency and scale.
        </p>
      </motion.div>

      {/* featured */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
          }
        }}
        className="group bg-theme-button-bg text-theme-text-secondary rounded-2xl p-10
                   scale-[1.04] shadow-2xl
                   hover:-translate-y-3
                   transition-all duration-300"
      >
        <h3 className="text-2xl font-semibold mb-4">
          E-Auction of Commodities
        </h3>
        <p className="text-sm leading-relaxed">
          High-volume electronic auctions across grains, dairy, oilseeds,
          and agri-derivatives with real-time discovery.
        </p>
      </motion.div>

      {/* card */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
          }
        }}
        className="group bg-theme-text-primary/5 backdrop-blur rounded-2xl p-8
                   hover:-translate-y-3
                   hover:shadow-[0_20px_60px_-20px_rgba(124,207,154,0.35)]
                   transition-all duration-300"
      >
        <h3 className="text-xl font-semibold mb-3">
          Clearing & Settlement
        </h3>
        <p className="text-theme-text-primary/70 text-sm leading-relaxed">
          Secure settlement rails integrating banks, clearing corporations,
          and market participants.
        </p>
      </motion.div>

    </motion.div>
  </motion.div>
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
