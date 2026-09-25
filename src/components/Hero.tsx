import React from 'react';
import { motion } from 'motion/react';
import { Zap, MessageCircle, ArrowRight, ShieldCheck, Wifi } from 'lucide-react';

export default function Hero() {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('form-daftar');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Internet Rakyat Pekalongan Hero Section"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#8B0000] via-[#A50A20] to-[#C8102E] text-white shadow-2xl"
    >
      {/* Subtle Background Glow Effect */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-red-400/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-black/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-14 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* SISI KIRI: Headline, Sub-headline, Harga Mencolok, Tombol CTA */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Pill Badge Info */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide text-white mb-5 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span>Jaringan Fiber Optik Resmi Pekalongan</span>
            </div>

            {/* Headline Utama */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-black leading-tight sm:leading-tight tracking-tight text-white drop-shadow-sm">
              Internet Rakyat Sudah Aktif di Pekalongan!
            </h1>

            {/* Sub-headline */}
            <p className="mt-4 text-base sm:text-lg md:text-xl text-red-50/95 font-normal max-w-xl leading-relaxed">
              Sekarang hadir menjangkau Kota Pekalongan dan Kabupaten Pekalongan.
            </p>

            {/* KOTAK HARGA MENCILOK (Pusat Perhatian) */}
            <div className="mt-6 w-full max-w-md bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-2xl p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left transition-transform duration-300 hover:scale-[1.01]">
              <div className="flex flex-col">
                <span className="text-xs uppercase font-bold text-red-100 tracking-wider">
                  Biaya Langganan Flat:
                </span>
                <div className="flex items-baseline justify-center sm:justify-start gap-1 mt-0.5">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md">
                    Rp100.000
                  </span>
                  <span className="text-base sm:text-lg font-bold text-red-100">
                    / bulan
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-center sm:justify-start gap-1.5 text-xs sm:text-sm text-yellow-300 font-bold">
                  <Zap className="w-4 h-4 fill-yellow-300" />
                  <span>kecepatan up to 100Mbps</span>
                </div>
              </div>

              {/* Tag Unlimited */}
              <div className="hidden sm:flex flex-col items-center justify-center bg-white text-[#C8102E] px-3.5 py-2 rounded-xl shadow-xs shrink-0">
                <span className="text-[10px] uppercase font-extrabold tracking-wider">Kuota</span>
                <span className="text-sm font-black uppercase">UNLIMITED</span>
              </div>
            </div>

            {/* DUA TOMBOL CTA SEJAJAR */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              {/* Tombol Utama: Daftar Sekarang */}
              <a
                href="#form-daftar"
                onClick={handleScrollToForm}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white text-[#C8102E] hover:bg-red-50 active:scale-95 font-extrabold text-base rounded-full shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                <span>Daftar Sekarang</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              {/* Tombol Kedua: Tanya via WhatsApp */}
              <a
                href="https://wa.me/6285640066619"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 border-2 border-white text-white hover:bg-white/15 active:scale-95 font-bold text-base rounded-full transition-all duration-200 shadow-sm"
              >
                {/* SVG Icon WhatsApp */}
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Tanya via WhatsApp</span>
              </a>
            </div>

            {/* Quick Guarantees Under Buttons */}
            <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-red-100/90 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-green-300" />
                Tanpa Biaya Tersembunyi
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Wifi className="w-4 h-4 text-green-300" />
                Pemasangan Cepat & Rapi
              </span>
            </div>
          </div>

          {/* SISI KANAN: Gambar Pendukung (Keluarga Indonesia menggunakan internet di rumah) */}
          <div className="lg:col-span-5 relative flex justify-center mt-2 lg:mt-0">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame Behind Image */}
              <div
                className="absolute inset-0 bg-white/10 rounded-2xl transform rotate-2 scale-105"
                aria-hidden="true"
              />

              {/* Image Container with Rounded Corners & Shadow */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl bg-black/20 aspect-4/3">
                <img
                  src="/foto-ira-01.jpg"
                  alt="Keluarga bahagia berkumpul menggunakan internet WiFi di rumah"
                  className="w-full h-full object-cover object-top sm:object-center transform hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Overlay Badge On Image - Style Glassprism semi-transparan & sedikit blurry */}
                <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 overflow-hidden bg-slate-950/45 hover:bg-slate-950/55 backdrop-blur-[6px] rounded-xl px-2.5 py-2 sm:px-3 sm:py-2.5 border border-white/35 text-white flex items-center gap-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_-1px_1px_rgba(0,0,0,0.2)] max-w-[85%] sm:max-w-xs transition-all duration-300">
                  {/* Prismatic Top Edge Highlight & Sheen */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-white/20" />
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />

                  {/* Icon Wifi with subtle glass gradient */}
                  <div className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#E01A3D] to-[#8B0000] flex items-center justify-center text-white shrink-0 shadow-[0_2px_8px_rgba(200,16,46,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)]">
                    <Wifi className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                  </div>

                  {/* Badge Text with crisp drop shadow for maximum readability */}
                  <div className="relative z-10 text-left min-w-0 pr-1">
                    <div className="flex items-center gap-1.5">
                      <p className="text-[11px] sm:text-xs font-black text-white leading-tight truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                        WiFi Keluarga
                      </p>
                      <span className="text-[9px] font-black text-emerald-300 bg-emerald-950/70 px-1.5 py-0.5 rounded border border-emerald-400/40 shadow-xs shrink-0 drop-shadow-xs">
                        100% Aktif
                      </span>
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-white/95 font-semibold leading-tight truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)] mt-0.5">
                      Streaming & Belajar Nyaman
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
