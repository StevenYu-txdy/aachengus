'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AboutUsPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/aboutus');
  }, [router]);

  return null;
}