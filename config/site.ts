const SITE_URL = process.env.NEXT_PUBLIC_APP_URL!

export const siteConfig = {
  name: 'Aacheng Limited',
  description: 'Your Gateway to Japan - Live, Work, and Discover Japan',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  author: 'Aacheng Limited',
  keywords: [
    'Next.js',
    'Tailwind CSS',
    'Japan Immigration',
    'Japan Business',
    'Japan Real Estate',
    '日本移民',
    '日本投资',
  ],
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/og.png`,
  links: {
    twitter: 'https://twitter.com/yourprofile',
    github: 'https://github.com/yourrepo',
  }
}
