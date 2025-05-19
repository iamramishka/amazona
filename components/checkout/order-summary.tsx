'use client'

import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { useCartStore } from '@/lib/store/cart'

export function OrderSummary() {
  const { items, totalPrice } = useCartStore()

  return (
    <div className="rounded-lg border bg-card p-6">
      <h2 className="text-lg font-semibold">Order Summary</h2>
      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-4">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
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
                <p className="text-sm font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Quantity: {item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-4" />

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Subtotal</span>
          <span className="text-sm font-medium">${totalPrice().toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Shipping</span>
          <span className="text-sm font-medium">Free</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">Tax</span>
          <span className="text-sm font-medium">
            ${(totalPrice() * 0.1).toFixed(2)}
          </span>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between">
          <span className="text-base font-medium">Total</span>
          <span className="text-base font-medium">
            ${(totalPrice() * 1.1).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
} 