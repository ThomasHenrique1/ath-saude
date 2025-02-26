// src/app/hooks/useAuth.ts
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '../lib/auth';

export const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
    }
  }, [router]);
};