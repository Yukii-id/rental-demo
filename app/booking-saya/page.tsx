'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BaliohNavbar } from '@/components/BaliohNavbar';
import { BaliohFooter } from '@/components/BaliohFooter';
import { ChevronLeft, Compass } from 'lucide-react';

export default function BookingSayaPage() {
  const [activeTab, setActiveTab] = useState<'semua' | 'menunggu' | 'aktif' | 'selesai' | 'dibatalkan'>('semua');

  const tabs = [
    { id: 'semua', label: 'Semua', count: 0 },
    { id: 'menunggu', label: 'Menunggu', count: 0 },
    { id: 'aktif', label: 'Aktif', count: 0 },
    { id: 'selesai', label: 'Selesai', count: 0 },
    { id: 'dibatalkan', label: 'Dibatalkan', count: 0 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans">
      <BaliohNavbar activeCity="Tangerang" />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
        {/* Backlink Dashboard */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Kembali ke halaman Dashboard</span>
        </Link>

        {/* Header Judul Halaman */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
            Booking Saya
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Kelola semua pemesanan kendaraan Anda secara transparan.
          </p>
        </div>

        {/* Tab Filter Status Pemesanan (Pill Buttons Persis Balioh) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isActive ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Content Card: Empty State Ilustrasi Mobil Merah Persis Balioh */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-16 text-center shadow-xs">
          <div className="max-w-sm mx-auto space-y-4">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-red-50 flex items-center justify-center text-5xl">
              🚗
            </div>
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-slate-900">
                Belum ada booking
              </h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                Anda belum pernah melakukan pemesanan.
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
      </main>

      <BaliohFooter />
    </div>
  );
}
