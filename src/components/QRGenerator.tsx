'use client';

import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

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
    <div className="text-center animate-fade-in">
      <div className="qr-container inline-block">
        <div className="mb-6">
          <QRCodeSVG 
            value={qrValue}
            size={250}
            level="H"
            includeMargin
            className="mx-auto shadow-lg rounded-lg"
          />
        </div>
        <div className="space-y-3">
          <p className="text-2xl font-bold text-green-600">
            Descuento actual: {discount}
          </p>
          <p className="text-gray-600">
            Escanea para recibir tu descuento en WhatsApp
          </p>
        </div>
      </div>
      <button
        onClick={generateNewQR}
        className="mt-8 px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-full 
                 hover:bg-green-600 transform hover:scale-105 transition-all duration-300 
                 shadow-lg hover:shadow-xl"
      >
        Generar nuevo descuento
      </button>
    </div>
  );
}
