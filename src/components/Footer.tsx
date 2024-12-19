export default function Footer() {
  return (
    <footer className="bg-white shadow-md mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold text-primary-600">EcoCupon</h3>
            <p className="text-sm text-secondary-500">Cuidando el planeta, un cupón a la vez</p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-secondary-500">
            <a href="#" className="hover:text-primary-600 transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Contacto</a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-secondary-100">
          <p className="text-center text-sm text-secondary-400">
            {new Date().getFullYear()} EcoCupon. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
