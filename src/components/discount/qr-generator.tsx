import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { motion } from 'framer-motion';

interface DiscountFormData {
  productImage: string;
  discountType: 'percentage' | 'fixed' | 'transport';
  discountValue: number;
}

interface Props {
  phoneNumber: string;
  message: string;
}

export default function QRGenerator({ phoneNumber, message }: Props) {
  const [formData, setFormData] = useState<DiscountFormData>({
    productImage: '',
    discountType: 'percentage',
    discountValue: 0,
  });

  const [qrValue, setQrValue] = useState('');
  const [previewMessage, setPreviewMessage] = useState('');

  const generateQRCode = () => {
    const whatsappMessage = encodeURIComponent(
      `${message}\n\nTipo: ${formData.discountType}\nValor: ${formData.discountValue}`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    setQrValue(whatsappUrl);
    setPreviewMessage(decodeURIComponent(whatsappMessage));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, productImage: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Imagen del Producto
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-green-50 file:text-green-700
              hover:file:bg-green-100"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tipo de Descuento
          </label>
          <select
            value={formData.discountType}
            onChange={(e) => setFormData(prev => ({ 
              ...prev, 
              discountType: e.target.value as DiscountFormData['discountType']
            }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          >
            <option value="percentage">Porcentaje</option>
            <option value="fixed">Monto Fijo</option>
            <option value="transport">Pasaje QR</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Valor del Descuento
          </label>
          <input
            type="number"
            value={formData.discountValue}
            onChange={(e) => setFormData(prev => ({ 
              ...prev, 
              discountValue: parseFloat(e.target.value) 
            }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          />
        </div>

        <button
          onClick={generateQRCode}
          className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Generar QR
        </button>

        {qrValue && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-4 text-center"
          >
            <QRCodeCanvas
              value={qrValue}
              size={200}
              level="H"
              includeMargin
              className="mx-auto"
            />
            <p className="mt-2 text-sm text-gray-500">{previewMessage}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
