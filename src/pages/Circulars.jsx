import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  Filter,
  Download,
  RefreshCcw
} from "lucide-react";

export default function Circulars() {
  return (
    <>

      {/* ───────────────── NAVBAR CONTRAST BAND ───────────────── */}
      <div className="h-32 bg-theme-primary" />

      {/* ───────────────── CIRCULARS SECTION ───────────────── */}
      <section className="relative bg-theme-page-bg py-32 overflow-hidden text-theme-text-primary">

        {/* BACKGROUND FX */}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-theme-accent/40 blur-[160px]" />
        <div className="absolute top-1/2 -right-40 w-[460px] h-[460px] rounded-full bg-theme-accent/20 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="uppercase tracking-widest text-theme-highlight font-semibold text-sm">
              Circulars Overview
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold mt-4">
              Latest{" "}
              <span className="text-theme-highlight drop-shadow-[0_0_18px_var(--color-highlight)]">
                Circulars
              </span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-theme-text-primary/70 text-lg">
              Stay informed with official notifications, compliance updates,
              and policy circulars issued by BSE E-Agricultural Markets Limited.
            </p>
          </motion.div>

          {/* FILTER PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="sticky top-28 z-20
                       bg-white/5 backdrop-blur-2xl
                       border border-white/10
                       rounded-2xl
                       shadow-[0_0_80px_rgba(16,185,129,0.12)]
                       p-8 mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

              <Input label="Start Date" icon={<Calendar />} />
              <Input label="End Date" icon={<Calendar />} />
              <Input label="Circular No." icon={<Search />} />
              <Input label="Subject" icon={<Search />} />

              <Select label="Commodity" />
              <Select label="Category" />
              <Select label="Department" />

              <div className="flex items-end gap-4">
                <button className="flex items-center gap-2
                                   bg-theme-accent hover:bg-theme-accent-hover
                                   text-black px-6 py-3 rounded-xl
                                   shadow-[0_0_25px_rgba(16,185,129,0.4)]
                                   transition">
                  <Filter size={18} />
                  Filter
                </button>

                <button className="flex items-center gap-2
                                   bg-red-600 hover:bg-red-500
                                   text-white px-6 py-3 rounded-xl
                                   shadow-[0_0_25px_rgba(239,68,68,0.4)]
                                   transition">
                  <RefreshCcw size={18} />
                  Reset
                </button>
              </div>
            </div>
          </motion.div>

          {/* TABLE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl
                       border border-white/10
                       shadow-[0_0_90px_rgba(16,185,129,0.15)]"
          >
            <table className="w-full text-left">
              <thead className="bg-[#081f18] text-white">
                <tr>
                  {[
                    "Circular No.",
                    "Subject",
                    "Category",
                    "Commodity",
                    "Department",
                    "Date",
                    "Action"
                  ].map((h) => (
                    <th key={h} className="px-6 py-4 text-sm font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="bg-theme-bg-secondary text-gray-800">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b hover:bg-theme-highlight/10 transition"
                  >
                    <td className="px-6 py-4 font-medium text-theme-text-secondary">
                      CIR-2026-000{i + 1}
                    </td>

                    <td className="px-6 py-4">
                      MSTCDC Junnar (Pune) Bahird stocks offered for sale on BEAM platform
                    </td>

                    <td className="px-6 py-4">General</td>
                    <td className="px-6 py-4">Bahird</td>
                    <td className="px-6 py-4">Business</td>
                    <td className="px-6 py-4">18-01-2026</td>

                    <td className="px-6 py-4">
                      <button className="flex items-center gap-2
                                         text-theme-accent hover:text-theme-accent-hover
                                         font-semibold">
                        <Download size={18} />
                        Download
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

        </div>
      </section>

      {/* ───────────────── FOOTER ───────────────── */}
      <footer className="bg-theme-primary text-theme-text-primary pt-20">

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-14 pb-16">

          <div>
            <h4 className="font-semibold mb-4">
              BSE E-Agricultural Markets Limited
            </h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Delivering value across agri-commodity ecosystems through transparent,
              secure, and scalable market infrastructure.
            </p>
          </div>

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

        <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
          © 2026 BSE E-Agricultural Markets Limited. All rights reserved.
        </div>
      </footer>

    </>
  );
}

/* ───────────── COMPONENTS ───────────── */

function Input({ label, icon }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-emerald-100/80">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400">
          {icon}
        </span>
        <input
          placeholder="dd-mm-yyyy"
          className="w-full pl-10 pr-4 py-3 rounded-xl
                     bg-[#07130f] text-white
                     border border-white/15
                     focus:ring-2 focus:ring-emerald-500 outline-none transition"
        />
      </div>
    </div>
  );
}

function Select({ label }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-emerald-100/80">
        {label}
      </label>
      <select
        className="w-full py-3 px-4 rounded-xl
                   bg-[#07130f] text-white
                   border border-white/15
                   focus:ring-2 focus:ring-emerald-500 outline-none transition"
      >
        <option>Select an option</option>
      </select>
    </div>
  );
}

