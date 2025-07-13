'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const pathname = usePathname()
  const locale = pathname?.startsWith('/zh') ? 'zh' : 'en'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  // Navigation items for different locales
  const navigationItems = {
    zh: [
      { englishTitle: 'ABOUT US', name: '关于我们', href: '/zh/aboutus' },
      { englishTitle: 'INNOVATION TOUR', name: '日本考察项目', href: '/zh/japan-innovation-tour' },
      { englishTitle: 'CONTACT US', name: '联系我们', href: '/zh/contact' }
    ],
    en: [
      { name: 'About Us', href: '/en/aboutus' },
      { name: 'Live in Japan', href: '/en/services/live-in-japan' },
      { name: 'Work in Japan', href: '/en/services/work-in-japan' },
      { name: 'Contact Us', href: '/en/contact' }
    ]
  }

  const currentNavItems = navigationItems[locale as keyof typeof navigationItems]

  const companyName = {
    zh: 'AACHENG LIMITED',
    en: 'AACHENG LIMITED'
  }

  const languageOptions = [
    { code: 'zh', name: '中文' },
    { code: 'en', name: 'English' }
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">A</span>
              </div>
              <div className="flex flex-col hidden sm:block">
                <span className="text-2xl font-bold text-black">
                  {companyName[locale as keyof typeof companyName]}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {currentNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 transition-colors duration-200 hover:opacity-80"
              >
                {locale === 'en' ? (
                  <div className="text-center">
                    <span className="text-red-600 font-bold text-base uppercase tracking-wide">
                      {item.name}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-center">
                    <span className="text-red-600 font-bold text-base uppercase tracking-wide">
                      {'englishTitle' in item ? item.englishTitle : item.name}
                    </span>
                    <span className="text-gray-800 text-sm mt-1">
                      {item.name}
                    </span>
                  </div>
                )}
              </Link>
            ))}
          </nav>

          {/* Language Switcher and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-bold text-red-600 hover:text-red-800 transition-colors duration-200"
              >
                <span className="hidden sm:block">
                  {languageOptions.find(lang => lang.code === locale)?.name}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                  {languageOptions.map((lang) => (
                    <Link
                      key={lang.code}
                      href={`/${lang.code}`}
                      className={`flex items-center space-x-2 px-4 py-2 text-sm font-bold hover:bg-gray-50 ${
                        locale === lang.code ? 'bg-red-50 text-red-600' : 'text-gray-700'
                      }`}
                      onClick={() => setIsLangOpen(false)}
                    >
                      <span>{lang.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {currentNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {locale === 'en' ? (
                    <div>
                      <span className="text-red-600 font-bold text-base uppercase tracking-wide">
                        {item.name}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <span className="text-red-600 font-bold text-base uppercase tracking-wide">
                        {'englishTitle' in item ? item.englishTitle : item.name}
                      </span>
                      <span className="text-gray-800 text-sm mt-1">
                        {item.name}
                      </span>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header