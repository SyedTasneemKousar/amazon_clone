# Quick Fix - If Products Not Showing

## Issue: "Loading products..." stuck

### Solution 1: Check Backend is Running
```bash
# In a new terminal, start backend:
npm run dev:backend
```

### Solution 2: Check Database is Seeded
```bash
# Make sure products are in database:
npm run db:seed
```

### Solution 3: Verify Backend API
Open browser: http://localhost:5000/api/products
Should see JSON array of products

### Solution 4: Check Browser Console
1. Open browser (F12)
2. Go to Console tab
3. Look for errors
4. Check Network tab for failed API calls

### Solution 5: Restart Everything
```bash
# Stop all (Ctrl+C)
# Then:
npm run dev
```

## Expected Behavior

1. **Backend running** → http://localhost:5000/api/health returns OK
2. **Products API** → http://localhost:5000/api/products returns products
3. **Frontend** → http://localhost:3000 shows products

## If Still Not Working

Check `.env` file has:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/amazon_clone?schema=public"
NEXT_PUBLIC_API_URL="http://localhost:5000/api"
```

