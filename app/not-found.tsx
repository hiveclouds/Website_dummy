import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0e0610] flex items-center justify-center px-6 text-center">
      <div>
        <p className="font-display text-gradient font-bold" style={{ fontSize: "8rem", lineHeight: 1 }}>404</p>
        <h2 className="text-white font-display text-3xl mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-white/50 font-body mb-8">Halaman yang Anda cari tidak ada.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 ribbon-gradient rounded-full text-white font-body">
          <ArrowLeft className="w-4 h-4" /> Kembali
        </Link>
      </div>
    </div>
  );
}
