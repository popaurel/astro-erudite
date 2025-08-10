# Cloudflare Pages Deployment Configuration

## Configuration Summary

This Astro project is configured for **Static Site Generation (SSG)** to achieve optimal performance on Cloudflare Pages.

### Why SSG?
- **Best performance**: All pages are pre-built and served directly from Cloudflare's global CDN
- **Instant page loads**: No server-side rendering delay
- **Lower costs**: No compute time needed on Cloudflare Workers
- **Perfect for content sites**: Ideal for your finance website with relatively static content

## Astro Configuration

The project is configured with:
- `output: 'static'` - Explicitly set for static generation
- `site: 'https://finance.aurelpop.com'` - Your production URL
- `build.inlineStylesheets: 'auto'` - Optimizes CSS delivery for better performance
- `prefetch` enabled - Preloads pages for faster navigation

## Cloudflare Pages Settings

When setting up your Cloudflare Pages project, use these settings:

### Build Configuration
- **Framework preset**: None (or Astro if available)
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (or leave empty)
- **Node.js version**: 18 or higher

### Environment Variables (if needed)
```
NODE_VERSION=18
```

## Deployment Steps

1. **Connect your GitHub repository** to Cloudflare Pages
2. **Configure build settings** as specified above
3. **Deploy** - Cloudflare will automatically build and deploy your site

## Build Output

The static build creates:
- HTML files for all pages
- Optimized assets in `/_astro/` directory
- Sitemap and RSS feed
- All static assets (fonts, images, etc.)

## Performance Optimizations Included

- ✅ Static HTML generation for fastest loading
- ✅ Automatic CSS inlining for critical styles
- ✅ Image optimization with WebP format
- ✅ Prefetching for instant navigation
- ✅ Sitemap generation for SEO

## Local Testing

To test the production build locally:
```bash
npm run build
npm run preview
```

## Notes

- No Cloudflare adapter needed for static sites
- All pages are pre-rendered at build time
- Perfect for content that doesn't change frequently
- If you need dynamic features later, you can switch to SSR with `@astrojs/cloudflare` adapter
