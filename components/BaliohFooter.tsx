import React from 'react';
import Link from 'next/link';

export function BaliohFooter() {
  return (
    <footer className="bg-[#0b132b] text-white pt-14 pb-8 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          {/* Kolom 1: Perusahaan */}
          <div className="space-y-3">
            <h4 className="font-mono uppercase font-black tracking-wider text-slate-300 text-xs">
              PERUSAHAAN
            </h4>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li>
                <Link href="/tentang-kami" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kerja-sama" className="hover:text-white transition-colors">
                  Kerja Sama
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/kontak-kami" className="hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 2: Koorporasi */}
          <div className="space-y-3">
            <h4 className="font-mono uppercase font-black tracking-wider text-slate-300 text-xs">
              KORPORASI
            </h4>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li>
                <Link href="/long-term" className="hover:text-white transition-colors">
                  Sewa Jangka Panjang
                </Link>
              </li>
              <li>
                <Link href="/airport-shuttle" className="hover:text-white transition-colors">
                  Antar Jemput Bandara
                </Link>
              </li>
              <li>
                <Link href="/corporate-rate" className="hover:text-white transition-colors">
                  Corporate Rate
                </Link>
              </li>
              <li>
                <Link href="/affiliate" className="hover:text-white transition-colors">
                  Afiliasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Dukungan */}
          <div className="space-y-3">
            <h4 className="font-mono uppercase font-black tracking-wider text-slate-300 text-xs">
              DUKUNGAN
            </h4>
            <ul className="space-y-2 text-slate-400 font-medium">
              <li>
                <Link href="/pusat-bantuan" className="hover:text-white transition-colors">
                  Pusat Bantuan
                </Link>
              </li>
              <li>
                <Link href="/syarat-ketentuan-sewa" className="hover:text-white transition-colors">
                  Syarat Ketentuan
                </Link>
              </li>
              <li>
                <Link href="/kebijakan-privacy" className="hover:text-white transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Brand & Ringkasan (Logo Asli Yukii) */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-6 w-auto flex items-center">
                <img
                  src="/assets/logo/yukii-logo.svg"
                  alt="Yukii Logo"
                  className="h-6 w-auto object-contain brightness-0 invert"
                />
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-800 text-slate-300 border border-slate-700 uppercase">
                INDONESIA
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Platform rental mobil terpercaya lepas kunci dan dengan sopir di Tangerang, Jabodetabek &amp; 250+ kota seluruh Indonesia.
            </p>
            <div className="pt-2 text-slate-500 text-[11px] font-mono">
              &copy; 2026 Yukii.id &amp; PT DEO VATTA CORP. All rights reserved.
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-2">
          <span>Official Rental Showcase &bull; Powered by Yukii Multi-Tenant Enterprise Engine</span>
          <span className="font-mono text-slate-600">v2.4.0-yukii-rental</span>
        </div>
      </div>
    </footer>
  );
}
