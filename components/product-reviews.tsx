'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface Review {
  id: string
  user: string
  rating: number
  comment: string
  date: string
}

interface ProductReviewsProps {
  reviews: Review[]
}

export function ProductReviews({ reviews }: ProductReviewsProps) {
  const [userRating, setUserRating] = useState(0)
  const [userComment, setUserComment] = useState('')

  const handleSubmitReview = () => {
    // TODO: Implement review submission
    console.log('Submitting review:', { rating: userRating, comment: userComment })
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <p className="text-muted-foreground">
          {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
        </p>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-medium">{review.user}</p>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'h-4 w-4',
                        i < review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-gray-200 text-gray-200'
                      )}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{review.date}</p>
            </div>
            <p className="text-muted-foreground">{review.comment}</p>
            <Separator />
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Write a Review</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setUserRating(i + 1)}
                className="focus:outline-none"
              >
                <Star
                  className={cn(
                    'h-6 w-6',
                    i < userRating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-gray-200 text-gray-200'
                  )}
                />
              </button>
            ))}
          </div>
          <Textarea
            placeholder="Write your review..."
            value={userComment}
            onChange={(e) => setUserComment(e.target.value)}
            className="min-h-[100px]"
          />
          <Button onClick={handleSubmitReview}>Submit Review</Button>
        </div>
      </div>
    </div>
  )
} 