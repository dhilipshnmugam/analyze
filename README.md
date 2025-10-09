# AnalyzeBiotech Website

A modern, professional biotech company website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional UI inspired by industry leaders like Autobio
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Fast Performance**: Next.js 15 with Turbopack for lightning-fast development
- **TypeScript**: Full type safety throughout the application
- **Modular Components**: Reusable, maintainable component architecture

## 🏗️ Architecture

### Key Pages
- **Home**: Hero section, company overview, featured products
- **Products**: Comprehensive product catalog with filtering and search
- **About**: Company mission, values, timeline, and leadership
- **Contact**: Multiple contact methods, office locations, contact form

### Core Components
- **Navbar**: Professional navigation with dropdown menus
- **Footer**: Comprehensive footer with links and newsletter signup
- **HeroSection**: Engaging hero with animations and stats
- **ProductsShowcase**: Featured products with interactive cards
- **AboutSection**: Company stats and values

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd analyzebiotech-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Visit [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

### Option 1: Vercel (Recommended)

1. **Connect to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Deploy with one click

2. **Automatic deployments**:
   - Every push to main branch deploys automatically
   - Preview deployments for pull requests

### Option 2: Netlify

1. **Deploy to Netlify**:
   ```bash
   npm run build
   npm run export  # If using static export
   ```

2. **Connect repository**:
   - Link your GitHub repo to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `out` (for static export)

### Option 3: GitHub Pages

1. **Enable static export** in `next.config.ts`:
   ```typescript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   ```

2. **Deploy**:
   ```bash
   npm run build
   # Upload 'out' folder to GitHub Pages
   ```

## 🎨 Customization

### Brand Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    50: '#eff6ff',
    // ... your brand colors
  }
}
```

### Content Updates
- **Company Info**: Update in components and layout files
- **Products**: Modify product data in `/src/data/products.ts`
- **Contact Info**: Update office locations and contact details
- **Images**: Replace placeholder images with actual product photos

### Styling
- **Components**: Styled with Tailwind CSS classes
- **Animations**: Customize Framer Motion animations
- **Responsive**: Built mobile-first, customize breakpoints as needed

## 📱 Mobile Optimization

- Touch-friendly navigation
- Optimized images and assets
- Fast loading times
- Accessible design patterns

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags and Open Graph
- JSON-LD structured data
- Sitemap generation
- Robot.txt configuration

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit

# Build test
npm run build
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions:
- Create an issue in this repository
- Email: support@analyzebiotech.com
- Documentation: [Link to detailed docs]

---

Built with ❤️ using Next.js and modern web technologies.
