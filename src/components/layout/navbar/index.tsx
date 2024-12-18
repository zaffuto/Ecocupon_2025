import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Search from './search';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-start">
            <Link href="/" className="font-display text-2xl text-primary hover:text-accent transition-colors">
              EcoCupon
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <Link href="/products" className="text-neutral-600 hover:text-accent transition-colors">
              Productos
            </Link>
            <Link href="/about" className="text-neutral-600 hover:text-accent transition-colors">
              Nosotros
            </Link>
            <Link href="/contact" className="text-neutral-600 hover:text-accent transition-colors">
              Contacto
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-end space-x-4">
            <Suspense fallback={<div className="w-10 h-10" />}>
              <Search />
            </Suspense>
            <div className="flex md:hidden">
              <MobileMenu menu={[
                { title: 'Inicio', path: '/' },
                { title: 'Productos', path: '/products' },
                { title: 'Acerca', path: '/about' },
                { title: 'Contacto', path: '/contact' }
              ]} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
