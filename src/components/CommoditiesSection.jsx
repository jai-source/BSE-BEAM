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
    <section className="bg-hill-green-light/10 py-28">
      <div className="max-w-7xl mx-auto px-8 text-center text-hill-green-dark">

        <h2 className="text-4xl font-semibold mb-20">
          Commodities <span className="text-hill-green">We Trade</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-16 gap-x-12">
          {commodities.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group flex flex-col items-center gap-4 text-hill-green-dark/90 transition"
            >
              {/* ICON WRAPPER */}
              <div
                className="
                  w-16 h-16 rounded-full
                  bg-hill-green-light/10 border border-hill-green-light/20
                  flex items-center justify-center
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:bg-hill-green-light/20
                  group-hover:shadow-[0_0_28px_#1660C122]
                "
              >
                <Icon
                  className="
                    w-9 h-9 text-hill-green
                    transition-all duration-300
                    group-hover:text-sky-blue
                    group-hover:drop-shadow-[0_0_10px_#5BA9E1]
                  "
                />
              </div>

              {/* LABEL */}
              <span
                className="
                  text-sm text-center
                  transition
                  group-hover:text-hill-green
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

