'use client';

import QRGenerator from '../components/QRGenerator';
import YouTubeVideo from '../components/YouTubeVideo';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6 animate-fade-in">
              EcoCupon
            </h1>
            <p className="text-2xl mb-8 text-green-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Convierte tus acciones ecológicas en descuentos reales.
              <br />
              <span className="text-xl opacity-90">
                Recicla según la ley REP y obtén beneficios inmediatos.
              </span>
            </p>
            <a 
              href="#generate" 
              className="inline-block px-8 py-4 bg-white text-green-600 rounded-full font-semibold 
                       hover:bg-green-50 transition-all duration-300 transform hover:scale-105 
                       shadow-lg animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              Generar Cupón
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            ¿Cómo Funciona?
          </h2>
          <div className="max-w-4xl mx-auto">
            <YouTubeVideo />
          </div>
        </div>
      </section>

      {/* QR Generator Section */}
      <section id="generate" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Genera tu Cupón de Descuento
          </h2>
          <QRGenerator />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card-hover">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-5xl mb-6">📸</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  1. Envía tu Foto
                </h3>
                <p className="text-gray-600">
                  Toma una foto del producto que vas a reciclar y compártela con nosotros
                </p>
              </div>
            </div>
            <div className="card-hover">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  2. Recibe tu Cupón
                </h3>
                <p className="text-gray-600">
                  Obtén instantáneamente un código QR con tu descuento personalizado
                </p>
              </div>
            </div>
            <div className="card-hover">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-5xl mb-6">💰</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  3. Usa el Beneficio
                </h3>
                <p className="text-gray-600">
                  Aplica tu descuento en productos seleccionados de nuestros partners
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">EcoCupon</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Juntos por un futuro más sostenible. Únete a nuestra comunidad y sé parte del cambio.
            </p>
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
