# Strapi Backend Setup Guide

## 🚀 Quick Start

### Local Development

```bash
# Start Strapi with Docker Compose
docker-compose up strapi postgres

# Or install Strapi locally
npx create-strapi-app@latest backend --quickstart
cd backend
npm run develop
```

Strapi admin panel: `http://localhost:1337/admin`

---

## 📋 Content Types Configuration

### 1. Team Members (Ekip Üyeleri)

**Collection Type Name:** `team-member`

#### Fields:

| Field Name | Type | Options |
|------------|------|---------|
| name | Text | Required, Max: 100 |
| title | Text | Required, Max: 100 (e.g., "Diş Hekimi", "Diş Hekimi Asistanı") |
| bio | Text | Required, Max: 500 |
| photo | Media (Single) | Required, Images only |
| email | Email | Optional |
| linkedin | Text | Optional (LinkedIn profile URL) |
| order | Number | Required, Default: 0 (for sorting) |
| isActive | Boolean | Required, Default: true |

#### Settings:
- ❌ Disable Draft & Publish
- API ID: `team-members`

#### Permissions (Public):
- `find` ✅
- `findOne` ✅
- `count` ✅

#### Example Data:

```json
{
  "name": "Dt. Emrecan Eren",
  "title": "Diş Hekimi - Klinik Sahibi",
  "bio": "Mikroskopik diş tedavisi ve estetik diş hekimliği uzmanı. TDB üyesi. 10+ yıl deneyim.",
  "email": "emrecan@emrecaneren.com",
  "linkedin": "https://linkedin.com/in/emrecaneren",
  "order": 1,
  "isActive": true
}
```

---

### 2. Blog Posts

**Collection Type Name:** `blog-post`

#### Fields:

| Field Name | Type | Options |
|------------|------|---------|
| title | Text | Required, Max: 200 |
| slug | UID | Required, Target: title |
| excerpt | Text | Required, Max: 300 |
| content | Rich Text (Markdown) | Required |
| featured_image | Media (Single) | Required, Images only |
| category | Text | Optional |
| meta_title | Text | Optional, Max: 60 |
| meta_description | Text | Optional, Max: 160 |
| published_at | DateTime | Optional |

#### Settings:
- ✅ Enable Draft & Publish
- ✅ Enable Internationalization (Turkish)
- API ID: `blog-posts`

#### Permissions (Public):
- `find` ✅
- `findOne` ✅
- `count` ✅

---

### 3. Appointment Requests

**Collection Type Name:** `appointment-request`

#### Fields:

| Field Name | Type | Options |
|------------|------|---------|
| name | Text | Required, Max: 100 |
| phone | Text | Required, Max: 20 |
| message | Text | Optional, Max: 500 |
| status | Enumeration | pending, contacted, completed |
| notes | Text | Optional (Admin only) |

#### Settings:
- ❌ Disable Draft & Publish
- API ID: `appointment-requests`

#### Permissions:
- Public: `create` ✅
- Authenticated: `find`, `findOne`, `update` ✅

#### Lifecycle Hooks (Optional):

Create `api/appointment-request/content-types/appointment-request/lifecycles.js`:

```javascript
module.exports = {
  async afterCreate(event) {
    const { result } = event;
    
    // Send email notification
    await strapi.plugins['email'].services.email.send({
      to: 'info@emrecaneren.com',
      subject: 'Yeni Randevu Talebi',
      text: `
        İsim: ${result.name}
        Telefon: ${result.phone}
        Mesaj: ${result.message || 'Yok'}
      `,
    });
  },
};
```

---

### 4. Job Applications

**Collection Type Name:** `job-application`

#### Fields:

| Field Name | Type | Options |
|------------|------|---------|
| name | Text | Required, Max: 100 |
| email | Email | Required |
| phone | Text | Required, Max: 20 |
| position | Enumeration | Diş Hekimi Asistanı, Ağız ve Diş Sağlığı Teknisyeni, Resepsiyon Görevlisi, Diğer |
| cv | Media (Single) | Required, PDF/DOC only |
| status | Enumeration | new, reviewing, interviewed, rejected, hired |
| notes | Text | Optional (Admin only) |

#### Settings:
- ❌ Disable Draft & Publish
- API ID: `job-applications`

#### Permissions:
- Public: `create` ✅
- Authenticated: `find`, `findOne`, `update` ✅

---

## 🔐 API Token Setup

### Create API Token for Next.js

1. Go to **Settings → API Tokens**
2. Click **Create new API Token**
3. Name: `nextjs-frontend`
4. Token type: `Read-only` (or Custom with specific permissions)
5. Token duration: `Unlimited`
6. Copy token and add to `.env`:
   ```
   STRAPI_API_TOKEN=your_token_here
   ```

---

## 🌐 CORS Configuration

