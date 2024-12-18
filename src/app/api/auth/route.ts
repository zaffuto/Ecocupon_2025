import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const shop = searchParams.get('shop');
  const hmac = searchParams.get('hmac');
  const timestamp = searchParams.get('timestamp');
  const state = searchParams.get('state');

  // Validar parámetros necesarios
  if (!shop || !hmac || !timestamp || !state) {
    return NextResponse.json(
      { error: 'Missing required parameters' },
      { status: 400 }
    );
  }

  try {
    // Construir URL de autorización de Shopify
    const shopifyAuthUrl = `https://${shop}/admin/oauth/authorize`;
    const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;
    const scopes = [
      'read_products',
      'write_products',
      'read_discounts',
      'write_discounts',
      'read_customers',
      'write_customers'
    ].join(',');

    const authUrl = new URL(shopifyAuthUrl);
    authUrl.searchParams.set('client_id', process.env.SHOPIFY_API_KEY || '');
    authUrl.searchParams.set('scope', scopes);
    authUrl.searchParams.set('redirect_uri', redirectUri);
    authUrl.searchParams.set('state', state);

    // Redirigir a Shopify para autorización
    return NextResponse.redirect(authUrl.toString());
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
