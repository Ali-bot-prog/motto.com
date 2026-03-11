# Kahve Ateşi ☕🔥

**Ünye'nin en iyi kahvecisi — Devlet Sahil Yolu, Ordu**

Premium specialty coffee brand website built with Next.js 15, featuring full SEO optimization and a scalable architecture designed for future e-commerce and user auth features.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Vanilla CSS + CSS Variables |
| Animations | Framer Motion |
| Linting | ESLint (Next.js + TypeScript strict rules) |
| Formatting | Prettier |
| Git Hooks | Husky + lint-staged |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # Design system — all CSS variables & component styles
│   ├── layout.tsx        # Root layout — SEO metadata + JSON-LD structured data
│   ├── page.tsx          # Homepage
│   ├── sitemap.ts        # Auto-generates sitemap.xml
│   └── robots.ts         # Auto-generates robots.txt
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── StatsBar.tsx
│   ├── Story.tsx
│   ├── Menu.tsx
│   ├── Gallery.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── constants/
│   └── brand.ts          # Single source of truth for all brand data
├── lib/
│   └── utils.ts          # Shared utility functions
└── types/
    └── index.ts          # Shared TypeScript types
```

---

## 🛠 Development

```bash
npm install      # Install dependencies
npm run dev      # Dev server → http://localhost:3000
npm run lint     # Lint code
npm run format   # Format with Prettier
npm run type-check  # TypeScript check
npm run build    # Production build
```

---

## 🔍 SEO Features

- **JSON-LD Structured Data** (`CafeOrCoffeeShop`) — local business schema
- **Meta tags** — title, description, keywords (Turkish coffee + Ünye searches)
- **Open Graph + Twitter Card** — social sharing previews
- **sitemap.xml** — auto-generated
- **robots.txt** — auto-generated
- **Security headers** — X-Frame-Options, Referrer-Policy, Permissions-Policy
- **Optimized images** — WebP/AVIF via `next/image`

---

## 📍 Business Info

| | |
|---|---|
| **Adres** | Çamurlu, Devlet Sahil Yolu No:32, 52300 Ünye / Ordu |
| **Telefon** | (0452) 333 61 11 |
| **Instagram** | [@unyemotto](https://instagram.com/unyemotto) |
| **Saatler** | Her gün 07:30 – 01:00 |

> 💡 Tüm iletişim bilgileri `src/constants/brand.ts` dosyasından yönetilir.

---

## 🗺 Roadmap

- [ ] Online sipariş sistemi (Stripe)
- [ ] Kullanıcı girişi (NextAuth.js)
- [ ] Admin paneli
- [ ] Blog sayfası
- [ ] Çoklu dil desteği (TR/EN)
