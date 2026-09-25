import React, { useState } from 'react';
import {
  Send,
  User,
  Phone,
  MapPin,
  Building,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Clock,
  Sparkles,
} from 'lucide-react';

interface FormData {
  fullName: string;
  phone: string;
  address: string;
  region: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  address?: string;
  region?: string;
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    address: '',
    region: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [lastSubmittedMsg, setLastSubmittedMsg] = useState<string>('');

  const regionOptions = [
    {
      group: 'Kota Pekalongan',
      options: [
        'Pekalongan Barat',
        'Pekalongan Timur',
        'Pekalongan Utara',
        'Pekalongan Selatan',
      ],
    },
    {
      group: 'Kabupaten Pekalongan',
      options: [
        'Wiradesa',
        'Pekajangan',
        'Kedungwuni',
      ],
    },
  ];

  // Handle phone input to allow only numeric characters
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const cleanNumbers = rawVal.replace(/\D/g, ''); // filter only digits
    setFormData((prev) => ({ ...prev, phone: cleanNumbers }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nama lengkap wajib diisi';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor HP/WhatsApp wajib diisi';
    } else if (formData.phone.length < 9) {
      newErrors.phone = 'Nomor WhatsApp minimal 9 digit angka';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Alamat lengkap wajib diisi';
    }

    if (!formData.region.trim()) {
      newErrors.region = 'Silakan pilih wilayah kecamatan';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Format nomor WhatsApp untuk pembacaan jelas (e.g. 08xx -> 628xx jika perlu, atau kirim apa adanya)
    const formattedPhone = formData.phone.startsWith('0')
      ? '0' + formData.phone.slice(1)
      : formData.phone;

    // Susun pesan otomatis sesuai format yang diminta
    const textMessage = `Halo, saya ingin daftar Internet Rakyat Pekalongan.
Nama: ${formData.fullName.trim()}
No HP: ${formattedPhone}
Alamat: ${formData.address.trim()}
Wilayah: ${formData.region}
Mohon info juga, saya akan kirim share location WhatsApp untuk survei lokasi yang lebih akurat.`;

    setLastSubmittedMsg(textMessage);
    setIsSubmitted(true);

    const encodedMessage = encodeURIComponent(textMessage);
    const waUrl = `https://wa.me/6285640066619?text=${encodedMessage}`;

    // Buka tab baru ke WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="form-daftar"
      aria-labelledby="registration-form-title"
      className="w-full bg-white rounded-3xl border-2 border-red-500/30 shadow-xl p-5 sm:p-10 md:p-12 transition-all scroll-mt-20"
    >
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#C8102E] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Formulir Pendaftaran Resmi
          </div>

          <h2
            id="registration-form-title"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight"
          >
            Daftar Sekarang, Internet Aktif dalam Hitungan Hari
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-lg mx-auto leading-relaxed">
            Silakan lengkapi formulir pendaftaran di bawah ini. Tim kami akan segera memverifikasi dan menjadwalkan survei pemasangan.
          </p>
        </div>

        {/* Notifikasi Konfirmasi Sukses Setelah Tombol Diklik */}
        {isSubmitted && (
          <div className="mb-6 p-4.5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm animate-in fade-in duration-300">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold">
                  Form terkirim, silakan lanjutkan chat di WhatsApp yang baru terbuka.
                </p>
                <p className="text-xs text-emerald-700 mt-0.5">
                  Jika tab WhatsApp tidak otomatis terbuka, klik tombol di sebelah kanan.
                </p>
              </div>
            </div>
            <a
              href={`https://wa.me/6285640066619?text=${encodeURIComponent(lastSubmittedMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shrink-0 transition-colors"
            >
              Buka WhatsApp
            </a>
          </div>
        )}

        {/* Formulir */}
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Field 1: Nama Lengkap */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs sm:text-sm font-bold text-gray-800 mb-1.5"
            >
              Nama Lengkap <span className="text-[#C8102E]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <User className="w-4 h-4" />
              </div>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Contoh: Bpk. Slamet Riyadi"
                className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-hidden transition-all duration-200 ${
                  errors.fullName
                    ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-200 focus:border-[#C8102E] focus:ring-2 focus:ring-red-100'
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Field 2: Nomor HP / WhatsApp */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs sm:text-sm font-bold text-gray-800 mb-1.5"
            >
              Nomor HP / WhatsApp <span className="text-[#C8102E]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Phone className="w-4 h-4" />
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="Contoh: 085640066619"
                className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-hidden transition-all duration-200 ${
                  errors.phone
                    ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-200 focus:border-[#C8102E] focus:ring-2 focus:ring-red-100'
                }`}
              />
            </div>
            {errors.phone ? (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.phone}
              </p>
            ) : (
              <p className="mt-1 text-[11px] text-gray-400">
                Hanya angka. Pastikan nomor aktif WhatsApp untuk konfirmasi survei.
              </p>
            )}
          </div>

          {/* Field 3: Wilayah (Dropdown) */}
          <div>
            <label
              htmlFor="region"
              className="block text-xs sm:text-sm font-bold text-gray-800 mb-1.5"
            >
              Wilayah Kecamatan <span className="text-[#C8102E]">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Building className="w-4 h-4" />
              </div>
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-gray-900 focus:bg-white focus:outline-hidden transition-all duration-200 ${
                  errors.region
                    ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-200 focus:border-[#C8102E] focus:ring-2 focus:ring-red-100'
                }`}
              >
                <option value="">-- Pilih Wilayah / Kecamatan --</option>
                {regionOptions.map((group, gIdx) => (
                  <optgroup key={gIdx} label={group.group}>
                    {group.options.map((opt, oIdx) => (
                      <option key={oIdx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            {errors.region && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.region}
              </p>
            )}
          </div>

          {/* Field 4: Alamat Lengkap */}
          <div>
            <label
              htmlFor="address"
              className="block text-xs sm:text-sm font-bold text-gray-800 mb-1.5"
            >
              Alamat Lengkap Rumah <span className="text-[#C8102E]">*</span>
            </label>
            <div className="relative">
              <div className="absolute top-3.5 left-3.5 pointer-events-none text-gray-400">
                <MapPin className="w-4 h-4" />
              </div>
              <textarea
                id="address"
                name="address"
                rows={3}
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Contoh: Jl. Hayam Wuruk No. 12, RT 02 / RW 03, Kelurahan Bendan, dekat Masjid..."
                className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:bg-white focus:outline-hidden transition-all duration-200 resize-none ${
                  errors.address
                    ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-200 focus:border-[#C8102E] focus:ring-2 focus:ring-red-100'
                }`}
              />
            </div>
            {errors.address && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.address}
              </p>
            )}
          </div>

          {/* Tombol Kirim Pendaftaran (Merah Solid Mencolok, Full width di HP) */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3.5 sm:py-4 bg-[#C8102E] hover:bg-[#A50A20] active:scale-[0.99] text-white font-extrabold text-sm sm:text-base md:text-lg rounded-2xl shadow-lg hover:shadow-xl hover:shadow-red-600/30 transition-all duration-200 cursor-pointer"
            >
              <Send className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] shrink-0" />
              <span>Kirim Pendaftaran via WhatsApp</span>
            </button>

            {/* Catatan kecil petunjuk share location */}
            <p className="mt-2.5 text-center text-xs text-gray-500 leading-relaxed px-2">
              Setelah chat WhatsApp terbuka, jangan lupa kirim juga share location Anda supaya tim kami bisa survei lokasi lebih akurat.
            </p>
          </div>
        </form>

        {/* Jaminan & Privasi Bawah Form */}
        <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Data aman & terenkripsi
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-emerald-600" />
            Respon cepat dalam hitungan jam
          </span>
        </div>
      </div>
    </section>
  );
}
