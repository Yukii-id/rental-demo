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
  ChevronLeft,
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
  BALIOH_CARS,
  SERVICES_DATA,
  TANGERANG_LOCATIONS,
  CarItem,
} from '@/lib/rental-data';
import { formatRupiah } from '@/lib/utils';
import { RentalDateTimeModal } from '@/components/RentalDateTimeModal';

const MONTH_NAMES_SHORT = [
  'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
  'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'
];

const DAY_NAMES_SHORT = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

interface LocationItem {
  id: string;
  name: string;
  subtext: string;
  icon: 'plane' | 'pin';
}

const TANGERANG_DROPDOWN_LOCATIONS: LocationItem[] = [
  {
    id: 'soetta',
    name: 'Bandara Soekarno-Hatta',
    subtext: 'Bandara di Tangerang, Banten, Indonesia',
    icon: 'plane',
  },
  {
    id: 'tangerang-kota',
    name: 'Tangerang Kota',
    subtext: 'Area di Tangerang, Banten, Indonesia',
    icon: 'pin',
  },
  {
    id: 'bsd-city',
    name: 'BSD City',
    subtext: 'Area di Tangerang, Banten, Indonesia',
    icon: 'pin',
  },
  {
    id: 'balaraja',
    name: 'Balaraja',
    subtext: 'Area di Tangerang, Banten, Indonesia',
    icon: 'pin',
  },
  {
    id: 'gading-serpong',
    name: 'Gading Serpong',
    subtext: 'Area di Tangerang, Banten, Indonesia',
    icon: 'pin',
  },
  {
    id: 'karawaci',
    name: 'Karawaci',
    subtext: 'Area di Tangerang, Banten, Indonesia',
    icon: 'pin',
  },
  {
    id: 'alam-sutera',
    name: 'Alam Sutera',
    subtext: 'Area di Tangerang, Banten, Indonesia',
    icon: 'pin',
  },
  {
    id: 'poris',
    name: 'Terminal Poris Plawad',
    subtext: 'Terminal di Tangerang, Banten, Indonesia',
    icon: 'pin',
  },
  {
    id: 'stasiun-tng',
    name: 'Stasiun Tangerang',
    subtext: 'Stasiun Kereta di Tangerang, Banten, Indonesia',
    icon: 'pin',
  },
];

