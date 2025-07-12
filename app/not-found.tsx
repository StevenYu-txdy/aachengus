// app/not-found.tsx
// This file should be at the root of the app directory, not inside [locale]
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-green-600">404</h1>
      <h2 className="text-2xl font-semibold mt-4 mb-2">Page Not Found</h2>
      <p className="text-center mb-8 max-w-md">
        Sorry, we couldn't find the page you're looking for. 
        Perhaps you've mistyped the URL or the page has moved.
      </p>
      <a 
        href="/" 
        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition-colors"
      >
        Go Back Home
      </a>
    </div>
  );
} 