import { Star, MessageSquareQuote, ThumbsUp } from 'lucide-react';

interface TestimonialItem {
  name: string;
  location: string;
  initials: string;
  avatarBg: string;
  quote: string;
  highlight: string;
}

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      name: 'Bpk. Slamet Riyadi',
      location: 'Kota Pekalongan',
      initials: 'SR',
      avatarBg: 'bg-slate-200 text-slate-700',
      quote:
        'Biaya 100 ribu per bulan pas banget untuk keluarga. Anak-anak lancar buat tugas sekolah dan YouTube tanpa putus-putus.',
      highlight: 'Anak-anak belajar lancar',
    },
    {
      name: 'Ibu Siti Aminah',
      location: 'Kedungwuni',
      initials: 'SA',
      avatarBg: 'bg-red-100 text-[#C8102E]',
      quote:
        'Pemasangannya cepat, teknisinya ramah dan rapi. Internet stabil buat jualan online dan nonton TV pintar di rumah.',
      highlight: 'Teknisi ramah & rapi',
    },
    {
      name: 'Bpk. Ahmad Fauzi',
      location: 'Wiradesa',
      initials: 'AF',
      avatarBg: 'bg-emerald-100 text-emerald-800',
      quote:
        'Sangat hemat dibandingkan beli paket data terus menerus. Sudah sebulan pakai, sinyalnya tetap kencang dan aman.',
      highlight: 'Jauh lebih hemat',
    },
  ];

  return (
    <section
      id="testimoni"
      aria-labelledby="testimonials-title"
      className="w-full bg-white rounded-3xl border border-gray-200/80 shadow-xs p-6 sm:p-10 md:p-12 transition-all"
    >
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-3">
          <ThumbsUp className="w-3.5 h-3.5" />
          Pengalaman Pelanggan
        </div>

        <h2
          id="testimonials-title"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight"
        >
          Kata Mereka yang Sudah Pakai
        </h2>

        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
          Kenyamanan internet rumah murah dan stabil yang dirasakan langsung oleh warga Pekalongan.
        </p>
      </div>

      {/* Testimonials Grid: 1 col on mobile, 3 cols on tablet/desktop */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-slate-50/80 hover:bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 hover:border-red-200 hover:shadow-lg transition-all duration-300"
          >
            <div>
              {/* Top Row: 5 Star Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <MessageSquareQuote className="w-5 h-5 text-gray-300" />
              </div>

              {/* Kutipan Singkat */}
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                "{item.quote}"
              </p>
            </div>

            {/* Author Profile */}
            <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center gap-3">
              {/* Avatar bulat inisial */}
              <div
                className={`w-10 h-10 rounded-full font-bold text-sm flex items-center justify-center shrink-0 shadow-2xs ${item.avatarBg}`}
              >
                {item.initials}
              </div>

              <div className="flex flex-col text-left">
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                  {item.name}
                </h3>
                <span className="text-[11px] text-gray-500 font-medium">
                  {item.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer / Catatan Kejujuran */}
      <div className="mt-8 pt-4 text-center">
        <p className="text-[11px] sm:text-xs text-gray-400 italic">
          *Testimoni contoh, akan diperbarui dengan pelanggan asli.
        </p>
      </div>
    </section>
  );
}
