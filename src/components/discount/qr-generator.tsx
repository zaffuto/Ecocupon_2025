import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { motion } from 'framer-motion';

interface DiscountFormData {
  productImage: string;
  productType: string;
  discountType: 'percentage' | 'fixed' | 'transport';
  discountValue: number;
  whatsappNumber: string;
  terms: string;
}

interface QRGeneratorProps {
  phoneNumber?: string;
  message?: string;
}

export default function QRGenerator({ phoneNumber, message }: QRGeneratorProps) {
  const [formData, setFormData] = useState<DiscountFormData>({
    productImage: '',
    productType: '',
    discountType: 'percentage',
    discountValue: 25,
    whatsappNumber: phoneNumber || '',
    terms: '',
  });

  const [qrValue, setQrValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewMessage, setPreviewMessage] = useState('');

  const generateQRCode = () => {
    setIsGenerating(true);
    const { productType, discountType, discountValue } = formData;
    
    let messageText = message;
    if (!message) {
      const discountText = discountType === 'transport' ? 'Pasaje QR' : `${discountValue}% de descuento`;
      messageText = `¡Hola! 🌱\n\nGracias por reciclar ${productType}.\nAquí está tu EcoCupón:\n\n🏷️ Beneficio: ${discountText}\n♻️ Producto reciclado: ${productType}\n\n¡Gracias por contribuir al medio ambiente!`;
    }
    
    setPreviewMessage(messageText);
    const whatsappUrl = `https://wa.me/${formData.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    setQrValue(whatsappUrl);
    
    setTimeout(() => setIsGenerating(false), 500);
  };

  // Si se proporcionan phoneNumber y message, genera el QR automáticamente
  useState(() => {
    if (phoneNumber && message) {
      generateQRCode();
    }
  }, [phoneNumber, message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    generateQRCode();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Aquí iría la lógica para subir la imagen a autoventa.io
      // Por ahora solo actualizamos el estado
      setFormData((prev) => ({
        ...prev,
        productImage: URL.createObjectURL(file),
      }));
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!phoneNumber && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Foto del Producto
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-1 block w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tipo de Producto
            </label>
            <select
              name="productType"
              value={formData.productType}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="">Selecciona un tipo</option>
              <option value="envase">Envase</option>
              <option value="embalaje">Embalaje</option>
              <option value="electronico">Electrónico</option>
              <option value="bateria">Batería</option>
              <option value="neumatico">Neumático</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tipo de Beneficio
            </label>
            <select
              name="discountType"
              value={formData.discountType}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="percentage">Descuento Porcentual</option>
              <option value="fixed">Descuento Fijo</option>
              <option value="transport">Pasaje QR</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Generar QR
          </button>
        </form>
      )}

      {qrValue && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-center"
        >
          <QRCodeCanvas
            value={qrValue}
            size={200}
            level="H"
            includeMargin
            className="mx-auto rounded-lg shadow-lg"
          />
          <p className="mt-4 text-sm text-gray-500">
            Escanea el código QR para recibir tu descuento por WhatsApp
          </p>
        </motion.div>
      )}
    </div>
  );
}
