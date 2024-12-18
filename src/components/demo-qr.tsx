'use client';

import QRCode from 'qrcode.react';

export default function DemoQR() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
      <QRCode 
        value="https://wa.me/56979540471?text=Quiero%20mi%20descuento%20de%20prueba"
        size={200}
        level="H"
        includeMargin
        className="mx-auto"
      />
      <p className="mt-4 text-sm text-gray-500">
        Escanea para recibir un descuento de prueba
      </p>
    </div>
  );
}
