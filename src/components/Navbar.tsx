import React from 'react';
import { Wifi } from 'lucide-react';

export default function Navbar() {
  const handleScrollToForm = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const target = document.getElementById('form-daftar');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-2 sm:top-3.5 z-40 w-full px-2.5 sm:px-4 pointer-events-none transition-all">
      <div className="max-w-4xl mx-auto">
        {/* Liquid Glass Curved Pill Bar */}
        <div className="pointer-events-auto relative flex items-center justify-between gap-1.5 sm:gap-3 px-2.5 xs:px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-white/85 backdrop-blur-[8px] border border-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.06),0_2px_8px_rgba(200,16,46,0.04),inset_0_1px_2px_rgba(255,255,255,0.95),inset_0_-1px_2px_rgba(0,0,0,0.04)] transition-all">
          
          {/* Liquid Glass Highlight & Specular Layers */}
          <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_2px_2px_1px_-1px_rgba(255,255,255,0.95),inset_-2px_-2px_1px_-1px_rgba(0,0,0,0.06),inset_0_0_8px_rgba(255,255,255,0.5)]" />
          <div
            className="absolute inset-0 isolate -z-10 rounded-full overflow-hidden"
            style={{ backdropFilter: 'url("#navbar-liquid-glass") blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
          />

          {/* Brand Logo Text */}
          <a href="#" className="relative z-10 flex items-center gap-1.5 sm:gap-2.5 group shrink min-w-0">
            <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-[#8B0000] to-[#C8102E] flex items-center justify-center text-white shadow-sm shrink-0">
              <Wifi className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-extrabold text-[12px] xs:text-sm sm:text-base md:text-lg leading-tight tracking-tight text-gray-900 group-hover:text-[#C8102E] transition-colors whitespace-nowrap">
                Internet Rakyat <span className="text-[#C8102E]">Pekalongan</span>
              </span>
              <span className="text-[9.5px] xs:text-[10px] sm:text-xs text-gray-500 font-semibold leading-tight whitespace-nowrap">
                <span className="hidden sm:inline">Agen Resmi Kota &amp; Kab. Pekalongan</span>
                <span className="inline sm:hidden">Agen Resmi Pekalongan</span>
              </span>
            </div>
          </a>

          {/* CTA Button: Daftar Sekarang */}
          <a
            href="#form-daftar"
            onClick={handleScrollToForm}
            className="relative z-10 shrink-0 inline-flex items-center justify-center px-2.5 xs:px-3 sm:px-5 py-1.5 sm:py-2 text-[11px] xs:text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#8B0000] to-[#C8102E] hover:from-[#730000] hover:to-[#B00D26] active:scale-95 rounded-full shadow-md hover:shadow-lg transition-all duration-200 whitespace-nowrap"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>

      {/* SVG Glass Refraction Filter */}
      <svg className="hidden">
        <defs>
          <filter id="navbar-liquid-glass" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence" />
            <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
            <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="70" xChannelSelector="R" yChannelSelector="B" result="displaced" />
            <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
            <feComposite in="finalBlur" in2="finalBlur" operator="over" />
          </filter>
        </defs>
      </svg>
    </header>
  );
}
