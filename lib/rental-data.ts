export interface CarItem {
  id: string;
  name: string;
  brand: string;
  category: 'MPV' | 'SUV' | 'Sedan' | 'City Car' | 'Luxury' | 'Minibus';
  seats: number;
  transmission: 'Automatic' | 'Manual';
  fuel: 'Bensin' | 'Diesel' | 'Hybrid';
  year: string;
  pricePerDay: number;
  pricePerMonth?: number;
  withDriverPrice?: number;
  image: string;
  badge?: string;
  available: boolean;
  features: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  badge?: string;
  actionText: string;
}

export const CARS_DATA: CarItem[] = [
  {
    id: 'avanza-fwd',
    name: 'Toyota All New Avanza',
    brand: 'Toyota',
    category: 'MPV',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Bensin',
    year: '2023 - 2024',
    pricePerDay: 350000,
    withDriverPrice: 550000,
    pricePerMonth: 6500000,
    image: 'https://goaja.co.id/wp-content/uploads/2024/12/Toyota-All-New-Avanza.png.webp',
    badge: 'Terfavorit Keluarga',
    available: true,
    features: ['AC Double Blower', 'Audio Bluetooth', 'Airbags', 'Kamera Parkir', 'Irit BBM'],
  },
  {
    id: 'zenix-hybrid',
    name: 'Toyota Innova Zenix Hybrid',
    brand: 'Toyota',
    category: 'MPV',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    year: '2024',
    pricePerDay: 750000,
    withDriverPrice: 950000,
    pricePerMonth: 14500000,
    image: 'https://goaja.co.id/wp-content/uploads/2024/12/innova-zenix.png',
    badge: 'Paling Nyaman',
    available: true,
    features: ['Captain Seat', 'Sunroof Panoramic', 'TSS 3.0 Safety', 'Wireless Charger', 'Suspensi Halus'],
  },
  {
    id: 'innova-reborn',
    name: 'Toyota Innova Reborn Diesel',
    brand: 'Toyota',
    category: 'MPV',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    year: '2022 - 2023',
    pricePerDay: 550000,
    withDriverPrice: 750000,
    pricePerMonth: 10500000,
    image: 'https://goaja.co.id/wp-content/uploads/2024/12/Toyota-Innova-Zenix-1.png.webp',
    badge: 'Tangguh Luar Kota',
    available: true,
    features: ['Mesin Diesel 2GD Bertenaga', 'Kabin Kedap', 'AC Dingin Merata', 'Bagasi Luas'],
  },
  {
    id: 'fortuner-gr',
    name: 'Toyota Fortuner GR Sport',
    brand: 'Toyota',
    category: 'SUV',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    year: '2024',
    pricePerDay: 1100000,
    withDriverPrice: 1350000,
    pricePerMonth: 21000000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    badge: 'Gagah & Prestisius',
    available: true,
    features: ['4x2 High Ground Clearance', 'Leather Interior', 'Power Backdoor', 'Tampilan Maskulin'],
  },
  {
    id: 'alphard-transformer',
    name: 'Toyota Alphard Facelift',
    brand: 'Toyota',
    category: 'Luxury',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Bensin',
    year: '2023 - 2024',
    pricePerDay: 2300000,
    withDriverPrice: 2600000,
    pricePerMonth: 45000000,
    image: 'https://goaja.co.id/wp-content/uploads/2024/12/Toyota-Alphard-1.png.webp',
    badge: 'VIP & Pengantin',
    available: true,
    features: ['Executive Ottoman Seat', 'Pilot Seat Massage', 'Dual Sunroof', 'Privasi Maksimal'],
  },
  {
    id: 'hiace-premio',
    name: 'Toyota Hiace Premio Luxury',
    brand: 'Toyota',
    category: 'Minibus',
    seats: 12,
    transmission: 'Manual',
    fuel: 'Diesel',
    year: '2023',
    pricePerDay: 1300000,
    withDriverPrice: 1550000,
    pricePerMonth: 25000000,
    image: 'https://goaja.co.id/wp-content/uploads/2024/12/Toyota-Hiace-Premio.png.webp',
    badge: 'Rombongan & Wisata',
    available: true,
    features: ['Reclining Seat Jumbo', 'Charger Port Tiap Baris', 'Audio Karaoke', 'Suspensi Empuk'],
  },
  {
    id: 'camry-hybrid',
    name: 'Toyota Camry 2.5 Hybrid',
    brand: 'Toyota',
    category: 'Sedan',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    year: '2023',
    pricePerDay: 1500000,
    withDriverPrice: 1800000,
    pricePerMonth: 28000000,
    image: 'https://goaja.co.id/wp-content/uploads/2024/12/Toyota-Camry.png.webp',
    badge: 'Eksekutif & Bisnis',
    available: true,
    features: ['JBL Premium Audio', 'Rear Seat Reclining Control', 'Suspensi Lembut', 'Irit Hybrid'],
  },
  {
    id: 'brio-rs',
    name: 'Honda Brio RS Urbanite',
    brand: 'Honda',
    category: 'City Car',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Bensin',
    year: '2023',
    pricePerDay: 300000,
    withDriverPrice: 480000,
    pricePerMonth: 5500000,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    badge: 'Lincah Dalam Kota',
    available: true,
    features: ['Mudah Parkir', 'Sangat Irit BBM', 'Touchscreen Headunit', 'Handling Ringan'],
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'with-driver',
    title: 'Sewa Mobil Dengan Driver',
    subtitle: 'Perjalanan Santai Tanpa Capek Menyetir',
    description:
      'Layanan ideal untuk agenda bisnis, kunjungan dinas, tamu luar kota, maupun liburan keluarga. Driver profesional bersertifikat kami siap mengantar Anda tepat waktu dengan etika terbaik dan pemahaman rute tercepat.',
    icon: 'UserCheck',
    badge: 'Paling Diminati',
    features: [
      'Driver ramah, berlisensi & berpengalaman',
      'Bebas lelah & stres hadapi macet Jabodetabek',
      'Ketepatan waktu penjemputan terjamin',
      'Penjemputan fleksibel di Bandara Soetta, Stasiun, atau Hotel',
      'Pilihan durasi 12 Jam, Full Day, hingga Luar Kota',
    ],
    actionText: 'Pilih Layanan Driver',
  },
  {
    id: 'lepas-kunci',
    title: 'Sewa Mobil Lepas Kunci (Self Drive)',
    subtitle: 'Privasi Penuh & Fleksibilitas Rute Maksimal',
    description:
      'Solusi mandiri bagi Anda dan institusi perusahaan yang menginginkan privasi tinggi dalam bepergian. Unit armada tahun muda selalu diservis rutin di bengkel resmi dengan kondisi bersih steril siap tancap gas.',
    icon: 'KeyRound',
    badge: 'Privasi Terjamin',
    features: [
      'Bebas menentukan jadwal dan destinasi sendiri',
      'Kondisi armada prima, bersih, dan wangi',
      'Verifikasi identitas cepat & tanpa prosedur berbelit',
      'Tersedia transmisi Otomatis (Matic) & Manual',
      'Dukungan darurat bengkel & derek 24 jam nonstop',
    ],
    actionText: 'Pilih Lepas Kunci',
  },
  {
    id: 'corporate-rental',
    title: 'Pengadaan Operasional Perusahaan (Corporate)',
    subtitle: 'Efisiensi Transportasi Tanpa Beban Aset Depresiasi',
    description:
      'Solusi pengadaan armada dinas bulanan hingga tahunan untuk perusahaan, BUMN, perbankan, dan instansi proyek. Dilengkapi jaminan unit pengganti instan (replacement car) dan biaya maintenance ditanggung 100%.',
    icon: 'Building2',
    badge: 'Solusi Korporat',
    features: [
      'Kontrak fleksibel bulanan hingga tahunan',
      'Faktur pajak resmi dan invoice termin term of payment',
      'Unit pengganti instan jika mobil butuh servis berkala',
      'Free maintenance & asuransi all-risk komprehensif',
      'Dedicated Account Manager untuk respon cepat',
    ],
    actionText: 'Konsultasi Korporat',
  },
  {
    id: 'airport-transfer',
    title: 'Drop Off & Antar Jemput Bandara (Airport Transfer)',
    subtitle: 'Akses Kilat Bandara Soekarno-Hatta (CGW) & Halim (HLP)',
    description:
      'Layanan antar jemput one-way dari dan ke bandara internasional maupun stasiun kereta api. Driver memantau live flight tracker Anda agar tetap stand by saat jadwal landing pesawat Anda tiba.',
    icon: 'Plane',
    badge: 'On-Time Guaranteed',
    features: [
      'Pantau jadwal penerbangan real-time (No wait delay)',
      'Sudah termasuk BBM, tarif tol, dan biaya parkir bandara',
      'Bantuan angkut bagasi dan koper berat ke bagasi',
      'Standby langsung di Pintu Kedatangan Terminal 1, 2, atau 3',
    ],
    actionText: 'Booking Antar Jemput',
  },
  {
    id: 'wedding-car',
    title: 'Sewa Mobil Pengantin (Wedding Car)',
    subtitle: 'Armada Mewah Berbunga untuk Hari Paling Bahagia',
    description:
      'Sempurnakan momen pernikahan istimewa Anda dengan armada prestisius seperti Toyota Alphard Transformer atau Camry. Sudah termasuk dekorasi pita bunga elegan dan driver berpakaian setelan jas formal.',
    icon: 'HeartHandshake',
    badge: 'Momen Istimewa',
    features: [
      'Armada mewah Alphard, Camry, atau Innova Zenix',
      'Sudah termasuk dekorasi pita & bunga premium',
      'Driver berseragam jas rapi dan berpengalaman untuk acara sakral',
      'Jadwal fleksibel mengawal prosesi akad, gereja, hingga resepsi',
    ],
    actionText: 'Pesan Wedding Car',
  },
  {
    id: 'tour-wisata',
    title: 'Paket Wisata & Tour Rombongan',
    subtitle: 'Eksplorasi Destinasi Favorit Bersama Keluarga Besar',
    description:
      'Perjalanan wisata nyaman ke Anyer, Carita, Puncak, Bandung, Jogja, atau keliling spot kuliner Jabodetabek dengan armada minibus Hiace Premio atau Elf Long berfasilitas audio karaoke.',
    icon: 'Compass',
    badge: 'Keluarga & Komunitas',
    features: [
      'Armada lapang muat 10 s/d 19 penumpang',
      'Fasilitas hiburan audio TV, USB charger tiap kursi',
      'Driver merangkap navigator wisata kuliner lokal terpercaya',
      'Tarif paket hemat all-in termasuk bensin dan makan driver',
    ],
    actionText: 'Pilih Paket Wisata',
  },
];

export const TANGERANG_LOCATIONS = [
  'Bandara Soekarno-Hatta (Terminal 1, 2, 3)',
  'BSD City & Serpong',
  'Gading Serpong & Paramount',
  'Karawaci & Lippo Village',
  'Tangerang Kota (Pasar Lama, Benteng)',
  'Alam Sutera & Cipondoh',
  'Bintaro & Tangerang Selatan',
  'Cikokol & Tangcity',
  'Stasiun Tangerang & Terminal Poris',
  'Balaraja, Cikupa & Bitung Industri',
];
