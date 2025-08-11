import type { APIRoute } from 'astro'

export const GET: APIRoute = () => {
  const body = JSON.stringify({
    name: 'finance.aurelpop.com',
    short_name: 'finance',
    icons: [
      { src: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
  })
  return new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'application/manifest+json' },
  })
}


