import { Inter, Montserrat } from 'next/font/google';
import Navbar from '../components/layout/navbar';
import { Suspense } from 'react';
import './globals.css';

import ChatwootWidget from '@/components/ChatwootWidget';
import SentryTest from '@/components/SentryTest';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'EcoCupon - Descuentos Sustentables',
  description: 'Descubre ofertas y promociones en productos eco-friendly en Santiago de Chile',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = '/';
  const canonicalUrl = 'https://ecocupon.cl';

  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
      </head>
      <body className="bg-neutral-50 text-primary selection:bg-accent selection:text-white">
        <Navbar />
        <Suspense>
          <main className="min-h-screen pt-16">{children}</main>
        </Suspense>
        <Suspense>
          <ChatwootWidget 
            websiteToken="YOUR_CHATWOOT_WEBSITE_TOKEN"
            baseUrl="YOUR_CHATWOOT_BASE_URL"
            launcherTitle="¿Necesitas ayuda con tu tienda?"
          />
        </Suspense>
        {process.env.NODE_ENV === 'development' && <SentryTest />}
        <footer className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="font-display text-2xl mb-6">EcoCupon</h3>
                <p className="text-neutral-300">
                  Descuentos y promociones en productos eco-friendly en Santiago de Chile.
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl mb-6">Enlaces</h3>
                <ul className="space-y-4">
                  <li><a href="/products" className="hover:text-accent transition-colors">Productos</a></li>
                  <li><a href="/about" className="hover:text-accent transition-colors">Nosotros</a></li>
                  <li><a href="/contact" className="hover:text-accent transition-colors">Contacto</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-2xl mb-6">Síguenos</h3>
                <div className="flex space-x-6">
                  <a href="https://instagram.com/ecocupon" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    Instagram
                  </a>
                  <a href="https://facebook.com/ecocupon" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    Facebook
                  </a>
                  <a href="https://twitter.com/ecocupon" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-neutral-800 text-center text-neutral-400">
              <p>&copy; {new Date().getFullYear()} EcoCupon. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
