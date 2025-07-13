'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function RootPage() {
  useEffect(() => {
    // Auto redirect to Chinese version after 2 seconds
    const timer = setTimeout(() => {
      window.location.href = '/zh/'
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md mx-4">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-2xl font-bold">A</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">AACHENG LIMITED</h1>
        <p className="text-gray-600 mb-6">Choose your language / 选择语言 / 言語を選択</p>
        
        <div className="space-y-3">
          <Link 
            href="/zh" 
            className="block w-full py-3 px-6 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
          >
            中文
          </Link>
          <Link 
            href="/en" 
            className="block w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            English
          </Link>
          <Link 
            href="/ja" 
            className="block w-full py-3 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            日本語
          </Link>
        </div>
        
        <p className="text-sm text-gray-500 mt-6">
          Auto redirecting to Chinese in 2 seconds...
        </p>
      </div>
    </div>
  )
}