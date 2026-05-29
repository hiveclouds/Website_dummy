import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Heart, Users, Globe } from "lucide-react";

const risks = [
  { category: "Usia", low: "30-an: 1 dari 233", medium: "40-an: 1 dari 69\n50-an: 1 dari 38", high: "60-an: 1 dari 27\n70-an: 1 dari 18" },
  { category: "Riwayat Keluarga", low: "Tidak ada riwayat kanker", medium: "Keluarga dengan kanker di satu sisi", high: "Keluarga di kedua sisi (ayah/ibu)" },
  { category: "Kebiasaan", low: "Tidak merokok atau minum alkohol", medium: "Kadang merokok / jarang berolahraga", high: "Setiap hari minum alkohol atau merokok" },
];

const values = [
  { icon: Shield, label: "Deteksi Dini", desc: "Skrining gratis untuk semua wanita" },
  { icon: Users, label: "Komunitas", desc: "Edukasi di kota & desa Indonesia" },
  { icon: Globe, label: "Kolaborasi", desc: "Bermitra dengan pemerintah & swasta" },
  { icon: Heart, label: "Dukungan", desc: "Pendampingan penyintas kanker" },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#0e0610]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-pink-400 font-body text-xs uppercase tracking-widest mb-4">Tentang Kami</p>
          <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            Indonesian<br /><span className="text-gradient">Cancer Society</span>
          </h1>
        </div>
      </section>

      {/* About text */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto glass-dark rounded-3xl p-10 border border-pink-900/30">
          <p className="text-white/75 font-body text-base md:text-lg leading-loose">
            Indonesian Cancer Society adalah organisasi nirlaba yang aktif mempromosikan deteksi dini kanker payudara dengan menyediakan{" "}
            <span className="text-pink-300 font-medium">skrining payudara gratis</span> bagi komunitas wanita di Jakarta dan sekitarnya. Kami secara aktif memberikan edukasi tentang kesadaran kanker payudara kepada komunitas wanita di banyak kota dan desa di seluruh Indonesia.
          </p>
          <p className="text-white/75 font-body text-base md:text-lg leading-loose mt-6">
            Melalui media elektronik, stasiun TV nasional dan swasta, serta radio, kami mempromosikan kesadaran kanker payudara secara masif. Kami bekerja erat dengan berbagai organisasi profesional dan pemerintah untuk mempromosikan kesadaran dan deteksi dini secara nasional.
          </p>
        </div>
      </section>

      {/* Values grid */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((v) => (
            <div key={v.label} className="glass-dark rounded-2xl p-6 text-center border border-pink-900/30 hover-lift">
              <div className="w-12 h-12 ribbon-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <v.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display text-white text-lg font-semibold mb-1">{v.label}</h3>
              <p className="text-white/45 font-body text-xs">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Risk table */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-pink-400 font-body text-xs uppercase tracking-widest mb-3">Kesehatan</p>
            <h2 className="font-display text-white font-bold text-3xl md:text-4xl">
              Faktor Risiko Kanker Payudara
            </h2>
          </div>

          <div className="overflow-x-auto">
            <div className="glass-dark rounded-3xl border border-pink-900/30 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="ribbon-gradient">
                    <th className="text-left p-5 text-white font-body text-sm uppercase tracking-wider">Kategori</th>
                    <th className="text-left p-5 text-white font-body text-sm uppercase tracking-wider">Risiko Rendah</th>
                    <th className="text-left p-5 text-white font-body text-sm uppercase tracking-wider">Risiko Sedang</th>
                    <th className="text-left p-5 text-white font-body text-sm uppercase tracking-wider">Risiko Tinggi</th>
                  </tr>
                </thead>
                <tbody>
                  {risks.map((r, i) => (
                    <tr key={r.category} className={i % 2 === 0 ? "bg-pink-900/10" : "bg-transparent"}>
                      <td className="p-5 font-display text-pink-300 text-lg font-semibold">{r.category}</td>
                      <td className="p-5 text-white/60 font-body text-sm whitespace-pre-line">{r.low}</td>
                      <td className="p-5 text-yellow-300/70 font-body text-sm whitespace-pre-line">{r.medium}</td>
                      <td className="p-5 text-rose-400 font-body text-sm whitespace-pre-line">{r.high}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
