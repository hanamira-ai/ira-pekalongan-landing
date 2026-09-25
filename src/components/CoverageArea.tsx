import { CheckCircle2, MapPin, Building2, Trees, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function CoverageArea() {
  const kotaAreas = [
    'Pekalongan Barat',
    'Pekalongan Timur',
    'Pekalongan Utara',
    'Pekalongan Selatan',
  ];

  const kabAreas = [
    'Wiradesa',
    'Pekajangan',
    'Kedungwuni',
  ];

  const waCoverageUrl = 'https://wa.me/6285640066619?text=Halo%20Admin%20Internet%20Rakyat%20Pekalongan%2C%20mau%20tanya%20apakah%20wilayah%20saya%20sudah%20terjangkau%20jaringan%3F';

  return (
    <section
      id="area-cakupan"
      aria-labelledby="coverage-area-title"
      className="w-full bg-white rounded-3xl border border-gray-200/80 shadow-xs p-6 sm:p-10 md:p-12 transition-all"
    >
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-3">
          <MapPin className="w-3.5 h-3.5" />
          Cakupan Jaringan Fiber
        </div>

        <h2
          id="coverage-area-title"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight"
        >
          Sudah Menjangkau Wilayah Anda?
        </h2>

        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
          Internet Rakyat Pekalongan sudah aktif di beberapa wilayah berikut, dan terus bertambah setiap bulan
        </p>
      </div>

      {/* Two Columns Grid: Kota Pekalongan & Kabupaten Pekalongan */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        
        {/* Kolom 1: Kota Pekalongan */}
        <div className="bg-slate-50/80 rounded-2xl border border-gray-200/90 p-5 sm:p-6 flex flex-col justify-between hover:border-red-200 transition-colors">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-red-100/70 text-[#C8102E] flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  Kota Pekalongan
                </h3>
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Jaringan Aktif Siap Pasang
                </span>
              </div>
            </div>

            {/* Badges / Chips Kecamatan */}
            <div className="flex flex-wrap gap-2 pt-1">
              {kotaAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm font-semibold text-gray-800 shadow-2xs hover:border-red-300 hover:text-[#8B0000] transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-gray-200/60 flex items-center justify-between text-[11px] text-gray-500">
            <span>Status: 4 Kecamatan Utama</span>
            <span className="font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
              Tercakup
            </span>
          </div>
        </div>

        {/* Kolom 2: Kabupaten Pekalongan */}
        <div className="bg-slate-50/80 rounded-2xl border border-gray-200/90 p-5 sm:p-6 flex flex-col justify-between hover:border-red-200 transition-colors">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-red-100/70 text-[#C8102E] flex items-center justify-center shrink-0">
                <Trees className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  Kabupaten Pekalongan
                </h3>
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Jaringan Aktif Siap Pasang
                </span>
              </div>
            </div>

            {/* Badges / Chips Kecamatan */}
            <div className="flex flex-wrap gap-2 pt-1">
              {kabAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm font-semibold text-gray-800 shadow-2xs hover:border-red-300 hover:text-[#8B0000] transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-gray-200/60 flex items-center justify-between text-[11px] text-gray-500">
            <span>Ekspansi Terus Berjalan</span>
            <span className="font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
              Tercakup
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Subtext with WhatsApp Link */}
      <div className="mt-8 pt-6 border-t border-gray-100 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 bg-slate-50 px-4 py-2.5 rounded-2xl border border-gray-200/70">
          <span>Belum lihat wilayah Anda? Tetap tanya dulu ke kami, mungkin sudah bisa dijangkau.</span>
          <a
            href={waCoverageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold text-[#25D366] hover:text-[#1eb857] hover:underline underline-offset-4"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-white" />
            <span>Tanya via WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
