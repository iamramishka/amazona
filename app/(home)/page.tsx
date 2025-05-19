import { BannerCarousel } from '@/components/banner-carousel'
import { LatestProducts } from '@/components/latest-products'

export default function HomePage() {
  return (
    <div className="space-y-8">
      <BannerCarousel />
      <LatestProducts />
    </div>
  )
} 