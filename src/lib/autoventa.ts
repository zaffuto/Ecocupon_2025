import { autoventaConfig } from '../config/autoventa';

interface AutoventaResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export async function createDiscount(
  imageUrl: string,
  productType: string,
  discountType: string,
  discountValue: number
): Promise<AutoventaResponse> {
  try {
    const response = await fetch(`${autoventaConfig.adminApi.url}/discounts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': autoventaConfig.adminApi.key,
      },
      body: JSON.stringify({
        company_id: autoventaConfig.adminApi.companyId,
        image_url: imageUrl,
        product_type: productType,
        discount_type: discountType,
        discount_value: discountValue,
      }),
    });

    const data = await response.json();
    return {
      success: response.ok,
      data: response.ok ? data : undefined,
      error: !response.ok ? data.error : undefined,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

export async function uploadImage(file: File): Promise<AutoventaResponse> {
  try {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('company_id', autoventaConfig.adminApi.companyId.toString());

    const response = await fetch(`${autoventaConfig.adminApi.url}/upload`, {
      method: 'POST',
      headers: {
        'X-API-Key': autoventaConfig.adminApi.key,
      },
      body: formData,
    });

    const data = await response.json();
    return {
      success: response.ok,
      data: response.ok ? data : undefined,
      error: !response.ok ? data.error : undefined,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

export async function validateRecycling(imageUrl: string): Promise<AutoventaResponse> {
  try {
    const response = await fetch(`${autoventaConfig.adminApi.url}/validate-recycling`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': autoventaConfig.adminApi.key,
      },
      body: JSON.stringify({
        company_id: autoventaConfig.adminApi.companyId,
        image_url: imageUrl,
      }),
    });

    const data = await response.json();
    return {
      success: response.ok,
      data: response.ok ? data : undefined,
      error: !response.ok ? data.error : undefined,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}
