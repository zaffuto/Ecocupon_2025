import Image from 'next/image';
import Link from 'next/link';

export default function CouponQRPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Código QR de cupón: aumenta las ventas rápidamente</h1>
        <p className="text-xl mb-8">
          Mejora la experiencia de compra de tus clientes con nuestro código QR de cupón. Ofrece acceso instantáneo a descuentos y ofertas especiales mediante un simple escaneo.
        </p>
        <Link 
          href="/create"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Crea tu código QR
        </Link>
      </section>

      <section className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">¿Cómo funciona un código QR de cupón?</h2>
          <p className="text-lg">
            Ingresa los detalles de tu cupón y se crea una página de destino conectada a un código QR. 
            Cuando alguien escanea el código, se abre dicha página con todos los detalles del cupón.
          </p>
        </div>
        <div className="relative h-[300px]">
          <Image
            src="/images/qr-example.png"
            alt="QR Code example"
            fill
            className="object-contain"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <div className="p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4">Mantén las cosas simples</h3>
          <p>No más corte de cupones o búsqueda de códigos de descuento. Los códigos QR hacen que sea rápido y fácil.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4">Muestra tus verdaderos colores</h3>
          <p>Personaliza el código QR con tus colores de marca y logotipo para hacerlo único.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4">Mejora tus campañas</h3>
          <p>Obtén estadísticas detalladas sobre cuándo y dónde se escanean tus códigos QR.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">¿Qué información puedo incluir?</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-left">
          <li className="flex items-center">
            <span className="mr-2">✓</span> Nombre de empresa
          </li>
          <li className="flex items-center">
            <span className="mr-2">✓</span> Título del cupón
          </li>
          <li className="flex items-center">
            <span className="mr-2">✓</span> Descripción del cupón
          </li>
          <li className="flex items-center">
            <span className="mr-2">✓</span> Tipo de descuento
          </li>
          <li className="flex items-center">
            <span className="mr-2">✓</span> Fecha de caducidad
          </li>
          <li className="flex items-center">
            <span className="mr-2">✓</span> Términos y condiciones
          </li>
        </ul>
      </section>

      <section className="bg-blue-50 w-full py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">¿Listo para empezar?</h2>
          <Link 
            href="/create"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Pruébalo gratis
          </Link>
        </div>
      </section>
    </main>
  );
}
