'use client';

import QRGenerator from '../components/QRGenerator';
import YouTubeVideo from '../components/YouTubeVideo';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="relative bg-green-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/eco-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-6xl font-bold text-center mb-6 animate-fade-in">
            EcoCupon
          </h1>
          <p className="text-2xl text-center mb-12 max-w-2xl mx-auto text-green-100">
            Convierte tus acciones ecológicas en descuentos reales.
            <br />
            <span className="text-xl">Recicla según la ley REP y obtén beneficios inmediatos.</span>
          </p>
          <div className="flex justify-center">
            <a href="#generate" 
               className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors shadow-lg">
              Generar Cupón
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          ¿Cómo Funciona?
        </h2>
        <YouTubeVideo />
      </section>

      {/* QR Generator Section */}
      <section id="generate" className="container mx-auto px-4 py-20 bg-white rounded-2xl shadow-xl max-w-4xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Genera tu Cupón de Descuento
        </h2>
        <QRGenerator />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl h-full">
              <div className="text-5xl mb-6">📸</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">1. Envía tu Foto</h3>
              <p className="text-gray-600">Toma una foto del producto que vas a reciclar y compártela con nosotros</p>
            </div>
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl h-full">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">2. Recibe tu Cupón</h3>
              <p className="text-gray-600">Obtén instantáneamente un código QR con tu descuento personalizado</p>
            </div>
          </div>
          <div className="transform hover:scale-105 transition-transform duration-300">
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl h-full">
              <div className="text-5xl mb-6">💰</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">3. Usa el Beneficio</h3>
              <p className="text-gray-600">Aplica tu descuento en productos seleccionados de nuestros partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">EcoCupon</h2>
          <p className="text-green-200 mb-6">Juntos por un futuro más sostenible</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-green-300 transition-colors">Instagram</a>
            <a href="#" className="hover:text-green-300 transition-colors">Twitter</a>
            <a href="#" className="hover:text-green-300 transition-colors">Facebook</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
