'use client';

import Link from 'next/link';
import QRGenerator from '../components/QRGenerator';
import YouTubeVideo from '../components/YouTubeVideo';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-emerald-600 via-green-500 to-teal-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative text-white text-center">
          <h1 className="text-7xl font-bold mb-8 animate-fade-in">
            EcoCupon
          </h1>
          <p className="text-3xl mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in opacity-90">
            Haz tus acciones ecológicas realidad y obtiene beneficios de ello - Solo en Chile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/scan" 
              className="inline-block px-12 py-6 bg-white text-emerald-600 rounded-lg text-xl font-bold
                       hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 
                       shadow-2xl animate-fade-in"
            >
              Canjea tu premio
            </Link>
            <Link 
              href="/login" 
              className="inline-block px-12 py-6 bg-[#96BF48] text-white rounded-lg text-xl font-bold
                       hover:bg-[#7EA540] transition-all duration-300 transform hover:scale-105 
                       shadow-2xl animate-fade-in flex items-center"
            >
              <svg 
                className="w-6 h-6 mr-2" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.85C6.012 22.85 1.15 17.988 1.15 12S6.012 1.15 12 1.15 22.85 6.012 22.85 12 17.988 22.85 12 22.85zm0-18.3c-4.108 0-7.45 3.342-7.45 7.45s3.342 7.45 7.45 7.45 7.45-3.342 7.45-7.45-3.342-7.45-7.45-7.45zm0 13.7c-3.45 0-6.25-2.8-6.25-6.25S8.55 5.75 12 5.75s6.25 2.8 6.25 6.25-2.8 6.25-6.25 6.25z"/>
              </svg>
              Shopify Login
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              ¿Cómo Funciona?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo puedes contribuir al medio ambiente mientras obtienes beneficios exclusivos
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <YouTubeVideo />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Proceso Simple
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                En solo tres pasos puedes comenzar a recibir beneficios por reciclar
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="group">
                <div className="bg-white p-12 rounded-2xl shadow-xl transition-all duration-300 
                              transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <div className="text-6xl mb-8">📸</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    1. Captura
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Fotografía los productos que vas a reciclar siguiendo la ley REP
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="bg-white p-12 rounded-2xl shadow-xl transition-all duration-300 
                              transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <div className="text-6xl mb-8">🎯</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    2. Escanea
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Usa el código QR para recibir tu cupón de descuento personalizado
                  </p>
                </div>
              </div>
              <div className="group">
                <div className="bg-white p-12 rounded-2xl shadow-xl transition-all duration-300 
                              transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <div className="text-6xl mb-8">💰</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    3. Canjea tu premio
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Aprovecha tus descuentos en productos de nuestros partners ecológicos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
