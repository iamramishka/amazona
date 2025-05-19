'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  return (
    <div className="group relative">
      <Link href={`/products/${id}`} className="block">
        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">{name}</h3>
            <p className="mt-1 text-sm text-gray-500">{category}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${price}</p>
        </div>
      </Link>
      <Button
        variant="outline"
        size="icon"
        className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ShoppingCart className="h-4 w-4" />
        <span className="sr-only">Add to cart</span>
      </Button>
    </div>
  )
} 