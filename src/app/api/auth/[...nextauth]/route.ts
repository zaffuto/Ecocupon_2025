import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { storefrontClient } from '@/lib/shopify/client';

const LOGIN_MUTATION = `
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'shopify',
      name: 'Shopify',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const { customerAccessTokenCreate } = await storefrontClient.request(LOGIN_MUTATION, {
            input: {
              email: credentials?.email,
              password: credentials?.password,
            },
          });

          if (customerAccessTokenCreate.customerAccessToken) {
            return {
              id: customerAccessTokenCreate.customerAccessToken.accessToken,
              email: credentials?.email,
            };
          }

          return null;
        } catch (error) {
          console.error('Shopify auth error:', error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };