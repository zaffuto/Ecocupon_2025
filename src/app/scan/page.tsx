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
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Escanear Código QR</h1>
      
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <QRReader onResult={handleResult} onError={handleError} />
        
        {result && (
          <div className="mt-4 p-4 bg-green-100 rounded">
            <h2 className="font-semibold text-green-800">Resultado:</h2>
            <p className="text-green-700">{result}</p>
          </div>
        )}
        
        {error && (
          <div className="mt-4 p-4 bg-red-100 rounded">
            <p className="text-red-700">{error}</p>
          </div>
        )}
      </div>
    </main>
  );
}
