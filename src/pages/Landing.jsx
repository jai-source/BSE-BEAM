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
    <div className="relative w-full min-h-screen overflow-hidden bg-[#071b14] text-white">

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-end">

        {/* BACKGROUND IMAGE */}
       <video
  src={heroVideo}
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
</video>


        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071b14] via-[#0b2a1e]/70 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl px-12 pb-24">
         
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

          <div className="mt-8 flex gap-4">
            <button className="bg-white text-[#071b14] px-7 py-3 rounded-full text-sm font-semibold hover:bg-white/90 transition">
              Become a Member
            </button>

            <button className="border border-white/50 px-7 py-3 rounded-full text-sm font-medium hover:border-white transition">
              E-Auction Live
            </button>
          </div>

          <div className="mt-12 text-sm text-white/60 flex items-center gap-2">
            <span>Explore More</span>
            <span className="text-lg">↓</span>
          </div>
        </div>
      </section>
     {/* TRANSITION DIVIDER */}
<div className="relative w-full h-8 bg-gradient-to-b from-[#071b14] to-[#081f18]" />
{/* DRIBBBLE-STYLE AGRI INSIGHTS SECTION */}
<section className="w-full bg-white py-32 overflow-hidden">
  <div className="max-w-6xl mx-auto px-12">

    {/* top label */}
    <div className="text-xl text-[#5f6f64] mb-2">
      Empowering Farmers with <br />
      Precision Agriculture
    </div>

    {/* main grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

      {/* LEFT TEXT */}
      <div>
        <h2 className="text-4xl md:text-5xl leading-tight font-medium text-[#0b2a1e]">
          <span className="italic font-normal">Transforming India's</span>{" "}
          Agricultural Market with <br />
          <span className="text-[#1f7a5c]">Technology</span>{" "}
          and Supply <br />
          Chain Finance
        </h2>

        <p className="mt-6 text-[#5f6f64] max-w-xl">
          At the forefront of agricultural innovation, offering
          precision farming solutions that empower farmers worldwide. By
          leveraging advanced technologies such as satellite imagery,
          analytics, and AI-driven insights.
        </p>

        {/* STATS */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-16">
          <div>
            <p className="text-5xl font-semibold text-[#0b2a1e]">25.9+</p>
            <p className="text-sm text-[#5f6f64]">Created Fields</p>
          </div>
          <div>
            <p className="text-5xl font-semibold text-[#0b2a1e]">4.85+</p>
            <p className="text-sm text-[#5f6f64]">Acres processed</p>
          </div>
          <div>
            <p className="text-5xl font-semibold text-[#0b2a1e]">11M+</p>
            <p className="text-sm text-[#5f6f64]">Registered users</p>
          </div>
          <div>
            <p className="text-5xl font-semibold text-[#0b2a1e]">27,000+</p>
            <p className="text-sm text-[#5f6f64]">Counted plants</p>
          </div>
        </div>
      </div>

{/* RIGHT IMAGE — COIL BOUND PAPER */}
<div className="relative w-[420px] mx-auto rotate-[-5deg] origin-top-left">

  {/* BACK COIL (behind paper) */}
  <Coil className="absolute top-[6px] left-1/2 -translate-x-1/2 z-0 opacity-30" />

  {/* PAPER */}
  <div
    className="relative bg-[#fdfcf8] pt-10 px-3 rounded-md z-10"
    style={{
      boxShadow: "0 28px 45px rgba(0,0,0,0.18)"
    }}
  >
    {/* PUNCHED HOLES */}
    <div className="absolute top-[14px] left-1/2 -translate-x-1/2 flex gap-7 z-20">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="w-3 h-5 bg-[#fdfcf8] rounded-full -mt-2"
          style={{
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.28)"
          }}
        />
      ))}
    </div>

    <img
      src={torn}
      alt="visual"
      className="w-[420px] h-[560px] object-cover rounded-sm"
    />
  </div>

  {/* FRONT COIL */}
  <Coil className="absolute top-[6px] left-1/2 -translate-x-1/2 z-30" />

</div>
    </div>
  </div>
</section>

    {/* PARTNERS */}
 <section className="relative w-full mt-16 mb-16 overflow-hidden bg-[#081f18]">

  {/* background SVGs */}
  <img
    src={hexagon}
    alt=""
    className="absolute top-[-120px] right-[-180px] w-[520px] opacity-[0.1] pointer-events-none"
  />

  <img
    src={triangleLarge}
    alt=""
    className="absolute bottom-[-140px] left-[-160px] w-[460px] opacity-[0.1] pointer-events-none rotate-12"
  />

  <img
    src={triangleOutline}
    alt=""
    className="absolute top-[80%] left-[55%] w-[480px] opacity-[0.1] pointer-events-none"
  />

  {/* content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6">


 
<h3 className="text-center pt-16 text-6xl font-medium text-white mb-12">
  Our Partners
</h3>

<div className="relative w-full overflow-hidden pb-16">
  <div className="flex w-max animate-partners-scroll gap-20 items-center text-[#9fb3a8]">

    {/* SET 1 */}
    <span className="text-xl font-medium tracking-wide">DROPRISE</span>
    <span className="text-xl font-medium tracking-wide">DroneDeploy</span>
    <span className="text-xl font-medium tracking-wide">FarmTogether</span>
    <span className="text-xl font-medium tracking-wide">AgriTechX</span>

    {/* SET 2 */}
    <span className="text-xl font-medium tracking-wide">DROPRISE</span>
    <span className="text-xl font-medium tracking-wide">DroneDeploy</span>
    <span className="text-xl font-medium tracking-wide">FarmTogether</span>
    <span className="text-xl font-medium tracking-wide">AgriTechX</span>

  </div>
