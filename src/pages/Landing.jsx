import heroImage from "../Assets/main.png"

function Landing() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#071b14] text-white">

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-end">

        {/* BACKGROUND IMAGE */}
        <img
          src={heroImage}
          alt="Agricultural fields"
          className="absolute inset-0 w-full h-full object-cover"
        />

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
    </div>
  )
}

export default Landing
