import Image from 'next/image';
import Link from 'next/link';

export default function CouponQRPage() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full bg-gradient-to-b from-emerald-600 to-emerald-800 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Código QR de cupón: aumenta las ventas rápidamente
          </h1>
          <p className="text-xl mb-8 text-emerald-100">
            Mejora la experiencia de compra de tus clientes con nuestro código QR de cupón. 
            Ofrece acceso instantáneo a descuentos y ofertas especiales mediante un simple escaneo.
          </p>
          <Link 
            href="/create"
            className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition-colors"
          >
            Crea tu código QR
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              ¿Cómo funciona un código QR de cupón?
            </h2>
            <p className="text-lg text-gray-600">
              Ingresa los detalles de tu cupón y se crea una página de destino conectada a un código QR. 
              Cuando alguien escanea el código, se abre dicha página con todos los detalles del cupón.
            </p>
          </div>
          <div className="relative h-[300px] bg-gray-100 rounded-lg shadow-lg">
            <Image
              src="/images/qr-example.png"
              alt="QR Code example"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Mantén las cosas simples
              </h3>
              <p className="text-gray-600">
                No más corte de cupones o búsqueda de códigos de descuento. 
                Los códigos QR hacen que sea rápido y fácil.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Muestra tus verdaderos colores
              </h3>
              <p className="text-gray-600">
                Personaliza el código QR con tus colores de marca y logotipo para hacerlo único.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Mejora tus campañas
              </h3>
              <p className="text-gray-600">
                Obtén estadísticas detalladas sobre cuándo y dónde se escanean tus códigos QR.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          ¿Qué información puedo incluir?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            'Nombre de empresa',
            'Título del cupón',
            'Descripción del cupón',
            'Tipo de descuento',
            'Fecha de caducidad',
            'Términos y condiciones'
          ].map((item) => (
            <div key={item} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
              <span className="mr-3 text-emerald-600">✓</span>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-emerald-600 text-white py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">¿Listo para empezar?</h2>
          <Link 
            href="/create"
            className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-50 transition-colors"
          >
            Pruébalo gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
