'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Bell,
  ChevronDown,
  Car,
  Bike,
  Bus,
  Truck,
  LayoutDashboard,
  CalendarCheck,
  User,
  LogOut,
  MapPin,
  Menu,
  X,
} from 'lucide-react';

export function BaliohNavbar({
  activeCity = 'Tangerang',
  user = { name: 'Deo Vatta', shortName: 'Deo', email: 'deovatta15@gmail.com' },
}) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMinibusOpen, setIsMinibusOpen] = useState(false);
  const [isNiagaOpen, setIsNiagaOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Sisi Kiri: Logo balioh. & Kota */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-black tracking-tight text-slate-950 font-['Space_Grotesk']">
                balioh<span className="text-blue-600">.</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 uppercase tracking-wider bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded-full transition-colors border border-slate-200">
                <MapPin className="w-3 h-3 text-blue-600" />
                {activeCity}
              </span>
            </Link>

            {/* Menu Kategori Navigasi (Persis Balioh) */}
            <div className="hidden lg:flex items-center gap-1 text-xs font-semibold text-slate-700">
              <Link
                href="/sewa-mobil"
                className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                Mobil
              </Link>
              <Link
                href="/sewa-motor"
                className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                Motor
              </Link>
              <Link
                href="/sewa-bus"
                className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                Bus
              </Link>

              {/* Dropdown Minibus */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsMinibusOpen(!isMinibusOpen);
                    setIsNiagaOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-50 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Minibus</span>
                  <ChevronDown className="w-3 h-3" />
                </button>

                {isMinibusOpen && (
                  <div className="absolute left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50">
                    <Link
                      href="/sewa-elf"
                      onClick={() => setIsMinibusOpen(false)}
                      className="block px-4 py-2 hover:bg-slate-50 text-slate-700 font-medium"
                    >
                      🚐 ELF Long Chassis
                    </Link>
                    <Link
                      href="/sewa-hiace"
                      onClick={() => setIsMinibusOpen(false)}
                      className="block px-4 py-2 hover:bg-slate-50 text-slate-700 font-medium"
                    >
                      🚌 Toyota Hiace
                    </Link>
                  </div>
                )}
              </div>

              {/* Dropdown Niaga */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setIsNiagaOpen(!isNiagaOpen);
                    setIsMinibusOpen(false);
                  }}
                  className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-50 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Niaga</span>
                  <ChevronDown className="w-3 h-3" />
                </button>

                {isNiagaOpen && (
                  <div className="absolute left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50">
                    <Link
                      href="/sewa-blind-van"
                      onClick={() => setIsNiagaOpen(false)}
                      className="block px-4 py-2 hover:bg-slate-50 text-slate-700 font-medium"
                    >
                      🚚 Blind Van
                    </Link>
                    <Link
                      href="/sewa-truk"
                      onClick={() => setIsNiagaOpen(false)}
                      className="block px-4 py-2 hover:bg-slate-50 text-slate-700 font-medium"
                    >
                      🚛 Truk Engkel
                    </Link>
                    <Link
                      href="/sewa-pickup"
                      onClick={() => setIsNiagaOpen(false)}
                      className="block px-4 py-2 hover:bg-slate-50 text-slate-700 font-medium"
                    >
                      🛻 Pick Up
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/#layanan"
                className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                Layanan
              </Link>
            </div>
          </div>

          {/* Sisi Kanan: Lonceng Notifikasi & Menu User Deo Vatta */}
          <div className="flex items-center gap-3">
            {/* Tombol Lonceng Notifikasi */}
            <button
              type="button"
              className="p-2 rounded-full hover:bg-slate-100 text-slate-500 relative transition-colors cursor-pointer"
              aria-label="Notifikasi"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-blue-600" />
            </button>

            {/* Dropdown Akun Pengguna (Persis Cookie Login: Deo Vatta) */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 pl-2 pr-2.5 py-1 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all cursor-pointer"
              >
                <div className="w-7 h-7 rounded-full bg-red-600 text-white font-bold flex items-center justify-center text-xs shadow-2xs">
                  {user.shortName ? user.shortName.charAt(0) : 'D'}
                </div>
                <span className="text-xs font-bold text-slate-800">
                  {user.shortName}
                </span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs font-bold text-slate-900 truncate">{user.name}</p>
                    <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                  </div>

                  <div className="py-1 text-xs text-slate-700">
                    <Link
                      href="/dashboard"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-50 font-medium"
                    >
                      <LayoutDashboard className="w-4 h-4 text-blue-600" />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      href="/booking-saya"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-50 font-medium"
                    >
                      <CalendarCheck className="w-4 h-4 text-emerald-600" />
                      <span>Booking Saya</span>
                    </Link>
                    <Link
                      href="/profil"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-50 font-medium"
                    >
                      <User className="w-4 h-4 text-purple-600" />
                      <span>Edit Profil</span>
                    </Link>
                  </div>

                  <div className="pt-1 border-t border-slate-100 text-xs">
                    <Link
                      href="/#logout"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2 text-rose-600 hover:bg-rose-50 font-semibold"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Keluar Akun</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 text-xs font-semibold text-slate-800">
          <Link href="/sewa-mobil" className="block py-2">🚗 Mobil</Link>
          <Link href="/sewa-motor" className="block py-2">🏍️ Motor</Link>
          <Link href="/sewa-bus" className="block py-2">🚌 Bus</Link>
          <Link href="/sewa-hiace" className="block py-2">🚐 Hiace &amp; Minibus</Link>
          <Link href="/sewa-pickup" className="block py-2">🛻 Niaga &amp; Pick Up</Link>
          <div className="pt-2 border-t border-slate-100 space-y-1">
            <Link href="/dashboard" className="block py-2 text-blue-600">🏠 Dashboard</Link>
            <Link href="/booking-saya" className="block py-2 text-emerald-600">📋 Booking Saya</Link>
            <Link href="/profil" className="block py-2 text-purple-600">✏️ Edit Profil</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
