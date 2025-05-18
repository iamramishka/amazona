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
      description: 'Comfortable and stylish t-shirts',
      image: '/images/c-tshirts.jpg',
    },
  })

  const jeans = await prisma.category.create({
    data: {
      name: 'Jeans',
      description: 'Classic and modern jeans',
      image: '/images/c-jeans.jpg',
    },
  })

  const shoes = await prisma.category.create({
    data: {
      name: 'Shoes',
      description: 'Trendy and comfortable shoes',
      image: '/images/c-shoes.jpg',
    },
  })

  // Create products
  // T-shirts
  await prisma.product.create({
    data: {
      name: 'Classic White T-shirt',
      description: 'A timeless white t-shirt made from 100% cotton',
      price: 29.99,
      images: ['/images/p11-1.jpg', '/images/p11-2.jpg'],
      stock: 100,
      categoryId: tshirts.id,
    },
  })

  await prisma.product.create({
    data: {
      name: 'Graphic Print T-shirt',
      description: 'Modern graphic print t-shirt with unique design',
      price: 34.99,
      images: ['/images/p12-1.jpg', '/images/p12-2.jpg'],
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
      images: ['/images/p21-1.jpg', '/images/p21-2.jpg'],
      stock: 50,
      categoryId: jeans.id,
    },
  })

  await prisma.product.create({
    data: {
      name: 'Relaxed Fit Black Jeans',
      description: 'Comfortable relaxed fit jeans in black',
      price: 69.99,
      images: ['/images/p22-1.jpg', '/images/p22-2.jpg'],
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
      images: ['/images/p31-1.jpg', '/images/p31-2.jpg'],
      stock: 40,
      categoryId: shoes.id,
    },
  })

  await prisma.product.create({
    data: {
      name: 'Running Shoes',
      description: 'High-performance running shoes with cushioning',
      price: 129.99,
      images: ['/images/p32-1.jpg', '/images/p32-2.jpg'],
      stock: 30,
      categoryId: shoes.id,
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