const SHEETDB_API = 'https://sheetdb.io/api/v1/36t550n4qbry1';

export interface CouponData {
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  customer_email?: string;
  expiry_date?: string;
  used?: boolean;
  created_at: string;
}

export async function addCouponToSheet(couponData: CouponData) {
  try {
    const response = await fetch(SHEETDB_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [couponData]
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error adding coupon to sheet:', error);
    throw error;
  }
}

export async function getCoupons(filters?: Partial<CouponData>) {
  try {
    let url = SHEETDB_API;
    if (filters) {
      const searchParams = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value) searchParams.append(key, value.toString());
      });
      if (searchParams.toString()) {
        url += `/search?${searchParams.toString()}`;
      }
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting coupons:', error);
    throw error;
  }
}

export async function updateCoupon(couponCode: string, updateData: Partial<CouponData>) {
  try {
    const response = await fetch(`${SHEETDB_API}/code/${couponCode}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: updateData
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating coupon:', error);
    throw error;
  }
}
