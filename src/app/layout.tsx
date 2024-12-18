import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EcoCupon - Descuentos por Reciclaje',
  description: 'Obtén descuentos por reciclar productos según la ley REP',
  metadataBase: new URL('https://ecocupon.cl'),
  openGraph: {
    title: 'EcoCupon - Descuentos por Reciclaje',
    description: 'Obtén descuentos por reciclar productos según la ley REP',
    siteName: 'EcoCupon',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    title: 'EcoCupon - Descuentos por Reciclaje',
    description: 'Obtén descuentos por reciclar productos según la ley REP',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
