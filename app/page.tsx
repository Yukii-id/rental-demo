'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Car,
  ShieldCheck,
  Clock,
  MapPin,
  Calendar,
  Users,
  Fuel,
  Settings2,
  ChevronRight,
  PhoneCall,
  CheckCircle2,
  BadgeCheck,
  Sparkles,
  ArrowRight,
  UserCheck,
  KeyRound,
  Building2,
  Plane,
  HeartHandshake,
  Compass,
  Search,
} from 'lucide-react';
import {
  CARS_DATA,
  SERVICES_DATA,
  TANGERANG_LOCATIONS,
  CarItem,
} from '@/lib/rental-data';
import { formatRupiah } from '@/lib/utils';

export default function RentalLandingPage() {
  // Filter state untuk Pencarian Mobil (persis Balioh)
  const [rentType, setRentType] = useState<'dengan_sopir' | 'lepas_kunci'>('dengan_sopir');
  const [selectedLocation, setSelectedLocation] = useState('Tangerang');
  const [startDate, setStartDate] = useState('Jum, 16 Okt, 06:00');
  const [duration, setDuration] = useState('1 Hari');
  const [categoryFilter, setCategoryFilter] = useState<string>('Semua');

  // Booking drawer / modal state (1-2 input pendek)
  const [selectedCar, setSelectedCar] = useState<CarItem | null>(null);
  const [bookingDays, setBookingDays] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerWa, setCustomerWa] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Filter cars berdasarkan kategori
  const filteredCars = CARS_DATA.filter((car) => {
    if (categoryFilter === 'Semua') return true;
    return car.category === categoryFilter;
  });

  const categories = ['Semua', 'MPV', 'SUV', 'City Car', 'Luxury', 'Minibus'];

  const serviceIcons: Record<string, React.ReactNode> = {
    UserCheck: <UserCheck className="w-6 h-6 text-blue-600" />,
    KeyRound: <KeyRound className="w-6 h-6 text-emerald-600" />,
    Building2: <Building2 className="w-6 h-6 text-indigo-600" />,
    Plane: <Plane className="w-6 h-6 text-sky-600" />,
    HeartHandshake: <HeartHandshake className="w-6 h-6 text-rose-600" />,
    Compass: <Compass className="w-6 h-6 text-amber-600" />,
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerWa) return;
    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* ── TOP BANNER DEMO SUITE ── */}
      <div className="bg-slate-950 text-white text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
              DEMO SUITE
            </span>
            <span className="text-slate-300">
              Master Paket: <strong>RENTAL_SERVICE</strong> (Rental Kendaraan & Sewa Armada)
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Powered by <strong>Yukii.id</strong></span>
            <a
              href="https://admin.yukii.id"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium underline transition-colors"
            >
              admin.yukii.id
            </a>
          </div>
        </div>
      </div>

      {/* ── NAVBAR (Gaya Balioh Clean) ── */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-1.5">
              <span className="text-2xl font-black tracking-tight text-slate-950 font-['Space_Grotesk']">
                balioh<span className="text-blue-600">.</span>
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider ml-1 bg-slate-100 px-1.5 py-0.5 rounded">
                Tangerang
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
              <a href="#armada" className="hover:text-blue-600 transition-colors">Mobil</a>
              <a href="#armada" className="hover:text-blue-600 transition-colors">Motor</a>
              <a href="#armada" className="hover:text-blue-600 transition-colors">Bus</a>
              <a href="#armada" className="hover:text-blue-600 transition-colors flex items-center gap-1">
                <span>Minibus</span>
                <span className="text-xs text-slate-400">▾</span>
              </a>
              <a href="#armada" className="hover:text-blue-600 transition-colors flex items-center gap-1">
                <span>Niaga</span>
                <span className="text-xs text-slate-400">▾</span>
              </a>
              <a href="#layanan" className="hover:text-blue-600 transition-colors">Layanan</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/628111500099?text=Halo%20Balioh%20Rental%20Tangerang,%20saya%20ingin%20tanya%20sewa%20mobil"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors hidden sm:block"
            >
              Masuk
            </a>
            <a
              href="https://wa.me/628111500099?text=Halo%20Balioh%20Rental%20Tangerang,%20saya%20ingin%20daftar%20sewa%20mobil"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-all"
            >
              Daftar
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION (Identik Balioh: Navy Background + Center Title + Search Box + 3 Pillars) ── */}
      <section className="relative bg-[#0b132b] text-white pt-8 pb-16 lg:pt-10 lg:pb-20 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-slate-200 transition-colors">Home</Link>
            <span>&gt;</span>
            <a href="#armada" className="hover:text-slate-200 transition-colors">Sewa Mobil</a>
            <span>&gt;</span>
            <span className="text-slate-400">Banten</span>
            <span>&gt;</span>
            <span className="text-slate-200 font-medium">Sewa Mobil di Tangerang</span>
          </div>

          {/* Heading & Subtitle Center */}
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase font-['Space_Grotesk']">
              SEWA MOBIL DI TANGERANG
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-normal">
              Rental mobil lepas kunci dan dengan supir di area Tangerang &amp; sekitarnya
            </p>
          </div>

          {/* Horizontal Search Widget (Kartu Putih di Tengah) */}
          <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6 text-slate-900 max-w-5xl mx-auto">
            {/* Tabs: Dengan Sopir vs Lepas Kunci */}
            <div className="flex items-center gap-6 border-b border-slate-100 pb-3 mb-4">
              <button
                type="button"
                onClick={() => setRentType('dengan_sopir')}
                className={`text-sm font-bold pb-2 -mb-3 transition-colors relative ${
                  rentType === 'dengan_sopir'
                    ? 'text-slate-950 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-slate-950'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Dengan Sopir
              </button>
              <button
                type="button"
                onClick={() => setRentType('lepas_kunci')}
                className={`text-sm font-bold pb-2 -mb-3 transition-colors relative ${
                  rentType === 'lepas_kunci'
                    ? 'text-slate-950 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-slate-950'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Lepas Kunci
              </button>
            </div>

            {/* Form Fields Horizontal */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              {/* Field 1: Lokasi */}
              <div className="md:col-span-4 bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl px-3.5 py-2.5 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-slate-500 block font-semibold uppercase leading-none mb-0.5">
                    Lokasi Rental
                  </span>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none truncate cursor-pointer"
                  >
                    <option value="Tangerang">Tangerang</option>
                    <option value="Bandara Soekarno-Hatta">Bandara Soekarno-Hatta (Terminal 1, 2, 3)</option>
                    <option value="BSD City & Serpong">BSD City &amp; Serpong</option>
                    <option value="Gading Serpong">Gading Serpong</option>
                    <option value="Karawaci">Karawaci &amp; Lippo Village</option>
                    <option value="Alam Sutera">Alam Sutera &amp; Cipondoh</option>
                    <option value="Balaraja">Balaraja &amp; Cikupa</option>
                  </select>
                </div>
              </div>

              {/* Field 2: Tanggal & Waktu Mulai */}
              <div className="md:col-span-4 bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl px-3.5 py-2.5 flex items-center gap-3">
                <Calendar className="w-5 h-5 text-slate-400 shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-slate-500 block font-semibold uppercase leading-none mb-0.5">
                    Tanggal &amp; Waktu Mulai
                  </span>
                  <input
                    type="text"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              {/* Field 3: Durasi Sewa */}
              <div className="md:col-span-3 bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl px-3.5 py-2.5 flex items-center gap-3">
                <Clock className="w-5 h-5 text-slate-400 shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-slate-500 block font-semibold uppercase leading-none mb-0.5">
                    Durasi Sewa
                  </span>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none cursor-pointer"
                  >
                    <option value="1 Hari">1 Hari (24 Jam)</option>
                    <option value="2 Hari">2 Hari</option>
                    <option value="3 Hari">3 Hari</option>
                    <option value="7 Hari">7 Hari (Mingguan)</option>
                    <option value="30 Hari">30 Hari (Bulanan)</option>
                  </select>
                </div>
              </div>

              {/* Tombol Search (Navy Button with Magnifying Glass) */}
              <div className="md:col-span-1">
                <a
                  href="#armada"
                  className="w-full h-11 rounded-xl bg-[#0b132b] hover:bg-blue-600 text-white flex items-center justify-center transition-colors shadow-md"
                  title="Cari Mobil"
                >
                  <Search className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Info kecil di bawah input */}
            <div className="mt-3 pt-2 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-2 border-t border-slate-50">
              <span>
                Paket 12 Jam / 24 Jam: Dalam kota (termasuk BBM &amp; Driver) | Luar kota (fleksibel)
              </span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Jaminan pembatalan gratis s/d 24 jam sebelum jadwal
              </span>
            </div>
          </div>

          {/* 3 Value Pillars di Bawah Search Widget */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 max-w-5xl mx-auto">
            {/* Pillar 1 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-white text-xs uppercase tracking-wider">
                  JANGKAUAN LUAS
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Bandara Soekarno-Hatta, Tangerang Kota, BSD City, Balaraja, Terminal Poris Plawad, Stasiun Tangerang
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-white text-xs uppercase tracking-wider">
                  TRANSPARANSI HARGA
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Harga jujur dan kompetitif tanpa biaya tersembunyi untuk semua jenis armada.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-white text-xs uppercase tracking-wider">
                  BANTUAN 24/7
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tim support kami siap membantu kebutuhan perjalanan dan darurat Anda kapan saja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION PILIHAN MOBIL (Inspirasi Balioh Tangerang) ── */}
      <section id="armada" className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
                <Car className="w-4 h-4" />
                Tipe Kendaraan & Pilihan Mobil
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Pilihan Mobil Rental di Tangerang
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Armada tahun muda terawat, bersih wangi, servis berkala di bengkel resmi.
              </p>
            </div>

            {/* Filter Tabs Kategori Mobil */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                    categoryFilter === cat
                      ? 'bg-white text-blue-600 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Kartu Mobil */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCars.map((car) => {
              const activePrice =
                duration === '30 Hari' && car.pricePerMonth
                  ? car.pricePerMonth
                  : rentType === 'dengan_sopir' && car.withDriverPrice
                  ? car.withDriverPrice
                  : car.pricePerDay;

              return (
                <div
                  key={car.id}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Gambar Mobil */}
                    <div className="relative h-44 bg-slate-50 overflow-hidden flex items-center justify-center p-3">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                      {car.badge && (
                        <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 text-white backdrop-blur-xs">
                          {car.badge}
                        </span>
                      )}
                      <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/90 text-blue-700 shadow-2xs border border-slate-200">
                        {car.category}
                      </span>
                    </div>

                    {/* Informasi Mobil */}
                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                          {car.name}
                        </h3>
                        <p className="text-[11px] text-slate-400">Tahun {car.year}</p>
                      </div>

                      {/* Spesifikasi Ikon */}
                      <div className="grid grid-cols-3 gap-2 py-2 border-y border-slate-100 text-[11px] text-slate-600">
                        <div className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          <span>{car.seats} Kursi</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Settings2 className="w-3.5 h-3.5 text-slate-400" />
                          <span>{car.transmission}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Fuel className="w-3.5 h-3.5 text-slate-400" />
                          <span>{car.fuel}</span>
                        </div>
                      </div>

                      {/* Fitur Utama */}
                      <ul className="space-y-1">
                        {car.features.slice(0, 3).map((feat, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-[11px] text-slate-500">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing & Tombol Booking */}
                  <div className="p-4 pt-0">
                    <div className="pt-3 border-t border-slate-100 flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">
                          {duration === '30 Hari'
                            ? 'Tarif Bulanan'
                            : rentType === 'dengan_sopir'
                            ? 'Dengan Supir / 24 Jam'
                            : 'Lepas Kunci / 24 Jam'}
                        </span>
                        <span className="text-base font-extrabold text-blue-600">
                          {formatRupiah(activePrice)}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400">
                        {duration === '30 Hari' ? '/bln' : '/hari'}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCar(car);
                        setBookingSuccess(false);
                      }}
                      className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Booking Unit Ini</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION JENIS LAYANAN (Inspirasi GoAja) ── */}
      <section id="layanan" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
              Layanan Komprehensif
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Jenis Layanan Rental Mobil dari GoAja & Yukii
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Fleksibel disesuaikan untuk kebutuhan pribadi, perjalanan dinas korporat, hingga event pernikahan istimewa di Jabodetabek.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                      {serviceIcons[srv.icon] || <Car className="w-6 h-6 text-blue-600" />}
                    </div>
                    {srv.badge && (
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{srv.title}</h3>
                    <p className="text-xs font-semibold text-blue-600 mt-0.5">{srv.subtitle}</p>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2">{srv.description}</p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Benefit Utama:
                    </span>
                    {srv.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <BadgeCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href={`https://wa.me/628111500099?text=Halo%20Yukii%20Rental,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(
                      srv.title
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>{srv.actionText}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION TITIK JEMPUT STRATEGIS (Inspirasi Balioh Tangerang) ── */}
      <section id="lokasi" className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white overflow-hidden relative">
            <div className="relative z-10 max-w-2xl space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">
                Layanan Antar Unit Door-to-Door
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Titik Jemput Strategis di Tangerang & Bandara Soetta
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Malas keluar rumah atau penginapan? Kami menyediakan layanan pengantaran armada langsung ke pintu Hotel, Bandara Soetta, Apartemen, Stasiun, atau Rumah Pribadi Anda di seluruh Tangerang. Cukup duduk manis, serah terima unit di lokasi.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {TANGERANG_LOCATIONS.map((loc, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="truncate">{loc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 relative z-10 flex flex-wrap gap-3">
              <a
                href="#armada"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md"
              >
                Booking Rental Sekarang
              </a>
              <a
                href="https://wa.me/628111500099"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all border border-slate-700"
              >
                Konsultasi Rute WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER RESMI DEMO ── */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                  <Car className="w-4 h-4" />
                </div>
                <span className="text-lg font-bold">Yukii Rental Kendaraan</span>
              </div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                Demo showcase sistem rental mobil dan sewa armada terpadu. Dilengkapi modul cek ketersediaan, booking DP instan, opsi Lepas Kunci vs Dengan Sopir, dan manajemen korporat.
              </p>
              <div className="text-xs text-slate-400">
                <span className="block font-semibold text-slate-300">Kantor Operasional Hub:</span>
                <span>Tangerang & BSD City, Banten, Indonesia</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">Layanan</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>Sewa Mobil Lepas Kunci</li>
                <li>Sewa Mobil Dengan Driver</li>
                <li>Antar Jemput Bandara Soetta</li>
                <li>Kontrak Bulanan Perusahaan</li>
                <li>Sewa Wedding Car</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">Teknologi</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>Modul: <strong>RENTAL_SERVICE</strong></li>
                <li>Platform: <strong>Next.js + Tailwind CSS</strong></li>
                <li>Arsitektur: <strong>Anti-Slop Clean Design</strong></li>
                <li>Master Portal: <strong>admin.yukii.id</strong></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Yukii.id & PT Deo Vatta Corp. All rights reserved.</p>
            <p>Live Demo deployed at <strong>rental.deovatta.my.id</strong></p>
          </div>
        </div>
      </footer>

      {/* ── MODAL BOOKING CEPAT (Anti-slop: 2 input pendek) ── */}
      {selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full p-6 space-y-4 relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Booking Unit: {selectedCar.name}</h3>
                <p className="text-[11px] text-slate-400">
                  {rentType === 'lepas_kunci' ? 'Lepas Kunci' : 'Dengan Sopir'} • {selectedLocation}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCar(null)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {!bookingSuccess ? (
              <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block">Tarif Estimasi</span>
                    <span className="font-bold text-blue-600 text-sm">
                      {formatRupiah(
                        (rentType === 'dengan_sopir' && selectedCar.withDriverPrice
                          ? selectedCar.withDriverPrice
                          : selectedCar.pricePerDay) * bookingDays
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-500">Durasi:</span>
                    <select
                      value={bookingDays}
                      onChange={(e) => setBookingDays(Number(e.target.value))}
                      className="px-2 py-1 rounded-lg border border-slate-200 text-xs font-semibold bg-white"
                    >
                      <option value={1}>1 Hari</option>
                      <option value={2}>2 Hari</option>
                      <option value={3}>3 Hari</option>
                      <option value={7}>7 Hari (1 Minggu)</option>
                      <option value={30}>30 Hari (1 Bulan)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-500">Nomor WhatsApp Aktif</label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 08123456789"
                    value={customerWa}
                    onChange={(e) => setCustomerWa(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  Konfirmasi Booking via WhatsApp
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">Booking Berhasil Dikirim!</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Terima kasih <strong>{customerName}</strong>. Detail reservasi unit <strong>{selectedCar.name}</strong> untuk pengantaran ke <strong>{selectedLocation}</strong> telah disiapkan.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/628111500099?text=Halo%20Admin%20Yukii%20Rental,%20saya%20sudah%20booking%20mobil%20${encodeURIComponent(
                      selectedCar.name
                    )}%20durasi%20${bookingDays}%20hari%20di%20${encodeURIComponent(
                      selectedLocation
                    )}%20atas%20nama%20${encodeURIComponent(customerName)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Lanjut ke WhatsApp Admin</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
