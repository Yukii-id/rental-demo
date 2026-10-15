'use client';

import React from 'react';
import Link from 'next/link';
import { BaliohNavbar } from '@/components/BaliohNavbar';
import { BaliohFooter } from '@/components/BaliohFooter';
import {
  FileText,
  CheckCircle,
  Clock,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Compass,
  Calendar,
} from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    { label: 'Total Booking', value: 0, icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Selesai', value: 0, icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Aktif', value: 0, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Dibatalkan', value: 0, icon: XCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans">
      <BaliohNavbar activeCity="Tangerang" />

      <main className="flex-1 pb-16">
        {/* Hero Profil Pengguna (Persis Balioh Dashboard) */}
        <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white py-10 px-4 sm:px-6 lg:px-8 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 text-white font-black text-2xl sm:text-3xl flex items-center justify-center border-4 border-white/90 shadow-md">
              D
            </div>
            <div>
              <span className="text-blue-200 text-xs sm:text-sm font-medium block">
                Selamat datang kembali 👋
              </span>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
                Deo Vatta
              </h1>
              <span className="inline-block mt-1 text-[11px] font-mono bg-blue-900/60 text-blue-200 px-2 py-0.5 rounded-full border border-blue-400/20">
                deovatta15@gmail.com &bull; via Google
              </span>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 space-y-6">
          {/* 4 Kartu Statistik */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center justify-between"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <strong className="text-2xl sm:text-3xl font-black text-slate-900 block mt-1">
                      {stat.value}
                    </strong>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Banner Peringatan Verifikasi Dokumen KTP / SIM (Persis Balioh) */}
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 sm:p-5 flex items-start gap-4 text-xs sm:text-sm text-rose-900">
            <div className="p-2 rounded-xl bg-rose-100 text-rose-600 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="font-black text-rose-700 tracking-wider text-[11px] uppercase block">
                WARNING VERIFIKASI IDENTITAS
              </span>
              <p className="text-slate-700 leading-relaxed">
                Anda belum memasukkan KTP, SIM A, Foto Selfie. Silakan{' '}
                <Link
                  href="/profil"
                  className="font-bold text-rose-600 underline underline-offset-4 hover:text-rose-800"
                >
                  upload KTP, SIM A, Foto Selfie
                </Link>{' '}
                terlebih dahulu untuk menyelesaikan proses validasi akun rental Anda.
              </p>
            </div>
          </div>

          {/* Area Booking Terbaru (Empty State Persis Balioh) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-2xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <h2 className="text-base font-bold text-slate-900 uppercase tracking-tight">
                  Booking Terbaru
                </h2>
              </div>
              <Link
                href="/booking-saya"
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <span>LIHAT SEMUA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="py-12 text-center max-w-md mx-auto space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-4xl shadow-inner">
                🏝️
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">
                  Belum ada booking
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Mulai petualangan Anda sekarang! Temukan sewa mobil, motor, dan armada perjalanan terbaik di Tangerang dan sekitarnya.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-xs"
                >
                  <Compass className="w-4 h-4" />
                  <span>Jelajahi Layanan</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BaliohFooter />
    </div>
  );
}
