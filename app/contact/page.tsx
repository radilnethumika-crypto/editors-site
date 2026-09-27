import { site } from "@/data/site";
import { MessageCircle, Mail, MapPin, Clock, Camera, Play } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-[30%] w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] animate-aurora" />
          <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] animate-aurora-2" />
          <div className="absolute inset-0 grid-pattern opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
          <p className="text-red-500 text-sm font-medium uppercase tracking-widest mb-3">Contact</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
            Let's create <span className="gradient-text">something</span>
          </h1>
          <p className="text-neutral-400 mt-6 max-w-xl mx-auto text-lg">
            The fastest way to reach me is WhatsApp. I usually reply within a few hours.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="max-w-6xl mx-auto px-6 pb-10">
        <div className="grid md:grid-cols-3 gap-5">
          <a 
            href={`https://wa.me/${site.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20your%20editing%20services`}
            target="_blank"
            className="glass rounded-2xl p-6 hover:border-green-500/50 transition group"
          >
            <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <MessageCircle className="w-5 h-5 text-green-400" />
            </div>
            <h3 className="font-bold mb-1">WhatsApp</h3>
            <p className="text-sm text-neutral-400">Fastest reply</p>
          </a>

          <a href={`mailto:${site.email}`} className="glass rounded-2xl p-6 hover:border-red-500/50 transition group">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Mail className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="font-bold mb-1">Email</h3>
            <p className="text-sm text-neutral-400 break-all">{site.email}</p>
          </a>

          <div className="glass rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="font-bold mb-1">Location</h3>
            <p className="text-sm text-neutral-400">{site.location}</p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Form */}
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold mb-6">Send a message</h2>
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
              <div className="grid md:grid-cols-2 gap-4">
                <input name="name" placeholder="Your name" required className="w-full glass rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-red-500/50 transition" />
                <input name="email" type="email" placeholder="Your email" required className="w-full glass rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-red-500/50 transition" />
              </div>
              <select name="service" className="w-full glass rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-red-500/50 transition text-neutral-400">
                <option>Video Editing</option>
                <option>Photo Editing</option>
                <option>Both</option>
                <option>Custom project</option>
              </select>
              <textarea name="message" placeholder="Tell me about your project..." rows={6} required className="w-full glass rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-red-500/50 transition resize-none" />
              <button className="w-full bg-white text-black hover:bg-red-500 hover:text-white py-4 rounded-xl font-semibold transition shadow-lg shadow-white/10">
                Send Message →
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6">
              <Clock className="w-5 h-5 text-red-500 mb-3" />
              <h3 className="font-semibold mb-2">Response Time</h3>
              <p className="text-sm text-neutral-400">Usually within 2-4 hours. Available 7 days a week.</p>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Follow me</h3>
              <div className="flex gap-3">
                <a href={site.socials.instagram} target="_blank" className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-500/20 hover:text-red-400 flex items-center justify-center transition">
                  <Camera className="w-4 h-4" />
                </a>
                <a href={site.socials.youtube} target="_blank" className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-500/20 hover:text-red-400 flex items-center justify-center transition">
                  <Play className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-2">Available for</h3>
              <ul className="text-sm text-neutral-400 space-y-2">
                <li>✓ YouTube videos</li>
                <li>✓ Wedding edits</li>
                <li>✓ Product ads</li>
                <li>✓ Photo retouching</li>
                <li>✓ Social media reels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