Edit `config/middlewares.js`:

```javascript
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://www.emrecaneren.com'],
          'media-src': ["'self'", 'data:', 'blob:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000',
        'https://www.emrecaneren.com',
        'https://emrecaneren.com',
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

---

## 📧 Email Configuration (Optional)

### Using SendGrid

1. Install plugin:
```bash
npm install @strapi/provider-email-sendgrid
```

2. Edit `config/plugins.js`:
```javascript
module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'info@emrecaneren.com',
        defaultReplyTo: 'info@emrecaneren.com',
      },
    },
  },
});
```

3. Add to `.env`:
```
SENDGRID_API_KEY=your_sendgrid_api_key
```

---

## 🔄 API Endpoints

### Team Members

```bash
# Get all active team members (sorted by order)
GET /api/team-members?populate=photo&filters[isActive][$eq]=true&sort=order:asc

# Get single team member
GET /api/team-members/:id?populate=photo
```

### Blog Posts

```bash
# Get all published posts
GET /api/blog-posts?populate=*&sort=published_at:desc

# Get single post by slug
GET /api/blog-posts?filters[slug][$eq]=implant-tedavisi-hakkinda&populate=*

# Get posts by category
GET /api/blog-posts?filters[category][$eq]=implant&populate=*
```

### Appointment Requests

```bash
# Create appointment request
POST /api/appointment-requests
Content-Type: application/json

{
  "data": {
    "name": "Ahmet Yılmaz",
    "phone": "+90 555 123 4567",
    "message": "İmplant tedavisi hakkında bilgi almak istiyorum"
  }
}
```

### Job Applications

```bash
# Create job application (with file upload)
POST /api/job-applications
Content-Type: multipart/form-data

data: {
  "name": "Ayşe Demir",
  "email": "ayse@example.com",
  "phone": "+90 555 987 6543",
  "position": "Diş Hekimi Asistanı"
}
files.cv: [file]
```

---

## 🎨 Admin Panel Customization

### Custom Logo

1. Add logo to `public/uploads/`
2. Go to **Settings → Global settings**
3. Upload logo

### Custom Theme

Edit `src/admin/app.js`:

```javascript
export default {
  config: {
    locales: ['tr'],
    translations: {
      tr: {
        'app.components.LeftMenu.navbrand.title': 'Dt. Emrecan Eren Admin',
      },
    },
    theme: {
      colors: {
        primary100: '#f0ece1',
        primary200: '#886e57',
        primary500: '#725649',
        primary600: '#5a4539',
        primary700: '#4a3829',
      },
    },
  },
};
```

---

## 📊 Sample Data

### Blog Post Example

```json
{
  "title": "İmplant Tedavisi Sonrası Dikkat Edilmesi Gerekenler",
  "slug": "implant-tedavisi-sonrasi-dikkat-edilmesi-gerekenler",
  "excerpt": "İmplant tedavisi sonrası iyileşme sürecinde dikkat etmeniz gereken önemli noktalar.",
  "content": "# İmplant Tedavisi Sonrası\n\nİmplant tedavisi sonrası ilk 24 saat...",
  "category": "implant",
  "meta_title": "İmplant Tedavisi Sonrası Bakım | Dt. Emrecan Eren",
  "meta_description": "İmplant tedavisi sonrası bakım ve dikkat edilmesi gerekenler hakkında uzman tavsiyeleri.",
  "published_at": "2025-01-15T10:00:00.000Z"
}
```

---

## 🔒 Security Best Practices

1. **Change Admin Path**
   - Edit `config/admin.js`:
   ```javascript
   module.exports = ({ env }) => ({
     url: '/dashboard', // Change from /admin
   });
   ```

2. **Rate Limiting**
   - Install: `npm install koa-ratelimit`
   - Configure in `config/middlewares.js`

3. **Regular Updates**
   ```bash
   npm outdated
   npm update
   ```

4. **Database Backups**
   ```bash
   # PostgreSQL backup
   docker exec ee_postgres pg_dump -U strapi strapi > backup.sql
   
   # Restore
   docker exec -i ee_postgres psql -U strapi strapi < backup.sql
   ```

---

## 🐛 Troubleshooting

### Cannot connect to database
```bash
# Check PostgreSQL is running
docker-compose ps

# Check logs
docker-compose logs postgres

# Restart services
docker-compose restart
```

### Permission errors
- Check file permissions in `public/uploads/`
- Ensure Strapi user has write access

### Build errors
```bash
# Clear cache
npm run strapi build -- --clean

# Rebuild admin
npm run build
```

---

## 📚 Resources

- [Strapi Documentation](https://docs.strapi.io)
- [Strapi REST API](https://docs.strapi.io/dev-docs/api/rest)
- [Strapi Plugins](https://market.strapi.io)
