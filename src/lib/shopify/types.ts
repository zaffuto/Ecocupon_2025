export interface ShopifyConfig {
  storeDomain: string;
  storefrontAccessToken: string;
  adminAccessToken: string;
  customerAccountToken: string;
}

export interface ShopifyCustomer {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  acceptsMarketing: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ShopifyLoginInput {
  email: string;
  password: string;
}

export interface ShopifyLoginResponse {
  customerAccessToken: {
    accessToken: string;
    expiresAt: string;
  };
}
