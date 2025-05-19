'use client'

import * as React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'

const banners = [
  {
    id: 1,
    title: 'Summer Sale',
    description: 'Up to 50% off on selected items',
    image: '/banners/summer-sale.jpg',
    link: '/products?category=summer-sale',
  },
  {
    id: 2,
    title: 'New Arrivals',
    description: 'Check out our latest products',
    image: '/banners/new-arrivals.jpg',
    link: '/products?category=new-arrivals',
  },
  {
    id: 3,
    title: 'Special Offers',
    description: 'Limited time deals you don\'t want to miss',
    image: '/banners/special-offers.jpg',
    link: '/products?category=special-offers',
  },
]

export function BannerCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {banners.map((banner) => (
          <CarouselItem key={banner.id} className="md:basis-1/1">
            <Link href={banner.link} className="block relative h-[400px] w-full">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-black/30 rounded-lg">
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h2 className="text-3xl font-bold mb-2">{banner.title}</h2>
                  <p className="text-lg">{banner.description}</p>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  )
} 