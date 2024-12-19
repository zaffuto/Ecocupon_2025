'use client';

import Link from 'next/link';
import QRGenerator from '../components/QRGenerator';
import YouTubeVideo from '../components/YouTubeVideo';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative text-white text-center">
          <Link 
            href="https://wa.me/56920750527?text=Hola,%20quiero%20más%20información%20sobre%20EcoCupon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <h1 className="text-7xl font-bold mb-8 animate-fade-in text-white drop-shadow-lg [text-shadow:_2px_2px_10px_rgb(0_0_0_/_40%)] bg-primary-600/20 px-8 py-4 rounded-2xl backdrop-blur-sm">
              EcoCupon
            </h1>
          </Link>
          <div className="space-y-2">
            <p className="text-3xl mb-2 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in opacity-90 bg-black/20 px-6 py-3 rounded-xl inline-block backdrop-blur-sm">
              Descuentos automáticos para Shopify
            </p>
            <p className="text-3xl mb-12 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in opacity-90 bg-black/20 px-6 py-3 rounded-xl inline-block backdrop-blur-sm">
              Un cupón a la vez
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <Link
              href="/qr"
              className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors duration-300 animate-fade-in shadow-lg hover:shadow-xl"
            >
              Escanear QR
            </Link>
            <Link
              href="/login" 
              className="bg-[#96BF48] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#7EA540] transition-colors duration-300 animate-fade-in shadow-lg hover:shadow-xl"
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <YouTubeVideo />
        </div>
      </section>

      {/* How it works Section */}
      <section className="w-full py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Proceso Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En solo tres pasos puedes comenzar a recibir beneficios por reciclar
            </p>
          </div>
          
          {/* Steps Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 transform -translate-y-1/2" />
            
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="mb-6 text-center">
                  <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="inline-block bg-emerald-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                    Paso 1
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    Captura tu producto
                  </h3>
                  <p className="text-gray-600">
                    Toma una foto clara de tu producto reciclable siguiendo los lineamientos de la Ley REP
                  </p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-xl">
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Envases y embalajes
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Productos prioritarios
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="mb-6 text-center">
                  <div className="w-20 h-20 mx-auto bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div className="inline-block bg-teal-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                    Paso 2
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    Escanea el QR
                  </h3>
                  <p className="text-gray-600">
                    Utiliza el código QR del punto limpio donde depositaste tu producto
                  </p>
                </div>
                <div className="bg-teal-50 p-4 rounded-xl">
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Puntos limpios certificados
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Trazabilidad garantizada
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="mb-6 text-center">
                  <div className="w-20 h-20 mx-auto bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="inline-block bg-cyan-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                    Paso 3
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    Recibe tu descuento
                  </h3>
                  <p className="text-gray-600">
                    Obtén tu descuento instantáneamente a través de nuestro BOT
                  </p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-xl">
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Descuentos inmediatos
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Beneficios exclusivos
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
