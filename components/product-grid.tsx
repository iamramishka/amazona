'use client'

import { useState } from 'react'
import { ProductCard } from '@/components/product-card'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

// Temporary mock data - will be replaced with real data from the database
const products = Array.from({ length: 24 }, (_, i) => ({
  id: String(i + 1),
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 900) + 100,
  image: `https://images.unsplash.com/photo-${1500000000000 + i}?w=500&h=500&fit=crop`,
  category: ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports'][
    Math.floor(Math.random() * 5)
  ],
}))

const ITEMS_PER_PAGE = 12

export function ProductGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentProducts = products.slice(startIndex, endIndex)

  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  onClick={() => setCurrentPage(page)}
                  isActive={currentPage === page}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className={
                  currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
} 