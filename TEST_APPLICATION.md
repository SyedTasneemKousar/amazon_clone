# Application Testing Guide

## Quick Test Steps

### 1. Verify Backend is Running
Open: http://localhost:5000/api/health
Expected: `{"status":"ok","message":"Server is running"}`

### 2. Verify Frontend is Running
Open: http://localhost:3000
Expected: Product listing page with Amazon-like design

### 3. Test Core Features

#### Product Listing
- ✅ See products in grid layout
- ✅ Search bar works
- ✅ Category filters work
- ✅ Click product → goes to detail page

#### Product Detail
- ✅ Image carousel displays
- ✅ Product info visible
- ✅ Add to Cart works
- ✅ Buy Now works

#### Shopping Cart
- ✅ View cart items
- ✅ Update quantity
- ✅ Remove items
- ✅ See cart total

#### Checkout
- ✅ Fill shipping form
- ✅ See order summary
- ✅ Place order works

#### Order Confirmation
- ✅ Order ID displayed
- ✅ Order details shown

## If Something Doesn't Work

### Check Backend
```bash
# Restart backend
npm run dev:backend
```

### Check Frontend
```bash
# Restart frontend
npm run dev:frontend
```

### Check Database
```bash
# Verify connection
npm run db:push
```

### Check Environment
- Verify `.env` file exists
- Check DATABASE_URL is correct
- Ensure PostgreSQL is running