</div>

</div>
</section>

      {/* PILLARS SECTION */}
<section className="relative bg-white pt-36 pb-36 overflow-hidden">

  {/* LEFT cluster */}
  <img
    src={hexagon}
    alt=""
    className="absolute top-[-180px] left-[-200px] w-[520px] opacity-[0.04] pointer-events-none"
  />

  <img
    src={triangleOutline}
    alt=""
    className="absolute top-[120px] left-[80px] w-[220px] opacity-[0.035] pointer-events-none rotate-6"
  />

  {/* RIGHT cluster */}
  <img
    src={triangleLarge}
    alt=""
    className="absolute top-[-140px] right-[-160px] w-[520px] opacity-[0.035] pointer-events-none rotate-[-10deg]"
  />

  <img
    src={hexagon}
    alt=""
    className="absolute top-[260px] right-[120px] w-[300px] opacity-[0.03] pointer-events-none rotate-12"
  />

  {/* CENTER depth */}
  <img
    src={triangleOutline}
    alt=""
    className="absolute top-[48%] left-[45%] w-[260px] opacity-[0.025] pointer-events-none"
  />

  <img
    src={triangleLarge}
    alt=""
    className="absolute bottom-[-220px] left-[35%] w-[480px] opacity-[0.035] pointer-events-none rotate-3"
  />

  {/* content */}
  <div className="relative z-10 max-w-6xl mx-auto px-12">

    <h2 className="text-6xl font-bold text-[#071b14] mb-16">
      Our Pillars
    </h2>

    <div className="grid md:grid-cols-3 gap-12">

      <div className="space-y-4">
        <img src={tech} className="rounded-xl" />
        <h3 className="text-xl font-medium text-[#071b14]">Technology</h3>
        <p className="text-sm text-[#5f6f64]">
          Robust and transparent platforms for increasing market efficiency.
        </p>
      </div>

      <div className="space-y-4">
        <img src={supply} className="rounded-xl" />
        <h3 className="text-xl font-medium text-[#071b14]">Supply Chain</h3>
        <p className="text-sm text-[#5f6f64]">
          Seamless linkages from farmers to industries and exporters.
        </p>
      </div>

      <div className="space-y-4">
        <img src={finance} className="rounded-xl" />
        <h3 className="text-xl font-medium text-[#071b14]">Finance</h3>
        <p className="text-sm text-[#5f6f64]">
          Secure payments and trade-support financial instruments.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="relative py-36 overflow-hidden bg-[#F9FBFA]">

  {/* soft diagonal gradient wash */}
  {/* BACKGROUND IMAGE */}
<img
  src={backgroundimage}
  alt=""
  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
/>

