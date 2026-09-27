import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowRight, MessageSquare, FileVideo, Sparkles, Package } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "1. Brief", desc: "You tell me your vision, style, and deadline." },
  { icon: FileVideo, title: "2. Send Files", desc: "Share footage or photos via Drive/WeTransfer." },
  { icon: Sparkles, title: "3. I Edit", desc: "I craft the edit with revisions along the way." },
  { icon: Package, title: "4. Delivery", desc: "Final files delivered in your preferred format." },
];

const faqs = [
  { q: "How long does a project take?", a: "Depends on scope — usually 3-7 days. Rush delivery available for urgent projects." },
  { q: "How many revisions can I get?", a: "Each package includes revisions. If you need more, we can discuss a custom quote." },
  { q: "What file formats do you work with?", a: "All major video formats (MP4, MOV, MXF, etc.) and RAW/JPEG photos." },
  { q: "How do I send you my files?", a: "Google Drive, Dropbox, or WeTransfer — whatever is easiest for you." },
  { q: "Do you offer custom packages?", a: "Yes! Message me on WhatsApp and we'll build a package that fits your project." },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-red-600/20 rounded-full blur-[120px] animate-aurora" />
          <div className="absolute inset-0 grid-pattern opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
          <p className="text-red-500 text-sm font-medium uppercase tracking-widest mb-3">Pricing</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
            Simple, honest <span className="gradient-text">pricing</span>
          </h1>
          <p className="text-neutral-400 mt-6 max-w-xl mx-auto text-lg">
            No hidden fees. Pick a package or message me for a custom quote.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        {services.map(group => (
          <div key={group.type} className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-purple-600 rounded-full" />
              <h2 className="text-3xl font-bold tracking-tight">{group.type}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {group.packages.map(p => <ServiceCard key={p.name} pkg={p} />)}
            </div>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-red-500 text-sm font-medium uppercase tracking-widest mb-3">Process</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">How it works</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.title} className="glass rounded-2xl p-6 relative hover:border-white/20 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg shadow-red-500/30">
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-red-500 text-sm font-medium uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Common questions</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="glass rounded-2xl p-5 group cursor-pointer hover:border-white/20 transition">
              <summary className="flex items-center justify-between font-medium list-none">
                {f.q}
                <span className="text-red-500 text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-neutral-400 mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 p-12 md:p-16 text-center">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/30 rounded-full blur-[120px] animate-aurora" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-tight">
            Not sure which package fits? <span className="gradient-text">Let&apos;s chat.</span>
          </h2>
          <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-white text-black hover:bg-red-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-2xl">
            Get a free quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
