import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <>
    <section className="relative bg-theme-page-bg text-theme-text-primary overflow-hidden">

      {/* subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]
        bg-[linear-gradient(to_right,#1a3a2d_1px,transparent_1px),
            linear-gradient(to_bottom,#1a3a2d_1px,transparent_1px)]
        bg-[size:90px_90px]" />

      {/* soft glow */}
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2
        w-[900px] h-[900px] bg-emerald-900/25 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-32">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm tracking-widest text-theme-highlight mb-3">
            CONTACT US WITH EASE
          </p>

          <h1 className="text-5xl font-semibold">
            Get in <span className="text-theme-highlight">touch</span>
          </h1>

          <p className="mt-6 text-theme-text-primary/70">
            Visit our office or simply send us an email anytime you want.
            If you have any questions, please feel free to contact us.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            {/* Registered Office */}
            <div className="flex gap-5 p-6 rounded-2xl
              bg-white/5 border border-white/10
              backdrop-blur-xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10
                flex items-center justify-center">
                <MapPin className="text-emerald-400" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Registered Office</h3>
                <p className="text-sm text-emerald-100/60 leading-relaxed">
                  25th Floor, P.J. Towers, Dalal Street, Fort,
                  Mumbai, Mumbai City, Maharashtra, India – 400001
                </p>
              </div>
            </div>

            {/* NCR Office */}
            <div className="flex gap-5 p-6 rounded-2xl
              bg-white/5 border border-white/10
              backdrop-blur-xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10
                flex items-center justify-center">
                <MapPin className="text-emerald-400" />
              </div>
              <div>
                <h3 className="font-medium mb-1">NCR Office</h3>
                <p className="text-sm text-emerald-100/60 leading-relaxed">
                  Unit No. 319, Suncity Success Towers, Sector 65,
                  Golf Course Extension Road, Gurugram, Haryana,
                  India – 122018
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5 p-6 rounded-2xl
              bg-white/5 border border-white/10
              backdrop-blur-xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10
                flex items-center justify-center">
                <Mail className="text-emerald-400" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email us</h3>
                <p className="text-sm text-emerald-100/60">
                  inquiry@bsebeamagr.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="p-10 rounded-3xl
              bg-white/5 border border-white/10
              backdrop-blur-2xl"
          >
            <p className="text-sm text-emerald-300 mb-6">
              Required fields are marked *
            </p>

            <form className="space-y-6">
              {[
                ["Your Name", "Enter your Name"],
                ["Your Email", "Enter your Email Address"],
                ["Your Mobile", "Enter your Mobile Number"],
                ["Subject", "Enter your Subject"],
              ].map(([label, placeholder], i) => (
                <div key={i}>
                  <label className="block text-sm mb-2">
                    {label} {label !== "Subject" && "*"}
                  </label>
                  <input
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-xl
                      bg-[#07130f] border border-white/15
                      focus:border-emerald-500 outline-none transition"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm mb-2">
                  Your Message *
                </label>
                <textarea
                  placeholder="Enter your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl
                    bg-[#07130f] border border-white/15
                    focus:border-emerald-500 outline-none transition"
                />
              </div>

              <button
                className="mt-4 px-6 py-3 rounded-xl
                  bg-emerald-500 text-black font-medium
                  hover:bg-emerald-400 transition"
              >
                Submit message
              </button>
            </form>
          </motion.div>
        </div>

        {/* MAP */}
        <div className="mt-24 rounded-3xl overflow-hidden
          border border-white/10 shadow-2xl">
          <iframe
            title="Map"
            src="https://www.google.com/maps?q=Suncity%20Success%20Tower%20Gurugram&output=embed"
            className="w-full h-[420px] grayscale contrast-125"
            loading="lazy"
          />
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
}
