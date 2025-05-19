'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/lib/store/cart'

interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  rating: number
  images: string[]
}

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      },
      quantity
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="mt-2 flex items-center space-x-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'h-4 w-4',
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200'
                )}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.rating} rating)
          </span>
        </div>
      </div>

      <div className="text-2xl font-bold">${product.price}</div>

      <p className="text-muted-foreground">{product.description}</p>

      <Separator />

      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <label htmlFor="quantity" className="text-sm font-medium">
            Quantity
          </label>
          <Input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-20"
          />
        </div>

        <Button onClick={handleAddToCart} className="w-full">
          Add to Cart
        </Button>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Category</h3>
        <p className="text-sm text-muted-foreground">{product.category}</p>
      </div>
    </div>
  )
} 