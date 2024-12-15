import { useState } from 'react'
import { QRCodeSVG } from 'react-qr-code'
import { toast } from 'react-hot-toast'
import { ArrowDownTrayIcon, QrCodeIcon } from '@heroicons/react/24/outline'
import { supabase } from './lib/supabase'

function App() {
  const [qrText, setQrText] = useState('')
  const [showQR, setShowQR] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleGenerateQR = async () => {
    if (!qrText) {
      toast.error('Por favor ingresa un texto para el cupón')
      return
    }

    setLoading(true)
    try {
      // Guardar en Supabase
      const { data, error } = await supabase
        .from('cupones')
        .insert([
          { contenido: qrText }
        ])
        .select()

      if (error) throw error

      setShowQR(true)
      toast.success('¡QR generado exitosamente!')
    } catch (error) {
      console.error('Error:', error)
      toast.error('Error al generar el QR')
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = () => {
    const svg = document.getElementById('qr-code')
    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      const pngFile = canvas.toDataURL('image/png')
      const downloadLink = document.createElement('a')
      downloadLink.download = 'eco-cupon-qr.png'
      downloadLink.href = pngFile
      downloadLink.click()
    }
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <QrCodeIcon className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Eco Cupon QR</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Generador de Cupones QR Ecológicos
            </h1>

            {/* Input Section */}
            <div className="max-w-2xl mx-auto">
              <label htmlFor="qr-text" className="block text-sm font-medium text-gray-700 mb-2">
                Texto del Cupón
              </label>
              <textarea
                id="qr-text"
                rows="4"
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                placeholder="Ingresa el texto para tu cupón ecológico..."
                value={qrText}
                onChange={(e) => setQrText(e.target.value)}
              />

              <button
                onClick={handleGenerateQR}
                disabled={loading}
                className={`mt-4 w-full btn-primary ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Generando...' : 'Generar QR'}
              </button>
            </div>

            {/* QR Code Display */}
            {showQR && qrText && (
              <div className="mt-8 text-center">
                <div className="inline-block bg-white p-4 rounded-lg shadow-lg">
                  <QRCodeSVG
                    id="qr-code"
                    value={qrText}
                    size={256}
                    level="H"
                  />
                </div>
                <button
                  onClick={handleDownload}
                  className="mt-4 btn-primary"
                >
                  <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                  Descargar QR
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-primary-600 mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Rápido y Fácil</h3>
            <p className="mt-2 text-gray-500">Genera códigos QR para tus cupones en segundos.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-primary-600 mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Alta Calidad</h3>
            <p className="mt-2 text-gray-500">QR codes optimizados para una lectura perfecta.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-primary-600 mb-4">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">Eco-friendly</h3>
            <p className="mt-2 text-gray-500">Contribuye al medio ambiente con cupones digitales.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © 2024 Eco Cupon QR. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
