# CBODY - Professional Outcall Massage Bangkok

A modern, SEO-optimized single-page website for CBODY's outcall massage service in Bangkok. Built with Next.js, shadcn/ui, and Tailwind CSS.

## 🚀 Features

- **Single Page Application**: Optimized for SEO and performance
- **Responsive Design**: Mobile-first approach with smooth animations
- **Professional UI**: Clean, modern design with CBODY brand colors
- **SEO Optimized**: Meta tags, structured data, sitemap generation
- **Static Export**: Ready for deployment to any static hosting
- **Performance**: Optimized for Lighthouse scores ≥90

## 🎨 Brand Colors

- **Primary**: #46C5A7 (CBODY Green)
- **Accent**: #C6A667 (Gold)
- **Text**: #0A0A0A
- **Background**: #FFFFFF

## 📁 Project Structure

```
cbodyspa/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx           # Main homepage with all sections
│   └── globals.css        # Global styles with CBODY theme
├── components/
│   ├── header.tsx         # Navigation header component
│   ├── hero.tsx          # Hero section with video background
│   ├── footer.tsx        # Footer component
│   └── ui/               # shadcn/ui components
├── public/               # Static assets (videos, images)
└── specs/               # Project specifications
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Generate sitemap (runs automatically after build)
npm run postbuild
```

## 📱 Required Assets

Before deploying, add these files to `/public`:

1. **hero-video.mp4** (< 2MB) - Hero section background video
2. **hero-video.webm** (< 2MB) - WebM format fallback
3. **hero-poster.jpg** (< 200KB) - Video poster image
4. **og-image.jpg** (1200x630px) - Social media sharing image
5. **logo.png** - CBODY logo for structured data

See `/public/README-assets.md` for detailed specifications.

## 🔧 Key Sections

1. **Header**: Fixed navigation with smooth scroll anchors
2. **Hero**: Video background with main CTA
3. **Why Choose CBODY**: 4 advantage cards
4. **About**: Company introduction
5. **Therapists**: Staff showcase with booking CTAs
6. **Services**: Massage types with pricing
7. **FAQ**: Accordion with common questions
8. **Reviews**: Customer testimonials
9. **How to Book**: 3-step process
10. **Contact**: Multiple communication channels
11. **Footer**: Copyright and legal information

## 📈 SEO Features

- Optimized meta tags for "outcall massage bangkok"
- Structured data (Organization schema)
- Automatic sitemap generation
- Open Graph and Twitter Card support
- Semantic HTML structure
- 1000-1200 word content optimized for search

## 🚀 Deployment

The site is configured for static export. Deploy the `/out` folder to any static hosting service:

```bash
npm run build
# Deploy the /out folder
```

## 📞 Contact Integration

The website includes integration points for:
- WhatsApp: `https://wa.me/66123456789`
- Telegram: `https://t.me/cbodyspa`
- Line: `https://line.me/ti/p/cbodyspa`
- Email: `info@cbodyspa.com`

Update these URLs in the components to match your actual contact information.

## 🎯 Performance Goals

- Lighthouse Performance Score: ≥90
- Lighthouse SEO Score: ≥100
- Video file size: <2MB
- First Contentful Paint: <2s
- Mobile-optimized loading

---

Built with ❤️ using Next.js, shadcn/ui, and Tailwind CSS
