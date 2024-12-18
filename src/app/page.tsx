import QRGenerator from '@/components/discount/qr-generator';
import Grid from '@/components/grid';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';
import Link from 'next/link';

export const runtime = 'edge';

export default async function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              EcoCupon.cl
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Convierte tus acciones ecológicas en descuentos reales. 
              Recicla según la ley REP y obtén beneficios inmediatos.
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="https://wa.me/56979540471?text=Hola,%20me%20interesa%20una%20demo%20de%20EcoCupon"
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Solicitar Demo
              </Link>
              <Link 
                href="/descuentos"
                className="border border-green-500 text-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                Ver Descuentos
              </Link>
            </div>
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

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Integrado con</h2>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <img src="/autoventa-logo.png" alt="Autoventa.io" className="h-12" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <QRGenerator phoneNumber="+56979540471" message="descuento" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
