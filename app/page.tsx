'use client'

import { useEffect } from 'react'

export default function RootPage() {
  useEffect(() => {
    // Client-side redirect to Chinese version
    window.location.href = '/zh/'
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">正在跳转...</h1>
        <p className="text-gray-600">Redirecting to Chinese version...</p>
      </div>
    </div>
  )
}