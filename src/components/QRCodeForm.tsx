'use client';

import { useState } from 'react';

export default function QRCodeForm() {
  const [formData, setFormData] = useState({
    businessName: '',
    couponTitle: '',
    description: '',
    discountType: '',
    couponCode: '',
    expiryDate: '',
    terms: '',
    buttonLabel: 'Canjear ahora',
    website: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we'll add the QR code generation logic
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre de empresa
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="couponTitle" className="block text-sm font-medium text-gray-700 mb-1">
            Título del cupón
          </label>
          <input
            type="text"
            id="couponTitle"
            name="couponTitle"
            value={formData.couponTitle}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="discountType" className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de descuento
          </label>
          <select
            id="discountType"
            name="discountType"
            value={formData.discountType}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Selecciona un tipo</option>
            <option value="10">10% de descuento</option>
            <option value="30">30% de descuento</option>
            <option value="50">50% de descuento</option>
            <option value="2x1">2 por 1</option>
            <option value="sale">REBAJA</option>
          </select>
        </div>

        <div>
          <label htmlFor="couponCode" className="block text-sm font-medium text-gray-700 mb-1">
            Código del cupón
          </label>
          <input
            type="text"
            id="couponCode"
            name="couponCode"
            value={formData.couponCode}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
            Fecha de caducidad
          </label>
          <input
            type="date"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="buttonLabel" className="block text-sm font-medium text-gray-700 mb-1">
            Etiqueta del botón
          </label>
          <select
            id="buttonLabel"
            name="buttonLabel"
            value={formData.buttonLabel}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="Canjear ahora">Canjear ahora</option>
            <option value="Comprar ahora">Comprar ahora</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="terms" className="block text-sm font-medium text-gray-700 mb-1">
            Términos y condiciones
          </label>
          <textarea
            id="terms"
            name="terms"
            value={formData.terms}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
            Sitio web
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Ubicación
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Generar código QR
        </button>
      </div>
    </form>
  );
}
