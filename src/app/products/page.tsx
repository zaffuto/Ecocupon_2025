'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { storefrontClient } from '@/lib/shopify/client';

interface Product {
  id: string;
  title: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        url: string;
      };
    }>;
  };
}

interface Collection {
  id: string;
  title: string;
  products: {
    edges: Array<{
      node: Product;
    }>;
  };
}

interface CollectionsResponse {
  collections: {
    edges: Array<{
      node: Collection;
    }>;
  };
}

const COLLECTIONS_QUERY = `
  query Collections {
    collections(first: 10) {
      edges {
        node {
          id
          title
          products(first: 10) {
            edges {
              node {
                id
                title
                description
                priceRange {
                  minVariantPrice {
                    amount
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function ProductsPage() {
  const { data: session } = useSession();
  const [collections, setCollections] = useState<Collection[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const data = await storefrontClient.request<CollectionsResponse>(COLLECTIONS_QUERY);
        const collections = data.collections.edges.map(edge => edge.node);
        setCollections(collections);
        if (collections.length > 0) {
          setSelectedCollection(collections[0].id);
        }
      } catch (error) {
        console.error('Error fetching collections:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  const selectedCollectionData = collections.find(c => c.id === selectedCollection);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando productos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
            Productos Ecológicos
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">
              Bienvenido, {session?.user?.email}
            </span>
            <button
              onClick={() => {/* Implementar logout */}}
              className="text-sm text-red-600 hover:text-red-800"
            >
              Cerrar sesión
            </button>
          </div>
        </div>

        {/* Colecciones */}
        <div className="flex overflow-x-auto pb-4 mb-8 -mx-4 px-4 space-x-4">
          {collections.map((collection) => (
            <button
              key={collection.id}
              onClick={() => setSelectedCollection(collection.id)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCollection === collection.id
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {collection.title}
            </button>
          ))}
        </div>

        {/* Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedCollectionData?.products.edges.map(({ node: product }) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {product.images.edges[0] && (
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src={product.images.edges[0].node.url}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-emerald-600">
                    ${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}
                  </span>
                  <button
                    className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                    onClick={() => {/* Implementar aplicar cupón */}}
                  >
                    Aplicar Cupón
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
