import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Users, Briefcase, Award, ArrowUpRight, Activity } from "lucide-react";

const WorldMap = () => {
  const [svgText, setSvgText] = useState("");
  const [hoveredPin, setHoveredPin] = useState(null);

  useEffect(() => {
    fetch("/world-simple.svg")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load map");
        }
        return res.text();
      })
      .then((text) => {
        // Crop the SVG to focus on North America (X: 50 to 330, Y: 20 to 290)
        const croppedText = text.replace('viewBox="0 0 1010 666"', 'viewBox="50 20 280 270"');
        setSvgText(croppedText);
      })
      .catch((err) => console.error("Error loading SVG map:", err));
  }, []);

  // Re-calculated coordinate percentages based on the cropped viewBox "50 20 280 270"
  const pins = [
    {
      id: "usa",
      name: "United States",
      left: "57.8%",
      top: "74%",
      label: "USA",
      tagline: "Primary Market Hub",
      stats: [
        { icon: Users, label: "Hiring Partners", value: "180+ Companies" },
        { icon: Briefcase, label: "Active Positions", value: "120+ Roles" },
        { icon: Award, label: "Recruiters", value: "24/7 Coverage" }
      ],
      desc: "Connecting talent directly to major technology hubs, medical centers, and financial institutions in New York, Chicago, and California."
    },
    {
      id: "canada",
      name: "Canada",
      left: "70.3%",
      top: "41.8%",
      label: "CAN",
      tagline: "Rapid Growth Market",
      stats: [
        { icon: Users, label: "Hiring Partners", value: "70+ Companies" },
        { icon: Briefcase, label: "Active Positions", value: "50+ Roles" },
        { icon: Award, label: "Success Rate", value: "98% Placed" }
      ],
      desc: "Expanding local and international placement pipelines across key metro areas including Toronto, Vancouver, and Montreal."
    }
  ];

  const defaultOverview = {
    name: "North America Network",
    tagline: "Unified Recruitment Ecosystem",
    desc: "NexMoveTalent provides cross-border recruitment solutions connecting elite professionals to top-tier organizations across the USA and Canada.",
    stats: [
      { icon: Users, label: "Total Partners", value: "250+ Brands" },
      { icon: Briefcase, label: "Total Placed", value: "500+ Talents" },
      { icon: Award, label: "Placement Success", value: "98% Rate" }
    ]
  };

  const activeData = hoveredPin 
    ? pins.find(p => p.id === hoveredPin) 
    : defaultOverview;

  return (
    <div className="w-full relative bg-[#090d16] border border-slate-800 rounded-3xl p-6 md:p-10 flex flex-col items-center justify-center overflow-hidden shadow-2xl">
      {/* Grid Pattern Overlay for High-Tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-25 pointer-events-none"></div>
      
      {/* Glowing radial backdrops */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative w-full max-w-4xl world-map-container flex flex-col lg:flex-row gap-8 items-center">
        
        {/* Style tag to inject custom SVG CSS */}
        <style dangerouslySetInnerHTML={{ __html: `
          .world-map-container svg {
            width: 100%;
            height: auto;
            display: block;
          }
          .world-map-container svg path {
            fill: #1e293b; /* Dark slate */
            stroke: #0f172a; /* Slate-900 border */
            stroke-width: 0.6px;
            transition: fill 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .world-map-container svg path:hover {
            fill: #334155; /* Lighter slate on hover */
          }
          .world-map-container svg path#us,
          .world-map-container svg path#ca {
            fill: #059669; /* Emerald accent */
            stroke: #022c22;
            stroke-width: 0.8px;
          }
          .world-map-container svg path#us:hover,
          .world-map-container svg path#ca:hover {
            fill: #34d399; /* Bright emerald */
          }
        `}} />

        {/* Map Vector (Col Span 2) */}
        <div className="relative w-full lg:w-2/3 border border-slate-800/40 rounded-2xl p-4 bg-[#05070c]/50">
          {svgText ? (
            <div dangerouslySetInnerHTML={{ __html: svgText }} />
          ) : (
            <div className="w-full aspect-[280/270] bg-slate-900/50 rounded-2xl flex items-center justify-center text-slate-500">
              <span className="animate-pulse font-medium text-sm">Initializing Map Engine...</span>
            </div>
          )}

          {/* Location Pins Overlay */}
          {svgText && pins.map((pin) => (
            <div
              key={pin.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              style={{ left: pin.left, top: pin.top }}
            >
              {/* Target Trigger */}
              <button
                onMouseEnter={() => setHoveredPin(pin.id)}
                onMouseLeave={() => setHoveredPin(null)}
                onClick={() => setHoveredPin(hoveredPin === pin.id ? null : pin.id)}
                className="relative flex items-center justify-center cursor-pointer w-10 h-10 focus:outline-none"
                aria-label={`Highlight ${pin.name}`}
              >
                {/* Glowing Radar Waves */}
                <span className="absolute w-10 h-10 rounded-full bg-emerald-500/20 opacity-70 animate-ping pointer-events-none"></span>
                <span className="absolute w-7 h-7 rounded-full bg-emerald-400/30 opacity-60 animate-pulse pointer-events-none"></span>

                {/* Pin Center Badge */}
                <span className="relative w-6 h-6 rounded-full bg-slate-950 border-2 border-emerald-400 shadow-lg shadow-emerald-500/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-emerald-300">
                  <span className="text-[8px] font-extrabold text-emerald-400 tracking-tighter uppercase">{pin.label}</span>
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Sticky Dashboard Panel (Col Span 1) */}
        <div className="w-full lg:w-1/3">
          <motion.div 
            layout
            className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl text-white shadow-2xl backdrop-blur-md relative overflow-hidden h-[330px] flex flex-col justify-between"
          >
            {/* Corner Decorative Glowing Light */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none"></div>
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Activity size={16} className="text-emerald-400 animate-pulse" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">Live Network Stats</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
              </div>

              {/* Title & Tagline */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-xl font-bold text-white flex items-center gap-1.5">
                    {activeData.name}
                  </h4>
                  <p className="text-[11px] text-emerald-400 font-semibold mt-1">
                    {activeData.tagline}
                  </p>
                  <p className="text-xs text-slate-400 leading-5 mt-3">
                    {activeData.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Metrics List */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.name + "-stats"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3 mt-4 pt-4 border-t border-slate-800/80"
              >
                {activeData.stats.map((stat, sIdx) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={sIdx} className="flex items-center justify-between text-xs bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/30">
                      <div className="flex items-center gap-2 text-slate-400">
                        <StatIcon size={14} className="text-emerald-500" />
                        <span>{stat.label}</span>
                      </div>
                      <span className="font-bold text-white flex items-center gap-1">
                        {stat.value}
                        <ArrowUpRight size={10} className="text-emerald-400 opacity-60" />
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default WorldMap;
