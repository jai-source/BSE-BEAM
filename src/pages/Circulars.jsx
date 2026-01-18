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
    <section className="relative bg-white py-32 overflow-hidden">

      {/* ───────────────── BACKGROUND FX ───────────────── */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-green-900 blur-[140px]" />
      <div className="absolute top-1/2 -right-40 w-[460px] h-[460px] rounded-full bg-red-500/10 blur-[160px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ───────────────── HEADER ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-widest text-emerald-700 font-semibold text-sm">
            Circulars Overview
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-4">
            Latest{" "}
            <span className="text-emerald-700 drop-shadow-[0_0_14px_rgba(16,185,129,0.6)]">
              Circulars
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            Stay informed with official notifications, compliance updates,
            and policy circulars issued by BSE E-Agricultural Markets Limited.
          </p>
        </motion.div>

        {/* ───────────────── FILTER PANEL ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="sticky top-28 z-20 bg-white/90 backdrop-blur-xl
                     border border-emerald-900/10
                     rounded-2xl shadow-[0_0_60px_rgba(16,185,129,0.15)]
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
              <button className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800
                                 text-white px-6 py-3 rounded-xl
                                 shadow-[0_0_20px_rgba(16,185,129,0.5)]
                                 transition-all">
                <Filter size={18} />
                Filter
              </button>

              <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700
                                 text-white px-6 py-3 rounded-xl
                                 shadow-[0_0_20px_rgba(239,68,68,0.5)]
                                 transition-all">
                <RefreshCcw size={18} />
                Reset
              </button>
            </div>
          </div>
        </motion.div>

        {/* ───────────────── TABLE ───────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-emerald-900/10
                     shadow-[0_0_80px_rgba(16,185,129,0.15)]"
        >
          <table className="w-full text-left">
            <thead className="bg-emerald-900 text-white">
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

            <tbody className="bg-white">
              {[1, 2, 3, 4, 5].map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b hover:bg-emerald-50 transition-all"
                >
                  <td className="px-6 py-4 font-medium text-emerald-800">
                    CIR-2026-000{i + 1}
                  </td>

                  <td className="px-6 py-4 text-gray-700">
                    MSTCDC Junnar (Pune) Bahird stocks offered for sale on BEAM platform
                  </td>

                  <td className="px-6 py-4">General</td>
                  <td className="px-6 py-4">Bahird</td>
                  <td className="px-6 py-4">Business</td>
                  <td className="px-6 py-4">18-01-2026</td>

                  <td className="px-6 py-4">
                    <button className="flex items-center gap-2 text-emerald-700
                                       hover:text-emerald-900 font-semibold">
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
  );
}

/* ─────────────── COMPONENTS ─────────────── */

function Input({ label, icon }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-700">
          {icon}
        </span>
        <input
          placeholder="dd-mm-yyyy"
          className="w-full pl-10 pr-4 py-3 rounded-xl
                     border border-emerald-900/20
                     focus:ring-2 focus:ring-emerald-600 outline-none"
        />
      </div>
    </div>
  );
}

function Select({ label }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <select
        className="w-full py-3 px-4 rounded-xl
                   border border-emerald-900/20
                   focus:ring-2 focus:ring-emerald-600 outline-none"
      >
        <option>Select an option</option>
      </select>
    </div>
  );
}

