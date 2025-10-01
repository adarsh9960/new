# 🚖 Elite Cabs 24X7 - Premium Taxi Service Website

A high-end, fully responsive, production-ready website for Elite Cabs 24X7 built with Next.js 15, TypeScript, and Tailwind CSS. This website showcases premium taxi services with modern UI/UX, accessibility features, and SEO optimization.

## ✨ Features

### 🎨 Design & UI/UX
- **Responsive Design**: Mobile-first approach with perfect adaptation across all devices
- **Modern Theme**: Dark navy + gold accent color scheme with white/grey backgrounds
- **Water-fill Buttons**: Custom liquid fill hover animation on all buttons
- **Smooth Animations**: Subtle transitions and micro-interactions using Framer Motion
- **Custom Scrollbar**: Styled scrollbars for better visual consistency

### 📱 Interactive Components
- **Hero Slider**: Swiper.js powered slider with parallax effects, autoplay (1500ms), pause-on-hover
- **Image Carousels**: Multiple auto-swiping carousels for services, fleet, and sightseeing
- **Gallery Lightbox**: Masonry grid with modal lightbox for image viewing
- **Contact Forms**: Comprehensive booking and inquiry forms with validation
- **Rating System**: Interactive star rating with live updates and sharing capabilities

### 🚀 Technical Features
- **Next.js 15**: Latest App Router with server-side rendering
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS 4**: Utility-first styling with custom theme variables
- **Headless CMS**: JSON-based content management system
- **API Routes**: Serverless API endpoints for forms and ratings
- **SEO Optimized**: Meta tags, structured data, sitemap generation

### ♿ Accessibility
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **ARIA Labels**: Proper semantic HTML with ARIA attributes
- **Screen Reader Support**: Compatible with assistive technologies
- **Focus Management**: Logical tab order and focus indicators
- **Color Contrast**: WCAG AA compliant color combinations

### 📊 Performance
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic bundle splitting for optimal loading
- **Caching**: Efficient caching strategies for better performance
- **Core Web Vitals**: Optimized for Lighthouse performance scores

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality accessible components

### UI & Animation
- **Swiper.js** - Modern touch slider library
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful icon library
- **React Icons** - Comprehensive icon collection

### Data & State
- **Zustand** - Lightweight state management
- **TanStack Query** - Server state management
- **Axios** - HTTP client for API requests

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **TypeScript** - Static type checking

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd elite-cabs-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database (if using Prisma)
npm run db:push      # Push schema to database
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run database migrations
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form endpoint
│   │   └── rating/        # Rating system endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Header with navigation
│   │   └── Footer.tsx    # Footer with rating system
│   ├── sections/         # Page sections
│   │   ├── AboutSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── FleetSection.tsx
│   │   ├── GallerySection.tsx
│   │   └── ... (other sections)
│   └── ui-custom/        # Custom UI components
│       ├── FancyButton.tsx
│       ├── HeroSlider.tsx
│       └── ContactForm.tsx
├── data/                 # JSON-based CMS
│   ├── pages.json        # Page content
│   ├── services.json     # Services data
│   ├── fleet.json        # Fleet categories
│   ├── gallery.json      # Gallery images
│   ├── ratings.json      # Customer ratings
│   └── partners.json     # Client partners
├── hooks/                # Custom React hooks
└── lib/                  # Utility functions
```

## 🎨 Key Components

### Header Component
- Sticky navigation with logo
- Responsive menu with mobile hamburger
- Left-side floating contact widget
- WhatsApp and Call quick actions
- Social media integration

### Hero Slider
- 3 layered slides with parallax effects
- Autoplay with 1500ms interval
- Pause on hover functionality
- No visible navigation controls
- Mobile-optimized image display

### Service Sections
- Grid layout for desktop
- Swiper carousel for mobile
- Hover effects and animations
- Call-to-action buttons with water-fill effect

### Gallery System
- Masonry grid layout
- Lightbox modal functionality
- Responsive image handling
- Custom scrollbar styling

### Rating System
- Interactive 5-star rating
- Live counter animations
- Social sharing capabilities
- Persistent data storage

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# AI Integration (Optional)
OPENAI_API_KEY=your_openai_api_key_here

# Email Service (For contact forms)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SMTP_FROM=noreply@elitecabmumbai.com

# Analytics (Optional)
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id

# Application
NEXT_PUBLIC_SITE_URL=https://elitecabmumbai.com
NEXT_PUBLIC_APP_NAME=Elite Cabs 24X7
```

### Theme Customization

The theme is configured in `src/app/globals.css` with CSS custom properties:

```css
:root {
  --primary: #facc15;        /* Gold accent */
  --secondary: #2563eb;      /* Blue accent */
  --background: #ffffff;     /* White background */
  --foreground: #111111;     /* Dark text */
  /* ... more variables */
}
```

## 🚀 Deployment

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Configure environment variables in Vercel dashboard
   - Deploy automatically on push

3. **Environment Variables in Vercel**
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.local`
   - Ensure production values are set

### Build Configuration

The project is optimized for Vercel deployment:

```javascript
// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com', 'demo-web.itzadarsh.co.in'],
  },
  // ... other optimizations
};

export default nextConfig;
```

### Sitemap Generation

Generate sitemap before deployment:

```bash
node generate-sitemap.js
```

This creates `public/sitemap.xml` for better SEO.

## 📊 SEO & Analytics

### Search Engine Optimization
- **Meta Tags**: Dynamic meta tags for each page
- **Structured Data**: JSON-LD for LocalBusiness schema
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Configured for optimal crawling
- **Open Graph**: Social media sharing optimization

### Analytics Integration
- **Google Analytics**: Placeholder for GA4 integration
- **Plausible Analytics**: Alternative analytics option
- **Custom Events**: Track user interactions and conversions

## ♿ Accessibility Features

### Keyboard Navigation
- Full keyboard support for all sliders and carousels
- Logical tab order throughout the application
- Skip links for screen reader users
- Focus indicators on interactive elements

### Screen Reader Support
- ARIA labels and roles on all interactive elements
- Semantic HTML structure
- Alt text for all images
- Live regions for dynamic content updates

### Visual Accessibility
- High color contrast ratios
- Resizable text without breaking layout
- Clear visual hierarchy
- Consistent navigation patterns

## 🎯 Performance Optimization

### Image Optimization
- Next.js Image component with automatic optimization
- Lazy loading for below-the-fold images
- Responsive image sizing
- WebP format support

### Code Optimization
- Tree shaking for unused code
- Minified CSS and JavaScript
- Code splitting for large bundles
- Efficient caching strategies

### Core Web Vitals
- Optimized for Lighthouse scores
- Fast First Contentful Paint (FCP)
- Low Largest Contentful Paint (LCP)
- Minimal Cumulative Layout Shift (CLS)

## 🔧 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow ESLint configuration
- Use Prettier for code formatting
- Write semantic HTML

### Component Structure
- Keep components small and focused
- Use custom hooks for reusable logic
- Implement proper error boundaries
- Add loading states for async operations

### Performance Best Practices
- Use React.memo for expensive components
- Implement proper key props in lists
- Optimize images and assets
- Use useCallback and useMemo appropriately

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **shadcn/ui** - For the beautiful component library
- **Swiper.js** - For the excellent slider library
- **Pexels** - For providing high-quality stock images

## 🚀 Support

For support and questions:
- Email: contact.elitecabsmumbai@gmail.com
- Phone: +91 70217 51691
- WhatsApp: https://wa.me/917021751691

---

Built with ❤️ for Elite Cabs 24X7 - Your premium taxi service partner in Mumbai.
