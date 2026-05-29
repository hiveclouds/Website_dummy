import Link from "next/link";
import { Ribbon, Heart, Globe, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#1a0a12] text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 ribbon-gradient w-full" />

      {/* Floating orb decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-pink-900/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full ribbon-gradient flex items-center justify-center">
              <Ribbon className="w-5 h-5 text-white" />
            </span>
            <div>
              <p className="font-display font-bold text-xl">Indonesian Cancer Society</p>
              <p className="text-pink-300/60 text-xs tracking-widest uppercase">Bersama Melawan Kanker</p>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-relaxed font-body">
            Mendukung deteksi dini, pengobatan, dan kesadaran kanker payudara di seluruh Indonesia sejak 2024.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4 text-pink-200">Navigasi</h4>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Beranda" },
              { href: "/profile", label: "Tentang Kami" },
              { href: "/fundraiser", label: "Donasi" },
              { href: "/newsletter", label: "Newsletter" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-white/50 hover:text-pink-300 text-sm font-body transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social / CTA */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4 text-pink-200">Ikuti Kami</h4>
          <div className="flex gap-3 mb-6">
            {[Globe, Mail, Phone].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-pink-400 hover:bg-pink-400/10 transition-all duration-200"
              >
                <Icon className="w-4 h-4 text-white/60" />
              </a>
            ))}
          </div>
          <p className="text-white/40 text-xs font-body">
            📍 Jakarta, Indonesia<br />
            ✉️ info@indonesiancancersociety.org
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-white/30 text-xs font-body">
          © 2024 Indonesian Cancer Society. Dibuat dengan <Heart className="inline w-3 h-3 text-pink-400" /> untuk Indonesia.
        </p>
        <p className="text-white/20 text-xs font-body">Zevanya Aldrine · TMJ 3B · 2307421051</p>
      </div>
    </footer>
  );
}
