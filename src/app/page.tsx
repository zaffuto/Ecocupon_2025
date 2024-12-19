'use client';

import QRGenerator from '../components/QRGenerator';
import YouTubeVideo from '../components/YouTubeVideo';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-secondary-900 mb-6">
              <span className="text-primary-600">Eco</span>Cupon
            </h1>
            <p className="text-xl text-secondary-600 mb-12 max-w-2xl mx-auto">
              Haz tus acciones ecológicas realidad y obtiene beneficios de ello - Solo en Chile
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link
                href="/create"
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-semibold text-primary-600 mb-4">Crear Cupón</h2>
                <p className="text-secondary-600">
                  Genera códigos QR para tus cupones ecológicos y compártelos fácilmente.
                </p>
              </Link>

              <Link
                href="/scan"
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-semibold text-primary-600 mb-4">Canjea tu premio</h2>
                <p className="text-secondary-600">
                  Escanea códigos QR y verifica la validez de los cupones al instante.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
