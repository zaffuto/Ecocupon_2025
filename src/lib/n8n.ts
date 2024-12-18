export const N8N_CONFIG = {
  baseUrl: process.env.N8N_BASE_URL || 'http://localhost:5678',
  webhookPath: '/webhook',
  endpoints: {
    generateCoupon: '/webhook/generate-coupon',
    processOrder: '/webhook/process-order',
    whatsappNotification: '/webhook/whatsapp-notification'
  }
} as const;

export async function triggerN8NWorkflow(endpoint: string, data: any) {
  try {
    const response = await fetch(`${N8N_CONFIG.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error triggering n8n workflow:', error);
    throw error;
  }
}
