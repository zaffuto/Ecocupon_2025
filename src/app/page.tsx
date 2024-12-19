'use client';

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
            Transforma tus acciones ecológicas en beneficios reales
          </p>
          <a 
            href="#generate" 
            className="inline-block px-12 py-6 bg-white text-emerald-600 rounded-lg text-xl font-bold
                     hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 
                     shadow-2xl animate-fade-in"
          >
            Obtener Descuento
          </a>
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

      {/* QR Generator Section */}
      <section id="generate" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Genera tu Cupón
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Escanea el código QR para recibir tu descuento instantáneo por WhatsApp
              </p>
            </div>
            <QRGenerator />
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
                    3. Disfruta
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-6">EcoCupon</h3>
                <p className="text-gray-400">
                  Transformando el reciclaje en beneficios para ti y el planeta
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-6">Enlaces Rápidos</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
                  <li><a href="#generate" className="text-gray-400 hover:text-white transition-colors">Generar Cupón</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-6">Síguenos</h4>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 EcoCupon. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
