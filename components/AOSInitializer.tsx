'use client';

import { useEffect } from 'react';
import AOS from 'aos';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return null; // This component doesn't render anything
} 