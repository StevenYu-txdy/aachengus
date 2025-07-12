import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'zh', 'ja']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Debug log
  console.log('Middleware processing:', {
    pathname,
    url: request.url,
    method: request.method,
    headers: Object.fromEntries(request.headers.entries())
  })
  
  // Check if the pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // Debug log
  console.log('Pathname locale check:', {
    pathnameHasLocale,
    pathname
  })

  if (!pathnameHasLocale) {
    // Allow certain paths to bypass locale redirection
    if (pathname === '/aboutus') {
      return NextResponse.next()
    }
    
    // Redirect to default locale if no locale in pathname
    const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url)
    console.log('Redirecting to:', newUrl.toString())
    return NextResponse.redirect(newUrl)
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
