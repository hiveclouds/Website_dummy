"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bell, Mail, Phone } from "lucide-react";

export default function NewsletterPage() {
  const router = useRouter();
  const [contact, setContact] = useState("");
  const [type, setType] = useState<"email" | "phone">("email");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) return;
    setLoading(true);
    setTimeout(() => router.push("/thankyou"), 1000);
  };

  return (
    <div className="min-h-screen bg-[#0e0610]">
      <Navbar />

      <section className="relative pt-40 pb-24 px-6 flex items-center justify-center min-h-screen">
        {/* Decorative */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-lg w-full relative z-10">
          <div className="glass-dark rounded-3xl p-10 md:p-12 border border-pink-900/30 text-center shadow-2xl">
            {/* Icon */}
            <div className="w-16 h-16 ribbon-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg animate-float">
              <Bell className="w-7 h-7 text-white" />
            </div>

            <p className="text-pink-400 font-body text-xs uppercase tracking-widest mb-3">Newsletter</p>
            <h1 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
              Tetap Terhubung
            </h1>
            <p className="text-white/55 font-body text-sm leading-relaxed mb-8">
              Daftar untuk menerima pembaruan kami. Kami tidak akan membanjiri Anda — hanya hal-hal menarik yang perlu Anda ketahui.
            </p>

            {/* Toggle type */}
            <div className="flex gap-2 p-1 glass rounded-full mb-6 border border-pink-900/30">
              {(["email", "phone"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`flex-1 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                    type === t
                      ? "ribbon-gradient text-white shadow-md"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {t === "email" ? <Mail className="w-4 h-4" /> : <Phone className="w-4 h-4" />}
                  {t === "email" ? "Email" : "Nomor HP"}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type={type === "email" ? "email" : "tel"}
                required
                placeholder={type === "email" ? "email@domain.com" : "+62 812 3456 7890"}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full bg-white/5 border border-pink-900/40 text-white placeholder-white/30 rounded-xl px-5 py-4 font-body text-sm text-center focus:outline-none focus:border-pink-400 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="py-4 ribbon-gradient rounded-xl text-white font-body font-semibold shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Daftarkan Saya"
                )}
              </button>
            </form>

            <p className="text-white/25 text-xs font-body mt-5">
              Privasi Anda aman bersama kami. Anda bisa berhenti berlangganan kapan saja.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
