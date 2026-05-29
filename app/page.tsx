import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Heart, Users, Shield, ChevronDown } from "lucide-react";

const stats = [
  { value: "50.000+", label: "Wanita Diskrining" },
  { value: "100+", label: "Kota Dijangkau" },
  { value: "1.500+", label: "Relawan Aktif" },
  { value: "20 Th", label: "Melayani Indonesia" },
];

const programs = [
  {
    icon: Shield,
    title: "Deteksi Dini",
    desc: "Skrining kanker payudara gratis bagi komunitas wanita di Jakarta dan sekitarnya.",
    color: "from-rose-500/20 to-pink-400/10",
  },
  {
    icon: Users,
    title: "Edukasi Komunitas",
    desc: "Program kesadaran kanker di berbagai kota dan desa di seluruh Indonesia.",
    color: "from-fuchsia-500/20 to-rose-400/10",
  },
  {
    icon: Heart,
    title: "Dukungan Penyintas",
    desc: "Mendampingi penyintas kanker melalui program dukungan emosional dan medis.",
    color: "from-pink-500/20 to-rose-300/10",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0e0610]">
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.png"
            alt="Breast Cancer Awareness"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0e0610]" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-600/20 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-rose-400/15 rounded-full blur-2xl animate-float pointer-events-none" style={{ animationDelay: "2s" }} />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-pink-400/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
            <span className="text-pink-200 text-xs font-body uppercase tracking-widest">Oktober — Bulan Kesadaran Kanker Payudara</span>
          </div>

          <h1 className="font-display font-bold text-white leading-tight mb-6" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
            Bersama Kita{" "}
            <span className="text-gradient">Melindungi</span>
            <br />Penyintas Kanker
          </h1>

          <p className="text-white/70 font-body text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Indonesian Cancer Society — hadir untuk edukasi, deteksi dini, dan dukungan bagi jutaan wanita Indonesia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fundraiser"
              className="group inline-flex items-center gap-2 px-8 py-4 ribbon-gradient rounded-full text-white font-body font-medium shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300"
            >
              Donasi Sekarang
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/25 rounded-full text-white font-body hover:bg-white/10 transition-all duration-300"
            >
              Pelajari Lebih
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs font-body uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative bg-[#0e0610] py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.value} className="glass-dark rounded-2xl p-6 text-center hover-lift border border-pink-900/30">
              <p className="font-display font-bold text-gradient mb-1" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                {s.value}
              </p>
              <p className="text-white/50 font-body text-sm uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROGRAM ===== */}
      <section className="bg-[#0e0610] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-pink-400 font-body text-xs uppercase tracking-widest mb-3">Program Kami</p>
            <h2 className="font-display text-white font-bold" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Apa yang Kami Lakukan
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.title} className={`glass-dark rounded-2xl p-8 bg-gradient-to-br ${p.color} hover-lift border border-pink-900/30 group`}>
                <div className="w-12 h-12 ribbon-gradient rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <p.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-white text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-white/55 font-body text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INFOGRAPHIC ===== */}
      <section className="bg-[#0e0610] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-pink-400 font-body text-xs uppercase tracking-widest mb-3">Edukasi</p>
            <h2 className="font-display text-white font-bold" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Kenali Faktanya
            </h2>
          </div>
          <div className="glass-dark rounded-3xl p-4 border border-pink-900/30 overflow-hidden shadow-2xl">
            <Image
              src="/infohomepage.png"
              alt="Infografis Kanker Payudara"
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center glass-dark rounded-3xl p-12 border border-pink-900/30 relative overflow-hidden">
          <div className="absolute inset-0 ribbon-gradient opacity-5 rounded-3xl" />
          <div className="relative z-10">
            <p className="text-pink-300 font-body text-sm uppercase tracking-widest mb-4">Bersama Kita Bisa</p>
            <h2 className="font-display text-white font-bold text-4xl md:text-5xl mb-6">
              Jadilah Bagian dari<br />Gerakan Ini
            </h2>
            <p className="text-white/55 font-body mb-8 max-w-lg mx-auto">
              Dukung program deteksi dini dan pengobatan kanker payudara di Indonesia dengan donasi Anda.
            </p>
            <Link
              href="/fundraiser"
              className="inline-flex items-center gap-2 px-10 py-4 ribbon-gradient rounded-full text-white font-body font-medium text-lg shadow-xl shadow-pink-500/30 hover:scale-105 transition-transform duration-300"
            >
              Mulai Berdonasi <Heart className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
