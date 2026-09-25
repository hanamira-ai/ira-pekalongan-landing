import { Wifi, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      id="footer"
      aria-label="Footer Internet Rakyat Pekalongan"
      className="w-full mt-12 bg-linear-to-b from-[#6b0000] to-[#4a0000] text-white border-t border-red-900/60 pt-10 pb-8 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-white/15">
          {/* Sisi Kiri: Logo Teks & Status Agen */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center text-white shrink-0">
                <Wifi className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
                Internet Rakyat <span className="text-red-200">Pekalongan</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-red-100/90 font-medium">
              Agen Resmi Internet Rakyat — Wilayah Kota & Kabupaten Pekalongan
            </p>
          </div>

          {/* Sisi Kanan: Kontak WhatsApp & Jam Layanan */}
          <div className="flex flex-col sm:flex-row md:items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            {/* WhatsApp Link */}
            <a
              href="https://wa.me/6285640066619"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 py-2 rounded-xl transition-all duration-200 group w-fit"
            >
              {/* WhatsApp Icon */}
              <svg
                className="w-4 h-4 fill-[#25D366] shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-red-200 uppercase font-semibold leading-none">WhatsApp</span>
                <span className="font-bold text-white group-hover:text-emerald-300 transition-colors">
                  0856-4006-6619
                </span>
              </div>
            </a>

            {/* Jam Layanan */}
            <div className="flex items-center gap-2 text-red-100/85">
              <Clock className="w-4 h-4 text-red-200 shrink-0" />
              <div>
                <p className="text-[11px] text-red-300 font-semibold uppercase leading-none mb-0.5">Jam Layanan</p>
                <p className="font-medium text-white text-xs sm:text-sm">Setiap hari, 08.00 - 20.00 WIB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Baris Bawah: Hak Cipta & Disclaimer Legalitas */}
        <div className="pt-6 text-center md:text-left text-[11px] sm:text-xs text-red-200/80 leading-relaxed space-y-1">
          <p>
            © 2026 Internet Rakyat Pekalongan. Bukan situs resmi pusat Internet Rakyat, merupakan halaman promosi agen wilayah Pekalongan.
          </p>
        </div>
      </div>
    </footer>
  );
}
