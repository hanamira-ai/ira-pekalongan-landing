import { useState } from 'react';
import {
  FileEdit,
  Compass,
  Wrench,
  Wifi,
  ChevronDown,
  HelpCircle,
  ListOrdered,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

interface StepItem {
  number: string;
  title: string;
  desc: string;
  icon: typeof FileEdit;
}

interface FaqItem {
  question: string;
  answer: string;
}

export default function HowItWorksAndFaq() {
  // Accordion state: track which items are open (allow multiple or toggle single)
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const steps: StepItem[] = [
    {
      number: '1',
      title: 'Isi Form',
      desc: 'Isi data diri dan alamat di form pendaftaran',
      icon: FileEdit,
    },
    {
      number: '2',
      title: 'Survei Lokasi',
      desc: 'Tim kami cek jangkauan sinyal ke lokasi Anda',
      icon: Compass,
    },
    {
      number: '3',
      title: 'Instalasi',
      desc: 'Teknisi pasang perangkat langsung di rumah',
      icon: Wrench,
    },
    {
      number: '4',
      title: 'Internet Aktif',
      desc: 'Selesai, internet siap dipakai bersama keluarga',
      icon: Wifi,
    },
  ];

  const faqs: FaqItem[] = [
    {
      question: 'Apakah perlu beli perangkat sendiri?',
      answer:
        'Tidak perlu. Perangkat WiFi/modem sudah disediakan dan dipinjamkan selama berlangganan, jadi Anda tidak perlu keluar biaya untuk beli perangkat sendiri.',
    },
    {
      question: 'Apakah ada kontrak minimal berlangganan?',
      answer:
        'Tidak ada kontrak jangka panjang. Layanan bersifat fleksibel, tidak ada penalti dan Anda bisa berhenti berlangganan kapan saja sesuai kebutuhan.',
    },
    {
      question: 'Berapa lama proses pemasangan setelah daftar?',
      answer:
        'Rata-rata proses survei dan instalasi berkisar antara 2–5 hari kerja setelah data pendaftaran diverifikasi, menyesuaikan dengan jadwal dan antrean teknisi di area Anda.',
    },
    {
      question: 'Bagaimana kalau ada gangguan internet?',
      answer:
        'Jangan khawatir, tim support lokal kami berada langsung di Pekalongan. Cukup hubungi kami lewat WhatsApp, teknisi siap mengecek dan membantu penyelesaian secepatnya.',
    },
  ];

  return (
    <section
      id="cara-pasang-faq"
      aria-label="Cara Berlangganan dan FAQ"
      className="w-full bg-white rounded-3xl border border-gray-200/80 shadow-xs p-6 sm:p-10 md:p-12 transition-all space-y-12 sm:space-y-16"
    >
      {/* ========================================================================= */}
      {/* BAGIAN 1: CARA BERLANGGANAN (4 LANGKAH BERNOMOR)                          */}
      {/* ========================================================================= */}
      <div>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-3">
            <ListOrdered className="w-3.5 h-3.5" />
            Langkah Mudah
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Cara Berlangganan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Hanya butuh 4 langkah praktis tanpa prosedur yang merepotkan.
          </p>
        </div>

        {/* 4 Steps: Horizontal in Desktop, Vertical in Mobile */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center p-5 pt-6 rounded-2xl bg-slate-50/70 border border-gray-200/80 hover:bg-white hover:border-red-200 hover:shadow-md transition-all duration-300 group"
              >
                {/* Connecting arrow indicator on desktop */}
                {idx < steps.length - 1 && (
                  <div
                    className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white border border-gray-200 text-gray-400 items-center justify-center shadow-2xs"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}

                {/* Angka Polos di Pojok Kecil Kartu */}
                <div className="absolute top-3 left-3 w-6 h-6 rounded-lg bg-red-100/90 text-[#C8102E] font-black text-xs flex items-center justify-center border border-red-200/60 shadow-2xs">
                  {step.number}
                </div>

                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-[#8B0000] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 mb-4 mt-1">
                  <Icon className="w-7 h-7 stroke-[2]" />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 group-hover:text-[#8B0000] transition-colors">
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle Divider */}
      <hr className="border-gray-200" />

      {/* ========================================================================= */}
      {/* BAGIAN 2: PERTANYAAN YANG SERING DITANYAKAN (FAQ ACCORDION)              */}
      {/* ========================================================================= */}
      <div>
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Bantuan & Info
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Jawaban lengkap untuk pertanyaan umum calon pelanggan seputar Internet Rakyat Pekalongan.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto divide-y divide-gray-200 rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-2xs">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4.5 px-5 sm:px-6 flex items-center justify-between text-left gap-4 hover:bg-slate-50 transition-colors focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-gray-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-red-100 text-[#C8102E] rotate-180'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed bg-slate-50/50">
                    <p className="border-l-2 border-[#C8102E] pl-3 py-0.5">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Banner below FAQs */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            Punya pertanyaan lain yang belum terjawab?{' '}
            <a
              href="https://wa.me/6285640066619?text=Halo%20Admin%2C%20saya%20mau%20tanya%20seputar%20Internet%20Rakyat%20Pekalongan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-[#25D366] hover:text-[#1eb857] hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-white" />
              Tanya langsung ke CS WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
