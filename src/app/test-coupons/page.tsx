'use client';

import { useState, useEffect } from 'react';

interface CouponStats {
  total: number;
  used: number;
  active: number;
  expired: number;
  byType: Record<string, number>;
  recentCoupons: any[];
}

export default function TestCoupons() {
  const [email, setEmail] = useState('');
  const [couponType, setCouponType] = useState('welcome');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [verifyCode, setVerifyCode] = useState('');
  const [verifyResult, setVerifyResult] = useState<any>(null);
  const [stats, setStats] = useState<CouponStats | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    fetchStats();
  }, [refreshKey]);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/coupons/stats');
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const generateCoupon = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/coupons/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer: email,
          type: couponType,
        }),
      });
      const data = await response.json();
      setResult(data);
      setRefreshKey(k => k + 1); // Refresh stats
    } catch (error) {
      console.error('Error:', error);
      setResult({ error: 'Failed to generate coupon' });
    }
    setLoading(false);
  };

  const verifyCoupon = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/coupons/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: verifyCode,
          customer_email: email,
        }),
      });
      const data = await response.json();
      setVerifyResult(data);
      setRefreshKey(k => k + 1); // Refresh stats
    } catch (error) {
      console.error('Error:', error);
      setVerifyResult({ error: 'Failed to verify coupon' });
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Panel de Cupones</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Panel de Estadísticas */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Estadísticas</h2>
          {stats && (
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded">
                <div className="text-sm text-blue-600">Total Cupones</div>
                <div className="text-2xl font-bold">{stats.total}</div>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <div className="text-sm text-green-600">Activos</div>
                <div className="text-2xl font-bold">{stats.active}</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded">
                <div className="text-sm text-yellow-600">Usados</div>
                <div className="text-2xl font-bold">{stats.used}</div>
              </div>
              <div className="bg-red-50 p-4 rounded">
                <div className="text-sm text-red-600">Expirados</div>
                <div className="text-2xl font-bold">{stats.expired}</div>
              </div>
            </div>
          )}
        </div>

        {/* Generación de Cupones */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Generar Cupón</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email del Cliente
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="cliente@ejemplo.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Cupón
              </label>
              <select
                value={couponType}
                onChange={(e) => setCouponType(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="welcome">Bienvenida</option>
                <option value="discount">Descuento Regular</option>
              </select>
            </div>

            <button
              onClick={generateCoupon}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-300"
            >
              {loading ? 'Generando...' : 'Generar Cupón'}
            </button>

            {result && (
              <div className="mt-4 p-4 bg-gray-50 rounded">
                <pre className="whitespace-pre-wrap">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Verificación de Cupones */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Verificar Cupón</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Código del Cupón
              </label>
              <input
                type="text"
                value={verifyCode}
                onChange={(e) => setVerifyCode(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="ABC123"
              />
            </div>

            <button
              onClick={verifyCoupon}
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 disabled:bg-green-300"
            >
              {loading ? 'Verificando...' : 'Verificar Cupón'}
            </button>

            {verifyResult && (
              <div className="mt-4 p-4 bg-gray-50 rounded">
                <pre className="whitespace-pre-wrap">
                  {JSON.stringify(verifyResult, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Cupones Recientes */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Cupones Recientes</h2>
          {stats?.recentCoupons && (
            <div className="space-y-2">
              {stats.recentCoupons.map((coupon, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded flex justify-between items-center">
                  <div>
                    <div className="font-medium">{coupon.code}</div>
                    <div className="text-sm text-gray-500">{coupon.customer_email}</div>
                  </div>
                  <div className={`px-2 py-1 rounded text-sm ${
                    coupon.used ? 'bg-yellow-100 text-yellow-800' : 
                    new Date(coupon.expiry_date) < new Date() ? 'bg-red-100 text-red-800' : 
                    'bg-green-100 text-green-800'
                  }`}>
                    {coupon.used ? 'Usado' : 
                     new Date(coupon.expiry_date) < new Date() ? 'Expirado' : 
                     'Activo'}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
