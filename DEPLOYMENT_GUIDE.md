# Deployment Guide & Cost Breakdown

## Understanding Deployment Architecture

Your project has **3 parts** that need to be deployed separately:

1. **Frontend (Next.js)** → Vercel/Netlify
2. **Backend (Express.js)** → Railway/Render/Railway
3. **Database (PostgreSQL)** → Railway/Render/Supabase (Free tier available!)

## Docker is ONLY for Local Development

✅ **Docker is FREE** - It's just a tool to run PostgreSQL on your computer
❌ **Docker is NOT used in production** - You'll use managed database services instead

---

## Deployment Options & Costs

### Option 1: FREE Deployment (Recommended for Assignment)

#### Frontend: Vercel (FREE)
- ✅ **Cost: $0/month**
- ✅ Unlimited deployments
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Perfect for Next.js

**Deploy:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Environment Variable:**
```
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app/api
```

#### Backend: Railway (FREE Tier)
- ✅ **Cost: $0/month** (with $5 free credit)
- ✅ 500 hours/month free
- ✅ Auto-deploy from GitHub
- ✅ Perfect for Express.js

**Deploy:**
1. Push code to GitHub
2. Go to railway.app
3. New Project → Deploy from GitHub
4. Select your repository
5. Add environment variable: `DATABASE_URL` (from database service)

**Environment Variables:**
```
DATABASE_URL=postgresql://... (from database)
PORT=5000
```

#### Database: Railway PostgreSQL (FREE)
- ✅ **Cost: $0/month** (included in Railway free tier)
- ✅ 1GB storage
- ✅ Automatic backups
- ✅ No credit card required

**Setup:**
1. In Railway project → New → Database → PostgreSQL
2. Copy the `DATABASE_URL` automatically generated
3. Use this in your backend environment variables

**OR use Supabase (Alternative - Also FREE):**
- ✅ **Cost: $0/month**
- ✅ 500MB database
- ✅ Free tier forever
- ✅ Better dashboard

---

### Option 2: Render (All-in-One FREE)

#### Frontend: Render (FREE)
- ✅ **Cost: $0/month**
- ✅ Auto-deploy from GitHub
- ✅ Free SSL

#### Backend: Render (FREE)
- ✅ **Cost: $0/month**
- ✅ 750 hours/month free
- ✅ Spins down after 15min inactivity (wakes on request)

#### Database: Render PostgreSQL (FREE)
- ✅ **Cost: $0/month**
- ✅ 90 days free trial
- ⚠️ Then $7/month (but you can use Railway/Supabase instead)

---

## Complete FREE Deployment Setup

### Step 1: Deploy Database (Railway - FREE)

1. Go to https://railway.app
2. Sign up with GitHub
3. New Project → New → Database → PostgreSQL
4. Copy the `DATABASE_URL` (looks like: `postgresql://postgres:xxx@xxx.railway.app:5432/railway`)

### Step 2: Setup Database Schema

**Option A: Using Railway CLI**
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Link to your project
railway link

# Run migrations
railway run npm run db:push
railway run npm run db:seed
```

**Option B: Using Local Connection**
```bash
# Temporarily update .env with Railway DATABASE_URL
# Then run locally:
npm run db:push
npm run db:seed
```

### Step 3: Deploy Backend (Railway - FREE)

1. Push your code to GitHub
2. In Railway → New Project → Deploy from GitHub
3. Select your repository
4. Add environment variables:
   ```
   DATABASE_URL=postgresql://... (from Step 1)
   PORT=5000
   ```
5. Railway auto-detects Node.js and deploys
6. Copy your backend URL (e.g., `https://amazon-clone-backend.railway.app`)

### Step 4: Deploy Frontend (Vercel - FREE)

1. Push your code to GitHub
2. Go to https://vercel.com
3. Sign up with GitHub
4. New Project → Import your repository
5. Framework Preset: Next.js (auto-detected)
6. Add environment variable:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app/api
   ```
7. Deploy!

---

## Cost Summary

### FREE Option (Recommended)
- ✅ Frontend (Vercel): **$0/month**
- ✅ Backend (Railway): **$0/month** (500 hours free)
- ✅ Database (Railway): **$0/month** (included)
- **Total: $0/month** 🎉

### Alternative FREE Option
- ✅ Frontend (Vercel): **$0/month**
- ✅ Backend (Render): **$0/month** (750 hours free)
- ✅ Database (Supabase): **$0/month** (500MB free)
- **Total: $0/month** 🎉

---

## Important Notes

### Docker Usage
- ✅ **Local Development**: Use Docker (FREE, runs on your computer)
- ❌ **Production**: Don't use Docker - use managed services instead

### Why Not Docker in Production?
- Docker requires a server to run (costs money)
- Managed services (Railway, Render) handle Docker for you
- Easier to manage and scale
- Free tiers available

### Railway Free Tier Limits
- 500 hours/month compute time
- $5 free credit (enough for small projects)
- Database included
- Auto-sleeps after inactivity (wakes automatically)

### Render Free Tier Limits
- 750 hours/month
- Spins down after 15min (wakes on request - slight delay)
- Database: 90 days free, then $7/month

---

## Recommended Deployment Stack (FREE)

```
Frontend:  Vercel          → $0/month ✅
Backend:   Railway         → $0/month ✅
Database:  Railway PG      → $0/month ✅
─────────────────────────────────────
Total:     $0/month        🎉
```

---

## Quick Deploy Commands

### 1. Setup Database (Railway)
- Create PostgreSQL database in Railway
- Copy DATABASE_URL

### 2. Deploy Backend
```bash
# Push to GitHub first
git add .
git commit -m "Ready for deployment"
git push

# Then deploy via Railway dashboard (or CLI)
railway up
```

### 3. Deploy Frontend
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variable
vercel env add NEXT_PUBLIC_API_URL
# Enter: https://your-backend.railway.app/api
```

---

## Production Environment Variables

### Backend (Railway)
```env
DATABASE_URL=postgresql://... (from Railway database)
PORT=5000
NODE_ENV=production
```

### Frontend (Vercel)
```env
NEXT_PUBLIC_API_URL=https://your-backend.railway.app/api
```

---

## Summary

✅ **Docker is FREE** - Only for local development
✅ **Deployment can be 100% FREE** - Using free tiers
✅ **No credit card needed** - For Railway/Vercel free tiers
✅ **Perfect for assignments** - All features work on free tiers

**You can deploy your entire project for $0/month!** 🚀


