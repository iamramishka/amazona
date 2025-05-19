import { PrismaClient } from '../src/generated/prisma'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 12)
  const admin = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: adminPassword,
      role: 'ADMIN',
    },
  })

  // Create regular user
  const userPassword = await bcrypt.hash('user123', 12)
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'user@example.com',
      password: userPassword,
      role: 'USER',
    },
  })

  // Create categories
  const tshirts = await prisma.category.create({
    data: {
      name: 'T-shirts',
      slug: 't-shirts',
      description: 'Comfortable and stylish t-shirts',
      image: '/images/categories/t-shirts.jpg',
    },
  })

  const jeans = await prisma.category.create({
    data: {
      name: 'Jeans',
      slug: 'jeans',
      description: 'Classic and modern jeans',
      image: '/images/categories/jeans.jpg',
    },
  })

  const shoes = await prisma.category.create({
    data: {
      name: 'Shoes',
      slug: 'shoes',
      description: 'Trendy and comfortable shoes',
      image: '/images/categories/shoes.jpg',
    },
  })

  const accessories = await prisma.category.create({
    data: {
      name: 'Accessories',
      slug: 'accessories',
      description: 'Fashion accessories to complete your look',
      image: '/images/categories/accessories.jpg',
    },
  })

  // Create products
  // T-shirts
  await prisma.product.create({
    data: {
      name: 'Classic White T-shirt',
      description: 'A timeless white t-shirt made from 100% cotton',
      price: 29.99,
      images: ['/images/products/t-shirts/classic-white-1.jpg', '/images/products/t-shirts/classic-white-2.jpg'],
      stock: 100,
      categoryId: tshirts.id,
    },
  })

  await prisma.product.create({
    data: {
      name: 'Graphic Print T-shirt',
      description: 'Modern graphic print t-shirt with unique design',
      price: 34.99,
      images: ['/images/products/t-shirts/graphic-print-1.jpg', '/images/products/t-shirts/graphic-print-2.jpg'],
      stock: 75,
      categoryId: tshirts.id,
    },
  })

  // Jeans
  await prisma.product.create({
    data: {
      name: 'Slim Fit Blue Jeans',
      description: 'Classic slim fit jeans in vintage blue wash',
      price: 79.99,
      images: ['/images/products/jeans/slim-blue-1.jpg', '/images/products/jeans/slim-blue-2.jpg'],
      stock: 50,
      categoryId: jeans.id,
    },
  })

  await prisma.product.create({
    data: {
      name: 'Relaxed Fit Black Jeans',
      description: 'Comfortable relaxed fit jeans in black',
      price: 69.99,
      images: ['/images/products/jeans/relaxed-black-1.jpg', '/images/products/jeans/relaxed-black-2.jpg'],
      stock: 60,
      categoryId: jeans.id,
    },
  })

  // Shoes
  await prisma.product.create({
    data: {
      name: 'Classic Sneakers',
      description: 'Versatile white sneakers for everyday wear',
      price: 89.99,
      images: ['/images/products/shoes/classic-sneakers-1.jpg', '/images/products/shoes/classic-sneakers-2.jpg'],
      stock: 40,
      categoryId: shoes.id,
    },
  })

  await prisma.product.create({
    data: {
      name: 'Running Shoes',
      description: 'High-performance running shoes with cushioning',
      price: 129.99,
      images: ['/images/products/shoes/running-shoes-1.jpg', '/images/products/shoes/running-shoes-2.jpg'],
      stock: 30,
      categoryId: shoes.id,
    },
  })

  // Accessories
  await prisma.product.create({
    data: {
      name: 'Classic Leather Belt',
      description: 'Premium leather belt with classic buckle',
      price: 49.99,
      images: ['/images/products/accessories/leather-belt-1.jpg', '/images/products/accessories/leather-belt-2.jpg'],
      stock: 45,
      categoryId: accessories.id,
    },
  })

  await prisma.product.create({
    data: {
      name: 'Aviator Sunglasses',
      description: 'Timeless aviator sunglasses with UV protection',
      price: 89.99,
      images: ['/images/products/accessories/aviator-sunglasses-1.jpg', '/images/products/accessories/aviator-sunglasses-2.jpg'],
      stock: 35,
      categoryId: accessories.id,
    },
  })

  console.log('Seed data created successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 