{/* OPTIONAL: subtle white overlay for readability */}
<div className="absolute inset-0 bg-white/70" />

  <div className="relative z-10 max-w-7xl mx-auto px-12">
    <div className="max-w-3xl mb-20">
      <p className="text-xs tracking-[0.3em] text-[#6B7F78] mb-4">
        WHERE CAN WE HELP YOU
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-[#071b14]">
        Our Offerings
      </h2>
      <p className="mt-6 text-[#4F5F59] text-lg leading-relaxed">
        Integrated, technology-driven services enabling transparency,
        efficiency, and scale across the agricultural value chain.
      </p>
    </div>
    <div className="relative overflow-hidden">
      <div className="flex gap-10 animate-offerings-scroll">
        {[
          { title: "Metals", icon: Factory, desc: "Efficient procurement and disposal of steel, scrap, and industrial metals." },
          { title: "Bioenergy", icon: Leaf, desc: "Biomass sourcing enabled through verified farm-gate networks." },
          { title: "Farm Gate", icon: Wheat, desc: "Direct access to farmers with transparent pricing and logistics." },
          { title: "Trade Connect", icon: Shuffle, desc: "Digitally facilitated auctions and agri-commodity trade services." },
          { title: "Market Intelligence", icon: BarChart3, desc: "Data-backed insights powered by analytics and research." }
        ].concat([
          { title: "Metals", icon: Factory, desc: "Efficient procurement and disposal of steel, scrap, and industrial metals." },
          { title: "Bioenergy", icon: Leaf, desc: "Biomass sourcing enabled through verified farm-gate networks." }
        ]).map((item, i) => (
          <div
            key={i}
            className="min-w-[340px] bg-white
                       border border-[#E3ECE8]
                       rounded-2xl p-8
                       shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                       hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-xl font-medium text-[#071b14] mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-[#5E6F68] leading-relaxed">
              {item.desc}
            </p>
            <div className="mt-6 text-sm text-[#8AA79C] flex items-center gap-2">
              <span>Explore</span>
              <span>→</span>
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

  <div className="relative max-w-7xl mx-auto px-8 text-white">
    <h2 className="text-5xl font-semibold mb-6">
      Technology <span className="text-[#7ccf9a]">Platforms</span>
    </h2>
    <p className="text-white/70 max-w-2xl mb-20">
      Modular, scalable platforms powering procurement, auctions, and settlement
      across agricultural markets.
    </p>

    <div className="grid md:grid-cols-3 gap-10">
      
      {/* Card */}
      <div className="group bg-white/5 backdrop-blur rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-xl font-semibold mb-3">E-Procurement of Crops</h3>
        <p className="text-white/70 text-sm leading-relaxed">
          Digitized procurement workflows for government and private buyers,
          enabling transparency and scale.
        </p>
      </div>

      {/* Featured */}
      <div className="group bg-white text-[#081f18] rounded-2xl p-10 scale-[1.02] shadow-xl hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-2xl font-semibold mb-4">
          E-Auction of Commodities
        </h3>
        <p className="text-sm leading-relaxed">
          High-volume electronic auctions across grains, dairy, oilseeds,
          and agri-derivatives with real-time discovery.
        </p>
      </div>

      <div className="group bg-white/5 backdrop-blur rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300">
        <h3 className="text-xl font-semibold mb-3">Clearing & Settlement</h3>
        <p className="text-white/70 text-sm leading-relaxed">
          Secure settlement rails integrating banks, clearing corporations,
          and market participants.
        </p>
      </div>

    </div>
  </div>
</section>
<section className="bg-white py-28">
  <div className="max-w-7xl mx-auto px-8 text-center">

    <h2 className="text-4xl font-semibold text-[#081f18] mb-4">
      Our Clients & Partners
    </h2>
    <p className="text-[#5f6f64] mb-16">
      Institutions building trust and liquidity across agri-commodity ecosystems
    </p>

    <div className="relative overflow-hidden">
      <div className="flex w-max animate-partners-scroll gap-20 text-[#5f6f64] font-medium tracking-wide">
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
<section className="bg-[#081f18] py-28">
  <div className="max-w-7xl mx-auto px-8 text-center text-white">

    <h2 className="text-4xl font-semibold mb-16">
      Commodities <span className="text-[#7ccf9a]">We Trade</span>
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-12 text-white/80">
      
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
          className="flex flex-col items-center gap-3 hover:text-white transition"
        >
          <div className="w-12 h-12 rounded-full bg-white/10" />
          <span className="text-sm">{item}</span>
        </div>
      ))}

    </div>
  </div>
</section>
<section className="bg-white py-28">
  <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-start">

    {/* Left */}
    <div>
      <h2 className="text-4xl font-semibold text-[#081f18] mb-6">
        Get in Touch
      </h2>
      <p className="text-[#5f6f64] max-w-md mb-10 leading-relaxed">
        Connect with BSE E-Agricultural Markets Limited to explore partnerships,
        platform access, or institutional participation.
      </p>

      <div className="space-y-6 text-sm text-[#081f18]">
        <div>
          <p className="font-medium">Registered Office</p>
          <p className="text-[#5f6f64]">
            25th Floor, P.J. Towers, Dalal Street,<br />
            Fort, Mumbai – 400001
          </p>
        </div>

        <div>
          <p className="font-medium">Corporate Office</p>
          <p className="text-[#5f6f64]">
            Unit No. 319, Suncity Success Towers,<br />
            Sector 65, Golf Course Extension Road,<br />
            Gurugram – 122018
          </p>
        </div>

        <div>
          <p className="font-medium">Email</p>
          <p className="text-[#5f6f64]">inquiry@bsebeam.com</p>
        </div>
      </div>
    </div>

    {/* Right – Contact Form */}
    <div className="bg-white rounded-2xl shadow-sm p-10">
      <form className="space-y-6">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-[#dfe7e3] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#081f18]"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border border-[#dfe7e3] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#081f18]"
        />
        <input
          type="text"
          placeholder="Organization"
          className="w-full border border-[#dfe7e3] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#081f18]"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full border border-[#dfe7e3] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#081f18]"
        />

        <button
          type="submit"
          className="bg-[#081f18] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#0b2a21] transition"
        >
          Submit Enquiry
        </button>
      </form>
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


 
    </div>

  )
}

export default Landing
