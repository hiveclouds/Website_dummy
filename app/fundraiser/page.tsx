"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Upload, ChevronDown } from "lucide-react";

const amounts = ["Rp 50.000", "Rp 100.000", "Rp 500.000", "Rp 1.000.000+"];

export default function FundraiserPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "", email: "", gender: "", purposes: [] as string[],
    amount: "", bank: "", message: "", file: null as File | null,
  });
  const [loading, setLoading] = useState(false);

  const togglePurpose = (p: string) => {
    setForm((prev) => ({
      ...prev,
      purposes: prev.purposes.includes(p)
        ? prev.purposes.filter((x) => x !== p)
        : [...prev.purposes, p],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push("/thankyou"), 1200);
  };

  return (
    <div className="min-h-screen bg-[#0e0610]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl" />
        <p className="text-pink-400 font-body text-xs uppercase tracking-widest mb-4">Fundraising</p>
        <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
          Jadilah <span className="text-gradient">Fundraiser</span>
        </h1>
        <p className="text-white/55 font-body max-w-lg mx-auto">
          Donasi Anda mendukung deteksi dini, pengobatan, dan kampanye kesadaran kanker payudara di seluruh Indonesia.
        </p>
      </section>

      {/* Form */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto glass-dark rounded-3xl p-8 md:p-12 border border-pink-900/30">
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-pink-200 font-body text-xs uppercase tracking-widest mb-2">Nama Lengkap *</label>
                <input
                  type="text"
                  required
                  placeholder="Nama Anda"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-pink-900/40 text-white placeholder-white/30 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-pink-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-pink-200 font-body text-xs uppercase tracking-widest mb-2">Email *</label>
                <input
                  type="email"
                  required
                  placeholder="email@domain.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-pink-900/40 text-white placeholder-white/30 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-pink-400 transition-colors"
                />
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-pink-200 font-body text-xs uppercase tracking-widest mb-3">Gender *</label>
              <div className="flex gap-3 flex-wrap">
                {["Pria", "Wanita", "Non-Biner"].map((g) => (
                  <label key={g} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      required
                      checked={form.gender === g}
                      onChange={(e) => setForm({ ...form, gender: e.target.value })}
                      className="accent-pink-500 w-4 h-4"
                    />
                    <span className="text-white/70 font-body text-sm">{g}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Purpose */}
            <div>
              <label className="block text-pink-200 font-body text-xs uppercase tracking-widest mb-3">Tujuan Donasi</label>
              <div className="flex gap-3 flex-wrap">
                {["Edukasi", "Pengobatan", "Kampanye Awareness"].map((p) => (
                  <label key={p} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.purposes.includes(p)}
                      onChange={() => togglePurpose(p)}
                      className="accent-pink-500 w-4 h-4"
                    />
                    <span className="text-white/70 font-body text-sm">{p}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Amount */}
            <div>
              <label className="block text-pink-200 font-body text-xs uppercase tracking-widest mb-3">Jumlah Donasi *</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {amounts.map((a) => (
                  <button
                    type="button"
                    key={a}
                    onClick={() => setForm({ ...form, amount: a })}
                    className={`py-3 rounded-xl border text-sm font-body font-medium transition-all duration-200 ${
                      form.amount === a
                        ? "ribbon-gradient border-transparent text-white shadow-lg shadow-pink-500/30"
                        : "border-pink-900/40 text-white/60 hover:border-pink-400 hover:text-white bg-white/5"
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            {/* Bank */}
            <div>
              <label className="block text-pink-200 font-body text-xs uppercase tracking-widest mb-2">Transfer Bank</label>
              <div className="relative">
                <select
                  value={form.bank}
                  onChange={(e) => setForm({ ...form, bank: e.target.value })}
                  className="w-full bg-white/5 border border-pink-900/40 text-white rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-pink-400 appearance-none transition-colors"
                >
                  <option value="" className="bg-gray-900">Pilih bank...</option>
                  <option value="BCA" className="bg-gray-900">BCA</option>
                  <option value="Mandiri" className="bg-gray-900">Mandiri</option>
                  <option value="BRI" className="bg-gray-900">BRI</option>
                  <option value="BNI" className="bg-gray-900">BNI</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-pink-200 font-body text-xs uppercase tracking-widest mb-2">Pesan *</label>
              <textarea
                required
                rows={4}
                placeholder="Kata-kata dukungan Anda..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-pink-900/40 text-white placeholder-white/30 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:border-pink-400 transition-colors resize-none"
              />
            </div>

            {/* Upload */}
            <div>
              <label className="block text-pink-200 font-body text-xs uppercase tracking-widest mb-2">Bukti Pembayaran</label>
              <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-pink-900/40 rounded-xl cursor-pointer hover:border-pink-400 transition-colors bg-white/5">
                <Upload className="w-6 h-6 text-pink-400 mb-2" />
                <span className="text-white/40 text-sm font-body">
                  {form.file ? form.file.name : "Upload file bukti transfer"}
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setForm({ ...form, file: e.target.files?.[0] || null })}
                />
              </label>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-4 ribbon-gradient rounded-xl text-white font-body font-semibold shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Heart className="w-4 h-4" /> Submit Donasi
                  </>
                )}
              </button>
              <button
                type="reset"
                className="px-6 py-4 border border-pink-900/40 rounded-xl text-white/60 hover:text-white hover:border-pink-400 font-body text-sm transition-all duration-200"
                onClick={() => setForm({ name: "", email: "", gender: "", purposes: [], amount: "", bank: "", message: "", file: null })}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
