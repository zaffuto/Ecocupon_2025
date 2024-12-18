import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const shop = searchParams.get('shop');
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const hmac = searchParams.get('hmac');

  // Validar parámetros
  if (!shop || !code || !state || !hmac) {
    return NextResponse.json(
      { error: 'Missing required parameters' },
      { status: 400 }
    );
  }

  try {
    // Verificar HMAC
    const message = searchParams.toString()
      .replace(`hmac=${hmac}&`, '')
      .split('&')
      .sort()
      .join('&');

    const generatedHash = crypto
      .createHmac('sha256', process.env.SHOPIFY_API_SECRET || '')
      .update(message)
      .digest('hex');

    if (generatedHash !== hmac) {
      return NextResponse.json(
        { error: 'HMAC validation failed' },
        { status: 400 }
      );
    }

    // Intercambiar código por token de acceso
    const accessTokenResponse = await fetch(
      `https://${shop}/admin/oauth/access_token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: process.env.SHOPIFY_API_KEY,
          client_secret: process.env.SHOPIFY_API_SECRET,
          code,
        }),
      }
    );

    if (!accessTokenResponse.ok) {
      throw new Error('Failed to get access token');
    }

    const { access_token } = await accessTokenResponse.json();

    // Guardar el token (aquí deberías implementar tu lógica de almacenamiento seguro)
    // Por ejemplo, guardarlo en una base de datos segura

    // Configurar n8n con el nuevo token
    try {
      const n8nResponse = await fetch('http://localhost:5678/rest/credentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-N8N-API-KEY': process.env.N8N_API_KEY || '',
        },
        body: JSON.stringify({
          name: `shopify-${shop}`,
          type: 'shopifyApi',
          data: {
            accessToken: access_token,
            shopSubdomain: shop.split('.')[0],
          },
          nodesAccess: [
            {
              nodeType: 'n8n-nodes-base.shopify',
              date: new Date().toISOString(),
            },
          ],
        }),
      });

      if (!n8nResponse.ok) {
        console.error('Failed to configure n8n:', await n8nResponse.text());
      }
    } catch (n8nError) {
      console.error('Error configuring n8n:', n8nError);
    }

    // Redirigir al dashboard con éxito
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?shop=${shop}&success=true`
    );
  } catch (error) {
    console.error('Callback error:', error);
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_APP_URL}/error?message=auth_failed`
    );
  }
}
