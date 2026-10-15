'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BaliohNavbar } from '@/components/BaliohNavbar';
import { BaliohFooter } from '@/components/BaliohFooter';
import {
  User,
  ShieldCheck,
  FileCheck2,
  Upload,
  Camera,
  CheckCircle2,
  Lock,
  LogOut,
  AlertCircle,
} from 'lucide-react';

export default function ProfilPage() {
  const [fullName, setFullName] = useState('Deo Vatta');
  const [phoneNumber, setPhoneNumber] = useState('08818765260');
  const email = 'deovatta15@gmail.com';
  const [savedSuccess, setSavedSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans">
      <BaliohNavbar activeCity="Tangerang" />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
            Profil Pengguna &amp; Dokumen
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Kelola data pribadi, keamanan otentikasi, dan kelengkapan dokumen verifikasi sewa.
          </p>
        </div>

        {savedSuccess && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Perubahan data profil berhasil disimpan!</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Kolom Kiri: Ringkasan Profil Card */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-2xs">
            <div className="text-center space-y-3">
              <div className="w-24 h-24 mx-auto rounded-full bg-red-600 text-white font-black text-3xl flex items-center justify-center border-4 border-slate-50 shadow-md">
                D
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">{fullName}</h2>
                <p className="text-xs text-slate-500 font-mono">{email}</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  VIA GOOGLE
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-50 text-amber-700 border border-amber-200">
                  BELUM VERIFIKASI
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                type="button"
                className="w-full py-2.5 px-4 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>KELUAR AKUN</span>
              </button>
            </div>
          </div>

          {/* Kolom Kanan: 3 Kartu Pengaturan Balioh */}
          <div className="lg:col-span-8 space-y-8">
            {/* Kartu 1: Informasi Pribadi */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-5 shadow-2xs">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <User className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Informasi Pribadi
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    NAMA LENGKAP
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      ALAMAT EMAIL (TERKUNCI LOGIN SOSIAL)
                    </label>
                    <input
                      type="email"
                      value={email}
                      disabled
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 font-mono cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      NOMOR TELEPON / WHATSAPP
                    </label>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 text-right">
                <button
                  type="button"
                  onClick={() => setSavedSuccess(true)}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                >
                  SIMPAN PERUBAHAN
                </button>
              </div>
            </div>

            {/* Kartu 2: Keamanan Akun */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-5 shadow-2xs">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                <Lock className="w-4 h-4 text-purple-600" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Keamanan Akun &amp; Kata Sandi
                </h3>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Akun Anda terotentikasi aman melalui <strong>Google OAuth</strong>. Tidak memerlukan pengaturan kata sandi terpisah.</span>
              </div>
            </div>

            {/* Kartu 3: Dokumen Identitas (Persis Balioh 4 Grid Dokumen) */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-5 shadow-2xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Dokumen Identitas
                  </h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono bg-rose-50 text-rose-700 border border-rose-200">
                  BELUM LENGKAP
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900">
                Foto KTP, SIM A dan Dokumen Pendukung wajib diunggah dalam format landscape yang jelas dan tidak buram untuk validasi armada.
              </div>

              {/* 4 Box Upload Dokumen Balioh */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'selfie', title: 'Foto Selfie', sub: 'Foto wajah tampak depan', req: 'Wajib' },
                  { id: 'ktp', title: 'KTP Asli', sub: 'Mode Landscape tampak jelas', req: 'Wajib' },
                  { id: 'sim', title: 'SIM A Aktif', sub: 'Khusus Sewa Lepas Kunci', req: 'Wajib' },
                  { id: 'pendukung', title: 'Dok. Pendukung', sub: 'KK / NPWP / ID Card Kantor', req: 'Wajib' },
                ].map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 rounded-xl border border-dashed border-slate-300 hover:border-blue-500 bg-slate-50/60 hover:bg-blue-50/30 transition-all text-center space-y-2 cursor-pointer group"
                  >
                    <div className="w-10 h-10 mx-auto rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-blue-600 group-hover:border-blue-300 transition-colors">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-1.5">
                        <span className="text-xs font-bold text-slate-900 block">{doc.title}</span>
                        <span className="text-[9px] font-mono font-bold text-rose-600 bg-rose-50 px-1 py-0.2 rounded border border-rose-200">
                          {doc.req}
                        </span>
                      </div>
                      <span className="text-[10px] text-slate-400 block mt-0.5">{doc.sub}</span>
                    </div>
                    <span className="inline-block text-[10px] font-mono font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      PILIH FILE ATAU FOTO
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-right">
                <button
                  type="button"
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                >
                  SIMPAN DOKUMEN &amp; VERIFIKASI
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BaliohFooter />
    </div>
  );
}
