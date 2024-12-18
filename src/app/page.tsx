import QRGenerator from '@/components/QRGenerator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-6">
          EcoCupon
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Convierte tus acciones ecológicas en descuentos reales.
          Recicla según la ley REP y obtén beneficios inmediatos.
        </p>
      </section>

      {/* QR Generator Section */}
      <section className="container mx-auto px-4 py-12 bg-white rounded-lg shadow-sm max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Genera tu Cupón de Descuento
        </h2>
        <QRGenerator />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl mb-4">📸</div>
            <h3 className="text-xl font-semibold mb-3">1. Envía tu Foto</h3>
            <p className="text-gray-600">Toma una foto del producto que vas a reciclar</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-3">2. Recibe tu Cupón</h3>
            <p className="text-gray-600">Obtén un código QR con tu descuento</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3">3. Usa el Beneficio</h3>
            <p className="text-gray-600">Aplica tu descuento en productos</p>
          </div>
        </div>
      </section>
    </main>
  );
}
