# Amazon Clone - E-Commerce Platform

A full-stack e-commerce web application that replicates Amazon's design and functionality. Built with Next.js, Express.js, PostgreSQL, and Prisma.

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Swiper** - Image carousel component

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe backend development

### Database
- **PostgreSQL** - Relational database
- **Prisma** - Modern ORM for database management

## 📋 Features

### Core Features (Implemented)
- ✅ **Product Listing Page** - Grid layout with search and category filters
- ✅ **Product Detail Page** - Image carousel, description, and buy options
- ✅ **Shopping Cart** - Add, update quantity, and remove items
- ✅ **Order Placement** - Checkout with shipping address form
- ✅ **Order Confirmation** - Display order ID and details

### Additional Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Amazon-like UI/UX design matching Amazon.in
- ✅ Real-time cart updates
- ✅ Stock management
- ✅ **Order History** - View all past orders with details
- ✅ Secondary navigation bar (Amazon-style)
- ✅ Proper image containment and handling
- ✅ Account page with order history link

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd amazon_clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/amazon_clone?schema=public"
   NEXT_PUBLIC_API_URL="http://localhost:5000/api"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma Client
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   
   # Seed the database with sample data
   npm run db:seed
   ```

5. **Start the development servers**
   ```bash
   # Start both frontend and backend concurrently
   npm run dev
   
   # Or start them separately:
   # Terminal 1 - Backend
   npm run dev:backend
   
   # Terminal 2 - Frontend
   npm run dev:frontend
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
amazon_clone/
├── app/                    # Next.js app directory
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout page
│   ├── order-confirmation/ # Order confirmation page
│   ├── product/           # Product detail pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── backend/               # Express.js backend
│   └── server.ts          # Main server file
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx         # Footer component
│   ├── ProductCard.tsx   # Product card component
│   ├── ProductListing.tsx # Product listing page
│   ├── ProductDetail.tsx # Product detail page
│   ├── ShoppingCart.tsx  # Shopping cart page
│   ├── Checkout.tsx      # Checkout form
│   └── OrderConfirmation.tsx # Order confirmation
├── lib/                   # Utility libraries
│   ├── prisma.ts         # Prisma client instance
│   └── api.ts            # API client functions
├── prisma/                # Database schema
│   ├── schema.prisma     # Prisma schema
│   └── seed.ts           # Database seed script
└── public/               # Static assets
```

## 🗄️ Database Schema

### Models
- **Category** - Product categories
- **Product** - Product information
- **CartItem** - Shopping cart items
- **Order** - Customer orders
- **OrderItem** - Order line items

### Relationships
- Product belongs to Category
- CartItem belongs to Product
- Order has many OrderItems
- OrderItem belongs to Product and Order

## 🔌 API Endpoints

### Products
- `GET /api/products` - Get all products (with optional category and search filters)
- `GET /api/products/:id` - Get product by ID
- `GET /api/categories` - Get all categories

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item quantity
- `DELETE /api/cart/:id` - Remove item from cart

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user's orders
- `GET /api/orders/:id` - Get order by ID

## 🎨 Design Approach

The application closely follows Amazon's design patterns:
- **Color Scheme**: Amazon orange (#FF9900), Amazon blue (#232F3E)
- **Layout**: Header with search bar, product grid, and footer
- **Product Cards**: Image, name, price, rating, and Add to Cart button
- **Product Detail**: Image carousel, description, quantity selector, and buy options
- **Cart**: Item list with quantity controls and order summary
- **Checkout**: Shipping form with order review

## 🚢 Deployment

### Frontend (Vercel/Netlify)
1. Build the Next.js app: `npm run build`
2. Deploy to Vercel or Netlify
3. Set environment variable: `NEXT_PUBLIC_API_URL` to your backend URL

### Backend (Railway/Render)
1. Deploy Express.js server to Railway or Render
2. Set environment variable: `DATABASE_URL` to your PostgreSQL connection string
3. Run migrations: `npm run db:push`
4. Seed database: `npm run db:seed`

## 📝 Assumptions

1. **No Authentication**: The application uses a default user ID ("default-user") for all operations
2. **Single User**: All cart and order operations are tied to the default user
3. **Free Shipping**: All orders have free shipping
4. **Stock Management**: Products have stock limits, and orders reduce stock automatically
5. **Order Status**: Orders are created with "confirmed" status

## 🧪 Testing

To test the application:
1. Browse products on the home page
2. Use search and category filters
3. View product details
4. Add products to cart
5. Update quantities in cart
6. Proceed to checkout
7. Fill shipping information
8. Place order and view confirmation

## 📄 License

This project is created for educational purposes as part of an SDE Intern assignment.

## 👨‍💻 Author

Built as a full-stack e-commerce assignment demonstrating:
- Modern web development practices
- Clean code architecture
- Database design
- API development
- UI/UX implementation


