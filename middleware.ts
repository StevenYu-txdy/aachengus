import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 支持的语言列表
const supportedLocales = ['en', 'zh', 'ja'];

// 获取请求的语言偏好
function getLocale(request: NextRequest) {
  // 从请求头中获取Accept-Language
  const acceptLanguage = request.headers.get('accept-language');
  
  if (acceptLanguage) {
    // 解析Accept-Language头，格式如: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
    const locales = acceptLanguage.split(',').map(item => {
      const [locale, q = 'q=1.0'] = item.trim().split(';');
      const quality = parseFloat(q.split('=')[1]);
      return { locale: locale.split('-')[0], quality };
    }).sort((a, b) => b.quality - a.quality);
    
    // 查找第一个支持的语言
    for (const { locale } of locales) {
      if (supportedLocales.includes(locale)) {
        return locale;
      }
    }
  }
  
  // 默认返回英文
  return 'en';
}

export function middleware(request: NextRequest) {
  // 获取当前路径
  const pathname = request.nextUrl.pathname;
  
  // 如果是根路径，则根据浏览器语言重定向
  if (pathname === '/') {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }
  
  // 对于其他路径，不做处理
  return NextResponse.next();
}

// 配置匹配的路径
export const config = {
  matcher: ['/']
};