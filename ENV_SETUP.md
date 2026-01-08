# Environment Variables Setup

## Required Environment Variables

You need to create a `.env` file in the root directory with the following:

### 1. Database Connection (REQUIRED)
```env
DATABASE_URL="postgresql://username:password@localhost:5432/amazon_clone?schema=public"
```

**Replace:**
- `username` - Your PostgreSQL username (usually `postgres`)
- `password` - Your PostgreSQL password
- `localhost:5432` - Your database host and port (default is localhost:5432)
- `amazon_clone` - Database name (you can change this)

**Example:**
```env
DATABASE_URL="postgresql://postgres:mypassword@localhost:5432/amazon_clone?schema=public"
```

### 2. Frontend API URL (OPTIONAL - has default)
```env
NEXT_PUBLIC_API_URL="http://localhost:5000/api"
```

**Note:** This defaults to `http://localhost:5000/api` if not set, so you only need to change it if:
- Your backend runs on a different port
- You're deploying to production (set to your backend URL)

### 3. Backend Port (OPTIONAL - has default)
```env
PORT=5000
```

**Note:** Defaults to 5000 if not set.

## Complete .env File Example

```env
# Database Connection
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/amazon_clone?schema=public"

# Frontend API URL (optional - defaults to http://localhost:5000/api)
NEXT_PUBLIC_API_URL="http://localhost:5000/api"

# Backend Port (optional - defaults to 5000)
PORT=5000
```

## No External API Keys Needed!

This project does NOT require:
- ❌ Payment gateway API keys (Stripe, PayPal)
- ❌ Email service API keys (SendGrid, Mailgun)
- ❌ Image hosting API keys (Cloudinary, AWS S3)
- ❌ Authentication service keys (Auth0, Firebase)
- ❌ Any other external API keys

Everything runs locally with your own Express.js backend!

## Quick Setup Steps

1. **Install PostgreSQL** (if not installed)
   - Download: https://www.postgresql.org/download/
   - Or use Docker: `docker run --name postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=amazon_clone -p 5432:5432 -d postgres`

2. **Create the database**
   ```sql
   CREATE DATABASE amazon_clone;
   ```

3. **Create `.env` file** in project root with your DATABASE_URL

4. **Run setup commands**
   ```bash
   npm install
   npm run db:generate
   npm run db:push
   npm run db:seed
   ```

5. **Start the project**
   ```bash
   npm run dev
   ```

That's it! No external APIs needed.


