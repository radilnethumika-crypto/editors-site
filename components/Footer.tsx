import Link from "next/link";
import { site } from "@/data/site";
import { Camera, Play, Mail, MapPin, ArrowUpRight } from "lucide-react";

const links = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-16 relative">
        {/* Big CTA text */}
        <div className="mb-16">
          <p className="text-neutral-500 text-sm uppercase tracking-widest mb-3">Let&apos;s work together</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-none">
            Have an idea?<br />
            <a href={`mailto:${site.email}`} className="gradient-text hover:opacity-80 transition inline-flex items-center gap-2">
              Let's talk <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12" />
            </a>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-xl flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center text-sm">
                {site.name.charAt(0)}
              </span>
              {site.name}
            </Link>
            <p className="text-neutral-400 max-w-sm leading-relaxed">
              {site.tagline} Based in {site.location}.
            </p>
            <div className="flex gap-3 mt-6">
              <a href={site.socials.instagram} target="_blank" className="glass w-10 h-10 rounded-full flex items-center justify-center hover:border-red-500/50 hover:text-red-500 transition">
                <Camera className="w-4 h-4" />
              </a>
              <a href={site.socials.youtube} target="_blank" className="glass w-10 h-10 rounded-full flex items-center justify-center hover:border-red-500/50 hover:text-red-500 transition">
                <Play className="w-4 h-4" />
              </a>
              <a href={`mailto:${site.email}`} className="glass w-10 h-10 rounded-full flex items-center justify-center hover:border-red-500/50 hover:text-red-500 transition">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-widest text-neutral-500">Navigate</h3>
            <ul className="space-y-3">
              {links.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-neutral-400 hover:text-white transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-widest text-neutral-500">Contact</h3>
            <ul className="space-y-3 text-neutral-400">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-red-500" />
                <a href={`mailto:${site.email}`} className="hover:text-white transition break-all">{site.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-red-500" />
                <span>{site.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Crafted with 🎬 & ☕</p>
        </div>
      </div>
    </footer>
  );
}
