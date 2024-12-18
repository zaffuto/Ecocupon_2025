import { NextResponse } from 'next/server';
import { getCoupons } from '@/lib/sheetdb';

export async function GET() {
  try {
    const allCoupons = await getCoupons();

    // Calcular estadísticas
    const stats = {
      total: allCoupons.length,
      used: allCoupons.filter(c => c.used).length,
      active: allCoupons.filter(c => !c.used && new Date(c.expiry_date) > new Date()).length,
      expired: allCoupons.filter(c => new Date(c.expiry_date) < new Date()).length,
      byType: allCoupons.reduce((acc, curr) => {
        acc[curr.type] = (acc[curr.type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      recentCoupons: allCoupons
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, 10)
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error getting coupon stats:', error);
    return NextResponse.json(
      { error: 'Error getting stats' },
      { status: 500 }
    );
  }
}
