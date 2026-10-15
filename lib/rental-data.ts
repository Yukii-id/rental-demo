export interface CarItem {
  id: string;
  name: string;
  fullName: string;
  category: 'MPV' | 'CITY' | 'SUV' | 'MEWAH' | 'EV';
  yearRange: string;
  seats: number;
  luggage: number;
  transmission: 'AT/MT' | 'AT' | 'MT';
  pricePerDay: number;
  withDriverPrice?: number;
  pricePerMonth?: number;
  image: string;
  isPopular?: boolean;
}

export const BALIOH_CARS: CarItem[] = [
  {
    id: 'grand-new-avanza',
    name: 'Grand New Avanza',
    fullName: 'TOYOTA GRAND NEW AVANZA',
    category: 'MPV',
    yearRange: '2015-2021',
    seats: 7,
    luggage: 2,
    transmission: 'AT/MT',
    pricePerDay: 400000,
    image: 'https://goaja.co.id/wp-content/uploads/2024/12/Toyota-All-New-Avanza.png.webp',
    isPopular: true,
  },
  {
    id: 'all-new-veloz',
    name: 'All New Veloz',
    fullName: 'TOYOTA ALL NEW VELOZ',
    category: 'MPV',
    yearRange: '2022-2026',
    seats: 7,
    luggage: 2,
    transmission: 'AT',
    pricePerDay: 500000,
    image: 'https://goaja.co.id/wp-content/uploads/2024/12/Toyota-All-New-Avanza.png.webp',
    isPopular: true,
  },
  {
    id: 'innova-zenix-hybrid',
    name: 'Innova Zenix G Hybrid',
    fullName: 'TOYOTA INNOVA ZENIX G HYBRID',
    category: 'MPV',
    yearRange: '2022-2026',
    seats: 7,
    luggage: 4,
    transmission: 'AT',
    pricePerDay: 750000,
    image: 'https://goaja.co.id/wp-content/uploads/2024/12/Toyota-Innova-Zenix-1.png.webp',
    isPopular: true,
  },
  {
    id: 'innova-reborn-facelift',
    name: 'Innova Reborn Facelift',
    fullName: 'TOYOTA INNOVA REBORN FACELIFT',
    category: 'MPV',
    yearRange: '2017-2019',
    seats: 7,
    luggage: 4,
    transmission: 'AT/MT',
    pricePerDay: 550000,
    image: 'https://goaja.co.id/wp-content/uploads/2024/12/Toyota-All-New-Avanza.png.webp',
    isPopular: true,
  },
  {
    id: 'new-agya',
    name: 'New Agya GR Sport',
    fullName: 'TOYOTA NEW AGYA GR SPORT',
    category: 'CITY',
    yearRange: '2023-2026',
    seats: 5,
    luggage: 2,
    transmission: 'AT/MT',
    pricePerDay: 350000,
    image: 'https://goaja.co.id/wp-content/uploads/2024/12/Toyota-Camry.png.webp',
    isPopular: true,
  },
  {
    id: 'fortuner-gr-sport',
    name: 'Fortuner GR Sport',
    fullName: 'TOYOTA FORTUNER GR SPORT',
    category: 'SUV',
    yearRange: '2022-2026',
    seats: 7,
    luggage: 4,
    transmission: 'AT',
    pricePerDay: 1100000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    isPopular: false,
  },
  {
    id: 'alphard-facelift',
    name: 'Alphard Transformer',
    fullName: 'TOYOTA ALPHARD FACELIFT',
    category: 'MEWAH',
    yearRange: '2021-2024',
    seats: 7,
    luggage: 4,
    transmission: 'AT',
    pricePerDay: 2300000,
    image: 'https://goaja.co.id/wp-content/uploads/2024/12/Toyota-Alphard-1.png.webp',
    isPopular: false,
  },
  {
    id: 'ioniq-5-ev',
    name: 'Hyundai Ioniq 5 EV',
    fullName: 'HYUNDAI IONIQ 5 SIGNATURE',
    category: 'EV',
    yearRange: '2023-2025',
    seats: 5,
    luggage: 3,
    transmission: 'AT',
    pricePerDay: 1400000,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80',
    isPopular: false,
  },
];

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
