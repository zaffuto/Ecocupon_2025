'use client';

import { useState } from 'react';
import QRCode from 'qrcode.react';

export default function QRGenerator() {
  const [discount, setDiscount] = useState('10%');
  const [qrValue, setQrValue] = useState('https://wa.me/56979540471?text=Quiero%20mi%20descuento%20de%20prueba');

  const generateNewQR = () => {
    const discounts = ['10%', '20%', '30%', '40%'];
    const newDiscount = discounts[Math.floor(Math.random() * discounts.length)];
    setDiscount(newDiscount);
    setQrValue(`https://wa.me/56979540471?text=Quiero%20mi%20descuento%20del%20${newDiscount}`);
  };

  return (
    <div className="text-center">
      <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
        <QRCode 
          value={qrValue}
          size={200}
          level="H"
          includeMargin
          className="mx-auto"
        />
        <p className="mt-4 text-lg font-semibold text-gray-700">
          Descuento actual: {discount}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Escanea para recibir tu descuento
        </p>
      </div>
      <button
        onClick={generateNewQR}
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
      >
        Generar nuevo descuento
      </button>
    </div>
  );
}
