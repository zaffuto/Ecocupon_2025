import { NextResponse } from 'next/server';
import { N8N_CONFIG, triggerN8NWorkflow } from '@/lib/n8n';
import { addCouponToSheet, CouponData } from '@/lib/sheetdb';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!body.customer || !body.type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generar cupón con n8n
    const n8nResponse = await triggerN8NWorkflow(
      N8N_CONFIG.endpoints.generateCoupon,
      {
        customer: body.customer,
        couponType: body.type,
        metadata: body.metadata || {}
      }
    );

    // Guardar en SheetDB
    const couponData: CouponData = {
      code: n8nResponse.couponCode,
      discount: body.type === 'welcome' ? 10 : 5,
      type: 'percentage',
      customer_email: body.customer,
      expiry_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 días
      used: false,
      created_at: new Date().toISOString()
    };

    await addCouponToSheet(couponData);

    return NextResponse.json({
      ...n8nResponse,
      couponData
    });
  } catch (error) {
    console.error('Error generating coupon:', error);
    return NextResponse.json(
      { error: 'Error generating coupon' },
      { status: 500 }
    );
  }
}
