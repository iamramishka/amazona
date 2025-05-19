'use client'

import { ProductCard } from '@/components/product-card'

// Temporary mock data - will be replaced with real data from the database
const relatedProducts = [
  {
    id: '2',
    name: 'Wireless Earbuds',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&h=500&fit=crop',
    category: 'Electronics',
  },
  {
    id: '3',
    name: 'Bluetooth Speaker',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
    category: 'Electronics',
  },
  {
    id: '4',
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&h=500&fit=crop',
    category: 'Electronics',
  },
  {
    id: '5',
    name: 'Wireless Charger',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop',
    category: 'Electronics',
  },
]

interface RelatedProductsProps {
  category: string
  currentProductId: string
}

export function RelatedProducts({ category, currentProductId }: RelatedProductsProps) {
  // Filter out the current product and limit to 4 related products
  const filteredProducts = relatedProducts
    .filter((product) => product.id !== currentProductId)
    .slice(0, 4)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Related Products</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
} 