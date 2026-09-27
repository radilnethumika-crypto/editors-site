"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { ArrowRight, Play } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center pt-20 pb-32">
      
      {/* === BACKGROUND EFFECTS === */}
      {/* Deep red/purple glow behind everything */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[150px] pointer-events-none -z-20" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none -z-20" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -z-20" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none -z-10" />

      {/* === FLOATING 3D IMAGES (Replace src with your images) === */}
      
            {/* === FLOATING 3D IMAGES === */}
      
      {/* Left - Film Strip */}
      <motion.img 
        initial={{ opacity: 0, x: -80, rotate: -20 }}
        animate={{ opacity: 0.9, x: 0, rotate: -12 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        src="/film.png"
        alt="Film strip"
              className="hidden lg:block absolute top-32 left-4 xl:left-10 w-32 xl:w-44 animate-float pointer-events-none drop-shadow-2xl opacity-70"

      />

      {/* Left Bottom - Laptop */}
      <motion.img 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        src="/laptop.png"
        alt="Editing laptop"
        className="hidden lg:block absolute -bottom-20 -left-32 w-[400px] xl:w-[550px] pointer-events-none drop-shadow-2xl opacity-60"
      />

      {/* Right Top - Camera */}
      <motion.img 
        initial={{ opacity: 0, x: 80, rotate: 20 }}
        animate={{ opacity: 1, x: 0, rotate: 8 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        src="/camera.png"
        alt="Cinema camera"
        className="hidden lg:block absolute top-10 -right-10 w-52 xl:w-64 animate-float pointer-events-none drop-shadow-2xl opacity-90"
      />

      {/* Right Bottom - UI Panels */}
      <motion.img 
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        src="/ui-panel.png"
        alt="UI panels"
        className="hidden lg:block absolute bottom-10 -right-16 w-40 xl:w-52 animate-float pointer-events-none drop-shadow-2xl opacity-60"
      />

      {/* === MAIN CONTENT (Center) === */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-medium text-neutral-300 tracking-wide">Available for new projects</span>
        </motion.div>

        {/* Logo / Name */}
        <motion.div variants={item} className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-red-500 flex items-center justify-center text-xs font-bold">
            {site.name.charAt(0)}
          </div>
          <span className="font-bold text-lg">{site.name}</span>
        </motion.div>

        {/* Massive Title */}
        <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight font-display">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            CRAFTING
          </span>
          <br />
          <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 drop-shadow-[0_0_40px_rgba(239,68,68,0.6)]">
  CINEMATIC STORIES
</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={item} className="mt-6 text-neutral-300 text-lg md:text-xl font-medium">
          Video & Photo Editing for Creators & Brands
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact" className="group relative bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-2 shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:shadow-[0_0_50px_rgba(239,68,68,0.6)] hover:scale-105">
            START A PROJECT
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </Link>
          <Link href="/portfolio" className="glass border-white/20 hover:border-white/40 px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-2 hover:scale-105">
            <Play className="w-4 h-4 fill-white" />
            Watch Showreel
          </Link>
        </motion.div>

        {/* Description */}
        <motion.p variants={item} className="mt-10 text-neutral-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          I'm <span className="text-white font-semibold">{site.name}</span> — a {site.role.toLowerCase()} helping creators & brands turn raw footage into scroll-stopping visuals.
        </motion.p>

      </motion.div>
    </section>
  );
}