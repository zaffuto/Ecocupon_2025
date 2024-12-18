'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    chatwootSettings?: Record<string, any>;
    chatwootSDK?: string;
    $chatwoot?: any;
  }
}

interface ChatwootConfig {
  websiteToken: string;
  baseUrl?: string;
  locale?: string;
  position?: 'left' | 'right';
  type?: 'standard' | 'expanded_bubble';
  launcherTitle?: string;
}

export default function ChatwootWidget({
  websiteToken,
  baseUrl = 'https://app.chatwoot.com',
  locale = 'es',
  position = 'right',
  type = 'standard',
  launcherTitle = '¿Necesitas ayuda?'
}: ChatwootConfig) {
  useEffect(() => {
    // Evitar cargar múltiples instancias
    if (window.$chatwoot) return;

    // Configuración de Chatwoot
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: position,
      locale: locale,
      type: type,
      launcherTitle: launcherTitle,
    };

    // Cargar el script de Chatwoot
    (function(d,t) {
      var BASE_URL = baseUrl;
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src = BASE_URL+"/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s?.parentNode?.insertBefore(g,s);
      window.chatwootSDK = g.src;
    })(document,"script");

    // Inicializar Chatwoot
    window.$chatwoot?.run({
      websiteToken: websiteToken,
      baseUrl: baseUrl
    });
  }, [websiteToken, baseUrl, locale, position, type, launcherTitle]);

  return null;
}
