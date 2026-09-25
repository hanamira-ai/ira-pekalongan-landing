import React from 'react';
import { Tag, Zap, ShieldCheck, MapPin } from 'lucide-react';

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

export default function WhyChooseUs() {
  const benefits: BenefitItem[] = [
    {
      icon: <Tag className="w-6 h-6 text-[#C8102E]" />,
      title: "Harga Flat, Tanpa Syarat Ribet",
      description: "Rp100.000 per bulan, tanpa biaya tersembunyi dan tanpa syarat aneh-aneh.",
      badge: "Transparan",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#C8102E]" />,
      title: "Pasang Cepat",
      description: "Setelah daftar, tim kami segera survei dan proses pemasangan tidak berbelit.",
      badge: "Tanpa Antre Lama",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#C8102E]" />,
      title: "Agen Resmi & Bergaransi",
      description: "Kami adalah mitra resmi Internet Rakyat, jadi layanan dan garansi produk terjamin.",
      badge: "100% Terpercaya",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#C8102E]" />,
      title: "Support Lokal Pekalongan",
      description: "Tim kami berada langsung di Pekalongan, jadi kalau ada kendala, respon cepat.",
      badge: "Siap Datang",
    },
  ];

  return (
    <section
      id="kenapa-kami"
      aria-labelledby="why-choose-us-title"
      className="w-full bg-white rounded-3xl border border-gray-200/80 shadow-sm p-6 sm:p-10 md:p-12 transition-all"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-3">
          <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
          Keunggulan Layanan
        </div>

        {/* Section Heading */}
        <h2
          id="why-choose-us-title"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight"
        >
          Kenapa Pilih Internet Rakyat Pekalongan?
        </h2>

        {/* Short Subtext */}
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Pilihan terbaik untuk internet rumah murah, kencang, dan didukung penuh oleh tim teknisi lokal berpengalaman.
        </p>
      </div>

      {/* Grid Cards: 1 column on mobile, 2 cols on tablet, 4 cols on desktop */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-start bg-slate-50 hover:bg-white p-6 rounded-2xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Top Row: Icon with soft red background + subtle badge */}
            <div className="flex items-center justify-between w-full mb-5">
              <div className="w-12 h-12 rounded-xl bg-red-50 group-hover:bg-red-100/70 border border-red-100 flex items-center justify-center transition-colors">
                {item.icon}
              </div>
              {item.badge && (
                <span className="text-[11px] font-semibold text-gray-500 bg-white group-hover:bg-red-50 group-hover:text-[#C8102E] px-2.5 py-1 rounded-full border border-gray-200 transition-colors">
                  {item.badge}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#8B0000] transition-colors leading-snug">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>

            {/* Subtle bottom red accent line on hover */}
            <div className="mt-auto pt-4 w-full">
              <div className="h-1 w-8 rounded-full bg-transparent group-hover:bg-linear-to-r group-hover:from-[#8B0000] group-hover:to-[#C8102E] transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
