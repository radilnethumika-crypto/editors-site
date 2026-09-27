import { site } from "@/data/site";
import { Award, Zap, Users, Clock, CheckCircle2 } from "lucide-react";

const timeline = [
  { year: "2019", title: "Started Editing", desc: "Began with YouTube vlogs and personal projects." },
  { year: "2021", title: "Went Pro", desc: "Started working with brands, YouTubers, and wedding clients." },
  { year: "2023", title: "Advanced Skills", desc: "Added motion graphics, color grading, and VFX work." },
  { year: "2026", title: "Today", desc: "150+ projects delivered across Sri Lanka and beyond." },
];

const values = [
  { icon: Zap, title: "Fast Turnaround", desc: "Quick delivery without compromising on quality." },
  { icon: Award, title: "Cinematic Quality", desc: "Every frame crafted with attention to detail." },
  { icon: Users, title: "Client First", desc: "Unlimited communication until you're happy." },
  { icon: Clock, title: "On Time", desc: "Deadlines respected. Every single time." },
];

const tools = ["Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop", "Lightroom", "CapCut", "Figma", "Illustrator"];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] animate-aurora" />
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] animate-aurora-2" />
          <div className="absolute inset-0 grid-pattern opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
          <p className="text-red-500 text-sm font-medium uppercase tracking-widest mb-3">About</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none max-w-3xl">
            Turning raw footage into <span className="gradient-text">stories</span>.
          </h1>

          <div className="grid md:grid-cols-5 gap-10 mt-16 items-start">
            <div className="md:col-span-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600" 
                  alt={site.name} 
                  className="w-full rounded-3xl border border-white/10 aspect-square object-cover"
                />
                <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 backdrop-blur-xl">
                  <p className="text-3xl font-bold gradient-text">5+</p>
                  <p className="text-xs text-neutral-400 mt-1">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 md:pt-4">
              <h2 className="text-2xl font-bold mb-4">Hi, I'm {site.name} 👋</h2>
              <div className="space-y-4 text-neutral-400 leading-relaxed">
                <p>
                  I'm a passionate <span className="text-white font-medium">{site.role}</span> based in {site.location}. 
                  I help creators, brands, and couples turn their raw footage into cinematic stories that 
                  capture attention and emotion.
                </p>
                <p>
                  Every project I take on gets my full attention — from understanding your vision, to color grading, 
                  sound design, and final delivery. No shortcuts. No half-work.
                </p>
                <p>
                  Whether it's a YouTube video, a wedding highlight, or a product ad — I treat every frame 
                  like it's going on the big screen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">What you get working with me</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map(v => (
            <div key={v.title} className="glass rounded-2xl p-6 hover:border-white/20 transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-purple-600/20 border border-white/10 flex items-center justify-center mb-4">
                <v.icon className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">My Journey</h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-red-500 via-purple-500 to-transparent" />
          {timeline.map((t, i) => (
            <div key={t.year} className="relative pl-20 pb-12 last:pb-0">
              <div className="absolute left-4 top-0 w-8 h-8 rounded-full bg-[#050505] border-2 border-red-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-red-500" />
              </div>
              <p className="text-red-500 font-bold text-sm mb-1">{t.year}</p>
              <h3 className="text-xl font-bold mb-2">{t.title}</h3>
              <p className="text-neutral-400">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Tools I use daily</h2>
        <p className="text-neutral-400 mb-10">The right tool for the right job.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map(t => (
            <div key={t} className="glass rounded-full px-5 py-2.5 flex items-center gap-2 hover:border-red-500/50 transition">
              <CheckCircle2 className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium">{t}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}