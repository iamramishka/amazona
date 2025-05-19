'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCartStore } from '@/lib/store/cart'
import { ShippingForm } from '@/components/checkout/shipping-form'
import { PaymentForm } from '@/components/checkout/payment-form'
import { OrderSummary } from '@/components/checkout/order-summary'

type CheckoutStep = 'shipping' | 'payment' | 'confirmation'

export default function CheckoutPage() {
  const router = useRouter()
  const [step, setStep] = useState<CheckoutStep>('shipping')
  const [shippingData, setShippingData] = useState<any>(null)
  const { items, totalPrice, clearCart } = useCartStore()

  if (items.length === 0) {
    router.push('/cart')
    return null
  }

  const handleShippingSubmit = (data: any) => {
    setShippingData(data)
    setStep('payment')
  }

  const handlePaymentSubmit = async (data: any) => {
    try {
      // TODO: Implement payment processing with Stripe
      console.log('Payment data:', data)
      console.log('Shipping data:', shippingData)
      
      // Clear cart and show confirmation
      clearCart()
      setStep('confirmation')
    } catch (error) {
      console.error('Payment failed:', error)
    }
  }

  return (
    <div className="container py-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <div className="mt-4 flex items-center space-x-4">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                step === 'shipping'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              1
            </div>
            <div className="flex-1">
              <div className="h-0.5 w-full bg-muted" />
            </div>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                step === 'payment'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              2
            </div>
            <div className="flex-1">
              <div className="h-0.5 w-full bg-muted" />
            </div>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                step === 'confirmation'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              3
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            {step === 'shipping' && (
              <ShippingForm onSubmit={handleShippingSubmit} />
            )}
            {step === 'payment' && (
              <PaymentForm
                onSubmit={handlePaymentSubmit}
                onBack={() => setStep('shipping')}
              />
            )}
            {step === 'confirmation' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Order Confirmed!</h2>
                <p className="text-muted-foreground">
                  Thank you for your purchase. We'll send you an email with your
                  order details.
                </p>
                <Button
                  className="w-full"
                  onClick={() => router.push('/')}
                >
                  Continue Shopping
                </Button>
              </div>
            )}
          </div>
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  )
} 