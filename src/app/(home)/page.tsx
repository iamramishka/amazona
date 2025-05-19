import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { prisma } from '@/lib/prisma'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

async function getHomePageData() {
  const featuredCategories = await prisma.category.findMany({
    take: 4,
    include: {
      products: {
        take: 1,
        select: {
          images: true
        }
      }
    }
  })

  const latestProducts = await prisma.product.findMany({
    take: 8,
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      category: true
    }
  })

  return {
    featuredCategories,
    latestProducts
  }
}

export default async function HomePage() {
  const { featuredCategories, latestProducts } = await getHomePageData()

  return (
    <div className="space-y-12">
      {/* Hero Banner Carousel */}
      <section className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {[
              {
                image: '/banners/banner1.jpg',
                title: 'Summer Collection',
                description: 'Up to 50% off on selected items'
              },
              {
                image: '/banners/banner2.jpg',
                title: 'New Arrivals',
                description: 'Check out our latest fashion trends'
              },
              {
                image: '/banners/banner3.jpg',
                title: 'Special Offers',
                description: 'Limited time deals on premium brands'
              }
            ].map((banner, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[21/9] w-full overflow-hidden rounded-lg">
                  <Image
                    src={banner.image}
                    alt={banner.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                    <p className="text-xl mb-6">{banner.description}</p>
                    <Button size="lg" variant="secondary">
                      Shop Now
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </section>

      {/* Featured Categories */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((category) => (
            <Link key={category.id} href={`/category/${category.slug}`}>
              <Card className="group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    {category.products[0]?.images[0] && (
                      <Image
                        src={category.products[0].images[0]}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Products */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Latest Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestProducts.map((product) => (
            <Card key={product.id} className="group">
              <CardContent className="p-4">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                  {product.images[0] && (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{product.category.name}</p>
                  <h3 className="font-semibold truncate">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold">
                      ${product.price.toFixed(2)}
                    </p>
                    <Button size="icon" variant="secondary">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="grid gap-6 md:grid-cols-2">
        <Card className="group overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-[16/9]">
              <Image
                src="/offers/offer1.jpg"
                alt="Special Offer 1"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-6">
                <h3 className="text-2xl font-bold mb-2">Summer Sale</h3>
                <p className="mb-4">Get up to 40% off on summer essentials</p>
                <Button variant="secondary">Shop Now</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="group overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-[16/9]">
              <Image
                src="/offers/offer2.jpg"
                alt="Special Offer 2"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-6">
                <h3 className="text-2xl font-bold mb-2">New Collection</h3>
                <p className="mb-4">Discover our latest arrivals</p>
                <Button variant="secondary">Explore Now</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
} 