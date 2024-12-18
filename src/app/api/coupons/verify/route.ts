import { NextResponse } from 'next/server';
import { getCoupons, updateCoupon } from '@/lib/sheetdb';

export async function POST(request: Request) {
  try {
    const { code, customer_email } = await request.json();

    if (!code) {
      return NextResponse.json(
        { error: 'Coupon code is required' },
        { status: 400 }
      );
    }

    // Buscar el cupón
    const coupons = await getCoupons({ code });
    const coupon = coupons[0];

    if (!coupon) {
      return NextResponse.json(
        { error: 'Coupon not found' },
        { status: 404 }
      );
    }

    // Verificar si el cupón está usado
    if (coupon.used) {
      return NextResponse.json(
        { error: 'Coupon already used' },
        { status: 400 }
      );
    }

    // Verificar si el cupón ha expirado
    if (coupon.expiry_date && new Date(coupon.expiry_date) < new Date()) {
      return NextResponse.json(
        { error: 'Coupon has expired' },
        { status: 400 }
      );
    }

    // Verificar si el cupón está restringido a un email específico
    if (coupon.customer_email && coupon.customer_email !== customer_email) {
      return NextResponse.json(
        { error: 'Coupon is not valid for this customer' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      valid: true,
      coupon
    });
  } catch (error) {
    console.error('Error verifying coupon:', error);
    return NextResponse.json(
      { error: 'Error verifying coupon' },
      { status: 500 }
    );
  }
}
