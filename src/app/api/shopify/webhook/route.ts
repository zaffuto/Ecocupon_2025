import { NextResponse } from 'next/server';
import { N8N_CONFIG, triggerN8NWorkflow } from '@/lib/n8n';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const shopifyHeader = request.headers.get('x-shopify-topic') || '';

    // Determinar qué workflow de n8n activar basado en el webhook de Shopify
    let n8nEndpoint = '';
    switch (shopifyHeader) {
      case 'orders/create':
        n8nEndpoint = N8N_CONFIG.endpoints.processOrder;
        break;
      case 'customers/create':
        n8nEndpoint = N8N_CONFIG.endpoints.whatsappNotification;
        break;
      default:
        n8nEndpoint = N8N_CONFIG.endpoints.generateCoupon;
    }

    // Enviar datos a n8n
    const n8nResponse = await triggerN8NWorkflow(n8nEndpoint, body);

    return NextResponse.json(n8nResponse);
  } catch (error) {
    console.error('Error processing Shopify webhook:', error);
    return NextResponse.json(
      { error: 'Error processing webhook' },
      { status: 500 }
    );
  }
}
