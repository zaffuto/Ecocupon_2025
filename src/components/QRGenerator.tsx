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
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white p-12 rounded-3xl shadow-2xl max-w-md w-full mx-auto
                    transform transition-all duration-300 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl mb-8">
          <QRCodeSVG 
            value={qrValue}
            size={300}
            level="H"
            includeMargin
            className="mx-auto"
          />
        </div>
        <div className="text-center space-y-4">
          <p className="text-3xl font-bold text-emerald-600">
            {discount} de Descuento
          </p>
          <p className="text-gray-600">
            Escanea el código QR para recibir tu descuento por WhatsApp
          </p>
        </div>
      </div>
      
      <button
        onClick={generateNewQR}
        className="mt-12 px-10 py-5 bg-emerald-600 text-white text-xl font-bold rounded-xl
                 hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300
                 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-50"
      >
        Generar Nuevo Descuento
      </button>
    </div>
  );
}
