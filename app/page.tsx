'use client'

import { useEffect } from 'react'

export default function RootPage() {
  useEffect(() => {
    // Immediately redirect to Chinese version
    window.location.href = '/zh/'
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p>Redirecting...</p>
      </div>
    </div>
  )
}