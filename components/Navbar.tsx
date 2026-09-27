"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-black/40 to-transparent">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-lg flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center text-sm group-hover:scale-110 transition">
            {site.name.charAt(0)}
          </span>
          <span className="tracking-tight">{site.name}</span>
        </Link>

        <ul className="hidden md:flex gap-1 glass rounded-full p-1">
          {links.map(l => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link 
                  href={l.href} 
                  className={`px-4 py-2 text-sm rounded-full transition ${
                    active 
                      ? "bg-white/10 text-white font-medium backdrop-blur-xl border border-white/10"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link href="/contact" className="hidden md:inline-flex bg-red-500 hover:bg-red-600 px-5 py-2.5 rounded-full text-sm font-medium transition shadow-lg shadow-red-500/30">
          Hire Me
        </Link>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-2 px-6 pb-6 pt-2">
          {links.map(l => (
            <li key={l.href}>
              <Link 
                href={l.href} 
                onClick={() => setOpen(false)} 
                className={`block py-2 px-4 rounded-lg transition ${
                  pathname === l.href ? "bg-white/5 text-white" : "text-neutral-400 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}