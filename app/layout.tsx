import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rental Mobil Tangerang & Bandara Soetta | Demo Sewa Kendaraan Yukii',
  description:
    'Sewa mobil lepas kunci dan dengan driver profesional di area Tangerang, BSD City, dan Bandara Soekarno-Hatta. Armada terlengkap, harga jujur, dan bantuan 24/7.',
  keywords: [
    'sewa mobil tangerang',
    'rental mobil bsd',
    'rental mobil bandara soetta',
    'sewa mobil lepas kunci tangerang',
    'rental innova zenix tangerang',
    'sewa hiace premio tangerang',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-['Plus_Jakarta_Sans',sans-serif] bg-slate-50 text-slate-900 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
