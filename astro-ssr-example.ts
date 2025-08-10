// Example SSR configuration for Cloudflare Workers
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
// ... other imports

export default defineConfig({
  site: 'https://finance.aurelpop.com',
  output: 'server', // Changed from 'static' to 'server'
  adapter: cloudflare({
    mode: 'directory', // or 'advanced' for more control
    functionPerRoute: false, // Single worker or one per route
    routes: {
      exclude: ['/static/*'], // Exclude static assets
    },
  }),
  // ... rest of your configuration
})
