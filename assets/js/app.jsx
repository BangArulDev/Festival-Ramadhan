import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { jadwalList, lombaList, zakatInfo, footerInfo } from "./data.js";
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
  IconInstagram,
  IconTiktok,
  IconTrophy,
} from "./components.jsx";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedAgenda, setSelectedAgenda] = useState(null);

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-blue-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="text-navy-700">
                <IconMoon />
              </div>
              <span className="font-bold text-xl tracking-tight text-navy-900 font-serif">
                Ramadhan Fest
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a
                href="#beranda"
                className="text-slate-600 hover:text-navy-700 font-medium transition"
              >
                Beranda
              </a>
              <a
                href="#jadwal"
                className="text-slate-600 hover:text-navy-700 font-medium transition"
              >
                Jadwal
              </a>
              <a
                href="#lomba"
                className="text-slate-600 hover:text-navy-700 font-medium transition"
              >
                Lomba
              </a>
              <a
                href="#zakat"
                className="text-slate-600 hover:text-navy-700 font-medium transition"
              >
                Zakat
              </a>
              <a
                href="#donasi"
                className="bg-navy-700 text-white px-5 py-2.5 rounded-full font-medium hover:bg-navy-800 transition shadow-lg shadow-blue-200"
              >
                Donasi Takjil
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-navy-700"
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
                className="block px-3 py-2 text-navy-700 font-bold"
              >
                Donasi Untuk Takjil
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
          <div className="absolute top-20 right-10 w-64 h-64 bg-gold-400 opacity-10 blob blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-400 opacity-10 blob blur-3xl animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900 border border-gold-500 text-blue-100 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide">
              Menyambut Ramadhan 1447 H
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-6 leading-tight">
            Ramadhan <span className="text-gold-400">Fest</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            "Menembus Batas Kreasi, Membasuh Hati dengan Ukhuwah di Cahaya
            Ramadhan." Mari ramaikan semarak Ramadhan dengan berbagai kegiatan
            positif, kajian ilmu, dan kebersamaan.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#jadwal"
              className="bg-gold-500 text-navy-950 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-gold-400 transition shadow-gold-500/30 shadow-lg"
            >
              Lihat Jadwal
            </a>
            <a
              href="#lomba"
              className="bg-transparent border-2 border-gold-400 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-navy-700 transition"
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
            <div className="w-16 h-16 mx-auto bg-blue-100 text-navy-700 rounded-2xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition">
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
            <div className="w-16 h-16 mx-auto bg-blue-100 text-navy-700 rounded-2xl flex items-center justify-center mb-4 transform -rotate-3 hover:rotate-0 transition">
              <IconTrophy />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">
              Lomba Islami
            </h3>
            <p className="text-slate-600">
              Uji bakat dan wawasanmu melalui berbagai kategori perlombaan
              Islami dengan hadiah menarik.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 text-navy-700 rounded-2xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition">
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
            <div className="w-24 h-1 bg-navy-700 mx-auto rounded-full"></div>
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
                <div className="bg-blue-50 text-navy-700 px-6 py-4 rounded-xl text-center min-w-[160px]">
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
                  <p className="text-sm text-slate-500 mb-4">
                    {item.deskripsi}
                  </p>
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
                  <button
                    onClick={() => setSelectedAgenda(item)}
                    className="text-navy-700 font-medium hover:text-navy-800 hover:underline px-4 py-2 rounded-lg bg-blue-50 transition"
                  >
                    Detail &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section id="lomba" className="py-20 text-white pattern-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
                Lomba Islami
              </h2>
              <div className="w-24 h-1 bg-gold-400 rounded-full mb-4"></div>
              <p className="text-blue-100">
                Tunjukkan bakatmu, raih prestasi, dan dapatkan hadiah jutaan
                rupiah. Pendaftaran dibuka hingga H-3 acara.
              </p>
            </div>
            <a
              href="https://drive.google.com/drive/folders/1UQ_yGXrK45ntJj7jfQ5gujaF4moz5Sfx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 text-navy-950 px-6 py-3 rounded-full font-bold hover:bg-gold-400 transition whitespace-nowrap inline-block"
            >
              Unduh Juknis
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lombaList.map((lomba, index) => (
              <div
                key={index}
                className="bg-navy-900 bg-opacity-60 backdrop-blur-sm border border-navy-600 rounded-2xl p-6 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-12 h-12 bg-gold-400 bg-opacity-20 text-gold-400 rounded-full flex items-center justify-center mb-6">
                  <span className="font-serif font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif min-h-[56px]">
                  {lomba.nama}
                </h3>
                <p className="text-blue-100 text-opacity-80 text-sm mb-4 min-h-[60px]">
                  {lomba.desc}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="text-xs text-blue-200 border-l-2 border-gold-500 pl-3 py-1 bg-navy-800 bg-opacity-50 rounded-r-lg">
                    <p className="font-bold text-gold-400 uppercase tracking-wider mb-1">
                      Timeline
                    </p>
                    <p>{lomba.timeline}</p>
                  </div>
                  <div className="text-xs text-blue-200 border-l-2 border-blue-400 pl-3 py-1 bg-navy-800 bg-opacity-50 rounded-r-lg">
                    <p className="font-bold text-blue-300 uppercase tracking-wider mb-1">
                      Narahubung
                    </p>
                    <p>{lomba.cp}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-navy-700">
                  <p className="text-gold-400 text-sm font-semibold mb-4">
                    {lomba.hadiah}
                  </p>
                  <a
                    href={lomba.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-navy-700 hover:bg-navy-600 text-white py-2 rounded-lg font-medium transition inline-block text-center"
                  >
                    Daftar Sekarang
                  </a>
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
                  src={zakatInfo.image}
                  alt="Layanan Zakat"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "rgba(15, 32, 80, 0.15)" }}
                ></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-400 text-navy-950 p-6 rounded-2xl shadow-xl hidden md:block border-4 border-white">
                <p className="text-3xl font-bold font-serif mb-1">Amanah</p>
                <p className="font-medium">
                  Pengelolaan Takmir
                  <br />& UPZ Resmi
                </p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-6">
                Layanan Zakat &amp; Infaq
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Mari sempurnakan ibadah Ramadhan dengan menunaikan kewajiban
                Zakat Fitrah. Kami hadir untuk memudahkan Anda dalam berbagi
                kebahagiaan kepada mereka yang membutuhkan.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-100 text-navy-700 rounded-lg flex items-center justify-center text-sm">
                      📅
                    </span>
                    Timeline
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>
                      <span className="font-medium text-slate-800">
                        Pengumpulan:
                      </span>{" "}
                      {zakatInfo.pengumpulan}
                    </li>
                    <li>
                      <span className="font-medium text-slate-800">
                        Pembagian:
                      </span>{" "}
                      {zakatInfo.pembagian}
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-100 text-navy-700 rounded-lg flex items-center justify-center text-sm">
                      🌾
                    </span>
                    Ketentuan Fitrah
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>
                      <span className="font-medium text-slate-800">Beras:</span>{" "}
                      {zakatInfo.nominalBeras}
                    </li>
                    <li>
                      <span className="font-medium text-slate-800">Uang:</span>{" "}
                      {zakatInfo.nominalUang}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-navy-900 text-white p-6 rounded-2xl shadow-xl mb-8">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-navy-700 rounded-lg flex items-center justify-center text-sm">
                    💳
                  </span>
                  Metode Pembayaran Digital
                </h4>
                <div className="space-y-4">
                  {zakatInfo.pembayaran.map((pay, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b border-navy-700 pb-3 last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="text-gold-400 text-xs font-bold uppercase tracking-wider">
                          {pay.metode}
                        </p>
                        <p className="font-mono text-lg font-bold">
                          {pay.nomor}
                        </p>
                        <p className="text-blue-200 text-sm">
                          a.n {pay.atasNama}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(pay.nomor);
                          alert("Nomor rekening disalin!");
                        }}
                        className="p-2 bg-navy-700 hover:bg-navy-600 rounded-lg transition"
                        title="Salin Nomor"
                      >
                        📋
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={`https://wa.me/${zakatInfo.kontak.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  className="bg-navy-700 hover:bg-navy-800 text-white px-8 py-3.5 rounded-xl font-bold transition flex-1 text-center shadow-lg shadow-blue-200"
                >
                  Hubungi Amil (WA)
                </a>
                <div className="hidden sm:block">
                  <p className="text-xs text-slate-400 uppercase font-bold">
                    Narahubung
                  </p>
                  <p className="text-sm font-bold text-slate-800">
                    {zakatInfo.kontak}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 text-slate-300 py-12 border-t-4 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-gold-400">
                  <IconMoon />
                </div>
                <span className="font-bold text-xl tracking-tight text-white font-serif">
                  Ramadhan Fest
                </span>
              </div>
              <p className="text-sm text-slate-400 max-w-sm mb-6">
                Panitia Ramadhan Fest 1447 H. Mewujudkan kampus yang madani,
                religius, dan penuh keberkahan.
              </p>
              <div className="flex gap-4">
                <a
                  href={footerInfo.sosmed.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-950 transition"
                  title="Instagram"
                >
                  <IconInstagram />
                </a>
                <a
                  href={footerInfo.sosmed.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold-500 hover:text-navy-950 transition"
                  title="TikTok"
                >
                  <IconTiktok />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 font-serif">
                Tautan Cepat
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#beranda" className="hover:text-gold-400 transition">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#jadwal" className="hover:text-gold-400 transition">
                    Jadwal Acara
                  </a>
                </li>
                <li>
                  <a href="#lomba" className="hover:text-gold-400 transition">
                    Pendaftaran Lomba
                  </a>
                </li>
                <li>
                  <a href="#zakat" className="hover:text-gold-400 transition">
                    Layanan Zakat
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
                  <div className="mt-1">
                    <IconMapPin />
                  </div>
                  <span>
                    <strong>{footerInfo.lokasi}</strong>
                    <br />
                    {footerInfo.alamat}
                  </span>
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
                  <span>{footerInfo.kontak}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 mt-8 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Panitia Ramadhan Fest{" "}
            {footerInfo.lokasi}. Dibuat dengan niat baik.
          </div>
        </div>
      </footer>

      {/* Agenda Detail Modal */}
      {selectedAgenda && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-navy-950 bg-opacity-70 backdrop-blur-sm"
            onClick={() => setSelectedAgenda(null)}
          ></div>
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden transform transition-all animate-in zoom-in duration-300">
            <div className="bg-navy-800 p-6 text-white relative">
              <button
                onClick={() => setSelectedAgenda(null)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition"
              >
                <IconX />
              </button>
              <div className="inline-block px-3 py-1 bg-navy-700 border border-gold-500 rounded-lg text-xs font-bold uppercase tracking-widest mb-3">
                Detail Kegiatan
              </div>
              <h3 className="text-2xl font-bold font-serif">
                {selectedAgenda.acara}
              </h3>
            </div>
            <div className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                    Waktu
                  </p>
                  <p className="text-slate-800 font-medium flex items-center gap-2">
                    <span className="text-navy-700">
                      <IconClock />
                    </span>{" "}
                    {selectedAgenda.waktu}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                    Tanggal
                  </p>
                  <p className="text-slate-800 font-medium flex items-center gap-2">
                    <span className="text-navy-700">
                      <IconCalendar />
                    </span>{" "}
                    {selectedAgenda.tanggal}
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                  Lokasi
                </p>
                <p className="text-slate-800 font-medium flex items-center gap-2">
                  <span className="text-navy-700">
                    <IconMapPin />
                  </span>{" "}
                  {selectedAgenda.lokasi}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">
                  Informasi Tambahan
                </p>
                <p className="text-slate-600 leading-relaxed">
                  {selectedAgenda.detail}
                </p>
              </div>

              <button
                onClick={() => setSelectedAgenda(null)}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-xl font-bold transition mt-4"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
