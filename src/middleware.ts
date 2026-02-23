import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['es', 'en'];
const defaultLocale = 'es';

function getLocale(request: NextRequest) {
  const headers = { 'accept-language': request.headers.get('accept-language') || '' }
  const languages = new Negotiator({ headers }).languages()
  try {
    return match(languages, locales, defaultLocale)
  } catch (_e) {
    return defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    '/((?!api|_next/static|_next/image|favicon.ico|images|apple-icon.png|manifest.json).*)',
  ],
}
