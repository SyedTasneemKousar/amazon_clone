# Setup Guide - Amazon Clone

## Quick Start

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up PostgreSQL Database

1. **Install PostgreSQL** (if not already installed)
   - Download from: https://www.postgresql.org/download/
   - Or use Docker: `docker run --name postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=amazon_clone -p 5432:5432 -d postgres`

2. **Create Database**
   ```sql
   CREATE DATABASE amazon_clone;
   ```

### Step 3: Configure Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/amazon_clone?schema=public"
NEXT_PUBLIC_API_URL="http://localhost:5000/api"
PORT=5000
```

**Replace:**
- `username` with your PostgreSQL username (usually `postgres`)
- `password` with your PostgreSQL password
- `localhost:5432` if your PostgreSQL is on a different host/port

### Step 4: Initialize Database

```bash
# Generate Prisma Client
npm run db:generate

# Create database tables
npm run db:push

# Seed database with sample products
npm run db:seed
```

### Step 5: Start Development Servers

**Option 1: Run both servers together**
```bash
npm run dev
```

**Option 2: Run servers separately**

Terminal 1 (Backend):
```bash
npm run dev:backend
```

Terminal 2 (Frontend):
```bash
npm run dev:frontend
```

### Step 6: Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## Troubleshooting

### Database Connection Issues
- Verify PostgreSQL is running: `pg_isready` or check service status
- Check DATABASE_URL format matches: `postgresql://user:password@host:port/database`
- Ensure database exists: `psql -l` to list databases

### Port Already in Use
- Change PORT in `.env` file
- Or kill process using port: `lsof -ti:5000 | xargs kill` (Mac/Linux)

### Prisma Issues
- Run `npm run db:generate` after schema changes
- Run `npm run db:push` to sync schema with database
- Check Prisma Studio: `npx prisma studio` to view database

### CORS Issues
- Ensure backend is running on port 5000
- Check NEXT_PUBLIC_API_URL matches backend URL
- Verify CORS is enabled in backend/server.ts

## Production Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Import project in Vercel
3. Set environment variable: `NEXT_PUBLIC_API_URL` to your backend URL
4. Deploy

### Backend (Railway/Render)
1. Push code to GitHub
2. Create new service
3. Set environment variables:
   - `DATABASE_URL` - Your PostgreSQL connection string
   - `PORT` - Port number (usually auto-assigned)
4. Run build commands:
   ```bash
   npm install
   npm run db:generate
   npm run db:push
   npm run db:seed
   ```
5. Start command: `npm run start:backend`

## Database Management

### View Database
```bash
npx prisma studio
```

### Reset Database
```bash
npx prisma migrate reset
npm run db:seed
```

### Create Migration
```bash
npx prisma migrate dev --name migration_name
```


