'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { BaliohNavbar } from '@/components/BaliohNavbar';
import { BaliohFooter } from '@/components/BaliohFooter';
import { BALIOH_CARS, CarItem } from '@/lib/rental-data';
import { formatRupiah } from '@/lib/utils';
import {
  Users,
  Briefcase,
  ChevronRight,
  Filter,
  RotateCcw,
  Sparkles,
  ArrowUpDown,
  Car,
  Clock,
  MapPin,
  Calendar,
} from 'lucide-react';

function BookingSearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Search query parameters from hero widget or default
  const locationParam = searchParams.get('location') || 'Tangerang';
  const typeParam = searchParams.get('type') || 'dengan_sopir';
  const dateParam = searchParams.get('date') || '16 Okt 2026 • 07:00';
  const durationParam = Number(searchParams.get('duration')) || 1;

  // Filter States
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'paling_sesuai' | 'harga_terendah' | 'harga_tertinggi'>('paling_sesuai');

  const categories = ['MPV', 'CITY', 'SUV', 'MEWAH', 'EV'];
  const seatOptions = [
    { id: '4', label: '4-5 Kursi' },
    { id: '7', label: '7 Kursi' },
    { id: '>7', label: '> 7 Kursi' },
  ];

  const handleCategoryToggle = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleSeatToggle = (seatId: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((s) => s !== seatId) : [...prev, seatId]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedSeats([]);
    setSelectedTransmissions([]);
  };

  // Filter & Sort Logic
  const filteredCars = useMemo(() => {
    let result = [...BALIOH_CARS];

    // Filter Kategori
    if (selectedCategories.length > 0) {
      result = result.filter((c) => selectedCategories.includes(c.category));
    }

    // Filter Kursi
    if (selectedSeats.length > 0) {
      result = result.filter((c) => {
        if (selectedSeats.includes('4') && c.seats <= 5) return true;
        if (selectedSeats.includes('7') && c.seats === 7) return true;
        if (selectedSeats.includes('>7') && c.seats > 7) return true;
        return false;
      });
    }

    // Sorting
    if (sortBy === 'harga_terendah') {
      result.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (sortBy === 'harga_tertinggi') {
      result.sort((a, b) => b.pricePerDay - a.pricePerDay);
    }

    return result;
  }, [selectedCategories, selectedSeats, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans selection:bg-blue-600 selection:text-white">
      <BaliohNavbar activeCity={locationParam} />

      {/* ── SEARCH SUMMARY BAR (Persis Balioh Atas) ── */}
      <section className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6 lg:px-8 sticky top-16 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-slate-700">
            {/* Tipe Layanan */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="font-mono font-black uppercase text-slate-900 tracking-wider">
                {typeParam === 'dengan_sopir' ? 'DENGAN SOPIR' : 'LEPAS KUNCI'}
              </span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-slate-200" />

            {/* Lokasi */}
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold text-slate-800">{locationParam}</span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-slate-200" />

            {/* Jadwal Waktu */}
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold text-slate-800">{dateParam}</span>
            </div>

            <div className="hidden sm:block w-px h-4 bg-slate-200" />

            {/* Durasi */}
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold text-slate-800">{durationParam} Hari</span>
            </div>
          </div>

          {/* Tombol Ubah Pencarian */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 rounded-xl bg-[#0b132b] hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-2xs"
            >
              UBAH PENCARIAN
            </Link>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT (Filter Kiri + Grid Mobil Kanan) ── */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ── SIDEBAR FILTER (Kolom Kiri 3/12) ── */}
          <aside className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-5 space-y-6 shadow-2xs sticky top-36">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-slate-900 font-extrabold text-xs tracking-wider">
                <Filter className="w-4 h-4 text-blue-600" />
                <span>FILTER</span>
              </div>
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Filter 1: Tipe Kendaraan */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-mono uppercase font-black tracking-wider text-slate-950">
                TIPE KENDARAAN
              </h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategoryToggle(cat)}
                      className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="font-semibold">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter 2: Kapasitas Kursi */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <h4 className="text-[11px] font-mono uppercase font-black tracking-wider text-slate-950">
                KAPASITAS KURSI
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {seatOptions.map((seat) => {
                  const isSelected = selectedSeats.includes(seat.id);
                  return (
                    <button
                      key={seat.id}
                      type="button"
                      onClick={() => handleSeatToggle(seat.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0b132b] text-white shadow-2xs'
                          : 'bg-slate-50 border border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {seat.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* ── KATALOG MOBIL (Kolom Kanan 9/12) ── */}
          <section className="lg:col-span-9 space-y-6">
            {/* Header List & Dropdown Sorting */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-['Space_Grotesk'] tracking-tight">
                  Tersedia {filteredCars.length} Mobil
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Unit prima terverifikasi siap melayani perjalanan Anda di {locationParam}.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-slate-500 uppercase tracking-wider text-[11px]">
                  URUTKAN:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white font-bold text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  <option value="paling_sesuai">Paling Sesuai</option>
                  <option value="harga_terendah">Harga Terendah</option>
                  <option value="harga_tertinggi">Harga Tertinggi</option>
                </select>
              </div>
            </div>

            {/* Grid Kartu Hasil Pencarian (3 Kolom Persis Balioh) */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredCars.map((car, idx) => {
                const baseDaily =
                  typeParam === 'dengan_sopir' ? car.pricePerDay + 300000 : car.pricePerDay;
                const totalPrice = baseDaily * durationParam;
                const originalPrice = Math.round(totalPrice * 1.35);

                return (
                  <article
                    key={car.id}
                    className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between relative group"
                  >
                    <div>
                      {/* Sisa Stok Badge */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md">
                          SISA {((idx % 3) + 1)} Unit
                        </span>
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#0b132b] text-white">
                          {car.yearRange}
                        </span>
                      </div>

                      {/* Header Model */}
                      <div className="space-y-0.5 mb-2">
                        <span className="text-[11px] font-black uppercase text-slate-950 tracking-wider block">
                          {car.category}
                        </span>
                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-tight truncate">
                          {car.fullName}
                        </h3>
                      </div>

                      {/* Foto Mobil Balioh */}
                      <div className="relative h-28 w-full flex items-center justify-center p-2 my-1">
                        <div className="absolute w-20 h-20 rounded-full bg-slate-100 -z-0" />
                        <img
                          src={car.image}
                          alt={car.name}
                          className="max-h-full max-w-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Spesifikasi Ikon: Penumpang & Bagasi */}
                      <div className="grid grid-cols-2 gap-2 py-2 my-2 bg-slate-50 rounded-xl px-3 text-[11px] text-slate-700 font-semibold border border-slate-100">
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-slate-400" />
                          <span>{car.seats} Penumpang</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                          <span>{car.luggage} Koper</span>
                        </div>
                      </div>

                      {/* Komponen Penetapan Harga */}
                      <div className="py-2 space-y-0.5">
                        <del className="text-[11px] text-rose-500 font-bold block">
                          {formatRupiah(originalPrice)}
                        </del>
                        <div className="text-sm font-black text-slate-950">
                          {formatRupiah(baseDaily)} <span className="text-[10px] text-slate-500 font-normal">/HARI</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-medium block">
                          TOTAL {durationParam} HARI {formatRupiah(totalPrice)}
                        </span>
                      </div>
                    </div>

                    {/* Tombol Aksi PILIH MOBIL */}
                    <div className="pt-3">
                      <Link
                        href={`/booking/checkout?car=${car.id}&type=${typeParam}&location=${encodeURIComponent(locationParam)}&duration=${durationParam}&date=${encodeURIComponent(dateParam)}`}
                        className="w-full py-2.5 rounded-xl bg-[#0b132b] hover:bg-blue-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-2xs"
                      >
                        <span>PILIH MOBIL</span>
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      <BaliohFooter />
    </div>
  );
}

export default function BookingSearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-xs font-bold text-slate-500">Memuat hasil pencarian...</div>}>
      <BookingSearchContent />
    </Suspense>
  );
}
