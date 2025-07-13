'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()
  const [showLanguageSelector, setShowLanguageSelector] = useState(false)

  useEffect(() => {
    // 检测浏览器语言偏好
    const detectLanguage = () => {
      if (typeof window === 'undefined') return 'en'
      
      const browserLang = navigator.language || navigator.languages?.[0] || 'en'
      
      // 根据浏览器语言映射到支持的语言
      if (browserLang.startsWith('zh')) {
        return 'zh'
      } else if (browserLang.startsWith('ja')) {
        return 'ja'
      } else {
        return 'en'
      }
    }

    // 检查是否已经访问过（避免无限重定向）
    const hasVisited = sessionStorage.getItem('language-redirected')
    
    if (!hasVisited) {
      const detectedLang = detectLanguage()
      sessionStorage.setItem('language-redirected', 'true')
      router.push(`/${detectedLang}`)
    } else {
      // 如果已经访问过，显示语言选择器
      setShowLanguageSelector(true)
    }
  }, [router])

  if (!showLanguageSelector) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Aacheng</h1>
        <p className="text-gray-600 mb-8">Please select your preferred language</p>
        <div className="space-y-4">
          <Link 
            href="/zh" 
            className="block w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            中文 (Chinese)
          </Link>
          <Link 
            href="/en" 
            className="block w-full py-3 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            English
          </Link>
          <Link 
            href="/ja" 
            className="block w-full py-3 px-6 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            日本語 (Japanese)
          </Link>
        </div>
      </div>
    </div>
  )
}