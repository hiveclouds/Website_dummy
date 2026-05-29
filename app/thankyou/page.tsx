"use client";
import Link from "next/link";
import { Heart, ArrowLeft, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#0e0610] flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 relative overflow-hidden">
        {/* Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-600/15 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-rose-600/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        {/* Pulse ring */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 rounded-full border border-pink-500/10 animate-[pulse-ring_3s_ease-out_infinite]" />
          <div className="absolute w-48 h-48 rounded-full border border-pink-500/15 animate-[pulse-ring_3s_ease-out_infinite_0.5s]" />
        </div>

        <div className="relative z-10 text-center max-w-xl">
          {/* Heart icon */}
          <div className="w-20 h-20 ribbon-gradient rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-pink-500/40 animate-float">
            <Heart className="w-9 h-9 text-white fill-white" />
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-pink-400" />
            <p className="text-pink-400 font-body text-xs uppercase tracking-widest">Terima Kasih!</p>
            <Sparkles className="w-5 h-5 text-pink-400" />
          </div>

          <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
            Dukungan Anda Berarti
          </h1>

          <p className="text-white/60 font-body text-base leading-relaxed mb-3">
            Bersama-sama kita bisa membuat perbedaan dalam perjuangan melawan kanker.
          </p>
          <p className="text-white/45 font-body text-sm leading-relaxed mb-10">
            Kami akan memberi tahu Anda tentang inisiatif terbaru kami dan bagaimana kontribusi Anda membantu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 ribbon-gradient rounded-full text-white font-body font-medium shadow-xl shadow-pink-500/30 hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
            </Link>
            <Link
              href="/fundraiser"
              className="inline-flex items-center gap-2 px-8 py-4 border border-pink-900/40 rounded-full text-white/70 hover:text-white hover:border-pink-400 font-body transition-all duration-300"
            >
              Donasi Lagi
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
