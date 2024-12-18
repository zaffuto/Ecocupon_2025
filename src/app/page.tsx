import Link from 'next/link';
import DemoQR from '@/components/demo-qr';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              EcoCupon
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Convierte tus acciones ecológicas en descuentos reales. 
              Recicla según la ley REP y obtén beneficios inmediatos.
            </p>
            <Link 
              href="https://wa.me/56979540471?text=Hola,%20me%20interesa%20saber%20más%20sobre%20EcoCupon"
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Solicitar Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">¿Cómo funciona?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📸</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Envía tu Foto</h3>
              <p className="text-gray-600">Toma una foto del producto que vas a reciclar según la ley REP</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Recibe tu Cupón</h3>
              <p className="text-gray-600">Obtén un código QR con tu descuento instantáneo de hasta 40%</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Canjea el Beneficio</h3>
              <p className="text-gray-600">Usa tu descuento en productos o conviértelo en pasaje QR</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo QR Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Prueba un Descuento Demo</h2>
          <DemoQR />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            {new Date().getFullYear()} EcoCupon. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
