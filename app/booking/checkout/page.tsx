'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { BaliohNavbar } from '@/components/BaliohNavbar';
import { BaliohFooter } from '@/components/BaliohFooter';
import { BALIOH_CARS } from '@/lib/rental-data';
import { formatRupiah } from '@/lib/utils';
import {
  User,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Car,
  ChevronLeft,
  Calendar,
  Sparkles,
} from 'lucide-react';

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const carId = searchParams.get('car') || 'grand-new-avanza';
  const typeParam = searchParams.get('type') || 'dengan_sopir';
  const locationParam = searchParams.get('location') || 'Bandar Lampung';
  const durationParam = Number(searchParams.get('duration')) || 1;
  const dateParam = searchParams.get('date') || '16 Okt 2026 • 07:00';

  const selectedCar = BALIOH_CARS.find((c) => c.id === carId) || BALIOH_CARS[0];

  // Form State
  const [namaLengkap, setNamaLengkap] = useState('Deo Vatta');
  const [noWa, setNoWa] = useState('81234567890');
  const [emailPemesan, setEmailPemesan] = useState('deovatta15@gmail.com');
  const [alamatJemput, setAlamatJemput] = useState('');
  const [catatanKhusus, setCatatanKhusus] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const totalBiaya =
    typeParam === 'dengan_sopir'
      ? (selectedCar.pricePerDay + 300000) * durationParam
      : selectedCar.pricePerDay * durationParam;

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans selection:bg-blue-600 selection:text-white">
      <BaliohNavbar activeCity={locationParam} />

      {/* ── STEP INDICATOR (Persis Balioh Atas) ── */}
      <section className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 sm:gap-8 text-xs font-bold uppercase tracking-wider text-slate-400">
          <Link href="/booking" className="hover:text-slate-600 transition-colors flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px]">1</span>
            <span>PILIH MOBIL</span>
          </Link>
          <span className="text-slate-300">&gt;</span>
          <div className="text-[#0b132b] border-b-2 border-[#0b132b] pb-0.5 flex items-center gap-1.5 font-black">
            <span className="w-5 h-5 rounded-full bg-[#0b132b] text-white flex items-center justify-center text-[10px]">2</span>
            <span>ISI DETAIL</span>
          </div>
          <span className="text-slate-300">&gt;</span>
          <div className="flex items-center gap-1.5 opacity-60">
            <span className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px]">3</span>
            <span>PEMBAYARAN</span>
          </div>
        </div>
      </section>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ── KOLOM KIRI: FORM DATA PEMESAN (7/12) ── */}
          <div className="lg:col-span-7 space-y-6">
            {!isSuccess ? (
              <form onSubmit={handleSubmitBooking} className="space-y-6">
                {/* Blok 1: Data Pemesan */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-5 shadow-2xs">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-[#0b132b] text-white font-mono font-bold text-xs flex items-center justify-center">
                      1
                    </span>
                    <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      DATA PEMESAN
                    </h2>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        NAMA LENGKAP (SESUAI ID) *
                      </label>
                      <input
                        type="text"
                        required
                        value={namaLengkap}
                        onChange={(e) => setNamaLengkap(e.target.value)}
                        placeholder="Masukkan nama lengkap sesuai KTP"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        NOMOR TELEPON / WHATSAPP *
                      </label>
                      <div className="flex items-center rounded-xl border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
                        <span className="px-3.5 py-2.5 bg-slate-100 text-slate-600 font-bold border-r border-slate-200">
                          +62
                        </span>
                        <input
                          type="tel"
                          required
                          value={noWa}
                          onChange={(e) => setNoWa(e.target.value)}
                          placeholder="81234567890"
                          className="flex-1 px-3.5 py-2.5 font-semibold text-slate-900 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                        ALAMAT EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={emailPemesan}
                        onChange={(e) => setEmailPemesan(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        Voucher booking dan detail supir akan dikirimkan ke email ini.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Blok 2: Lokasi Penjemputan */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-5 shadow-2xs">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-[#0b132b] text-white font-mono font-bold text-xs flex items-center justify-center">
                      2
                    </span>
                    <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      LOKASI PENJEMPUTAN
                    </h2>
                  </div>

                  <div className="text-xs space-y-3">
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                      ALAMAT PENJEMPUTAN LENGKAP *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={alamatJemput}
                      onChange={(e) => setAlamatJemput(e.target.value)}
                      placeholder="Masukkan nama hotel, nomor rumah, gedung kantor, atau terminal kedatangan bandara..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 leading-relaxed font-medium"
                    />
                  </div>
                </div>

                {/* Blok 3: Permintaan Khusus */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-5 shadow-2xs">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-[#0b132b] text-white font-mono font-bold text-xs flex items-center justify-center">
                      3
                    </span>
                    <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      PERMINTAAN KHUSUS (OPSIONAL)
                    </h2>
                  </div>

                  <div className="text-xs space-y-3">
                    <textarea
                      rows={2}
                      value={catatanKhusus}
                      onChange={(e) => setCatatanKhusus(e.target.value)}
                      placeholder="Contoh: Tolong siapkan payung di mobil, jemput di lobi timur, supir tidak merokok..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 leading-relaxed font-medium"
                    />
                  </div>
                </div>

                {/* Tombol Aksi Submit Form */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-[#0b132b] hover:bg-blue-600 text-white text-sm sm:text-base font-black transition-all cursor-pointer shadow-lg tracking-wider uppercase"
                  >
                    BAYAR LUNAS {formatRupiah(totalBiaya)}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    Dengan menekan tombol di atas, Anda menyetujui Syarat &amp; Ketentuan Sewa Balioh.
                  </p>
                </div>
              </form>
            ) : (
              /* Success Booking State */
              <div className="bg-white rounded-2xl border border-emerald-200 p-8 sm:p-12 text-center space-y-5 shadow-md">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl">
                  🎉
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl font-black text-slate-900">
                    PEMESANAN BERHASIL DIBUAT!
                  </h2>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Terima kasih, <strong>{namaLengkap}</strong>. Jadwal rental unit <strong>{selectedCar.fullName}</strong> telah tercatat di sistem balioh. Kode reservasi dan kontak driver telah diteruskan ke nomor <strong>+62{noWa}</strong>.
                  </p>
                </div>
                <div className="pt-3 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/booking-saya"
                    className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors"
                  >
                    Cek Booking Saya
                  </Link>
                  <Link
                    href="/"
                    className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
                  >
                    Kembali ke Beranda
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* ── KOLOM KANAN: RINGKASAN & RINCIAN HARGA (5/12) ── */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-2xs sticky top-32">
            <div>
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                RINGKASAN ARMADA
              </span>
              <h3 className="text-base font-black text-slate-900 mt-0.5">
                {selectedCar.fullName}
              </h3>
            </div>

            {/* Foto Mobil */}
            <div className="relative h-32 w-full flex items-center justify-center p-2 bg-slate-50 rounded-xl">
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Ketentuan Sewa Persis Balioh */}
            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs space-y-1.5 text-blue-950 font-medium">
              <div className="flex items-center gap-1.5 font-bold text-blue-900 text-[11px]">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>KETENTUAN DENGAN SUPIR</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Durasi pemakaian operasional maks. 12 jam per hari atau selesai pukul 23:00 WIB. Sudah termasuk unit prima dan jasa driver profesional.
              </p>
            </div>

            {/* Jadwal Waktu Jemput & Kembali */}
            <div className="space-y-3 pt-3 border-t border-slate-100 text-xs">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block font-bold">PENGAMBILAN</span>
                  <strong className="text-slate-900 block font-black">{locationParam.toUpperCase()}</strong>
                  <span className="text-slate-500 text-[11px]">{dateParam}</span>
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block font-bold">PENGEMBALIAN</span>
                  <strong className="text-slate-900 block font-black">{locationParam.toUpperCase()}</strong>
                  <span className="text-slate-500 text-[11px]">Selesai 23:00 WIB</span>
                </div>
              </div>
            </div>

            {/* Rincian Biaya */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-600">
                <span>Harga Sewa ({durationParam} Hari)</span>
                <span className="font-semibold">{formatRupiah(totalBiaya)}</span>
              </div>
              <div className="flex items-center justify-between text-slate-600">
                <span>Biaya Layanan &amp; Verifikasi</span>
                <span className="font-semibold text-emerald-600">GRATIS</span>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-baseline justify-between text-slate-950">
                <span className="font-bold text-xs uppercase tracking-wider">TOTAL HARGA</span>
                <strong className="text-lg font-black text-blue-600">
                  {formatRupiah(totalBiaya)}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BaliohFooter />
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-xs font-bold text-slate-500">Memuat detail pemesanan...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
