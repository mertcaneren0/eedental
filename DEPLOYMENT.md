# Deployment Guide - Dt. Emrecan Eren Clinic

## 🚀 Deployment Options

### Option 1: Docker Compose (Recommended for VPS)

#### Prerequisites
- Docker and Docker Compose installed
- Domain name configured
- SSL certificate (Let's Encrypt recommended)

#### Steps

1. **Clone repository and navigate to project**
```bash
cd /path/to/ee_web
```

2. **Create environment file**
```bash
cp .env.example .env
nano .env
```

Edit the following variables:
```env
NEXT_PUBLIC_SITE_URL=https://www.emrecaneren.com
POSTGRES_PASSWORD=your_strong_password_here
JWT_SECRET=$(openssl rand -base64 32)
ADMIN_JWT_SECRET=$(openssl rand -base64 32)
APP_KEYS=$(openssl rand -base64 32)
API_TOKEN_SALT=$(openssl rand -base64 32)
NODE_ENV=production
```

3. **Start services**
```bash
docker-compose up -d
```

4. **Check status**
```bash
docker-compose ps
docker-compose logs -f
```

Services will be available at:
- Next.js Frontend: `http://localhost:3000`
- Strapi Admin: `http://localhost:1337/admin`
- PostgreSQL: `localhost:5432`

5. **Setup Strapi**
- Navigate to `http://your-domain:1337/admin`
- Create admin account
- Create Content Types (see below)

---

### Option 2: CapRover Deployment

#### Prerequisites
- CapRover installed on your server
- Domain configured in CapRover

#### Frontend (Next.js)

1. **Create app in CapRover**
```bash
caprover deploy
```

2. **Configure environment variables in CapRover dashboard**
```
NEXT_PUBLIC_SITE_URL=https://www.emrecaneren.com
NEXT_PUBLIC_STRAPI_URL=https://strapi.emrecaneren.com
STRAPI_API_TOKEN=your_token_here
```

3. **Enable HTTPS and configure domain**

#### Backend (Strapi)

1. **Create PostgreSQL app**
- Name: `ee-postgres`
- Image: `postgres:14-alpine`
- Environment variables:
  - `POSTGRES_DB=strapi`
  - `POSTGRES_USER=strapi`
  - `POSTGRES_PASSWORD=your_password`

2. **Create Strapi app**
- Name: `ee-strapi`
- Image: `strapi/strapi:latest`
- Environment variables:
  - `DATABASE_CLIENT=postgres`
  - `DATABASE_HOST=srv-captain--ee-postgres`
  - `DATABASE_PORT=5432`
  - `DATABASE_NAME=strapi`
  - `DATABASE_USERNAME=strapi`
  - `DATABASE_PASSWORD=your_password`
  - `JWT_SECRET=random_string`
  - `ADMIN_JWT_SECRET=random_string`
  - `APP_KEYS=random_string`
  - `API_TOKEN_SALT=random_string`

---

### Option 3: Vercel (Frontend Only)

#### Prerequisites
- Vercel account
- Separate Strapi hosting (Railway, Heroku, or VPS)

#### Steps

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. **Import to Vercel**
- Go to vercel.com
- Import repository
- Configure environment variables:
  - `NEXT_PUBLIC_SITE_URL`
  - `NEXT_PUBLIC_STRAPI_URL`
  - `STRAPI_API_TOKEN`

3. **Deploy**
- Vercel will automatically build and deploy

---

## 📊 Strapi Content Types Setup

After deploying Strapi, create these Content Types:

### 1. Blog Posts (`blog_posts`)

**Fields:**
- `title` (Text, Required)
- `slug` (UID, Required, Target: title)
- `excerpt` (Text, Required)
- `content` (Rich Text, Required)
- `featured_image` (Media, Single, Required)
- `category` (Text)
- `published_at` (DateTime)
- `author` (Text, Default: "Dt. Emrecan Eren")

**Settings:**
- Enable Draft & Publish
- Enable Internationalization (if needed)

### 2. Appointment Requests (`appointment_requests`)

**Fields:**
- `name` (Text, Required)
- `phone` (Text, Required)
- `message` (Text)
- `status` (Enumeration: pending, contacted, completed)
- `created_at` (DateTime, Auto)

**Settings:**
- Disable Draft & Publish
- Enable email notifications (optional)

### 3. Job Applications (`job_applications`)

**Fields:**
- `name` (Text, Required)
- `email` (Email, Required)
- `phone` (Text, Required)
- `position` (Enumeration: Diş Hekimi Asistanı, Ağız ve Diş Sağlığı Teknisyeni, Resepsiyon Görevlisi, Diğer)
- `cv` (Media, Single, Required)
- `status` (Enumeration: new, reviewing, interviewed, rejected, hired)
- `created_at` (DateTime, Auto)

**Settings:**
- Disable Draft & Publish

---

## 🔐 Security Checklist

- [ ] Change all default passwords
- [ ] Generate strong random secrets for Strapi
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS in Strapi
- [ ] Set up firewall rules
- [ ] Enable rate limiting
- [ ] Regular backups of PostgreSQL
- [ ] Keep dependencies updated

---

## 🔄 CI/CD Pipeline (Optional)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /path/to/ee_web
            git pull
            docker-compose down
            docker-compose up -d --build
```

---

## 📈 Post-Deployment Tasks

1. **Google Search Console**
   - Add property
   - Submit sitemap: `https://www.emrecaneren.com/sitemap.xml`
   - Verify ownership

2. **Google Analytics**
   - Create property
   - Add tracking code to `app/layout.tsx`

3. **Google My Business**
   - Claim business listing
   - Add NAP (Name, Address, Phone) - must match website
   - Add photos and business hours

4. **SSL Certificate**
   - Install Let's Encrypt certificate
   - Configure auto-renewal
   - Test with SSL Labs

5. **Performance Monitoring**
   - Set up Vercel Analytics (if using Vercel)
   - Configure error tracking (Sentry)
   - Monitor Core Web Vitals

6. **Backup Strategy**
   - Daily PostgreSQL backups
   - Weekly full system backups
   - Test restore procedures

---

## 🐛 Troubleshooting

### Frontend not connecting to Strapi
- Check `NEXT_PUBLIC_STRAPI_URL` environment variable
- Verify Strapi is running: `docker-compose ps`
- Check CORS settings in Strapi

### Database connection errors
- Verify PostgreSQL is running
- Check database credentials
- Ensure network connectivity between containers

### Build failures
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version compatibility

---

## 📞 Support

For deployment issues, contact the development team or refer to:
- Next.js Documentation: https://nextjs.org/docs
- Strapi Documentation: https://docs.strapi.io
- Docker Documentation: https://docs.docker.com
