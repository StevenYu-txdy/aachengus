'use client'

interface ComingSoonProps {
  locale: 'zh' | 'ja' | 'en'
}

export default function ComingSoon({ locale }: ComingSoonProps) {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">
          {locale === 'zh' && '即将上线'}
          {locale === 'ja' && '準備中'}
          {locale === 'en' && 'Coming Soon'}
        </h1>
        <p className="text-gray-600">
          {locale === 'zh' && '该页面正在建设中，敬请期待'}
          {locale === 'ja' && 'このページは现在準備中です'}
          {locale === 'en' && 'This page is under construction'}
        </p>
      </div>
    </main>
  )
}