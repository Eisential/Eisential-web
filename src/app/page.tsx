'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { LoginCard } from '@/src/components/LoginCard';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </main>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <LoginCard />
      </main>
    );
  }

  return null;
}