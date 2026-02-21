import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { jadwalList, lombaList } from "./data.js";
import {
  IconMoon,
  IconCalendar,
  IconClock,
  IconMapPin,
  IconUsers,
  IconBook,
  IconShopping,
  IconMenu,
  IconX,
} from "./components.jsx";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-emerald-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="text-emerald-600">
                <IconMoon />
              </div>
              <span className="font-bold text-xl tracking-tight text-emerald-900 font-serif">
                Ramadhan Fest
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a
                href="#beranda"
                className="text-slate-600 hover:text-emerald-600 font-medium transition"
              >
                Beranda
              </a>
              <a
                href="#jadwal"
                className="text-slate-600 hover:text-emerald-600 font-medium transition"
              >
                Jadwal
              </a>
              <a
                href="#lomba"
                className="text-slate-600 hover:text-emerald-600 font-medium transition"
              >
                Lomba
              </a>
              <a
                href="#zakat"
                className="text-slate-600 hover:text-emerald-600 font-medium transition"
              >
                Zakat
              </a>
              <a
                href="#donasi"
                className="bg-emerald-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
              >
                Donasi Iftar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-emerald-600"
              >
                {isMenuOpen ? <IconX /> : <IconMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#beranda"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-slate-600 font-medium"
              >
                Beranda
              </a>
              <a
                href="#jadwal"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-slate-600 font-medium"
              >
                Jadwal
              </a>
              <a
                href="#lomba"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-slate-600 font-medium"
              >
                Lomba
              </a>
              <a
                href="#zakat"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-slate-600 font-medium"
              >
                Zakat
              </a>
              <a
                href="#donasi"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-emerald-600 font-bold"
              >
                Donasi Iftar
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="beranda"
        className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden pattern-bg"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 right-10 w-64 h-64 bg-emerald-500/20 blob blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold-400/20 blob blur-3xl animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-800/50 border border-emerald-600 text-emerald-100 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide">
              Menyambut Ramadhan 1447 H
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-6 leading-tight">
            Ramadhan <span className="text-gold-400">Fest</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-10">
            "Menembus Batas Kreasi, Membasuh Hati dengan Ukhuwah di Cahaya
            Ramadhan." Mari ramaikan semarak Ramadhan dengan berbagai kegiatan
            positif, kajian ilmu, dan kebersamaan.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#jadwal"
              className="bg-gold-500 text-emerald-950 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-gold-400 transition shadow-lg shadow-gold-500/30"
            >
              Lihat Jadwal
            </a>
            <a
              href="#lomba"
              className="bg-transparent border-2 border-emerald-400 text-emerald-50 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-emerald-800 transition"
            >
              Daftar Lomba
            </a>
          </div>
        </div>
      </section>

      {/* Features/Highlights */}
      <section className="py-12 bg-white relative -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-2xl shadow-xl z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition">
              <IconBook />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">
              Kajian Ilmu
            </h3>
            <p className="text-slate-600">
              Perdalam ilmu agama melalui kajian rutin jelang berbuka dan ba'da
              subuh bersama ustadz pilihan.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-gold-100 text-gold-600 rounded-2xl flex items-center justify-center mb-4 transform -rotate-3 hover:rotate-0 transition">
              <IconUsers />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">
              Buka Bersama
            </h3>
            <p className="text-slate-600">
              Disediakan 500 porsi iftar gratis setiap harinya untuk mahasiswa
              dan masyarakat sekitar kampus.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition">
              <IconShopping />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">
              Layanan Zakat
            </h3>
            <p className="text-slate-600">
              Salurkan Zakat, Infaq, dan Sedekah Anda melalui Unit Pengumpul
              Zakat (UPZ) Kampus yang resmi dan amanah.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="jadwal" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-4">
              Agenda Ramadhan
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-slate-600">
              Jangan lewatkan rangkaian acara spesial selama sebulan penuh.
            </p>
          </div>

          <div className="space-y-6">
            {jadwalList.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition border border-slate-100 flex flex-col md:flex-row gap-6 items-start md:items-center"
              >
                <div className="bg-emerald-50 text-emerald-700 px-6 py-4 rounded-xl text-center min-w-[160px]">
                  <span className="block text-sm font-semibold uppercase tracking-wider mb-1">
                    Ramadhan
                  </span>
                  <span className="block text-2xl font-bold font-serif">
                    {item.tanggal.split(" ")[0]}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {item.acara}
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <IconClock /> {item.waktu}
                    </div>
                    <div className="flex items-center gap-2">
                      <IconMapPin /> {item.lokasi}
                    </div>
                  </div>
                </div>
                <div>
                  <button className="text-emerald-600 font-medium hover:text-emerald-700 hover:underline">
                    Detail &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section
        id="lomba"
        className="py-20 bg-emerald-900 text-white pattern-bg relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
                Lomba Islami
              </h2>
              <div className="w-24 h-1 bg-gold-400 rounded-full mb-4"></div>
              <p className="text-emerald-100">
                Tunjukkan bakatmu, raih prestasi, dan dapatkan hadiah jutaan
                rupiah. Pendaftaran dibuka hingga H-3 acara.
              </p>
            </div>
            <button className="bg-white text-emerald-900 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition whitespace-nowrap">
              Unduh Juknis
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lombaList.map((lomba, index) => (
              <div
                key={index}
                className="bg-emerald-800/50 backdrop-blur-sm border border-emerald-700 rounded-2xl p-6 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-12 h-12 bg-gold-500/20 text-gold-400 rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif min-h-[56px]">
                  {lomba.nama}
                </h3>
                <p className="text-emerald-100/80 text-sm mb-6 min-h-[80px]">
                  {lomba.desc}
                </p>
                <div className="pt-4 border-t border-emerald-700">
                  <p className="text-gold-400 text-sm font-semibold mb-4">
                    {lomba.hadiah}
                  </p>
                  <button className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-2 rounded-lg font-medium transition">
                    Daftar Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zakat Section */}
      <section id="zakat" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="aspect-square md:aspect-video lg:aspect-square bg-slate-100 rounded-3xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Layanan Zakat"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-emerald-900/20"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-400 text-emerald-950 p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold font-serif mb-1">100%</p>
                <p className="font-medium">
                  Amanah &
                  <br />
                  Transparan
                </p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-6">
                Unit Pengumpul Zakat Kampus
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Mari sempurnakan ibadah Ramadhan dengan menunaikan kewajiban
                Zakat Fitrah dan Zakat Maal. Kami hadir untuk memudahkan Anda
                dalam berbagi kebahagiaan kepada mereka yang membutuhkan.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span className="text-slate-700">
                    Zakat Fitrah: 3.5 Liter / 2.5 Kg Beras
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span className="text-slate-700">
                    Layanan Jemput Zakat (Area Kampus)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span className="text-slate-700">
                    Pembayaran digital via QRIS & Transfer Bank
                  </span>
                </li>
              </ul>

              <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl">
                <h4 className="font-bold text-emerald-900 mb-2">
                  Konsultasi Zakat?
                </h4>
                <p className="text-sm text-emerald-700 mb-4">
                  Bingung cara menghitung Zakat Maal atau Zakat Profesi? Tim
                  kami siap membantu perhitungan zakat Anda.
                </p>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-medium transition">
                  Hubungi Amil Zakat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12 border-t-4 border-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-emerald-500">
                  <IconMoon />
                </div>
                <span className="font-bold text-xl tracking-tight text-white font-serif">
                  Gema Ramadhan
                </span>
              </div>
              <p className="text-sm text-slate-400 max-w-sm mb-6">
                Panitia Ramadhan Fest 1447 H. Mewujudkan kampus yang madani,
                religius, dan penuh keberkahan.
              </p>
              <div className="flex gap-4">
                {/* Social Icons Placeholders */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition"
                >
                  IG
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition"
                >
                  TW
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition"
                >
                  YT
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 font-serif">
                Tautan Cepat
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#beranda"
                    className="hover:text-emerald-400 transition"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#jadwal"
                    className="hover:text-emerald-400 transition"
                  >
                    Jadwal Acara
                  </a>
                </li>
                <li>
                  <a
                    href="#lomba"
                    className="hover:text-emerald-400 transition"
                  >
                    Pendaftaran Lomba
                  </a>
                </li>
                <li>
                  <a
                    href="#zakat"
                    className="hover:text-emerald-400 transition"
                  >
                    Layanan Zakat
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 font-serif">
                Hubungi Kami
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <IconMapPin />
                  <span>Sekretariat Masjid Kampus Utama, Lt. 1</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>0812-3456-7890 (Akhi Budi)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 mt-8 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Panitia Ramadhan Fest Kampus.
            Dibuat dengan niat baik.
          </div>
        </div>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
