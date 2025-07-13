import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'zh', 'ja']
const defaultLocale = 'zh'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip middleware during build time
  if (process.env.NODE_ENV === 'production' && request.headers.get('user-agent')?.includes('Next.js')) {
    return NextResponse.next()
  }
  
  // Check if the pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (!pathnameHasLocale) {
    // Allow certain paths to bypass locale redirection
    if (pathname === '/aboutus' || pathname.startsWith('/_next') || pathname.startsWith('/api')) {
      return NextResponse.next()
    }
    
    // Only redirect in browser, not during build
    if (request.headers.get('user-agent') && !request.headers.get('user-agent')?.includes('Next.js')) {
      const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url)
      return NextResponse.redirect(newUrl)
    }
  }

  // Allow the request to proceed
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match only pages, not static files or API routes
    '/((?!api|_next|favicon.ico|.*\\.jpg|.*\\.jpeg|.*\\.png|.*\\.gif|.*\\.svg|.*\\.webp|.*\\.ico|images|services|conditions).*)',
  ],
}