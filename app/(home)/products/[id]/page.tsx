import { ProductGallery } from '@/components/product-gallery'
import { ProductInfo } from '@/components/product-info'
import { ProductReviews } from '@/components/product-reviews'
import { RelatedProducts } from '@/components/related-products'

// Temporary mock data - will be replaced with real data from the database
const product = {
  id: '1',
  name: 'Premium Wireless Headphones',
  description:
    'Experience crystal-clear sound with our premium wireless headphones. Features include active noise cancellation, 30-hour battery life, and comfortable over-ear design.',
  price: 299.99,
  images: [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&h=800&fit=crop',
  ],
  category: 'Electronics',
  rating: 4.5,
  reviews: [
    {
      id: '1',
      user: 'John Doe',
      rating: 5,
      comment: 'Excellent sound quality and very comfortable!',
      date: '2024-03-15',
    },
    {
      id: '2',
      user: 'Jane Smith',
      rating: 4,
      comment: 'Great headphones, but a bit pricey.',
      date: '2024-03-10',
    },
  ],
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ProductGallery images={product.images} />
        <ProductInfo product={product} />
      </div>
      <div className="mt-16">
        <ProductReviews reviews={product.reviews} />
      </div>
      <div className="mt-16">
        <RelatedProducts category={product.category} currentProductId={product.id} />
      </div>
    </div>
  )
} 