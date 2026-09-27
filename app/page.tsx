import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import ServiceCard from "@/components/ServiceCard";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import FadeIn from "@/components/FadeIn";
import { site } from "@/data/site";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Showreel */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <FadeIn>
          <div className="text-center mb-10">
            <p className="text-red-500 text-sm font-medium uppercase tracking-widest mb-3">Showreel</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display">See my latest work</h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-red-500/10 hover:shadow-red-500/20 transition duration-500">
            <iframe src={site.showreel} className="w-full h-full" allowFullScreen />
          </div>
        </FadeIn>
      </section>

      {/* Featured Work */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="text-red-500 text-sm font-medium uppercase tracking-widest mb-3">Portfolio</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display">Featured Work</h2>
            </div>
            <Link href="/portfolio" className="glass hover:border-white/20 px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <WorkGrid />
        </FadeIn>
      </section>

      {/* Services preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-red-500 text-sm font-medium uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display">Editing Packages</h2>
            <p className="text-neutral-400 mt-4 max-w-xl mx-auto">Simple pricing. No hidden fees. Pick what fits your project.</p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services[0].packages.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <ServiceCard pkg={p} />
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Link href="/services" className="text-red-500 hover:text-red-400 font-medium inline-flex items-center gap-2 transition">
              See all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Testimonials Slider */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-red-500 text-sm font-medium uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display">What clients say</h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <TestimonialsSlider />
        </FadeIn>
      </section>

      {/* Big CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-12 md:p-20 text-center">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/30 rounded-full blur-[120px] animate-aurora" />
              <div className="absolute inset-0 grid-pattern opacity-50" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-tight font-display">
              Have a project in mind? <span className="gradient-text">Let's make it happen.</span>
            </h2>
            <p className="text-neutral-400 mt-6 max-w-md mx-auto">Get in touch for a free quote. I usually reply within a few hours.</p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 bg-white text-black hover:bg-red-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-2xl"
            >
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}