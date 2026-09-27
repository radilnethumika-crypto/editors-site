"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const next = () => setIndex(i => (i + 1) % testimonials.length);
  const prev = () => setIndex(i => (i - 1 + testimonials.length) % testimonials.length);
  const current = testimonials[index];

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="relative glass rounded-3xl p-8 md:p-12 overflow-hidden min-h-[280px]">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-[80px] pointer-events-none" />

        <Quote className="w-10 h-10 text-red-500/50 mb-6" />

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xl md:text-2xl leading-relaxed text-neutral-200 font-medium">
              "{current.text}"
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center font-bold text-lg">
                {current.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{current.name}</p>
                <p className="text-sm text-neutral-500">{current.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="glass w-10 h-10 rounded-full flex items-center justify-center hover:border-red-500/50 hover:text-red-500 transition"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-red-500" : "w-1.5 bg-neutral-700 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="glass w-10 h-10 rounded-full flex items-center justify-center hover:border-red-500/50 hover:text-red-500 transition"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}