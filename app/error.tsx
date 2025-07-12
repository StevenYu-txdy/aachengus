'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Something went wrong!</h1>
      <p className="text-lg text-center text-gray-700 mb-6">
        We encountered an unexpected issue. Please try again, or contact support if the problem persists.
      </p>
      {error?.message && (
        <p className="text-sm text-red-500 mb-2">Error: {error.message}</p>
      )}
      <button
        onClick={() => reset()} // Attempt to recover by trying to re-render the segment
        className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition-colors"
      >
        Try Again
      </button>
      <a 
        href="/" 
        className="mt-4 px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg shadow hover:bg-gray-600 transition-colors"
      >
        Go Back Home
      </a>
    </div>
  );
} 