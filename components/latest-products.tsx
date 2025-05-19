'use client'

import { ProductCard } from '@/components/product-card'

// Temporary mock data - will be replaced with real data from the database
const latestProducts = [
  {
    id: '1',
    name: 'Premium Headphones',
    price: 299.99,
    image: '/products/headphones.jpg',
    category: 'Electronics',
  },
  {
    id: '2',
    name: 'Wireless Mouse',
    price: 49.99,
    image: '/products/mouse.jpg',
    category: 'Electronics',
  },
  {
    id: '3',
    name: 'Mechanical Keyboard',
    price: 129.99,
    image: '/products/keyboard.jpg',
    category: 'Electronics',
  },
  {
    id: '4',
    name: 'Gaming Monitor',
    price: 399.99,
    image: '/products/monitor.jpg',
    category: 'Electronics',
  },
]

export function LatestProducts() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Latest Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {latestProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
} 