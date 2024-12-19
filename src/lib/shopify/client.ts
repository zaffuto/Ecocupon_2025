import { GraphQLClient } from 'graphql-request';
import { ShopifyConfig } from './types';

const config: ShopifyConfig = {
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || '',
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '',
  adminAccessToken: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN || '',
  customerAccountToken: process.env.SHOPIFY_CUSTOMER_ACCOUNT_TOKEN || '',
};

const endpoint = `https://${config.storeDomain}/api/2024-01/graphql.json`;

export const storefrontClient = new GraphQLClient(endpoint, {
  headers: {
    'X-Shopify-Storefront-Access-Token': config.storefrontAccessToken,
    'Content-Type': 'application/json',
  },
});

export const adminClient = new GraphQLClient(endpoint, {
  headers: {
    'X-Shopify-Access-Token': config.adminAccessToken,
    'Content-Type': 'application/json',
  },
});
