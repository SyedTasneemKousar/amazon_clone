# Quick Start Guide

## Step 1: Create .env File

**Location:** `E:\amazon_clone\.env` (root directory of your project)

**Create the file manually:**
1. Open your project folder: `E:\amazon_clone`
2. Create a new file named `.env` (no extension)
3. Copy and paste this content:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/amazon_clone?schema=public"
NEXT_PUBLIC_API_URL="http://localhost:5000/api"
PORT=5000
```

**Important:** Replace `password` with your actual PostgreSQL password!

## Step 2: Run PostgreSQL in Background

### Easiest Method: Docker (Recommended)

**If you have Docker Desktop installed:**

```powershell
docker run -d --name postgres-amazon -e POSTGRES_PASSWORD=password -e POSTGRES_DB=amazon_clone -p 5432:5432 --restart unless-stopped postgres:14
```

This runs PostgreSQL in the background automatically!

**If you DON'T have Docker:**

### Method 2: Windows Service (If PostgreSQL is installed)

1. Press `Win + R`, type `services.msc`, press Enter
2. Find "postgresql" service
3. Right-click → Start (if not running)
4. Right-click → Properties → Set "Startup type" to "Automatic" (runs on boot)

### Method 3: Check if PostgreSQL is Already Running

```powershell
# Check if PostgreSQL service is running
Get-Service -Name postgresql*

# If not running, start it:
Start-Service postgresql-x64-14  # Replace 14 with your version
```

## Step 3: Create Database

**Using PowerShell:**
```powershell
# Set your PostgreSQL password
$env:PGPASSWORD="yourpassword"

# Create database
psql -U postgres -c "CREATE DATABASE amazon_clone;"
```

**Or using pgAdmin (GUI):**
1. Open pgAdmin
2. Connect to PostgreSQL server
3. Right-click "Databases" → Create → Database
4. Name: `amazon_clone`
5. Click Save

## Step 4: Install Dependencies & Setup

```powershell
# Install npm packages
npm install

# Generate Prisma client
npm run db:generate

# Create database tables
npm run db:push

# Add sample products
npm run db:seed
```

## Step 5: Run the Project

```powershell
# Start both frontend and backend
npm run dev
```

This will start:
- Backend server on: http://localhost:5000
- Frontend app on: http://localhost:3000

## Verify Everything Works

1. **Check PostgreSQL is running:**
   ```powershell
   Test-NetConnection -ComputerName localhost -Port 5432
   ```

2. **Check backend:**
   Open browser: http://localhost:5000/api/health
   Should see: `{"status":"ok","message":"Server is running"}`

3. **Check frontend:**
   Open browser: http://localhost:3000
   Should see the product listing page

## Troubleshooting

### "Cannot connect to database"
- Check PostgreSQL is running (see Step 2)
- Verify DATABASE_URL in .env file is correct
- Check password matches your PostgreSQL password

### "Port 5000 already in use"
- Change PORT in .env file to another number (e.g., 5001)
- Update NEXT_PUBLIC_API_URL to match

### "Module not found"
- Run `npm install` again
- Delete `node_modules` folder and run `npm install`

## Your .env File Location

```
E:\amazon_clone\
├── .env          ← CREATE THIS FILE HERE
├── package.json
├── app/
├── backend/
└── ...
```

The `.env` file should be in the **same folder** as `package.json`!


