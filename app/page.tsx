import Link from 'next/link'

export default function RootPage() {
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