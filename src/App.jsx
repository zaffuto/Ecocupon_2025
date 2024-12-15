import React, { useState } from 'react'
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

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Generador de Cupones QR Ecológicos
            </h1>

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
                className="mt-4 w-full btn-primary"
              >
                {loading ? 'Generando...' : 'Generar QR'}
              </button>
            </div>

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
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            2024 Eco Cupon QR. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
