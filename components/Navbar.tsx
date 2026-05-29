"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Ribbon } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/profile", label: "Profil" },
  { href: "/fundraiser", label: "Donasi" },
  { href: "/newsletter", label: "Newsletter" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark shadow-xl shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full ribbon-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Ribbon className="w-4 h-4 text-white" />
          </span>
          <div>
            <p className="text-white font-display font-bold text-lg leading-none">ICS</p>
            <p className="text-rose-200 text-[10px] uppercase tracking-widest font-body">Indonesia</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-5 py-2 text-white/80 hover:text-white font-body text-sm tracking-wide rounded-full hover:bg-white/10 transition-all duration-200"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/fundraiser"
            className="ml-3 px-6 py-2 ribbon-gradient text-white font-body text-sm font-medium rounded-full shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300"
          >
            Donasi Sekarang
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-dark border-t border-white/10 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white py-3 border-b border-white/10 font-body text-sm"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/fundraiser"
            className="mt-3 py-3 ribbon-gradient text-white text-center font-medium rounded-full font-body"
            onClick={() => setOpen(false)}
          >
            Donasi Sekarang
          </Link>
        </div>
      )}
    </header>
  );
}
