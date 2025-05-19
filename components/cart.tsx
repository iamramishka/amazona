'use client'

import Image from 'next/image'
import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { useCartStore } from '@/lib/store/cart'
import { useRouter } from 'next/navigation'

export function Cart() {
  const router = useRouter()
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="flex h-[400px] flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <p className="text-muted-foreground">
          Add some items to your cart to see them here
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-4">
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col">
              <div className="flex justify-between">
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-sm font-medium">${item.price}</p>
              </div>
              <div className="mt-1 flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <label htmlFor={`quantity-${item.id}`} className="sr-only">
                    Quantity
                  </label>
                  <Input
                    id={`quantity-${item.id}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-20"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-base font-medium">Total</span>
          <span className="text-base font-medium">${totalPrice().toFixed(2)}</span>
        </div>
        <Button
          className="w-full"
          onClick={() => router.push('/checkout')}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  )
} 