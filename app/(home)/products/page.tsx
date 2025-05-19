import { CategoriesSidebar } from '@/components/categories-sidebar'
import { ProductGrid } from '@/components/product-grid'

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <div className="flex gap-8">
        <CategoriesSidebar />
        <ProductGrid />
      </div>
    </div>
  )
} 