// src/components/CommoditiesSection.jsx

import {
  PaddyIcon,
  GrainsIcon,
  SugarIcon,
  RiceIcon,
  OilSeedsIcon,
  CornIcon,
  WheatIcon,
  BiofuelIcon,
  FruitsIcon,
  SpicesIcon,
  PulsesIcon,
} from "./icons/commodities";

export default function CommoditiesSection() {
  const commodities = [
    { name: "Paddy", icon: PaddyIcon },
    { name: "Coarse Grains", icon: GrainsIcon },
    { name: "Sugar", icon: SugarIcon },
    { name: "Rice", icon: RiceIcon },
    { name: "Oil Seeds", icon: OilSeedsIcon },
    { name: "Corn", icon: CornIcon },
    { name: "Wheat", icon: WheatIcon },
    { name: "Biofuels", icon: BiofuelIcon },
    { name: "Fruits & Vegetables", icon: FruitsIcon },
    { name: "Spices", icon: SpicesIcon },
    { name: "Pulses", icon: PulsesIcon },
  ];

  return (
    <section className="bg-theme-primary py-28">
      <div className="max-w-7xl mx-auto px-8 text-center text-theme-text-primary">

        <h2 className="text-4xl font-semibold mb-20">
          Commodities <span className="text-theme-accent">We Trade</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-16 gap-x-12">
          {commodities.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group flex flex-col items-center gap-4 text-theme-text-primary opacity-80 group-hover:opacity-100 transition"
            >
              {/* ICON WRAPPER */}
              <div
                className="
                  w-16 h-16 rounded-full
                  bg-theme-text-primary/5
                  flex items-center justify-center
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:bg-theme-text-primary/10
                  group-hover:shadow-[0_0_25px_rgba(0,255,180,0.35)]
                "
              >
                <Icon
                  className="
                    w-8 h-8
                    transition-all duration-300
                    group-hover:text-theme-accent
                    group-hover:drop-shadow-[0_0_6px_rgba(0,255,180,0.8)]
                  "
                />
              </div>

              {/* LABEL */}
              <span
                className="
                  text-sm text-center
                  transition
                  group-hover:text-theme-text-primary
                "
              >
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

