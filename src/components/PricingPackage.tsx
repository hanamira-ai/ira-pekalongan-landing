import React from 'react';
import { Check, Zap, Sparkles, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function PricingPackage() {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('form-daftar');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    'Tanpa kontrak jangka panjang',
    'Gratis survei lokasi',
    'Instalasi oleh teknisi resmi',
    'Bantuan teknis siap membantu',
  ];

  return (
    <section
      id="paket-harga"
      aria-labelledby="pricing-package-title"
      className="w-full bg-white rounded-3xl border border-gray-200/80 shadow-xs p-5 sm:p-10 md:p-12 transition-all"
    >
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Harga Transparan & Terjangkau
        </div>

        <h2
          id="pricing-package-title"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight"
        >
          Paket Internet Rakyat
        </h2>

        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
          Satu harga pasti untuk seluruh keluarga di Kota & Kabupaten Pekalongan tanpa ada biaya tersembunyi.
        </p>
      </div>

      {/* Satu Kartu Besar di Tengah Halaman */}
      <div className="mt-8 sm:mt-10 max-w-xl mx-auto">
        <div className="relative rounded-3xl bg-white p-5 sm:p-9 border-2 border-red-500/40 shadow-xl shadow-red-500/10 hover:shadow-2xl hover:shadow-red-500/15 transition-all duration-300 transform hover:-translate-y-0.5">
          
          {/* Label Badge Rekomendasi di Pojok Atas */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 w-max max-w-[90%]">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#8B0000] to-[#C8102E] text-white text-[11px] sm:text-xs font-extrabold tracking-wide uppercase shadow-md truncate">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current shrink-0" />
              Paket Favorit & Rekomendasi
            </span>
          </div>

          {/* Card Top: Nama Paket & Kecepatan */}
          <div className="pt-3 text-center sm:text-left border-b border-gray-100 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                  Paket Rumahan
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  Ideal untuk kebutuhan keluarga, belajar daring, kerja, & streaming
                </p>
              </div>

              {/* Speed Badge */}
              <div className="self-center sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold shrink-0">
                <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Up to 100 Mbps</span>
              </div>
            </div>

            {/* Nominal Harga Besar */}
            <div className="mt-5 flex items-baseline justify-center sm:justify-start gap-1.5 sm:gap-2">
              <span className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
                Rp100.000
              </span>
              <span className="text-base sm:text-xl font-bold text-gray-500">
                /bulan
              </span>
            </div>
            <p className="mt-1.5 text-xs text-emerald-600 font-semibold flex items-center justify-center sm:justify-start gap-1">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              Harga tetap setiap bulan, tanpa jebakan kenaikan tarif
            </p>
          </div>

          {/* Feature List dengan Icon Centang */}
          <div className="py-6 space-y-3.5">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Fasilitas & Keuntungan:
            </p>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tombol Besar di Bawah Kartu */}
          <div className="pt-2">
            <a
              href="#form-daftar"
              onClick={handleScrollToForm}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-gradient-to-r from-[#8B0000] via-[#A50A20] to-[#C8102E] hover:from-[#750000] hover:to-[#B00D26] active:scale-[0.99] text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-lg hover:shadow-xl hover:shadow-red-500/25 transition-all duration-200"
            >
              <span>Pilih Paket Ini</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </a>

            <p className="mt-3 text-center text-[11px] sm:text-xs text-gray-400 flex items-center justify-center gap-1.5">
              <HeartHandshake className="w-3.5 h-3.5 text-gray-400" />
              Proses pendaftaran mudah, pembayaran dilakukan setelah pasang
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
