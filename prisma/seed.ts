import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create Categories - Amazon-like categories
  const electronics = await prisma.category.upsert({
    where: { name: 'Electronics' },
    update: {},
    create: {
      name: 'Electronics',
      description: 'Electronic devices, gadgets, and accessories',
    },
  })

  const clothing = await prisma.category.upsert({
    where: { name: 'Clothing, Shoes & Jewelry' },
    update: {},
    create: {
      name: 'Clothing, Shoes & Jewelry',
      description: 'Fashion apparel, footwear, and jewelry',
    },
  })

  const books = await prisma.category.upsert({
    where: { name: 'Books' },
    update: {},
    create: {
      name: 'Books',
      description: 'Books, Kindle eBooks, magazines, and audiobooks',
    },
  })

  const home = await prisma.category.upsert({
    where: { name: 'Home & Kitchen' },
    update: {},
    create: {
      name: 'Home & Kitchen',
      description: 'Furniture, decor, kitchen appliances, and home improvement',
    },
  })

  const sports = await prisma.category.upsert({
    where: { name: 'Sports & Outdoors' },
    update: {},
    create: {
      name: 'Sports & Outdoors',
      description: 'Sports equipment, outdoor recreation, and fitness gear',
    },
  })

  const beauty = await prisma.category.upsert({
    where: { name: 'Beauty & Personal Care' },
    update: {},
    create: {
      name: 'Beauty & Personal Care',
      description: 'Skincare, makeup, fragrance, and personal care products',
    },
  })

  const toys = await prisma.category.upsert({
    where: { name: 'Toys & Games' },
    update: {},
    create: {
      name: 'Toys & Games',
      description: 'Toys, games, collectibles, and hobbies',
    },
  })

  const health = await prisma.category.upsert({
    where: { name: 'Health & Household' },
    update: {},
    create: {
      name: 'Health & Household',
      description: 'Healthcare, vitamins, household supplies, and baby care',
    },
  })

  const automotive = await prisma.category.upsert({
    where: { name: 'Automotive' },
    update: {},
    create: {
      name: 'Automotive',
      description: 'Car parts, accessories, tools, and automotive care',
    },
  })

  const grocery = await prisma.category.upsert({
    where: { name: 'Grocery & Gourmet Food' },
    update: {},
    create: {
      name: 'Grocery & Gourmet Food',
      description: 'Fresh food, snacks, beverages, and gourmet items',
    },
  })

  const pet = await prisma.category.upsert({
    where: { name: 'Pet Supplies' },
    update: {},
    create: {
      name: 'Pet Supplies',
      description: 'Pet food, toys, accessories, and healthcare products',
    },
  })

  const office = await prisma.category.upsert({
    where: { name: 'Office Products' },
    update: {},
    create: {
      name: 'Office Products',
      description: 'Office supplies, furniture, and business equipment',
    },
  })

  // Create Products - Expanded product catalog
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
    {
      name: '4K Smart TV 55"',
      description: '55-inch 4K Ultra HD Smart TV with HDR, built-in streaming apps, and voice control. Stunning picture quality and smart features.',
      price: 449.99,
      images: [
        'https://images.unsplash.com/photo-1593784991097-a495a3b7c3c7?w=500',
      ],
      categoryId: electronics.id,
      stock: 35,
      rating: 4.6,
      reviewCount: 1876,
    },
    {
      name: 'Tablet 10.9" WiFi',
      description: 'Powerful tablet with 10.9-inch display, all-day battery, and support for Apple Pencil. Perfect for work and entertainment.',
      price: 599.99,
      images: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
      ],
      categoryId: electronics.id,
      stock: 45,
      rating: 4.5,
      reviewCount: 923,
    },
    // Clothing, Shoes & Jewelry
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
    {
      name: 'Leather Jacket',
      description: 'Genuine leather jacket with zip front, multiple pockets, and classic styling. Perfect for fall and winter seasons.',
      price: 189.99,
      images: [
        'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500',
      ],
      categoryId: clothing.id,
      stock: 60,
      rating: 4.7,
      reviewCount: 876,
    },
    {
      name: 'Silver Necklace',
      description: 'Elegant sterling silver necklace with pendant. Hypoallergenic and perfect for daily wear or special occasions.',
      price: 89.99,
      images: [
        'https://images.unsplash.com/photo-1599643478518-79d5acd36c49?w=500',
      ],
      categoryId: clothing.id,
      stock: 40,
      rating: 4.8,
      reviewCount: 432,
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
    {
      name: 'Cookbook Collection',
      description: '500+ recipes from around the world. Easy-to-follow instructions with beautiful photography for every dish.',
      price: 29.99,
      images: [
        'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=500',
      ],
      categoryId: books.id,
      stock: 180,
      rating: 4.6,
      reviewCount: 789,
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
    {
      name: 'Air Purifier',
      description: 'HEPA air purifier for large rooms. Removes 99.97% of dust, pollen, and allergens. Quiet operation with night mode.',
      price: 149.99,
      images: [
        'https://images.unsplash.com/photo-1578912690403-7bf7b9960a62?w=500',
      ],
      categoryId: home.id,
      stock: 55,
      rating: 4.5,
      reviewCount: 678,
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
    {
      name: 'Camping Tent 4-Person',
      description: 'Waterproof family camping tent with easy setup. Features multiple windows, storage pockets, and weather protection.',
      price: 199.99,
      images: [
        'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500',
      ],
      categoryId: sports.id,
      stock: 30,
      rating: 4.6,
      reviewCount: 234,
    },
    // Beauty & Personal Care
    {
      name: 'Face Moisturizer',
      description: 'Daily facial moisturizer with SPF 30. Hydrating formula suitable for all skin types. Non-greasy and fast-absorbing.',
      price: 24.99,
      images: [
        'https://images.unsplash.com/photo-1570172619644-dfd23ed893c3?w=500',
      ],
      categoryId: beauty.id,
      stock: 120,
      rating: 4.4,
      reviewCount: 1567,
    },
    {
      name: 'Makeup Brush Set',
      description: 'Professional 15-piece makeup brush set with premium synthetic bristles. Includes carrying case and cleaning tool.',
      price: 39.99,
      images: [
        'https://images.unsplash.com/photo-1596462502278-27d4415e3b76?w=500',
      ],
      categoryId: beauty.id,
      stock: 85,
      rating: 4.6,
      reviewCount: 892,
    },
    // Toys & Games
    {
      name: 'Building Blocks Set',
      description: '500-piece colorful building blocks set. Compatible with major brands. Promotes creativity and fine motor skills.',
      price: 29.99,
      images: [
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500',
      ],
      categoryId: toys.id,
      stock: 100,
      rating: 4.7,
      reviewCount: 445,
    },
    {
      name: 'Board Game Collection',
      description: 'Family board game bundle with 5 classic games. Perfect for game nights and family entertainment.',
      price: 49.99,
      images: [
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500',
      ],
      categoryId: toys.id,
      stock: 70,
      rating: 4.5,
      reviewCount: 223,
    },
    // Health & Household
    {
      name: 'Vitamin C Supplement',
      description: 'High-potency Vitamin C tablets with immune support. 1000mg per serving, 120 tablets per bottle.',
      price: 14.99,
      images: [
        'https://images.unsplash.com/photo-1574171331602-95e5e3d71065?w=500',
      ],
      categoryId: health.id,
      stock: 200,
      rating: 4.3,
      reviewCount: 1876,
    },
    {
      name: 'Laundry Detergent',
      description: 'Concentrated liquid laundry detergent, 100 loads. Fresh scent with stain-fighting formula. Safe for all fabrics.',
      price: 19.99,
      images: [
        'https://images.unsplash.com/photo-1584370848010-8e32997e3d63?w=500',
      ],
      categoryId: health.id,
      stock: 150,
      rating: 4.2,
      reviewCount: 987,
    },
    // Automotive
    {
      name: 'Car Phone Mount',
      description: 'Adjustable car phone holder with dashboard and windshield mounting. Compatible with all smartphones.',
      price: 24.99,
      images: [
        'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500',
      ],
      categoryId: automotive.id,
      stock: 180,
      rating: 4.4,
      reviewCount: 654,
    },
    {
      name: 'Car Wax Kit',
      description: 'Professional car wax and polish kit. Includes applicator pads, microfiber towels, and premium carnauba wax.',
      price: 34.99,
      images: [
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500',
      ],
      categoryId: automotive.id,
      stock: 90,
      rating: 4.6,
      reviewCount: 321,
    },
    // Grocery & Gourmet Food
    {
      name: 'Organic Coffee Beans',
      description: 'Premium arabica coffee beans, medium roast. 2lb bag of organic, fair-trade coffee from Colombia.',
      price: 22.99,
      images: [
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500',
      ],
      categoryId: grocery.id,
      stock: 250,
      rating: 4.7,
      reviewCount: 2876,
    },
    {
      name: 'Dark Chocolate Collection',
      description: 'Artisan dark chocolate assortment, 12 pieces. Various cocoa percentages from 70% to 90%. Premium ingredients.',
      price: 18.99,
      images: [
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500',
      ],
      categoryId: grocery.id,
      stock: 160,
      rating: 4.8,
      reviewCount: 1234,
    },
    // Pet Supplies
    {
      name: 'Dog Food Premium',
      description: 'Premium dry dog food with real chicken. 30lb bag, formulated for adult dogs of all breeds.',
      price: 54.99,
      images: [
        'https://images.unsplash.com/photo-1583337134247-60d034485cc7?w=500',
      ],
      categoryId: pet.id,
      stock: 80,
      rating: 4.6,
      reviewCount: 1567,
    },
    {
      name: 'Cat Scratching Post',
      description: 'Multi-level cat tree with scratching posts, perches, and toys. Sturdy construction, 72 inches tall.',
      price: 79.99,
      images: [
        'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500',
      ],
      categoryId: pet.id,
      stock: 45,
      rating: 4.5,
      reviewCount: 432,
    },
    // Office Products
    {
      name: 'Ergonomic Office Chair',
      description: 'High-back ergonomic office chair with lumbar support, adjustable arms, and breathable mesh back.',
      price: 299.99,
      images: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
      ],
      categoryId: office.id,
      stock: 35,
      rating: 4.5,
      reviewCount: 678,
    },
    {
      name: 'Wireless Keyboard Mouse Combo',
      description: 'Wireless keyboard and mouse combo with long battery life. Quiet keys, comfortable typing, and sleek design.',
      price: 49.99,
      images: [
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
      ],
      categoryId: office.id,
      stock: 110,
      rating: 4.3,
      reviewCount: 890,
    }
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