export default function RentalLandingPage() {
  // Filter state untuk Pencarian Mobil (persis Balioh)
  const [rentType, setRentType] = useState<'dengan_sopir' | 'lepas_kunci'>('lepas_kunci');
  const [durationMode, setDurationMode] = useState<'harian' | 'bulanan' | 'tahunan'>('harian');
  const [selectedLocation, setSelectedLocation] = useState('Tangerang Kota');
  const [startDateStr, setStartDateStr] = useState('Jum, 16 Okt, 08:00');
  const [endDateStr, setEndDateStr] = useState('Min, 18 Okt, 08:00');
  const [durationDays, setDurationDays] = useState(2);
  const [categoryFilter, setCategoryFilter] = useState<string>('POPULAR');

  // Location dropdown popover state
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [locationSearch, setLocationSearch] = useState('');

  // Range Calendar 21st.dev + 30-min time modal state
  const [isDateTimeModalOpen, setIsDateTimeModalOpen] = useState(false);

  // Booking drawer / modal state (1-2 input pendek)
  const [selectedCar, setSelectedCar] = useState<CarItem | null>(null);
  const [bookingDays, setBookingDays] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [customerWa, setCustomerWa] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Filter lokasi di dropdown
  const filteredLocations = TANGERANG_DROPDOWN_LOCATIONS.filter((loc) =>
    loc.name.toLowerCase().includes(locationSearch.toLowerCase()) ||
    loc.subtext.toLowerCase().includes(locationSearch.toLowerCase())
  );

  // Filter cars berdasarkan kategori Balioh
  const filteredCars = BALIOH_CARS.filter((car) => {
    if (categoryFilter === 'POPULAR') return car.isPopular;
    return car.category === categoryFilter;
  });

  const categories = ['POPULAR', 'MPV', 'CITY', 'SUV', 'MEWAH', 'EV'];

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
          <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6 text-slate-900 max-w-5xl mx-auto relative z-30">
            {/* Row 1: Tabs: Dengan Sopir vs Lepas Kunci */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-6">
                <button
                  type="button"
                  onClick={() => setRentType('dengan_sopir')}
                  className={`text-sm font-bold pb-2 -mb-3 transition-colors relative cursor-pointer ${
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
                  className={`text-sm font-bold pb-2 -mb-3 transition-colors relative cursor-pointer ${
                    rentType === 'lepas_kunci'
                      ? 'text-slate-950 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-slate-950'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  Lepas Kunci
                </button>
              </div>

              {/* Pill Sub-Tabs: Harian, Bulanan, Tahunan (persis Balioh) */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setDurationMode('harian')}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    durationMode === 'harian'
                      ? 'bg-[#0b132b] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Harian
                </button>
                <button
                  type="button"
                  onClick={() => setDurationMode('bulanan')}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    durationMode === 'bulanan'
                      ? 'bg-[#0b132b] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Bulanan
                </button>
                <button
                  type="button"
                  onClick={() => setDurationMode('tahunan')}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    durationMode === 'tahunan'
                      ? 'bg-[#0b132b] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Tahunan
                </button>
              </div>
            </div>

            {/* Form Fields Horizontal */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
              {/* Field 1: Lokasi dengan Popover Dropdown Balioh */}
              <div className="md:col-span-4 relative">
                <div
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                  className="bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl px-3.5 py-2.5 flex items-center gap-3 cursor-pointer select-none"
                >
                  <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-slate-500 block font-semibold uppercase leading-none mb-0.5">
                      Lokasi Rental
                    </span>
                    <span className="text-xs font-bold text-slate-900 block truncate">
                      {selectedLocation}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">▾</span>
                </div>

                {/* Popover Dropdown Balioh */}
                {isLocationOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsLocationOpen(false)}
                    />
                    <div className="absolute left-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-xl border border-slate-200 shadow-2xl z-50 p-3 space-y-3">
                      {/* Search Input di dalam Dropdown */}
                      <div className="relative">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                        <input
                          type="text"
                          placeholder="Ketik lokasi..."
                          value={locationSearch}
                          onChange={(e) => setLocationSearch(e.target.value)}
                          autoFocus
                          className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-slate-50 text-slate-800"
                        />
                      </div>

                      {/* Header Kategori */}
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-1 mb-1">
                          LOKASI DI TANGERANG
                        </span>

                        {/* List Items */}
                        <div className="max-h-60 overflow-y-auto space-y-1 pr-1 no-scrollbar">
                          {filteredLocations.map((loc) => (
                            <button
                              key={loc.id}
                              type="button"
                              onClick={() => {
                                setSelectedLocation(loc.name);
                                setIsLocationOpen(false);
                                setLocationSearch('');
                              }}
                              className={`w-full text-left p-2 rounded-lg flex items-start gap-2.5 transition-colors cursor-pointer ${
                                selectedLocation === loc.name
                                  ? 'bg-blue-50/80 text-blue-900'
                                  : 'hover:bg-slate-50 text-slate-800'
                              }`}
                            >
                              <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center text-slate-500 shrink-0 mt-0.5">
                                {loc.icon === 'plane' ? (
                                  <Plane className="w-3.5 h-3.5 text-blue-600" />
                                ) : (
                                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                                )}
                              </div>
                              <div className="min-w-0 flex-1">
                                <span className="text-xs font-bold block leading-tight">
                                  {loc.name}
                                </span>
                                <span className="text-[11px] text-slate-400 block truncate">
                                  {loc.subtext}
                                </span>
                              </div>
                            </button>
                          ))}
                          {filteredLocations.length === 0 && (
                            <div className="text-center py-4 text-xs text-slate-400">
                              Lokasi tidak ditemukan
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Field 2: Tanggal & Waktu Mulai (Trigger Popover Balioh) */}
              <div className="md:col-span-4 relative">
                <div
                  onClick={() => setIsDateTimeModalOpen(!isDateTimeModalOpen)}
                  className="bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl px-3.5 py-2.5 flex items-center gap-3 cursor-pointer select-none"
                >
                  <Calendar className="w-5 h-5 text-slate-400 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-slate-500 block font-semibold uppercase leading-none mb-0.5">
                      Tanggal &amp; Waktu Mulai
                    </span>
                    <span className="w-full text-xs font-bold text-slate-900 block truncate">
                      {startDateStr}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">▾</span>
                </div>

                {/* Popover Kalender Balioh Melayang */}
                <RentalDateTimeModal
                  isOpen={isDateTimeModalOpen}
                  onClose={() => setIsDateTimeModalOpen(false)}
                  onConfirm={({ startDate, endDate, pickupTime, totalDays }) => {
                    const fromMonth = MONTH_NAMES_SHORT[startDate.getMonth()];
                    const toMonth = MONTH_NAMES_SHORT[endDate.getMonth()];
                    const fromDay = DAY_NAMES_SHORT[startDate.getDay()];
                    const toDay = DAY_NAMES_SHORT[endDate.getDay()];

                    setStartDateStr(`${fromDay}, ${startDate.getDate()} ${fromMonth}, ${pickupTime}`);
                    setEndDateStr(`${toDay}, ${endDate.getDate()} ${toMonth}, ${pickupTime}`);
                    setDurationDays(totalDays);
                  }}
                />
              </div>

              {/* Field 3: Durasi Sewa */}
              <div
                onClick={() => setIsDateTimeModalOpen(true)}
                className="md:col-span-3 bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl px-3.5 py-2.5 flex items-center gap-3 cursor-pointer select-none"
              >
                <Clock className="w-5 h-5 text-slate-400 shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-slate-500 block font-semibold uppercase leading-none mb-0.5">
                    Durasi Sewa
                  </span>
                  <span className="text-xs font-bold text-slate-900 block truncate">
                    {durationDays} Hari ({durationDays * 24} Jam)
                  </span>
                </div>
                <span className="text-xs text-slate-400">▾</span>
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

      {/* ── SECTION PILIHAN MOBIL (100% Identik Balioh: TIPE KENDARAAN) ── */}
      <section id="armada" className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Header Section: TIPE KENDARAAN (Kiri) & Navigasi Slider + Lihat Semua (Kanan) */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-slate-950 uppercase tracking-tight font-['Space_Grotesk']">
              TIPE KENDARAAN
            </h2>
            <div className="flex items-center gap-3">
              {/* Panah Navigasi Carousel Slider */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('cars-slider');
                    if (el) el.scrollBy({ left: -260, behavior: 'smooth' });
                  }}
                  className="w-7 h-7 rounded-full border border-slate-200 hover:border-slate-400 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors cursor-pointer shadow-2xs"
                  aria-label="Previous cars"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('cars-slider');
                    if (el) el.scrollBy({ left: 260, behavior: 'smooth' });
                  }}
                  className="w-7 h-7 rounded-full border border-slate-200 hover:border-slate-400 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors cursor-pointer shadow-2xs"
                  aria-label="Next cars"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setCategoryFilter('MPV')}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
              >
                Lihat Semua
              </button>
            </div>
          </div>

          {/* Filter Pill Tabs: POPULAR, MPV, CITY, SUV, MEWAH, EV */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all cursor-pointer shrink-0 ${
                  categoryFilter === cat
                    ? 'bg-[#0b132b] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Horizontal Slider / Scrollable Card List Balioh */}
          <div
            id="cars-slider"
            className="flex gap-4 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
          >
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="w-[236px] shrink-0 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Area Atas: Kategori, Nama Lengkap, dan Badge Tahun Model */}
                  <div className="space-y-0.5 mb-2">
                    <span className="text-[11px] font-black uppercase text-slate-950 tracking-wider block">
                      {car.category}
                    </span>
                    <h3 className="text-[11px] font-semibold text-slate-500 uppercase tracking-tight truncate">
                      {car.fullName}
                    </h3>
                    <div className="pt-0.5">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#0b132b] text-white">
                        {car.yearRange}
                      </span>
                    </div>
                  </div>

                  {/* Foto Mobil Balioh dengan Lingkaran Aksen Halus */}
                  <div className="relative h-28 w-full flex items-center justify-center p-2 my-1">
                    <div className="absolute w-20 h-20 rounded-full bg-slate-100 -z-0" />
                    <img
                      src={car.image}
                      alt={car.name}
                      className="max-h-full max-w-full object-contain relative z-10"
                    />
                  </div>

                  {/* Spesifikasi: 3 Kolom Ikon Balioh (Orang, Bagasi, Transmisi) */}
                  <div className="grid grid-cols-3 gap-0.5 py-2 my-2 border-y border-slate-100 text-[10px] text-slate-600 font-medium">
                    <div className="flex items-center gap-1 justify-center">
                      <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{car.seats}</span>
                    </div>
                    <div className="flex items-center gap-1 justify-center border-x border-slate-100 px-0.5">
                      <span className="text-slate-400 font-bold text-xs">🧳</span>
                      <span>{car.luggage}</span>
                    </div>
                    <div className="flex items-center gap-1 justify-center px-0.5 min-w-0">
                      <Settings2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{car.transmission}</span>
                    </div>
                  </div>

                  {/* Harga Balioh: Mulai dari IDR ... /hari */}
                  <div className="py-1 text-[11px] text-slate-800">
                    <span className="text-slate-500 block text-[10px]">Mulai dari </span>
                    <strong className="text-slate-950 font-extrabold text-sm block">
                      IDR {car.pricePerDay.toLocaleString('id-ID')}
                    </strong>
                    <span className="text-slate-500 text-[10px]">/hari</span>
                  </div>
                </div>

                {/* Tombol Book Now Full-Width Dark Navy */}
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCar(car);
                      setBookingDays(durationDays);
                      setBookingSuccess(false);
                    }}
                    className="w-full py-2.5 rounded-xl bg-[#0b132b] hover:bg-blue-600 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION JENIS LAYANAN (100% Identik GoAja Dual Card Grid) ── */}
      <section id="layanan" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Paragraf Pengantar Persis GoAja */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-normal">
              Kami menyediakan berbagai layanan rental mobil yang fleksibel dan dapat disesuaikan dengan kebutuhan perjalanan Anda. Dengan kualitas layanan terbaik, GoAja siap menjadi mitra mobilitas terpercaya Anda di Jabodetabek!
            </p>
          </div>

          {/* Dual Card Grid GoAja */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Kartu 1: Sewa Mobil Dengan Driver (Background Oranye #F15A24) */}
            <div className="bg-[#F15A24] rounded-[32px] p-8 sm:p-10 text-slate-900 shadow-xl flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] tracking-tight">
                    Sewa Mobil Dengan Driver
                  </h3>
                  <p className="text-white text-sm sm:text-[15px] mt-3 leading-relaxed">
                    Layanan ini cocok untuk Anda yang ingin menikmati perjalanan tanpa repot menyetir. Biarkan driver profesional kami mengantar Anda ke tujuan dengan aman dan nyaman.
                  </p>
                </div>

                {/* Checklist Keuntungan (Hitam Bold dengan Centang) */}
                <div className="space-y-3 pt-2">
                  {[
                    'Driver Berpengalaman',
                    'Tepat Waktu dan Efisien',
                    'Keamanan dan Kenyamanan Maksimal',
                    'Cocok Untuk Segala Kebutuhan',
                    'Hemat Energi dan Fokus Pada Aktivitas Anda',
                    'Bebas Stres Mengemudi',
                    'Pilihan Mobil Lebih Beragam',
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm sm:text-[15px] font-bold text-[#1A1A1A]">
                      <span className="text-base font-black">✔</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tombol Aksi Hitam Kapsul Full Width */}
              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => {
                    setRentType('dengan_sopir');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-4 rounded-full bg-[#1A1A1A] hover:bg-black text-white text-sm sm:text-base font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
                >
                  <span>Reservasi Sekarang</span>
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>

            {/* Kartu 2: Sewa Mobil Lepas Kunci (Background Putih Border & Notice Oranye Muda) */}
            <div className="bg-white rounded-[32px] p-8 sm:p-10 text-slate-900 border border-slate-200 shadow-xl flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#F15A24] tracking-tight">
                    Sewa Mobil Lepas Kunci
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-[15px] mt-3 leading-relaxed">
                    GoAja juga menyediakan layanan rental mobil lepas kunci yang dirancang khusus untuk kebutuhan perusahaan. Layanan ini memberikan fleksibilitas bagi bisnis Anda dalam mengelola transportasi.
                  </p>
                </div>

                {/* Checklist Keuntungan */}
                <div className="space-y-3 pt-2">
                  {[
                    'Privasi Lebih Terjaga',
                    'Fleksibilitas Waktu dan Rute',
                    'Hemat Biaya',
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm sm:text-[15px] font-bold text-slate-900">
                      <span className="text-base font-black text-slate-900">✔</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Warning / Notice Badge Oranye Muda Khas GoAja */}
                <div className="bg-[#FFEDE4] border border-[#F15A24]/30 rounded-2xl p-4 flex items-center gap-3 text-xs sm:text-sm font-bold text-[#C84010]">
                  <span className="text-base shrink-0">⚠️</span>
                  <span>Layanan Ini Hanya Untuk Perusahaan Yang Telah Terverifikasi.</span>
                </div>
              </div>

              {/* Tombol Aksi Oranye Kapsul Full Width */}
              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => {
                    setRentType('lepas_kunci');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-4 rounded-full bg-[#F15A24] hover:bg-[#d84a1a] text-white text-sm sm:text-base font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
                >
                  <span>Reservasi Sekarang</span>
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
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
                      {formatRupiah(selectedCar.pricePerDay * bookingDays)}
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
