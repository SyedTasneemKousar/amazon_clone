# Troubleshooting Guide

## ✅ Current Status
- ✅ Build: Successful (no compilation errors)
- ✅ Frontend Server: Running on port 3000
- ✅ Backend Server: Running on port 5000
- ✅ All Components: Properly exported
- ✅ All Routes: Created and working

## Common Issues & Solutions

### Issue 1: "Cannot connect to backend"
**Solution:**
1. Check backend is running: `npm run dev:backend`
2. Verify port 5000 is accessible
3. Check `.env` file has correct `NEXT_PUBLIC_API_URL`

### Issue 2: "Database connection error"
**Solution:**
1. Verify PostgreSQL is running
2. Check `.env` DATABASE_URL is correct
3. Run: `npm run db:push`

### Issue 3: "No products showing"
**Solution:**
1. Check database is seeded: `npm run db:seed`
2. Verify backend API is working: http://localhost:5000/api/products
3. Check browser console for errors

### Issue 4: "Images not loading"
**Solution:**
1. Images use Unsplash URLs (should work)
2. Check internet connection
3. Verify `next.config.js` has image domains configured

### Issue 5: "Page not found"
**Solution:**
1. All pages are created in `app/` directory
2. Restart frontend: `npm run dev:frontend`
3. Clear browser cache

## Quick Fixes

### Restart Everything
```bash
# Stop all processes (Ctrl+C)
# Then restart:
npm run dev
```

### Reset Database
```bash
npm run db:push
npm run db:seed
```

### Clear Next.js Cache
```bash
rm -rf .next
npm run dev
```

## Verify Everything Works

1. **Backend Health**: http://localhost:5000/api/health
2. **Products API**: http://localhost:5000/api/products
3. **Frontend**: http://localhost:3000
4. **Cart**: http://localhost:3000/cart
5. **Orders**: http://localhost:3000/orders

## All Features Tested ✅

- ✅ Product listing displays
- ✅ Search works
- ✅ Category filters work
- ✅ Product detail page works
- ✅ Add to cart works
- ✅ Cart page works
- ✅ Checkout works
- ✅ Order confirmation works
- ✅ Order history works

