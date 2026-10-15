# Rental Kendaraan Demo Showcase (Yukii Suite)

Website demo showcase untuk paket layanan software **RENTAL_SERVICE** (Website Rental Kendaraan & Sewa Barang) dari ekosistem **Yukii.id** / **admin.yukii.id**.

## Informasi Layanan
- **Domain:** [https://rental.deovatta.my.id](https://rental.deovatta.my.id)
- **Local Port:** `3080`
- **PM2 Name:** `rental-demo`
- **Stack:** Next.js 16 + React 19 + Tailwind CSS + Lucide Icons
- **Inspirasi UI:**
  - Hero section & car list filtering: [Balioh Tangerang](https://balioh.com/sewa-mobil-di-tangerang)
  - Jenis layanan rental mobil: [GoAja](https://goaja.co.id/)

## Fitur Utama
1. **Interactive Search & Filter:** Switch Lepas Kunci (Self Drive) vs Dengan Driver, opsi durasi Harian vs Bulanan (hemat 40%), dan dropdown titik jemput Tangerang & Bandara Soekarno-Hatta.
2. **Katalog Armada:** Pilihan mobil MPV, SUV, Luxury, Minibus, dan City Car lengkap dengan spesifikasi transmisi, jumlah kursi, jenis BBM, dan harga realtime.
3. **6 Pilar Layanan Rental:** Sewa Dengan Driver, Sewa Lepas Kunci, Pengadaan Armada Korporat, Drop Off Bandara Soetta, Wedding Car, dan Paket Tour Wisata.
4. **Fast Booking Drawer:** Form konfirmasi booking kilat terintegrasi langsung ke WhatsApp customer support.

## Menjalankan Aplikasi
```bash
# Install dependencies
npm install

# Build production
npm run build

# Start via PM2
pm2 start ecosystem.config.js
```
