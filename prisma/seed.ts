import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create Categories
  const electronics = await prisma.category.upsert({
    where: { name: 'Electronics' },
    update: {},
    create: {
      name: 'Electronics',
      description: 'Electronic devices and accessories',
    },
  })

  const clothing = await prisma.category.upsert({
    where: { name: 'Clothing' },
    update: {},
    create: {
      name: 'Clothing',
      description: 'Fashion and apparel',
    },
  })

  const books = await prisma.category.upsert({
    where: { name: 'Books' },
    update: {},
    create: {
      name: 'Books',
      description: 'Books and literature',
    },
  })

  const home = await prisma.category.upsert({
    where: { name: 'Home & Kitchen' },
    update: {},
    create: {
      name: 'Home & Kitchen',
      description: 'Home and kitchen essentials',
    },
  })

  const sports = await prisma.category.upsert({
    where: { name: 'Sports & Outdoors' },
    update: {},
    create: {
      name: 'Sports & Outdoors',
      description: 'Sports equipment and outdoor gear',
    },
  })

  // Create Products
  const products = [
    // Electronics
    {
      name: 'Wireless Bluetooth Headphones',
      description: 'Premium noise-cancelling wireless headphones with 30-hour battery life. Features active noise cancellation, premium sound quality, and comfortable over-ear design.',
      price: 199.99,
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500',
      ],
      categoryId: electronics.id,
      stock: 50,
      rating: 4.5,
      reviewCount: 1234,
    },
    {
      name: 'Smartphone 128GB',
      description: 'Latest generation smartphone with 6.7-inch display, triple camera system, 5G connectivity, and all-day battery life.',
      price: 899.99,
      images: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
        'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=500',
      ],
      categoryId: electronics.id,
      stock: 30,
      rating: 4.7,
      reviewCount: 2567,
    },
    {
      name: 'Laptop 15.6" 512GB SSD',
      description: 'High-performance laptop with Intel Core i7 processor, 16GB RAM, 512GB SSD, and dedicated graphics card. Perfect for work and gaming.',
      price: 1299.99,
      images: [
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
        'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500',
      ],
      categoryId: electronics.id,
      stock: 25,
      rating: 4.6,
      reviewCount: 892,
    },
    {
      name: 'Smart Watch',
      description: 'Fitness tracker and smartwatch with heart rate monitor, GPS, sleep tracking, and 7-day battery life. Water-resistant design.',
      price: 249.99,
      images: [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
        'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=500',
      ],
      categoryId: electronics.id,
      stock: 75,
      rating: 4.4,
      reviewCount: 1567,
    },
    {
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with precision tracking, long battery life, and comfortable grip. Compatible with all devices.',
      price: 29.99,
      images: [
        'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
      ],
      categoryId: electronics.id,
      stock: 100,
      rating: 4.3,
      reviewCount: 2341,
    },
    // Clothing
    {
      name: 'Cotton T-Shirt',
      description: '100% organic cotton t-shirt. Soft, breathable, and comfortable. Available in multiple colors. Machine washable.',
      price: 19.99,
      images: [
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
        'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500',
      ],
      categoryId: clothing.id,
      stock: 200,
      rating: 4.2,
      reviewCount: 567,
    },
    {
      name: 'Denim Jeans',
      description: 'Classic fit denim jeans. Durable, comfortable, and stylish. Perfect for everyday wear. Multiple sizes available.',
      price: 49.99,
      images: [
        'https://images.unsplash.com/photo-1542272604-787c683553e7?w=500',
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500',
      ],
      categoryId: clothing.id,
      stock: 150,
      rating: 4.5,
      reviewCount: 1234,
    },
    {
      name: 'Running Shoes',
      description: 'Lightweight running shoes with cushioned sole, breathable mesh upper, and excellent traction. Perfect for jogging and workouts.',
      price: 79.99,
      images: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
        'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500',
      ],
      categoryId: clothing.id,
      stock: 80,
      rating: 4.6,
      reviewCount: 2341,
    },
    // Books
    {
      name: 'The Great Novel',
      description: 'A captivating story of adventure and discovery. Bestselling fiction novel with over 1 million copies sold worldwide.',
      price: 14.99,
      images: [
        'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500',
        'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500',
      ],
      categoryId: books.id,
      stock: 300,
      rating: 4.8,
      reviewCount: 3456,
    },
    {
      name: 'Programming Guide',
      description: 'Comprehensive guide to modern programming. Learn best practices, design patterns, and advanced techniques.',
      price: 39.99,
      images: [
        'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500',
      ],
      categoryId: books.id,
      stock: 120,
      rating: 4.7,
      reviewCount: 1234,
    },
    // Home & Kitchen
    {
      name: 'Coffee Maker',
      description: 'Programmable coffee maker with 12-cup capacity, auto-shutoff, and reusable filter. Brew perfect coffee every time.',
      price: 59.99,
      images: [
        'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500',
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500',
      ],
      categoryId: home.id,
      stock: 60,
      rating: 4.4,
      reviewCount: 987,
    },
    {
      name: 'Kitchen Knife Set',
      description: 'Professional 8-piece knife set with wooden block. High-quality stainless steel blades with ergonomic handles.',
      price: 89.99,
      images: [
        'https://images.unsplash.com/photo-1594736797933-d0cbc5c0d8e0?w=500',
      ],
      categoryId: home.id,
      stock: 45,
      rating: 4.6,
      reviewCount: 567,
    },
    {
      name: 'Bedding Set',
      description: 'Luxury cotton bedding set including sheets, pillowcases, and comforter. Soft, breathable, and machine washable.',
      price: 69.99,
      images: [
        'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=500',
      ],
      categoryId: home.id,
      stock: 90,
      rating: 4.5,
      reviewCount: 1234,
    },
    // Sports & Outdoors
    {
      name: 'Yoga Mat',
      description: 'Non-slip yoga mat with extra cushioning. Eco-friendly material, easy to clean, and comes with carrying strap.',
      price: 34.99,
      images: [
        'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
      ],
      categoryId: sports.id,
      stock: 150,
      rating: 4.3,
      reviewCount: 789,
    },
    {
      name: 'Dumbbell Set',
      description: 'Adjustable dumbbell set with weights from 5-50 lbs. Perfect for home workouts. Durable construction with comfortable grips.',
      price: 149.99,
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
      ],
      categoryId: sports.id,
      stock: 40,
      rating: 4.7,
      reviewCount: 456,
    },
  ]

  for (const product of products) {
    // Check if product exists, if not create it
    const existing = await prisma.product.findFirst({
      where: { name: product.name },
    })
    
    if (!existing) {
      await prisma.product.create({
        data: product,
      })
    }
  }

  console.log('Database seeded successfully!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })


