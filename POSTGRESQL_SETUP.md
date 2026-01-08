# PostgreSQL Setup Guide

## Where is the .env file?

The `.env` file should be in the **root directory** of your project:
```
E:\amazon_clone\.env
```

✅ I've created it for you! You just need to update the DATABASE_URL with your PostgreSQL credentials.

## How to Run PostgreSQL in Background

### Option 1: PostgreSQL as Windows Service (Recommended)

If you installed PostgreSQL using the official installer, it runs as a Windows service automatically.

**Check if it's running:**
1. Press `Win + R`, type `services.msc`, press Enter
2. Look for "postgresql" service
3. If it's running, you're good! If not, right-click → Start

**Or check via PowerShell:**
```powershell
Get-Service -Name postgresql*
```

**Start PostgreSQL service:**
```powershell
Start-Service postgresql-x64-14  # Replace 14 with your version
```

### Option 2: Using Docker (Easiest for Development)

**Install Docker Desktop** (if not installed): https://www.docker.com/products/docker-desktop

**Run PostgreSQL in background:**
```powershell
docker run -d --name postgres-amazon -e POSTGRES_PASSWORD=password -e POSTGRES_DB=amazon_clone -p 5432:5432 postgres:14
```

This will:
- Run PostgreSQL in background (`-d` flag)
- Create database named `amazon_clone`
- Set password to `password`
- Expose port 5432
- Auto-start on Docker Desktop startup

**Stop PostgreSQL:**
```powershell
docker stop postgres-amazon
```

**Start PostgreSQL:**
```powershell
docker start postgres-amazon
```

**Your .env file for Docker:**
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/amazon_clone?schema=public"
```

### Option 3: Manual Start (If installed but not as service)

**Navigate to PostgreSQL bin directory:**
```powershell
cd "C:\Program Files\PostgreSQL\14\bin"  # Adjust version number
```

**Start PostgreSQL:**
```powershell
pg_ctl -D "C:\Program Files\PostgreSQL\14\data" start
```

## Quick Setup Steps

### Step 1: Install PostgreSQL (if not installed)

**Download:** https://www.postgresql.org/download/windows/

**During installation:**
- Remember the password you set for `postgres` user
- Note the port (default is 5432)
- Keep default settings

### Step 2: Create Database

**Open pgAdmin** (comes with PostgreSQL) or use **psql**:

**Using pgAdmin:**
1. Open pgAdmin
2. Connect to server
3. Right-click "Databases" → Create → Database
4. Name: `amazon_clone`
5. Click Save

**Using psql (Command Line):**
```powershell
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE amazon_clone;

# Exit
\q
```

**Or using PowerShell:**
```powershell
$env:PGPASSWORD="yourpassword"; psql -U postgres -c "CREATE DATABASE amazon_clone;"
```

### Step 3: Update .env File

Edit the `.env` file in `E:\amazon_clone\.env`:

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/amazon_clone?schema=public"
```

Replace `YOUR_PASSWORD` with the password you set during PostgreSQL installation.

### Step 4: Test Connection

```powershell
# Test if PostgreSQL is accessible
psql -U postgres -d amazon_clone -c "SELECT version();"
```

## Verify PostgreSQL is Running

**Check if port 5432 is listening:**
```powershell
netstat -an | findstr 5432
```

**Or test connection:**
```powershell
Test-NetConnection -ComputerName localhost -Port 5432
```

## Troubleshooting

### "Connection refused" error
- PostgreSQL service not running → Start it via Services
- Wrong port → Check your PostgreSQL port in pgAdmin
- Firewall blocking → Allow PostgreSQL in Windows Firewall

### "Authentication failed" error
- Wrong password → Check your .env DATABASE_URL
- Wrong username → Default is `postgres`

### "Database does not exist" error
- Create the database first (see Step 2 above)

## Recommended: Docker Setup (Easiest)

If you want the easiest setup, use Docker:

```powershell
# One-time setup (runs in background automatically)
docker run -d --name postgres-amazon -e POSTGRES_PASSWORD=password -e POSTGRES_DB=amazon_clone -p 5432:5432 --restart unless-stopped postgres:14

# Your .env file:
DATABASE_URL="postgresql://postgres:password@localhost:5432/amazon_clone?schema=public"
```

This will:
- ✅ Run in background automatically
- ✅ Start on computer boot
- ✅ Easy to stop/start
- ✅ No complex configuration


