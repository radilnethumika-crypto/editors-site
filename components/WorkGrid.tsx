"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { works } from "@/data/works";
import { Play, ArrowUpRight } from "lucide-react";

// Bento layout patterns — 6 items සඳහා
const bentoSizes = [
  "lg:col-span-2 lg:row-span-2", // 1st: large
  "lg:col-span-1 lg:row-span-1", // 2nd: small
  "lg:col-span-1 lg:row-span-1", // 3rd: small
  "lg:col-span-1 lg:row-span-1", // 4th: small
  "lg:col-span-1 lg:row-span-1", // 5th: small
  "lg:col-span-2 lg:row-span-1", // 6th: wide
];

const heights = ["h-[480px]", "h-[230px]", "h-[230px]", "h-[230px]", "h-[230px]", "h-[230px]"];

export default function WorkGrid() {
  const [tab, setTab] = useState<"all" | "video" | "photo">("all");
  const filtered = tab === "all" ? works : works.filter(w => w.category === tab);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-2 mb-10 justify-center">
        {(["all", "video", "photo"] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
              tab === t
                ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                : "glass text-neutral-400 hover:text-white hover:border-white/20"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[230px] gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((w, i) => (
            <motion.a
              key={w.id}
              href={w.link || "#"}
              target={w.link ? "_blank" : undefined}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/5 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 ${
                tab === "all" ? bentoSizes[i] || "lg:col-span-1 lg:row-span-1" : "lg:col-span-1 lg:row-span-1"
              } ${tab === "all" ? heights[i] || "h-[230px]" : "h-[230px]"} sm:h-[280px] lg:h-auto`}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={w.thumb}
                  alt={w.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-xs font-medium">
                  {w.tag}
                </div>

                {/* Arrow top right */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Play button */}
                {w.category === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-500/90 backdrop-blur-md flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-2xl shadow-red-500/50">
                      <Play className="w-6 h-6 fill-white text-white ml-0.5" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-bold text-lg md:text-xl group-hover:text-red-400 transition font-display">
                    {w.title}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}