const SITE_URL = process.env.NEXT_PUBLIC_APP_URL!

export const siteConfig = {
  name: 'ADLVA Hospital',
  description: 'Minimally-Invasive LVA for Alzheimer\'s Disease',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  author: 'ADLVA Hospital',
  keywords: [
    'Next.js',
    'Tailwind CSS',
    'LVA Surgery',
    'Alzheimer\'s',
    'International Care',
    '多言語',
  ],
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/og.png`,
  links: {
    twitter: 'https://twitter.com/yourprofile',
    github: 'https://github.com/yourrepo',
  }
}
