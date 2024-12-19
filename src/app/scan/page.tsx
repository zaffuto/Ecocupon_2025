'use client';

import { useState } from 'react';
import QRReader from '@/components/QRReader';

export default function ScanPage() {
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleResult = (result: string) => {
    setResult(result);
    // Aquí puedes agregar la lógica para manejar el resultado del QR
    console.log('QR Code result:', result);
  };

  const handleError = (error: string) => {
    setError(error);
    console.error('QR Code error:', error);
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <div className="flex-1 w-full max-w-lg mx-auto px-4 py-6">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-6">
          Escanear Código QR
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <QRReader onResult={handleResult} onError={handleError} />
          </div>
          
          {result && (
            <div className="mt-4 mx-4 sm:mx-6 mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
              <h2 className="font-semibold text-green-800 mb-2">Cupón encontrado:</h2>
              <p className="text-green-700 break-all">{result}</p>
            </div>
          )}
          
          {error && (
            <div className="mt-4 mx-4 sm:mx-6 mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-700">{error}</p>
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-secondary-600">
          Coloca el código QR dentro del marco para escanearlo automáticamente
        </p>
      </div>
    </div>
  );
}
