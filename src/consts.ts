import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'finance.aurelpop.com',
  description:
    'Your essential guide to understanding and capitalizing on the convergence of AI in trading and investing.',
  href: 'https://finance.aurelpop.com',
  author: 'Aurel',
  locale: 'en-US',
  featuredPostCount: 3,
  postsPerPage: 5,
}
export const NAV_LINKS: SocialLink[] = [
  {
    href: '/tags/ai',
    label: 'ai',
  },
  {
    href: '/tags/trading',
    label: 'trading',
  },
  {
    href: '/tags/investing',
    label: 'investing',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://x.com/pop_aurel',
    label: 'Twitter',
  },
  {
    href: 'https://github.com/popaurel',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/aurel-p/',
    label: 'LinkedIn',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  X: 'lucide:x',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
