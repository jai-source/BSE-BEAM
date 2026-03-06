import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { MapPin, Mail, Tractor } from "lucide-react";
import WorldMap from "../components/WorldMap";

export default function Contact() {
  return (
    <>
      <section className="relative bg-theme-page-bg text-theme-text-primary overflow-hidden">

        {/* subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]
        bg-[linear-gradient(to_right,#1a3a6e_1px,transparent_1px),
            linear-gradient(to_bottom,#1a3a6e_1px,transparent_1px)]
        bg-[size:90px_90px]" />

        {/* soft glow */}
        <div className="absolute top-[-300px] left-1/2 -translate-x-1/2
        w-[900px] h-[900px] bg-[#0A246A]/25 blur-[180px] rounded-full" />

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
                <div className="w-12 h-12 rounded-xl bg-[#1660C1]/10
                flex items-center justify-center">
                  <MapPin className="text-[#5BA9E1]" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Registered Office</h3>
                  <p className="text-sm text-black ">
                    25th Floor, P.J. Towers, Dalal Street, Fort,
                    Mumbai, Mumbai City, Maharashtra, India – 400001
                  </p>
                </div>
              </div>

              {/* NCR Office */}
              <div className="flex gap-5 p-6 rounded-2xl
              bg-white/5 border border-white/10
              backdrop-blur-xl">
                <div className="w-12 h-12 rounded-xl bg-[#1660C1]/10
                flex items-center justify-center">
                  <MapPin className="text-[#5BA9E1]" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">NCR Office</h3>
                  <p className="text-sm text-black leading-relaxed">
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
                <div className="w-12 h-12 rounded-xl bg-[#1660C1]/10
                flex items-center justify-center">
                  <Mail className="text-[#5BA9E1]" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email us</h3>
                  <p className="text-sm text-black">
                    inquiry@bsebeamagr.com
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SCSS WORLD MAP ANIMATION */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative p-6 min-h-[500px] h-[600px] flex flex-col items-center justify-center overflow-hidden"
            >
              <WorldMap />
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
      <Footer />
    </>
  );
}
